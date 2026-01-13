'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ArrowRight } from './Icons'

interface PracticeCardProps {
  title: string
  description: string
  result: string
  href: string
  icon?: React.ReactNode
}

export function PracticeCard({ 
  title, 
  description,
  result,
  href,
  icon
}: PracticeCardProps) {
  return (
    <Link 
      href={href}
      className={cn(
        'group block bg-surface rounded-card border border-border p-6',
        'transition-all duration-200',
        'hover:shadow-card-hover hover:border-accent/30'
      )}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accentSoft flex items-center justify-center text-accent transition-colors group-hover:bg-accent group-hover:text-white">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg font-medium text-text group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted line-clamp-2">
            {description}
          </p>
          <p className="mt-3 text-sm font-medium text-accent/80">
            {result}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Ver detalhes</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  )
}
