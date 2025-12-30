'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, FolderOpen, Calendar, ArrowRight, Tag } from 'lucide-react'

const categories = [
  { name: 'Enterprise Applications', count: 12 },
  { name: 'Cloud & Infrastructure', count: 8 },
  { name: 'AI & Machine Learning', count: 15 },
  { name: 'Digital Transformation', count: 10 },
  { name: 'Innovation & Research', count: 7 },
]

const featuredPosts = [
  {
    title: 'The Future of SAP S/4HANA: Trends and Best Practices',
    excerpt: 'Explore the latest developments in SAP S/4HANA and how enterprises can leverage its capabilities.',
    category: 'Enterprise Applications',
    date: 'Dec 15, 2024',
    type: 'blog',
  },
  {
    title: 'AI-Powered Precision Agriculture: YMSLI Case Study',
    excerpt: 'How we developed machine learning models for crop yield prediction with 95% accuracy.',
    category: 'Case Study',
    date: 'Dec 10, 2024',
    type: 'case-study',
  },
  {
    title: 'YMSLI Achieves Great Place to Work Certification for Fourth Year',
    excerpt: 'Our continued commitment to employee wellbeing and workplace excellence.',
    category: 'News',
    date: 'Dec 5, 2024',
    type: 'news',
  },
]

const sections = [
  {
    title: 'Blog',
    description: 'Thought leadership from our technology experts',
    icon: FileText,
    href: '/insights/blog',
  },
  {
    title: 'Case Studies',
    description: 'In-depth explorations of impactful projects',
    icon: FolderOpen,
    href: '/insights/case-studies',
  },
  {
    title: 'News & Events',
    description: 'Company announcements and upcoming events',
    icon: Calendar,
    href: '/insights/news-events',
  },
]

export default function InsightsPage() {
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
              Insights & Perspectives
            </h1>
            <p className="text-xl text-white/80">
              Stay informed with our latest thinking on technology, innovation, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={section.href} className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <section.icon className="w-10 h-10 text-ymsli-cyan mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-ymsli-cyan transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-white/60 text-sm">{section.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Featured Content
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.type === 'blog' ? 'bg-ymsli-cyan/10 text-ymsli-cyan' :
                    post.type === 'case-study' ? 'bg-ymsli-blue/10 text-ymsli-blue' :
                    'bg-ymsli-red/10 text-ymsli-red'
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-ymsli-navy mb-3 group-hover:text-ymsli-red transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <span className="text-ymsli-cyan text-sm font-medium flex items-center group-hover:text-ymsli-red transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Browse by Topic
              </h2>
              <p className="text-gray-600 mb-8">
                Explore content across our key focus areas and technology domains.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {categories.map((category) => (
                <div key={category.name} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-card">
                  <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-ymsli-cyan" />
                    <span className="font-medium text-ymsli-navy">{category.name}</span>
                  </div>
                  <span className="px-3 py-1 bg-ymsli-light rounded-full text-sm text-gray-600">
                    {category.count} articles
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
