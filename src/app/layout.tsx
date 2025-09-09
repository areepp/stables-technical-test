import type { Metadata } from 'next'
import { Geist_Mono, Manrope } from 'next/font/google'
import './globals.css'

const manropeSans = Manrope({
  variable: '--font-manrope-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Stables',
  description: 'Stable value, unstoppable growth',
  icons: {
    icon: [
      {
        url: '/images/favicon-196x196.png',
        sizes: '196x196',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manropeSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
