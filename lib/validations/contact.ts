import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  
  company: z
    .string()
    .min(2, 'Empresa deve ter pelo menos 2 caracteres')
    .max(100, 'Empresa deve ter no máximo 100 caracteres'),
  
  role: z
    .string()
    .min(1, 'Selecione seu cargo'),
  
  topic: z
    .string()
    .min(1, 'Selecione o tema'),
  
  message: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(2000, 'Mensagem deve ter no máximo 2000 caracteres'),
  
  preference: z
    .enum(['whatsapp', 'email'], {
      required_error: 'Selecione uma preferência de contato',
    }),
  
  consent: z
    .boolean()
    .refine(val => val === true, {
      message: 'Você precisa concordar com a política de privacidade',
    }),
  
  // Honeypot field - should be empty
  website: z
    .string()
    .max(0, 'Campo inválido')
    .optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
