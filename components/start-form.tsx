'use client'

import { FormEvent, ReactNode, useState } from 'react'
import { useFormShield } from '@/components/form-shield'
import { captureEvent } from '@/lib/analytics'

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

const fieldClass =
  'w-full px-4 py-3 bg-cyber-dark border border-cyber-light rounded text-base text-white placeholder-gray-500 focus:outline-none focus:border-matrix-500'

export function StartForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [brokerage, setBrokerage] = useState('')
  const [disclosures, setDisclosures] = useState('')
  const [areas, setAreas] = useState('')
  const [logoChoice, setLogoChoice] = useState<'none' | 'link'>('none')
  const [logoUrl, setLogoUrl] = useState('')
  const [headshotUrl, setHeadshotUrl] = useState('')
  const [writeBio, setWriteBio] = useState(false)
  const [bio, setBio] = useState('')
  const [contactShown, setContactShown] = useState('')
  const [existingSite, setExistingSite] = useState('')
  const [registrar, setRegistrar] = useState('')
  const [styleNotes, setStyleNotes] = useState('')
  const [likedSites, setLikedSites] = useState('')
  const [extraPages, setExtraPages] = useState('')
  const [faxNumber, setFaxNumber] = useState('')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const shield = useFormShield()

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitState('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          brokerage,
          disclosures,
          areas,
          logo_choice: logoChoice,
          logo_url: logoUrl,
          headshot_url: headshotUrl,
          write_bio: writeBio,
          bio,
          contact_shown: contactShown,
          existing_site: existingSite,
          registrar,
          style_notes: styleNotes,
          liked_sites: likedSites,
          extra_pages: extraPages,
          fax_number: faxNumber,
          form_token: shield.formToken,
        }),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null
        setErrorMessage(payload?.error || 'Something went wrong.')
        setSubmitState('error')
        return
      }

      setSubmitState('success')
      captureEvent('start_checklist_submitted', { location: 'start_form' })
    } catch {
      setErrorMessage('Something went wrong.')
      setSubmitState('error')
    }
  }

  return (
    <form className="p-6 sm:p-8 bg-cyber-light/30 rounded-xl border border-cyber-light" onSubmit={onSubmit}>
      <div className="space-y-5">
        <Field label="Name" id="start-name">
          <input id="start-name" required autoComplete="name" maxLength={100} value={name} onChange={(event) => setName(event.target.value)} className={fieldClass} />
        </Field>
        <Field label="Email" id="start-email" hint="Where I reply.">
          <input id="start-email" type="email" required autoComplete="email" maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} className={fieldClass} />
        </Field>
        <Field label="Brokerage" id="start-brokerage">
          <input id="start-brokerage" required maxLength={160} value={brokerage} onChange={(event) => setBrokerage(event.target.value)} className={fieldClass} />
        </Field>
        <Field label="Brokerage disclosures and license number" id="start-disclosures" hint="Write none if your brokerage does not require any.">
          <textarea id="start-disclosures" required maxLength={1000} rows={3} value={disclosures} onChange={(event) => setDisclosures(event.target.value)} className={fieldClass} />
        </Field>
        <Field label="Areas you serve" id="start-areas">
          <input id="start-areas" required maxLength={300} value={areas} onChange={(event) => setAreas(event.target.value)} className={fieldClass} />
        </Field>
        <fieldset>
          <legend className="block text-sm font-medium text-gray-200 mb-2">Logo</legend>
          <p className="text-sm text-gray-500 mb-3">Paste a link. This form does not take file uploads.</p>
          <div className="flex flex-col gap-2 text-sm text-gray-200">
            <label className="flex items-center gap-2">
              <input type="radio" name="logo_choice" checked={logoChoice === 'none'} onChange={() => setLogoChoice('none')} />
              None
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="logo_choice" checked={logoChoice === 'link'} onChange={() => setLogoChoice('link')} />
              I have a link
            </label>
          </div>
          {logoChoice === 'link' ? (
            <input
              id="start-logo"
              type="url"
              required
              maxLength={300}
              placeholder="https://"
              value={logoUrl}
              onChange={(event) => setLogoUrl(event.target.value)}
              className={`${fieldClass} mt-3`}
            />
          ) : null}
        </fieldset>
        <Field label="Headshot link" id="start-headshot" hint="Paste a link, or leave this blank. This form does not take file uploads.">
          <input id="start-headshot" type="url" maxLength={300} placeholder="https://" value={headshotUrl} onChange={(event) => setHeadshotUrl(event.target.value)} className={fieldClass} />
        </Field>
        <Field label="Bio" id="start-bio" hint="Or ask me to write it.">
          <label className="mb-3 flex items-center gap-2 text-sm text-gray-200">
            <input type="checkbox" checked={writeBio} onChange={(event) => setWriteBio(event.target.checked)} />
            Write it for me
          </label>
          <textarea id="start-bio" required={!writeBio} maxLength={4000} rows={5} value={bio} onChange={(event) => setBio(event.target.value)} className={fieldClass} />
        </Field>
        <Field label="Contact info to show on the site" id="start-contact" hint="Phone, email, and booking link.">
          <textarea id="start-contact" required maxLength={500} rows={3} value={contactShown} onChange={(event) => setContactShown(event.target.value)} className={fieldClass} />
        </Field>
        <Field label="Existing site or domain" id="start-existing" hint="Leave blank if you do not have one.">
          <input id="start-existing" maxLength={300} value={existingSite} onChange={(event) => setExistingSite(event.target.value)} className={fieldClass} />
        </Field>
        <Field label="Domain registrar, if you own the domain" id="start-registrar">
          <input id="start-registrar" maxLength={160} value={registrar} onChange={(event) => setRegistrar(event.target.value)} className={fieldClass} />
        </Field>
        <Field label="Colors and style notes" id="start-style">
          <textarea id="start-style" maxLength={800} rows={3} value={styleNotes} onChange={(event) => setStyleNotes(event.target.value)} className={fieldClass} />
        </Field>
        <Field label="Sites you like" id="start-likes">
          <textarea id="start-likes" maxLength={800} rows={3} value={likedSites} onChange={(event) => setLikedSites(event.target.value)} className={fieldClass} />
        </Field>
        <Field label="Extra pages you want" id="start-pages">
          <textarea id="start-pages" maxLength={800} rows={3} value={extraPages} onChange={(event) => setExtraPages(event.target.value)} className={fieldClass} />
        </Field>
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="start-fax">Fax</label>
          <input id="start-fax" name="fax_number" type="text" tabIndex={-1} autoComplete="off" value={faxNumber} onChange={(event) => setFaxNumber(event.target.value)} />
        </div>
        <div aria-live="polite">
          {submitState === 'success' ? (
            <p className="rounded-lg border border-matrix-500/30 bg-matrix-500/10 px-4 py-3 text-sm text-matrix-300">
              Checklist sent. I&apos;ll use it to start the build.
            </p>
          ) : null}
          {submitState === 'error' ? (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {errorMessage}. You can also email matt2build@gmail.com.
            </p>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={submitState === 'sending' || !shield.ready}
          aria-busy={submitState === 'sending'}
          className="w-full btn-primary cursor-pointer disabled:opacity-60 disabled:cursor-wait"
        >
          {submitState === 'sending' ? 'Sending…' : 'Send the checklist'}
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  id,
  hint,
  children,
}: {
  label: string
  id: string
  hint?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-200 mb-2">
        {label}
      </label>
      {hint ? <p className="text-sm text-gray-500 mb-2">{hint}</p> : null}
      {children}
    </div>
  )
}
