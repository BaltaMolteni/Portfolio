import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Baltazar Molteni',
  description: 'Portfolio website of Baltazar Molteni',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
