import {
  comparisonCaption,
  comparisonColumns,
  comparisonRows,
  type ComparisonRow,
} from '@/lib/comparison'

function VendorName({ row }: { row: ComparisonRow }) {
  if (!row.href) return <span className="font-semibold text-white">{row.name}</span>
  return (
    <a
      className="font-semibold text-matrix-400 underline underline-offset-2 hover:text-matrix-300"
      href={row.href}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {row.name}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export function ComparisonTable() {
  return (
    <div>
      <div className="space-y-4 md:hidden">
        {comparisonRows.map((row) => (
          <article key={row.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-lg">
              <VendorName row={row} />
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              {comparisonColumns.map((column) => (
                <div key={column.key} className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-3">
                  <dt className="text-gray-500">{column.label}</dt>
                  <dd className="text-gray-200">
                    {column.key === 'listings' && row.listingsHref ? (
                      <a
                        className="text-matrix-400 underline underline-offset-2"
                        href={row.listingsHref}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        {row.listings}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      row[column.key]
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
        <p className="text-sm leading-6 text-gray-500">{comparisonCaption}</p>
      </div>

      <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[920px] border-collapse text-left text-sm">
          <caption className="caption-bottom px-4 py-4 text-left text-sm leading-6 text-gray-500">
            {comparisonCaption}
          </caption>
          <thead>
            <tr className="border-b border-white/10 text-gray-400">
              <th scope="col" className="sticky left-0 z-10 bg-[#0f0f0f] px-4 py-3 font-medium">
                <span className="sr-only">Vendor</span>
              </th>
              {comparisonColumns.map((column) => (
                <th key={column.key} scope="col" className="px-4 py-3 font-medium whitespace-nowrap">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.name} className="border-b border-white/10 last:border-0">
                <th scope="row" className="sticky left-0 z-10 bg-[#0f0f0f] px-4 py-4 text-left align-top">
                  <VendorName row={row} />
                </th>
                {comparisonColumns.map((column) => (
                  <td key={column.key} className="px-4 py-4 align-top text-gray-200">
                    {column.key === 'listings' && row.listingsHref ? (
                      <a
                        className="text-matrix-400 underline underline-offset-2"
                        href={row.listingsHref}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        {row.listings}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      row[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
