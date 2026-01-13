'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Mail, Phone, MapPin } from '@/components/ui/Icons'
import { siteContent } from '@/content/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg border-t border-border py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-xl font-medium text-text">
              {siteContent.firmName}
            </Link>
            <p className="mt-4 text-sm text-muted max-w-xs">
              {siteContent.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-text uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${siteContent.contact.email}`}
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {siteContent.contact.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${siteContent.contact.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteContent.contact.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-muted">
                  <MapPin className="w-4 h-4" />
                  {siteContent.contact.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium text-text uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/privacidade"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link 
                  href="/termos"
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted leading-relaxed max-w-3xl">
            {siteContent.footer.disclaimer}
          </p>
          <p className="mt-4 text-xs text-muted">
            © {currentYear} {siteContent.firmFullName}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
