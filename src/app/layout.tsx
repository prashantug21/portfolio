import './globals.css'
import type { Metadata } from 'next'
import { Electrolize } from 'next/font/google'

const inter =Electrolize({subsets: ['latin'],weight: ['400'],display:'swap'})

export const metadata: Metadata = {
  title: 'Prashant Portfolio',
  description: 'My Portfolio webpage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
