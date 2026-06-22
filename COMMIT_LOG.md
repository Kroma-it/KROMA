# Journal des commit
# Commit
# Journal des commits

Ce fichier sert a documenter les changements effectues dans le projet Kroma a chaque commit.

Son objectif est de garder une trace claire, lisible et detaillee de ce qui a ete fait, par qui, pourquoi, et sur quels fichiers. Avant chaque commit, une nouvelle entree doit etre ajoutee dans ce fichier. Si cette documentation n'est pas presente ou incomplete, le commit peut etre bloque par une verification automatique.

Chaque entree doit respecter la structure suivante :

---

## Date - Nom d'utilisateur

**Nom :**  Nom court et explicite du commit.

**Nature :**  Type de changement effectue.  
Exemples : Creation, Modification, Correction, Suppression, Refactorisation, Documentation.

**Details :**  Description claire de ce qui a ete fait dans le commit, les
Cette section doit expliquer les changements importants, le comportement ajoute ou modifie, et les raisons utiles a la comprehension du travail.

**Fichiers :** Liste des fichiers crees, modifies ou supprimes dans le commit.

---

Exemple :

## 2026-05-26 - Jean Dupont

**Nom**  
Ajout des feedbacks et partenaires sur la page d'accueil

**Nature**  
Modification

**Details**  
Ajout de deux nouvelles sections sur la page d'accueil :
- une section de feedbacks clients avec cartes animees
- une section partenaires avec logos en defilement horizontal
- une animation d'apparition au scroll
- une animation CSS continue pour les carrousels

**Fichiers**  
- `src/pages/Home.tsx`
- `src/css/style.css`

---

## 2026-05-27 - Neox-debug

**Nom**  
Ajout du login et modification d'autres pages

**Nature**  
Modification et ajout

**Details**  
- Création de la page de login en overlay qui s'active lorsqu'on clique sur l'avatar
- Ajout du composant ScrollToTop parce que lorsqu'une autre page se chargeait elle restait à la position de la page précédente au lieu de remonter en haut, donc ce composant permet de faire remonter la page
- Suppression du bouton de thème
- Ajout du script pour vérifier que l'historique est rempli à chaque commit
Ajout de deux nouvelles sections sur la page d'accueil :
- une section de feedbacks clients avec cartes animees
- une section partenaires avec logos en defilement horizontal

**Fichiers**  
- `src/pages/Home.tsx`
- `src/components/ScrollToTop.tsx`
- `src/components/Login.tsx`
- `.githooks/pre-commit`

---

## 2026-05-27 - Neox-debug

**Nom**  
Modification du script de commit_log

**Nature**  
Modification

**Details**  
- Modification du script qui vérifie le fichier de commit
- Modification de la structure du fichier de commit

**Fichiers**  
- `COMMIT_LOG.md`
- `.githooks/pre-commit`

---

## 2026-05-27 - Neox-debug

**Nom**  
Staged files

**Nature**  
Staging

**Details**  
- I staged the files pre-commit and HISTORY.md by doing a git add

**Fichiers**  
- `HISTORY.md`
- `.githooks/pre-commit`

---

## 2026-05-28 - Neox-debug

**Nom**  
Vercel config

**Nature**  
Ajout

**Details**  
- J'ai ajouté le fichier de config vercel pour qu'il sache que le projet n'est plus à la racine mais dans `frontend`
- J'ai ajouté le fichier readme à la racine

**Fichiers**  
- `vercel.json`
- `README.md`

---

## 2026-06-01 - Neox-debug

**Nom**  
Grosse mise à jour

**Nature**  
Ajout et modification

**Details**  
- J'ai ajouté la logique de modal dans le site, pourvoir changer de page (url) sans toute fois perdre la progression de la page précédente, un avantage pour le UX
- Dans la page d'`avis-clients` j'ai supprimé les champs `Nom`, `Prénom`, `Email`, `Compagnie` parce que pour faire un feedback il faut un compte et plus besoin de renseigner ces champs. Il restait donc les champs du nombre d'étoiles et le `commentaire`. J'ai supprimer la page d'`avis-clients`, j'ai envoyé les feedbacks à l'accueil et envoyer le formulaire de feedback dans le profil utilisateur pour aussi être sûr que le feedback aura un utilisateur
- J'ai ajouté la page de 404 (`NotFound.tsx`) personnalisée mais qui doit être mieux personnalisée
- J'ai ajouté la page de profil utilisateur
- J'ai modifié le fichier `App.tsx` de tel sorte que l'overlay fonctionne, que le menu ne s'affiche pas sur le 404 et le profil admin que je vais faire,  que le footer ne s'affiche pas sur le profil client et le 404
- J'ai retiré la page des `réalisations` parce qu'il y avait des éléments inutiles comme le slider et le design était trop lourd. On a donc décidé de la supprimer et faire un design plus simplifié à l'acceuil
- J'ai modifié le nom du menu en `MenuUser.tsx` parce qu'il y aura un menu `MenuAdmin.tsx`
- J'ai repmlacé le fichier `pre-commit` par `commit-msg` pour ajouter certaines exceptions

**Fichiers**  
- `LoginModal.tsx`
- `Login.tsx`
- `Clients.tsx`
- `ClientForm.tsx`
- `NotFound.tsx`
- `Profil.tsx`
- `App.tsx`
- `PackHisoty.tsx`
- `RegisterModal.tsx`
- `Réalisation.tsx`
- `FeedbackHistory.tsx`
- `ServiceHistory.tsx`
- `UserInfo.tsx`
- `ClientForm.tsx`
- `MenuUser.tsx`
- `MenuAdmin.tsx`
- `commit-msg`
- `UserInfo.tsx`
- `DashboardUser.tsx`
- `ServiceLogo.tsx`
- `ServiceWeb.tsx`

---

## 2026-06-22 - Neox-debug

**Nom**  
V1_prete

**Nature**  
Ajout et modification

**Details**  
- J'ai terminé la page `ServiceLogo.tsx`, la page `ServiceWeb.tsx`
- J'ai créé la page `ServiceGraphics.tsx`qui appelle le composant `GraphicsCrea.tsx`
- J'ai amélioré la page `PrincingPer.tsx`
- La page `ServiceWeb.tsx` appelle le composant `WebCrea.tsx`
- La page `ServiceLogo.tsx` appelle le composant `LogoCrea.tsx`
- Le composant `PricingHero.tsx` est appellé par `Pricing.tsx` et `PricingPer.tsx`
- Le composant `MenuUser.tsx` est devenu `Menu.tsx`
- J'ai retiré la dégradé dans le composant `Pack.tsx`
- J'ai ajouté les images des visuels que je vais améliorer le design après
- J'ai changé les icônes en svg et les images en webP

**Fichiers**  
- `WebCrea.tsx`
- `LogoCrea.tsx`
- `GraphicsCrea.tsx`
- `PricingHero.tsx`
- `PricingHero.tsx`
- `Menu.tsx`
- `ServiceClient.tsx`
- `Pricing.tsx`
