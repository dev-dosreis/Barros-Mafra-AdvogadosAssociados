import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SchemaOrg } from '@/components/SchemaOrg'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({ 
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://barrosmafra.adv.br'),
  title: {
    default: 'Barros & Mafra Advogados Associados | Assessoria Jurídica Empresarial',
    template: '%s | Barros & Mafra Advogados',
  },
  description: 'Assessoria jurídica estratégica para empresas, sócios e patrimônio. Clareza para decisões críticas, mitigação de risco e execução com senioridade.',
  keywords: ['advogados', 'direito empresarial', 'assessoria jurídica', 'societário', 'M&A', 'compliance', 'contencioso', 'São Paulo'],
  authors: [{ name: 'Barros & Mafra Advogados Associados' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://barrosmafra.adv.br',
    siteName: 'Barros & Mafra Advogados',
    title: 'Barros & Mafra Advogados Associados',
    description: 'Assessoria jurídica estratégica para empresas, sócios e patrimônio.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Barros & Mafra Advogados Associados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barros & Mafra Advogados Associados',
    description: 'Assessoria jurídica estratégica para empresas, sócios e patrimônio.',
    images: ['/og-image.jpg'],
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
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans">
        <SchemaOrg />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
