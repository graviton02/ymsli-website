'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Lightbulb, Users, FileText, GraduationCap, Brain, Cpu, Bot, Code2, CheckCircle2 } from 'lucide-react'

const stats = [
  { number: '~30', label: 'Professionals', icon: Users },
  { number: '70+', label: 'PoCs Built', icon: Lightbulb },
  { number: '5', label: 'Research Papers (2024)', icon: FileText },
  { number: '5', label: 'University Hackathons', icon: GraduationCap },
]

const activities = [
  {
    title: 'Research & Exploration',
    description: 'Continuous exploration of emerging technologies and their potential applications',
    icon: Brain,
  },
  {
    title: 'Proof of Concept Development',
    description: 'Rapid prototyping and validation of new ideas',
    icon: Code2,
  },
  {
    title: 'Research Publications',
    description: 'Contributing to the broader technology community through research papers',
    icon: FileText,
  },
  {
    title: 'University Hackathons',
    description: 'Engaging with academic talent and fostering innovation culture',
    icon: GraduationCap,
  },
]

const focusAreas = [
  'Artificial Intelligence / Generative AI',
  'Internet of Things (IoT)',
  'Embedded Software Development',
  'Robotics & Automation',
  'Agentic AI Systems',
  'Autonomous Mobility Solutions',
]

export default function ETILPage() {
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
              Innovation Lab (ETIL)
            </h1>
            <p className="text-xl text-white/80 mb-8">
              The Emerging Technology and Innovation Lab is YMSLI's dedicated R&D center exploring
              cutting-edge technologies, developing proof of concepts, and transforming innovative
              ideas into production-ready solutions.
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
                <stat.icon className="w-8 h-8 text-ymsli-cyan mx-auto mb-3" />
                <p className="text-3xl font-display font-bold text-white">{stat.number}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              What We Do
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-ymsli-cyan/10 flex items-center justify-center group-hover:bg-ymsli-cyan transition-colors">
                    <activity.icon className="w-7 h-7 text-ymsli-cyan group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ymsli-navy mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Focus Areas
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We concentrate our research and development efforts on technologies that will
                shape the future of Yamaha and the broader industry.
              </p>
              <ul className="space-y-3">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ymsli-cyan flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-ymsli-navy to-ymsli-blue flex items-center justify-center">
                <div className="text-center">
                  <Lightbulb className="w-24 h-24 text-ymsli-cyan mx-auto mb-4" />
                  <p className="text-white font-display text-2xl">Innovation DNA</p>
                  <p className="text-white/60">Pushing boundaries to shape the future</p>
                </div>
              </div>
            </motion.div>
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
              Explore Our Innovation Journey
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              See how we're driving Yamaha's digital transformation and creating tomorrow's solutions today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/innovation/success-stories" className="btn-secondary">
                Success Stories
              </Link>
              <Link href="/innovation/dx-journey" className="btn-outline">
                DX Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
