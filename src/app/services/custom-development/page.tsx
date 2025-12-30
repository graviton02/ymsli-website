'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code2, Smartphone, Globe, Cloud, Cog, Layers, ArrowRight, CheckCircle2 } from 'lucide-react'

const capabilities = [
  {
    title: 'Full-Stack Development',
    description: 'End-to-end application development using modern frameworks. Proficient in frontend and backend development, delivering complete solutions.',
    icon: Code2,
  },
  {
    title: 'Mobile & Web Applications',
    description: 'Native and cross-platform mobile applications, progressive web apps, and responsive web solutions designed for optimal user experience.',
    icon: Smartphone,
  },
  {
    title: 'API & Microservices Architecture',
    description: 'Design and implementation of RESTful APIs, microservices architectures, and integration solutions for seamless connectivity.',
    icon: Layers,
  },
  {
    title: 'DevOps & CI/CD Enablement',
    description: 'Automated pipelines, infrastructure as code, and DevOps practices that accelerate delivery and improve quality.',
    icon: Cog,
  },
  {
    title: 'Cloud-First Solutions',
    description: 'Cloud-native development on AWS, Azure, and GCP, leveraging serverless computing, containers, and managed services.',
    icon: Cloud,
  },
]

const techStack = ['React', 'Angular', 'Vue.js', 'Node.js', 'Python', 'Java', 'Spring Boot', '.NET', 'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL']

export default function CustomDevelopmentPage() {
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
              Custom Application Development
            </h1>
            <p className="text-xl text-white/80 mb-8">
              We build agile, scalable, and cloud-native solutions tailored to your unique business
              challenges. Our development teams combine technical excellence with deep domain knowledge.
            </p>
            <Link href="/contact" className="btn-secondary">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <p className="text-white/60 text-center text-sm mb-6">TECHNOLOGIES WE USE</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white/10 text-white rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Core Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="w-14 h-14 rounded-2xl bg-ymsli-red/10 flex items-center justify-center mb-4 group-hover:bg-ymsli-red transition-colors">
                  <cap.icon className="w-7 h-7 text-ymsli-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-ymsli-navy mb-3">{cap.title}</h3>
                <p className="text-gray-600">{cap.description}</p>
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
              Have a Project in Mind?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your ideas to life
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
