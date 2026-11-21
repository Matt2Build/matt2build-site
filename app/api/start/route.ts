import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { escapeHtml } from '@/lib/email-sanitize'
import { decideStart, type StartFields } from '@/lib/form-guard'

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(apiKey)
}

const rows: Array<[string, keyof StartFields]> = [
  ['Name', 'name'],
  ['Email', 'email'],
  ['Brokerage', 'brokerage'],
  ['Disclosures / license', 'disclosures'],
  ['Areas served', 'areas'],
  ['Logo', 'logo'],
  ['Headshot', 'headshot'],
  ['Contact info on the site', 'contactShown'],
  ['Existing site or domain', 'existingSite'],
  ['Domain registrar', 'registrar'],
]

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json()
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const decision = await decideStart(request, body as Record<string, unknown>)
    if (!decision.ok) {
      if (decision.silent) return NextResponse.json({ success: true })
      return NextResponse.json({ error: decision.error }, { status: decision.status })
    }

    const fields = decision.fields
    const safe = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [key, escapeHtml(value)]),
    ) as Record<keyof StartFields, string>

    const table = rows
      .map(
        ([label, key]) => `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 180px; vertical-align: top;">${label}</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${safe[key]}</td>
            </tr>`,
      )
      .join('')

    const block = (label: string, value: string) => `
          <div style="margin-top: 24px;">
            <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">${label}</h3>
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6;">${value}</div>
          </div>`

    const resend = getResend()
    const { data: sent, error } = await resend.emails.send({
      from: 'BrokerWorkshop <contact@matt2build.com>',
      to: ['matt2build@gmail.com'],
      replyTo: fields.email,
      subject: `Start checklist from ${fields.name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #111; margin-bottom: 24px;">Start checklist</h2>
          <table style="width: 100%; border-collapse: collapse;">${table}</table>
          ${block('Bio', safe.bio)}
          ${block('Colors and style', safe.styleNotes)}
          ${block('Sites they like', safe.likedSites)}
          ${block('Extra pages', safe.extraPages)}
          <p style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            Sent from the start checklist on brokerworkshop.com. Reply to this email to reach ${safe.name}.
          </p>
        </div>
      `,
      text: `Start checklist

Name: ${fields.name}
Email: ${fields.email}
Brokerage: ${fields.brokerage}
Disclosures / license: ${fields.disclosures}
Areas served: ${fields.areas}
Logo: ${fields.logo}
Headshot: ${fields.headshot}
Contact info on the site: ${fields.contactShown}
Existing site or domain: ${fields.existingSite}
Domain registrar: ${fields.registrar}

Bio:
${fields.bio}

Colors and style:
${fields.styleNotes}

Sites they like:
${fields.likedSites}

Extra pages:
${fields.extraPages}

---
Sent from the start checklist on brokerworkshop.com.
Reply to this email to reach ${fields.name}.`,
    })

    if (error) {
      console.error('Start checklist email failed')
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: sent?.id })
  } catch (error) {
    console.error('Start checklist error')
    if (error instanceof Error && error.message === 'RESEND_API_KEY is not configured') {
      return NextResponse.json({ error: 'Email is not configured' }, { status: 500 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
