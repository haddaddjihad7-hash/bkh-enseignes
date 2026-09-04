import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, Phone, Mail, Building2, Wrench, Sparkles } from 'lucide-react'
import Container from '../components/Container.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import siteConfig, { phoneLink, emailLink } from '../data/siteConfig.js'

export default function CompanyLocation() {
  const { t, lang } = useLanguage()

  const isFr = lang === 'fr'

  return (
    <section id="localisation" className="relative overflow-hidden bg-noir py-24 md:py-32">
      {/* Halo lumineux d'arrière-plan */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-electrique/10 blur-[140px]" />

      <Container className="relative z-10">
        <SectionTitle
          kicker={t('location.kicker')}
          title={t('location.title')}
          sub={t('location.sub')}
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] items-stretch">
          {/* Carte stylisée interactive / Visualisation Localisation avec effets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[380px] overflow-hidden rounded-2xl border border-white/12 bg-noir-soft shadow-2xl flex flex-col justify-between p-6 md:p-8"
          >
            {/* Arrière-plan de carte stylisée avec grille architecturale sombre */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293720_1px,transparent_1px),linear-gradient(to_bottom,#1f293720_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-noir via-transparent to-noir/60 pointer-events-none" />

            {/* Radar / Pin animé central */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              {/* Onde radar pulsante */}
              <div className="relative flex items-center justify-center">
                <div className="absolute h-24 w-24 rounded-full bg-electrique/25 animate-ping opacity-75" />
                <div className="absolute h-16 w-16 rounded-full bg-electrique/40 blur-sm" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-electrique text-blanc shadow-[0_0_25px_rgba(59,130,246,0.8)] border-2 border-white">
                  <MapPin size={22} className="animate-bounce" />
                </div>
              </div>

              {/* Étiquette BKH */}
              <div className="mt-3 rounded-full border border-white/20 bg-noir/85 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-blanc shadow-2xl backdrop-blur-md">
                BKH ENSEIGNES · ATELIER
              </div>
            </div>

            {/* Badge haut gauche */}
            <div className="relative z-10 flex items-center gap-2 rounded-full border border-white/12 bg-noir/60 px-3.5 py-1.5 w-fit font-mono text-[11px] uppercase tracking-widest text-electrique-soft backdrop-blur-md">
              <Building2 size={13} />
              <span>{isFr ? 'Siège & Fabrication' : 'HQ & Production'}</span>
            </div>

            {/* Barre d'action bas de carte */}
            <div className="relative z-10 mt-auto flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-noir/80 p-4 backdrop-blur-md">
              <div>
                <span className="font-display text-[15px] font-semibold text-blanc block">
                  {siteConfig.companyName}
                </span>
                <span className="text-[12.5px] font-light text-gris-clair">
                  {siteConfig.address}, {siteConfig.city}
                </span>
              </div>

              <Magnetic strength={0.25}>
                <a
                  href={siteConfig.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-target inline-flex items-center gap-2 rounded-full bg-electrique px-5 py-2.5 text-[12.5px] font-semibold text-blanc shadow-glow transition-all hover:bg-blue-600"
                >
                  <Navigation size={14} />
                  <span>{t('location.directions')}</span>
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Panneau d'informations & Visite */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-between gap-6"
          >
            {/* Carte Adresse & Horaires */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-md space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-electrique-soft">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-electrique-soft font-semibold">
                    {isFr ? 'Adresse physique' : 'Physical Address'}
                  </span>
                  <h4 className="mt-1 font-display text-[17px] font-semibold text-blanc">
                    {siteConfig.address}
                  </h4>
                  <p className="text-[14px] font-light text-gris-clair">{siteConfig.city}</p>
                </div>
              </div>

              <div className="border-t border-white/8 pt-4 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-electrique-soft">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-electrique-soft font-semibold">
                    {t('location.opening')}
                  </span>
                  <p className="mt-1 text-[14.5px] font-medium text-blanc">
                    {siteConfig.openingHours[lang] || siteConfig.openingHours.fr}
                  </p>
                  <p className="text-[12.5px] font-light text-gris-moyen">
                    {isFr ? 'Accueil sur rendez-vous pour étude de projet' : 'Appointments available for custom project study'}
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Services d'Accueil sur place */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4 text-center">
                <Wrench size={18} className="mx-auto text-electrique-soft mb-2" />
                <span className="font-display text-[13px] font-semibold text-blanc block">
                  {isFr ? 'Atelier Direct' : 'Direct Workshop'}
                </span>
                <span className="text-[11.5px] text-gris-moyen font-light">
                  {isFr ? 'Machines CNC & Laser' : 'CNC & Laser Machining'}
                </span>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4 text-center">
                <Building2 size={18} className="mx-auto text-electrique-soft mb-2" />
                <span className="font-display text-[13px] font-semibold text-blanc block">
                  {isFr ? 'Bureau 3D' : '3D Studio'}
                </span>
                <span className="text-[11.5px] text-gris-moyen font-light">
                  {isFr ? 'Conception & Rendu' : 'Concept & Rendering'}
                </span>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4 text-center">
                <Sparkles size={18} className="mx-auto text-electrique-soft mb-2" />
                <span className="font-display text-[13px] font-semibold text-blanc block">
                  {isFr ? 'Échantillons' : 'Material Samples'}
                </span>
                <span className="text-[11.5px] text-gris-moyen font-light">
                  {isFr ? 'Inox, LED, Plexi' : 'Steel, LED, Acrylic'}
                </span>
              </div>
            </div>

            {/* Appel direct pour rendez-vous */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={phoneLink}
                className="hover-target flex-1 flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-3.5 text-[13px] font-medium text-blanc backdrop-blur-md transition-all hover:border-electrique-soft hover:bg-white/10"
              >
                <Phone size={15} className="text-electrique-soft" />
                <span>{isFr ? 'Appeler le Secrétariat' : 'Call Front Desk'}</span>
              </a>

              <a
                href={emailLink}
                className="hover-target flex-1 flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 py-3.5 text-[13px] font-medium text-blanc backdrop-blur-md transition-all hover:border-electrique-soft hover:bg-white/10"
              >
                <Mail size={15} className="text-electrique-soft" />
                <span>{isFr ? 'Écrire par E-mail' : 'Send an Email'}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
