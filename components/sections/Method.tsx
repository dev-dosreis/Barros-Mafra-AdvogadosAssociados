'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StepList } from '@/components/ui/StepList'
import { Check } from '@/components/ui/Icons'
import { siteContent } from '@/content/site'

export function Method() {
  return (
    <section id="metodo" className="py-16 md:py-24 bg-ink scroll-mt-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Title and Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              title={siteContent.method.title}
              subtitle={siteContent.method.subtitle}
              dark
            />

            {/* Principles */}
            <div className="mt-8 p-6 bg-white/5 rounded-card border border-white/10">
              <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-4">
                Nossos Princípios
              </h3>
              <ul className="space-y-3">
                {siteContent.method.principles.map((principle) => (
                  <li key={principle} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-white/70 text-sm">
                      {principle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right side - Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StepList steps={siteContent.method.steps} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
