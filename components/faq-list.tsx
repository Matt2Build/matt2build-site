import type { Faq } from '@/lib/site'

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group bg-cyber-light/30 rounded-lg border border-cyber-light hover:border-matrix-500/50 transition-colors"
        >
          <summary className="px-6 py-4 cursor-pointer text-white font-semibold list-none flex items-center justify-between gap-4">
            {faq.question}
            <svg className="w-5 h-5 text-matrix-500 shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-6 pb-4 text-gray-300 leading-7">{faq.answer}</div>
        </details>
      ))}
    </div>
  )
}
