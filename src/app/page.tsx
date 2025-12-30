'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import {
  Building2, Code2, Shield, Brain, Lightbulb, Cog, Rocket,
  ArrowRight, CheckCircle2, Users, Globe, Award, Sparkles,
  ChevronRight, Play, Target, Zap, TrendingUp
} from 'lucide-react'
import { stats, services, certifications, dxJourney, employeeMetrics } from '@/lib/utils'

// Icon mapping
const iconMap: Record<string, any> = {
  Building2, Code2, Shield, Brain, Lightbulb, Cog, Rocket
}

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ''))
      const duration = 2000
      const steps = 60
      const increment = numericValue / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setDisplayValue(value)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current).toString() + (value.includes('+') ? '+' : ''))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

// Hero geometric shapes
function HeroGeometrics() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-ymsli-cyan/20 rounded-full animate-rotate-slow" />
      <div className="absolute top-1/3 left-1/3 w-72 h-72 border border-ymsli-cyan/10 rounded-full animate-rotate-reverse" />
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-full animate-pulse-slow" />

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-ymsli-cyan rounded-full blur-sm animate-float" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-ymsli-red rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }} />

      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,212,255,0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Circuit board elements */}
      <svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-30" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
        <path d="M0,200 Q200,100 400,200 T800,200" stroke="url(#gradient1)" strokeWidth="1" fill="none" />
        <path d="M0,250 Q200,150 400,250 T800,250" stroke="url(#gradient1)" strokeWidth="0.5" fill="none" />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,212,255,0)" />
            <stop offset="50%" stopColor="rgba(0,212,255,0.5)" />
            <stop offset="100%" stopColor="rgba(0,212,255,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center hero-pattern overflow-hidden">
        <HeroGeometrics />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="container-custom relative z-10 pt-32 pb-20"
        >
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <span className="w-2 h-2 bg-ymsli-cyan rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Global Capability Center since 2002</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              Yamaha Motor
              <br />
              <span className="text-gradient-cyan">Solutions India</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/80 mb-4 font-light"
            >
              Growing Business with Optimized Solutions
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white/60 mb-10 max-w-2xl"
            >
              A one-stop solution provider for all business areas. Our expertise in enterprise applications,
              emerging technologies, and robust infrastructure services helps stakeholders achieve more.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/services" className="btn-primary group">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/careers" className="btn-outline">
                Join Our Team
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs tracking-wider">SCROLL</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-ymsli-cyan rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-ymsli-navy">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Numbers That Define Our Journey
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-ymsli-cyan/30 transition-all duration-300"
              >
                <p className="stat-number mb-2">
                  <AnimatedCounter value={stat.number} />
                </p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-ymsli-cyan/10 text-ymsli-blue rounded-full text-sm font-semibold mb-6">
                Know Us
              </span>
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-ymsli-navy mb-6 leading-tight">
                From Local IT Support to
                <span className="text-gradient-cyan"> Global Capability Center</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We started our journey in 2002 as a dedicated IT arm of Yamaha Motor Group. Today, we have
                evolved into a Global Capability Center, expanding our footprint across six continents and
                serving clients in over 25 countries.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Although our services span across industry segments, we take pride in our deep expertise
                in the automobile, manufacturing, and mobility sectors through our exclusive association
                with Yamaha Motor Group.
              </p>
              <Link href="/about/our-story" className="inline-flex items-center gap-2 text-ymsli-navy font-semibold hover:text-ymsli-red transition-colors group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-ymsli-navy to-ymsli-blue p-8">
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-32 h-32 border border-ymsli-cyan/30 rounded-full" />
                <div className="absolute bottom-8 left-8 w-24 h-24 border border-white/20 rounded-full" />

                <div className="relative h-full flex flex-col justify-center">
                  <div className="space-y-6">
                    {[
                      { icon: Globe, label: '25+ Countries', desc: 'Global presence' },
                      { icon: Users, label: '800+ Professionals', desc: 'Skilled team' },
                      { icon: Award, label: '4x GPTW Certified', desc: 'Great workplace' },
                    ].map((item, idx) => (
                      <div key={item.label} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-xl bg-ymsli-cyan/20 flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-ymsli-cyan" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">{item.label}</p>
                          <p className="text-white/60 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-ymsli-navy/5 text-ymsli-navy rounded-full text-sm font-semibold mb-6">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-ymsli-navy mb-6">
              A One-Stop Solution for
              <span className="text-gradient"> Global Technology Needs</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Delivering solutions that drive business outcomes across enterprise applications,
              emerging technologies, and infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={service.href} className="block card h-full group">
                    <div className="icon-container mb-4 group-hover:bg-ymsli-cyan group-hover:text-ymsli-navy">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-ymsli-navy mb-2 group-hover:text-ymsli-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-ymsli-cyan text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* DX Journey Section */}
      <section className="section hero-pattern">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              Yamaha DX Journey
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
              Empowering Yamaha's Technology Roadmap
            </h2>
            <p className="text-white/70 text-lg">
              A GCC designed to scale, innovate, and optimize technology operations for Yamaha
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {dxJourney.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card-dark"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-ymsli-cyan/20 text-ymsli-cyan rounded-full text-sm font-bold">
                    {phase.id}
                  </span>
                  {index === 0 && <Target className="w-5 h-5 text-ymsli-cyan" />}
                  {index === 1 && <Zap className="w-5 h-5 text-ymsli-cyan" />}
                  {index === 2 && <TrendingUp className="w-5 h-5 text-ymsli-cyan" />}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-white/60 mb-6">{phase.description}</p>
                <ul className="space-y-2">
                  {phase.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-white/80 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-ymsli-cyan flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-ymsli-navy/5 text-ymsli-navy rounded-full text-sm font-semibold mb-6">
              Quality Assurance
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-ymsli-navy mb-6">
              Setting Global Standards in Quality
            </h2>
            <p className="text-gray-600 text-lg">
              A strong foundation of quality ensures lasting business impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-ymsli-cyan hover:bg-ymsli-cyan/5 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-ymsli-navy/5 group-hover:bg-ymsli-cyan/20 flex items-center justify-center transition-colors">
                  <Award className="w-7 h-7 text-ymsli-navy group-hover:text-ymsli-cyan" />
                </div>
                <h3 className="font-semibold text-ymsli-navy text-sm mb-1">{cert.name}</h3>
                <p className="text-gray-500 text-xs">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Great Place to Work Section */}
      <section className="section bg-ymsli-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-ymsli-red rounded-2xl flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div>
                  <p className="text-ymsli-red font-bold text-xl">Great Place</p>
                  <p className="text-ymsli-red font-bold text-xl">To Work</p>
                  <p className="text-gray-500 text-sm">Certified 4 Consecutive Years</p>
                </div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-ymsli-navy mb-6">
                A Great Place to Work with World-Class Talent
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                YMSLI's culture of collaboration, empowerment, and innovation has led to four consecutive
                Great Place to Work® certifications, reflecting our unwavering commitment to our employees'
                success and wellbeing.
              </p>
              <Link href="/careers" className="btn-primary">
                Explore Careers
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {employeeMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-card"
                >
                  <div className="text-4xl lg:text-5xl font-display font-bold text-ymsli-navy">
                    {metric.value}
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: metric.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-ymsli-cyan to-ymsli-blue rounded-full"
                      />
                    </div>
                    <p className="text-gray-600">{metric.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 bg-gradient-to-r from-ymsli-navy/90 to-ymsli-blue/90" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Sparkles className="w-12 h-12 text-ymsli-cyan mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Ready to transform your business with technology? Our team is here to help you
              navigate your digital journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
