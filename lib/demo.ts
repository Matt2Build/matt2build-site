export const DEMO_AGENT = 'Jordan Avery'
export const DEMO_MARKET = 'Lakeview'

export const demoNav = [
  { href: '/demo', label: 'Home' },
  { href: '/demo/neighborhoods', label: 'Neighborhoods' },
  { href: '/demo/buyers', label: 'Buyers' },
  { href: '/demo/sellers', label: 'Sellers' },
  { href: '/demo/calculators', label: 'Calculators' },
  { href: '/demo/search', label: 'Search' },
  { href: '/demo/about', label: 'About' },
  { href: '/demo/contact', label: 'Contact' },
] as const

export type Neighborhood = {
  slug: string
  name: string
  headline: string
  summary: string
  body: string[]
  stats: { label: string; value: string }[]
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: 'north-shore',
    name: 'North Shore',
    headline: 'A quiet edge of the lake, with older houses on larger lots.',
    summary: 'Streets that end at the water, and houses that have been in the same families for a long time.',
    body: [
      'North Shore is the sample neighborhood along the water. The blocks are residential. Most parcels are single houses with yards, and a few have a small dock or a shared path to the shore.',
      'People who ask about North Shore usually want space and a slower street. The tradeoff in this example is a longer drive to the shops in Market Square.',
    ],
    stats: [
      { label: 'Example median price', value: '$640,000' },
      { label: 'Example typical size', value: '2,100 sq ft' },
      { label: 'Example housing mix', value: 'Mostly single houses' },
    ],
  },
  {
    slug: 'hillcrest',
    name: 'Hillcrest',
    headline: 'Tree-lined streets and mid-century houses above the lake.',
    summary: 'A residential hill with sidewalks, mature trees, and houses from the middle of the last century.',
    body: [
      'Hillcrest is the sample neighborhood on the hill. The lots are smaller than North Shore, the streets are quieter than Market Square, and most homes are detached.',
      'This guide is here to show how an agent site can explain a place in plain language: who it suits, what the streets feel like, and which questions to ask on a tour.',
    ],
    stats: [
      { label: 'Example median price', value: '$515,000' },
      { label: 'Example typical size', value: '1,700 sq ft' },
      { label: 'Example housing mix', value: 'Detached houses' },
    ],
  },
  {
    slug: 'market-square',
    name: 'Market Square',
    headline: 'The walkable center, with shops on the ground floor and homes above.',
    summary: 'A compact downtown grid used in this demo as the place people go for coffee, errands, and smaller homes.',
    body: [
      'Market Square is the sample downtown. The example mix is apartments and condos over shops, plus a few older houses on the side streets.',
      'A page like this lets an agent describe the daily life of a neighborhood without a listing feed: where people walk, what kind of home is common, and what to weigh before writing an offer.',
    ],
    stats: [
      { label: 'Example median price', value: '$390,000' },
      { label: 'Example typical size', value: '1,050 sq ft' },
      { label: 'Example housing mix', value: 'Condos and apartments' },
    ],
  },
]

export function neighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((neighborhood) => neighborhood.slug === slug)
}
