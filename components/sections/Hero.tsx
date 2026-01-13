'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { siteContent } from '@/content/site'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 md:pb-24 bg-bg overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 400 800" fill="none" className="w-full h-full">
          <circle cx="400" cy="400" r="350" stroke="currentColor" strokeWidth="1" className="text-text" />
          <circle cx="400" cy="400" r="280" stroke="currentColor" strokeWidth="1" className="text-text" />
          <circle cx="400" cy="400" r="210" stroke="currentColor" strokeWidth="1" className="text-text" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="accent" className="mb-6">
              {siteContent.tagline}
            </Badge>
            
            <h1 className="font-serif text-h1-mobile md:text-h1 text-text text-balance">
              {siteContent.hero.title}
            </h1>
            
            <p className="mt-6 text-body-lg text-muted max-w-lg">
              {siteContent.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="#contato">
                <Button size="lg" data-analytics="hero-cta-primary">
                  {siteContent.hero.ctaPrimary}
                </Button>
              </Link>
              <Link href="#contato">
                <Button variant="secondary" size="lg" data-analytics="hero-cta-secondary">
                  {siteContent.hero.ctaSecondary}
                </Button>
              </Link>
            </div>

            <p className="mt-4 text-sm text-muted">
              {siteContent.hero.microcopy}
            </p>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-[4/5] bg-gradient-to-br from-ink/5 to-ink/10 rounded-2xl overflow-hidden">
              {/* Abstract geometric pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  {/* Vertical lines */}
                  <div className="absolute inset-0 flex justify-between">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent"
                      />
                    ))}
                  </div>
                  {/* Horizontal lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[...Array(7)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                      />
                    ))}
                  </div>
                  {/* Central accent */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-accent/10 blur-xl" />
                </div>
              </div>
              
              {/* Texture overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
