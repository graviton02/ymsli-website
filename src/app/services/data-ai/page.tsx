'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Brain, Database, BarChart3, Cpu, Sprout, Heart, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: 'Data Engineering',
    description: 'Design and implementation of robust data pipelines, data lakes, and data warehouses that scale with your business needs.',
    icon: Database,
  },
  {
    title: 'Business Intelligence & Analytics',
    description: 'Interactive dashboards, reporting solutions, and advanced analytics providing real-time visibility into business performance.',
    icon: BarChart3,
  },
  {
    title: 'AI/ML Model Development',
    description: 'Custom machine learning models for prediction, classification, and optimization. From proof of concept to production deployment.',
    icon: Cpu,
  },
  {
    title: 'AI Research - Agriculture',
    description: 'Pioneering AI applications including crop yield prediction, nutrient recommendation systems, and precision farming solutions.',
    icon: Sprout,
  },
  {
    title: 'AI Research - Medical',
    description: 'Medical imaging and healthcare AI solutions including cell segmentation and diagnostic support systems.',
    icon: Heart,
  },
]

const collaborations = [
  'IARI (Indian Agricultural Research Institute)',
  'IRRI (International Rice Research Institute)',
  'IIT Delhi',
  'IIT Ropar',
  'IIT Roorkee',
]

export default function DataAIPage() {
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
              Services
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Data & AI Services
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Transform your data into actionable insights with our comprehensive data engineering,
              analytics, and AI/ML services. We help organizations unlock the value of their data
              to make smarter, faster business decisions.
            </p>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Service Offerings
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="w-14 h-14 rounded-2xl bg-ymsli-cyan/10 flex items-center justify-center mb-4 group-hover:bg-ymsli-cyan transition-colors">
                  <service.icon className="w-7 h-7 text-ymsli-cyan group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-ymsli-navy mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Collaborations */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Research Collaborations
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We partner with leading academic and research institutions to advance AI applications
                in agriculture and healthcare.
              </p>
              <ul className="space-y-3">
                {collaborations.map((collab) => (
                  <li key={collab} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ymsli-cyan" />
                    <span className="text-gray-700">{collab}</span>
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
                <Brain className="w-32 h-32 text-ymsli-cyan/30" />
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
              Unlock the Power of Your Data
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Let our data and AI experts help you transform your business
            </p>
            <Link href="/contact" className="btn-secondary">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
