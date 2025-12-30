'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Users, Globe, CheckCircle2, ArrowRight, Target, Cog, Database, Shield, Headphones, BookOpen } from 'lucide-react'

const stats = [
  { number: '200+', label: 'SAP Consultants', icon: Users },
  { number: '6', label: 'Regions Supported', icon: Globe },
  { number: '20+', label: 'Years Experience', icon: Target },
]

const services = [
  { title: 'Strategy & Assessment', description: 'Comprehensive SAP landscape evaluation and roadmap planning', icon: Target },
  { title: 'Implementation & Deployment', description: 'End-to-end SAP implementation with proven methodologies', icon: Building2 },
  { title: 'Configuration & Customization', description: 'Tailored SAP solutions to match your business processes', icon: Cog },
  { title: 'Data & Integration Services', description: 'Seamless data migration and system integration', icon: Database },
  { title: 'Testing & Quality Assurance', description: 'Rigorous testing ensuring system reliability', icon: Shield },
  { title: 'Change Management & Training', description: 'User adoption programs and organizational change support', icon: BookOpen },
  { title: 'Post-Go-Live Hypercare', description: 'Intensive support during critical transition period', icon: Headphones },
  { title: 'Application Support & Enhancement', description: 'Ongoing maintenance and continuous improvement', icon: Cog },
]

const highlights = [
  'Primary SAP Partner for Yamaha Motor Corporation',
  'Global AMS (Application Management Services) for 6 regions',
  'Multi-region Implementations across US, EU, JP, and Brazil (2025)',
  'Specialized expertise across SAP S/4HANA, SAP ECC, and SAP BTP',
  'End-to-end implementation, customization, and support capabilities',
]

export default function SAPPracticePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-ymsli-navy/95 to-ymsli-blue/90" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
                Services
              </span>
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
                SAP Practice
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Our SAP Practice is the cornerstone of YMSLI's enterprise services, with 200+ consultants
                delivering world-class SAP solutions across the globe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
                <Link href="/services" className="btn-outline">
                  All Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <stat.icon className="w-8 h-8 text-ymsli-cyan mx-auto mb-3" />
                  <p className="text-3xl font-display font-bold text-white">{stat.number}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full"
              >
                <CheckCircle2 className="w-4 h-4 text-ymsli-cyan" />
                <span className="text-white text-sm">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive SAP services from strategy to ongoing support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="w-12 h-12 rounded-xl bg-ymsli-cyan/10 flex items-center justify-center mb-4 group-hover:bg-ymsli-cyan transition-colors">
                  <service.icon className="w-6 h-6 text-ymsli-cyan group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-ymsli-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-ymsli-light">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
              Ready to Transform Your SAP Landscape?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with our SAP experts to discuss your requirements
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Our SAP Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
