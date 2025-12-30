'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Globe, Users, Lightbulb, Building2, Award, Target } from 'lucide-react'

const timeline = [
  {
    year: '2002',
    title: 'The Beginning',
    description: 'YMSLI was established as a subsidiary of Yamaha Motor Solutions Group, Japan, to provide IT services to Yamaha Motor India and the broader Yamaha ecosystem.',
    icon: Building2,
  },
  {
    year: '2005-2010',
    title: 'Growth Phase',
    description: 'Expanded capabilities beyond basic IT support to include enterprise applications, custom development, and infrastructure management.',
    icon: Target,
  },
  {
    year: '2011-2018',
    title: 'Global Expansion',
    description: 'Evolved into a Global Capability Center with presence across six continents, supporting Yamaha\'s digital transformation initiatives worldwide.',
    icon: Globe,
  },
  {
    year: '2019-Present',
    title: 'Innovation Focus',
    description: 'Our Emerging Technology and Innovation Lab (ETIL) now leads research in AI, IoT, Robotics, and next-generation technologies.',
    icon: Lightbulb,
  },
]

const milestones = [
  { number: '25+', label: 'Countries Served' },
  { number: '800+', label: 'Team Members' },
  { number: '6', label: 'Continents' },
  { number: '4x', label: 'GPTW Certified' },
]

export default function OurStoryPage() {
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
              About Us
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/80 mb-8">
              From Local IT Support to Global Capability Center
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Since 2002, YMSLI has been the trusted technology partner of Yamaha Motor Group.
              What began as a dedicated IT arm has evolved into a full-fledged Global Capability
              Center, serving clients across 25+ countries with a team of 800+ skilled professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Two decades of growth, innovation, and global expansion
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ymsli-cyan via-ymsli-blue to-ymsli-navy hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                    <div className={`card ${index % 2 === 0 ? 'lg:ml-auto' : ''} max-w-md`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-ymsli-cyan/10 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-ymsli-cyan" />
                        </div>
                        <span className="text-2xl font-display font-bold text-ymsli-navy">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-ymsli-navy mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-ymsli-cyan rounded-full border-4 border-white shadow-lg hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Yamaha Connection */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                The Yamaha Connection
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                As part of the Yamaha Motor Group, we bring deep domain expertise in manufacturing,
                automotive, and mobility sectors. Our exclusive association with Yamaha gives us
                unparalleled understanding of the industry's technology needs and challenges.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We support Yamaha's global operations across motorcycles, marine products, robotics,
                and other business segments, delivering technology solutions that drive competitive advantage.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((milestone) => (
                  <div key={milestone.label} className="p-4 bg-white rounded-xl shadow-card">
                    <p className="text-3xl font-display font-bold text-ymsli-navy">{milestone.number}</p>
                    <p className="text-gray-600 text-sm">{milestone.label}</p>
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
              <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-ymsli-navy to-ymsli-blue p-1">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-ymsli-navy/50 to-ymsli-blue/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                      <span className="text-4xl font-bold font-display text-white">Y</span>
                    </div>
                    <p className="text-white font-display text-xl">YAMAHA MOTOR GROUP</p>
                    <p className="text-ymsli-cyan text-sm">Trusted Partner Since 2002</p>
                  </div>
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
              Want to Know More?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Explore our vision, leadership team, and global footprint
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about/vision-mission" className="btn-secondary">
                Our Vision
              </Link>
              <Link href="/about/leadership" className="btn-outline">
                Leadership Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
