// ==========================================================================
// NOS 6 DOMAINES — données du slider
//
// Chaque domaine a exactement 3 photos, à déposer dans son propre dossier :
//   /public/images/domains/<domaine>/<domaine>-01.jpg
//   /public/images/domains/<domaine>/<domaine>-02.jpg
//   /public/images/domains/<domaine>/<domaine>-03.jpg
//
// Tant qu'une photo n'existe pas, un placeholder gris/argent s'affiche
// automatiquement à sa place.
// ==========================================================================

const domains = [
  {
    id: 'enseignes',
    number: '01',
    title: { fr: 'Enseignes', en: 'Signage' },
    description: {
      fr: "Conception, fabrication et pose d'enseignes lumineuses et façades sur mesure.",
      en: 'Design, manufacturing and installation of custom illuminated signs and facades.',
    },
    images: [
      '/images/domains/enseignes/enseignes-01.jpg', // 📸 domaine Enseignes
      '/images/domains/enseignes/enseignes-02.jpg', // 📸 domaine Enseignes
      '/images/domains/enseignes/enseignes-03.jpg', // 📸 domaine Enseignes
    ],
  },
  {
    id: 'art',
    number: '02',
    title: { fr: 'Art', en: 'Art' },
    description: {
      fr: 'Fresques, décors et créations artistiques sur mesure pour marquer un lieu.',
      en: 'Murals, decor and custom artistic creations that leave a mark on a place.',
    },
    images: [
      '/images/domains/art/art-01.jpg', // 📸 domaine Art
      '/images/domains/art/art-02.jpg', // 📸 domaine Art
      '/images/domains/art/art-01.jpg', // 📸 domaine Art (fallback 2 photos)
    ],
  },
  {
    id: 'interieur',
    number: '03',
    title: { fr: 'Intérieur', en: 'Interior' },
    description: {
      fr: "Agencement et habillage d'espaces intérieurs — accueils, showrooms, boutiques.",
      en: 'Fit-out and design of interior spaces — receptions, showrooms, boutiques.',
    },
    images: [
      '/images/domains/interieur/interieur-01.jpg', // 📸 domaine Intérieur
      '/images/domains/interieur/interieur-02.jpg', // 📸 domaine Intérieur
      '/images/domains/interieur/interieur-03.jpg', // 📸 domaine Intérieur
    ],
  },
  {
    id: 'adhesif',
    number: '04',
    title: { fr: 'Adhésif', en: 'Vinyl' },
    description: {
      fr: 'Habillage vitrines, marquage véhicules et adhésifs décoratifs grand format.',
      en: 'Window graphics, vehicle wraps and large-format decorative vinyl.',
    },
    images: [
      '/images/domains/adhesif/adhesif-01.jpg', // 📸 domaine Adhésif
      '/images/domains/adhesif/adhesif-02.jpg', // 📸 domaine Adhésif
      '/images/domains/adhesif/adhesif-03.jpg', // 📸 domaine Adhésif
    ],
  },
  {
    id: 'terrasse',
    number: '05',
    title: { fr: 'Terrasse', en: 'Terrace' },
    description: {
      fr: 'Aménagement de terrasses commerciales : structures, brise-vues, mobilier sur mesure.',
      en: 'Commercial terrace fit-out: structures, privacy screens, custom furniture.',
    },
    images: [
      '/images/domains/terrasse/terrasse-01.jpg', // 📸 domaine Terrasse
      '/images/domains/terrasse/terrasse-02.jpg', // 📸 domaine Terrasse
      '/images/domains/terrasse/terrasse-03.jpg', // 📸 domaine Terrasse
    ],
  },
  {
    id: '3d-print',
    number: '06',
    title: { fr: '3D Print', en: '3D Print' },
    description: {
      fr: 'Lettres et volumes en relief imprimés en 3D pour une signalétique qui sort du lot.',
      en: '3D-printed raised letters and volumes for signage that stands out.',
    },
    images: [
      '/images/domains/3d-print/3d-print-01.jpg', // 📸 domaine 3D Print
      '/images/domains/3d-print/3d-print-02.jpg', // 📸 domaine 3D Print
      '/images/domains/3d-print/3d-print-03.jpg', // 📸 domaine 3D Print
    ],
  },
]

export default domains
