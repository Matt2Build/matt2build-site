const SINGLE_LINE_CONTROLS = /[\u0000-\u001F\u007F]/g
const MULTILINE_CONTROLS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export function sanitizeSingleLine(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  return value.replace(SINGLE_LINE_CONTROLS, ' ').replace(/[ \t]+/g, ' ').trim().slice(0, maxLength)
}

export function sanitizePlainText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  return value.replace(MULTILINE_CONTROLS, '').replace(/\r\n/g, '\n').trim().slice(0, maxLength)
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => HTML_ESCAPES[character])
}
