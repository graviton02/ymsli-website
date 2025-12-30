'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Server, Cloud, Lock, Eye, AlertTriangle, CheckCircle2 } from 'lucide-react'

const infraServices = [
  { title: 'End-User Computing & Service Desk', description: 'Comprehensive support for servers, networks, and PCs' },
  { title: 'Cloud Migration & Management', description: 'Seamless transition to cloud platforms with ongoing optimization' },
  { title: 'Network & Security Operations', description: '24/7 monitoring and management of network infrastructure' },
  { title: 'Data Center Optimization', description: 'Efficiency improvements and modernization' },
  { title: 'Workplace Modernization', description: 'Modern workplace solutions for enhanced productivity' },
]

const cyberServices = [
  { title: 'Security Strategy & Risk Assessment', description: 'Comprehensive evaluation and risk mitigation planning' },
  { title: 'Threat Detection & Incident Response', description: 'Proactive monitoring and rapid response' },
  { title: 'Identity & Access Management', description: 'Secure access control and identity governance' },
  { title: 'Security Operations Center (SOC)', description: '24/7 security monitoring and threat management' },
  { title: 'Cloud Security & Compliance', description: 'Security for AWS, Azure, and GCP environments' },
  { title: 'Vulnerability Management', description: 'Regular assessments and penetration testing' },
]

export default function InfrastructureCybersecurityPage() {
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
              Infrastructure & Cybersecurity
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Robust, secure, and scalable infrastructure management for modern enterprises.
              Our comprehensive cybersecurity services protect your digital assets and ensure
              business continuity.
            </p>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <Server className="w-8 h-8 text-ymsli-cyan" />
              <h2 className="text-3xl font-display font-bold text-ymsli-navy">Infrastructure Services</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {infraServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-ymsli-light"
              >
                <h3 className="font-semibold text-ymsli-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-ymsli-red" />
              <h2 className="text-3xl font-display font-bold text-ymsli-navy">Cybersecurity Services</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cyberServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white shadow-card"
              >
                <h3 className="font-semibold text-ymsli-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
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
              Secure Your Digital Future
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Let our experts assess your infrastructure and security posture
            </p>
            <Link href="/contact" className="btn-secondary">
              Get a Security Assessment
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
