import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = {
  services: [
    { name: 'SAP Practice', href: '/services/sap-practice' },
    { name: 'Enterprise Applications', href: '/services/enterprise-applications' },
    { name: 'Custom Development', href: '/services/custom-development' },
    { name: 'Infrastructure & Cybersecurity', href: '/services/infrastructure-cybersecurity' },
    { name: 'Data & AI Services', href: '/services/data-ai' },
    { name: 'Engineering Services', href: '/services/engineering' },
    { name: 'Digital Transformation', href: '/services/digital-transformation' },
  ],
  about: [
    { name: 'Our Story', href: '/about/our-story' },
    { name: 'Vision & Mission', href: '/about/vision-mission' },
    { name: 'Strategic Goals', href: '/about/strategic-goals' },
    { name: 'Global Footprint', href: '/about/global-footprint' },
    { name: 'Leadership', href: '/about/leadership' },
    { name: 'Quality & Certifications', href: '/about/quality-certifications' },
  ],
  innovation: [
    { name: 'Innovation Lab (ETIL)', href: '/innovation/etil' },
    { name: 'Yamaha DX Journey', href: '/innovation/dx-journey' },
    { name: 'Success Stories', href: '/innovation/success-stories' },
    { name: 'Ecosystem & Partnerships', href: '/innovation/ecosystem' },
  ],
  careers: [
    { name: 'Life at YMSLI', href: '/careers/life-at-ymsli' },
    { name: 'Benefits & Wellness', href: '/careers/benefits-wellness' },
    { name: 'Learning & Development', href: '/careers/learning-development' },
    { name: 'Diversity & CSR', href: '/careers/diversity-csr' },
    { name: 'Open Positions', href: '/careers/open-positions' },
  ],
  insights: [
    { name: 'Blog', href: '/insights/blog' },
    { name: 'Case Studies', href: '/insights/case-studies' },
    { name: 'News & Events', href: '/insights/news-events' },
  ],
}

export const stats = [
  { number: '20+', label: 'Years of Excellence', suffix: '' },
  { number: '800+', label: 'Skilled Professionals', suffix: '' },
  { number: '25+', label: 'Countries Served', suffix: '' },
  { number: '10+', label: 'Tech Partnerships', suffix: '' },
  { number: '300+', label: 'Startup Collaborations', suffix: '' },
  { number: '70+', label: 'PoCs Delivered', suffix: '' },
]

export const services = [
  {
    title: 'Enterprise Applications',
    description: 'Comprehensive enterprise solutions from SAP, Microsoft D365, Salesforce to custom integrations.',
    icon: 'Building2',
    href: '/services/enterprise-applications',
  },
  {
    title: 'Custom Development',
    description: 'Agile, scalable, cloud-native solutions tailored to your unique business challenges.',
    icon: 'Code2',
    href: '/services/custom-development',
  },
  {
    title: 'Infrastructure & Cybersecurity',
    description: 'Robust, secure infrastructure management protecting digital assets.',
    icon: 'Shield',
    href: '/services/infrastructure-cybersecurity',
  },
  {
    title: 'Data & AI Services',
    description: 'Transform data into actionable insights with advanced analytics and AI/ML.',
    icon: 'Brain',
    href: '/services/data-ai',
  },
  {
    title: 'Innovation Lab',
    description: 'Exploring AI/GenAI, IoT, Robotics, and next-generation technologies.',
    icon: 'Lightbulb',
    href: '/innovation/etil',
  },
  {
    title: 'Engineering Services',
    description: 'Product engineering from embedded software to robotics applications.',
    icon: 'Cog',
    href: '/services/engineering',
  },
  {
    title: 'Digital Transformation',
    description: 'Accelerate your digital journey with strategy, technology, and change management.',
    icon: 'Rocket',
    href: '/services/digital-transformation',
  },
]

export const certifications = [
  { name: 'CMMI Level 3', description: 'Capability Maturity Model Integration' },
  { name: 'SOC 2 Type 2', description: 'Service Organization Control' },
  { name: 'ISO 27001:2022', description: 'Information Security Management' },
  { name: 'ISO 27701:2019', description: 'Privacy Information Management' },
  { name: 'ISO 22301:2019', description: 'Business Continuity Management' },
  { name: 'GDPR', description: 'Data Protection Compliant' },
]

export const dxJourney = [
  {
    id: 'Y-DX1',
    title: 'Reform Management Platforms',
    description: 'Accelerating decision-making and standardizing processes across the organization.',
    features: ['SAP & D365 Partner', 'ERP & CRM Systems', 'Digital Tech Adoption'],
  },
  {
    id: 'Y-DX2',
    title: 'Strengthen The Present',
    description: 'Connecting with customers and delivering new experiences.',
    features: ['FinTech Applications', 'G-System Platforms', 'Dealer Management Systems'],
  },
  {
    id: 'Y-DX3',
    title: 'Create The Future',
    description: 'Preparing for next-generation value creation.',
    features: ['AI/ML', 'IoT', 'RPA', 'AR/VR', 'Blockchain'],
  },
]

export const employeeMetrics = [
  { value: '92%', label: 'Feel proud to work here' },
  { value: '89%', label: 'Manager supports development' },
  { value: '95%', label: 'Work feels meaningful' },
]
