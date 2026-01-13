'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'accent'
}

export function Badge({ 
  children, 
  className,
  variant = 'default'
}: BadgeProps) {
  return (
    <span 
      className={cn(
        'inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full',
        variant === 'default' && 'bg-text/5 text-muted',
        variant === 'accent' && 'bg-accentSoft text-accent',
        className
      )}
    >
      {children}
    </span>
  )
}
