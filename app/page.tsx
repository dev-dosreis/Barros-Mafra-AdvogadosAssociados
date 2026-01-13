import { Hero } from '@/components/sections/Hero'
import { Credentials } from '@/components/sections/Credentials'
import { PracticeAreas } from '@/components/sections/PracticeAreas'
import { Method } from '@/components/sections/Method'
import { Cases } from '@/components/sections/Cases'
import { Articles } from '@/components/sections/Articles'
import { Team } from '@/components/sections/Team'
import { CtaSection } from '@/components/sections/CtaSection'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Credentials />
      <PracticeAreas />
      <Method />
      <Cases />
      <Articles />
      <Team />
      <CtaSection />
      <Contact />
    </>
  )
}
