'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Award, Heart, Users, Briefcase, BookOpen, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

const gptwMetrics = [
  { value: '92%', label: 'Feel proud to work here' },
  { value: '89%', label: 'Manager supports development' },
  { value: '95%', label: 'Work feels meaningful' },
]

const gptwScores = [
  { category: 'Credibility', score: 89 },
  { category: 'Respect', score: 87 },
  { category: 'Fairness', score: 85 },
  { category: 'Pride', score: 89 },
  { category: 'Camaraderie', score: 90 },
]

const culturePillars = [
  { title: 'Culture of Trust & Respect', icon: Heart },
  { title: 'Empowered Teams', icon: Users },
  { title: 'Work-Life Harmony', icon: Sparkles },
  { title: 'Innovation-Driven', icon: Briefcase },
  { title: 'Learning & Growth', icon: BookOpen },
]

const sections = [
  { title: 'Life at YMSLI', description: 'Our culture, events, and workplace', href: '/careers/life-at-ymsli' },
  { title: 'Benefits & Wellness', description: 'Comprehensive employee benefits', href: '/careers/benefits-wellness' },
  { title: 'Learning & Development', description: 'Growth opportunities and training', href: '/careers/learning-development' },
  { title: 'Diversity & CSR', description: 'Inclusion and community impact', href: '/careers/diversity-csr' },
  { title: 'Open Positions', description: 'Current job opportunities', href: '/careers/open-positions' },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-ymsli-navy/95 to-ymsli-blue/90" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
                Careers
              </span>
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
                A Great Place to Work with World-Class Talent
              </h1>
              <p className="text-xl text-white/80 mb-8">
                YMSLI's culture of collaboration, empowerment, and innovation has led to four
                consecutive Great Place to Work® certifications.
              </p>
              <Link href="/careers/open-positions" className="btn-secondary">
                View Open Positions
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-48 h-48 bg-ymsli-red rounded-2xl flex flex-col items-center justify-center text-white">
                  <Award className="w-12 h-12 mb-2" />
                  <span className="font-display font-bold text-xl">Great Place</span>
                  <span className="font-display font-bold text-xl">To Work</span>
                  <span className="text-sm mt-1">Certified</span>
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-white rounded-full shadow-lg">
                  <span className="font-semibold text-ymsli-navy">4 Years</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GPTW Metrics */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {gptwMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <p className="text-5xl font-display font-bold text-ymsli-cyan mb-2">{metric.value}</p>
                <p className="text-white/60">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Pillars */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Our Culture Pillars
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {culturePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-ymsli-light"
              >
                <pillar.icon className="w-10 h-10 text-ymsli-cyan mx-auto mb-3" />
                <h3 className="font-semibold text-ymsli-navy text-sm">{pillar.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GPTW Scores */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Great Place To Work Survey Scores
              </h2>
              <p className="text-gray-600 mb-8">
                Our consistently high scores across all dimensions reflect our commitment to
                creating an exceptional workplace experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {gptwScores.map((score, index) => (
                <div key={score.category} className="bg-white p-4 rounded-xl shadow-card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-ymsli-navy">{score.category}</span>
                    <span className="font-bold text-ymsli-cyan">{score.score}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${score.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-ymsli-cyan to-ymsli-blue rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Explore Careers at YMSLI
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={section.href} className="block card h-full group">
                  <h3 className="text-lg font-semibold text-ymsli-navy mb-2 group-hover:text-ymsli-red transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                  <span className="text-ymsli-cyan text-sm font-medium group-hover:text-ymsli-red transition-colors flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Explore current opportunities and take the next step in your career
            </p>
            <Link href="/careers/open-positions" className="btn-secondary">
              View Open Positions
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
