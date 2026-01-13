'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { InputField, SelectField, TextareaField, CheckboxField, RadioGroup } from '@/components/ui/FormField'
import { Toast } from '@/components/ui/Toast'
import { WhatsApp } from '@/components/ui/Icons'
import { contactSchema, ContactFormData } from '@/lib/validations/contact'
import { siteContent } from '@/content/site'

type FormErrors = Partial<Record<keyof ContactFormData, string>>

export function ContactForm() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    preference: 'email',
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handleChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    // Validate form data
    const result = contactSchema.safeParse(formData)
    
    if (!result.success) {
      const fieldErrors: FormErrors = {}
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof ContactFormData
        fieldErrors[field] = err.message
      })
      setErrors(fieldErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }

      // Success
      setToast({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', type: 'success' })
      setFormData({ preference: 'email', consent: false })
    } catch (error) {
      setToast({ 
        message: error instanceof Error ? error.message : 'Erro ao enviar mensagem. Tente novamente.',
        type: 'error' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Honeypot field - hidden from users */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website"
            value={formData.website || ''}
            onChange={(e) => handleChange('website', e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <InputField
            label="Nome completo"
            placeholder="Seu nome"
            value={formData.name || ''}
            onChange={(e) => handleChange('name', e.target.value)}
            error={errors.name}
          />
          <InputField
            label="Empresa"
            placeholder="Nome da empresa"
            value={formData.company || ''}
            onChange={(e) => handleChange('company', e.target.value)}
            error={errors.company}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <SelectField
            label="Cargo"
            options={siteContent.cargoOptions}
            value={formData.role || ''}
            onChange={(e) => handleChange('role', e.target.value)}
            error={errors.role}
          />
          <SelectField
            label="Tema"
            options={siteContent.contactTopics}
            value={formData.topic || ''}
            onChange={(e) => handleChange('topic', e.target.value)}
            error={errors.topic}
          />
        </div>

        <TextareaField
          label="Mensagem"
          placeholder="Descreva brevemente como podemos ajudar..."
          value={formData.message || ''}
          onChange={(e) => handleChange('message', e.target.value)}
          error={errors.message}
        />

        <RadioGroup
          label="Preferência de contato"
          name="preference"
          options={[
            { value: 'email', label: 'E-mail' },
            { value: 'whatsapp', label: 'WhatsApp' },
          ]}
          value={formData.preference}
          onChange={(value) => handleChange('preference', value)}
          error={errors.preference}
        />

        <CheckboxField
          checked={formData.consent || false}
          onChange={(e) => handleChange('consent', e.target.checked)}
          error={errors.consent}
          label={
            <>
              Li e concordo com a{' '}
              <Link href="/privacidade" className="text-accent hover:underline">
                Política de Privacidade
              </Link>
              {' '}e autorizo o tratamento dos meus dados para contato.
            </>
          }
        />

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            data-analytics="contact-form-submit"
            className="flex-1"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </Button>
          
          <a
            href={`https://wa.me/${siteContent.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button
              type="button"
              variant="secondary"
              size="lg"
              className="w-full gap-2"
              data-analytics="contact-whatsapp"
            >
              <WhatsApp className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>
        </div>
      </motion.form>

      <Toast
        message={toast?.message || ''}
        type={toast?.type || 'success'}
        isVisible={!!toast}
        onClose={() => setToast(null)}
      />
    </>
  )
}
