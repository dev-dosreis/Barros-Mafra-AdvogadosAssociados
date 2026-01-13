'use client'

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionHeader({ 
  title, 
  subtitle,
  className,
  align = 'left',
  dark = false
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 
        className={cn(
          'font-serif text-h2-mobile md:text-h2',
          dark ? 'text-white' : 'text-text'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            'mt-4 text-body-lg max-w-2xl',
            align === 'center' && 'mx-auto',
            dark ? 'text-white/70' : 'text-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
