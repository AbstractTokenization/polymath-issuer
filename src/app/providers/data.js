export type SPStatus = {|
  title: string,
  message: string,
|}

export type SPProgress = {|
  isApplied: boolean,
  status?: SPStatus,
|}

export type ServiceProvider = {|
  id: number,
  cat: number,
  title: string,
  logo: string,
  desc: string,
  progress?: SPProgress,
  disclosure?: string,
  isToBeAnnounced?: boolean,
|}

export type SPCategory = {|
  id: number,
  title: string,
  desc: string,
|}

export const statuses = [
  'Selected as Provider',
  'Provider Declined',
  'Other',
]

export const categories: Array<SPCategory> = [
  {
    id: 0,
    title: 'Advisory',
    desc: 'Advisory firms may help you plan and execute your STO. Your Polymath dashboard is integrated with the ' +
    'following Advisory firms. Alternatively, you can elect to use your own Advisory services.',
  },
  {
    id: 1,
    title: 'Legal',
    desc: 'Law firms may advise you on the planning and execution of your STO. Your Polymath dashboard is integrated' +
    'with the following Law firms. Alternatively, you can elect to use your own Law firm or General Counsel.',
  },
  {
    id: 2,
    title: 'KYC/AML',
    desc: 'KYC is a critical component to your STO that will enable you to establish the list of approved ' +
    'transactors for your token. Alternatively, you can elect to use your own KYC firm.',
  },
  {
    id: 3,
    title: 'Marketing',
    desc: 'Apply for Marketing/PR Agency to help drive engagement and promote your STO. ' +
    'Alternatively, you can elect to use your own Marketing/PR firm or staff.',
  },
  {
    id: 4,
    title: 'Custody Service',
    desc: 'Apply for Custody services for the funds you raised and/or your investors\' ' +
    'security tokens to be held for safekeeping and minimize the risk of theft or loss. Alternatively, ' +
    'you and/or your Investors can elect to self custody funds and security tokens.'
    ,
  },
]

const providers: Array<ServiceProvider> = [

  // ADVISORY
  // {
  //   id: 0,
  //   cat: 0,
  //   title: 'Above Board',
  //   logo: '/providers/advisory/aboveboard.png',
  //   desc: 'Enhance the collaboration between issuers and investors with the value of security rights, the ' +
  //   'engagement of token economics, control of code, and the scope of global blockchains.',
  // },
  {
    id: 1,
    cat: 0,
    title: 'GenesisBlock',
    logo: '/providers/advisory/genesisblock.png',
    desc: 'Genesis Block is a venture production studio focused on developing decentralized protocols, ' +
    'infrastructure, and applications leveraging blockchain technology.',
  },
  {
    id: 2,
    cat: 0,
    title: 'Matador',
    logo: '/providers/advisory/matador.png',
    desc: 'We started as investment bankers and private equity partners. Historically, private markets provide' +
    ' minimal liquidity and going public carries high costs. Working at Polymath, we saw that the blockchain could' +
    ' solve many of these problems from legacy capital markets.',
    disclosure: 'Matador is a Polymath company',
  },
  {
    id: 3,
    cat: 0,
    title: 'Pegasus',
    logo: '/providers/advisory/pegasus.png',
    desc: 'The Pegasus Accelerator Program provides Blockchain and Token consulting and support services. ' +
    'Token offerings are compliant with jurisdictional regulations through the PIBCO process.',
  },

  // LEGAL
  {
    id: 4,
    cat: 1,
    title: 'PerkinsCoie',
    logo: '/providers/legal/perkins.png',
    desc: 'As a leading Canadian law firm with a focus on all principal areas of business law, we advise on a diverse' +
    ' range of transactional and litigation matters for clients ranging from startups to multinational corporations.',
  },
  {
    id: 5,
    cat: 1,
    title: 'Homeier Law PC',
    logo: '/providers/legal/homierlaw.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et ' +
    'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
    'commodo consequat.',
  },
  {
    id: 8,
    cat: 1,
    title: 'Radix',
    logo: '/providers/legal/radix.png',
    desc: 'Radix Law offers legal services in the fields of business law, commercial litigation, bankruptcy, real ' +
    'estate law and estate planning.',
  },

  // KYC/AML
  {
    id: 11,
    cat: 2,
    title: 'Katipult',
    logo: '/providers/kyc/katipult.png',
    desc: 'At Katipult, we come to work each day because we want to solve some of the biggest pain points for our ' +
    'clients working in the private capital markets. Most firms aren\'t capitalizing on opportunities in today\'s ' +
    'markets because they are still using manual systems...',
  },

  // MARKETING
  {
    id: 12,
    cat: 3,
    title: 'CrowdfundX',
    logo: '/providers/marketing/crowdfundx.png',
    desc: 'Built through insights gained from marketing the industry’s most successful equity crowdfunding ' +
    'campaigns, Dara is a semi-autonomous machine that empowers public and private companies to streamline retail ' +
    'investor acquisition. Dara works across marketing channels, optimizing paid...',
  },
  {
    id: 13,
    cat: 3,
    title: 'Wachsman PR',
    logo: '/providers/marketing/wachsmanpr.png',
    desc: 'Wachsman provides media relations, strategic communications, brand development, and corporate advisory ' +
    'services to many of the most indispensable companies in the financial technology, digital currency, and ' +
    'crypto-asset sectors.',
  },
  {
    id: 14,
    cat: 3,
    title: 'Taurus Vision',
    logo: '/providers/marketing/taurus.png',
    desc: 'Taurus Visiwon specializes in identifying your unique selling points and builds a full-service marketing ' +
    '& PR strategy around them. CONTENT & MARKETING. Working as an organic part of your team, Taurus Vision will ' +
    'assist you in formulating and executing a full go-to market strategy.',
  },

  // CUSTODY SERVICE
  {
    id: 15,
    cat: 4,
    title: 'BitGo',
    logo: '/providers/custody/bitgo.png',
    desc: 'BitGo is a blockchain software company that secures digital currency for institutional investors. Its ' +
    'technology solves the most difficult security, compliance and custodial problems '+ 
    'associated with blockchain-based currencies, enabling the integration of digital currency into the global…',
  },
]

export const getProviders = () => {
  providers.sort((a: ServiceProvider, b: ServiceProvider) => {
    const textA = a.title.toUpperCase()
    const textB = b.title.toUpperCase()
    if (a.isToBeAnnounced && b.isToBeAnnounced) {
      return 0
    } else if (a.isToBeAnnounced) {
      return 1
    } else if (b.isToBeAnnounced) {
      return -1
    }
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  })
  return providers
}

export const getProgress = (ticker: string): Array<SPProgress> => {
  return JSON.parse(String(localStorage.getItem('providers-' + ticker))) || []
}

export const saveProgress = (ticker: string, progress: Array<SPProgress>) => {
  localStorage.setItem('providers-' + ticker, JSON.stringify(progress))
}

export const isProvidersPassed = (providers: ?Array<ServiceProvider>) => {
  let isProvidersPassed = true
  if (providers) {
    for (let p: ServiceProvider of providers) {
      if (p.cat === 0) { // only cat 0 is obligatory
        if (p.progress && p.progress.isApplied) {
          isProvidersPassed = true
          break
        }
        if (!p.progress) {
          isProvidersPassed = false
        }
      }
    }
  } else {
    isProvidersPassed = false
  }
  return isProvidersPassed
}
