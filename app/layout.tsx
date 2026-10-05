// Vercel Analytics: counts page visits once the site is published.
import { Analytics } from '@vercel/analytics/next'
// TypeScript types that describe the shape of the metadata and viewport objects below.
import type { Metadata, Viewport } from 'next'
// Loads the Plus Jakarta Sans font from Google Fonts (Next.js hosts it for you, so it loads fast).
import { Plus_Jakarta_Sans } from 'next/font/google'
// Global styles: Tailwind CSS and the site's color theme (coral primary, vanilla custard secondary).
import './globals.css'

// Set up the font. `variable` exposes it as a CSS variable (--font-jakarta) that globals.css uses.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
})

// Page metadata: the text shown in the browser tab and in search engine / link previews.
export const metadata: Metadata = {
  title: 'Bitescout — Find food that fits your dietary needs',
  description:
    'Bitescout is a Google Maps-like web service that finds restaurants, grocery stores, and pantries with accommodations for people with strict and complex dietary restrictions. Made by Carmen Denizard.',
  generator: 'v0.app',
  // Favicons: the small icons shown in the browser tab (different versions for light and dark browser themes).
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    // Icon used when someone saves the site to their iPhone/iPad home screen.
    apple: '/apple-icon.png',
  },
}

// Viewport settings: the site always uses its light color scheme, and mobile browsers tint their
// address bar with the coral main color (#FA825F).
export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FA825F',
}

// The root layout wraps every page on the site. `children` is the page content (app/page.tsx).
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // lang="en" tells screen readers and search engines the page is in English.
    // The font variable is attached here so every element can use it.
    <html lang="en" className={`${jakarta.variable} bg-background`}>
      {/* font-sans applies Plus Jakarta Sans; antialiased makes text render more smoothly */}
      <body className="font-sans antialiased">
        {children}
        {/* Only load analytics on the live published site, not while previewing/developing */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
