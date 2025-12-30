'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building, Heart, Users, PartyPopper, UserCircle, Coffee, Music, Trophy, Calendar, ArrowRight } from 'lucide-react'

const workplacePillars = [
  {
    icon: Building,
    title: 'Modern Infrastructure',
    description: 'State-of-the-art facilities designed to inspire creativity and collaboration.',
  },
  {
    icon: Users,
    title: 'Collaborative Spaces',
    description: 'Open areas and meeting rooms that foster teamwork and innovation.',
  },
  {
    icon: Coffee,
    title: 'Comfort & Convenience',
    description: 'Cafeteria, recreational zones, and wellness facilities for a balanced work life.',
  },
]

const cultureValues = [
  {
    title: 'Total Quality with Team Power',
    description: 'We embrace Yamaha\'s philosophy where exceptional quality comes from the collective strength of our team.',
  },
  {
    title: 'Mutual Respect',
    description: 'Our culture is built on respecting diverse perspectives and valuing every team member\'s contribution.',
  },
  {
    title: 'Open Communication',
    description: 'Transparent dialogue at all levels ensures everyone\'s voice is heard and valued.',
  },
  {
    title: 'Shared Commitment',
    description: 'We celebrate diversity, encourage innovation, and support each other\'s success.',
  },
]

const events = [
  {
    icon: PartyPopper,
    title: 'Festival Celebrations',
    description: 'Celebrating Diwali, Holi, Christmas, and other festivals together as one family.',
  },
  {
    icon: Trophy,
    title: 'Hackathons & Innovation Days',
    description: 'Regular innovation challenges that spark creativity and showcase talent.',
  },
  {
    icon: Music,
    title: 'Team Outings',
    description: 'Annual picnics, team dinners, and recreational activities to strengthen bonds.',
  },
  {
    icon: Calendar,
    title: 'Annual Day',
    description: 'Grand celebrations recognizing achievements and milestones of the year.',
  },
]

export default function LifeAtYMSLIPage() {
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
              Careers
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Life at YMSLI
            </h1>
            <p className="text-xl text-white/80 mb-8">
              At YMSLI, we believe that great work happens when people feel valued, supported,
              and inspired. Discover what makes our workplace special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Workplace */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Our Workplace
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our workplace is designed to foster collaboration, creativity, and personal growth.
              We create an environment where every team member can thrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {workplacePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-ymsli-cyan/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-ymsli-cyan transition-colors">
                  <pillar.icon className="w-8 h-8 text-ymsli-cyan group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-ymsli-navy mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Our Culture
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We embrace Yamaha's philosophy of <strong>'Total Quality with Team Power'</strong>.
                Our culture is built on mutual respect, open communication, and a shared commitment
                to excellence.
              </p>

              <div className="space-y-4">
                {cultureValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-ymsli-red flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ymsli-navy mb-1">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-ymsli-navy to-ymsli-blue flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart className="w-20 h-20 text-ymsli-cyan mx-auto mb-6" />
                  <p className="text-white font-display text-2xl mb-2">Total Quality</p>
                  <p className="text-white font-display text-2xl mb-4">with Team Power</p>
                  <p className="text-white/60">Our guiding philosophy</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events & Celebrations */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Events & Celebrations
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From festivals and team outings to hackathons and innovation days, we make time
              to celebrate our achievements and build lasting connections.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-ymsli-red/10 flex items-center justify-center group-hover:bg-ymsli-red transition-colors flex-shrink-0">
                    <event.icon className="w-7 h-7 text-ymsli-red group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ymsli-navy mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Stories */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Employee Stories
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Hear from our team members about their experiences and career journeys at YMSLI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-ymsli-cyan/20 flex items-center justify-center">
                    <UserCircle className="w-8 h-8 text-ymsli-cyan" />
                  </div>
                  <div>
                    <p className="font-semibold text-ymsli-navy">YMSLI Employee</p>
                    <p className="text-gray-500 text-sm">Technology Team</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Working at YMSLI has been an incredible journey. The culture of innovation
                  and the supportive team environment make every day meaningful."
                </p>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Explore our current openings and become part of the YMSLI family
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/careers/open-positions" className="btn-secondary">
                View Open Positions
              </Link>
              <Link href="/careers/benefits-wellness" className="btn-outline">
                Explore Benefits
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
