import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header-footer'
import { Footer } from '@/components/header-footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Najeeb Puthiyapattillath',
  description: 'Next.js | Web Designer | Elementor Expert | Wordpress | Front-end Developer | Web Developer - based in Dubai, UAE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header></Header>
        
        <div className="bg-dark mainDiv">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            {children}
          </div>
        </div>   

        <Footer></Footer>
        
        </body>
    </html>
  )
}
