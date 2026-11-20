export type ComparisonRow = {
  name: string
  href?: string
  listingsHref?: string
  upfront: string
  monthly: string
  design: string
  listings: string
  contract: string
}

export const comparisonCaption =
  'Published prices as of November 2026. Check each vendor for current pricing.'

export const comparisonRows: ComparisonRow[] = [
  {
    name: 'Matt2Build',
    upfront: '$750',
    monthly: 'Optional $50 (hosting, maintenance, domain, back end)',
    design: 'Custom',
    listings: 'Not included',
    contract: 'Month to month',
  },
  {
    name: 'Placester',
    href: 'https://placester.com/pricing',
    upfront: 'No required setup fee',
    monthly: '$59–$129 (agent plans)',
    design: 'Templates',
    listings: '$25/mo per MLS, plus MLS fees',
    contract: 'No contract',
  },
  {
    name: 'AgentFire',
    href: 'https://agentfire.com/pricing/',
    upfront: '$800–$6,500',
    monthly: '$165–$215',
    design: 'Theme or custom',
    listings: '1 MLS included',
    contract: 'Month to month',
  },
  {
    name: 'Real Geeks',
    href: 'https://join.realgeeks.com/',
    upfront: '$500',
    monthly: '$399',
    design: 'Templates',
    listings: 'Included',
    contract: '6- or 12-month',
  },
  {
    name: 'Squarespace',
    href: 'https://www.squarespace.com/pricing',
    upfront: '$0',
    monthly: '$25–$139 (monthly billing)',
    design: 'Templates',
    listings: 'Not included',
    contract: 'Monthly or annual',
  },
  {
    name: 'Wix',
    href: 'https://www.wix.com/plans',
    listingsHref: 'https://support.wix.com/en/article/request-idx-mls-integration',
    upfront: '$0',
    monthly: 'Varies by plan and region',
    design: 'Templates',
    listings: 'Not supported natively',
    contract: 'Monthly or yearly',
  },
]

export const comparisonColumns = [
  { key: 'upfront', label: 'Upfront' },
  { key: 'monthly', label: 'Monthly' },
  { key: 'design', label: 'Design' },
  { key: 'listings', label: 'Listings (IDX)' },
  { key: 'contract', label: 'Contract' },
] as const
