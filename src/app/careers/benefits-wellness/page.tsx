'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Scale, Wallet, Shield, Heart, MessageSquare, Clock, Home, Briefcase, Stethoscope, Brain, Dumbbell, Apple, Coffee, Users, ArrowRight, CheckCircle2 } from 'lucide-react'

const benefitCategories = [
  {
    id: 'work-life',
    title: 'Work-Life Balance',
    icon: Scale,
    color: 'bg-blue-500',
    description: 'We believe in empowering our employees with flexibility to manage their professional and personal lives effectively.',
    benefits: [
      { title: 'Flexible Work Arrangements', description: 'Hybrid models and adaptable work hours to promote work-life balance' },
      { title: 'Inclusive HR Policies', description: 'Tailored HR frameworks that prioritize employee needs and reflect global standards' },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Benefits',
    icon: Wallet,
    color: 'bg-green-500',
    description: 'Competitive compensation packages designed to reward performance and dedication.',
    benefits: [
      { title: 'Performance Bonus Recognition', description: 'A structured bonus system to reward dedication and drive motivation' },
      { title: 'Competitive Salary', description: 'Market-aligned compensation reviewed regularly' },
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance Coverage',
    icon: Shield,
    color: 'bg-purple-500',
    description: 'Comprehensive insurance coverage ensuring peace of mind for you and your family.',
    benefits: [
      { title: 'Medical Insurance', description: 'Comprehensive health coverage for employees and dependents' },
      { title: 'Term Life Insurance', description: 'Financial security for your loved ones' },
      { title: 'Group Accident Insurance', description: 'Protection against unforeseen circumstances' },
    ],
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    icon: Heart,
    color: 'bg-red-500',
    description: 'Holistic wellness programs to ensure physical and mental well-being of our employees.',
    benefits: [
      { title: '24/7 Doctor Access', description: 'On-call medical support available around the clock for immediate health concerns' },
      { title: 'Preventive Health Check-Ups', description: 'Regular medical screenings to detect and manage health issues proactively' },
      { title: 'Psychiatric Counselling Support', description: 'Confidential mental health assistance for emotional and psychological well-being' },
      { title: 'Nutrition & Fitness Campaigns', description: 'Health awareness drives, dietary guidance, and fitness-focused initiatives' },
    ],
  },
  {
    id: 'communication',
    title: 'Open Communication',
    icon: MessageSquare,
    color: 'bg-cyan-500',
    description: 'Transparent dialogue between leadership and employees through various platforms.',
    benefits: [
      { title: 'Coffee with MD', description: 'Direct interaction with senior leadership in informal settings' },
      { title: 'Town Halls', description: 'Regular company-wide meetings for updates and open discussions' },
      { title: 'Suggestion Boxes', description: 'Anonymous feedback channels for continuous improvement' },
    ],
  },
]

const wellnessHighlights = [
  { icon: Stethoscope, title: '24/7 Medical Support', description: 'Round-the-clock doctor access' },
  { icon: Brain, title: 'Mental Wellness', description: 'Counselling and support services' },
  { icon: Dumbbell, title: 'Fitness Programs', description: 'Health and fitness initiatives' },
  { icon: Apple, title: 'Nutrition Guidance', description: 'Dietary and wellness campaigns' },
]

export default function BenefitsWellnessPage() {
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
              Benefits & Wellness
            </h1>
            <p className="text-xl text-white/80 mb-8">
              YMSLI fosters a culture where employee well-being is central to its values—ensuring
              holistic health, safety, and support across every stage of professional life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wellness Highlights */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <item.icon className="w-8 h-8 text-ymsli-cyan mx-auto mb-3" />
                <p className="font-semibold text-white mb-1">{item.title}</p>
                <p className="text-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefit Categories */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Comprehensive Benefits Package
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer a wide range of benefits designed to support your professional growth,
              financial security, and personal well-being.
            </p>
          </motion.div>

          <div className="space-y-8">
            {benefitCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className={`lg:w-1/4 p-6 ${category.color} rounded-2xl flex flex-col justify-center`}>
                    <category.icon className="w-10 h-10 text-white mb-4" />
                    <h3 className="text-xl font-display font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex-1 py-2">
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.benefits.map((benefit) => (
                        <div key={benefit.title} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-ymsli-cyan flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-ymsli-navy text-sm">{benefit.title}</h4>
                            <p className="text-gray-500 text-sm">{benefit.description}</p>
                          </div>
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

      {/* Work-Life Balance Feature */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Work-Life Harmony
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                At YMSLI, we understand that our employees have lives beyond work. Our flexible
                policies and supportive environment help you maintain the balance you need
                to be your best self—at work and at home.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white">
                  <Clock className="w-8 h-8 text-ymsli-cyan" />
                  <div>
                    <h4 className="font-semibold text-ymsli-navy">Flexible Hours</h4>
                    <p className="text-gray-500 text-sm">Adaptable work schedules to suit your needs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white">
                  <Home className="w-8 h-8 text-ymsli-cyan" />
                  <div>
                    <h4 className="font-semibold text-ymsli-navy">Hybrid Work Model</h4>
                    <p className="text-gray-500 text-sm">Balance between office and remote work</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white">
                  <Users className="w-8 h-8 text-ymsli-cyan" />
                  <div>
                    <h4 className="font-semibold text-ymsli-navy">Inclusive Policies</h4>
                    <p className="text-gray-500 text-sm">HR frameworks that prioritize employee needs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-ymsli-navy to-ymsli-blue flex items-center justify-center">
                <div className="text-center p-8">
                  <Scale className="w-20 h-20 text-ymsli-cyan mx-auto mb-6" />
                  <p className="text-white font-display text-2xl mb-2">Balance</p>
                  <p className="text-white/80 text-lg mb-4">Work & Life in Harmony</p>
                  <p className="text-white/60 text-sm max-w-xs mx-auto">
                    Creating an environment where you can excel professionally
                    while enjoying a fulfilling personal life.
                  </p>
                </div>
              </div>
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
              Grow Your Career With Us
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Explore learning opportunities and find your next role at YMSLI
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/careers/learning-development" className="btn-secondary">
                Learning & Development
              </Link>
              <Link href="/careers/open-positions" className="btn-outline">
                View Open Positions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
