'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Leaf, Heart, Car, Bot, Lightbulb, TreePine, Tractor, BarChart3, Stethoscope, Smartphone, Globe, Plane, ShoppingBag, ScanFace, Glasses, MapPin, ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'agriculture',
    title: 'Agriculture & Forestry',
    icon: Leaf,
    color: 'bg-green-500',
    projects: [
      {
        title: 'Forest Management (Rinto)',
        location: 'Japan',
        description: 'AI-powered forest management platform using satellite imagery for efficient forestry operations.',
        icon: TreePine,
      },
      {
        title: 'Fleet Management System',
        location: 'Japan',
        description: 'Agricultural fleet tracking and optimization for improved operational efficiency.',
        icon: Tractor,
      },
      {
        title: 'ML Yield Prediction',
        location: 'Australia',
        description: 'Machine learning models for accurate crop yield forecasting and agricultural planning.',
        icon: BarChart3,
      },
      {
        title: 'Agriculture AI Model',
        location: 'Japan, Australia',
        description: 'Advanced AI solutions for precision agriculture and sustainable farming practices.',
        icon: Leaf,
      },
      {
        title: 'Flood Rescue Support System',
        location: 'Global',
        description: 'Emergency response support system using technology for disaster management.',
        icon: Globe,
      },
    ],
  },
  {
    id: 'medical',
    title: 'Medical & Healthcare',
    icon: Heart,
    color: 'bg-red-500',
    projects: [
      {
        title: 'Cell Segmentation (MDB)',
        location: 'Japan',
        description: 'AI-powered medical imaging for cell analysis and diagnostic support systems.',
        icon: Stethoscope,
      },
      {
        title: 'Modern Aging App',
        location: 'USA',
        description: 'Digital health solution designed to enhance quality of life for elderly care.',
        icon: Smartphone,
      },
    ],
  },
  {
    id: 'mobility',
    title: 'Mobility Services',
    icon: Car,
    color: 'bg-blue-500',
    projects: [
      {
        title: 'Telematics Project',
        location: 'Australia',
        description: 'Vehicle telematics and connected services for enhanced fleet management.',
        icon: Car,
      },
      {
        title: 'Connected Products',
        location: 'India, Uganda, Mexico',
        description: 'IoT platform for vehicle connectivity across emerging markets.',
        icon: Globe,
      },
    ],
  },
  {
    id: 'autonomous',
    title: 'Low Speed Automated Vehicles',
    icon: Bot,
    color: 'bg-purple-500',
    projects: [
      {
        title: 'Remote Island / Slow Mobility',
        location: 'Japan',
        description: 'Autonomous low-speed vehicles for last-mile connectivity in remote areas.',
        icon: MapPin,
      },
    ],
  },
  {
    id: 'other',
    title: 'Other Innovations',
    icon: Lightbulb,
    color: 'bg-cyan-500',
    projects: [
      {
        title: 'Power Line Inspection',
        location: 'Australia',
        description: 'Drone-based inspection solutions for infrastructure maintenance.',
        icon: Plane,
      },
      {
        title: 'NFT Marketplace POC',
        location: 'Japan',
        description: 'Blockchain-based digital collectibles platform for new business models.',
        icon: ShoppingBag,
      },
      {
        title: 'Mixed Reality POC',
        location: 'USA',
        description: 'Immersive experiences using MR technology for training and visualization.',
        icon: Glasses,
      },
      {
        title: 'Face Recognition',
        location: 'India',
        description: 'AI-powered facial recognition solutions for security applications.',
        icon: ScanFace,
      },
    ],
  },
]

const stats = [
  { number: '70+', label: 'PoCs Built' },
  { number: '15+', label: 'Projects in Production' },
  { number: '6', label: 'Industry Verticals' },
  { number: '10+', label: 'Countries Impacted' },
]

export default function SuccessStoriesPage() {
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
              Innovation
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Bringing ideas to reality – Powering Yamaha's digital growth. Explore our portfolio
              of innovative projects that deliver real-world impact across agriculture, medical,
              mobility, and beyond.
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
                <p className="text-4xl font-display font-bold text-ymsli-cyan">{stat.number}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-4">
              Innovation Portfolio
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our projects span multiple industries and geographies, creating meaningful
              impact through technology innovation.
            </p>
          </motion.div>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-2xl ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ymsli-navy">
                    {category.title}
                  </h3>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: projectIndex * 0.05 }}
                      className="card group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-ymsli-cyan/10 flex items-center justify-center group-hover:bg-ymsli-cyan transition-colors flex-shrink-0">
                          <project.icon className="w-6 h-6 text-ymsli-cyan group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-ymsli-navy mb-1">{project.title}</h4>
                          <p className="text-ymsli-cyan text-sm mb-2">{project.location}</p>
                          <p className="text-gray-600 text-sm">{project.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                Innovation Powered by Collaboration
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Our success stories are made possible through strategic partnerships with
                startups, universities, and research institutions worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/innovation/ecosystem" className="btn-primary">
                  View Partnerships
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/innovation/etil" className="btn-outline border-ymsli-navy text-ymsli-navy hover:bg-ymsli-navy hover:text-white">
                  About Innovation Lab
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="card text-center">
                <p className="text-4xl font-display font-bold text-ymsli-cyan mb-2">300+</p>
                <p className="text-gray-600">Startup Collaborations</p>
              </div>
              <div className="card text-center">
                <p className="text-4xl font-display font-bold text-ymsli-red mb-2">9</p>
                <p className="text-gray-600">University Partners</p>
              </div>
              <div className="card text-center col-span-2">
                <p className="text-4xl font-display font-bold text-ymsli-navy mb-2">5</p>
                <p className="text-gray-600">Research Papers Published (2024)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
