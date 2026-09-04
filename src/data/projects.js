// ==========================================================================
// PROJETS — NOS RÉALISATIONS (système AVANT / APRÈS)
//
// POUR AJOUTER UN PROJET :
// 1. Allez dans /public/images/projects/
// 2. Ajoutez vos deux photos avec exactement les noms indiqués ci-dessous
//    (ex. project-07-before.jpg et project-07-after.jpg)
// 3. Ajoutez un nouvel objet dans le tableau ci-dessous, en suivant le
//    même modèle (title, category, before, after).
// 4. Le projet apparaît automatiquement sur le site — rien d'autre à faire.
//
// Tant qu'une photo n'existe pas, un placeholder gris/argent s'affiche
// automatiquement à sa place.
// ==========================================================================

const projects = [
  {
    id: 1,
    title: { fr: 'Tabac Le Campéones', en: 'Tabac Le Campéones' },
    category: { fr: 'Enseignes', en: 'Signage' },
    before: '/images/projects/tabac-le-campeones.jpg',
    after: '/images/domains/enseignes/enseignes-01.jpg',
  },
  {
    id: 2,
    title: { fr: 'Parc du Cap — Signalétique & Portail', en: 'Parc du Cap — Signage & Gate' },
    category: { fr: '3D Print & Métal', en: '3D Print & Metal' },
    before: '/images/projects/parc-du-cap-gate.jpg',
    after: '/images/projects/parc-du-cap-stone.jpg',
  },
  {
    id: 3,
    title: { fr: 'Galerie des Arts — Totem Corten & Harlequin', en: 'Galerie des Arts — Corten & Harlequin' },
    category: { fr: 'Art & Totem', en: 'Art & Totem' },
    before: '/images/projects/galerie-des-arts-harlequin.jpg',
    after: '/images/projects/galerie-des-arts-totem.jpg',
  },
  {
    id: 4,
    title: { fr: 'Restaurant Le Pellegrini', en: 'Le Pellegrini Restaurant' },
    category: { fr: 'Terrasse & Toiture', en: 'Terrace & Rooftop' },
    before: '/images/projects/le-pellegrini-terrasse.jpg',
    after: '/images/domains/terrasse/terrasse-01.jpg',
  },
  {
    id: 5,
    title: { fr: 'Bogéna Galerie — Totem Cube 3D', en: 'Bogéna Galerie — 3D Cube Totem' },
    category: { fr: 'Lettres Relief 3D', en: '3D Relief Letters' },
    before: '/images/projects/bogena-galerie-cube.jpg',
    after: '/images/domains/3d-print/3d-print-01.jpg',
  },
  {
    id: 6,
    title: { fr: 'BKH Enseignes Atelier & Réalisations', en: 'BKH Workshop & Projects' },
    category: { fr: 'Atelier Direct', en: 'Direct Workshop' },
    before: '/images/projects/bkh-banner-v1.jpg',
    after: '/images/projects/bkh-banner-official.jpg',
  },
]

export default projects
