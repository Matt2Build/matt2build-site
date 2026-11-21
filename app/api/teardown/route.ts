import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { escapeHtml } from '@/lib/email-sanitize'
import { decideTeardown } from '@/lib/form-guard'

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json()
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const decision = await decideTeardown(request, body as Record<string, unknown>)
    if (!decision.ok) {
      if (decision.silent) return NextResponse.json({ success: true })
      return NextResponse.json({ error: decision.error }, { status: decision.status })
    }

    const { name, email, website, market, goals } = decision.fields

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeWebsite = escapeHtml(website)
    const safeMarket = escapeHtml(market || 'Not provided')
    const safeGoals = escapeHtml(goals || 'Not provided')
    const subjectUrl = website.replace(/[\r\n]/g, '').slice(0, 180)

    const resend = getResend()
    const { data: sent, error } = await resend.emails.send({
      from: 'Matt2Build Contact <contact@matt2build.com>',
      to: ['matt2build@gmail.com'],
      replyTo: email,
      subject: `Teardown request: ${subjectUrl}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #111; margin-bottom: 24px;">Teardown request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 160px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Website</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${safeWebsite}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Market</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${safeMarket}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">What they want from the site</h3>
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6;">${safeGoals}</div>
          </div>
          <p style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            Sent from the teardown form on matt2build.com. Reply to this email to reach ${safeName}.
          </p>
        </div>
      `,
      text: `Teardown request

Name: ${name}
Email: ${email}
Website: ${website}
Market: ${market || 'Not provided'}

What they want from the site:
${goals || 'Not provided'}

---
Sent from the teardown form on matt2build.com.
Reply to this email to reach ${name}.`,
    })

    if (error) {
      console.error('Teardown email failed')
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: sent?.id })
  } catch (error) {
    console.error('Teardown form error')
    if (error instanceof Error && error.message === 'RESEND_API_KEY is not configured') {
      return NextResponse.json({ error: 'Email is not configured' }, { status: 500 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
