import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, Sparkles, Layers, Shuffle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import Container from '../components/Container.jsx'
import MediaImage from '../components/MediaImage.jsx'
import { categories, showcaseItems } from '../data/showcaseData.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { tallyLink } from '../data/siteConfig.js'

export default function ProjectsShowcase() {
  const { t, tr } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [shuffleSeed, setShuffleSeed] = useState(1)
  const [activeModalItem, setActiveModalItem] = useState(null)

  // Gestion du clic sur une catégorie :
  // Si clic sur "Tous les projets", mélange aléatoire des réalisations
  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId)
    if (catId === 'all') {
      setShuffleSeed((prev) => prev + 1)
    }
  }

  // Calcul des éléments affichés :
  // - Si 'all' : tous les projets affichés dans un ordre aléatoire (random shuffle)
  // - Si un domaine spécifique sélectionné : les réalisations de ce domaine
  const displayedItems = useMemo(() => {
    if (selectedCategory === 'all') {
      const items = [...showcaseItems]
      // Fisher-Yates random shuffle
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[items[i], items[j]] = [items[j], items[i]]
      }
      return items
    }
    return showcaseItems.filter((item) => item.categoryId === selectedCategory)
  }, [selectedCategory, shuffleSeed])

  // Duplication pour assurer une boucle infinie continue parfaitement fluide sans accroc
  const loopItems = useMemo(() => {
    if (displayedItems.length === 0) return []
    const minNeeded = Math.ceil(14 / displayedItems.length)
    const baseCount = Math.max(2, minNeeded)
    const repeatCount = baseCount % 2 === 0 ? baseCount : baseCount + 1
    const list = []
    for (let i = 0; i < repeatCount; i++) {
      list.push(...displayedItems)
    }
    return list
  }, [displayedItems])

  return (
    <section id="galerie" className="relative overflow-hidden bg-noir py-24 md:py-32">
      {/* Halo lumineux d'arrière-plan */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-electrique/10 blur-[130px]" />

      <Container>
        <SectionTitle
          kicker={t('showcase.kicker')}
          title={t('showcase.title')}
          sub={t('showcase.sub')}
        />

        {/* Filtres par domaine : sélection instantanée & mélange aléatoire sur "Tous les projets" */}
        <div className="mt-4 mb-10 flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`hover-target flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                  isSelected
                    ? 'bg-electrique text-blanc shadow-glow'
                    : 'border border-white/10 bg-white/[0.03] text-gris-clair hover:border-white/20 hover:text-blanc hover:bg-white/[0.06]'
                }`}
              >
                {cat.id === 'all' && <Shuffle size={13} className={isSelected ? 'text-blanc' : 'text-electrique-soft'} />}
                <span>{tr(cat.label)}</span>
              </button>
            )
          })}
        </div>
      </Container>

      {/* Ruban UNIQUE sur une seule ligne — Défilement automatique fluide uniquement avec les photos */}
      <div className="pause-on-hover relative w-full overflow-hidden">
        <div className="animate-marquee-ltr flex gap-5 px-3">
          {loopItems.map((item, idx) => (
            <ProjectShowcaseCard
              key={`${item.id}-${selectedCategory}-${shuffleSeed}-${idx}`}
              item={item}
              onClick={() => setActiveModalItem(item)}
            />
          ))}
        </div>
      </div>

      {/* Informations en bas de galerie */}
      <Container className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[11.5px] font-mono text-gris-moyen uppercase tracking-wider">
        <span className="flex items-center gap-2">
          <Sparkles size={13} className="text-electrique-soft" />
          <span>Survolez pour mettre en pause · Cliquez sur une photo pour l’agrandir</span>
        </span>
        <span className="flex items-center gap-2">
          <Layers size={13} className="text-electrique-soft" />
          <span>
            {selectedCategory === 'all'
              ? `${showcaseItems.length} photos réelles · Défilement aléatoire`
              : `${displayedItems.length} photos dans ce domaine`}
          </span>
        </span>
      </Container>

      {/* Modale / Lightbox photo haute résolution */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-noir/90 p-4 backdrop-blur-md"
            onClick={() => setActiveModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full overflow-hidden rounded-2xl border border-white/15 bg-noir-soft shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton fermer */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="hover-target absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-noir/70 text-blanc backdrop-blur-md transition-colors hover:bg-white/20"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Photo du projet en grand format */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <MediaImage
                  src={activeModalItem.image}
                  fallbackSrc={activeModalItem.fallbackImage}
                  label={tr(activeModalItem.title)}
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 z-10 rounded-full border border-white/20 bg-noir/70 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-electrique-soft backdrop-blur-md">
                  {tr(activeModalItem.category)}
                </div>
              </div>

              {/* Barre d'action rapide sous la photo */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-5 md:p-6 border-t border-white/8 bg-noir">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-blanc">
                    {tr(activeModalItem.title)}
                  </h3>
                  <span className="text-[12.5px] font-mono text-gris-moyen uppercase tracking-wider">
                    BKH Enseignes — Réalisation Sur Mesure
                  </span>
                </div>
                <a
                  href={tallyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-target inline-flex items-center gap-2 rounded-full bg-electrique px-6 py-2.5 text-[13px] font-semibold text-blanc shadow-glow transition-all hover:bg-blue-600"
                >
                  <span>Commander un projet similaire</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// Carte photo pure : aucune définition textuelle, mise en avant totale de l'image
function ProjectShowcaseCard({ item, onClick }) {
  const { tr } = useLanguage()

  return (
    <article
      onClick={onClick}
      className="group relative w-[300px] sm:w-[360px] md:w-[420px] aspect-[4/3] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/12 bg-noir shadow-[0_16px_36px_-18px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-2 hover:border-electrique-soft/80 hover:shadow-[0_24px_50px_-15px_rgba(0,0,0,0.95),0_0_40px_-10px_rgba(59,130,246,0.4)]"
    >
      <div className="relative h-full w-full overflow-hidden bg-black">
        <MediaImage
          src={item.image}
          fallbackSrc={item.fallbackImage}
          label={tr(item.title)}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Voile très léger avec transition d'éclat au survol */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-20 pointer-events-none" />

        {/* Badge catégorie discret en haut */}
        <div className="absolute top-3 left-3 z-10 rounded-full border border-white/15 bg-noir/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-blanc backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {tr(item.category)}
        </div>

        {/* Icône d'agrandissement discrète au centre au survol */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-noir/75 border border-white/20 text-blanc backdrop-blur-md shadow-2xl">
            <ArrowUpRight size={18} className="text-electrique-soft" />
          </div>
        </div>
      </div>
    </article>
  )
}

