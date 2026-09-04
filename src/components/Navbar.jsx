import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import siteConfig, { tallyLink } from '../data/siteConfig.js'

const LINK_IDS = ['accueil', 'processus', 'galerie', 'expertises', 'contact']
const LINK_KEYS = ['home', 'process', 'showcase', 'expertises', 'contact']

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-noir/85 backdrop-blur-md border-b border-white/8' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-6 md:px-10">
        <button onClick={() => goTo('accueil')} className="hover-target flex items-center gap-3">
          <img src={siteConfig.logo} alt="BKH" className="h-9 w-9 rounded-full object-cover shadow-premium" />
          <span className="font-display text-[15.5px] font-semibold tracking-wide text-blanc">BKH</span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINK_IDS.map((id, i) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="hover-target text-[13.5px] font-medium text-gris-clair transition-colors hover:text-blanc"
            >
              {t(`nav.${LINK_KEYS[i]}`)}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            onClick={toggleLang}
            className="hover-target font-mono text-[12px] tracking-widest text-gris-clair transition-colors hover:text-blanc"
            aria-label="Switch language"
          >
            <span className={lang === 'fr' ? 'text-blanc font-semibold' : ''}>FR</span>
            <span className="mx-1 text-white/30">/</span>
            <span className={lang === 'en' ? 'text-blanc font-semibold' : ''}>EN</span>
          </button>

          <a
            href={tallyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-target inline-flex items-center gap-1.5 rounded-full bg-electrique px-5 py-2.5 text-[13px] font-semibold text-blanc shadow-glow transition-all hover:bg-blue-600 hover:-translate-y-0.5"
          >
            <span>{t('nav.cta')}</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button className="lg:hidden p-2 text-blanc" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden border-t border-white/8 bg-noir/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col px-6 py-3">
              {LINK_IDS.map((id, i) => (
                <button
                  key={id}
                  onClick={() => goTo(id)}
                  className="border-b border-white/6 py-3.5 text-left text-[15px] font-medium text-gris-clair transition-colors hover:text-blanc"
                >
                  {t(`nav.${LINK_KEYS[i]}`)}
                </button>
              ))}
              <div className="flex items-center justify-between py-4">
                <button onClick={toggleLang} className="font-mono text-[13px] tracking-widest text-gris-clair">
                  <span className={lang === 'fr' ? 'text-blanc font-semibold' : ''}>FR</span>
                  <span className="mx-1 text-white/30">/</span>
                  <span className={lang === 'en' ? 'text-blanc font-semibold' : ''}>EN</span>
                </button>
                <a
                  href={tallyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-electrique px-5 py-2.5 text-[13px] font-semibold text-blanc shadow-glow"
                >
                  <span>{t('nav.cta')}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
