'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ 
  children, 
  className,
  hover = true
}: CardProps) {
  return (
    <div 
      className={cn(
        'bg-surface rounded-card border border-border p-6',
        hover && 'transition-all duration-200 hover:shadow-card-hover hover:border-text/20',
        className
      )}
    >
      {children}
    </div>
  )
}
