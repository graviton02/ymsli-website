'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Code2, Shield, Brain, Lightbulb, Cog, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: 'SAP Practice',
    description: 'Our cornerstone enterprise service with 200+ SAP consultants delivering world-class solutions globally.',
    icon: Building2,
    href: '/services/sap-practice',
    highlights: ['200+ SAP Consultants', 'Global AMS for 6 Regions', 'Multi-region Implementations'],
    color: 'cyan',
  },
  {
    title: 'Enterprise Applications',
    description: 'Comprehensive solutions across Microsoft D365, Salesforce, Adobe, ServiceNow, and Kinaxis.',
    icon: Building2,
    href: '/services/enterprise-applications',
    highlights: ['260+ Specialists', 'Multi-platform Expertise', 'FinTech Applications'],
    color: 'blue',
  },
  {
    title: 'Custom Development',
    description: 'Agile, scalable, cloud-native solutions tailored to your unique business challenges.',
    icon: Code2,
    href: '/services/custom-development',
    highlights: ['Full-Stack Development', 'Mobile & Web Apps', 'API Architecture'],
    color: 'red',
  },
  {
    title: 'Infrastructure & Cybersecurity',
    description: 'Robust, secure infrastructure management protecting your digital assets.',
    icon: Shield,
    href: '/services/infrastructure-cybersecurity',
    highlights: ['24/7 SOC Services', 'Cloud Migration', 'Threat Detection'],
    color: 'cyan',
  },
  {
    title: 'Data & AI Services',
    description: 'Transform data into actionable insights with advanced analytics and AI/ML.',
    icon: Brain,
    href: '/services/data-ai',
    highlights: ['Data Engineering', 'AI/ML Models', 'Business Intelligence'],
    color: 'blue',
  },
  {
    title: 'Engineering Services',
    description: 'Product engineering from embedded software to robotics applications.',
    icon: Cog,
    href: '/services/engineering',
    highlights: ['Embedded Software', 'Platform Modernization', 'Robotics'],
    color: 'red',
  },
  {
    title: 'Digital Transformation',
    description: 'Accelerate your journey with strategy, technology, and change management.',
    icon: Rocket,
    href: '/services/digital-transformation',
    highlights: ['Digital Strategy', 'Process Automation', 'DevOps & Agile'],
    color: 'cyan',
  },
]

const domains = [
  {
    title: 'Core IT & Enterprise Applications',
    items: ['Enterprise Application Services (ERP, CRM, DMS, B2B)', 'Custom Application Development', 'Enterprise IT Operations & Maintenance', 'Quality Assurance'],
  },
  {
    title: 'Emerging Technologies',
    items: ['Data Engineering, Analytics, and AI/ML Services', 'AI Research for Agritech & Medical', 'Digital Transformation Services', 'DevOps & Agile Delivery Services'],
  },
  {
    title: 'Infrastructure & Security',
    items: ['Cloud Infrastructure Services', 'Cybersecurity and Risk Management', 'IT Governance, Risk, and Compliance', 'Business Process Management'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-ymsli-navy/95 to-ymsli-blue/90" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              A One-Stop Solution for Global Technology Needs
            </h1>
            <p className="text-xl text-white/80">
              YMSLI delivers solutions that drive business outcomes across enterprise applications,
              emerging technologies, and infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Domains Overview */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{domain.title}</h3>
                <ul className="space-y-2">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/60 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-ymsli-cyan flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Explore Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From enterprise applications to emerging technologies, we provide comprehensive IT services
              that help organizations transform, optimize, and grow.
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
              >
                <Link href={service.href} className="block card h-full group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                    service.color === 'cyan' ? 'bg-ymsli-cyan/10 group-hover:bg-ymsli-cyan' :
                    service.color === 'blue' ? 'bg-ymsli-blue/10 group-hover:bg-ymsli-blue' : 'bg-ymsli-red/10 group-hover:bg-ymsli-red'
                  }`}>
                    <service.icon className={`w-7 h-7 transition-colors ${
                      service.color === 'cyan' ? 'text-ymsli-cyan group-hover:text-white' :
                      service.color === 'blue' ? 'text-ymsli-blue group-hover:text-white' : 'text-ymsli-red group-hover:text-white'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-ymsli-navy mb-3 group-hover:text-ymsli-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-gray-500 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-ymsli-cyan" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-ymsli-navy font-medium text-sm group-hover:text-ymsli-red transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with our experts to discover how YMSLI can help you achieve your technology goals
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
