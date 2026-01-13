'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Check } from '@/components/ui/Icons'
import { siteContent } from '@/content/site'

export function Credentials() {
  return (
    <section className="py-12 md:py-16 bg-ink">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {siteContent.credentials.map((credential, index) => (
            <motion.div
              key={credential}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10"
            >
              <Check className="w-4 h-4 text-accent" />
              <span className="text-sm text-white/80 font-medium">
                {credential}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
