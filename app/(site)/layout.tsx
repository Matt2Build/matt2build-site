import { JsonLd } from '@/components/json-ld'
import { PageShell } from '@/components/page-shell'
import { siteGraph } from '@/lib/structured-data'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={siteGraph} />
      <PageShell>{children}</PageShell>
    </>
  )
}
