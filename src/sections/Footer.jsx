import { Instagram, ArrowUp, ArrowUpRight, Mail, Phone, MapPin, Clock } from 'lucide-react'
import Container from '../components/Container.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import siteConfig, { emailLink, phoneLink, phoneCommercialLink } from '../data/siteConfig.js'

// Icône TikTok stylisée
function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15.5 3.5C15.9 5.4 17.2 6.9 19 7.4V10C17.6 10 16.3 9.5 15.3 8.7V14.8C15.3 17.7 12.9 20 10 20C7.1 20 4.7 17.7 4.7 14.8C4.7 11.9 7.1 9.6 10 9.6C10.4 9.6 10.8 9.6 11.1 9.7V12.4C10.8 12.3 10.4 12.2 10 12.2C8.5 12.2 7.3 13.4 7.3 14.8C7.3 16.3 8.5 17.4 10 17.4C11.5 17.4 12.7 16.3 12.7 14.8V3.5H15.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Footer() {
  const { t, tr, lang } = useLanguage()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/8 bg-noir-soft pt-16 pb-10">
      <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-electrique/15 blur-[90px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[80px]" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 border-b border-white/8 pb-12 lg:grid-cols-3">
          {/* Colonne 1 : Logo & Réseaux */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-4 flex items-center gap-3">
              <img src={siteConfig.logo} alt="BKH" className="h-12 w-12 rounded-full object-cover shadow-premium" />
              <span className="font-display text-2xl font-semibold text-blanc">BKH Enseignes</span>
            </div>
            <p className="max-w-sm text-[14px] font-light text-gris-clair leading-relaxed">{t('footer.tagline')}</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-target flex items-center gap-2 rounded-full border border-white/16 bg-white/5 px-4 py-2.5 text-[12.5px] font-medium text-blanc backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-electrique-soft hover:bg-white/10 hover:shadow-glow"
              >
                <Instagram size={16} className="text-pink-400" />
                <span>Instagram</span>
              </a>

              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-target flex items-center gap-2 rounded-full border border-white/16 bg-white/5 px-4 py-2.5 text-[12.5px] font-medium text-blanc backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-electrique-soft hover:bg-white/10 hover:shadow-glow"
              >
                <TikTokIcon className="h-[16px] w-[16px] text-cyan-400" />
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Localisation & Horaires (Remplace le bouton de commande central) */}
          <div className="flex flex-col items-center text-center lg:items-center">
            <span className="font-mono text-[11px] uppercase tracking-widest text-electrique-soft font-semibold">
              {t('footer.locationLabel')}
            </span>

            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-[14.5px] font-medium text-blanc">
                <MapPin size={16} className="text-electrique-soft shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <span className="text-[13.5px] font-light text-gris-clair">{siteConfig.city}</span>

              <div className="mt-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] font-mono text-gris-moyen">
                <Clock size={13} className="text-electrique-soft shrink-0" />
                <span>{siteConfig.openingHours[lang] || siteConfig.openingHours.fr}</span>
              </div>

              <a
                href={siteConfig.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-target mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-electrique-soft transition-colors hover:text-blanc hover:underline"
              >
                <span>{t('footer.viewMap')}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Colonne 3 : Contact direct (Email & Numéros de téléphone) */}
          <div className="flex flex-col items-center gap-4 text-center lg:items-end lg:text-right">
            <span className="font-mono text-[11px] uppercase tracking-widest text-gris-moyen font-medium">
              {t('footer.contactLabel')}
            </span>

            {/* Email */}
            <a
              href={emailLink}
              className="hover-target flex items-center gap-2 font-display text-[16px] font-semibold text-blanc transition-colors hover:text-electrique-soft"
            >
              <Mail size={16} className="text-electrique-soft" />
              <span>{siteConfig.email}</span>
            </a>

            {/* Téléphones */}
            <div className="mt-2 flex flex-col gap-3 lg:items-end">
              <a href={phoneLink} className="hover-target group flex flex-col lg:items-end">
                <span className="text-[11px] font-mono text-gris-moyen uppercase tracking-wider">{t('footer.secretariat')}</span>
                <span className="flex items-center gap-1.5 text-[14.5px] font-medium text-gris-clair transition-colors group-hover:text-electrique-soft">
                  <Phone size={13} className="text-electrique-soft" />
                  <span>{siteConfig.phone}</span>
                </span>
              </a>

              <a href={phoneCommercialLink} className="hover-target group flex flex-col lg:items-end">
                <span className="text-[11px] font-mono text-gris-moyen uppercase tracking-wider">{t('footer.commercial')}</span>
                <span className="flex items-center gap-1.5 text-[14.5px] font-medium text-gris-clair transition-colors group-hover:text-electrique-soft">
                  <Phone size={13} className="text-electrique-soft" />
                  <span>{siteConfig.phoneCommercial}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-[12.5px] text-gris-moyen md:flex-row">
          <span>
            © {new Date().getFullYear()} {siteConfig.companyName}. {t('footer.rights')}
          </span>
          <Magnetic strength={0.35}>
            <button
              onClick={scrollTop}
              className="hover-target flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-gris-clair transition-all hover:border-white/20 hover:text-blanc"
            >
              {t('footer.backToTop')}
              <ArrowUp size={14} />
            </button>
          </Magnetic>
        </div>
      </Container>
    </footer>
  )
}
