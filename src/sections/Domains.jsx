import SectionTitle from '../components/SectionTitle.jsx'
import Container from '../components/Container.jsx'
import DomainSlider from '../components/DomainSlider.jsx'
import domains from '../data/domains.js'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Domains() {
  const { t } = useLanguage()

  return (
    <section className="bg-noir-soft py-20 md:py-28">
      <Container>
        <SectionTitle kicker={t('domains.kicker')} title={t('domains.title')} sub={t('domains.sub')} />
        <DomainSlider domains={domains} />
      </Container>
    </section>
  )
}
