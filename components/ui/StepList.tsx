'use client'

import { cn } from '@/lib/utils'

interface Step {
  number: string
  title: string
  description: string
}

interface StepListProps {
  steps: Step[]
  className?: string
}

export function StepList({ steps, className }: StepListProps) {
  return (
    <div className={cn('space-y-8', className)}>
      {steps.map((step, index) => (
        <div 
          key={step.number}
          className="flex gap-6 group"
        >
          <div className="flex-shrink-0">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent font-serif text-lg font-medium">
              {step.number}
            </span>
          </div>
          <div className="pt-2">
            <h3 className="text-white font-medium text-lg">
              {step.title}
            </h3>
            <p className="mt-2 text-white/60 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
