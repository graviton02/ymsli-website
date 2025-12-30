'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Rocket, Target, Cog, GitBranch, Users, Workflow, BookOpen } from 'lucide-react'

const services = [
  {
    title: 'Digital Strategy & Consulting',
    description: 'Assessment of digital maturity and development of comprehensive transformation roadmaps.',
    icon: Target,
  },
  {
    title: 'Process Automation',
    description: 'Streamline operations through RPA, workflow optimization, and intelligent automation.',
    icon: Cog,
  },
  {
    title: 'Agile Delivery Services',
    description: 'Accelerate time-to-market with Agile methodologies and cross-functional teams.',
    icon: GitBranch,
  },
  {
    title: 'DevOps & CI/CD Enablement',
    description: 'Build robust delivery pipelines with infrastructure as code and automated testing.',
    icon: Workflow,
  },
  {
    title: 'Customer Experience Transformation',
    description: 'Redesign customer journeys with data, design thinking, and personalized experiences.',
    icon: Users,
  },
  {
    title: 'Change Management & Adoption',
    description: 'Ensure successful transformation through training, communication, and stakeholder engagement.',
    icon: BookOpen,
  },
]

export default function DigitalTransformationPage() {
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
              Digital Transformation
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Accelerate your journey to becoming a digital-first organization. Our digital
              transformation services combine strategic consulting, technology implementation,
              and change management to help enterprises reimagine their operations.
            </p>
            <Link href="/contact" className="btn-secondary">
              Start Your Journey
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive transformation services powered by Agile and DevOps-driven delivery
            </p>
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

      {/* Yamaha DX */}
      <section className="section bg-ymsli-navy">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Rocket className="w-16 h-16 text-ymsli-cyan mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                Driving Yamaha's DX Journey
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8">
                As the driving force behind Yamaha's DX journey, we bring proven methodologies
                and deep expertise to every transformation initiative.
              </p>
              <Link href="/innovation/dx-journey" className="btn-secondary">
                Learn About Our DX Journey
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ymsli-light">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
              Ready to Transform?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how we can accelerate your digital transformation
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
