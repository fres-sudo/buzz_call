import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buzz Call',
  description: 'Connect in a snap, vibe effortlessly. Video calls just got cooler!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;700&display=swap" />
      <body className={inter.className}>
        <Navbar />
          <main className = "relative overflow-hidden">
            {children}
          </main>
        
        </body>
    </html>
  )
}
