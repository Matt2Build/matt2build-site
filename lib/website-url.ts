import { sanitizeSingleLine } from '@/lib/email-sanitize'

export function normalizeWebsiteUrl(value: unknown): string {
  const raw = sanitizeSingleLine(value, 300)
  if (!raw || /\s/.test(raw)) return ''
  let url: URL
  try {
    url = new URL(raw.includes('://') ? raw : `https://${raw}`)
  } catch {
    return ''
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return ''
  if (url.username || url.password) return ''
  const host = url.hostname.toLowerCase()
  if (!host.includes('.') || host.endsWith('.') || host.includes('..')) return ''
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host) || host.includes(':')) return ''
  if (host === 'localhost' || host.endsWith('.local') || host.endsWith('.localhost')) return ''
  url.hash = ''
  return url.toString().slice(0, 300)
}
