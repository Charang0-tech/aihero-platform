import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Hero Platform',
  description: 'Master Python programming with AI-powered learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <main className="flex-1">
          {children}
        </main>
        
        {/* Styled Footer - Appears on all pages */}
        <footer className="bg-gradient-to-r from-slate-900 to-purple-900 border-t border-white/20 py-6 mt-auto backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-white font-medium text-lg">
              © 2025 Cognitera. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-1">
              AI Hero Platform - Master Programming with Intelligence
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}