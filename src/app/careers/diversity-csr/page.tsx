'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Heart, Leaf, GraduationCap, Plane, TreePine, Building, HandHeart, Scale, Shield, UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react'

const diversityPillars = [
  {
    icon: Scale,
    title: 'Equal Opportunity',
    description: 'Creating equal opportunities for all employees regardless of background, gender, or identity.',
  },
  {
    icon: UserCheck,
    title: 'Bias-Free Recruitment',
    description: 'Inclusive hiring processes that focus on skills, potential, and cultural fit.',
  },
  {
    icon: Shield,
    title: 'Workplace Sustainability',
    description: 'Building a sustainable and inclusive work environment for long-term success.',
  },
]

const csrInitiatives = [
  {
    icon: GraduationCap,
    title: 'Project UDAAN',
    subtitle: 'Scholarship Support',
    description: 'Providing educational opportunities to underprivileged students, helping them achieve their dreams through quality education.',
    color: 'bg-blue-500',
  },
  {
    icon: Heart,
    title: 'NDDB Gift Milk Program',
    subtitle: 'Nutrition Support',
    description: 'Supporting communities in need through nutritional programs in partnership with the National Dairy Development Board.',
    color: 'bg-red-500',
  },
  {
    icon: Plane,
    title: 'Healthcare via Drone Technology',
    subtitle: 'Medical Access',
    description: 'Innovative healthcare access for remote areas using drone technology to deliver medical supplies and services.',
    color: 'bg-cyan-500',
  },
  {
    icon: Building,
    title: 'Table Tennis Facilities',
    subtitle: 'Sports Infrastructure',
    description: 'Building sports infrastructure in government schools, colleges, and complexes to promote fitness and sports culture.',
    color: 'bg-purple-500',
  },
  {
    icon: TreePine,
    title: 'Tree Plantation',
    subtitle: 'Environmental Sustainability',
    description: 'Environmental sustainability drives through large-scale tree plantation initiatives.',
    color: 'bg-green-500',
  },
  {
    icon: HandHeart,
    title: 'Support to Vikas Vishranti',
    subtitle: 'Community Development',
    description: 'Community development initiatives supporting local welfare organizations and community programs.',
    color: 'bg-orange-500',
  },
]

export default function DiversityCSRPage() {
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
              Diversity, Inclusion & CSR
            </h1>
            <p className="text-xl text-white/80 mb-8">
              At YMSLI, we are committed to building an inclusive workplace where everyone can
              thrive, while actively contributing to the communities around us through meaningful
              CSR initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diversity Stats */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <Users className="w-8 h-8 text-ymsli-cyan mx-auto mb-3" />
              <p className="text-3xl font-display font-bold text-white">71:29</p>
              <p className="text-white/60 text-sm">Gender Ratio (Men:Women)</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <Heart className="w-8 h-8 text-ymsli-red mx-auto mb-3" />
              <p className="text-3xl font-display font-bold text-white">6+</p>
              <p className="text-white/60 text-sm">CSR Initiatives</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <Leaf className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <p className="text-3xl font-display font-bold text-white">100%</p>
              <p className="text-white/60 text-sm">ESG Commitment</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diversity & Inclusion */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ymsli-cyan/10 rounded-full mb-6">
                <Users className="w-5 h-5 text-ymsli-cyan" />
                <span className="text-ymsli-cyan font-semibold">Diversity & Inclusion</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Building an Inclusive Workplace
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                At YMSLI, we are committed to building an inclusive workplace where everyone can
                thrive. Our D&I initiatives focus on creating equal opportunities and celebrating
                the diverse perspectives that make our team stronger.
              </p>

              <div className="space-y-4">
                {diversityPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-ymsli-light"
                  >
                    <div className="w-12 h-12 rounded-xl bg-ymsli-cyan/20 flex items-center justify-center flex-shrink-0">
                      <pillar.icon className="w-6 h-6 text-ymsli-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ymsli-navy mb-1">{pillar.title}</h4>
                      <p className="text-gray-600 text-sm">{pillar.description}</p>
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
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-ymsli-navy to-ymsli-blue p-8 flex flex-col justify-center">
                <Users className="w-16 h-16 text-ymsli-cyan mb-6" />
                <h3 className="text-white font-display text-2xl mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-ymsli-cyan flex-shrink-0" />
                    <span>Equal opportunity for all</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-ymsli-cyan flex-shrink-0" />
                    <span>Bias-free inclusive recruitment</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-ymsli-cyan flex-shrink-0" />
                    <span>Sustainable workplace practices</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-ymsli-cyan flex-shrink-0" />
                    <span>Celebrating diverse perspectives</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/60 text-sm">Current Gender Ratio</p>
                  <p className="text-white font-display text-3xl">71% : 29%</p>
                  <p className="text-white/60 text-sm">Men : Women</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ymsli-red/10 rounded-full mb-6">
              <Heart className="w-5 h-5 text-ymsli-red" />
              <span className="text-ymsli-red font-semibold">Corporate Social Responsibility</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Our CSR Initiatives
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              YMSLI believes in participating and designing CSR initiatives that provide core
              services for safety, security, and integrate environmental and social principles
              into our core business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csrInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group overflow-hidden"
              >
                <div className={`w-14 h-14 rounded-2xl ${initiative.color} flex items-center justify-center mb-4`}>
                  <initiative.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ymsli-navy mb-1">{initiative.title}</h3>
                <p className="text-ymsli-cyan text-sm font-medium mb-3">{initiative.subtitle}</p>
                <p className="text-gray-600 text-sm">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Alignment */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square rounded-2xl bg-green-100 flex flex-col items-center justify-center p-4">
                  <Leaf className="w-10 h-10 text-green-600 mb-2" />
                  <p className="text-green-800 font-semibold text-sm text-center">Environmental</p>
                </div>
                <div className="aspect-square rounded-2xl bg-blue-100 flex flex-col items-center justify-center p-4">
                  <Users className="w-10 h-10 text-blue-600 mb-2" />
                  <p className="text-blue-800 font-semibold text-sm text-center">Social</p>
                </div>
                <div className="aspect-square rounded-2xl bg-purple-100 flex flex-col items-center justify-center p-4">
                  <Shield className="w-10 h-10 text-purple-600 mb-2" />
                  <p className="text-purple-800 font-semibold text-sm text-center">Governance</p>
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
                Aligned with Yamaha's ESG Goals
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Our workplace practices and community initiatives are aligned with Yamaha's
                Environmental, Social, and Governance (ESG) goals. We believe in building
                a responsible and sustainable business that creates positive impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Environmental sustainability through green initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Social responsibility through community programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Strong governance and ethical business practices</span>
                </li>
              </ul>
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
              Be Part of Our Journey
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Join a company that values diversity, invests in its people, and makes a
              positive impact on communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/careers/open-positions" className="btn-secondary">
                View Open Positions
              </Link>
              <Link href="/careers" className="btn-outline">
                Explore Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
