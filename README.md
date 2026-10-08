# eval-git
Evaluation git/github (ESGI NANTES) avec Lowan QUARTON, Ayman KHALIL et Pham Nhat Huy HUYNH.
# Projet : Site Association Étudiante

## Identification de l'équipe

| Pseudonyme GitHub | Nom | Prénom | Rôle |
|-------------------|-----|--------|------|
| @lowan-qrt | QUARTON | Lowan | Étudiant 1 |
| @khalilayman | KHALIL | Ayman | Étudiant 2 |
| @phamnhathuyhuynh-collab | HUYNH | Huy | Étudiant 3 |

##  Présentation du projet
Projet réalisé dans le cadre d'une évaluation sur **Git & GitHub** et le **travail collaboratif**.

L'objectif est de créer un site web pour une **association étudiante** permettant de :
- Présenter l'association
- Consulter les événements à venir
- S'inscrire en ligne

## Fonctionnalités
- A : Présentation et navigation
- B : Catalogue d'événements
- C : Formulaire d'inscription

##  Workflow Git Flow
- `main` : versions stables
- `develop` : développement en cours
- `feature/*` : nouvelles fonctionnalités
- `bugfix/*` : corrections
- `release/*` : préparation de release
- `hotfix/*` : corrections urgentes de production

## Conflit Git rencontré
Nous avons rencontré beaucoup de soucis de conflits sur les merges car nous n'avons pas vraiment compris le processus de pull (à quel moment pull). Le temps nous a parut beaucoup trop court : nous avons perdu du temps sur la compréhension du besoin du client et l'organisation, ainsi que la mise en place a été très compliquée.

## Versions publiées
- v1.0
- v1.0.1

## Questions de synthèse
Huy : 

1. Quel est l’intérêt de séparer développements en cours et versions stables ?
Cela permet de continuer à travailler sur de nouvelles fonctionnalités sans risquer de casser ce qui fonctionne déjà. Les versions stables restent fiables pour les utilisateurs, tandis que les développements peuvent être testés et améliorés sans impact.

5. Pourquoi répercuter une correction de production dans les développements en cours ?
Pour éviter que le bug corrigé en production ne réapparaisse dans les prochaines versions. Cela garantit que tous les développements intègrent la correction.


Lowane :

2. Pourquoi imposer une revue de code avant intégration ?
Pour détecter les erreurs, améliorer la qualité du code, partager les connaissances au sein de l’équipe et éviter d’intégrer des bugs ou des mauvaises pratiques dans la branche principale.

4. Quelle différence entre correction classique et correction urgente de production ?
Une correction classique suit le cycle normal (développement, test, revue, intégration). Une correction urgente (hotfix) est faite directement sur la version en production pour corriger un problème critique, puis elle est répercutée dans les autres branches.

8. Comment retrouver l’origine d’une modification dans l’historique GitHub ?
On utilise git blame pour voir qui a modifié chaque ligne, ou on consulte l’historique des commits (git log) et les Pull Requests sur GitHub. On peut aussi utiliser la recherche dans les commits pour retrouver quand et pourquoi un changement a été fait.

Ayman : 

3. Quelles situations provoquent un conflit Git et pourquoi sa résolution n’est-elle pas toujours automatique ?
Un conflit survient quand deux personnes modifient les mêmes lignes d’un même fichier, ou quand une branche supprime un fichier que l’autre modifie. Git ne peut pas décider tout seul quelle version garder, car cela dépend du contexte et de l’intention des développeurs.

6. Quel est le rôle d’une branche de release ?
Elle sert à préparer une nouvelle version stable : on y finalise les tests, on corrige les derniers bugs, on fige le code, sans ajouter de nouvelles fonctionnalités. Elle permet de stabiliser avant la mise en production.

7. Comment GitHub Projects et les Issues facilitent-ils organisation et traçabilité ?
Les Issues permettent de décrire les tâches, bugs ou idées, de les assigner et de suivre leur avancement. GitHub Projects offre un tableau visuel (Kanban) pour organiser ces Issues par colonnes (à faire, en cours, terminé). Cela rend le travail d’équipe plus clair et traçable.


Résumé :

Huy → questions 1, 5

Lowane → questions 2, 4, 8

Ayman → questions 3, 6, 7


Difficultés rencontrées :
Branche `main` protégée
Lors du premier push, GitHub a rejeté notre commit avec l'erreur `GH006: Protected branch update failed`.
Branche `develop` manquante en local
La gestion des branches en remote/local était compliquée à gérer.
Erreur `pathspec 'develop' did not match`. Résolu avec `git fetch origin` puis `git checkout develop`. Complications eu avec git fetch car nouvelle fonctionnalité.
Mauvais emplacement des fichiers
Le catalogue d'événements a d'abord été codé dans `index.html` au lieu de `events.html`.
Nous avons déplacé le contenu et restauré `index.html` avec `git checkout index.html`.
Responsive mobile
Les cartes d'événements débordaient de l'écran sur mobile.
On a décidé de faire une refonte du site après une longue démarche de compréhension.
