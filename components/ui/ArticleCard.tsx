'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ArticleCardProps {
  slug: string
  category: string
  title: string
  readTime?: string
  className?: string
}

export function ArticleCard({ 
  slug,
  category,
  title,
  readTime,
  className 
}: ArticleCardProps) {
  return (
    <Link 
      href={`/conteudos/${slug}`}
      className={cn(
        'group block bg-surface rounded-card border border-border p-6',
        'transition-all duration-200 hover:shadow-card-hover hover:border-text/20',
        className
      )}
    >
      <span className="text-xs font-medium text-muted uppercase tracking-wider">
        {category}
      </span>
      <h3 className="mt-3 text-lg font-medium text-text line-clamp-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      {readTime && (
        <p className="mt-3 text-sm text-muted">
          {readTime} de leitura
        </p>
      )}
      <span className="mt-4 inline-block text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
        Ler artigo →
      </span>
    </Link>
  )
}
