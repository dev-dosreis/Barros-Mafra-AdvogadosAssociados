'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ContactForm } from '@/components/ContactForm'
import { Mail, Phone, MapPin } from '@/components/ui/Icons'
import { siteContent } from '@/content/site'

export function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-bg scroll-mt-20">
      <Container>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <SectionHeader
              title="Entre em Contato"
              subtitle="Preencha o formulário ou utilize um dos nossos canais diretos."
            />

            <div className="space-y-4">
              <a 
                href={`mailto:${siteContent.contact.email}`}
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accentSoft flex items-center justify-center text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">{siteContent.contact.email}</span>
              </a>
              
              <a 
                href={`tel:${siteContent.contact.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accentSoft flex items-center justify-center text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">{siteContent.contact.phone}</span>
              </a>
              
              <div className="flex items-center gap-3 text-muted">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accentSoft flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm">{siteContent.contact.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-card border border-border p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
