'use client'

import { cn } from '@/lib/utils'
import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface BaseFieldProps {
  label: string
  error?: string
}

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>, BaseFieldProps {}
interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement>, BaseFieldProps {
  options: { value: string; label: string }[]
}
interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseFieldProps {}

const fieldClasses = cn(
  'w-full px-4 py-3 bg-surface border border-border rounded-lg',
  'text-text placeholder:text-muted/50',
  'transition-all duration-200',
  'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10',
  'disabled:opacity-50 disabled:cursor-not-allowed'
)

const errorClasses = 'border-red-500 focus:border-red-500 focus:ring-red-500/10'

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-text">
          {label}
        </label>
        <input
          ref={ref}
          className={cn(fieldClasses, error && errorClasses, className)}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)
InputField.displayName = 'InputField'

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-text">
          {label}
        </label>
        <select
          ref={ref}
          className={cn(fieldClasses, 'appearance-none bg-no-repeat bg-right pr-10', error && errorClasses, className)}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%235E6672' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.25rem 1.25rem',
          }}
          {...props}
        >
          <option value="">Selecione...</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)
SelectField.displayName = 'SelectField'

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-text">
          {label}
        </label>
        <textarea
          ref={ref}
          className={cn(fieldClasses, 'resize-none min-h-[120px]', error && errorClasses, className)}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)
TextareaField.displayName = 'TextareaField'

interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode
  error?: string
}

export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            ref={ref}
            type="checkbox"
            className={cn(
              'mt-0.5 w-4 h-4 rounded border-border text-accent',
              'focus:ring-2 focus:ring-accent/20 focus:ring-offset-0',
              className
            )}
            {...props}
          />
          <span className="text-sm text-muted leading-relaxed">
            {label}
          </span>
        </label>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)
CheckboxField.displayName = 'CheckboxField'

interface RadioGroupProps {
  label: string
  name: string
  options: { value: string; label: string }[]
  value?: string
  onChange?: (value: string) => void
  error?: string
}

export function RadioGroup({ label, name, options, value, onChange, error }: RadioGroupProps) {
  return (
    <div className="space-y-2">
      <span className="block text-sm font-medium text-text">{label}</span>
      <div className="flex flex-wrap gap-4">
        {options.map(option => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange?.(option.value)}
              className="w-4 h-4 border-border text-accent focus:ring-2 focus:ring-accent/20"
            />
            <span className="text-sm text-text">{option.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}
