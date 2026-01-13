'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PartnerCard } from '@/components/ui/PartnerCard'
import { Button } from '@/components/ui/Button'
import { siteContent } from '@/content/site'

export function Team() {
  return (
    <section id="equipe" className="py-16 md:py-24 bg-bg scroll-mt-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              title="Quem Somos"
              subtitle="Um escritório fundado por advogados com experiência em grandes bancas, que optaram por uma atuação mais próxima e personalizada."
            />

            <div className="prose prose-lg text-muted">
              <p>
                Acreditamos que a melhor assessoria jurídica nasce da compreensão profunda 
                do negócio e dos objetivos de cada cliente.
              </p>
              <p>
                Nossa estrutura enxuta nos permite garantir que cada caso seja acompanhado 
                diretamente pelos sócios, com a atenção e o comprometimento que decisões 
                importantes exigem.
              </p>
            </div>

            <Link href="/equipe" className="mt-6 inline-block">
              <Button variant="ghost" data-analytics="team-cta">
                Conheça a equipe completa →
              </Button>
            </Link>
          </motion.div>

          {/* Partners */}
          <div className="space-y-6">
            {siteContent.partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <PartnerCard
                  name={partner.name}
                  role={partner.role}
                  areas={partner.areas}
                  bio={partner.bio}
                  image={partner.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
