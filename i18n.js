/* Kopilot — bascule FR / EN.
   Dictionnaire unique partagé par toutes les pages. Le remplacement se fait sur
   les nœuds de texte du DOM, donc il couvre aussi bien le texte des templates
   que celui produit par la logique. Un MutationObserver réapplique la langue
   après chaque re-rendu React. */
(function () {
  var DICT = {
    // — Navigation, pied de page, appels à l'action —
    "Fonctionnalités": "Features",
    "Tarifs": "Pricing",
    "Ils utilisent Kopilot": "Customers",
    "Équipe": "Team",
    "La Fabrik": "La Fabrik",
    "Se connecter": "Log in",
    "Réserver une démo": "Book a demo",
    "Découvrir la plateforme": "Explore the platform",
    "Voir toutes les fonctionnalités": "See all features",
    "Tout voir en détail": "See everything in detail",
    "Voir le détail et le tarif": "See the details and price",
    "Composer la configuration complète": "Build the full configuration",
    "Rencontrer l’équipe": "Meet the team",
    "Voir les réseaux équipés": "See the networks using Kopilot",
    "Lire les cas clients": "Read customer stories",
    "Tous les articles": "All articles",
    "Naviguer dans l’application": "Explore the app",
    "Nous contacter": "Contact us",
    "Mentions légales": "Legal notice",
    "À propos": "About",
    "Produit": "Product",
    "Kopilot": "Kopilot",
    "Application membres": "Member app",
    "© 2026 Kopilot": "© 2026 Kopilot",
    "Plateforme, accompagnement, réseau": "Platform, support, network",
    "L’écosystème des réseaux d’entreprises : plateforme, accompagnement, réseau.": "The ecosystem for business networks: platform, support, network.",
    "Explorer le module Site public": "Explore the public website module",
    // — Accroche —
    "Kopilot, le copilote": "Kopilot, the copilot",
    "des réseaux d’entreprises.": "for business networks.",
    "Adhésions, événements, paiements, communication, application des membres. Une plateforme unique, une équipe qui vous accompagne, et un bureau qui retrouve du temps.": "Memberships, events, payments, communications and your members' app. One platform, a team that supports you, and a board that gets its time back.",
    "Un référent dédié": "A dedicated contact",
    "Un écosystème d’outils": "Human support",
    "Accompagnement humain": "Human support",
    "Reprise de vos données": "We migrate your data",
    "Ils nous font déjà confiance": "Already working with us",
    "réseaux équipés": "networks on board",
    "membres": "members",
    // — Le constat —
    "Le constat": "The problem",
    "Ceux qui gèrent le réseau": "The people running the network",
    "passent d’un outil à l’autre toute la journée.": "switch from one tool to the next all day long.",
    "Des échéances qui passent, des relances qui s’accumulent, un fichier de membres que personne n’ose ouvrir. Le bureau administre au lieu d’animer.": "Deadlines slip by, reminders pile up, and nobody dares open the membership file. The board administrates instead of leading.",
    "Excel": "Excel",
    "Le fichier des membres, dans trois versions différentes.": "The membership file, in three different versions.",
    "Boîte mail": "Inbox",
    "Les invitations, les rappels, les relances de cotisation.": "Invitations, reminders, membership fee chasing.",
    "Billetterie": "Ticketing",
    "Les inscriptions aux événements, hors du fichier membres.": "Event sign-ups, kept outside the membership file.",
    "Virements": "Bank transfers",
    "Les règlements, pointés à la main par le trésorier.": "Payments, reconciled by hand by the treasurer.",
    "Un seul endroit": "One single place",
    "Les membres, l’argent, les événements et la communication dans le même outil — et vos membres dans l’application.": "Members, money, events and communications in one tool — and your members in the app.",
    // — Mission —
    "Notre mission": "Our mission",
    "Faire rayonner": "Putting business networks",
    "les réseaux d’entreprises.": "in the spotlight.",
    "Les réseaux d’entreprises font vivre l’économie de leur territoire. Nous leur donnons la plateforme et l’accompagnement pour tenir ce rôle, et rendre visible ce qu’ils produisent.": "Business networks drive local growth. Kopilot is their copilot: a platform, human support and a network that move forward together.",
    "Vos membres": "Your members",
    "Mis en lumière : leur entreprise, leur expertise, ce qu’ils cherchent.": "In the spotlight: their company, their expertise, what they are looking for.",
    "Vos actions": "Your work",
    "Visibles au-delà du réseau : événements, actualités, prises de position.": "Visible beyond the network: events, news, public positions.",
    "Votre impact": "Your impact",
    "Mesuré et raconté : ce que le collectif produit sur son territoire.": "Measured and told: what the collective achieves in its region.",
    "15 réseaux, 800 membres, autant de territoires où le réseau se voit.": "15 networks, 800 members, and as many regions where the network shows.",
    // — Section épinglée —
    "Ce que fait la plateforme": "What the platform does",
    "Trois métiers, une seule plateforme.": "Three jobs, one platform.",
    "Tout est centralisé.": "Everything in one place.",
    "Adhésions et cotisations": "Memberships and fees",
    "Chaque membre, chaque échéance, chaque règlement au même endroit. Les relances partent sans que personne n’y pense.": "Every member, every due date, every payment in one place. Reminders go out without anyone thinking about it.",
    "Gestion des adhésions": "Membership management",
    "Annuaire des membres": "Member directory",
    "Contacts actifs, entreprises, fonctions au bureau. Le fichier que tout le monde ose enfin ouvrir.": "Active contacts, companies, board roles. The file everyone finally dares to open.",
    "Contacts — membres": "Contacts — members",
    "Événements": "Events",
    "De l’invitation au pointage, avec le budget de l’événement suivi jusqu’à son bilan.": "From invitation to check-in, with the event budget tracked through to its final report.",
    "Fiche événement — présence": "Event record — finances",
    "Actualités et newsletter": "News and newsletter",
    "Une actualité écrite une fois part dans l’application, dans la newsletter et sur le site public.": "A news item written once goes out in the app, in the newsletter and on the public website.",
    "Finances": "Finances",
    "Finances — tableau de bord": "Finances — dashboard",
    "Solde consolidé, mouvements du mois, comptes bancaires rapprochés. Le trésorier arrête le tableur.": "Consolidated balance, monthly transactions, reconciled bank accounts. The treasurer drops the spreadsheet.",
    // — Écran cockpit —
    "Cockpit — Club Horizon Entreprises": "Cockpit — Club Horizon Entreprises",
    "Cockpit": "Cockpit",
    "Rechercher…": "Search…",
    "Accueil": "Home",
    "Gestion": "Management",
    "Contacts": "Contacts",
    "Groupes": "Groups",
    "Organisations": "Organisations",
    "Communication": "Communications",
    "Paramètres": "Settings",
    "Animatrice": "Network manager",
    "Gérez les contacts de votre réseau.": "Manage your network's contacts.",
    "Membres": "Members",
    "Tous les membres du réseau": "All network members",
    "Membres, partenaires et anciens.": "Members, partners and alumni.",
    "+ Nouveau contact": "+ New contact",
    "Contacts actifs": "Active contacts",
    "Partenaires": "Partners",
    "Contacts inactifs": "Inactive contacts",
    "Anciens membres": "Alumni",
    "Administratifs": "Administrative",
    "Administrateurs": "Administrators",
    "Référents": "Account leads",
    "Référent": "Lead",
    "Rechercher un membre": "Search for a member",
    "Filtres avancés": "Advanced filters",
    "Fonctions": "Roles",
    "Domaines d’expertise": "Areas of expertise",
    "Nom": "Name",
    "Club": "Network",
    "Entreprise": "Company",
    "Formule": "Plan",
    "Montant": "Amount",
    "Statut": "Status",
    "Poste": "Line item",
    "Devis": "Quote",
    "Date": "Date",
    "Description": "Description",
    "Directrice générale": "Managing director",
    "Direction & gouvernance": "Leadership & governance",
    "Fondateur, architecte": "Founder, architect",
    "Présidente, fondatrice": "President, founder",
    "Directeur — Atelier Marchand": "Director — Atelier Marchand",
    "Networking, synergies et opportunités pour dirigeants.": "Networking, synergies and opportunities for business leaders.",
    "Networking, synergies et opportunités pour dirigeants et entrepreneurs.": "Networking, synergies and opportunities for leaders and entrepreneurs.",
    "Prochain événement": "Next event",
    "Voir": "View",
    "À VENIR": "UPCOMING",
    "Soirée de début d’année": "New year evening",
    "mercredi 23 septembre 2026": "Wednesday 23 September 2026",
    "Venez participer à notre soirée festive…": "Join us for our celebration evening…",
    "Actualités": "News",
    // — Adhésions (écran) —
    "Adhésions": "Memberships",
    "Saison 2025-2026": "2025-2026 season",
    "+ Nouvelle adhésion": "+ New membership",
    "Reste à encaisser": "Still to collect",
    "14 adhésions en attente": "14 memberships pending",
    "Encaissé": "Collected",
    "31 adhésions réglées": "31 memberships paid",
    "Portefeuille actif": "Active portfolio",
    "45 adhésions · rétention 83 %": "45 memberships · 83 % retention",
    "Toutes · 45": "All · 45",
    "À relancer · 14": "To chase · 14",
    "Réglées · 31": "Paid · 31",
    "Clôturées · 4": "Closed · 4",
    "Entreprise 20-49": "Company 20-49",
    "Entreprise 50+": "Company 50+",
    "Artisan < 10": "Sole trader < 10",
    "Réglée": "Paid",
    "Relance 2": "Reminder 2",
    "À diffuser": "To send",
    "Prochaine relance programmée dans 6 jours · 14 destinataires · par email": "Next reminder scheduled in 6 days · 14 recipients · by email",
    // — Agenda et événement —
    "Agenda": "Calendar",
    "Visite du chantier Pôle Santé": "Pôle Santé site visit",
    "mer. 22 avril 2026 · 48 inscrits": "Wed 22 April 2026 · 48 registered",
    "Modifier": "Edit",
    "Infos": "Details",
    "Invitation": "Invitation",
    "Invités": "Guests",
    "Présence": "Attendance",
    "Sondages": "Polls",
    "Suivi financier": "Financial tracking",
    "Factures en cours de saisie": "Invoices being entered",
    "Budget en préparation": "Budget in preparation",
    "Terminé": "Done",
    "Budget validé": "Budget approved",
    "Suivi du réalisé": "Actuals tracking",
    "En cours": "In progress",
    "Bilan clôturé": "Final report closed",
    "À venir": "Upcoming",
    "Dépenses prévues": "Planned costs",
    "TTC · 6 postes": "incl. VAT · 6 line items",
    "Recettes prévues": "Planned income",
    "4 sources de financement": "4 funding sources",
    "Résultat prévisionnel": "Forecast result",
    "Budget déficitaire": "Budget in deficit",
    "Coût / participant": "Cost / attendee",
    "124 € de recette": "€124 of income",
    "HT": "excl. VAT",
    "TVA": "VAT",
    "Traiteur & cocktail": "Catering & drinks",
    "Restauration": "Catering",
    "Autocar 50 places": "50-seat coach",
    "Transport": "Transport",
    "Validé": "Approved",
    "En attente": "Pending",
    // — Actualité (écran) —
    "Nouvelle actualité": "New news item",
    "Écrite une fois, diffusée sur les trois canaux du réseau.": "Written once, published on all three network channels.",
    "Publier": "Publish",
    "Titre": "Title",
    "Trois nouvelles entreprises rejoignent le réseau": "Three new companies join the network",
    "Contenu": "Content",
    "Elles ont été accueillies lors de la soirée de rentrée : un cabinet d’architecture, une entreprise de logistique et un studio de production. Leurs fiches sont déjà en ligne dans l’annuaire.": "They were welcomed at the season opening evening: an architecture practice, a logistics company and a production studio. Their profiles are already live in the directory.",
    "Visuel": "Image",
    "Diffusion": "Distribution",
    "Application": "App",
    "Notification aux 52 membres": "Notification to 52 members",
    "Site public": "Public website",
    "Page Actualités du site": "News page of the website",
    "Newsletter": "Newsletter",
    "Prochain envoi : 5 mai": "Next send: 5 May",
    "Dernières publications": "Latest posts",
    "Retour sur la visite du site Biokas": "Recap of the Biokas site visit",
    "Publiée": "Published",
    "41 lectures": "41 reads",
    "Assemblée générale : convocation": "General meeting: notice",
    "50 lectures": "50 reads",
    // — Finances (écran) —
    "Finances — Tableau de bord": "Finances — Dashboard",
    "Visualisez la situation financière consolidée du réseau.": "See the network's consolidated financial position.",
    "Solde global": "Total balance",
    "Total consolidé des comptes connectés": "Consolidated total of connected accounts",
    "Crédits (avril)": "Credits (April)",
    "Reçus sur les 30 derniers jours": "Received over the last 30 days",
    "Débits (avril)": "Debits (April)",
    "Versés sur les 30 derniers jours": "Paid out over the last 30 days",
    "Comptes synchronisés": "Synced accounts",
    "Comptes bancaires Bridge actifs": "Active Bridge bank accounts",
    "Derniers mouvements": "Latest transactions",
    "Historique consolidé des comptes synchronisés.": "Consolidated history of synced accounts.",
    "Crédits →": "Credits →",
    "Débits →": "Debits →",
    "21 avr.": "21 Apr",
    "19 avr.": "19 Apr",
    "18 avr.": "18 Apr",
    "12 avr.": "12 Apr",
    "Adhésion entreprise — Thermalis": "Company membership — Thermalis",
    "crédit · rapproché": "credit · reconciled",
    "Subvention — Le Mans Métropole": "Grant — Le Mans Métropole",
    "Frais transport intervenant": "Speaker travel costs",
    "débit · à catégoriser": "debit · to categorise",
    "Location de salle — soirée de rentrée": "Venue hire — season opening evening",
    "débit · rattaché à un événement": "debit · linked to an event",
    // — Application membres —
    "Et dans la poche des membres": "And in your members' pocket",
    "L’application que vos membres ouvrent vraiment.": "The app your members actually open.",
    "Les actualités du réseau, les prochains événements, l’annuaire des entreprises et leur carte de visite.": "Network news, upcoming events, the company directory and their business card.",
    "Voir tout": "See all",
    "Trois nouveaux adhérents": "Three new members",
    "Publié hier": "Posted yesterday",
    "Actus": "News",
    "Entreprises": "Companies",
    "À venir · J-37 jours": "Upcoming · in 37 days",
    "Soirée Padel": "Padel evening",
    "Présentiel": "In person",
    "Afterwork": "Afterwork",
    "Je participe": "I'm attending",
    "Peut-être": "Maybe",
    "Sondage du bureau": "Board poll",
    "Quel format pour les afterworks ?": "What format for afterworks?",
    "Petit-déjeuner": "Breakfast",
    "Fin de journée": "End of day",
    "41 réponses sur 58 membres": "41 replies out of 58 members",
    "Ma carte": "My card",
    // — Clients (bloc accueil) —
    "Ils ont choisi Kopilot pour structurer leur réseau.": "15 networks, 800 members, one shared need for structure.",
    "Des réseaux de 40 membres aux réseaux de plusieurs centaines, en ville comme sur un territoire rural.": "From 40-member networks to networks of several hundred, in cities and rural areas alike.",
    // — Configurateur —
    "Votre configuration": "Your configuration",
    "Un tarif": "Pricing",
    "à la taille de votre réseau.": "that fits your network.",
    "Dès 700 € HT par an, socle complet inclus. Vous n’ajoutez que les modules dont vous avez besoin.": "From €700 excl. VAT per year, full core included. You only add the modules you need.",
    "Combien de membres ?": "How many members?",
    "Ce dont votre réseau a besoin": "What your network needs",
    "Encaisser en ligne": "Collect payments online",
    "Suivre la trésorerie": "Track the cash position",
    "Votre configuration type": "Your typical configuration",
    "Grand réseau": "Large network",
    "Réseau en création": "Network getting started",
    "Réseau installé": "Established network",
    "Réseau structuré": "Structured network",
    "Configuration sur mesure": "Custom configuration",
    "Paiements en ligne": "Online payments",
    "Banque connectée": "Connected banking",
    "Site internet public": "Public website",
    "Au-delà de 400 membres, nous construisons la configuration avec vous : antennes, rôles, reprise de données.": "Above 400 members we build the configuration with you: branches, roles, data migration.",
    "Modules retenus :": "Modules selected:",
    "Aucun module ajouté pour l’instant.": "No modules added yet.",
    "Le socle couvre les membres, les adhésions, les événements et l’application.": "The core covers members, memberships, events and the app.",
    "Vous y ajoutez :": "You add:",
    "Sans module ajouté, c’est déjà tout ce qui précède.": "With no modules added, that is already everything above.",
    "Socle Kopilot —": "Kopilot core —",
    // — Équipe —
    "L’équipe": "The team",
    "L’expérience du terrain,": "Field experience,",
    "les compétences d’aujourd’hui.": "today’s skills.",
    "Nous connaissons le quotidien d’un responsable de réseau : les relances, les échéances, l’animation à tenir. Notre équipe est IA-native : ce que vous demandez arrive en semaines, pas en années.": "We know what running a network involves day to day: the follow-ups, the deadlines, the engagement to keep up. Our team is AI-native: what you ask for ships in weeks, not years.",
    "Fondateur": "Founder",
    "Lead développeur": "Lead developer",
    "Développeur": "Developer",
    "Accompagnement": "Customer success",
    "Communication et marketing": "Communications and marketing",
    "Accompagnement des réseaux": "Network support",
    // — La Fabrik —
    "Ce que nous apprenons des réseaux, écrit noir sur blanc.": "What we learn from networks, written down.",
    "À la une — Analyse": "Featured — Analysis",
    "8 min": "8 min",
    "7 min": "7 min",
    "6 min": "6 min",
    "5 min": "5 min",
    "4 min": "4 min",
    "Ce qui fait revenir un membre la deuxième année.": "What brings a member back for a second year.",
    "Le renouvellement ne se joue pas au moment de la relance, mais sur ce que le membre a vécu dans l’année.": "Renewal isn't decided when the reminder goes out, but by what the member experienced during the year.",
    "Tutoriel — 7 min": "Tutorial — 7 min",
    "Préparer son assemblée générale dans Kopilot": "Preparing your general meeting in Kopilot",
    "Analyse — 6 min": "Analysis — 6 min",
    "Combien coûte vraiment la gestion d’un réseau sur tableur": "What running a network on spreadsheets really costs",
    "Produit — 5 min": "Product — 5 min",
    "Relances d’adhésion : ce qui se déclenche automatiquement": "Membership reminders: what fires automatically",
    "Analyse": "Analysis",
    "Tutoriel": "Tutorial",
    "Témoignage": "Testimonial",
    // — Intégrations —
    "Intégrations": "Integrations",
    "Vous gardez HelloAsso ou Stripe.": "Keep HelloAsso or Stripe.",
    "Kopilot fait le reste.": "Kopilot does the rest.",
    "Trois intégrations natives, activables depuis le cockpit. Le rapprochement bancaire passe par Bridge, l’encaissement en ligne par HelloAsso ou Stripe, selon ce que le réseau utilise déjà.": "Kopilot never holds your funds. Bank reconciliation runs through Bridge, and online collection through HelloAsso or Stripe, depending on what the network already uses.",
    "Rapprochement bancaire": "Bank reconciliation",
    "Vos comptes bancaires connectés en lecture : chaque virement se rapproche de l’adhésion qui l’attend, sans pointage manuel.": "Your bank accounts connected read-only: every transfer is matched to the membership waiting for it, with no manual reconciliation.",
    "Encaissement en ligne": "Online collection",
    "Au choix du réseau, l’un ou l’autre": "The network's choice, one or the other",
    "Le réseau branche le compte qu’il utilise déjà. Les règlements remontent au même endroit.": "The network connects the account it already uses. Payments land in the same place.",
    "La collecte associative que beaucoup de réseaux utilisent déjà : adhésions et billets encaissés côté HelloAsso, visibles dans Kopilot.": "The nonprofit collection platform many networks already use: memberships and tickets collected on HelloAsso, visible in Kopilot.",
    "ou": "or",
    "Le paiement par carte directement sur le compte du réseau, avec reçus et relances automatiques.": "Card payments straight into the network's account, with automatic receipts and reminders.",
    // — Bloc final et formulaire —
    "Trente minutes pour voir votre réseau dans Kopilot.": "Thirty minutes to see your network inside Kopilot.",
    "Nous préparons la démonstration sur le fonctionnement réel de votre réseau : effectif, événements, cotisations.": "We prepare the demo around how your network actually works: headcount, events, membership fees. Answer within 24 working hours.",
    "Démonstration": "Demo",
    "Réservez votre démonstration.": "Book your demo.",
    "Trente minutes, en visio, sur le fonctionnement de votre réseau.": "Thirty minutes, by video call, about how your network works.",
    "Envoyer la demande": "Send request",
    "Demande enregistrée": "Request received",
    "Votre demande est bien enregistrée.": "Your request has been received.",
    "Un membre de l’équipe prépare la démonstration sur la base du fonctionnement de votre réseau.": "A member of the team will prepare the demo based on how your network works.",
    "Fermer": "Close",
    "« L’installation de Kopilot a grandement aidé à développer cette animation. »": "“Installing Kopilot has helped a great deal in developing that engagement.”",
    "« C’est d’abord un enjeu de développement, pour pérenniser le réseau. J’espère que demain on pourra accueillir de nouveaux membres grâce à Kopilot. »": "“It's first of all a growth issue, about making the network last. I hope that tomorrow we'll be able to welcome new members thanks to Kopilot.”",
    "« Quand c’est sur l’appli, les gens font l’effort de regarder. »": "“When it's in the app, people make the effort to look.”",
    "« Ça fait un mois que nous sommes sur Kopilot et c’est déjà devenu un outil indispensable pour animer le réseau. Nos membres avaient l’habitude d’une application. »": "“We've been on Kopilot for a month and it has already become essential to running the network. Our members were used to having an app.”",
    "« On est passé à Kopilot pour la gestion des adhésions, et la migration est positive sur ce point. »": "“We moved to Kopilot for membership management, and on that front the migration is a positive.”",
    "« Après dix ans sur un autre outil, ce qui pourrait être amélioré, ce sont les passerelles entre l’outil et les réseaux sociaux. »": "“After ten years on another tool, what could be improved are the bridges between the tool and social media.”",
    "« On faisait tout par mail. C’est le côté automatisé que nous recherchions. »": "“We used to do everything by email. The automated side is what we were after.”",
    "« Trente événements par an, quatre-vingts membres : nous avions réellement besoin d’un annuaire en ligne des entreprises et des membres. »": "“Thirty events a year, eighty members: we genuinely needed an online directory of companies and members.”",
    "Ce qu’ils en disent": "What they say",
    "Portraits et attributions à faire valider par chaque réseau avant publication.": "Portraits and attributions to be approved by each network before publication.",
    "Au-delà de 400 membres": "Above 400 members",
    "Grand réseau ou fédération": "Large network or federation",
    "Parler à un conseiller": "Talk to an advisor",
    "Configuration : sur devis, ": "Configuration: on request, ",
    "Année 1 : ": "Year 1: ",
    "Effectif à confirmer": "Headcount to be confirmed",
    "Année à confirmer": "Year to be confirmed",
    "À confirmer": "To be confirmed",
    "Emplacement — ce qui prenait du temps au bureau avant Kopilot, en une phrase validée par le réseau.": "Placeholder — what used to take the board's time before Kopilot, in one sentence approved by the network.",
    "Emplacement — ce que la plateforme a changé concrètement, en une phrase validée par le réseau.": "Placeholder — what the platform concretely changed, in one sentence approved by the network.",
    "Présence : absent": "Attendance: not coming",
    "Présence : présent": "Attendance: coming",
    "Statuts, règlements, comptes rendus. Consultables et téléchargeables.": "Bylaws, rules, minutes. Viewable and downloadable.",
    "Médiathèque": "Media library",
    "Les albums du réseau, avec favoris.": "The network's photo albums, with favourites.",
    "Les partenaires financiers du réseau, avec leur rôle expliqué.": "The network's financial partners, with their role explained.",
    "Groupes et commissions": "Groups and committees",
    "Qui siège où, et combien ils sont.": "Who sits where, and how many they are.",
    "FAQ du réseau": "Network FAQ",
    "Les questions des membres, rangées par sujet.": "Members' questions, sorted by topic.",
    "Ressources vidéo": "Video resources",
    "Les liens utiles proposés par le réseau.": "Useful links shared by the network.",
    "Présentation du réseau": "About the network",
    "Le discours de référence, écrit une fois dans le cockpit.": "The reference pitch, written once in the cockpit.",
    "Présence confirmée": "Attendance confirmed",
    "Présent": "Present",
    "Cotisations encaissées": "Membership fees collected",
    "Dépenses du mois": "This month's spending",
    "Deux comptes bancaires synchronisés · dernier rapprochement il y a 2 h": "Two bank accounts synced · last reconciliation 2 h ago",
    "Exporter": "Export",
    "Un événement, de l’invitation au bilan.": "An event, from invitation to final report.",
    "Un événement suit toujours les mêmes étapes. Vous savez à tout moment où il en est, qui vient, et ce qu’il a coûté.": "An event always follows the same steps. At any moment you know where it stands, who is coming and what it cost.",
    "La trésorerie du réseau, sans tableur.": "The network’s cash position, without a spreadsheet.",
    "Les encaissements arrivent sur le compte du réseau et se rapprochent des mouvements bancaires. Le trésorier lit sa situation au lieu de la reconstruire.": "Payments land in the network’s account and are matched against bank transactions. The treasurer reads the position instead of rebuilding it.",
    "sur 39 disponibles": "of 39 available",
    "Piloter les adhésions": "Manage memberships",
    "Relancer les cotisations": "Chase membership fees",
    "Organiser les événements": "Run events",
    "Animer la communauté": "Engage the community",
    "Publier un site public": "Publish a public website",
    "Prénom et nom": "First and last name",
    "Email": "Email",
    "Nom du réseau": "Network name",
    "Téléphone": "Phone",
    "Club des entrepreneurs": "Entrepreneurs' network",
    "Nos tarifs,": "Our pricing,",
    "selon votre nombre de membres.": "based on how many members you have.",
    
    "Le socle couvre ce dont un bureau a besoin toute l’année. Les modules et l’accompagnement s’ajoutent seulement s’ils vous servent. Composez votre configuration ci-dessous.": "The core covers what a board needs all year. Modules and support are added only if they serve you. Build your configuration below.",
    "La plateforme,": "The platform,",
    "écran par écran.": "screen by screen.",
    "Trois blocs portent la plateforme : la gestion des adhésions, l’application membres, le site public. Tout le reste s’y branche, sur les mêmes données.": "Three blocks carry the platform: membership management, the member app, the public site. Everything else plugs into them, on the same data.",
    "Le réseau dans la poche de ses membres.": "The network in its members' pockets.",
    "Le reste de la plateforme": "The rest of the platform",
    "Des fonctions que votre bureau utilisera chaque semaine, sans qu’il faille un écran pour les expliquer.": "Features your board will use every week, without needing a screen to explain them.",
    "Étape 1": "Step 1",
    "Étape 2": "Step 2",
    "Étape 3": "Step 3",
    "Votre socle Kopilot": "Your Kopilot core",
    "Le socle est calculé par tranches de 25 membres, sur le nombre de membres payant une adhésion au moment de la souscription. La tranche n’évolue qu’au renouvellement annuel.": "The core is priced in bands of 25 members, based on the number of fee-paying members at the time of signing. The band only changes at annual renewal.",
    "Membres actifs": "Active members",
    "400 et plus": "400 and above",
    "Au-delà de 400 membres, le socle est établi sur devis. Fédérations et réseaux multi-antennes compris.": "Above 400 members the core is quoted individually. Federations and multi-branch networks included.",
    "Le socle fonctionne pleinement sans aucun module avancé.": "The core works fully without any advanced module.",
    "Vos modules avancés": "Your advanced modules",
    "Optionnels, activables à tout moment, facturés au prorata de la période en cours.": "Optional, switchable at any time, billed pro rata for the current period.",
    "Encaissement des adhésions et des événements, par Stripe Connect.": "Collection of memberships and event fees, via Stripe Connect.",
    "+ 100 € HT / an": "+ €100 excl. VAT / year",
    "+ 150 € HT / an": "+ €150 excl. VAT / year",
    "Vos comptes bancaires rapprochés dans Kopilot, par Bridge.": "Your bank accounts reconciled inside Kopilot, via Bridge.",
    "Le site du réseau, toujours synchronisé avec vos membres et vos événements.": "The network website, always in sync with your members and your events.",
    "Bientôt disponibles": "Coming soon",
    "E-Facturation": "E-invoicing",
    "Kopilot Développement": "Kopilot Development",
    "Kopilot Studio": "Kopilot Studio",
    "Votre mise en route": "Your onboarding",
    "Des packs ponctuels, hors abonnement, pour la phase de lancement. L’effort est concentré sur la première année.": "One-off packages, outside the subscription, for the launch phase. The effort is concentrated in the first year.",
    "Pack services": "Service package",
    "Start": "Start",
    "Launch": "Launch",
    "Signature": "Signature",
    "490 € HT": "€490 excl. VAT",
    "1 200 € HT": "€1,200 excl. VAT",
    "1 850 € HT": "€1,850 excl. VAT",
    "100 € HT / an": "€100 excl. VAT / year",
    "150 € HT / an": "€150 excl. VAT / year",
    "Paramétrages initiaux": "Initial setup",
    "Intégration de vos données": "Migration of your data",
    "Formation back-office, 2 × 1 h": "Back-office training, 2 × 1 h",
    "Référent dédié": "Dedicated contact",
    "Le plus choisi": "Most chosen",
    "Tout le pack Start": "Everything in Start",
    "Tout le pack Launch": "Everything in Launch",
    "Coordination du lancement": "Launch coordination",
    "Soirée de lancement membres": "Member launch evening",
    "Réunion conseil par trimestre": "Advisory meeting each quarter",
    "Assistance à la conception du site": "Support in designing the website",
    "Nous démarrons seuls, sans pack de services.": "We'll start on our own, without a service package.",
    "Socle Kopilot": "Kopilot core",
    "Coût mensuel par membre": "Monthly cost per member",
    "Abonnement et modules, hors services ponctuels.": "Subscription and modules, excluding one-off services.",
    "Année 1": "Year 1",
    "Années suivantes": "Following years",
    "Année 1 :": "Year 1:",
    "Sur devis": "On request",
    "Au-delà de 400 membres, nous construisons le budget avec vous : périmètre, antennes, volume d’événements, accompagnement.": "Above 400 members we build the budget with you: scope, branches, event volume, support.",
    "Télécharger le devis": "Download the quote",
    "Recevoir le devis": "Get the quote",
    "Tarifs hors taxes. Facturation annuelle. La tranche est révisée au renouvellement, avec tolérance en cours d’année.": "Prices excluding VAT. Billed annually. The band is reviewed at renewal, with tolerance during the year.",
    "Questions de budget": "Budget questions",
    "Ce que le bureau demande avant de voter.": "What the board asks before voting.",
    "Que se passe-t-il si nous dépassons notre tranche en cours d’année ?": "What happens if we exceed our band during the year?",
    "Rien. Une tolérance est admise pendant l’année en cours ; la tranche est ajustée au renouvellement annuel.": "Nothing. Tolerance applies for the current year; the band is adjusted at annual renewal.",
    "Qui encaisse les adhésions ?": "Who collects the membership fees?",
    "Votre réseau. Avec le module Paiements en ligne, les règlements arrivent sur votre compte via Stripe Connect ; Kopilot ne détient jamais vos fonds.": "Your network. With the Online payments module, payments land in your account via Stripe Connect; Kopilot never holds your funds.",
    "Peut-on activer un module en cours d’année ?": "Can a module be switched on mid-year?",
    "Oui, à tout moment. La facturation est annuelle, avec prorata temporis pour la période restante.": "Yes, at any time. Billing is annual, pro rata for the remaining period.",
    "Un pack de services est-il obligatoire ?": "Is a service package mandatory?",
    "Non. Les packs sont indépendants de l’abonnement. Ils répondent aux réseaux qui veulent un cadre renforcé au lancement ou en montée en puissance.": "No. Packages are independent of the subscription. They suit networks wanting a stronger framework at launch or while scaling up.",
    "Une démonstration sur le fonctionnement réel de votre réseau.": "A demo based on how your network actually works.",
    "Trente minutes, votre configuration sous les yeux.": "Thirty minutes, with your configuration in front of us.",
    "Réserver une démo avec cette configuration": "Book a demo with this configuration",
    "Recevez le devis de cette configuration.": "Get the quote for this configuration.",
    "Le devis reprend votre tranche, vos modules et votre pack de services, prêt à présenter à votre bureau.": "The quote sets out your band, your modules and your service package, ready to present to your board.",
    "Votre configuration est transmise avec la demande : nous préparons la démonstration sur cette base.": "Your configuration is sent with the request: we'll prepare the demo on that basis.",
    "Votre configuration est jointe à la demande. Vous recevez le récapitulatif par email dans quelques minutes.": "Your configuration is attached to the request. You'll receive the summary by email within minutes.",
    "Configuration : sur devis,": "Configuration: on request,",
    "membres.": "members.",
    "Ils ont choisi Kopilot.": "They chose Kopilot.",
    "Voici ce qu’ils en disent.": "Here's what they say.",
    "Des réseaux de toutes tailles nous ont fait confiance pour structurer leur gestion. Ils racontent ce qui a changé pour leur bureau.": "Networks of every size have trusted us to structure their operations. They tell us what changed for their board.",
    "Trois cas de réseau": "Three network cases",
    "Chaque fiche dit la même chose dans le même ordre : le réseau, ce qui bloquait, ce qui a changé.": "Each card says the same thing in the same order: the network, what was blocking, what changed.",
    "Cas 01 — réseau de territoire": "Case 01 — regional network",
    "Cas 02 — réseau structuré": "Case 02 — structured network",
    "Cas 03 — réseau multi-antennes": "Case 03 — multi-branch network",
    "Nom du réseau": "Network name",
    "Nom du réseau": "Network name",
    "Effectif — ville ou département": "Headcount — city or county",
    "Effectif — nombre d’antennes": "Headcount — number of branches",
    "Avant": "Before",
    "Ce qui prenait du temps au bureau, en une phrase.": "What was taking the board's time, in one sentence.",
    "Avec Kopilot": "With Kopilot",
    "Ce qui a changé, en une phrase.": "What changed, in one sentence.",
    "Résultat chiffré à vérifier": "Measured result to be confirmed",
    "Gabarits en attente : nom du réseau, contexte et chiffres arrivent une fois validés par écrit. Aucune donnée inventée n’est publiée.": "Templates pending: network name, context and figures will follow once approved in writing. No invented data is published.",
    "Emplacement citation — une à deux phrases, nommées et validées par le réseau.": "Quote placeholder — one or two sentences, named and approved by the network.",
    "Prénom Nom, président·e du Club — ville": "First Last, network president — city",
    "Deuxième témoignage": "Second testimonial",
    "Troisième témoignage": "Third testimonial",
    "Emplacement — animateur ou trésorier de réseau.": "Placeholder — network manager or treasurer.",
    "Emplacement — membre utilisateur de l’application.": "Placeholder — member using the app.",
    "Le prochain réseau, c’est peut-être le vôtre.": "The next network could be yours.",
    "Nous préparons la démonstration sur son fonctionnement réel : effectif, événements, cotisations.": "We prepare the demo around how it actually works: headcount, events, membership fees.",
    "Derrière la plateforme,": "Behind the platform,",
    "cinq personnes": "five people",
    "que vous aurez au téléphone.": "you'll have on the phone.",
    "Un référent suit votre réseau et connaît son fonctionnement. Personne ne vous laisse seul devant la plateforme.": "Kopilot isn't software you're left to install. A dedicated contact follows your network, knows how it runs and answers within 24 working hours.",
    "Fondateur — chief kopilot officer": "Founder — chief kopilot officer",
    "Il reçoit les réseaux, cadre les lancements et arbitre la feuille de route du produit.": "He meets the networks, frames the launches and sets the product roadmap.",
    "Il construit la plateforme et tient la barre technique, du cockpit à l’application membres.": "He builds the platform and holds the technical line, from the cockpit to the member app.",
    "Il livre les fonctions demandées par les réseaux, semaine après semaine.": "He ships the features networks ask for, week after week.",
    "Il fait connaître Kopilot et outille les réseaux pour communiquer sur ce qu’ils font.": "He gets Kopilot known and equips networks to talk about what they do.",
    "Elle structure la méthode d’accompagnement, du paramétrage initial à la montée en puissance.": "She structures the support method, from initial setup through to scaling up.",
    "Nous recrutons": "We're hiring",
    "L’équipe s’agrandit avec les réseaux qui nous rejoignent. Écrivez-nous.": "The team grows with the networks that join us. Write to us.",
    "Nous écrire": "Write to us",
    "Un réseau d’entreprises crée de la valeur pour ses membres. On lui donne les moyens de le faire rayonner.": "A business network creates value for its members. We give it the means to make that visible.",
    "Notre façon de travailler": "How we work",
    "Nous connaissons le calendrier d’un réseau : l’assemblée générale, la relance des cotisations, la rentrée. Nous travaillons dessus, pas à côté.": "We know a network's calendar: the general meeting, the fee chasing, the September restart. We work with it, not beside it.",
    "Un référent nommé": "A named contact",
    "Une personne qui connaît votre réseau, pas un numéro de ticket.": "A person who knows your network, not a ticket number.",
    "Un interlocuteur qui vous connaît": "A contact who knows you",
    "Ouvrées. Par téléphone quand c’est plus simple qu’un email.": "Working hours. By phone when that's simpler than an email.",
    "Vos demandes au produit": "Your requests reach the product",
    "Ce que plusieurs réseaux demandent finit dans la feuille de route.": "What several networks ask for ends up on the roadmap.",
    "Parlons du calendrier de votre réseau.": "Let's talk about your network's calendar.",
    "Trente minutes en visio, avec la personne qui suivra votre lancement.": "Thirty minutes by video call, with the person who will run your launch.",
    "par Kopilot": "by Kopilot",
    "La bibliothèque des réseaux d’entreprises.": "The business network library.",
    "Des articles pour aider les bureaux à trancher leurs questions concrètes et structurer leurs pratiques.": "Articles to help boards settle their concrete questions and structure how they work.",
    "Écrit pour": "Written for",
    "Les présidents, les bureaux et les animateurs de réseaux. Pas de jargon logiciel.": "Network presidents, boards and managers. No software jargon.",
    "Articles": "Articles",
    "Conseils et analyses pour votre réseau.": "Advice and analysis for your network.",
    "Tous": "All",
    "Toutes": "All",
    "Animation": "Engagement",
    "Organisation": "Organisation",
    "Stratégie": "Strategy",
    "Evolution": "Tooling",
    "À la une — Animation": "Featured — Engagement",
    "Article complet": "Full article",
    "Article à la une": "Featured article",
    "5 min de lecture": "5 min read",
    "Valoriser les membres d’un réseau d’entreprises : renforcer l’engagement et développer le réseau": "Showcasing the members of a business network: strengthening engagement and growing the network",
    "Comment mettre en lumière ce que font vos membres, et pourquoi cette visibilité fait revenir les adhérents l’année suivante.": "How to shine a light on what your members do, and why that visibility brings them back the following year.",
    "Lire l’article": "Read the article",
    "Aucun article dans cette catégorie pour l’instant.": "No articles in this category yet.",
    "Aucun article dans cette thématique pour l’instant.": "No articles on this topic yet.",
    "Les prochains articles arrivent au fil des retours de réseaux.": "New articles follow as networks share their experience.",
    "Voir tous les articles": "See all articles",
    "Tous les articles.": "All articles.",
    "À propos de La Fabrik.": "About La Fabrik.",
    "La Fabrik rassemble ce que nous apprenons au contact des réseaux : ce qui fonctionne, ce qui coince, et comment d’autres bureaux s’y sont pris.": "La Fabrik gathers what we learn working with networks: what works, what gets stuck, and how other boards handled it.",
    "La Fabrik, en deux mots.": "La Fabrik, in two words.",
    "Un réseau bien tenu se voit de l’extérieur.": "A well-run network shows from the outside.",
    "Trente minutes pour voir comment Kopilot s’installe dans votre année.": "Thirty minutes to see how Kopilot fits into your year.",
    "Thématique": "Topic",
    "Trier par": "Sort by",
    "Les plus récents": "Newest first",
    "Les plus anciens": "Oldest first",
    "Appliquer tout ça à votre réseau.": "Put all this to work in your network.",
    "Newsletter réseau d’entreprises : structurer ses échanges et renforcer l’engagement": "Business network newsletter: structuring communication and strengthening engagement",
    "Rythme, contenus et destinataires : structurer les échanges du réseau sans y passer ses soirées.": "Cadence, content and recipients: structuring network communication without losing your evenings.",
    "Communication LinkedIn d’un réseau d’entreprises : structurer sa présence et développer son réseau": "A business network on LinkedIn: structuring your presence and growing your network",
    "Contenus, engagement et stratégie pour développer votre réseau d’entrepreneurs.": "Content, engagement and strategy to grow your network of entrepreneurs.",
    "Promouvoir un réseau d’entreprises sur son territoire": "Promoting a business network in its region",
    "Communication locale, événements et stratégies pour attirer de nouveaux membres.": "Local communication, events and strategies to attract new members.",
    "Communication d’un réseau d’entreprise : structurer son réseau et développer son activité": "Business network communication: structuring the network and growing activity",
    "Stratégie, visibilité, événements et engagement des membres pour faire grandir le réseau.": "Strategy, visibility, events and member engagement to grow the network.",
    "Organiser les événements d’un réseau d’affaires": "Organising the events of a business network",
    "Des méthodes efficaces pour simplifier l’organisation et faire monter la participation.": "Practical methods to simplify organisation and lift attendance.",
    "Outils pour digitaliser la gestion d’un réseau": "Tools to digitise network management",
    "Comparez les outils pour digitaliser la gestion du réseau et simplifier les tâches quotidiennes.": "Compare the tools to digitise network management and simplify daily tasks.",
    "Gérer adhésions et cotisations d’un réseau efficacement": "Managing network memberships and fees effectively",
    "Optimisez la gestion des adhésions et des cotisations : gagner du temps, fidéliser les membres.": "Streamline memberships and fees: save time, keep members.",
    "Rôles et responsabilités du bureau d’une association ou réseau": "Roles and responsibilities of an association or network board",
    "Président, trésorier, secrétaire : leur place dans la gouvernance et les clés d’une organisation durable.": "President, treasurer, secretary: their place in governance and the keys to a lasting organisation.",
    "Gérer efficacement un réseau d’entreprises avec Kopilot": "Running a business network effectively with Kopilot",
    "Membres, événements, cotisations, communication : piloter le réseau depuis un seul endroit.": "Members, events, fees, communication: running the network from a single place.",
    "Pourquoi La Fabrik ?": "Why La Fabrik?",
    "Trois raisons de s’en servir.": "Three reasons to use it.",
    "Gagner du temps": "Save time",
    "Éviter de réinventer ce qui existe déjà et s’appuyer sur des méthodes éprouvées.": "Avoid reinventing what already exists and build on proven methods.",
    "Résoudre des problèmes réels": "Solve real problems",
    "Engagement des membres, animation, gouvernance, organisation : les sujets concrets du quotidien des réseaux.": "Member engagement, activities, governance, organisation: the day-to-day realities of network life.",
    "S’inspirer du terrain": "Learn from the field",
    "Retours d’expérience de réseaux, animateurs et dirigeants confrontés aux mêmes enjeux.": "First-hand accounts from networks, managers and leaders facing the same challenges.",
    "À qui s’adresse La Fabrik ?": "Who is La Fabrik for?",
    "Écrit pour ceux qui font tourner le réseau.": "Written for the people who keep the network running.",
    "Présidents et membres de bureaux de réseaux": "Network presidents and board members",
    "Animateurs et coordinateurs de réseaux": "Network managers and coordinators",
    "Équipes impliquées dans la vie associative ou business": "Teams involved in association or business life",
    "Réseaux d’affaires et structures fédératrices": "Business networks and umbrella organisations",
    "Comment utiliser La Fabrik": "How to use La Fabrik",
    "Trois étapes : choisir un format, trouver un sujet, passer à l’action.": "Three steps: pick a format, find a topic, take action.",
    "Choisir un format": "Pick a format",
    "Articles, interviews ou podcasts selon votre besoin et votre temps.": "Articles, interviews or podcasts depending on your need and your time.",
    "Trouver un sujet": "Find a topic",
    "Par thématique, problématique ou contenus mis en avant.": "By topic, by problem, or from the featured content.",
    "Passer à l’action": "Take action",
    "Appliquer une méthode, une idée ou un retour d’expérience à votre réseau.": "Apply a method, an idea or someone's experience to your network.",
    "Notre posture": "Where we stand",
    "La Fabrik est l’espace éditorial de Kopilot. Nous y mettons par écrit ce que nous apprenons au contact des réseaux, pour aider les bureaux à décider.": "La Fabrik is Kopilot's editorial space. It extends our field experience with resources to help networks understand, decide and structure how they work.",
    "Des contenus concrets et applicables": "Concrete, applicable content",
    "Une approche issue du terrain": "An approach grounded in the field",
    "Pas de jargon inutile": "No needless jargon",
    "Une indépendance éditoriale assumée": "Editorial independence, openly",
    "Commencer par un article.": "Start with an article.",
    "Neuf articles en ligne, classés par thématique.": "Nine articles online, sorted by topic.",
    "Mobile — 390 px": "Mobile — 390 px",
    "Le site en 390 px de large.": "The site at 390 px wide.",
    "Une colonne par page, à l’échelle réelle. Mêmes contenus que le bureau, hiérarchie resserrée : en-tête de 56 px, marges de 24 px, boutons de 48 px de haut, titres ramenés à 34 / 26 / 20 px. Le configurateur de tarifs est fonctionnel dans sa colonne.": "One column per page, at actual size. Same content as desktop with a tighter hierarchy: 56 px header, 24 px margins, 48 px buttons, headings scaled to 34 / 26 / 20 px. The pricing configurator is fully working in its column.",
    "01 — Accueil": "01 — Home",
    "02 — Fonctionnalités": "02 — Features",
    "03 — Tarifs (configurateur actif)": "03 — Pricing (live configurator)",
    "04 — La Fabrik": "04 — La Fabrik",
    "05 — États": "05 — States",
    "01 — Gérer": "01 — Manage",
    "02 — Animer": "02 — Engage",
    "03 — Rayonner": "03 — Grow",
    "04 — App": "04 — App",
    "Vos adhésions, vos événements, vos paiements.": "Your memberships, your events, your payments.",
    "Un seul endroit.": "One single place.",
    "Kopilot structure la gestion de votre réseau et donne à votre bureau le temps d’animer.": "Kopilot structures how your network is run and gives your board the time to lead it.",
    "Voir les tarifs": "See pricing",
    "15 réseaux équipés": "15 networks on board",
    "800 membres": "800 members",
    "Cockpit — gestion des adhésions": "Cockpit — membership management",
    "Le fichier des membres": "The membership file",
    "Invitations et relances": "Invitations and reminders",
    "Inscriptions aux événements": "Event sign-ups",
    "Cotisations": "Membership fees",
    "Résultat : des échéances qui passent et un bureau qui administre au lieu d’animer.": "The result: deadlines slip by and a board that administrates instead of leading.",
    "Gérer": "Manage",
    "Animer": "Engage",
    "Rayonner": "Grow",
    "Vos adhésions. Enfin sous contrôle.": "Your memberships. Finally under control.",
    "Chaque membre, chaque échéance, chaque règlement au même endroit.": "Every member, every due date, every payment in one place.",
    "Un événement, de l’invitation au pointage.": "An event, from invitation to check-in.",
    "Vos membres s’inscrivent depuis l’application et sont pointés à l’accueil.": "Your members sign up in the app and are checked in at the door.",
    "Ce que fait votre réseau, visible au-delà du réseau.": "What your network does, visible beyond the network.",
    "Actualités, mise en avant des membres, site public synchronisé.": "News, member spotlights, a public website in sync.",
    "Implantations": "Locations",
    "L’écosystème s’étend, réseau par réseau.": "The ecosystem grows, network by network.",
    "Clubs": "Networks",
    "Questions fréquentes": "Frequently asked questions",
    "Kopilot convient-il à tous les réseaux ?": "Does Kopilot suit every network?",
    "De 25 à plusieurs centaines de membres, y compris les fédérations multi-antennes.": "From 25 to several hundred members, including multi-branch federations.",
    "Que devient notre fichier actuel ?": "What happens to our current file?",
    "Nous le reprenons, avec une formation du bureau en visio.": "We migrate it, with board training by video call.",
    "Combien de temps pour le déploiement ?": "How long does rollout take?",
    "Quelques semaines entre la reprise des données et la soirée de lancement.": "A few weeks between the data migration and the launch evening.",
    "Nous préparons la démonstration sur le fonctionnement de votre réseau.": "We prepare the demo around how your network works.",
    "Nous revenons vers vous rapidement": "We'll get back to you shortly",
    "Une année de réseau entière,": "A whole network year,",
    "dans un seul outil.": "in one single tool.",
    "Chaque écran ci-dessous est une capture réelle de la plateforme.": "Every screen below is a real capture of the platform.",
    "Adhésions et échéances": "Memberships and due dates",
    "Les montants encaissés, ceux qui restent à encaisser, et l’état de chaque adhésion.": "What has been collected, what is still owed, and the status of every membership.",
    "Finances consolidées": "Consolidated finances",
    "Solde global, crédits et débits du mois, comptes bancaires synchronisés.": "Total balance, monthly credits and debits, synced bank accounts.",
    "Un événement, du brouillon au bilan": "An event, from draft to final report",
    "Préparation, publication, diffusion, clôture : vous savez toujours où il en est.": "Preparation, publication, distribution, closing: you always know where it stands.",
    "Publier une fois, diffuser partout": "Publish once, distribute everywhere",
    "Une actualité part dans l’application, la newsletter et le site public.": "A news item goes out in the app, the newsletter and the public website.",
    "Les actualités du réseau, les prochains événements, l’annuaire des entreprises.": "Network news, upcoming events, the company directory.",
    "Modules avancés": "Advanced modules",
    "Encaissé sur le compte du réseau, par Stripe Connect.": "Collected into the network's account, via Stripe Connect.",
    "Vos comptes rapprochés dans Kopilot, par Bridge.": "Your accounts reconciled inside Kopilot, via Bridge.",
    "Le site du réseau, synchronisé avec ses membres et ses événements.": "The network website, in sync with its members and its events.",
    "Un abonnement annuel calculé sur l’effectif. Les modules s’ajoutent seulement s’ils servent.": "An annual subscription based on headcount. Modules are added only if they are useful.",
    "Votre socle": "Your core",
    "Membres payants": "Fee-paying members",
    "Vos modules": "Your modules",
    "Pack Start": "Start package",
    "Pack Launch": "Launch package",
    "Pack Signature": "Signature package",
    "Reprise des données": "Data migration",
    "Soirée de lancement": "Launch evening",
    "Sans pack de services": "No service package",
    "Par membre et par mois": "Per member per month",
    "Moins de 25 membres": "Under 25 members",
    "Rythme, contenus et destinataires, sans y passer ses soirées.": "Cadence, content and recipients, without losing your evenings.",
    "Gagner du temps sur les relances et fidéliser les membres.": "Save time on reminders and keep members longer.",
    "9 articles": "9 articles",
    "Menu ouvert": "Menu open",
    "Demande de démo": "Demo request",
    "Règles appliquées": "Rules applied",
    "En-tête collant de 56 px, menu plein écran navy.": "56 px sticky header, full-screen navy menu.",
    "Marges latérales de 24 px, sections espacées de 48 à 56 px.": "24 px side margins, sections spaced 48 to 56 px apart.",
    "Titres 34 / 26 / 20 px, corps 16 px, légendes 14 px.": "Headings 34 / 26 / 20 px, body 16 px, captions 14 px.",
    "Toute cible tactile fait au moins 44 px de haut.": "Every touch target is at least 44 px tall.",
    "Captures produit recadrées en 4:3 et non plus en 16:10.": "Product captures cropped to 4:3 rather than 16:10.",
    "Les rangées de trois colonnes deviennent des piles ; l’application membres et les filtres défilent horizontalement.": "Three-column rows become stacks; the member app and the filters scroll horizontally.",
    "La synthèse tarifaire reste collée en bas de l’écran pendant la configuration.": "The pricing summary stays pinned to the bottom of the screen while configuring.",
  };

  var norm = function (t) {
    return t.replace(/[\u2019\u02BC]/g, "'").replace(/\u00A0/g, ' ').replace(/\s+/g, ' ').trim();
  };

  var LOOKUP = {};
  Object.keys(DICT).forEach(function (k) { LOOKUP[norm(k)] = DICT[k]; });

  /* Chaînes composées à l'exécution (tranches d'effectif, montants) : traitées
     par motif quand aucune entrée exacte ne correspond. */
  var RULES = [
    [/^(\d+)\s*[–-]\s*(\d+) membres$/, '$1–$2 members'],
    [/^(\d+) membres actifs$/, '$1 active members'],
    [/^Tranche (\d+)\s*[–-]\s*(\d+)$/, 'Band $1–$2'],
    [/^Tranche (\d+) \+$/, 'Band $1 +'],
    [/^(\d+) membres$/, '$1 members'],
    [/^400 \+ membres$/, '400 + members'],
    [/^(\d+) min de lecture$/, '$1 min read'],
    [/^(\d+) adhésions? en attente$/, '$1 memberships pending'],
    [/^(\d+) adhésions? réglées?$/, '$1 memberships paid'],
    [/^(\d+) lectures$/, '$1 reads']
  ];

  function byRule(key) {
    for (var i = 0; i < RULES.length; i++) {
      if (RULES[i][0].test(key)) {
        if (typeof RULES[i][1] === 'function') return key.replace(RULES[i][0], RULES[i][1]);
        return key.replace(RULES[i][0], RULES[i][1]);
      }
    }
    return null;
  }

  /* Montants : « 1 650 € HT » → « €1,650 excl. VAT », « 0,81 € » → « €0.81 ». */
  var money = function (_, amount, ht, per) {
    var n = amount.trim().replace(/[\u00A0\u202F ]/g, ',').replace(/,(\d{1,2})$/, '.$1');
    return '\u20AC' + n + (ht ? ' excl. VAT' : '') + (per ? ' / year' : '');
  };
  RULES.push([/^([\d\u00A0\u202F ,.]+?)\s*€(\s*HT)?(\s*\/\s*an)?$/, money]);
  RULES.push([/^\+\s*([\d\u00A0\u202F ,.]+?)\s*€(\s*HT)?(\s*\/\s*an)?$/, function (m, a, h, p) { return '+ ' + money(m, a, h, p); }]);

  var ATTRS = ['placeholder', 'title', 'alt', 'aria-label'];
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };

  var touched = [];
  var busy = false;
  var lang = 'fr';

  function translateNode(node) {
    var raw = node.nodeValue;
    if (!raw || !/[A-Za-z\u00C0-\u00FF\u20AC]/.test(raw)) return;
    var key = norm(raw);
    var hit = LOOKUP[key] || byRule(key);
    if (!hit || hit === key) return;
    var lead = raw.match(/^\s*/)[0];
    var tail = raw.match(/\s*$/)[0];
    touched.push([node, raw]);
    node.nodeValue = lead + hit + tail;
  }

  function walk(root) {
    var it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || SKIP_TAGS[p.nodeName]) return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('[data-i18n-skip]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n, list = [];
    while ((n = it.nextNode())) list.push(n);
    list.forEach(translateNode);

    var els = root.querySelectorAll ? root.querySelectorAll('*') : [];
    Array.prototype.forEach.call(els, function (el) {
      if (el.hasAttribute && el.hasAttribute('data-i18n-skip')) return;
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute || !el.hasAttribute(a)) return;
        var v = el.getAttribute(a);
        var hit = LOOKUP[norm(v)];
        if (!hit) return;
        touched.push([el, v, a]);
        el.setAttribute(a, hit);
      });
    });
  }

  function apply() {
    if (busy) return;
    busy = true;
    try { walk(document.body); } finally { busy = false; }
    paintToggle();
  }

  function revert() {
    busy = true;
    for (var i = touched.length - 1; i >= 0; i--) {
      var e = touched[i];
      try {
        if (e.length === 3) e[0].setAttribute(e[2], e[1]);
        else e[0].nodeValue = e[1];
      } catch (err) { /* nœud retiré du DOM */ }
    }
    touched = [];
    busy = false;
    paintToggle();
  }

  function paintToggle() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang-label]'), function (el) {
      el.textContent = lang === 'en' ? 'FR' : 'EN';
    });
  }

  function set(next, reload) {
    lang = next === 'en' ? 'en' : 'fr';
    try { localStorage.setItem('kopilot-lang', lang); } catch (e) {}
    document.documentElement.setAttribute('lang', lang);
    if (reload) { location.reload(); return; }
    if (lang === 'en') apply(); else revert();
  }

  var pending = null;
  function schedule() {
    if (lang !== 'en' || busy) return;
    if (pending) return;
    pending = requestAnimationFrame(function () { pending = null; apply(); });
  }

  function boot() {
    var stored = 'fr';
    try { stored = localStorage.getItem('kopilot-lang') || 'fr'; } catch (e) {}
    lang = stored === 'en' ? 'en' : 'fr';
    document.documentElement.setAttribute('lang', lang);
    if (lang === 'en') apply(); else paintToggle();
    new MutationObserver(schedule).observe(document.body, {
      childList: true, subtree: true, characterData: true
    });
  }

  window.KopilotI18n = {
    get lang() { return lang; },
    set: set,
    /* Le rechargement est volontaire : le retour au français ne peut pas se faire
       de façon fiable en réécrivant le DOM, les nœuds étant recréés à chaque
       re-rendu. La langue est persistée, donc la page revient dans le bon état. */
    toggle: function () { set(lang === 'en' ? 'fr' : 'en', true); },
    missing: function () {
      var out = {}, it = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), n;
      while ((n = it.nextNode())) {
        if (SKIP_TAGS[n.parentNode && n.parentNode.nodeName]) continue;
        var k = norm(n.nodeValue || '');
        if (k.length > 2 && /[A-Za-z\u00C0-\u00FF]/.test(k) && !LOOKUP[k] && !byRule(k)) out[k] = 1;
      }
      return Object.keys(out);
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
