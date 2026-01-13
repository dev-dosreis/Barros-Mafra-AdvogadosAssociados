import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { siteContent } from '@/content/site'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso do site do escritório Barros & Mafra Advogados Associados.',
}

export default function TermosPage() {
  return (
    <div className="pt-20 pb-16 md:pb-24 bg-bg min-h-screen">
      <Container className="max-w-3xl">
        <article className="prose prose-lg prose-gray max-w-none">
          <h1 className="font-serif text-h1-mobile md:text-h1 text-text mb-8">
            Termos de Uso
          </h1>
          
          <p className="text-muted text-sm mb-8">
            Última atualização: Janeiro de 2024
          </p>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="text-muted leading-relaxed">
              Ao acessar e utilizar o site do {siteContent.firmFullName}, você concorda 
              em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar 
              com qualquer parte destes termos, não deve utilizar este site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              2. Natureza Informativa
            </h2>
            <p className="text-muted leading-relaxed">
              O conteúdo deste site tem caráter exclusivamente informativo e não constitui 
              aconselhamento jurídico. As informações aqui apresentadas não criam relação 
              advogado-cliente e não devem ser utilizadas como substituto de consultoria 
              jurídica especializada.
            </p>
            <p className="text-muted leading-relaxed mt-4">
              Para análise específica de seu caso, recomendamos que entre em contato 
              diretamente com nosso escritório.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              3. Propriedade Intelectual
            </h2>
            <p className="text-muted leading-relaxed">
              Todo o conteúdo deste site, incluindo textos, imagens, logotipos, design e 
              software, é de propriedade do {siteContent.firmFullName} ou está licenciado 
              para nosso uso, sendo protegido pelas leis brasileiras de propriedade intelectual.
            </p>
            <p className="text-muted leading-relaxed mt-4">
              É proibida a reprodução, distribuição ou modificação de qualquer conteúdo 
              sem autorização prévia por escrito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              4. Uso do Site
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Você concorda em utilizar este site apenas para fins legais e de forma 
              que não infrinja os direitos de terceiros. É proibido:
            </p>
            <ul className="list-disc pl-6 text-muted space-y-2">
              <li>Utilizar o site para qualquer finalidade ilegal ou não autorizada.</li>
              <li>Tentar obter acesso não autorizado a qualquer parte do site.</li>
              <li>Transmitir vírus ou código malicioso.</li>
              <li>Coletar informações de outros usuários sem consentimento.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              5. Confidencialidade
            </h2>
            <p className="text-muted leading-relaxed">
              Nosso escritório observa rigorosamente o dever de sigilo profissional 
              previsto no Código de Ética e Disciplina da OAB. As informações 
              compartilhadas através do formulário de contato são tratadas com 
              confidencialidade.
            </p>
            <p className="text-muted leading-relaxed mt-4">
              No entanto, informações enviadas por meios eletrônicos não estão 
              protegidas pelo sigilo advogado-cliente até que uma relação formal 
              seja estabelecida.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              6. Limitação de Responsabilidade
            </h2>
            <p className="text-muted leading-relaxed">
              O {siteContent.firmFullName} não se responsabiliza por danos diretos, 
              indiretos, incidentais ou consequenciais decorrentes do uso ou da 
              impossibilidade de uso deste site, incluindo perda de dados ou interrupção 
              de negócios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              7. Links Externos
            </h2>
            <p className="text-muted leading-relaxed">
              Este site pode conter links para sites de terceiros. Não temos controle 
              sobre o conteúdo desses sites e não nos responsabilizamos por suas 
              políticas de privacidade ou práticas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              8. Legislação Aplicável
            </h2>
            <p className="text-muted leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do 
              Brasil. Qualquer disputa será submetida ao foro da Comarca de São Paulo, 
              Estado de São Paulo, com exclusão de qualquer outro.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              9. Alterações
            </h2>
            <p className="text-muted leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
              As alterações entrarão em vigor imediatamente após sua publicação neste site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              10. Contato
            </h2>
            <p className="text-muted leading-relaxed">
              Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail:{' '}
              <a 
                href={`mailto:${siteContent.contact.email}`}
                className="text-accent hover:underline"
              >
                {siteContent.contact.email}
              </a>
            </p>
          </section>
        </article>
      </Container>
    </div>
  )
}
