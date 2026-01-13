'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CaseCard } from '@/components/ui/CaseCard'
import { Button } from '@/components/ui/Button'
import { siteContent } from '@/content/site'

export function Cases() {
  return (
    <section id="experiencia" className="py-16 md:py-24 bg-bg scroll-mt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="Experiência"
            subtitle="Alguns dos desafios que ajudamos nossos clientes a superar."
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteContent.cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CaseCard
                context={caseItem.context}
                challenge={caseItem.challenge}
                action={caseItem.action}
                impact={caseItem.impact}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link href="#contato">
            <Button variant="secondary" data-analytics="cases-cta">
              Falar com um sócio
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
