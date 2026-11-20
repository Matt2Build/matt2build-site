export const SITE_URL = 'https://matt2build.com'
export const SITE_NAME = 'Matt2Build'
export const CONTACT_EMAIL = 'matt2build@gmail.com'
export const BUILD_PRICE = '$750'
export const MONTHLY_PRICE = '$50'
export const BUILD_PRICE_AMOUNT = '750'
export const MONTHLY_PRICE_AMOUNT = '50'
export const POLICY_UPDATED = 'November 20, 2026'

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
    summary: 'Designed for you. Not a template with your name dropped in.',
    detail:
      'I design the site around your name, your market, and how you actually work. It will not look like a theme with the logo swapped.',
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
      'Name, email, and what they need. The message comes to you. You are not waiting on a portal you do not control.',
  },
  {
    title: 'Consultation booking link',
    summary: 'A clear link so someone can book time with you.',
    detail:
      'I put your booking link where people can find it. I am not selling a separate scheduling product. It is your link, on your site.',
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
      'You can see which pages people open. I keep it simple. I am not installing a pile of ad trackers.',
  },
  {
    title: 'Launch',
    summary: 'I put the site on your domain and check it before you send anyone there.',
    detail:
      'When the site is ready, I launch it on the domain you own and walk through it with you before you share the link.',
  },
]

export const monthlyIncludes = ['Hosting', 'Maintenance', 'Support', 'Month-to-month, cancel anytime']

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
    question: "What's included in the monthly retainer?",
    answer: 'Hosting, backups, security, content updates, edits, and priority support.',
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
      "Yes. I work with real estate agents anywhere in the United States. I'm a Snohomish County, Washington realtor. That background is how I know the work. It isn't a limit on who I build for.",
  },
  {
    question: 'What if I want a tool beyond the standard stack?',
    answer: 'Custom tools beyond the standard stack are quoted separately.',
  },
  {
    question: 'Who owns the domain and the site?',
    answer: 'You do. You own your domain, and the site stays with you if you change brokerages.',
  },
]

export const homeFaqs: Faq[] = [
  pricingFaqs[6],
  pricingFaqs[5],
  {
    question: 'What does a site cost?',
    answer: `${BUILD_PRICE} once to build it. ${MONTHLY_PRICE} a month after that for hosting, maintenance, and support. Month-to-month. Cancel anytime. Custom tools beyond the standard stack are quoted separately.`,
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
    id: 'workflowrealtor',
    title: 'WorkflowRealtor',
    kicker: 'Agent dashboard',
    summary:
      "A brokerage-independent dashboard for an agent's pipeline, clients, escrows, deadlines, net commission, documents, and calendar.",
    detail:
      'I built this so an agent can run the day-to-day of the business in one place, and keep that workspace if they change brokerages. It is not public yet. These are screenshots only.',
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
    summary: 'The buyer-offer site I built for my own real estate business in Washington.',
    detail:
      'I use WriteMyOffer with my own buyers in Washington. It is not for sale, and I do not offer it to other agents.',
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
    kicker: 'Washington markets',
    summary: 'Washington housing and relocation data for people planning a move to the Pacific Northwest.',
    detail:
      'A public market site I run. The screenshots are the current Snohomish County snapshot and the relocation comparison.',
    href: 'https://moving2pnw.com',
    linkLabel: 'moving2pnw.com',
    shots: [
      {
        src: '/moving2pnw-overview.webp',
        alt: 'Moving2PNW Snohomish County market snapshot, with median price, days on market, and a buyers-versus-sellers chart.',
        width: 1200,
        height: 833,
      },
      {
        src: '/moving2pnw-migration.webp',
        alt: 'Moving2PNW relocation view comparing monthly payments and median prices for Washington cities.',
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
    detail: 'GridView Pro is desktop software, not an agent website. I keep it here because I built it.',
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
export const productLinks = projects.filter((project) => project.href && project.linkLabel)
