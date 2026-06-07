## Documentation du projet

1. Implémentation d'un système de sécurité

Pour faciliter le suivi des fichiers, j'ai créé un script : `commit-msg` auquel il ne faut en aucun cas toucher

Règles à respecter :
- Documenter une entrée du fichier `COMMIT_LOG.md` en utilisant la syntaxe présente : 
- **Nom** : donner un nom à votre instance
- **Nature** : pour donner la nature du travail : Ajout, Modification, Suppression
- **Détails** : pour donner les détails sur le travail effectué, tâches accomplises et autre
- **Fichiers** : pour donner les fichiers qui ont été modifié

+ Exceptions :
Lorsqu'il n'y a eu qu'une petite correction de bug ou une série de petites corrections, le script peut être ignoré. Pour cela, il faut que :
- le nom du commit commence par **fix**
- la syntaxe de la commande a utilisé est la suivante :
```bash
git commit -m "fix: correction rapide" --no-verify
```

2. Fonctionnement du login

Je n'ai fais qu'un seul lien, juste le *login*, sans le ~~register~~ . Pour faciliter l'expérience utilisateur. Au lieu de faire un **register** quand l'utilsateur se connecte pour la 1ère fois où il devra entrer :
+ son nom
+ son prénom
+ son email
+ son mot de passe
ou se connecter avec Google, j'ai décidé de ne faire que login avec les champs
+ email
+ mot de passe
+ se connecter avec Google
de telle sorte que si dans la base de données il n'y a pas d'email de la sorte ça crée une nouvelle instance avec *son email*, *son mot de passe* et à partir de l'email ça récupère le *nom* et le *prénom*. Ou alors il passe par la connexion avec Google qui va faire le même processus et récupérer toutes les données sans trop demander à l'utilisateur

- Il faut un compte pour passer une commande mais il ne faut nécéssairement que tous les champs soient remplis
- Il faut que tous les champs soient remplis pour faire un feedback

3. Fonctionnement du système de commande

- Dans la page [`/personnalisation`](https://kroma-agence.vercel.app/personnalisation) l'utilisateur va pouvoir sélectionner les différents services dont il a besoin et quand il va cliquer sur le bouton *Envoyer le projet*, le projet sera envoyé par mail et envoyé dans le système au niveau des notifications du dashboard là où elle pourra être validée ou rejetée
- Dans la page [`/tarification`](https://kroma-agence.vercel.app/tarification) où il y aura les différents packs, l'utilisateur pourra envoyer sa commande par mail

4. Système d'abonnement aux *newsletter*

- L'utilisateur pourra s'ajouter à la liste des personnes qui veulent des informations sur le domaine de Kroma ou sur les activités de Kroma