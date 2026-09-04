import { createContext, useContext, useMemo, useState } from 'react'
import fr from '../translations/fr.js'
import en from '../translations/en.js'

const DICTS = { fr, en }

const LanguageContext = createContext(null)

// Lecture d'une valeur imbriquée via un chemin "a.b.c"
function getPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr') // Français par défaut

  const value = useMemo(() => {
    const dict = DICTS[lang]

    // t('nav.home') -> texte de l'interface (navbar, titres de section, boutons...)
    const t = (path) => getPath(dict, path) ?? path

    // tr({ fr: '...', en: '...' }) -> texte bilingue stocké directement dans les données
    // (projects.js, domains.js, process.js)
    const tr = (field) => {
      if (field == null) return ''
      if (typeof field === 'string') return field
      return field[lang] ?? field.fr ?? ''
    }

    const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'))

    return { lang, setLang, toggleLang, t, tr }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
