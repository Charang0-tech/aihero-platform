import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIHero - Brutal AI Training',
  description: 'From Zero to AI Developer in 14 weeks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
