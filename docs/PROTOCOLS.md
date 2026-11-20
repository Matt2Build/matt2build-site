# Matt2Build protocols

These are the standing rules for every Matt2Build build and hosting decision. They apply to this site and to every client site that follows.

## Profitability

Everything stays cost effective without sacrificing feature or function. Backend and cloud services must never make us lose money. Any hosted site with any monthly cost needs a retainer.

## Hosting stack and cost guardrails

- Vercel Pro is shared by all client projects. Do not open a new Vercel team or a new paid plan per client.
- Each Vercel project gets a spend budget so one site cannot run the shared bill up.
- One shared Supabase project is the only database, and only for clients who need a database. Never open a new $10/month Supabase project per client.
- Each business gets its own email-sending account. Do not share one sending quota across businesses. This site and MoverMath currently share a Resend free quota of 100 emails a day. This site caps its own form mail at 40 a day so a flood here cannot use that whole quota. A new client business does not join that account.
- PostHog is one shared project, filtered by domain. Do not open a new PostHog project per site.
- AI features are capped. A feature that calls a paid model needs a hard usage cap before it ships, and it ships only when the retainer covers that cost.

## Abuse protection for every form and API

Every form and public API on every client site gets this set. Skip one only when Matt says so in writing.

1. A honeypot field. A filled honeypot returns success and sends nothing.
2. A strict Origin or Referer check. Allow the production host, `www`, and that project's own Vercel preview hosts. Reject a missing or foreign origin.
3. A minimum time to submit. The server signs a timestamp when the form loads. Reject anything faster than 3 seconds or older than 2 hours.
4. Server-side validation and length caps. Reject the raw input when it is too long. Reject messages that are mostly links.
5. A per-IP rate limit. Prefer Vercel Firewall `@vercel/firewall` `checkRateLimit` when a rule is published. If the rule is missing, the check times out, or it throws, fall back to an in-memory limiter. Never answer a real visitor with an error just because the rule is not configured yet.
6. A hard daily cap on outbound email from that site, sized so it cannot exhaust the sending account. On this site the cap is 40 a day.
7. Bot protection such as Cloudflare Turnstile, wired to environment variables and left off until both keys exist. The content security policy adds `https://challenges.cloudflare.com` only while the site key is set.
8. Image optimization stays on. Use `next/image` with AVIF and WebP. Do not turn optimization off, and do not add remote image hosts without a size cap.

### Firewall rule for this site

This rule is not created yet. Do not create it until Matt says to.

Project: `matt2build-site`

1. Open the project, then Firewall, then Configure, then + New Rule.
2. Name: `Form IP rate limit`
3. If condition: `@vercel/firewall`
4. Rate limit ID: `matt2build-form-ip` (this must match the id in `lib/send-limit.ts`)
5. Then: Rate Limit
6. Strategy: Fixed Window
7. Time window: `10 minutes` (this is the longest window on Pro; a 1 hour window is Enterprise only)
8. Request limit: `2`
9. Counting key: IP. Leave the default. The code does not pass a custom key, so each visitor IP has its own bucket.
10. Action: Too Many Requests (429)
11. Save Rule, then Review Changes, then Publish.

Pro includes 1,000,000 allowed rate-limit requests, then usage-based pricing. This form will stay inside that included amount. Counters are per region, so the same IP in two regions gets two buckets.

Until that rule is published, `checkRateLimit` returns not-found and the code uses the in-memory limiter: 8 submissions an hour per IP on that server instance. A published allow does not also spend the memory counter. A missing rule, a timeout, or a thrown error never becomes a 500 for the visitor.

Do not add a second firewall rule to enforce the 40-a-day email cap. Pro cannot count a window longer than 10 minutes, so a firewall rule cannot mean "40 per day." A 10-minute rule that the code treated as the daily cap would turn the memory cap off whenever the rule allowed a request, and a loose rule could pass more than 100 emails a day. The 40-a-day cap in this repo is an in-memory counter on each server instance. One warm instance cannot send the 41st email that day. A flood that hits many fresh instances can still get past it.

A durable daily counter would be Vercel KV or Upstash Redis. That is another service, so it is not added here. Add one only if Matt approves it and the cost stays inside the retainer.

### Environment variables for this site

Set these in the Vercel project. Do not put the values in the repo, a chat, or a commit.

| Name | What it does |
| --- | --- |
| `FORM_SIGNING_SECRET` | Long random string, at least 16 characters. Turns on the 3-second / 2-hour check. If it is unset, that check stays off and real submissions still work. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key. The widget and the CSP host are added only when this is set at build time. |
| `TURNSTILE_SECRET_KEY` | Turnstile secret. Verification runs only when this and the site key are both set. |

`RESEND_API_KEY` is already set for this project. Do not rotate it, move it, or change the shared Resend account from this work.

## Handback and cancellation

When a client cancels, hand over:

- the domain, in the client's own registrar account
- the site's code and files
- the client's content, and images within their license
- an export of analytics and leads that belong to that client

Shared accounts never transfer. That includes the Vercel team, the shared Supabase project, the shared PostHog project, a shared email-sending account, and ongoing support. Form messages already go to the agent's own email.

## Copy

- "Licensed realtor since 2014" is the only experience line. Do not add a state, a county, or a year count such as "12 years."
- No testimonials and no track-record claims.
- Write in Matt's plain voice. Short sentences. Say what the thing is and what it costs.

## Secrets

Secrets never go in the repo, in chats, or in commits. Use environment variables. If a secret lands in a diff, stop and tell Matt. Do not print it in logs or in a pull request.

## Production

Do not delete Vercel projects, environment variables, or domains. Do not roll a deployment back. Do not delete, drop, or migrate anything in Supabase unless Matt says to. Do not change DNS or the shared Resend account from a site task.

## Verification

Every fix is verified on the preview deployment and on production before it is called done. A green build is not that check. Exercise the changed path the way a visitor would.
