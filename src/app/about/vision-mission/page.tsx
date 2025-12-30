'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eye, Target, Heart, Users, Sparkles, Award, ArrowRight } from 'lucide-react'

const coreValues = [
  {
    icon: Heart,
    title: 'Total Quality',
    description: 'Excellence in everything we do, from code to client relationships.',
  },
  {
    icon: Users,
    title: 'Team Power',
    description: 'Collective strength through collaboration and shared purpose.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Continuous exploration of new technologies and approaches.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Commitment to delivering best-in-class solutions.',
  },
]

export default function VisionMissionPage() {
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
              Vision & Mission
            </h1>
            <p className="text-xl text-white/80">
              Guided by our core philosophy of Total Quality with Team Power
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-ymsli-cyan/10 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-ymsli-cyan" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy">
                  Our Vision
                </h2>
              </div>
              <blockquote className="text-2xl lg:text-3xl font-display text-ymsli-navy leading-relaxed border-l-4 border-ymsli-cyan pl-6">
                "We are committed as a world-class team to provide Total IT Solutions, creating value and surpassing client's expectation."
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-ymsli-navy to-ymsli-blue p-8 flex items-center justify-center">
                <div className="text-center">
                  <Eye className="w-20 h-20 text-ymsli-cyan mx-auto mb-6" />
                  <p className="text-white/60 text-sm uppercase tracking-wider">Vision</p>
                  <p className="text-white font-display text-2xl">World-Class Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-ymsli-red/90 to-ymsli-red p-8 flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-20 h-20 text-white mx-auto mb-6" />
                  <p className="text-white/60 text-sm uppercase tracking-wider">Mission</p>
                  <p className="text-white font-display text-2xl">Competitive Advantage</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-ymsli-red/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-ymsli-red" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy">
                  Our Mission
                </h2>
              </div>
              <blockquote className="text-2xl lg:text-3xl font-display text-ymsli-navy leading-relaxed border-l-4 border-ymsli-red pl-6">
                "We consistently deliver best-fit Global IT Services & Solutions to improve client's competitive advantage."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="section hero-pattern">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
              Total Quality with Team Power
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              This philosophy guides everything we do at YMSLI. We believe that exceptional quality
              comes from the collective strength of our team, working together with shared purpose
              and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-dark text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-ymsli-cyan/20 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-ymsli-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
              Explore Our Strategic Direction
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Learn more about how we're executing on our vision and mission
            </p>
            <Link href="/about/strategic-goals" className="btn-primary">
              View Strategic Goals
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
