import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Container from '../components/Container.jsx'
import BackgroundVideo from '../components/BackgroundVideo.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const WHY_VIDEO = '/videos/why-bkh.mp4'
const WHY_FALLBACK = '/images/projects/le-pellegrini-terrasse.jpg'

export default function WhyBKH() {
  const { t } = useLanguage()
  const args = t('why.args')

  return (
    <section id="pourquoi-bkh" className="relative overflow-hidden py-24 md:py-32">
      <BackgroundVideo
        src={WHY_VIDEO}
        fallbackSrc={WHY_FALLBACK}
        label="Pourquoi BKH"
        overlayClassName="bg-gradient-to-r from-noir/85 via-noir/50 to-noir/75"
      />

      <Container className="relative z-10">
        <div className="mb-14 flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 text-electrique-soft"
          >
            <span className="h-px w-7 bg-electrique-soft" />
            {t('why.kicker')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-[clamp(28px,4vw,46px)] font-semibold tracking-tight text-blanc drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          >
            {t('why.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {Array.isArray(args) &&
            args.map((arg, i) => (
              <motion.div
                key={arg.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 rounded-xl border border-white/12 bg-noir/50 p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-electrique-soft/50 shadow-[0_12px_30px_-15px_rgba(0,0,0,0.5)]"
              >
                <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-electrique-soft" />
                <div>
                  <h3 className="font-display text-[16.5px] font-semibold text-blanc">{arg.title}</h3>
                  <p className="mt-2 text-[14px] font-light leading-relaxed text-gris-clair">{arg.text}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </Container>
    </section>
  )
}
