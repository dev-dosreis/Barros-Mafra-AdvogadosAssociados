import { Metadata } from 'next'
import { Contact } from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com o escritório Barros & Mafra Advogados Associados. Agende uma conversa para avaliar seu caso.',
}

export default function ContatoPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  )
}
