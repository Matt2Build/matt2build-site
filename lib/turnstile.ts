export function turnstileConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY)
}

export async function verifyTurnstile(token: unknown, ip: string): Promise<boolean> {
  if (!turnstileConfigured()) return true
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret || typeof token !== 'string' || token.length < 10 || token.length > 2048) return false

  try {
    const body = new URLSearchParams({
      secret,
      response: token,
    })
    if (ip && ip !== 'unknown') body.set('remoteip', ip)

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    if (!response.ok) return false
    const payload = (await response.json()) as { success?: boolean }
    return payload.success === true
  } catch {
    return false
  }
}
