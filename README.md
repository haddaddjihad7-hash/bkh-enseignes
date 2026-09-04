# 📖 Guide — Photos des Réalisations & Vidéos de Fond (BKH Enseignes)

Le site intègre actuellement **35 réalisations photos réelles**, réparties selon vos ajouts par domaine.

---

## 🗂️ 1. Répartition Actuelle des 35 Photos (`/public/images/domains/`)

| Domaine | Dossier | Nombre de photos | Fichiers |
| :--- | :--- | :---: | :--- |
| **Enseignes & Façades** | `public/images/domains/enseignes/` | **12** | `enseignes-01.jpg` à `enseignes-12.jpg` |
| **Art & Totems Corten** | `public/images/domains/art/` | **2** | `art-01.jpg` à `art-02.jpg` |
| **Lettres Relief 3D** | `public/images/domains/3d-print/` | **6** | `3d-print-01.jpg` à `3d-print-06.jpg` |
| **Stores & Terrasses** | `public/images/domains/terrasse/` | **5** | `terrasse-01.jpg` à `terrasse-05.jpg` |
| **Adhésif & Vitrophanie** | `public/images/domains/adhesif/` | **4** | `adhesif-01.jpg` à `adhesif-04.jpg` |
| **Métallerie & Agencement** | `public/images/domains/interieur/` | **6** | `interieur-01.jpg` à `interieur-06.jpg` |
| **TOTAL** | | **35 photos** | Toutes visibles dans la galerie & filtres |

---

## 🎥 2. Vidéos du Site (`/public/videos/`)

| Fichier | Emplacement sur le site | Description |
| :--- | :--- | :--- |
| **`landing.mp4`** | Hero (Page d'accueil) | Vidéo de fond en boucle |
| **`conception.mp4`** | Section "Conception" | Vidéo de fond avec texte & paragraphes |
| **`why-bkh.mp4`** | Section "Pourquoi BKH" | Vidéo de fond de la section arguments |
| **`process.mp4`** | Section "Processus" | Vidéo atelier & fabrication |

---

## ✏️ 3. Modifier les Titres et Textes des Projets

Tous les projets affichés dans la galerie défilante sont centralisés dans :
```text
src/data/showcaseData.js
```
Chaque projet possède :
- son `id` et sa catégorie (`enseignes`, `art`, `3d-print`, `terrasse`, `adhesif`, `interieur`)
- son titre bilingue (`fr` et `en`)
- sa description
- le chemin de son image (`image: '/images/domains/...'`)

---

## 🚀 4. Lancer le site en local

- Commande : `npm run dev`
- URL locale : `http://localhost:5174/`
