'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { Button } from '@/components/ui/Button'
import { siteContent } from '@/content/site'

export function Articles() {
  return (
    <section id="conteudos" className="py-16 md:py-24 bg-surface scroll-mt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="Conteúdos"
            subtitle="Análises e insights sobre temas jurídicos relevantes para o seu negócio."
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteContent.articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ArticleCard
                slug={article.slug}
                category={article.category}
                title={article.title}
                readTime={article.readTime}
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
          <Link href="/conteudos">
            <Button variant="ghost" data-analytics="articles-cta">
              Ver todos os artigos →
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
