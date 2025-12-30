'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lightbulb, Brain, Cpu, Bot, Glasses, Link2, Users, GraduationCap, ArrowRight, Sparkles } from 'lucide-react'

const focusTechnologies = [
  { name: 'AI/GenAI', description: 'Artificial Intelligence and Generative AI applications', icon: Brain },
  { name: 'Internet of Things', description: 'Connected devices and sensor networks', icon: Cpu },
  { name: 'Embedded Software', description: 'Firmware and embedded systems', icon: Cpu },
  { name: 'Robotics', description: 'Robotic systems and automation', icon: Bot },
  { name: 'Agentic AI', description: 'Autonomous AI agents', icon: Brain },
  { name: 'AR/VR', description: 'Augmented and virtual reality', icon: Glasses },
]

const stats = [
  { number: '70+', label: 'PoCs Built' },
  { number: '5', label: 'Research Papers (2024)' },
  { number: '300+', label: 'Startup Collaborations' },
  { number: '9', label: 'University Partners' },
]

const sections = [
  {
    title: 'Innovation Lab (ETIL)',
    description: 'Our dedicated R&D center exploring cutting-edge technologies',
    href: '/innovation/etil',
    icon: Lightbulb,
  },
  {
    title: 'Yamaha DX Journey',
    description: 'Driving Yamaha\'s digital transformation across three pillars',
    href: '/innovation/dx-journey',
    icon: Sparkles,
  },
  {
    title: 'Success Stories',
    description: 'Real projects delivering impact across industries',
    href: '/innovation/success-stories',
    icon: ArrowRight,
  },
  {
    title: 'Ecosystem & Partnerships',
    description: 'Collaborations with startups and universities',
    href: '/innovation/ecosystem',
    icon: Link2,
  },
]

export default function InnovationPage() {
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
              Driving the Future with an Innovation DNA
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Innovation is in our DNA—pushing boundaries to shape the future. Our Emerging Technology
              and Innovation Lab (ETIL) leads the charge in exploring, developing, and deploying
              next-generation technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <p className="text-4xl font-display font-bold text-ymsli-cyan">{stat.number}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Technologies */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Focus Technologies
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {focusTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-ymsli-light hover:bg-ymsli-cyan/10 transition-colors group"
              >
                <tech.icon className="w-10 h-10 text-ymsli-cyan mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-ymsli-navy text-sm">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={section.href} className="block card h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-ymsli-cyan/10 flex items-center justify-center group-hover:bg-ymsli-cyan transition-colors">
                      <section.icon className="w-7 h-7 text-ymsli-cyan group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-ymsli-navy mb-2 group-hover:text-ymsli-red transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-ymsli-red group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
