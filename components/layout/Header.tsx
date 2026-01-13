'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Menu, X } from '@/components/ui/Icons'
import { siteContent } from '@/content/site'

const navItems = [
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Método', href: '#metodo' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Conteúdos', href: '#conteudos' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-inkSurface backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              href="/"
              className={cn(
                'font-serif text-xl font-medium transition-colors',
                isScrolled ? 'text-white' : 'text-text'
              )}
            >
              {siteContent.firmName}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:opacity-70',
                    isScrolled ? 'text-white/80 hover:text-white' : 'text-text/80 hover:text-text'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:block">
              <Link href="#contato">
                <Button 
                  size="sm"
                  data-analytics="header-cta"
                >
                  {siteContent.hero.ctaPrimary}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                'lg:hidden p-2 -mr-2 transition-colors',
                isScrolled ? 'text-white' : 'text-text'
              )}
              aria-label="Abrir menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-full max-w-sm bg-ink transition-transform duration-300',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full p-6">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-white/80 hover:text-white transition-colors"
                aria-label="Fechar menu"
              >
                <X />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="pt-6 border-t border-white/10">
              <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full" data-analytics="mobile-menu-cta">
                  {siteContent.hero.ctaPrimary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
