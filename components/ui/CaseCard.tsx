'use client'

import { cn } from '@/lib/utils'

interface CaseCardProps {
  context: string
  challenge: string
  action: string
  impact: string
  className?: string
}

export function CaseCard({ 
  context,
  challenge,
  action,
  impact,
  className 
}: CaseCardProps) {
  return (
    <div 
      className={cn(
        'bg-surface rounded-card border border-border p-6 h-full',
        'transition-all duration-200 hover:shadow-card-hover hover:border-text/20',
        className
      )}
    >
      <div className="space-y-4">
        <div>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Contexto</span>
          <p className="mt-1 text-sm text-text">{context}</p>
        </div>
        <div>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Desafio</span>
          <p className="mt-1 text-sm text-muted">{challenge}</p>
        </div>
        <div>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Atuação</span>
          <p className="mt-1 text-sm text-muted">{action}</p>
        </div>
        <div className="pt-2 border-t border-border">
          <span className="text-xs font-medium text-accent uppercase tracking-wider">Impacto</span>
          <p className="mt-1 text-sm font-medium text-text">{impact}</p>
        </div>
      </div>
    </div>
  )
}
