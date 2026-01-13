'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { siteContent } from '@/content/site'

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-ink">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-h2-mobile md:text-h2 text-white text-balance">
            {siteContent.cta.headline}
          </h2>
          <p className="mt-4 text-lg text-white/70">
            {siteContent.cta.subtitle}
          </p>
          <Link href="#contato" className="mt-8 inline-block">
            <Button size="lg" data-analytics="cta-section">
              {siteContent.cta.button}
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
