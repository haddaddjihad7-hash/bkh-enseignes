import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Container from '../components/Container.jsx'
import MediaImage from '../components/MediaImage.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { tallyLink } from '../data/siteConfig.js'

const CONTACT_BG = '/images/projects/bkh-banner-v1.jpg'

export default function YourProject() {
  const { t } = useLanguage()

  return (
    <section id="votre-projet" className="relative overflow-hidden py-28 md:py-36">
      <MediaImage
        src={CONTACT_BG}
        label="Votre projet"
        className="absolute inset-0 h-full w-full pointer-events-none"
        imgClassName="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-noir/65 via-noir/45 to-noir pointer-events-none" />

      <Container className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-4 flex w-fit items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 text-electrique-soft"
        >
          <span className="h-px w-7 bg-electrique-soft" />
          {t('yourProject.kicker')}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto max-w-2xl font-display text-[clamp(30px,5vw,52px)] font-semibold leading-tight tracking-tight text-blanc drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
        >
          {t('yourProject.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-[19px] font-light text-gris-clair drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        >
          {t('yourProject.line1')}
          <br />
          <span className="text-blanc font-medium">{t('yourProject.line2')}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic strength={0.25}>
            <a
              href={tallyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target flex items-center gap-2.5 rounded-full bg-electrique px-9 py-4 text-[14px] font-semibold text-blanc shadow-glow transition-all hover:bg-blue-600 hover:-translate-y-0.5"
            >
              {t('yourProject.ctaOrder')}
              <ArrowUpRight size={18} />
            </a>
          </Magnetic>
        </motion.div>
      </Container>
    </section>
  )
}
