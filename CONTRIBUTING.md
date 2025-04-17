# Git - Règles et bonnes pratiques

## Nommage des branches

Format général : `type/nom-court`

| Type       | Description                                 | Exemple                         |
|------------|---------------------------------------------|---------------------------------|
| `feature`  | Nouvelle fonctionnalité                     | `feature/login-screen`          |
| `fix`      | Correction de bug                           | `fix/crash-on-signup`           |
| `hotfix`   | Correction urgente                          | `hotfix/api-token-expired`      |
| `refactor` | Amélioration de code sans nouvelle feature  | `refactor/navbar-component`     |
| `chore`    | Tâches diverses (config, MAJ dépendances)   | `chore/update-dependencies`     |
| `docs`     | Documentation uniquement                    | `docs/update-readme`            |

---

## Commits clairs et concis

Format recommandé :

- type: message clair au présent

Exemples :
- `feat: add group creation screen`
- `fix: prevent crash when loading events`
- `refactor: cleanup navigation logic`
- `docs: update git.md with branch examples`
- `chore: install react-navigation`

> Utiliser l’infinitif ou présent impératif (pas de majuscules ni de point final)

---

## Workflow recommandé

**Créer une branche** depuis `main-dev` :
```bash
git checkout -b feature/ma-feature
```

## Utilisation des tags Git

On ajoute un tag Git après chaque mise en production pour versionner proprement.

Format recommandé : vX.Y.Z (Semantic Versioning)

	•	X = version majeure
	•	Y = version mineure
	•	Z = patch / bugfix

**Créer un tag**
```bash
git tag -a v1.0.0 -m "First production release"
git push origin v1.0.0
```

Exemples :

| Version        | Signification                      |
|----------------|------------------------------------|
| `v1.0.0`       | Première version stable            |
| `v1.1.0`       | Ajout de nouvelles fonctionnalités |
| `v1.1.1`       | Correctif mineur (bugfix)          |
