export const SITE_URL = 'https://matt2build.com'
export const SITE_NAME = 'Matt2Build'
export const CONTACT_EMAIL = 'matt2build@gmail.com'
export const BUILD_PRICE = '$750'
export const MONTHLY_PRICE = '$50'
export const BUILD_PRICE_AMOUNT = '750'
export const MONTHLY_PRICE_AMOUNT = '50'
export const POLICY_UPDATED = 'November 19, 2026'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/matt-salit-8108003ba/'
export const X_URL = 'https://x.com/soldwithsalit'
export const X_HANDLE = '@soldwithsalit'

export const navLinks = [
  { href: '/portfolio', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export type StackItem = {
  title: string
  summary: string
  detail: string
}

export const standardStack: StackItem[] = [
  {
    title: 'Custom design',
    summary: 'Designed around your name, your market, and how you work.',
    detail:
      'I design the site around your name, your market, and how you actually work.',
  },
  {
    title: 'Mobile-first layout',
    summary: 'Laid out for a phone first, then a larger screen.',
    detail:
      'Most people will open your site on a phone. I design that screen first, then scale it up so a desktop still feels intentional.',
  },
  {
    title: 'Bio and about page',
    summary: 'A page that tells people who you are and how you work.',
    detail:
      'Clients hire a person. The about page is yours: your background, the way you work, and the markets you cover.',
  },
  {
    title: 'Contact and lead form',
    summary: 'A form that sends a new inquiry straight to you.',
    detail:
      'Name, email, and what they need. Inquiries land straight in your inbox.',
  },
  {
    title: 'Consultation booking link',
    summary: 'A clear link so someone can book time with you.',
    detail:
      'I put your booking link on the site so people can book time with you.',
  },
  {
    title: 'SEO setup and structured data',
    summary: 'Titles, descriptions, and structured data search engines can read.',
    detail:
      'Each page gets a real title and description, and structured data that describes you and the site. No fake ratings.',
  },
  {
    title: 'Analytics',
    summary: 'A simple count of visits, so you can see what gets used.',
    detail:
      'A simple count of visits, so you can see which pages people open.',
  },
  {
    title: 'Launch on your domain',
    summary: 'The site goes live on a domain in your name.',
    detail:
      'When the site is ready, I launch it on the domain you own and walk through it with you. I can register it, connect it, and manage DNS, email records, and renewals. Registration and renewal fees stay with you. The domain stays in your name.',
  },
]

export const monthlyIncludes = [
  'Hosting',
  'Maintenance',
  'Domain management',
  'Back-end support',
  'Month to month, cancel anytime',
]

export type Faq = {
  question: string
  answer: string
}

export const pricingFaqs: Faq[] = [
  {
    question: 'How long does a build take?',
    answer: 'Most sites are live within 1–2 weeks.',
  },
  {
    question: 'Do I need to supply all the content?',
    answer: "No. I'll help write the copy, source images if needed.",
  },
  {
    question: 'What if I already have a website?',
    answer: 'I can rebuild it, migrate it, or improve what you have.',
  },
  {
    question: "What's included in the monthly plan?",
    answer:
      'Hosting, maintenance, domain management, and back-end support. It is optional, month to month, and you can cancel anytime.',
  },
  {
    question: 'Is there a contract?',
    answer: 'No. Month-to-month. Cancel anytime.',
  },
  {
    question: 'Do you include IDX or listing feeds?',
    answer:
      "No. MLS rules don't allow me to put an IDX or MLS listing feed on your site. I build the marketing site and the tools you own.",
  },
  {
    question: 'Do you work with agents anywhere in the U.S.?',
    answer:
      "Yes. I build for real estate agents anywhere in the United States.",
  },
  {
    question: 'What if I want a tool beyond the standard stack?',
    answer: 'Custom tools beyond the standard stack are quoted separately.',
  },
  {
    question: 'Who owns the domain and the site?',
    answer:
      'You do. I can register, connect, and manage the domain, and it stays in your name if you change brokerages.',
  },
  {
    question: 'Do I have to pay monthly?',
    answer:
      'No. The $50 a month is optional, for agents who want me to handle hosting, maintenance, domain management and back-end support.',
  },
  {
    question: 'Can you handle the domain?',
    answer:
      'Yes. I can register it, connect it, and manage DNS, email records, and renewals. The domain stays in your name.',
  },
]

export const homeFaqs: Faq[] = [
  pricingFaqs[6],
  pricingFaqs[5],
  {
    question: 'What does a site cost?',
    answer: `${BUILD_PRICE} once for the custom build. ${MONTHLY_PRICE} a month is optional, for hosting, maintenance, domain management, and back-end support. Cancel anytime. Custom tools beyond the standard stack are quoted separately.`,
  },
  pricingFaqs[8],
  pricingFaqs[4],
]

export type Shot = {
  src: string
  alt: string
  width: number
  height: number
  mobile?: boolean
}

export type Project = {
  id: string
  title: string
  kicker: string
  summary: string
  detail: string
  href?: string
  linkLabel?: string
  shots: Shot[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'agent-website-demo',
    title: 'Agent website demo',
    kicker: 'Live demo',
    summary: 'A mobile-first site for a working agent, ready to click through.',
    detail:
      'Neighborhood pages, buyer and seller guides, calculators, a home-value request, and no MLS listings needed.',
    href: '/demo',
    linkLabel: 'View the live demo',
    shots: [
      {
        src: '/agent-demo-home-desktop.webp',
        alt: 'Agent website demo homepage with the headline Find your place in Lakeview.',
        width: 1200,
        height: 750,
      },
    ],
    featured: true,
  },
  {
    id: 'workflowrealtor',
    title: 'WorkflowRealtor',
    kicker: 'Agent dashboard',
    summary:
      "A brokerage-independent dashboard for an agent's pipeline, clients, escrows, deadlines, net commission, documents, and calendar.",
    detail:
      'I built this so an agent can run the day-to-day of the business in one place, and keep that workspace if they change brokerages. These are screenshots only.',
    shots: [
      {
        src: '/workflowrealtor-home-desktop.webp',
        alt: 'WorkflowRealtor sign-in screen with the headline Your business dashboard first.',
        width: 1200,
        height: 750,
      },
      {
        src: '/workflowrealtor-home-mobile.webp',
        alt: 'WorkflowRealtor sign-in screen on a phone, with the same dashboard headline.',
        width: 780,
        height: 1688,
        mobile: true,
      },
    ],
    featured: true,
  },
  {
    id: 'movermath',
    title: 'MoverMath',
    kicker: 'Compare places',
    summary: 'A site for comparing U.S. states and counties when you are planning a move.',
    detail:
      'MoverMath lines up public data for states and counties: income, housing, and the other things people weigh before they move. The link is the site itself.',
    href: 'https://movermath.com',
    linkLabel: 'movermath.com',
    shots: [
      {
        src: '/movermath-home-desktop.webp',
        alt: 'MoverMath map of median household income across U.S. states.',
        width: 1200,
        height: 750,
      },
      {
        src: '/movermath-find-your-fit.webp',
        alt: 'MoverMath Find your fit page, with questions for ranking U.S. states.',
        width: 1200,
        height: 750,
      },
      {
        src: '/movermath-home-mobile.webp',
        alt: 'MoverMath on a phone, showing the U.S. household income map.',
        width: 780,
        height: 1688,
        mobile: true,
      },
    ],
    featured: true,
  },
  {
    id: 'writemyoffer',
    title: 'WriteMyOffer',
    kicker: 'My own buyer site',
    summary: 'The buyer-offer site I built for my own real estate business.',
    detail:
      'I use WriteMyOffer with my own buyers.',
    href: 'https://writemyoffer.com',
    linkLabel: 'writemyoffer.com',
    shots: [
      {
        src: '/writemyoffer-home-desktop.webp',
        alt: 'WriteMyOffer homepage with the headline You Found the House. You Get the Savings.',
        width: 1200,
        height: 750,
      },
      {
        src: '/writemyoffer-home-mobile.webp',
        alt: 'WriteMyOffer homepage on a phone, with the same headline and a start button.',
        width: 780,
        height: 1688,
        mobile: true,
      },
    ],
    featured: true,
  },
  {
    id: 'moving2pnw',
    title: 'Moving2PNW',
    kicker: 'Relocation data',
    summary: 'A public site for comparing housing markets when you are planning a move.',
    detail:
      'A public market site I run. The screenshots show a market snapshot and a relocation comparison.',
    href: 'https://moving2pnw.com',
    linkLabel: 'moving2pnw.com',
    shots: [
      {
        src: '/moving2pnw-overview.webp',
        alt: 'Moving2PNW market snapshot with median price, days on market, and a buyers-versus-sellers chart.',
        width: 1200,
        height: 833,
      },
      {
        src: '/moving2pnw-migration.webp',
        alt: 'Moving2PNW relocation view comparing monthly payments and median prices across cities.',
        width: 1200,
        height: 833,
      },
    ],
    featured: false,
  },
  {
    id: 'gridview-pro',
    title: 'GridView Pro',
    kicker: 'Mac app',
    summary: 'A Mac app for working across several panes at once.',
    detail: 'A Mac app I built for working across several panes at once.',
    href: 'https://gridviewpro.com',
    linkLabel: 'gridviewpro.com',
    shots: [
      {
        src: '/gridview-banner.webp',
        alt: 'GridView Pro logo, a geometric mark on a dark purple field.',
        width: 1200,
        height: 400,
      },
      {
        src: '/gridview-workspace.webp',
        alt: 'GridView Pro on a Mac, with several web pages open in separate panes.',
        width: 1200,
        height: 780,
      },
    ],
    featured: false,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
export const otherProjects = projects.filter((project) => !project.featured)
export const productLinks = projects.filter(
  (project) => project.href?.startsWith('http') && project.linkLabel,
)
