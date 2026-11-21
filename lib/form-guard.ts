import { sanitizePlainText, sanitizeSingleLine } from '@/lib/email-sanitize'
import { verifyFormToken } from '@/lib/form-token'
import { clientAddress, dailySendBlocked, ipRateLimited } from '@/lib/send-limit'
import { verifyTurnstile } from '@/lib/turnstile'
import { normalizeWebsiteUrl } from '@/lib/website-url'

const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const LINK_PATTERN = /https?:\/\/|www\./gi

const LIMITS = {
  name: 100,
  email: 254,
  market: 160,
  message: 4000,
  goals: 4000,
  website: 300,
  brokerage: 160,
  disclosures: 1000,
  areas: 300,
  bio: 4000,
  contactShown: 500,
  registrar: 160,
  styleNotes: 800,
  likedSites: 800,
  extraPages: 800,
}

export type GuardFailure = {
  ok: false
  status: number
  error: string
  silent?: boolean
}

export type ContactFields = {
  name: string
  email: string
  market: string
  message: string
}

export type TeardownFields = {
  name: string
  email: string
  website: string
  market: string
  goals: string
}

export type StartFields = {
  name: string
  email: string
  brokerage: string
  disclosures: string
  areas: string
  logo: string
  headshot: string
  bio: string
  contactShown: string
  existingSite: string
  registrar: string
  styleNotes: string
  likedSites: string
  extraPages: string
}

export type GuardSuccess<T> = { ok: true; fields: T }

const PRODUCTION_HOSTS = new Set([
  'brokerworkshop.com',
  'www.brokerworkshop.com',
  'matt2build.com',
  'www.matt2build.com',
])

export function isAllowedFormHost(hostname: string): boolean {
  const host = hostname.toLowerCase()
  if (PRODUCTION_HOSTS.has(host)) return true
  if (host.endsWith('.vercel.app') && host.startsWith('matt2build-site')) return true
  if (process.env.NODE_ENV !== 'production' && (host === 'localhost' || host === '127.0.0.1')) return true
  return false
}

export function originAllowed(headers: Headers): boolean {
  const candidate = headers.get('origin') || headers.get('referer')
  if (!candidate) return false
  try {
    return isAllowedFormHost(new URL(candidate).hostname)
  } catch {
    return false
  }
}

export function exceedsCap(value: unknown, max: number): boolean {
  return typeof value === 'string' && value.length > max
}

export function linkCount(text: string): number {
  return text.match(LINK_PATTERN)?.length ?? 0
}

export function isLinkHeavy(parts: string[]): boolean {
  return linkCount(parts.join('\n')) > 2
}

function fail(status: number, error: string, silent = false): GuardFailure {
  return { ok: false, status, error, silent }
}

function sharedChecks(headers: Headers, data: Record<string, unknown>, now: number): GuardFailure | null {
  if (typeof data.fax_number === 'string' && data.fax_number.trim() !== '') {
    return fail(200, '', true)
  }
  if (!originAllowed(headers)) {
    return fail(403, 'This form only accepts submissions from brokerworkshop.com.')
  }
  const timed = verifyFormToken(data.form_token, now)
  if (timed === 'too-fast') return fail(400, 'Please wait a moment and try again.')
  if (timed === 'expired' || timed === 'invalid') return fail(400, 'Please reload the page and try again.')
  return null
}

export function guardContact(
  headers: Headers,
  data: Record<string, unknown>,
  now = Date.now(),
): GuardSuccess<ContactFields> | GuardFailure {
  const blocked = sharedChecks(headers, data, now)
  if (blocked) return blocked

  if (
    exceedsCap(data.name, LIMITS.name) ||
    exceedsCap(data.email, LIMITS.email) ||
    exceedsCap(data.market, LIMITS.market) ||
    exceedsCap(data.message, LIMITS.message)
  ) {
    return fail(400, 'That message is too long.')
  }

  const name = sanitizeSingleLine(data.name, LIMITS.name)
  const email = sanitizeSingleLine(data.email, LIMITS.email)
  const market = sanitizeSingleLine(data.market, LIMITS.market)
  const message = sanitizePlainText(data.message, LIMITS.message)

  if (!name || !email || !market || !message) {
    return fail(400, 'Name, email, market, and message are required')
  }
  if (!EMAIL_PATTERN.test(email)) {
    return fail(400, 'Please provide a valid email address')
  }
  if (isLinkHeavy([name, email, market, message])) {
    return fail(400, 'Please remove extra links and try again.')
  }
  return { ok: true, fields: { name, email, market, message } }
}

export function guardTeardown(
  headers: Headers,
  data: Record<string, unknown>,
  now = Date.now(),
): GuardSuccess<TeardownFields> | GuardFailure {
  const blocked = sharedChecks(headers, data, now)
  if (blocked) return blocked

  if (
    exceedsCap(data.name, LIMITS.name) ||
    exceedsCap(data.email, LIMITS.email) ||
    exceedsCap(data.website, LIMITS.website) ||
    exceedsCap(data.market, LIMITS.market) ||
    exceedsCap(data.goals, LIMITS.goals)
  ) {
    return fail(400, 'That message is too long.')
  }

  const name = sanitizeSingleLine(data.name, LIMITS.name)
  const email = sanitizeSingleLine(data.email, LIMITS.email)
  const website = normalizeWebsiteUrl(data.website)
  const market = sanitizeSingleLine(data.market, LIMITS.market)
  const goals = sanitizePlainText(data.goals, LIMITS.goals)

  if (!name || !email || !website) {
    return fail(400, 'Name, email, and a website URL are required')
  }
  if (!EMAIL_PATTERN.test(email)) {
    return fail(400, 'Please provide a valid email address')
  }
  if (isLinkHeavy([name, email, market, goals])) {
    return fail(400, 'Please remove extra links and try again.')
  }
  return { ok: true, fields: { name, email, website, market, goals } }
}

function blankOrUrl(value: unknown): string | null {
  const raw = sanitizeSingleLine(value, LIMITS.website)
  if (!raw || raw.toLowerCase() === 'none') return ''
  const url = normalizeWebsiteUrl(raw)
  return url || null
}

export function guardStart(
  headers: Headers,
  data: Record<string, unknown>,
  now = Date.now(),
): GuardSuccess<StartFields> | GuardFailure {
  const blocked = sharedChecks(headers, data, now)
  if (blocked) return blocked

  const capped =
    exceedsCap(data.name, LIMITS.name) ||
    exceedsCap(data.email, LIMITS.email) ||
    exceedsCap(data.brokerage, LIMITS.brokerage) ||
    exceedsCap(data.disclosures, LIMITS.disclosures) ||
    exceedsCap(data.areas, LIMITS.areas) ||
    exceedsCap(data.bio, LIMITS.bio) ||
    exceedsCap(data.contact_shown, LIMITS.contactShown) ||
    exceedsCap(data.logo_url, LIMITS.website) ||
    exceedsCap(data.headshot_url, LIMITS.website) ||
    exceedsCap(data.existing_site, LIMITS.website) ||
    exceedsCap(data.registrar, LIMITS.registrar) ||
    exceedsCap(data.style_notes, LIMITS.styleNotes) ||
    exceedsCap(data.liked_sites, LIMITS.likedSites) ||
    exceedsCap(data.extra_pages, LIMITS.extraPages)
  if (capped) return fail(400, 'That message is too long.')

  const name = sanitizeSingleLine(data.name, LIMITS.name)
  const email = sanitizeSingleLine(data.email, LIMITS.email)
  const brokerage = sanitizeSingleLine(data.brokerage, LIMITS.brokerage)
  const disclosures = sanitizePlainText(data.disclosures, LIMITS.disclosures)
  const areas = sanitizeSingleLine(data.areas, LIMITS.areas)
  const contactShown = sanitizePlainText(data.contact_shown, LIMITS.contactShown)
  const registrar = sanitizeSingleLine(data.registrar, LIMITS.registrar) || 'Not provided'
  const styleNotes = sanitizePlainText(data.style_notes, LIMITS.styleNotes) || 'Not provided'
  const likedSites = sanitizePlainText(data.liked_sites, LIMITS.likedSites) || 'Not provided'
  const extraPages = sanitizePlainText(data.extra_pages, LIMITS.extraPages) || 'Not provided'
  const writeBio = data.write_bio === true

  if (!name || !email || !brokerage || !disclosures || !areas || !contactShown) {
    return fail(400, 'Name, email, brokerage, disclosures, areas, and contact info are required')
  }
  if (!EMAIL_PATTERN.test(email)) {
    return fail(400, 'Please provide a valid email address')
  }

  const logoChoice = data.logo_choice === 'none' || data.logo_choice === 'link' ? data.logo_choice : ''
  if (!logoChoice) return fail(400, 'Say whether you have a logo link, or choose none.')
  let logo = 'None'
  if (logoChoice === 'link') {
    const logoUrl = blankOrUrl(data.logo_url)
    if (!logoUrl) return fail(400, 'Paste a link to your logo, or choose none.')
    logo = logoUrl
  }

  const headshotUrl = blankOrUrl(data.headshot_url)
  if (headshotUrl === null) return fail(400, 'That headshot link is not a web address.')
  const headshot = headshotUrl || 'None'

  const existingRaw = sanitizeSingleLine(data.existing_site, LIMITS.website)
  let existingSite = 'None'
  if (existingRaw && existingRaw.toLowerCase() !== 'none') {
    const existingUrl = normalizeWebsiteUrl(existingRaw)
    if (!existingUrl) return fail(400, 'That website or domain is not a web address.')
    existingSite = existingUrl
  }

  const bioText = sanitizePlainText(data.bio, LIMITS.bio)
  const bio = writeBio ? (bioText ? `Write it for me. Notes: ${bioText}` : 'Write it for me.') : bioText
  if (!bio) return fail(400, 'Add a bio, or choose write it for me.')

  if (isLinkHeavy([name, email, brokerage, disclosures, areas, bio, contactShown, styleNotes, extraPages])) {
    return fail(400, 'Please remove extra links and try again.')
  }

  return {
    ok: true,
    fields: {
      name,
      email,
      brokerage,
      disclosures,
      areas,
      logo,
      headshot,
      bio,
      contactShown,
      existingSite,
      registrar,
      styleNotes,
      likedSites,
      extraPages,
    },
  }
}

export async function enforceSubmissionLimits(request: Request, now = Date.now()): Promise<GuardFailure | null> {
  const ip = clientAddress(request.headers)
  if (await ipRateLimited(request, ip)) {
    return fail(429, 'Please wait and try again.')
  }
  if (dailySendBlocked(now)) {
    return fail(429, 'The form is paused for today. Email matt2build@gmail.com instead.')
  }
  return null
}

export async function decideContact(
  request: Request,
  data: Record<string, unknown>,
  now = Date.now(),
): Promise<GuardSuccess<ContactFields> | GuardFailure> {
  const guarded = guardContact(request.headers, data, now)
  if (!guarded.ok) return guarded
  if (!(await verifyTurnstile(data.turnstile_token, clientAddress(request.headers)))) {
    return fail(400, 'Please confirm you are a person and try again.')
  }
  const limited = await enforceSubmissionLimits(request, now)
  return limited ?? guarded
}

export async function decideStart(
  request: Request,
  data: Record<string, unknown>,
  now = Date.now(),
): Promise<GuardSuccess<StartFields> | GuardFailure> {
  const guarded = guardStart(request.headers, data, now)
  if (!guarded.ok) return guarded
  const limited = await enforceSubmissionLimits(request, now)
  return limited ?? guarded
}

export async function decideTeardown(
  request: Request,
  data: Record<string, unknown>,
  now = Date.now(),
): Promise<GuardSuccess<TeardownFields> | GuardFailure> {
  const guarded = guardTeardown(request.headers, data, now)
  if (!guarded.ok) return guarded
  if (!(await verifyTurnstile(data.turnstile_token, clientAddress(request.headers)))) {
    return fail(400, 'Please confirm you are a person and try again.')
  }
  const limited = await enforceSubmissionLimits(request, now)
  return limited ?? guarded
}
