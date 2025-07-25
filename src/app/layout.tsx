import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/browser-support.css";
import { AuthProvider } from '@/components/auth/AuthProvider'
import { ToastProvider } from '@/components/ui/Toast'

const inter = Inter({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1B2951',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://thesiitcompany.com'),
  title: 'The SIIT Company - IT Solutions & Digital Innovation',
  description: 'Leading IT solutions provider specializing in software development, cloud infrastructure, cybersecurity, and digital transformation services.',
  keywords: ['IT solutions', 'software development', 'cloud services', 'cybersecurity', 'digital transformation'],
  authors: [{ name: 'The SIIT Company' }],
  creator: 'The SIIT Company',
  publisher: 'The SIIT Company',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesiitcompany.com',
    siteName: 'The SIIT Company',
    title: 'The SIIT Company - IT Solutions & Digital Innovation',
    description: 'Leading IT solutions provider specializing in software development, cloud infrastructure, cybersecurity, and digital transformation services.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The SIIT Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The SIIT Company - IT Solutions & Digital Innovation',
    description: 'Leading IT solutions provider specializing in software development, cloud infrastructure, cybersecurity, and digital transformation services.',
    creator: '@thesiitcompany',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Enhanced browser compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#1B2951" />
        <meta name="msapplication-TileColor" content="#1B2951" />
        <meta name="color-scheme" content="light" />
        
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for common domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen`}>
        <AuthProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
