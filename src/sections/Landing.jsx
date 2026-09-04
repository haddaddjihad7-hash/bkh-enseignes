import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedText from '../components/AnimatedText.jsx'
import BackgroundVideo from '../components/BackgroundVideo.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { tallyLink } from '../data/siteConfig.js'

gsap.registerPlugin(ScrollTrigger)

const LANDING_VIDEO = '/videos/landing.mp4'
const LANDING_BACKGROUND = '/images/landing-background.jpg'

export default function Landing() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  // Subtil effet de parallaxe cinématographique sans dépasser les bordures
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !bgRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 8,
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="accueil" ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden bg-noir pt-24">
      {/* Fond vidéo / photo avec un voile très léger et élégant pour préserver la clarté et l'éclat des médias */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div ref={bgRef} className="absolute inset-0 h-full w-full">
          <BackgroundVideo
            src={LANDING_VIDEO}
            fallbackSrc={LANDING_BACKGROUND}
            label="Landing background"
            overlayClassName="bg-gradient-to-b from-noir/30 via-noir/15 to-noir/70"
          />
        </div>
      </div>

      {/* Contenu textuel et actions */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-noir/40 px-3.5 py-1.5 backdrop-blur-md font-mono text-[11px] uppercase tracking-widest2 text-electrique-soft"
        >
          <Sparkles size={13} className="text-electrique-soft" />
          <span>{t('landing.line1')} · {t('landing.line2')}</span>
        </motion.div>

        <AnimatedText
          lines={[t('landing.headline1'), t('landing.headline2')]}
          lineClassName="font-display text-[12vw] font-semibold leading-[0.96] tracking-tight text-blanc md:text-[88px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-7 max-w-lg text-[16.5px] font-light text-gris-clair leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        >
          {t('landing.tagline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic strength={0.25}>
            <a
              href={tallyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-target flex items-center gap-2 rounded-full bg-electrique px-8 py-4 text-[13.5px] font-semibold text-blanc shadow-glow transition-all hover:bg-blue-600 hover:-translate-y-0.5"
            >
              {t('landing.ctaPrimary')}
              <ArrowUpRight size={16} />
            </a>
          </Magnetic>
          <Magnetic strength={0.25}>
            <button
              onClick={() => scrollTo('galerie')}
              className="hover-target rounded-full border border-white/20 bg-noir/40 px-7 py-4 text-[13.5px] font-semibold text-blanc backdrop-blur-md transition-all hover:border-electrique-soft hover:bg-white/10"
            >
              {t('landing.ctaSecondary')}
            </button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('processus')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10.5px] uppercase tracking-widest text-white/60 hover:text-blanc transition-colors"
      >
        {t('landing.scroll')}
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  )
}
