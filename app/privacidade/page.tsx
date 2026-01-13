import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { siteContent } from '@/content/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados do escritório Barros & Mafra Advogados Associados.',
}

export default function PrivacidadePage() {
  return (
    <div className="pt-20 pb-16 md:pb-24 bg-bg min-h-screen">
      <Container className="max-w-3xl">
        <article className="prose prose-lg prose-gray max-w-none">
          <h1 className="font-serif text-h1-mobile md:text-h1 text-text mb-8">
            Política de Privacidade
          </h1>
          
          <p className="text-muted text-sm mb-8">
            Última atualização: Janeiro de 2024
          </p>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              1. Introdução
            </h2>
            <p className="text-muted leading-relaxed">
              O escritório {siteContent.firmFullName} (&quot;nós&quot;, &quot;nosso&quot; ou &quot;escritório&quot;) 
              está comprometido com a proteção da privacidade e dos dados pessoais de 
              nossos clientes, parceiros e visitantes do nosso site.
            </p>
            <p className="text-muted leading-relaxed mt-4">
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos 
              e protegemos suas informações pessoais em conformidade com a Lei Geral de 
              Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              2. Dados que Coletamos
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Podemos coletar as seguintes categorias de dados pessoais:
            </p>
            <ul className="list-disc pl-6 text-muted space-y-2">
              <li><strong>Dados de identificação:</strong> nome, e-mail, telefone, empresa e cargo.</li>
              <li><strong>Dados de comunicação:</strong> mensagens enviadas através do formulário de contato.</li>
              <li><strong>Dados de navegação:</strong> informações técnicas como endereço IP, tipo de navegador e páginas visitadas.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              3. Finalidade do Tratamento
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Utilizamos seus dados pessoais para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 text-muted space-y-2">
              <li>Responder a solicitações de contato e consultas jurídicas.</li>
              <li>Prestar serviços jurídicos contratados.</li>
              <li>Enviar comunicações relevantes sobre nossos serviços.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
              <li>Melhorar a experiência de navegação em nosso site.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              4. Base Legal
            </h2>
            <p className="text-muted leading-relaxed">
              O tratamento de seus dados pessoais é realizado com base no seu consentimento, 
              na execução de contrato, no cumprimento de obrigação legal ou no legítimo 
              interesse do escritório, conforme aplicável a cada situação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              5. Compartilhamento de Dados
            </h2>
            <p className="text-muted leading-relaxed">
              Não compartilhamos seus dados pessoais com terceiros, exceto quando 
              necessário para a prestação dos serviços jurídicos, para cumprimento 
              de ordem judicial ou legal, ou mediante seu consentimento expresso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              6. Segurança dos Dados
            </h2>
            <p className="text-muted leading-relaxed">
              Implementamos medidas técnicas e organizacionais adequadas para proteger 
              seus dados pessoais contra acesso não autorizado, perda, destruição ou 
              alteração acidental.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              7. Seus Direitos
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Você tem os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc pl-6 text-muted space-y-2">
              <li>Confirmação da existência de tratamento.</li>
              <li>Acesso aos dados.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Portabilidade dos dados.</li>
              <li>Eliminação dos dados tratados com consentimento.</li>
              <li>Revogação do consentimento.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              8. Contato
            </h2>
            <p className="text-muted leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de 
              Privacidade, entre em contato conosco pelo e-mail:{' '}
              <a 
                href={`mailto:${siteContent.contact.email}`}
                className="text-accent hover:underline"
              >
                {siteContent.contact.email}
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-xl font-medium text-text mb-4">
              9. Alterações
            </h2>
            <p className="text-muted leading-relaxed">
              Esta Política de Privacidade pode ser atualizada periodicamente. 
              Recomendamos que você a revise regularmente para estar ciente de 
              quaisquer alterações.
            </p>
          </section>
        </article>
      </Container>
    </div>
  )
}
