import { decideContact, decideTeardown, isAllowedFormHost } from '../lib/form-guard.ts'
import { issueFormToken } from '../lib/form-token.ts'
import { dailySendBlocked, isRateLimited, limitWithFallback, resetMemoryLimits } from '../lib/send-limit.ts'
import { turnstileConfigured } from '../lib/turnstile.ts'

process.env.FORM_SIGNING_SECRET = 'test-signing-secret-value'
delete process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
delete process.env.TURNSTILE_SECRET_KEY
process.env.NODE_ENV = 'test'

const failures: string[] = []

function check(name: string, condition: boolean) {
  if (!condition) failures.push(name)
  else console.log(`ok ${name}`)
}

function formRequest(origin: string, ip = '203.0.113.10') {
  return new Request('https://matt2build.com/api/contact', {
    method: 'POST',
    headers: {
      origin,
      'x-forwarded-for': ip,
      'x-real-ip': ip,
    },
  })
}

function contactBody(now: number, extra: Record<string, unknown> = {}) {
  return {
    name: 'Ada Agent',
    email: 'ada@example.com',
    market: 'Lakeview',
    message: 'I want a site for my listings.',
    fax_number: '',
    form_token: issueFormToken(now - 5_000),
    ...extra,
  }
}

const now = Date.now()
resetMemoryLimits()

const accepted = await decideContact(formRequest('https://matt2build.com'), contactBody(now), now)
check('normal contact accepted', accepted.ok === true)
check('normal contact would send', accepted.ok === true && accepted.fields.email === 'ada@example.com')

const honeypot = await decideContact(
  formRequest('https://evil.example'),
  contactBody(now, { fax_number: 'bot' }),
  now,
)
check('honeypot silent success', honeypot.ok === false && honeypot.silent === true && honeypot.status === 200)

const tooFast = await decideContact(
  formRequest('https://matt2build.com'),
  contactBody(now, { form_token: issueFormToken(now) }),
  now,
)
check('too fast rejected', tooFast.ok === false && tooFast.status === 400)

const badOrigin = await decideContact(formRequest('https://evil.example'), contactBody(now), now)
check('bad origin rejected', badOrigin.ok === false && badOrigin.status === 403)

const missingOrigin = await decideContact(
  new Request('https://matt2build.com/api/contact', { method: 'POST' }),
  contactBody(now),
  now,
)
check('missing origin rejected', missingOrigin.ok === false && missingOrigin.status === 403)

const oversized = await decideContact(
  formRequest('https://www.matt2build.com'),
  contactBody(now, { message: 'a'.repeat(4001) }),
  now,
)
check('oversized rejected', oversized.ok === false && oversized.status === 400)

const linkSpam = await decideContact(
  formRequest('https://matt2build.com'),
  contactBody(now, {
    message: 'See https://a.example and https://b.example and www.c.example',
  }),
  now,
)
check('link spam rejected', linkSpam.ok === false && linkSpam.status === 400)

const expired = await decideContact(
  formRequest('https://matt2build.com'),
  contactBody(now, { form_token: issueFormToken(now - 3 * 60 * 60 * 1000) }),
  now,
)
check('expired token rejected', expired.ok === false && expired.status === 400)

check('preview host allowed', isAllowedFormHost('matt2build-site-git-form.vercel.app'))
check('other vercel host rejected', isAllowedFormHost('other-project.vercel.app') === false)
check('turnstile stays off without keys', turnstileConfigured() === false)

resetMemoryLimits()
let limitedOn = 0
for (let attempt = 1; attempt <= 9; attempt += 1) {
  const result = await decideContact(formRequest('https://matt2build.com', '203.0.113.20'), contactBody(now), now)
  if (!result.ok && result.status === 429) limitedOn = attempt
}
check('rate limit triggers on the 9th submit', limitedOn === 9)

resetMemoryLimits()
let dailyBlockedAt = 0
for (let attempt = 1; attempt <= 41; attempt += 1) {
  if (dailySendBlocked(now) && dailyBlockedAt === 0) dailyBlockedAt = attempt
}
check('daily cap blocks the 41st send', dailyBlockedAt === 41)

let memoryCalls = 0
const missingRule = await limitWithFallback(
  async () => ({ rateLimited: false, error: 'not-found' as const }),
  () => {
    memoryCalls += 1
    return false
  },
)
check('missing firewall rule uses memory', missingRule === false && memoryCalls === 1)

const thrown = await limitWithFallback(
  async () => {
    throw new Error('timeout')
  },
  () => false,
)
check('firewall error uses memory', thrown === false)

const blocked = await limitWithFallback(async () => ({ rateLimited: true }), () => false)
check('firewall block is honored', blocked === true)

const previousEnv = process.env.NODE_ENV
process.env.NODE_ENV = 'production'
let productionMemory = 0
const allowed = await limitWithFallback(
  async () => ({ rateLimited: false }),
  () => {
    productionMemory += 1
    return true
  },
)
process.env.NODE_ENV = previousEnv
check('published allow does not spend memory', allowed === false && productionMemory === 0)

resetMemoryLimits()
const teardown = await decideTeardown(
  formRequest('https://matt2build-site-abc123.vercel.app'),
  {
    name: 'Ada Agent',
    email: 'ada@example.com',
    website: 'https://ada.example',
    market: 'Lakeview',
    goals: 'A clearer home page.',
    fax_number: '',
    form_token: issueFormToken(now - 4_000),
  },
  now,
)
check('normal teardown accepted', teardown.ok === true)

const direct = isRateLimited('form:direct-test', now)
check('memory limiter allows the first hit', direct === false)

const config = (await import('../next.config.mjs')).default
const closed = await config.headers()
const closedCsp = closed[0].headers.find((header: { key: string }) => header.key === 'Content-Security-Policy').value
check('csp stays closed without turnstile', !closedCsp.includes('cloudflare'))
process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY = 'not-a-real-site-key'
const open = await config.headers()
const openCsp = open[0].headers.find((header: { key: string }) => header.key === 'Content-Security-Policy').value
delete process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
check('csp allows only the turnstile host when enabled', openCsp.includes('https://challenges.cloudflare.com') && openCsp.includes("connect-src 'self' https://challenges.cloudflare.com"))

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log('form abuse checks passed')
