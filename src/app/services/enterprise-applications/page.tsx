'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Users, Layers, CheckCircle2, ArrowRight } from 'lucide-react'

const platforms = [
  {
    name: 'Microsoft Dynamics 365',
    description: 'Full-spectrum D365 services including Finance & Operations, Customer Engagement, and Business Central implementations.',
    features: ['Finance & Operations', 'Customer Engagement', 'Business Central', 'Power Platform'],
  },
  {
    name: 'Salesforce',
    description: 'CRM solutions leveraging Salesforce Sales Cloud, Service Cloud, and custom application development.',
    features: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Custom Apps'],
  },
  {
    name: 'Adobe Experience Platform',
    description: 'Digital experience solutions for personalization, analytics, and customer journey management.',
    features: ['Experience Manager', 'Analytics', 'Campaign', 'Target'],
  },
  {
    name: 'ServiceNow',
    description: 'IT Service Management, IT Operations Management, and workflow automation solutions.',
    features: ['ITSM', 'ITOM', 'HR Service Delivery', 'Custom Apps'],
  },
  {
    name: 'Kinaxis',
    description: 'Supply chain planning and management solutions for enhanced visibility and agility.',
    features: ['Supply Planning', 'Demand Planning', 'S&OP', 'Analytics'],
  },
]

const stats = [
  { number: '260+', label: 'Specialists' },
  { number: '5+', label: 'Platform Expertise' },
  { number: '15+', label: 'Years Experience' },
]

export default function EnterpriseApplicationsPage() {
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
              Enterprise Application Practice
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Comprehensive solutions across the Microsoft ecosystem and beyond with 260+ specialists
              helping organizations leverage the full power of enterprise platforms.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-display font-bold text-ymsli-cyan">{stat.number}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Platform Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multi-platform expertise in leading enterprise solutions
            </p>
          </motion.div>

          <div className="space-y-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-card-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-ymsli-navy mb-2">{platform.name}</h3>
                    <p className="text-gray-600 mb-4">{platform.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.features.map((feature) => (
                        <span key={feature} className="px-3 py-1 bg-ymsli-cyan/10 text-ymsli-navy text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                </div>
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
              Ready to Modernize Your Enterprise Applications?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Connect with our experts to explore your options
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
