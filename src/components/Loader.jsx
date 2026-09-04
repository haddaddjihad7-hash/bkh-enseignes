import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext.jsx'

// Loading screen premium et bref (le site ne doit jamais rester bloqué dessus).
export default function Loader() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-noir"
        >
          {/* Petites formes/ombres en arrière-plan, très discrètes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-electrique/10 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
            className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-white/5 blur-3xl"
          />

          <div className="relative text-center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[15vw] font-semibold leading-none tracking-tight text-blanc md:text-[80px]"
            >
              {t('loader.line1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-1 font-mono text-[13px] uppercase tracking-widest2 text-electrique-soft"
            >
              {t('loader.line2')}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-8 h-px w-32 origin-left bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
