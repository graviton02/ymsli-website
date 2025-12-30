'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Cog, Cpu, Smartphone, Globe, Bot, ShoppingCart } from 'lucide-react'

const services = [
  {
    title: 'Embedded Software Development',
    description: 'Design and development of firmware and embedded systems for connected products, IoT devices, and industrial applications.',
    icon: Cpu,
  },
  {
    title: 'Product Engineering',
    description: 'End-to-end product development services from concept to deployment with focus on performance, reliability, and user experience.',
    icon: Cog,
  },
  {
    title: 'Platform Modernization',
    description: 'Transform legacy systems into modern, scalable platforms. Re-architect and migrate applications to cloud-native architectures.',
    icon: Globe,
  },
  {
    title: 'Robotics Applications',
    description: 'Development of robotics software and automation solutions for manufacturing, agriculture, and mobility applications.',
    icon: Bot,
  },
  {
    title: 'Mobile & Web Applications',
    description: 'Native and cross-platform mobile applications, progressive web apps, and responsive web solutions for Yamaha entities.',
    icon: Smartphone,
  },
  {
    title: 'E-Commerce & Digital Platforms',
    description: 'Design and development of e-commerce platforms, dealer portals, and B2B/B2C digital solutions.',
    icon: ShoppingCart,
  },
]

const segments = ['Motorcycles', 'Marine Products', 'Robotics', 'Agriculture', 'Industrial Machinery']

export default function EngineeringServicesPage() {
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
              Engineering Services
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Build tomorrow's products with our comprehensive engineering capabilities. From embedded
              systems to platform modernization, we deliver solutions that power Yamaha's innovations.
            </p>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <p className="text-white/60 text-center text-sm mb-6">SEGMENTS WE SERVE</p>
          <div className="flex flex-wrap justify-center gap-3">
            {segments.map((segment) => (
              <span key={segment} className="px-4 py-2 bg-white/10 text-white rounded-full text-sm">
                {segment}
              </span>
            ))}
          </div>
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
                <div className="w-14 h-14 rounded-2xl bg-ymsli-blue/10 flex items-center justify-center mb-4 group-hover:bg-ymsli-blue transition-colors">
                  <service.icon className="w-7 h-7 text-ymsli-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-ymsli-navy mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
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
              Ready to Build the Future?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Partner with our engineering team to bring your product vision to life
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
