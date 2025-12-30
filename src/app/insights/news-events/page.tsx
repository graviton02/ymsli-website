'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Award, Users, Newspaper } from 'lucide-react'

const news = [
  {
    title: 'YMSLI Achieves Great Place to Work Certification for Fourth Consecutive Year',
    date: 'December 5, 2024',
    type: 'Announcement',
    excerpt: 'Our continued commitment to employee wellbeing and workplace excellence has been recognized once again.',
  },
  {
    title: 'YMSLI Expands SAP Practice with S/4HANA Cloud Expertise',
    date: 'November 20, 2024',
    type: 'Company News',
    excerpt: 'Enhanced capabilities to support clients on their SAP S/4HANA Cloud transformation journey.',
  },
  {
    title: 'Innovation Lab Publishes 5 Research Papers in 2024',
    date: 'November 15, 2024',
    type: 'Research',
    excerpt: 'ETIL team contributes to the broader technology community through cutting-edge research.',
  },
  {
    title: 'New Partnership with Leading Cloud Platform Provider',
    date: 'October 28, 2024',
    type: 'Partnership',
    excerpt: 'Strategic partnership to enhance cloud capabilities and deliver greater value to clients.',
  },
  {
    title: 'YMSLI Hosts University Hackathon 2024',
    date: 'October 15, 2024',
    type: 'Event',
    excerpt: 'Engaging with academic talent and fostering innovation through our fifth university hackathon.',
  },
]

const upcomingEvents = [
  {
    title: 'Digital Transformation Summit 2025',
    date: 'January 15-16, 2025',
    location: 'Surajpur Headquarters',
    type: 'Conference',
    description: 'Annual summit showcasing innovation and digital transformation initiatives.',
  },
  {
    title: 'SAP Community Day',
    date: 'February 8, 2025',
    location: 'Virtual Event',
    type: 'Webinar',
    description: 'Knowledge sharing session on SAP best practices and latest updates.',
  },
  {
    title: 'AI & ML Workshop Series',
    date: 'March 2025',
    location: 'Faridabad Office',
    type: 'Workshop',
    description: 'Hands-on workshops exploring AI/ML applications in enterprise settings.',
  },
]

const achievements = [
  { icon: Award, title: 'Great Place to Work', subtitle: '4x Certified' },
  { icon: Users, title: '800+ Professionals', subtitle: 'Global Team' },
  { icon: Newspaper, title: '5 Research Papers', subtitle: 'Published in 2024' },
]

export default function NewsEventsPage() {
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
              News & Events
            </h1>
            <p className="text-xl text-white/80">
              Stay updated with the latest company announcements, achievements, and upcoming events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-ymsli-navy">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-14 h-14 rounded-xl bg-ymsli-cyan/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-ymsli-cyan" />
                </div>
                <div>
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-white/60 text-sm">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Latest News
            </h2>
            <p className="text-gray-600">
              Company announcements and industry updates
            </p>
          </motion.div>

          <div className="space-y-6">
            {news.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card group cursor-pointer flex gap-6"
              >
                <div className="hidden md:flex w-24 h-24 rounded-xl bg-gradient-to-br from-ymsli-navy to-ymsli-blue items-center justify-center flex-shrink-0">
                  <Newspaper className="w-10 h-10 text-white/50" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'Announcement' ? 'bg-ymsli-red/10 text-ymsli-red' :
                      item.type === 'Event' ? 'bg-ymsli-cyan/10 text-ymsli-cyan' :
                      'bg-ymsli-blue/10 text-ymsli-blue'
                    }`}>
                      {item.type}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-ymsli-navy mb-2 group-hover:text-ymsli-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600">
              Join us at these upcoming events and activities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  event.type === 'Conference' ? 'bg-ymsli-red/10 text-ymsli-red' :
                  event.type === 'Webinar' ? 'bg-ymsli-cyan/10 text-ymsli-cyan' :
                  'bg-ymsli-blue/10 text-ymsli-blue'
                }`}>
                  {event.type}
                </span>
                <h3 className="text-lg font-semibold text-ymsli-navy mb-3">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-ymsli-cyan" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-ymsli-cyan" />
                    {event.location}
                  </div>
                </div>
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
              Stay Connected
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Follow us for the latest updates and join our growing community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/careers" className="btn-secondary">
                Join Our Team
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
