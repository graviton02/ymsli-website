'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building, GraduationCap, Rocket, Users, Handshake, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'

const stats = [
  { number: '300+', label: 'Startup Collaborations', icon: Rocket },
  { number: '9', label: 'University Partners', icon: GraduationCap },
  { number: '5+', label: 'Accelerator Partnerships', icon: Building },
  { number: '6', label: 'Countries Engaged', icon: Globe },
]

const universityPartners = [
  {
    name: 'IARI',
    fullName: 'Indian Agricultural Research Institute',
    focus: 'AI-driven Nutrient Recommendation Model Development',
    type: 'Research',
  },
  {
    name: 'IRRI',
    fullName: 'International Rice Research Institute',
    focus: 'AI-driven Nutrient Recommendation Model Development',
    type: 'Research',
  },
  {
    name: 'IIT Ropar',
    fullName: 'Indian Institute of Technology Ropar',
    focus: 'Medical Imaging Research',
    type: 'Research',
  },
  {
    name: 'IIT Delhi',
    fullName: 'Indian Institute of Technology Delhi',
    focus: 'Precision Agriculture and Remote Sensing',
    type: 'Research',
  },
  {
    name: 'IIT Roorkee',
    fullName: 'Indian Institute of Technology Roorkee',
    focus: 'Agriculture Research',
    type: 'Research',
  },
  {
    name: 'IIT Mandi',
    fullName: 'Indian Institute of Technology Mandi',
    focus: 'Technology Research Collaborations',
    type: 'Research',
  },
  {
    name: 'IIT Guwahati',
    fullName: 'Indian Institute of Technology Guwahati',
    focus: 'Technology Research Collaborations',
    type: 'Research',
  },
  {
    name: 'IIT Hyderabad',
    fullName: 'Indian Institute of Technology Hyderabad',
    focus: 'Technology Research Collaborations',
    type: 'Research',
  },
]

const startupPartners = [
  {
    name: 'Autogrid Mobility',
    description: 'Mobility technology partnership for next-generation transportation solutions',
    category: 'Mobility',
  },
  {
    name: 'Pankhtech India Private Limited',
    description: 'Technology innovation partner for cutting-edge solutions development',
    category: 'Technology',
  },
]

const collaborationAreas = [
  'Artificial Intelligence & Machine Learning',
  'Internet of Things (IoT)',
  'Precision Agriculture',
  'Medical Imaging & Healthcare',
  'Autonomous Mobility',
  'Robotics & Automation',
]

export default function EcosystemPage() {
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
              Innovation
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Ecosystem & Partnerships
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Enabling the future through strategic collaborations. A thriving ecosystem of
              startups, universities, and industry leaders powers our innovation engine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-ymsli-cyan mx-auto mb-3" />
                <p className="text-3xl font-display font-bold text-white">{stat.number}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University Collaborations */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ymsli-cyan/10 rounded-full mb-6">
              <GraduationCap className="w-5 h-5 text-ymsli-cyan" />
              <span className="text-ymsli-cyan font-semibold">Academic Excellence</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              University Collaborations
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We partner with India's premier research institutions to advance cutting-edge
              research in AI, agriculture, healthcare, and emerging technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {universityPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card group"
              >
                <div className="w-12 h-12 rounded-xl bg-ymsli-navy/10 flex items-center justify-center mb-4 group-hover:bg-ymsli-navy transition-colors">
                  <GraduationCap className="w-6 h-6 text-ymsli-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-ymsli-navy text-lg mb-1">
                  {partner.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{partner.fullName}</p>
                <p className="text-ymsli-cyan text-sm font-medium">{partner.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Collaborations */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ymsli-red/10 rounded-full mb-6">
                <Rocket className="w-5 h-5 text-ymsli-red" />
                <span className="text-ymsli-red font-semibold">Startup Ecosystem</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Startup Collaborations
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                With 300+ startup collaborations, we actively engage with the innovation
                ecosystem to co-create solutions, explore new technologies, and accelerate
                digital transformation.
              </p>

              <div className="space-y-4 mb-8">
                {startupPartners.map((partner) => (
                  <div key={partner.name} className="card">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-ymsli-red/10 flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-5 h-5 text-ymsli-red" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-ymsli-navy">{partner.name}</h4>
                        <p className="text-gray-600 text-sm">{partner.description}</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-ymsli-cyan/10 text-ymsli-cyan text-xs font-medium rounded-full">
                          {partner.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-ymsli-navy text-white">
                <h4 className="font-display font-bold text-lg mb-2">Accelerators & Incubators</h4>
                <p className="text-white/70 text-sm">
                  We actively engage with leading accelerators and incubator programs to
                  discover promising startups and foster innovation partnerships.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-ymsli-navy to-ymsli-blue p-8 flex flex-col justify-center">
                <Handshake className="w-20 h-20 text-ymsli-cyan mb-6" />
                <p className="text-5xl font-display font-bold text-white mb-2">300+</p>
                <p className="text-white/80 text-xl mb-8">Startup Collaborations</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-ymsli-cyan" />
                    <span className="text-sm">Technology Partnerships</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-ymsli-cyan" />
                    <span className="text-sm">Co-Development Projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-ymsli-cyan" />
                    <span className="text-sm">Innovation Challenges</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Areas of Collaboration
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our ecosystem partnerships span across key technology domains that drive
              innovation and create lasting impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collaborationAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-ymsli-light hover:bg-ymsli-cyan/10 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-ymsli-cyan flex-shrink-0" />
                <span className="font-medium text-ymsli-navy">{area}</span>
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
              See Our Innovation in Action
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Explore how our ecosystem partnerships translate into real-world solutions
              and success stories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/innovation/success-stories" className="btn-secondary">
                Success Stories
              </Link>
              <Link href="/innovation/etil" className="btn-outline">
                Innovation Lab
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
