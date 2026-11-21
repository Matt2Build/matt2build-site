import { CheckIcon } from '@/components/icons'
import { BUILD_PRICE, MONTHLY_PRICE, monthlyIncludes, standardStack } from '@/lib/site'

export function PricingCards() {
  return (
    <div className="bg-gradient-to-b from-matrix-500/10 to-cyber-dark border border-matrix-500/20 rounded-xl p-8">
      <div className="text-sm font-medium text-matrix-400 uppercase tracking-wide mb-4">One plan</div>
      <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12 mb-6">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-white">{BUILD_PRICE}</span>
            <span className="text-gray-400">once</span>
          </div>
          <p className="mt-2 text-sm text-gray-400">The custom site.</p>
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-white">{MONTHLY_PRICE}</span>
            <span className="text-gray-400">/month</span>
          </div>
          <p className="mt-2 text-sm text-gray-400">Hosting, maintenance, domain, back end.</p>
        </div>
      </div>
      <p className="text-gray-300 mb-6">
        Month to month. Cancel anytime. No cancellation fee. On cancel I hand over your domain, the site&apos;s code
        and files, and your images and content.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 text-sm">
        {standardStack.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-gray-200">{item.title}</span>
          </li>
        ))}
        {monthlyIncludes.slice(0, 4).map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-gray-200">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
