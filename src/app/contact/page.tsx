'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'

const offices = [
  {
    name: 'Faridabad Office',
    address: '6th Floor, L&T Business Park, near Sarai Khawaja Metro Station, 12/4, Mathura Rd, Sector 27D, Faridabad, Haryana 121003',
    phone: '+91 129 4900400',
  },
  {
    name: 'Surajpur Headquarters',
    address: 'A-3, Industrial Area, Noida-Dadri Road, Surajpur, Distt. Gautam Budh Nagar (U.P.) India-201306',
    phone: '+91 120 6718210',
  },
  {
    name: 'Registered Office',
    address: 'First Floor, The Great Eastern Centre, 70 Nehru Place, Behind IFCI Tower, New Delhi, Delhi, India - 110019',
    phone: '',
  },
]

const inquiryTypes = [
  'General Inquiry',
  'Service Inquiry',
  'Partnership Opportunity',
  'Career Inquiry',
  'Media Inquiry',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    inquiryType: '',
    subject: '',
    message: '',
    consent: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-ymsli-navy/95 to-ymsli-blue/90" />
        <div className="container-custom relative z-10 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-white/80">
              We'd love to hear from you. Whether you have a question about our services, want to
              explore partnership opportunities, or are interested in joining our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {isSubmitted ? (
                <div className="card text-center py-16">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-display font-bold text-ymsli-navy mb-4">
                    Thank You!
                  </h2>
                  <p className="text-gray-600">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card">
                  <h2 className="text-2xl font-display font-bold text-ymsli-navy mb-6">
                    Send Us a Message
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ymsli-cyan focus:ring-2 focus:ring-ymsli-cyan/20 outline-none transition-all"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ymsli-cyan focus:ring-2 focus:ring-ymsli-cyan/20 outline-none transition-all"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ymsli-cyan focus:ring-2 focus:ring-ymsli-cyan/20 outline-none transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ymsli-cyan focus:ring-2 focus:ring-ymsli-cyan/20 outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ymsli-cyan focus:ring-2 focus:ring-ymsli-cyan/20 outline-none transition-all"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ymsli-cyan focus:ring-2 focus:ring-ymsli-cyan/20 outline-none transition-all"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ymsli-cyan focus:ring-2 focus:ring-ymsli-cyan/20 outline-none transition-all"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ymsli-cyan focus:ring-2 focus:ring-ymsli-cyan/20 outline-none transition-all"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ymsli-cyan focus:ring-2 focus:ring-ymsli-cyan/20 outline-none transition-all resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          className="mt-1 w-4 h-4 text-ymsli-cyan rounded border-gray-300 focus:ring-ymsli-cyan"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        />
                        <span className="text-sm text-gray-600">
                          I consent to YMSLI storing my submitted information for the purpose of responding to my inquiry. *
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 btn-primary w-full md:w-auto"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="text-lg font-semibold text-ymsli-navy mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-ymsli-cyan" />
                    <span className="text-gray-600">info@ymsl.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-ymsli-cyan" />
                    <span className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM IST</span>
                  </div>
                </div>
              </div>

              {offices.map((office) => (
                <div key={office.name} className="card">
                  <h3 className="text-lg font-semibold text-ymsli-navy mb-4">{office.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-ymsli-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{office.address}</span>
                    </div>
                    {office.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-ymsli-cyan" />
                        <span className="text-gray-600 text-sm">{office.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
