'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'

interface PartnerCardProps {
  name: string
  role: string
  areas: string[]
  bio: string
  image?: string
  className?: string
}

export function PartnerCard({ 
  name,
  role,
  areas,
  bio,
  image,
  className 
}: PartnerCardProps) {
  return (
    <div 
      className={cn(
        'bg-surface rounded-card border border-border p-6',
        'transition-all duration-200 hover:shadow-card-hover',
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-20 h-20 rounded-full bg-bg overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={80}
              height={80}
              className="w-full h-full object-cover grayscale"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl font-serif text-muted">
              {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg font-medium text-text">
            {name}
          </h3>
          <p className="text-sm text-accent font-medium">
            {role}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {areas.map(area => (
              <span 
                key={area}
                className="inline-flex px-2 py-0.5 text-xs bg-accentSoft text-accent rounded"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted leading-relaxed">
        {bio}
      </p>
    </div>
  )
}
