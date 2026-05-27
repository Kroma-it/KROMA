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

**Verification**  
Liste des controles effectues avant le commit.

- [ ] Le changement est documente clairement
- [ ] Les fichiers concernes sont listes
- [ ] Les details du commit sont renseignes
- [ ] Le projet a ete verifie ou la raison du non-test est indiquee

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

**Verification**
- [x] Le changement est documente clairement
- [x] Les fichiers concernes sont listes
- [x] Les details du commit sont renseignes
- [x] Le rendu a ete verifie localement

---

## 2026-05-27 - Neox-debug

**Nom**  
Ajout du login et modification d'autres pages

**Nature**  
Modification ey ajout

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


**Verification**
- [x] Le changement est documente clairement
- [x] Les fichiers concernes sont listes
- [x] Les details du commit sont renseignes
- [x] Le rendu a ete verifie localement

---