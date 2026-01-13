'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PracticeCard } from '@/components/ui/PracticeCard'
import { 
  Briefcase, 
  FileText, 
  Users, 
  ChartBar, 
  Scale, 
  Shield, 
  Building, 
  Home 
} from '@/components/ui/Icons'
import { siteContent } from '@/content/site'

const iconMap: Record<string, React.ReactNode> = {
  societario: <Briefcase />,
  contratos: <FileText />,
  trabalhista: <Users />,
  tributario: <ChartBar />,
  contencioso: <Scale />,
  compliance: <Shield />,
  imobiliario: <Building />,
  patrimonial: <Home />,
}

export function PracticeAreas() {
  return (
    <section id="atuacao" className="py-16 md:py-24 bg-bg scroll-mt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="Áreas de Atuação"
            subtitle="Soluções jurídicas especializadas para os desafios do seu negócio."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {siteContent.practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <PracticeCard
                title={area.title}
                description={area.description}
                result={area.result}
                href={`/atuacao#${area.id}`}
                icon={iconMap[area.id]}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
