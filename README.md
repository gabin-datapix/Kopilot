# Site Kopilot — refonte

Site statique. Aucun build, aucune dépendance npm : ouvrir `index.html` suffit.

## Pages

| Fichier | Page |
| --- | --- |
| `Accueil.dc.html` | Accueil |
| `Fonctionnalites.dc.html` | Fonctionnalités |
| `Fonctionnalite-Adhesions.dc.html` | Détail — Gestion des adhésions |
| `Fonctionnalite-Application.dc.html` | Détail — Application membres |
| `Fonctionnalite-SitePublic.dc.html` | Détail — Site public |
| `Tarifs.dc.html` | Tarifs (configurateur) |
| `Clients.dc.html` | Ils utilisent Kopilot |
| `Equipe.dc.html` | Équipe |
| `LaFabrik.dc.html` | La Fabrik |
| `FabrikArticles.dc.html` | La Fabrik — articles |
| `FabrikAPropos.dc.html` | La Fabrik — à propos |
| `MentionsLegales.dc.html` | Mentions légales |
| `Mobile.dc.html` | Aperçu mobile |
| `AppMembres.dc.html` | Prototype application membres |

## Fichiers partagés

- `i18n.js` — bascule FR / EN, dictionnaire complet
- `support.js` — runtime des pages
- `deck-stage.js` — moteur de présentation
- `carte-clubs.html` — carte des implantations, chargée en iframe depuis l'accueil
- `assets/` — logos réseaux, portraits équipe, captures produit, photographies
- `_ds/` — design system Kopilot : tokens de couleur, typographie, espacement, composants

## Points ouverts

- Photographies d'ambiance : rendus de référence générés, à remplacer par un reportage réel avant mise en ligne.
- Captures produit : environnement de démonstration, données non réelles.
- Contenus réseaux clients : le bloc « Quatre réseaux en détail » est retiré en attendant validation écrite.
- Mentions légales : SIREN, hébergeur et coordonnées à compléter.
