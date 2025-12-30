'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Clock, Target } from 'lucide-react'

const caseStudies = [
  {
    title: 'AI-Powered Precision Agriculture Solution',
    client: 'Yamaha Motor Agriculture Division',
    excerpt: 'Developed machine learning models for crop yield prediction, achieving 95% accuracy and revolutionizing agricultural operations.',
    industry: 'Agriculture',
    technologies: ['AI/ML', 'IoT', 'Cloud'],
    results: ['95% prediction accuracy', '30% yield improvement', 'Real-time monitoring'],
  },
  {
    title: 'Global SAP S/4HANA Implementation',
    client: 'Yamaha Motor Corporation',
    excerpt: 'End-to-end SAP S/4HANA implementation across 6 regions, standardizing business processes and enabling real-time analytics.',
    industry: 'Manufacturing',
    technologies: ['SAP S/4HANA', 'SAP BTP', 'Integration'],
    results: ['6 regions unified', '40% process efficiency', 'Real-time reporting'],
  },
  {
    title: 'Medical Device Quality Management System',
    client: 'Healthcare Division',
    excerpt: 'Custom quality management solution ensuring regulatory compliance and traceability for medical device manufacturing.',
    industry: 'Healthcare',
    technologies: ['Custom Development', 'QMS', 'Compliance'],
    results: ['100% compliance', 'Full traceability', 'Audit-ready'],
  },
  {
    title: 'Connected Vehicle Platform',
    client: 'Yamaha Motor R&D',
    excerpt: 'IoT-enabled platform for connected vehicles providing real-time diagnostics, predictive maintenance, and enhanced user experience.',
    industry: 'Automotive',
    technologies: ['IoT', 'Cloud', 'Mobile'],
    results: ['Real-time connectivity', 'Predictive maintenance', 'Enhanced UX'],
  },
  {
    title: 'Enterprise Data Lake & Analytics',
    client: 'Global Operations',
    excerpt: 'Centralized data lake architecture enabling advanced analytics and business intelligence across multiple business units.',
    industry: 'Enterprise',
    technologies: ['Data Engineering', 'BI', 'Analytics'],
    results: ['Unified data platform', '10x faster insights', 'Self-service BI'],
  },
  {
    title: 'Dealer Management System Modernization',
    client: 'Sales Network',
    excerpt: 'Complete modernization of legacy dealer management systems, improving sales efficiency and customer experience.',
    industry: 'Retail',
    technologies: ['D365', 'Custom Apps', 'Integration'],
    results: ['50% faster processing', 'Enhanced CX', 'Mobile-first'],
  },
]

const industries = ['All', 'Agriculture', 'Manufacturing', 'Healthcare', 'Automotive', 'Enterprise', 'Retail']

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-ymsli-navy/95 to-ymsli-blue/90" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              Insights
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-white/80">
              In-depth explorations of impactful projects and the outcomes we've delivered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '70+', label: 'PoCs Built', icon: Target },
              { number: '25+', label: 'Countries Served', icon: Users },
              { number: '20+', label: 'Years Experience', icon: Clock },
              { number: '95%', label: 'Client Satisfaction', icon: TrendingUp },
            ].map((stat, index) => (
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

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {industries.map((industry, index) => (
              <button
                key={industry}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-ymsli-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-ymsli-cyan/10 hover:text-ymsli-cyan'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group cursor-pointer"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-ymsli-blue/10 text-ymsli-blue rounded-full text-xs font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-500 text-sm">{study.client}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-ymsli-navy mb-3 group-hover:text-ymsli-red transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{study.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-ymsli-light rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-ymsli-navy mb-4">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-ymsli-cyan flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions
            </p>
            <Link href="/contact" className="btn-secondary">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
