'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, BookOpen, Users, Award, Briefcase, Target, Lightbulb, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

const learningTiers = [
  {
    tier: 'Tier 1',
    title: 'On-the-Job Learning',
    duration: '6 Months',
    icon: Briefcase,
    color: 'from-blue-500 to-blue-700',
    features: [
      'Practice-specific skill development',
      'Training aligned with roles and technical certifications',
      'Real-time learning in project environments',
      'Soft skill development programs',
    ],
  },
  {
    tier: 'Tier 2',
    title: 'Continuous Learning',
    duration: 'Ongoing',
    icon: BookOpen,
    color: 'from-cyan-500 to-cyan-700',
    features: [
      'Structured learning paths on emerging technologies',
      'Tools & platform training programs',
      'Partnerships with leading training providers',
      'Certification programs tailored to career goals',
    ],
  },
  {
    tier: 'Tier 3',
    title: 'Leadership Development',
    duration: 'Advanced',
    icon: Users,
    color: 'from-red-500 to-red-700',
    features: [
      'Dedicated programs for first-time managers',
      'Senior leadership development tracks',
      'Strategic thinking workshops',
      'People management & global collaboration skills',
    ],
  },
]

const courseraStats = [
  { number: '100%', label: 'Employee Access' },
  { number: '10,000+', label: 'Courses Available' },
  { number: '200+', label: 'Certifications' },
  { number: '50+', label: 'University Partners' },
]

const learningHighlights = [
  {
    icon: GraduationCap,
    title: 'Coursera Partnership',
    description: 'Access to world-class learning content from top universities and companies.',
  },
  {
    icon: Award,
    title: 'Certification Programs',
    description: 'Industry-recognized certifications to advance your career.',
  },
  {
    icon: Target,
    title: 'Career Development',
    description: 'Clear pathways for professional growth and skill enhancement.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Training',
    description: 'Emerging technology training in AI, ML, Cloud, and more.',
  },
]

export default function LearningDevelopmentPage() {
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
              Learning & Development
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Empowering our workforce for the future. YMSLI has partnered with Coursera to
              provide all employees with access to world-class learning content across
              technology, business, and leadership domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coursera Stats */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {courseraStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <p className="text-3xl font-display font-bold text-ymsli-cyan">{stat.number}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Partnership */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ymsli-cyan/10 rounded-full mb-6">
                <GraduationCap className="w-5 h-5 text-ymsli-cyan" />
                <span className="text-ymsli-cyan font-semibold">Learning Partnership</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Coursera for All Employees
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Every YMSLI employee has access to Coursera's extensive library of courses,
                specializations, and professional certificates from world-renowned universities
                and companies like Google, IBM, and Meta.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {learningHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-ymsli-light"
                  >
                    <highlight.icon className="w-8 h-8 text-ymsli-cyan mb-3" />
                    <h4 className="font-semibold text-ymsli-navy text-sm mb-1">{highlight.title}</h4>
                    <p className="text-gray-500 text-xs">{highlight.description}</p>
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
                  <BookOpen className="w-20 h-20 text-ymsli-cyan mx-auto mb-6" />
                  <p className="text-white font-display text-2xl mb-2">Unlimited Learning</p>
                  <p className="text-white/80 text-lg mb-4">For Every Employee</p>
                  <div className="inline-block px-6 py-3 bg-white/10 rounded-full">
                    <span className="text-white font-semibold">Powered by Coursera</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three-Tier Learning */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Three-Tier Learning Approach
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our structured learning framework ensures continuous growth from day one
              through to senior leadership positions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {learningTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className={`p-6 bg-gradient-to-br ${tier.color} -mx-6 -mt-6 mb-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-semibold">
                      {tier.tier}
                    </span>
                    <span className="text-white/80 text-sm">{tier.duration}</span>
                  </div>
                  <tier.icon className="w-10 h-10 text-white mb-3" />
                  <h3 className="text-xl font-display font-bold text-white">{tier.title}</h3>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-ymsli-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="card text-center">
                  <TrendingUp className="w-10 h-10 text-ymsli-cyan mx-auto mb-3" />
                  <p className="font-semibold text-ymsli-navy">Career Pathways</p>
                  <p className="text-gray-500 text-sm">Clear growth trajectories</p>
                </div>
                <div className="card text-center">
                  <Award className="w-10 h-10 text-ymsli-red mx-auto mb-3" />
                  <p className="font-semibold text-ymsli-navy">Certifications</p>
                  <p className="text-gray-500 text-sm">Industry recognition</p>
                </div>
                <div className="card text-center">
                  <Users className="w-10 h-10 text-ymsli-navy mx-auto mb-3" />
                  <p className="font-semibold text-ymsli-navy">Mentorship</p>
                  <p className="text-gray-500 text-sm">Guidance from experts</p>
                </div>
                <div className="card text-center">
                  <Lightbulb className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <p className="font-semibold text-ymsli-navy">Innovation Labs</p>
                  <p className="text-gray-500 text-sm">Hands-on experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Invest in Your Growth
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                At YMSLI, your growth is our priority. We provide the resources, support,
                and opportunities you need to build a fulfilling career in technology.
              </p>
              <p className="text-gray-600 mb-8">
                From technical certifications to leadership development, we support your
                journey at every step. Our partnerships with academic institutions and
                training providers ensure you have access to the latest knowledge and skills.
              </p>
              <Link href="/careers/open-positions" className="btn-primary">
                Explore Opportunities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
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
              Start Your Learning Journey
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Join a company that invests in your growth and development
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/careers/open-positions" className="btn-secondary">
                View Open Positions
              </Link>
              <Link href="/careers/life-at-ymsli" className="btn-outline">
                Life at YMSLI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
