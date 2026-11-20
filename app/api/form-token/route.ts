import { NextRequest, NextResponse } from 'next/server'
import { originAllowed } from '@/lib/form-guard'
import { issueFormToken } from '@/lib/form-token'

export async function GET(request: NextRequest) {
  if (!originAllowed(request.headers)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  return NextResponse.json({ token: issueFormToken() })
}
