'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn, navigation } from '@/lib/utils'

const navItems = [
  { name: 'Services', items: navigation.services },
  { name: 'Innovation', href: '/innovation', items: navigation.innovation },
  { name: 'About Us', items: navigation.about },
  { name: 'Careers', href: '/careers', items: navigation.careers },
  { name: 'Insights', items: navigation.insights },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <Image
              src="/images/yamaha-logo.png"
              alt="Yamaha Logo"
              width={200}
              height={50}
              className={cn(
                "transition-all duration-300 h-12 w-auto",
                !isScrolled && "brightness-0 invert"
              )}
              priority
            />
            <div className="hidden sm:block border-l border-current pl-2 ml-1">
              <p className={cn(
                "font-display font-semibold text-xs leading-tight transition-colors duration-300",
                isScrolled ? "text-ymsli-navy" : "text-white"
              )}>
                MOTOR SOLUTIONS
              </p>
              <p className={cn(
                "text-[10px] tracking-[0.15em] transition-colors duration-300",
                isScrolled ? "text-ymsli-red" : "text-ymsli-cyan"
              )}>
                INDIA
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.items ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300",
                      isScrolled
                        ? "text-ymsli-navy hover:bg-ymsli-navy/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      activeDropdown === item.name && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className={cn(
                      "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300",
                      isScrolled
                        ? "text-ymsli-navy hover:bg-ymsli-navy/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.items && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-72 pt-2"
                    >
                      <div className="bg-white rounded-2xl shadow-card-hover overflow-hidden border border-gray-100">
                        <div className="p-2">
                          {item.items.map((subItem, idx) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-ymsli-navy/5 hover:text-ymsli-navy transition-all duration-200"
                            >
                              <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                {subItem.name}
                              </motion.span>
                            </Link>
                          ))}
                        </div>
                        <div className="px-4 py-3 bg-gradient-to-r from-ymsli-navy/5 to-ymsli-cyan/5">
                          <Link
                            href={item.href || `/${item.name.toLowerCase().replace(' ', '-')}`}
                            className="text-xs font-semibold text-ymsli-navy hover:text-ymsli-red transition-colors"
                          >
                            View All {item.name} →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/careers/open-positions"
              className={cn(
                "ml-4 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300",
                isScrolled
                  ? "bg-ymsli-red text-white hover:bg-red-700"
                  : "bg-white text-ymsli-navy hover:bg-ymsli-cyan"
              )}
            >
              Join Our Team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-ymsli-navy" : "text-white"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container-custom py-6">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-b border-gray-100 last:border-0"
                >
                  {item.items ? (
                    <div className="py-3">
                      <p className="font-semibold text-ymsli-navy mb-2">{item.name}</p>
                      <div className="pl-4 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-gray-600 hover:text-ymsli-navy py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="block py-3 font-semibold text-ymsli-navy"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <Link
                  href="/careers/open-positions"
                  className="block w-full py-3 text-center bg-ymsli-red text-white font-semibold rounded-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Our Team
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
