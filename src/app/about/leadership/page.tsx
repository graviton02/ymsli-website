'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { User, Building2, Briefcase, Users } from 'lucide-react'

const boardOfDirectors = [
  { name: 'Fujita Naoto', role: 'YMSLI Chairman', description: 'Leading YMSLI\'s strategic direction' },
  { name: 'Otani Itaru', role: 'YMSLI Director & YMI-Gr Chairman', description: 'Overseeing group integration' },
  { name: 'Sanjay Kumar Singh', role: 'Managing Director', description: 'Driving operational excellence' },
  { name: 'Sanjay Aggarwal', role: 'Director, CTO', description: 'Leading technology strategy' },
  { name: 'Kojiro Iwasawa', role: 'Director', description: 'Strategic initiatives' },
]

const organizationCenters = [
  {
    name: 'Value Delivery Center',
    description: 'Delivers technology solutions through specialized practices',
    practices: [
      { name: 'SAP Practice', leader: 'Saurabh Siwach' },
      { name: 'Microsoft Practice', leader: 'Vishal Kumar Thakur' },
      { name: 'OSS Practice', leader: 'Nilesh Kumar' },
      { name: 'YNA Practice', leader: 'Sushant Kumar' },
      { name: 'Infra & Cybersecurity', leader: 'Sanjeev Adlakha' },
      { name: 'Innovation Lab', leader: 'Lalit Sharma' },
    ],
    color: 'cyan',
  },
  {
    name: 'Strategy and Governance Center',
    description: 'Strategic planning and quality assurance',
    practices: [
      { name: 'Corporate Planning', leader: 'Nitin Juneja' },
      { name: 'Quality Assurance', leader: 'Meenakshi Sharma' },
      { name: 'Finance & Accounting', leader: 'Suman Arora' },
    ],
    color: 'blue',
  },
  {
    name: 'People and Workplace Center',
    description: 'Human resources and employee experience',
    practices: [
      { name: 'HR & GA Division', leader: 'Nagendra Rawat' },
    ],
    color: 'red',
  },
]

export default function LeadershipPage() {
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
              Our Leadership
            </h1>
            <p className="text-xl text-white/80">
              Meet the team driving YMSLI's vision and success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Board of Directors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic leadership guiding YMSLI's growth and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardOfDirectors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-ymsli-navy to-ymsli-blue flex items-center justify-center group-hover:from-ymsli-cyan group-hover:to-ymsli-blue transition-all duration-300">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ymsli-navy mb-1">{director.name}</h3>
                <p className="text-ymsli-red font-medium text-sm mb-2">{director.role}</p>
                <p className="text-gray-500 text-sm">{director.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Organization Structure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              YMSLI operates through three integrated centers reporting to the Managing Director
            </p>
          </motion.div>

          <div className="space-y-8">
            {organizationCenters.map((center, index) => (
              <motion.div
                key={center.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    center.color === 'cyan' ? 'bg-ymsli-cyan/10' :
                    center.color === 'blue' ? 'bg-ymsli-blue/10' : 'bg-ymsli-red/10'
                  }`}>
                    <Building2 className={`w-8 h-8 ${
                      center.color === 'cyan' ? 'text-ymsli-cyan' :
                      center.color === 'blue' ? 'text-ymsli-blue' : 'text-ymsli-red'
                    }`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-ymsli-navy mb-2">{center.name}</h3>
                    <p className="text-gray-600 mb-4">{center.description}</p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {center.practices.map((practice) => (
                        <div key={practice.name} className="p-4 bg-gray-50 rounded-xl">
                          <p className="font-medium text-ymsli-navy text-sm mb-1">{practice.name}</p>
                          <p className="text-gray-500 text-xs">Led by {practice.leader}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Join Our Team
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Be part of a world-class organization driving digital transformation
            </p>
            <Link href="/careers" className="btn-secondary">
              Explore Careers
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
