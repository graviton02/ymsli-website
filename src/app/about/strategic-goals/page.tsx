'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Target, Building2, Cog, Leaf, Users, Lightbulb, Globe, ChevronRight } from 'lucide-react'

const strategicGoals = [
  {
    number: '01',
    title: 'Business Impact & Value Delivery',
    description: 'Drive digital transformation across Yamaha entities',
    details: [
      'Deliver outcomes in IT, Engineering, Data, and Business functions',
      'Drive measurable business impact across all initiatives',
      'Align technology investments with business objectives',
    ],
    icon: Target,
    color: 'cyan',
  },
  {
    number: '02',
    title: 'Center of Excellence Development',
    description: 'Build CoEs in AI, Microsoft, SAP, FinTech, Robotics, Cybersecurity',
    details: [
      'Provide scalable, domain-led expertise',
      'Establish industry-leading practices',
      'Foster knowledge sharing and innovation',
    ],
    icon: Building2,
    color: 'blue',
  },
  {
    number: '03',
    title: 'Operational Efficiency',
    description: 'Standardize and optimize processes to reduce cycle times',
    details: [
      'Ensure quality with certifications: CMMI L3, SOC 2, ISMS, PIMS, GDPR, BCMS',
      'Implement continuous improvement methodologies',
      'Optimize resource utilization and delivery',
    ],
    icon: Cog,
    color: 'red',
  },
  {
    number: '04',
    title: 'Sustainability & Inclusion',
    description: 'Align workplace with Yamaha\'s ESG goals',
    details: [
      'Build inclusive, responsible culture through community programs',
      'Implement CSR initiatives with meaningful impact',
      'Drive environmental sustainability in operations',
    ],
    icon: Leaf,
    color: 'cyan',
  },
  {
    number: '05',
    title: 'Talent & Capability Building',
    description: 'Develop talent and leadership pipelines',
    details: [
      'Structured skilling and upskilling programs',
      'Enable career growth via domain and leadership frameworks',
      'Build next-generation technology leaders',
    ],
    icon: Users,
    color: 'blue',
  },
  {
    number: '06',
    title: 'Innovation & Co-Creation',
    description: 'Incubate new ideas with startups, universities, ecosystem partners',
    details: [
      'Co-create with YMC Tech R&D and New Business Development',
      'Foster innovation culture through hackathons and labs',
      'Partner with YMV for next-gen solutions',
    ],
    icon: Lightbulb,
    color: 'red',
  },
  {
    number: '07',
    title: 'Global Collaboration & Integration',
    description: 'Strengthen integration with HQ and regions',
    details: [
      'Support SAP/D365 rollout across 6 regions',
      'Seamless global strategy execution',
      'Enable cross-regional knowledge transfer',
    ],
    icon: Globe,
    color: 'cyan',
  },
]

export default function StrategicGoalsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-ymsli-navy/95 to-ymsli-blue/90" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              About Us
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Strategic Goals
            </h1>
            <p className="text-xl text-white/80">
              Seven pillars guiding our growth, operational excellence, and value creation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Goals Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Our Strategic Framework
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built on seven pillars that guide our growth and create lasting value for our clients and stakeholders
            </p>
          </motion.div>

          <div className="space-y-6">
            {strategicGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="card hover:shadow-card-hover">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex items-center gap-4">
                      <span className={`text-5xl font-display font-bold ${
                        goal.color === 'cyan' ? 'text-ymsli-cyan' :
                        goal.color === 'blue' ? 'text-ymsli-blue' : 'text-ymsli-red'
                      }`}>
                        {goal.number}
                      </span>
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        goal.color === 'cyan' ? 'bg-ymsli-cyan/10' :
                        goal.color === 'blue' ? 'bg-ymsli-blue/10' : 'bg-ymsli-red/10'
                      }`}>
                        <goal.icon className={`w-7 h-7 ${
                          goal.color === 'cyan' ? 'text-ymsli-cyan' :
                          goal.color === 'blue' ? 'text-ymsli-blue' : 'text-ymsli-red'
                        }`} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-ymsli-navy mb-2 group-hover:text-ymsli-red transition-colors">
                        {goal.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{goal.description}</p>
                      <ul className="space-y-2">
                        {goal.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-gray-500 text-sm">
                            <ChevronRight className="w-4 h-4 text-ymsli-cyan flex-shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-ymsli-navy">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              See Our Global Impact
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Explore our worldwide presence and the quality certifications that validate our commitment
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about/global-footprint" className="btn-secondary">
                Global Footprint
              </Link>
              <Link href="/about/quality-certifications" className="btn-outline">
                Quality & Certifications
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
