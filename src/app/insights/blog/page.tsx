'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'The Future of SAP S/4HANA: Trends and Best Practices',
    excerpt: 'Explore the latest developments in SAP S/4HANA and how enterprises can leverage its capabilities for digital transformation.',
    category: 'Enterprise Applications',
    date: 'Dec 15, 2024',
    author: 'YMSLI Tech Team',
    readTime: '5 min read',
  },
  {
    title: 'Building Resilient IT Infrastructure for Global Operations',
    excerpt: 'Key strategies for creating robust, scalable infrastructure that supports business continuity across multiple regions.',
    category: 'Cloud & Infrastructure',
    date: 'Dec 12, 2024',
    author: 'Infrastructure Practice',
    readTime: '7 min read',
  },
  {
    title: 'Leveraging Generative AI for Enterprise Innovation',
    excerpt: 'How organizations can harness the power of generative AI to drive innovation and improve operational efficiency.',
    category: 'AI & Machine Learning',
    date: 'Dec 8, 2024',
    author: 'ETIL Team',
    readTime: '6 min read',
  },
  {
    title: 'Microsoft Dynamics 365: Transforming Business Operations',
    excerpt: 'A comprehensive guide to implementing D365 solutions for enhanced productivity and customer engagement.',
    category: 'Enterprise Applications',
    date: 'Dec 5, 2024',
    author: 'Microsoft Practice',
    readTime: '8 min read',
  },
  {
    title: 'IoT in Manufacturing: Real-World Applications',
    excerpt: 'Discover how IoT technologies are revolutionizing manufacturing processes and enabling smart factory initiatives.',
    category: 'Innovation & Research',
    date: 'Dec 1, 2024',
    author: 'Engineering Team',
    readTime: '5 min read',
  },
  {
    title: 'Cybersecurity Best Practices for 2025',
    excerpt: 'Essential security measures every organization should implement to protect against evolving cyber threats.',
    category: 'Cloud & Infrastructure',
    date: 'Nov 28, 2024',
    author: 'Security Practice',
    readTime: '6 min read',
  },
]

const categories = [
  'All',
  'Enterprise Applications',
  'Cloud & Infrastructure',
  'AI & Machine Learning',
  'Digital Transformation',
  'Innovation & Research',
]

export default function BlogPage() {
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
              Blog
            </h1>
            <p className="text-xl text-white/80">
              Thought leadership and technical insights from our technology experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-ymsli-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-ymsli-cyan/10 hover:text-ymsli-cyan'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-ymsli-navy to-ymsli-blue rounded-xl mb-6 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-white/30" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-ymsli-cyan/10 text-ymsli-cyan rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-ymsli-navy mb-3 group-hover:text-ymsli-red transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-secondary">
              Load More Articles
            </button>
          </motion.div>
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
              Explore More Insights
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Discover our case studies and stay updated with the latest news and events
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/insights/case-studies" className="btn-secondary">
                Case Studies
              </Link>
              <Link href="/insights/news-events" className="btn-outline">
                News & Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
