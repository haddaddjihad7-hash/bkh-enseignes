import { motion } from 'framer-motion'
import { Sparkles, Ruler, Shield, Layers } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import Container from '../components/Container.jsx'
import BackgroundVideo from '../components/BackgroundVideo.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

// Emplacement de la vidéo de fond de la section Conception :
// /public/videos/conception.mp4
const CONCEPTION_VIDEO = '/videos/conception.mp4'

// Photo de secours (si la vidéo ne peut pas être chargée) :
// /public/images/projects/parc-du-cap-stone.jpg
const CONCEPTION_FALLBACK = '/images/projects/parc-du-cap-stone.jpg'

export default function Conception() {
  const { t, lang } = useLanguage()
  const isFr = lang === 'fr'

  return (
    <section id="conception" className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden py-24 md:py-32">
      {/* Vidéo d'arrière-plan avec voile protecteur pour une lisibilité parfaite */}
      <BackgroundVideo
        src={CONCEPTION_VIDEO}
        fallbackSrc={CONCEPTION_FALLBACK}
        label="Conception BKH Enseignes"
        overlayClassName="bg-gradient-to-r from-noir/95 via-noir/80 to-noir/90 backdrop-blur-[1px]"
      />

      {/* Halo d'ambiance lumineux */}
      <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-electrique/10 blur-[130px]" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <SectionTitle kicker={t('conception.kicker')} title={t('conception.title')} />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 rounded-2xl border border-white/10 bg-noir/65 p-6 md:p-10 backdrop-blur-md shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-electrique-soft/30 bg-electrique/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-electrique-soft mb-6">
              <Sparkles size={13} />
              <span>{isFr ? 'Excellence en Atelier & sur Site' : 'In-House & On-Site Precision'}</span>
            </div>

            <p className="text-[17px] md:text-[19px] font-light leading-relaxed text-gris-clair drop-shadow-sm">
              {t('conception.paragraph')}
            </p>
            <p className="mt-4 text-[16px] md:text-[17px] font-light leading-relaxed text-gris-clair/90 drop-shadow-sm">
              {t('conception.paragraph2')}
            </p>

            {/* Badges de précision sous les paragraphes */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <Ruler size={18} className="text-electrique-soft shrink-0" />
                <div>
                  <span className="font-display text-[13.5px] font-semibold text-blanc block">
                    {isFr ? 'Précision Laser' : 'Laser Precision'}
                  </span>
                  <span className="text-[11.5px] text-gris-moyen font-light">
                    {isFr ? 'Tolérance ±0.5mm' : '±0.5mm tolerance'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Layers size={18} className="text-electrique-soft shrink-0" />
                <div>
                  <span className="font-display text-[13.5px] font-semibold text-blanc block">
                    {isFr ? 'Matières Nobles' : 'Noble Materials'}
                  </span>
                  <span className="text-[11.5px] text-gris-moyen font-light">
                    {isFr ? 'Inox 316L, Corten' : '316L Steel, Corten'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Shield size={18} className="text-electrique-soft shrink-0" />
                <div>
                  <span className="font-display text-[13.5px] font-semibold text-blanc block">
                    {isFr ? 'Pose Haute Sécurité' : 'Certified Mounting'}
                  </span>
                  <span className="text-[11.5px] text-gris-moyen font-light">
                    {isFr ? 'Normes & Finitions' : 'Norms & Finishes'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
