import { useEffect, useState } from 'react'
import MediaImage from './MediaImage.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

// Affiche la photo APRÈS par défaut. Au survol (desktop) ou au tap (mobile,
// pas de vrai hover sur téléphone), révèle progressivement la photo AVANT
// via un clip-path animé en douceur. Réutilisable pour tous les projets.
export default function BeforeAfter({ before, after, label, className = '' }) {
  const { t } = useLanguage()
  const [isTouch, setIsTouch] = useState(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none), (pointer: coarse)').matches)
  }, [])

  const showBefore = revealed

  const handlers = isTouch
    ? { onClick: () => setRevealed((v) => !v) }
    : {
        onMouseEnter: () => setRevealed(true),
        onMouseLeave: () => setRevealed(false),
      }

  return (
    <div className={`group relative overflow-hidden ${className}`} {...handlers}>
      {/* Photo APRÈS — toujours visible en dessous */}
      <MediaImage src={after} label={`${label} — ${t('projects.after')}`} className="absolute inset-0 h-full w-full" imgClassName="h-full w-full object-cover" />

      {/* Photo AVANT — révélée progressivement via clip-path */}
      <div
        className="absolute inset-0 h-full w-full transition-[clip-path] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ clipPath: showBefore ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
      >
        <MediaImage src={before} label={`${label} — ${t('projects.before')}`} className="h-full w-full" imgClassName="h-full w-full object-cover" />
      </div>

      {/* Ligne de séparation animée */}
      <div
        className="absolute inset-y-0 w-px bg-electrique-soft/80 shadow-glow transition-[left] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ left: showBefore ? '100%' : '0%' }}
      />

      {/* Indicateur AVANT / APRÈS */}
      <div className="pointer-events-none absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-noir/55 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-gris-clair backdrop-blur-md">
        <span className={showBefore ? 'text-blanc' : 'text-white/40'}>{t('projects.before')}</span>
        <span className="text-white/30">→</span>
        <span className={showBefore ? 'text-white/40' : 'text-blanc'}>{t('projects.after')}</span>
      </div>
    </div>
  )
}
