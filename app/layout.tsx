import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { CartProvider, Header } from '@/components/store'
import './globals.css'

export const metadata: Metadata = { title: 'LaptopHub — Tecnología que te mueve', description: 'Encuentra tu próxima laptop en LaptopHub.', generator: 'v0.app' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f8fafc' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body className="antialiased"><CartProvider><Header />{children}</CartProvider>{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
