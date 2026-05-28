# KROMA - Creative Design Studio

**KROMA** est un studio de design créatif numérique qui fusionne l'art et la technologie pour créer des expériences digitales uniques et percutantes. Notre site vitrine présente nos services en design graphique, branding et développement web.

**Site:** [kroma-agence.vercel.app](https://kroma-agence.vercel.app)

---

## Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Stack Technologique](#-stack-technologique)
- [Installation](#-installation)
- [Démarrage](#-démarrage)
- [Structure du Projet](#-structure-du-projet)
- [Pages Disponibles](#-pages-disponibles)
- [Scripts Disponibles](#-scripts-disponibles)
- [Déploiement](#-déploiement)
- [Contribuer](#-contribuer)

---

## Fonctionnalités

### Design & Branding
- **Identité visuelle** - Logo, charte graphique, palette de couleurs cohérente
- **Création graphique** - Affiches, flyers, cartes, bannières, contenus social media
- **Supports marketing** - Matériaux promotionnels adaptés à votre image

### Développement Web
- **Portfolios** - Showcase de projets avec animations fluides et design moderne
- **Sites vitrines** - Présence web professionnelle et responsive
- **Solutions e-commerce** - Plateformes complètes pour vendre en ligne

### Technologie
- **Performances optimisées** - Chargement rapide et SEO-friendly
- **Responsive design** - Adaptation parfaite sur tous les appareils
- **Animations avancées** - Expériences interactives et immersives
- **Multilingue** - Support de plusieurs langues

---

##  Stack Technologique

### Frontend
- **React 19** - Framework UI moderne
- **TypeScript** - Typage statique pour une meilleure maintenabilité
- **Vite 7** - Build tool ultra-rapide avec HMR
- **Tailwind CSS 4** - Framework utility-first pour le styling

### Animation & 3D
- **GSAP 3** - Libraire d'animation puissante
- **Three.js** - Rendu 3D et graphiques WebGL

### Routing & Navigation
- **React Router 7** - Gestion de la navigation SPA

### Icônes
- **Lucide React** - Icônes SVG modernes et légères
- **React Icons** - Collection complète d'icônes
- **FontAwesome 7** - Icônes professionnelles

### Internationalisation
- **i18next** - Gestion multilingue
- **react-i18next** - Intégration React

### SEO
- **vite-plugin-sitemap** - Génération automatique du sitemap

### Développement
- **ESLint** - Linting JavaScript/TypeScript
- **Vite Plugin React** - Support React rapide avec Fast Refresh

---

##  Installation

### Prérequis
- **Node.js** >= 16.0.0
- **npm** >= 8.0.0 ou **yarn**

### Étapes

1. **Cloner le repository**
   ```bash
   git clone https://github.com/Kroma-it/KROMA.git
   cd KROMA
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** (si nécessaire)
   ```bash
   cp .env.example .env
   ```

---

## Démarrage

### Mode développement
```bash
npm run dev
```
Le serveur sera disponible à `http://localhost:5173`

### Build pour production
```bash
npm run build
```

### Aperçu de la build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

---

## Structure du Projet

```
KROMA/
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Landing.tsx    # Section hero avec CTA
│   │   ├── Menu.tsx       # Barre de navigation
│   │   ├── Footer.tsx     # Pied de page
│   │   ├── ClientForm.tsx # Formulaire de feedback
│   │   ├── FeedBack.tsx   # Affichage des avis clients
│   │   ├── Gallery.tsx    # Galerie de projets
│   │   ├── Slider.tsx     # Carrousel
│   │   ├── ServiceBloc.tsx
│   │   ├── ServiceClient.tsx
│   │   ├── Pack.tsx       # Cartes de tarification
│   │   └── ...
│   ├── pages/             # Pages principales (routes)
│   │   ├── Home.tsx       # Accueil
│   │   ├── Pricing.tsx    # Tarification
│   │   ├── Clients.tsx    # Avis clients
│   │   ├── Realisation.tsx# Portfolio
│   │   └── ...
│   ├── css/               # Styles personnalisés
│   │   └── style.css
│   ├── App.tsx            # Composant principal
│   └── main.tsx           # Point d'entrée
├── public/                # Fichiers statiques
│   ├── assets/
│   │   ├── logos/
│   │   ├── Landing.mp4    # Vidéo hero
│   │   └── ...
│   ├── code.html
│   └── sitemap.xml
├── vite.config.ts         # Configuration Vite
├── tailwind.config.js     # Configuration Tailwind
├── tsconfig.json          # Configuration TypeScript
├── eslint.config.js       # Configuration ESLint
├── package.json
└── README.md
```

---

##  Pages Disponibles

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Page d'introduction avec services |
| Services | `/services` | Détail des services proposés |
| Réalisations | `/realisations` | Portfolio des projets |
| Avis Clients | `/clients` | Retours et témoignages |
| Tarification | `/tarification` | Plans tarifaires |
| Personnalisation | `/personnalisation` | Formulaire de demande de devis |

---

##  Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Construit le projet pour production |
| `npm run preview` | Prévisualise la build en local |
| `npm run lint` | Vérifie la qualité du code |

---

## Déploiement

### Vercel (Production)
Le projet est automatiquement déployé sur **Vercel** via :
- URL : https://kroma-agence.vercel.app
- Hostname du sitemap : https://kroma-agence.vercel.app

### Configuration Vite
```javascript
server: {
  host: '0.0.0.0',
  port: 5173,
}
```

### Variables d'environnement
Vous pouvez définir le port avec la variable `PORT` :
```bash
PORT=3000 npm run dev
```

---

## Personnalisation

### Couleurs
Les couleurs principales sont gérées via Tailwind CSS :
- `fuchsia-*` - Couleur primaire
- `kroma-*` - Couleur secondaire

### Animations
- **GSAP** pour les animations complexes
- **Tailwind** pour les transitions simples
- **Video background** pour la section hero

### Typographie
Police sans-serif cohérente avec hiérarchie claire

---

## Contribuer

Les contributions sont bienvenues ! Pour contribuer :

1. Fork le repository
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

## Licence

Ce projet est sous licence propriétaire KROMA. Tous droits réservés.

---