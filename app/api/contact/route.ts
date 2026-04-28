import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, projectType, timeline, details } = body

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: 'Name, email, and details are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    const resend = getResend()
    const { data, error } = await resend.emails.send({
      from: 'Matt2Build Contact <contact@matt2build.com>',
      to: ['matt2build@gmail.com'],
      replyTo: email,
      subject: `New inquiry from ${name} — ${projectType}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #111; margin-bottom: 24px;">New Project Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Project Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${projectType}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Timeline</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${timeline || 'Not specified'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 24px;">
            <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">What needs help?</h3>
            <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6;">
              ${details}
            </div>
          </div>
          
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>This inquiry was submitted via matt2build.com</p>
            <p style="margin-top: 8px;">Reply to this email to respond directly to ${name}.</p>
          </div>
        </div>
      `,
      text: `New Project Inquiry

Name: ${name}
Email: ${email}
Project Type: ${projectType}
Timeline: ${timeline || 'Not specified'}

What needs help?
${details}

---
This inquiry was submitted via matt2build.com
Reply to respond directly to ${name}.`,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
