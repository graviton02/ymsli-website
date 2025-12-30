'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Youtube,
  ArrowUpRight
} from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about/our-story' },
    { name: 'Our Story', href: '/about/our-story' },
    { name: 'Leadership', href: '/about/leadership' },
    { name: 'Quality & Certifications', href: '/about/quality-certifications' },
    { name: 'Global Footprint', href: '/about/global-footprint' },
  ],
  services: [
    { name: 'SAP Practice', href: '/services/sap-practice' },
    { name: 'Enterprise Applications', href: '/services/enterprise-applications' },
    { name: 'Custom Development', href: '/services/custom-development' },
    { name: 'Infrastructure & Security', href: '/services/infrastructure-cybersecurity' },
    { name: 'Data & AI Services', href: '/services/data-ai' },
  ],
  careers: [
    { name: 'Why YMSLI', href: '/careers' },
    { name: 'Life at YMSLI', href: '/careers/life-at-ymsli' },
    { name: 'Benefits & Wellness', href: '/careers/benefits-wellness' },
    { name: 'Open Positions', href: '/careers/open-positions' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap' },
  ],
}

const offices = [
  {
    name: 'Faridabad',
    address: '6th Floor, L&T Business Park, near Sarai Khawaja Metro Station, 12/4, Mathura Rd, Sector 27D, Faridabad, Haryana 121003',
    phone: '+91 129 4900400',
  },
  {
    name: 'Surajpur (HQ)',
    address: 'A-3, Industrial Area, Noida-Dadri Road, Surajpur, Distt. Gautam Budh Nagar (U.P.) India-201306',
    phone: '+91 120 6718210',
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-ymsli-navy overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-ymsli-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ymsli-red/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="container-custom py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-3">
                Let's Start a Conversation
              </h2>
              <p className="text-white/70 text-lg max-w-xl">
                Ready to transform your business with technology? Our team is here to help.
              </p>
            </div>
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-ymsli-navy font-semibold rounded-full hover:bg-ymsli-cyan transition-all duration-300"
            >
              Contact Us
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/yamaha-logo.png"
                alt="Yamaha Logo"
                width={180}
                height={45}
                className="h-11 w-auto brightness-0 invert"
              />
              <div className="border-l border-white/30 pl-2 ml-1">
                <p className="font-display font-semibold text-white text-xs leading-tight">
                  MOTOR SOLUTIONS
                </p>
                <p className="text-[10px] tracking-[0.15em] text-ymsli-cyan">INDIA</p>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              A member of Yamaha Motor Group. Your trusted technology partner for digital transformation since 2002.
            </p>

            {/* Great Place to Work Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl border border-white/10">
              <Image
                src="/images/gptw-badge.svg"
                alt="Great Place to Work Certified 2024-2025"
                width={60}
                height={80}
                className="rounded"
              />
              <div>
                <p className="text-white font-semibold text-sm">Great Place To Work</p>
                <p className="text-white/60 text-xs">Certified 2024-2025</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-ymsli-cyan hover:text-ymsli-navy hover:border-ymsli-cyan transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-ymsli-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-ymsli-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Careers</h4>
            <ul className="space-y-3">
              {footerLinks.careers.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-ymsli-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ymsli-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Headquarters</p>
                  <p className="text-white/60 text-xs">Surajpur, Uttar Pradesh</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-ymsli-cyan flex-shrink-0" />
                <p className="text-white/60 text-sm">+91 120 6718210</p>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-ymsli-cyan flex-shrink-0" />
                <p className="text-white/60 text-sm">info@ymsl.in</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Yamaha Motor Solutions (India) Private Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-ymsli-cyan via-ymsli-red to-ymsli-cyan" />
    </footer>
  )
}
