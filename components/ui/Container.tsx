'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main'
}

export function Container({ 
  children, 
  className,
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component 
      className={cn(
        'mx-auto w-full max-w-container px-6 md:px-10',
        className
      )}
    >
      {children}
    </Component>
  )
}
