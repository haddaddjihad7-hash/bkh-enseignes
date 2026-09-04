import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Compass,
  Layers,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Cpu,
  Eye,
} from 'lucide-react'
import Container from '../components/Container.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import BackgroundVideo from '../components/BackgroundVideo.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const PROCESS_VIDEO = '/videos/process.mp4'

const PROCESS_STEPS = [
  {
    id: 'step-01',
    number: '01',
    phase: 'PHASE 01 · CONCEPTION',
    icon: Compass,
    title: {
      fr: 'Analyse, Relevé de Côtes & Écoute',
      en: 'Analysis, Site Survey & Consultation',
    },
    shortDesc: {
      fr: "Étude de votre identité de marque, prise de cotes au télémètre laser sur site et analyse des contraintes d'exposition.",
      en: 'Brand identity analysis, on-site laser precision measuring, and architectural exposure survey.',
    },
    longDesc: {
      fr: "Chaque projet d'enseigne commence par une écoute attentive. Notre équipe étudie votre charte graphique, votre façade et la visibilité diurne et nocturne afin de déterminer les dimensions et l'emplacement parfaits.",
      en: 'Every sign project starts with attentive listening. Our team studies your branding, storefront architecture, and 24/7 visibility to determine optimal placement and scale.',
    },
    deliverables: [
      'Relevé dimensionnel haute précision',
      'Cahier des charges personnalisé',
      'Conseil sur les matériaux & éclairages',
    ],
    badge: 'Étude & Analyse',
    metric: 'Précision : Laser 3D',
    color: 'from-blue-500/20 to-cyan-500/5',
  },
  {
    id: 'step-02',
    number: '02',
    phase: 'PHASE 02 · CRÉATION',
    icon: Eye,
    title: {
      fr: 'Modélisation 3D Photoréaliste & BAT',
      en: 'Photorealistic 3D Renders & Proofing',
    },
    shortDesc: {
      fr: "Simulation 3D sur votre façade réelle de jour et de nuit pour valider chaque détail avant mise en production.",
      en: '3D simulation on your actual facade in daylight and nighttime settings before manufacturing begins.',
    },
    longDesc: {
      fr: "Notre bureau d'études modélise votre enseigne en 3D avec le rendu exact des lumières, des ombres et des textures de matériaux (inox, alu, plexi). Vous visualisez le résultat final avant de lancer l'usinage.",
      en: 'Our design department generates high-definition 3D renderings showcasing exact lighting diffusion, metal reflection, and finishes so you can approve with 100% confidence.',
    },
    deliverables: [
      'Rendu 3D immersif jour & nuit',
      'Échantillons de matériaux réels',
      'Bon À Tirer (BAT) certifié',
    ],
    badge: 'DAO & Rendu 3D',
    metric: 'Simulation : 4K Réaliste',
    color: 'from-indigo-500/20 to-purple-500/5',
  },
  {
    id: 'step-03',
    number: '03',
    phase: 'PHASE 03 · ATELIER',
    icon: Cpu,
    title: {
      fr: 'Fabrication Sur Mesure en Atelier',
      en: 'In-House Precision Manufacturing',
    },
    shortDesc: {
      fr: "Découpe laser CNC, usinage numérique, façonnage inox et intégration des modules LED étanches IP67.",
      en: 'CNC laser cutting, digital machining, stainless steel craftsmanship, and IP67 waterproof LED integration.',
    },
    longDesc: {
      fr: "Dans nos ateliers de fabrication, nos maîtres artisans et techniciens façonnent chaque élément : découpe numérique des boîtiers, pliage précis, thermolaquage haute résistance et câblage électronique rigoureusement testé.",
      en: 'In our production workshops, craftsmen and technicians shape every component: laser cutting, precision folding, powder-coating, and rigorous electronic testing.',
    },
    deliverables: [
      'Découpe laser & usinage CNC',
      'Thermolaquage Qualicoat résistant UV',
      'LED étanches basse consommation IP67',
    ],
    badge: 'Usinage & Soudure',
    metric: 'Tolérance : ±0.5 mm',
    color: 'from-amber-500/20 to-orange-500/5',
  },
  {
    id: 'step-04',
    number: '04',
    phase: 'PHASE 04 · INSTALLATION',
    icon: Wrench,
    title: {
      fr: 'Pose & Raccordement Haute Sécurité',
      en: 'High-Safety On-Site Installation',
    },
    shortDesc: {
      fr: "Installation par nos équipes qualifiées avec nacelles, fixations structurelles conformes et mise en service électrique.",
      en: 'Expert installation by certified rigging teams with heavy lifting cranes, structural anchorings, and electrical setup.',
    },
    longDesc: {
      fr: "Nos poseurs expérimentés assurent l'installation complète sur tout type de façade : fixation sécurisée aux normes de charge au vent, passages de câbles invisibles et raccordement électrique dans le respect strict des normes de sécurité.",
      en: 'Our installers handle complete mounting on any building facade: wind-load certified anchorings, concealed wire pathways, and electrical connection complying with all safety codes.',
    },
    deliverables: [
      'Équipement nacelles & sécurisation',
      'Fixations structurelles invisibles',
      'Mise en service & réglage d’intensité',
    ],
    badge: 'Pose & Nacelles',
    metric: 'Sécurité : 100% Certifiée',
    color: 'from-rose-500/20 to-pink-500/5',
  },
  {
    id: 'step-05',
    number: '05',
    phase: 'PHASE 05 · LONGÉVITÉ',
    icon: ShieldCheck,
    title: {
      fr: 'Garantie, Entretien & Maintenance SAV',
      en: 'Warranty, Upkeep & Responsive Support',
    },
    shortDesc: {
      fr: "Suivi continu, relamping LED, dépannage express et garantie pour préserver l'éclat de votre enseigne durablement.",
      en: 'Continuous monitoring, LED relamping, rapid emergency support, and full warranty to preserve your sign.',
    },
    longDesc: {
      fr: "BKH Enseignes vous accompagne bien au-delà de la pose. Nous assurons la maintenance préventive, le nettoyage professionnel et les interventions rapides pour que votre enseigne conserve son impact et son prestige intacts au fil des années.",
      en: 'BKH Enseignes partners with you for the long run. We deliver preventive maintenance, cleaning, and rapid response to keep your sign shining bright for years.',
    },
    deliverables: [
      'Garantie totale pièces & main d’œuvre',
      'SAV et dépannage prioritaire',
      'Contrats d’entretien préventif',
    ],
    badge: 'Garantie & SAV',
    metric: 'Disponibilité : 6j/7',
    color: 'from-emerald-500/20 to-teal-500/5',
  },
]

export default function Process() {
  const { tr, lang } = useLanguage()
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  const activeStep = PROCESS_STEPS[activeStepIndex]
  const isFr = lang === 'fr'

  const nextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % PROCESS_STEPS.length)
  }

  const prevStep = () => {
    setActiveStepIndex((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length)
  }

  return (
    <section id="processus" className="relative overflow-hidden py-24 md:py-32">
      {/* Vidéo cinématique en arrière-plan avec voile sombre protecteur */}
      <BackgroundVideo
        src={PROCESS_VIDEO}
        fallbackVideo="/videos/landing.mp4"
        fallbackSrc="/images/projects/bogena-galerie-cube.jpg"
        label="Processus BKH"
        overlayClassName="bg-gradient-to-b from-noir/90 via-noir/80 to-noir/95"
      />

      {/* Glows d'ambiance */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-electrique/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

      <Container className="relative z-10">
        <SectionTitle
          kicker={isFr ? "Notre Processus d'Excellence" : 'Our Craft Methodology'}
          title={isFr ? 'LA MAÎTRISE DES 5 ÉTAPES' : 'MASTERING EVERY STEP'}
          sub={
            isFr
              ? 'Une méthode d’exécution rigoureuse et transparente, du premier croquis jusqu’à la pose finale de votre enseigne.'
              : 'A rigorous and transparent workflow, from initial sketches to precision on-site installation.'
          }
        />

        {/* Barre de navigation interactive des 5 étapes (Stepper) */}
        <div className="mt-12 relative">
          {/* Ligne de progression en arrière-plan */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          <div
            className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-electrique to-cyan-400 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%` }}
          />

          {/* Boutons d'étapes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx
              const isPassed = idx < activeStepIndex
              const Icon = step.icon

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`hover-target group relative flex flex-col items-center text-center p-4 rounded-2xl border transition-all duration-400 ${
                    isActive
                      ? 'border-electrique-soft bg-white/10 shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] -translate-y-1'
                      : isPassed
                      ? 'border-white/20 bg-noir/50 hover:bg-white/[0.08]'
                      : 'border-white/8 bg-noir/40 hover:border-white/15 hover:bg-white/[0.05]'
                  }`}
                >
                  {/* Pastille numéro avec icône */}
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl font-mono text-[13px] font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-electrique text-blanc scale-110 shadow-glow'
                        : isPassed
                        ? 'bg-white/15 text-blanc'
                        : 'bg-white/5 text-gris-moyen group-hover:text-blanc'
                    }`}
                  >
                    <Icon size={19} />
                  </div>

                  <span
                    className={`mt-3 font-mono text-[11px] uppercase tracking-widest transition-colors ${
                      isActive ? 'text-electrique-soft font-semibold' : 'text-gris-moyen'
                    }`}
                  >
                    {step.number} / 05
                  </span>

                  <span
                    className={`mt-1 font-display text-[13px] font-semibold leading-tight line-clamp-1 transition-colors ${
                      isActive ? 'text-blanc' : 'text-gris-clair group-hover:text-blanc'
                    }`}
                  >
                    {tr(step.title)}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Détail interactif de l'étape active : Design textuel épuré et moderne */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/12 bg-noir/75 p-6 sm:p-10 backdrop-blur-xl shadow-2xl"
            >
              {/* En-tête : Phase, Badge, Métrique atelier */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-electrique-soft/40 bg-electrique/15 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-electrique-soft font-medium">
                    {activeStep.phase}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-gris-clair">
                    {activeStep.badge}
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1 font-mono text-[11px] text-electrique-soft">
                  <Sparkles size={13} />
                  <span>{activeStep.metric}</span>
                </div>
              </div>

              {/* Contenu principal : Titre, paragraphes et livrables */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-12 items-start">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-blanc tracking-tight">
                    {tr(activeStep.title)}
                  </h3>

                  <p className="mt-5 text-[16.5px] font-medium leading-relaxed text-blanc/90">
                    {tr(activeStep.shortDesc)}
                  </p>

                  <p className="mt-4 text-[15px] font-light leading-relaxed text-gris-clair">
                    {tr(activeStep.longDesc)}
                  </p>
                </div>

                {/* Livrables & Engagements clés de l'étape */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-electrique-soft font-semibold block mb-4">
                    {isFr ? 'Engagements & Livrables' : 'Stage Deliverables'}
                  </span>
                  <ul className="space-y-3">
                    {activeStep.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-3 text-[13.5px] text-blanc font-medium">
                        <CheckCircle2 size={16} className="text-electrique-soft shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-white/8 flex items-center gap-2 text-[12px] text-gris-moyen">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>{isFr ? 'Contrôle qualité & validation client' : 'Quality check & client validation'}</span>
                  </div>
                </div>
              </div>

              {/* Boutons précédent / suivant */}
              <div className="mt-10 flex items-center justify-between border-t border-white/8 pt-6">
                <button
                  onClick={prevStep}
                  className="hover-target inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-gris-clair transition-all hover:border-white/30 hover:text-blanc hover:bg-white/10"
                >
                  <ArrowLeft size={15} />
                  <span>{isFr ? 'Étape précédente' : 'Previous step'}</span>
                </button>

                <span className="font-mono text-[13px] font-medium text-gris-clair hidden sm:inline">
                  Étape {activeStep.number} / 05
                </span>

                <button
                  onClick={nextStep}
                  className="hover-target inline-flex items-center gap-2 rounded-full bg-electrique px-6 py-2.5 text-[13px] font-semibold text-blanc shadow-glow transition-all hover:bg-blue-600"
                >
                  <span>{isFr ? 'Étape suivante' : 'Next step'}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
