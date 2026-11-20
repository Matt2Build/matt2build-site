import { CheckIcon } from '@/components/icons'
import { BUILD_PRICE, MONTHLY_PRICE, monthlyIncludes, standardStack } from '@/lib/site'

export function PricingCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-b from-matrix-500/10 to-cyber-dark border border-matrix-500/20 rounded-xl p-8">
        <div className="text-sm font-medium text-matrix-400 uppercase tracking-wide mb-2">The build</div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-5xl font-bold text-white">{BUILD_PRICE}</span>
          <span className="text-gray-400">once</span>
        </div>
        <p className="text-gray-300 mb-6">A custom site on the standard stack. Built around what you want.</p>
        <ul className="space-y-3 text-sm">
          {standardStack.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-gray-200">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gradient-to-b from-cyber-light/30 to-cyber-dark border border-cyber-light/50 rounded-xl p-8">
        <div className="text-sm font-medium text-matrix-400 uppercase tracking-wide mb-2">Optional monthly</div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-5xl font-bold text-white">{MONTHLY_PRICE}</span>
          <span className="text-gray-400">/month</span>
        </div>
        <p className="text-gray-300 mb-6">
          Want it handled? Hosting, maintenance, domain management, and back-end support. Month to month.
          Cancel anytime. No cancellation fee.
        </p>
        <ul className="space-y-3 text-sm">
          {monthlyIncludes.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
