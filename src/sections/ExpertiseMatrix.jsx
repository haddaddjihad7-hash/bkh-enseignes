import { motion } from 'framer-motion'
import {
  Award,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'
import Container from '../components/Container.jsx'
import BackgroundVideo from '../components/BackgroundVideo.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { tallyLink } from '../data/siteConfig.js'

const EXPERTISE_VIDEO = '/videos/why-bkh.mp4'

const KEY_STATS = [
  { value: '500+', label: { fr: 'Projets Conçus & Installés', en: 'Projects Designed & Built' } },
  { value: '100%', label: { fr: 'Fabrication & Pose Sur-Mesure', en: 'Custom Fabrication & Fitting' } },
  { value: '15+', label: { fr: "Années d'Excellence Métier", en: 'Years of Craft Expertise' } },
  { value: '24/48h', label: { fr: 'Étude 3D & Devis Express', en: '3D Study & Quick Quote' } },
]

const CLIENT_LOGOS = [
  'Ferrari',
  'Mercedes-Benz',
  'Parc du Cap',
  'Galerie des Arts',
  'Le Pellegrini',
  'Bogéna Galerie',
  'E.Leclerc',
  'Lingostière Promenade',
  "L'Octroi",
  'Le Campéones',
  'Crousty One',
  'Waka Bar',
]

export default function ExpertiseMatrix() {
  const { tr, lang } = useLanguage()
  const isFr = lang === 'fr'

  return (
    <section id="expertises" className="relative overflow-hidden py-24 md:py-32">
      {/* Vidéo cinématique en arrière-plan avec voile sombre protecteur */}
      <BackgroundVideo
        src={EXPERTISE_VIDEO}
        fallbackVideo="/videos/landing.mp4"
        fallbackSrc="/images/projects/parc-du-cap-gate.jpg"
        label="Expertise BKH"
        overlayClassName="bg-gradient-to-b from-noir/85 via-noir/75 to-noir/90"
      />

      {/* Glows d'ambiance */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-electrique/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <Container className="relative z-10">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-noir/70 px-4 py-1.5 backdrop-blur-md font-mono text-[11px] uppercase tracking-widest2 text-electrique-soft mb-4"
          >
            <Award size={13} className="text-electrique-soft" />
            <span>{isFr ? 'Savoir-Faire & Métiers Réels' : 'Real-World Craftsmanship'}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-[clamp(28px,4vw,48px)] font-semibold tracking-tight text-blanc"
          >
            {isFr ? 'NOTRE EXPERTISE GLOBALE' : 'OUR SIGNATURE EXPERTISE'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[16px] font-light text-gris-clair leading-relaxed"
          >
            {isFr
              ? "Spécialistes de la conception, fabrication et pose d'enseignes lumineuses, de signalétique et d'aménagements métalliques, nous accompagnons les professionnels dans la valorisation de leur image et de leurs espaces."
              : 'Specialists in bespoke design, fabrication, and installation of illuminated signage and visual architecture for prestigious brands.'}
          </motion.p>
        </div>

        {/* Bannière Chiffres Clés (Partie How Many) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/14 bg-noir/70 p-8 sm:p-12 backdrop-blur-xl shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {KEY_STATS.map((st, i) => (
              <div key={i} className={`flex flex-col items-center text-center ${i > 0 ? 'pt-6 md:pt-0' : ''}`}>
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-blanc tracking-tight">
                  {st.value}
                </span>
                <span className="mt-3 text-[12.5px] sm:text-[13px] font-mono uppercase tracking-wider text-gris-clair font-medium">
                  {tr(st.label)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Références Clients & Marques Prestigieuses (He works with them) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-widest text-electrique-soft font-semibold mb-6">
            {isFr ? 'Ils font confiance à BKH Enseignes' : 'Trusted by leading brands'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {CLIENT_LOGOS.map((brand, i) => (
              <div
                key={i}
                className="rounded-full border border-white/12 bg-noir/65 px-5 sm:px-6 py-2.5 sm:py-3 font-display text-[13.5px] sm:text-[14.5px] font-semibold text-gris-clair backdrop-blur-md transition-all duration-300 hover:border-electrique-soft hover:text-blanc hover:bg-noir/90 hover:scale-105 shadow-lg"
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lancement de Commande Express / Demande de Devis */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 flex flex-col items-center justify-center text-center rounded-3xl border border-electrique/30 bg-gradient-to-b from-electrique/15 via-noir/70 to-noir/90 p-8 sm:p-12 backdrop-blur-xl shadow-2xl"
        >
          <Sparkles size={26} className="text-electrique-soft mb-3 animate-pulse" />
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-blanc">
            {isFr ? 'Vous avez un projet d’enseigne ou d’agencement ?' : 'Ready to elevate your storefront or space?'}
          </h3>
          <p className="mt-3 max-w-lg text-[15px] font-light text-gris-clair leading-relaxed">
            {isFr
              ? 'Transmettez-nous vos dimensions, croquis ou envies. Notre bureau d’études réalise votre modélisation 3D et votre chiffrage sur mesure.'
              : 'Send us your dimensions or ideas. Our design team will prepare your 3D render and customized estimate.'}
          </p>
          <div className="mt-7">
            <Magnetic strength={0.25}>
              <a
                href={tallyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-target inline-flex items-center gap-2.5 rounded-full bg-electrique px-9 py-4 text-[14px] font-semibold text-blanc shadow-glow transition-all hover:bg-blue-600 hover:-translate-y-0.5"
              >
                <span>{isFr ? 'Faire la commande / Demander un devis' : 'Place an order / Request a quote'}</span>
                <ArrowUpRight size={17} />
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
