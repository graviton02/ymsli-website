'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Settings, Users, Rocket, Brain, Cpu, Bot, Glasses, Link2, CreditCard, Store, Layers, ArrowRight, CheckCircle2 } from 'lucide-react'

const dxPillars = [
  {
    id: 'dx1',
    title: 'Y-DX1: Reform Management Platforms',
    focus: 'DX and HR Development',
    description: 'Accelerate decision-making and standardize processes across the organization.',
    icon: Settings,
    color: 'from-blue-500 to-blue-700',
    highlights: [
      'Primary SAP & D365 Partner for YMC and Regional Entities',
      'End-to-End Support for ERP and CRM Systems (Microsoft, Salesforce, etc.)',
      'Promote companywide use of digital technologies',
      'Training in emerging technologies and development of ETIL',
    ],
  },
  {
    id: 'dx2',
    title: 'Y-DX2: Strengthen The Present',
    focus: 'Connect with customers and offer new experiences',
    description: 'Developing solutions that strengthen Yamaha\'s current business operations and customer engagement.',
    icon: Users,
    color: 'from-cyan-500 to-cyan-700',
    highlights: [
      'Development and support in FinTech applications',
      'Development of G-System platforms',
      'Development of Dealer Management Systems',
      'Customer experience enhancement solutions',
    ],
  },
  {
    id: 'dx3',
    title: 'Y-DX3: Create The Future',
    focus: 'Preparations for next-generation value creation',
    description: 'Exploring and implementing cutting-edge technologies to create tomorrow\'s solutions today.',
    icon: Rocket,
    color: 'from-red-500 to-red-700',
    highlights: [
      'Artificial Intelligence / Machine Learning',
      'Internet of Things (IoT)',
      'Robotics Process Automation (RPA)',
      'Augmented Reality / Virtual Reality (AR/VR)',
      'Non-Fungible Tokens / Blockchain',
    ],
  },
]

const futureTechnologies = [
  { name: 'AI/ML', icon: Brain, description: 'Intelligent automation and predictive analytics' },
  { name: 'IoT', icon: Cpu, description: 'Connected devices and sensor networks' },
  { name: 'RPA', icon: Bot, description: 'Process automation and efficiency' },
  { name: 'AR/VR', icon: Glasses, description: 'Immersive experiences and visualization' },
  { name: 'Blockchain', icon: Link2, description: 'Secure, decentralized solutions' },
]

export default function DXJourneyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-ymsli-navy/95 to-ymsli-blue/90" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              Innovation
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Yamaha DX Journey
            </h1>
            <p className="text-xl text-white/80 mb-8">
              YMSLI is a GCC designed to scale, innovate, and optimize technology operations for Yamaha.
              Our DX (Digital Transformation) journey is structured around three strategic pillars that
              guide Yamaha's technology evolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <Settings className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <p className="text-xl font-display font-bold text-white">Y-DX1</p>
              <p className="text-white/60 text-sm">Reform Platforms</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-xl font-display font-bold text-white">Y-DX2</p>
              <p className="text-white/60 text-sm">Strengthen Present</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <Rocket className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <p className="text-xl font-display font-bold text-white">Y-DX3</p>
              <p className="text-white/60 text-sm">Create Future</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DX Pillars */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Three Strategic Pillars
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our DX journey is structured around three pillars that together drive Yamaha's comprehensive
              digital transformation strategy.
            </p>
          </motion.div>

          <div className="space-y-8">
            {dxPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className={`w-full lg:w-1/3 p-8 rounded-2xl bg-gradient-to-br ${pillar.color} flex flex-col justify-center`}>
                    <pillar.icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-white/80 text-sm font-medium">
                      Focus: {pillar.focus}
                    </p>
                  </div>
                  <div className="flex-1 py-4">
                    <p className="text-gray-600 text-lg mb-6">{pillar.description}</p>
                    <ul className="space-y-3">
                      {pillar.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-ymsli-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Y-DX3 Technologies */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Creating The Future
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Y-DX3 focuses on next-generation technologies that will shape Yamaha's future
              and create new value for customers worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {futureTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-ymsli-red/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-ymsli-red transition-colors">
                  <tech.icon className="w-7 h-7 text-ymsli-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-ymsli-navy mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ymsli-navy">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Explore Our Innovation Ecosystem
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              See how our DX journey creates real-world impact through success stories and partnerships
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/innovation/success-stories" className="btn-secondary">
                Success Stories
              </Link>
              <Link href="/innovation/ecosystem" className="btn-outline">
                Ecosystem & Partnerships
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
