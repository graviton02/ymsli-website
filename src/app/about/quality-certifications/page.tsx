'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Award, Shield, CheckCircle2, FileCheck, Lock, Globe, ClipboardCheck } from 'lucide-react'

const certifications = [
  {
    name: 'CMMI Level 3',
    fullName: 'Capability Maturity Model Integration',
    description: 'Demonstrates our defined and standardized processes across the organization, ensuring consistent delivery and continuous improvement.',
    icon: Award,
    color: 'cyan',
  },
  {
    name: 'SOC 2 Type 2',
    fullName: 'Service Organization Control',
    description: 'Validates our security, availability, processing integrity, confidentiality, and privacy controls through rigorous third-party audits.',
    icon: Shield,
    color: 'blue',
  },
  {
    name: 'ISO/IEC 27001:2022',
    fullName: 'Information Security Management',
    description: 'Ensures systematic management of sensitive company and client information through a comprehensive security management system.',
    icon: Lock,
    color: 'red',
  },
  {
    name: 'ISO/IEC 27701:2019',
    fullName: 'Privacy Information Management',
    description: 'Extends our information security practices to include privacy management, ensuring responsible handling of personal data.',
    icon: FileCheck,
    color: 'cyan',
  },
  {
    name: 'ISO 22301:2019',
    fullName: 'Business Continuity Management',
    description: 'Ensures we can continue delivering services during disruptions, maintaining operational resilience in any situation.',
    icon: ClipboardCheck,
    color: 'blue',
  },
  {
    name: 'GDPR Compliant',
    fullName: 'General Data Protection Regulation',
    description: 'Full compliance with GDPR for handling personal data of EU citizens, demonstrating our commitment to global privacy standards.',
    icon: Globe,
    color: 'red',
  },
]

const qmsStats = [
  { number: '64%', label: 'Development Projects Under QMS' },
  { number: '100%', label: 'Support Projects Under QMS' },
]

const qmsLifecycle = ['Planning', 'Development', 'Implementation', 'Service Management', 'Monitoring & Controlling']

export default function QualityCertificationsPage() {
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
              Quality & Certifications
            </h1>
            <p className="text-xl text-white/80">
              Setting Global Standards in Quality, Reliability, and Performance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Our Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A strong foundation of quality ensures lasting business impact. Our commitment to
              excellence is validated through internationally recognized certifications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                  cert.color === 'cyan' ? 'bg-ymsli-cyan/10 group-hover:bg-ymsli-cyan/20' :
                  cert.color === 'blue' ? 'bg-ymsli-blue/10 group-hover:bg-ymsli-blue/20' : 'bg-ymsli-red/10 group-hover:bg-ymsli-red/20'
                }`}>
                  <cert.icon className={`w-7 h-7 ${
                    cert.color === 'cyan' ? 'text-ymsli-cyan' :
                    cert.color === 'blue' ? 'text-ymsli-blue' : 'text-ymsli-red'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-ymsli-navy mb-1">{cert.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{cert.fullName}</p>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QMS Section */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Quality Management System
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                YMSLI QMS is implemented across our operations with comprehensive coverage,
                ensuring consistent quality delivery across all projects and services.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {qmsStats.map((stat) => (
                  <div key={stat.label} className="p-6 bg-white rounded-2xl shadow-card">
                    <p className="text-4xl font-display font-bold text-ymsli-navy mb-2">{stat.number}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold text-ymsli-navy mb-4">QMS Lifecycle Coverage</h3>
              <div className="flex flex-wrap gap-3">
                {qmsLifecycle.map((phase, index) => (
                  <div key={phase} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                    <span className="w-6 h-6 rounded-full bg-ymsli-cyan/20 text-ymsli-cyan text-xs flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 text-sm">{phase}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-ymsli-navy to-ymsli-blue p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-16 h-16 text-ymsli-cyan" />
                  </div>
                  <p className="text-white font-display text-2xl mb-2">Quality First</p>
                  <p className="text-white/60">Total Quality with Team Power</p>
                </div>
              </div>
            </motion.div>
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
              Experience Our Quality Standards
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Partner with a team that prioritizes quality in every deliverable
            </p>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
