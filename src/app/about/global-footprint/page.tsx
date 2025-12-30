'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, MapPin, Users, Building2 } from 'lucide-react'

const regions = [
  {
    name: 'Asia Pacific',
    countries: ['India', 'Japan', 'China', 'Thailand', 'Vietnam', 'Singapore', 'Indonesia', 'Philippines', 'Cambodia', 'Australia', 'New Zealand'],
    color: 'cyan',
  },
  {
    name: 'Europe',
    countries: ['Germany', 'Netherlands', 'France', 'Turkey'],
    color: 'blue',
  },
  {
    name: 'Americas',
    countries: ['USA', 'Canada', 'Mexico', 'Colombia', 'Brazil', 'Peru', 'Argentina'],
    color: 'red',
  },
  {
    name: 'Middle East & Africa',
    countries: ['Dubai', 'Uganda', 'Nigeria'],
    color: 'cyan',
  },
]

const stats = [
  { number: '25+', label: 'Countries with Active Presence', icon: Globe },
  { number: '38', label: 'Indian Expats Deployed Globally', icon: Users },
  { number: '6', label: 'Regions Supported', icon: MapPin },
  { number: '800+', label: 'Team Members Worldwide', icon: Building2 },
]

export default function GlobalFootprintPage() {
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
              Global Footprint
            </h1>
            <p className="text-xl text-white/80">
              A Truly Global Presence Across 25+ Countries
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
                <p className="text-3xl font-display font-bold text-white mb-1">{stat.number}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Countries We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our headquarters in India to on-site experts across six continents, YMSLI delivers
              seamless global technology services to Yamaha and its partners worldwide.
            </p>
          </motion.div>

          {/* World Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[2/1] rounded-3xl bg-gradient-to-br from-ymsli-light to-white border border-gray-100 overflow-hidden mb-16"
          >
            <div className="absolute inset-0 grid-overlay opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-24 h-24 text-ymsli-navy/20 mx-auto mb-4" />
                <p className="text-ymsli-navy font-display text-2xl font-semibold">Global Reach</p>
                <p className="text-gray-500">Six Continents • 25+ Countries</p>
              </div>
            </div>

            {/* Animated dots representing locations */}
            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-ymsli-cyan rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-ymsli-red rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-ymsli-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-ymsli-cyan rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          </motion.div>

          {/* Regional Breakdown */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  region.color === 'cyan' ? 'bg-ymsli-cyan/10' :
                  region.color === 'blue' ? 'bg-ymsli-blue/10' : 'bg-ymsli-red/10'
                }`}>
                  <MapPin className={`w-6 h-6 ${
                    region.color === 'cyan' ? 'text-ymsli-cyan' :
                    region.color === 'blue' ? 'text-ymsli-blue' : 'text-ymsli-red'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-ymsli-navy mb-3">{region.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {country}
                    </span>
                  ))}
                </div>
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
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Get to know the people driving our global success
            </p>
            <Link href="/about/leadership" className="btn-primary">
              View Leadership Team
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
