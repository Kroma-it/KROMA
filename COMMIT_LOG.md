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