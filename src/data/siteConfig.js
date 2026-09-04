// ==========================================================================
// CONFIGURATION ENTREPRISE — BKH ENSEIGNES
// Centralisation des informations de marque, contacts, réseaux, adresse et commande.
// ==========================================================================

const siteConfig = {
  companyName: 'BKH Enseignes',

  email: 'bkh.enseignes@gmail.com',

  // Numéro affiché (secrétariat)
  phone: '07 66 16 63 78',
  phoneHref: '+213766166378',

  // Numéro du technicien commercial
  phoneCommercial: '06 41 32 26 97',
  phoneCommercialHref: '+213641322697',

  // Réseaux sociaux officiels
  instagram: 'https://instagram.com/bkh.enseignes',
  tiktok: 'https://tiktok.com/@bkh.enseignes',

  // Localisation de l'entreprise (Atelier & Bureau d'études)
  // Modifiez ces lignes quand vous aurez l'adresse exacte
  address: 'Zone Industrielle & Commerciale, Route Nationale',
  city: 'Alger, Algérie',
  mapsLink: 'https://maps.google.com/?q=BKH+Enseignes+Alger',
  openingHours: {
    fr: 'Samedi – Jeudi : 08h00 – 18h00',
    en: 'Saturday – Thursday: 08:00 AM – 06:00 PM',
  },

  // Logo de la marque
  logo: '/images/logo-bkh.png',
}

// Lien du formulaire de commande direct (Tally)
export const tallyLink = 'https://tally.so/r/44lObr'

export const phoneLink = `tel:${siteConfig.phoneHref}`
export const phoneCommercialLink = `tel:${siteConfig.phoneCommercialHref}`
export const emailLink = `mailto:${siteConfig.email}`

export default siteConfig
