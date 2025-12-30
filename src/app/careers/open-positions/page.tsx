'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, MapPin, Clock, Building2, Filter, AlertTriangle, Briefcase } from 'lucide-react'

const positions = [
  {
    title: 'Senior SAP ABAP Developer',
    practice: 'SAP Practice',
    location: 'Faridabad / Surajpur',
    experience: '5-8 years',
    type: 'Full-time',
  },
  {
    title: 'Microsoft Dynamics 365 Consultant',
    practice: 'Microsoft Practice',
    location: 'Faridabad',
    experience: '4-6 years',
    type: 'Full-time',
  },
  {
    title: 'Full Stack Developer (React/Node.js)',
    practice: 'OSS Practice',
    location: 'Surajpur',
    experience: '3-5 years',
    type: 'Full-time',
  },
  {
    title: 'Data Engineer',
    practice: 'Innovation Lab',
    location: 'Faridabad',
    experience: '3-5 years',
    type: 'Full-time',
  },
  {
    title: 'Cybersecurity Analyst',
    practice: 'Infra & Cybersecurity',
    location: 'Surajpur',
    experience: '4-6 years',
    type: 'Full-time',
  },
  {
    title: 'DevOps Engineer',
    practice: 'OSS Practice',
    location: 'Faridabad / Remote',
    experience: '3-5 years',
    type: 'Full-time',
  },
]

const practices = ['All Practices', 'SAP Practice', 'Microsoft Practice', 'OSS Practice', 'Innovation Lab', 'Infra & Cybersecurity']

export default function OpenPositionsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPractice, setSelectedPractice] = useState('All Practices')

  const filteredPositions = positions.filter((pos) => {
    const matchesSearch = pos.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pos.practice.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPractice = selectedPractice === 'All Practices' || pos.practice === selectedPractice
    return matchesSearch && matchesPractice
  })

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-ymsli-navy/95 to-ymsli-blue/90" />
        <div className="container-custom relative z-10 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              Careers
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Open Positions
            </h1>
            <p className="text-xl text-white/80">
              Join our team of talented professionals and build the future with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-ymsli-light border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-ymsli-cyan focus:ring-2 focus:ring-ymsli-cyan/20 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                className="pl-12 pr-8 py-3 rounded-xl border border-gray-200 focus:border-ymsli-cyan focus:ring-2 focus:ring-ymsli-cyan/20 outline-none appearance-none bg-white"
                value={selectedPractice}
                onChange={(e) => setSelectedPractice(e.target.value)}
              >
                {practices.map((practice) => (
                  <option key={practice} value={practice}>{practice}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Positions List */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-ymsli-navy">{filteredPositions.length}</span> positions
            </p>
          </div>

          <div className="space-y-4">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-card-hover group cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ymsli-navy mb-2 group-hover:text-ymsli-red transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4 text-ymsli-cyan" />
                        {position.practice}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-ymsli-cyan" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-ymsli-cyan" />
                        {position.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-ymsli-cyan" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-ymsli-navy text-white rounded-full hover:bg-ymsli-red transition-colors font-medium">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fraud Warning */}
      <section className="py-12 bg-ymsli-light">
        <div className="container-custom">
          <div className="flex items-start gap-4 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
              <p className="text-amber-700 text-sm">
                YMSLI never charges any fees from candidates at any stage of the recruitment process.
                All official communications will come from @ymsl.in email addresses.
                Please report any suspicious activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Channels */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-ymsli-navy mb-4">
              Hiring Channels
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-ymsli-navy mb-2">Campus Hiring</h3>
              <p className="text-gray-600 text-sm">
                We recruit top talent from premier engineering and management institutions across India.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-ymsli-navy mb-2">Lateral Hiring</h3>
              <p className="text-gray-600 text-sm">
                Experienced professionals who bring diverse perspectives and deep expertise to our team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
