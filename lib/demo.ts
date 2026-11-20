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

export type DemoImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type Neighborhood = {
  slug: string
  name: string
  headline: string
  summary: string
  body: string[]
  image: DemoImage
  stats: { label: string; value: string }[]
}

export const heroImage: DemoImage = {
  src: '/demo/hero.webp',
  alt: 'A two-story house with a wide lawn and a covered front porch.',
  width: 1600,
  height: 1067,
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: 'north-shore',
    name: 'North Shore',
    headline: 'Quiet streets that end at the water, and houses with room to breathe.',
    summary: 'Larger lots, older houses, and a slower pace than the center of town.',
    body: [
      'North Shore follows the water. Most homes are single houses with yards, and a few share a path down to the shore.',
      'People who look here usually want space. The tradeoff is a longer drive to the shops in Market Square.',
    ],
    image: {
      src: '/demo/north-shore.webp',
      alt: 'A red house beside a calm lake, with trees along the far shore.',
      width: 1600,
      height: 1067,
    },
    stats: [
      { label: 'Example median price', value: '$640,000' },
      { label: 'Example typical size', value: '2,100 sq ft' },
      { label: 'Example housing mix', value: 'Mostly single houses' },
    ],
  },
  {
    slug: 'hillcrest',
    name: 'Hillcrest',
    headline: 'Tree-lined blocks and mid-century houses above the lake.',
    summary: 'Sidewalks, mature trees, and detached houses on a quieter hill.',
    body: [
      'Hillcrest sits above the lake. The lots are smaller than North Shore, and most of the houses are detached.',
      'On a tour, look at the light through the trees, the slope of the street, and how far you are from Market Square.',
    ],
    image: {
      src: '/demo/hillcrest.webp',
      alt: 'A sunny residential street lined with houses and trees.',
      width: 1600,
      height: 1067,
    },
    stats: [
      { label: 'Example median price', value: '$515,000' },
      { label: 'Example typical size', value: '1,700 sq ft' },
      { label: 'Example housing mix', value: 'Detached houses' },
    ],
  },
  {
    slug: 'market-square',
    name: 'Market Square',
    headline: 'The walkable center, with shops below and homes above.',
    summary: 'Coffee, errands, and smaller homes on a compact downtown grid.',
    body: [
      'Market Square is where Lakeview does its errands. The mix is apartments and condos over shops, plus a few older houses on the side streets.',
      'It suits someone who wants to walk for coffee and does not need a large yard.',
    ],
    image: {
      src: '/demo/market-square.webp',
      alt: 'A sunny pedestrian street with shops and low buildings.',
      width: 1600,
      height: 1067,
    },
    stats: [
      { label: 'Example median price', value: '$390,000' },
      { label: 'Example typical size', value: '1,050 sq ft' },
      { label: 'Example housing mix', value: 'Condos and apartments' },
    ],
  },
]

export const marketSnapshot = [
  { label: 'Example median price', value: '$515,000' },
  { label: 'Example typical size', value: '1,700 sq ft' },
  { label: 'Example share of houses', value: '62%' },
]

export type ExampleListing = {
  address: string
  area: string
  price: string
  detail: string
  image: DemoImage
}

export const exampleListings: ExampleListing[] = [
  {
    address: '18 Cedar Lane',
    area: 'North Shore',
    price: '$685,000',
    detail: '4 bedrooms · 2,240 sq ft',
    image: {
      src: '/demo/listing-house.webp',
      alt: 'A beige house with a lit porch and a green lawn.',
      width: 1600,
      height: 1067,
    },
  },
  {
    address: '42 Hillcrest Drive',
    area: 'Hillcrest',
    price: '$529,000',
    detail: '3 bedrooms · 1,680 sq ft',
    image: {
      src: '/demo/listing-living.webp',
      alt: 'A living room with a sofa, wood floors, and a staircase.',
      width: 1600,
      height: 1028,
    },
  },
  {
    address: '9 Market Square',
    area: 'Market Square',
    price: '$415,000',
    detail: '2 bedrooms · 1,090 sq ft',
    image: {
      src: '/demo/listing-kitchen.webp',
      alt: 'A bright kitchen with white cabinets and a wood floor.',
      width: 1600,
      height: 1068,
    },
  },
]

export function neighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((neighborhood) => neighborhood.slug === slug)
}
