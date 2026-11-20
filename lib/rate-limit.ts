const WINDOW_MS = 60 * 60 * 1000
const MAX_HITS = 8
const hits = new Map<string, number[]>()

export function isRateLimited(key: string): boolean {
  const now = Date.now()
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

export function clientAddress(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first.slice(0, 80)
  }
  return headers.get('x-real-ip')?.slice(0, 80) || 'unknown'
}
