import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'YMSLI - Yamaha Motor Solutions India | Global Capability Center',
  description: 'Yamaha Motor Solutions India - A Global Capability Center providing enterprise IT solutions, digital transformation, and innovation services across 25+ countries since 2002.',
  keywords: 'YMSLI, Yamaha Motor Solutions, IT Services, Digital Transformation, SAP, Enterprise Applications, Global Capability Center, India',
  authors: [{ name: 'YMSLI' }],
  openGraph: {
    title: 'YMSLI - Yamaha Motor Solutions India',
    description: 'Growing Business with Optimized Solutions',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
