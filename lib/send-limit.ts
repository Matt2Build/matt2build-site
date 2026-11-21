const WINDOW_MS = 60 * 60 * 1000
const MAX_HITS = 8
const DAILY_CAP = 40

const hits = new Map<string, number[]>()
let dailyKey = ''
let dailyCount = 0

export type RateLimitResult = {
  rateLimited: boolean
  error?: 'not-found' | 'blocked'
}

export function isRateLimited(key: string, now = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS)
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent)
    return true
  }
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 5000) {
    const oldest = hits.keys().next().value
    if (oldest) hits.delete(oldest)
  }
  return false
}

export function resetMemoryLimits(): void {
  hits.clear()
  dailyKey = ''
  dailyCount = 0
}

export function clientAddress(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first.slice(0, 80)
  }
  return headers.get('x-real-ip')?.slice(0, 80) || 'unknown'
}

function memoryDailyBlocked(now: number): boolean {
  const key = new Date(now).toISOString().slice(0, 10)
  if (key !== dailyKey) {
    dailyKey = key
    dailyCount = 0
  }
  if (dailyCount >= DAILY_CAP) return true
  dailyCount += 1
  return false
}

/**
 * True when this request should be blocked.
 * A missing firewall rule, a timeout, or any thrown error uses `memory`.
 * A published rule that allows the request does not also spend the memory counter.
 * Outside production the SDK does not call Vercel, so the memory limiter is used.
 */
export async function limitWithFallback(
  check: () => Promise<RateLimitResult>,
  memory: () => boolean,
): Promise<boolean> {
  try {
    const result = await check()
    if (result.error === 'not-found') return memory()
    if (result.rateLimited) return true
    if (process.env.NODE_ENV !== 'production') return memory()
    return false
  } catch {
    return memory()
  }
}

async function firewallCheck(rateLimitId: string, request: Request, rateLimitKey?: string): Promise<RateLimitResult> {
  const { checkRateLimit } = await import('@vercel/firewall')
  return checkRateLimit(rateLimitId, {
    request,
    timeout: 1000,
    ...(rateLimitKey ? { rateLimitKey } : {}),
  })
}

export async function ipRateLimited(request: Request, ip: string): Promise<boolean> {
  return limitWithFallback(
    () => firewallCheck('matt2build-form-ip', request),
    () => isRateLimited(`form:${ip}`),
  )
}

export function dailySendBlocked(now = Date.now()): boolean {
  return memoryDailyBlocked(now)
}
