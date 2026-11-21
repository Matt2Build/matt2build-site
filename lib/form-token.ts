import { createHmac, timingSafeEqual } from 'crypto'

const MIN_AGE_MS = 3_000
const MAX_AGE_MS = 2 * 60 * 60 * 1000

export type TokenCheck = 'ok' | 'skipped' | 'too-fast' | 'expired' | 'invalid'

export function formSigningSecret(): string | null {
  const secret = process.env.FORM_SIGNING_SECRET
  if (!secret || secret.length < 16) return null
  return secret
}

export function issueFormToken(now = Date.now()): string {
  const secret = formSigningSecret()
  if (!secret) return ''
  const issued = String(now)
  const signature = createHmac('sha256', secret).update(issued).digest('base64url')
  return `${issued}.${signature}`
}

export function verifyFormToken(token: unknown, now = Date.now()): TokenCheck {
  const secret = formSigningSecret()
  if (!secret) return 'skipped'
  if (typeof token !== 'string' || !token.includes('.')) return 'invalid'
  const dot = token.indexOf('.')
  const issued = token.slice(0, dot)
  const signature = token.slice(dot + 1)
  const expected = createHmac('sha256', secret).update(issued).digest('base64url')
  const actualBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expected)
  if (actualBuffer.length !== expectedBuffer.length || !timingSafeEqual(actualBuffer, expectedBuffer)) {
    return 'invalid'
  }
  const issuedAt = Number(issued)
  if (!Number.isFinite(issuedAt)) return 'invalid'
  const age = now - issuedAt
  if (age < MIN_AGE_MS) return 'too-fast'
  if (age > MAX_AGE_MS) return 'expired'
  return 'ok'
}
