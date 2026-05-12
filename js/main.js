/* =========================================================
   Agence Mélo Design — Scripts principaux
   Menu mobile · scroll · reveal · formulaire · i18n
   ========================================================= */

(() => {
  'use strict';

  /* =========================================================
     TRADUCTIONS / TRANSLATIONS / TRADUCCIONES
     ========================================================= */
  const T = {
    fr: {
      'nav.services': 'Services',
      'nav.approche': 'Approche',
      'nav.portfolio': 'Projets',
      'nav.apropos': 'À propos',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Studio de Product &amp; UX Design — Paris',
      'hero.title': 'Des expériences digitales <span class="italic">pensées</span> pour créer de l\'impact.',
      'hero.lede': 'Agence Mélo Design accompagne startups et PME dans la conception de produits numériques centrés utilisateur — de la recherche à l\'interface, en passant par la stratégie et le design system.',
      'hero.cta1': 'Démarrer un projet',
      'hero.cta2': 'Voir les projets <span aria-hidden="true">→</span>',
      'hero.meta1label': 'années d\'expérience',
      'hero.meta2label': 'langues — FR · EN · ES',
      'hero.meta3label': 'conversion moyenne',
      'hero.card.label': '01 / Approche',
      'hero.card.quote': '<span class="italic">« Le bon design n\'est pas décoratif — il est mesurable. »</span>',

      'services.eyebrow': '— Services',
      'services.title': 'Cinq piliers pour <span class="italic">accompagner</span><br>l\'ensemble de la chaîne de valeur du design.',
      's1.title': 'UX Design',
      's1.lede': 'Conception end-to-end centrée utilisateur — de la phase discovery à la livraison et à l\'itération. Des parcours clairs, des interfaces efficaces.',
      's1.li1': 'Cadrage &amp; objectifs UX alignés business',
      's1.li2': 'User flows &amp; customer journey maps',
      's1.li3': 'Wireframes &amp; prototypage haute fidélité (Figma)',
      's1.li4': 'Audits UX &amp; optimisation de conversion',
      's2.title': 'Product Design',
      's2.lede': 'Intégration en tant que Product Designer externe au sein de vos équipes produit, pour construire, prioriser et itérer avec méthode.',
      's2.li1': 'Product discovery &amp; roadmap (RICE, MoSCoW, Kano)',
      's2.li2': 'Design systems multi-produits',
      's2.li3': 'User stories &amp; critères d\'acceptation',
      's2.li4': 'Collaboration agile produit · tech · marketing',
      's3.title': 'UX Research',
      's3.lede': 'Missions de recherche utilisateur pour éclairer vos décisions produit avec des données qualitatives et quantitatives.',
      's3.li1': 'Interviews, questionnaires, tests utilisateurs',
      's3.li2': 'Benchmark concurrentiel &amp; analyse de marché',
      's3.li3': 'Analytics &amp; exploitation des KPIs',
      's3.li4': 'Synthèse d\'insights &amp; recommandations',
      's4.title': 'UI &amp; Branding digital',
      's4.lede': 'Interfaces haute fidélité et identités visuelles digitales cohérentes, pensées pour se déployer sur toutes les plateformes.',
      's4.li1': 'Direction artistique &amp; refonte d\'identité digitale',
      's4.li2': 'Interfaces web &amp; mobile haute fidélité',
      's4.li3': 'Assets graphiques, icônes, illustrations',
      's4.li4': 'Design systems visuels multi-plateformes',
      's5.title': 'AI + UX Design',
      's5.lede': 'Design accéléré par l\'intelligence artificielle — audits, synthèse de recherche et prototypes livrés en deux fois moins de temps, avec le même niveau d\'exigence.',
      's5.li1': 'AI UX Audit — rapport complet en 48–72 h',
      's5.li2': 'Synthèse de recherche IA (entretiens, enquêtes, enregistrements)',
      's5.li3': 'Rapid prototyping + moodboard génératif',
      's5.li4': 'UX Writing &amp; microcopy augmentés par IA',

      'approche.eyebrow': '— Approche',
      'approche.title': 'Une méthode <span class="italic">claire</span>,<br>des résultats <span class="italic">mesurables</span>.',
      'approche.lede': 'Chaque projet suit un processus structuré, adapté à votre maturité et à vos enjeux. Le design n\'est pas un coût — c\'est un investissement dont l\'impact se mesure en conversion, rétention et satisfaction.',
      'step1.title': 'Discover',
      'step1.desc': 'Écoute active, audit UX, recherche utilisateur et benchmark concurrentiel pour cadrer les bons problèmes.',
      'step2.title': 'Define',
      'step2.desc': 'Synthèse des insights, priorisation (RICE, MoSCoW) et définition d\'une roadmap produit actionnable.',
      'step3.title': 'Design',
      'step3.desc': 'Wireframes, prototypes interactifs, design system et UI haute fidélité testés auprès d\'utilisateurs réels.',
      'step4.title': 'Deliver',
      'step4.desc': 'Handoff développement, suivi d\'implémentation, mesure d\'impact et itérations basées sur la donnée.',

      'portfolio.eyebrow': '— Projets',
      'portfolio.title': 'Une sélection de travaux <span class="italic">récents</span>.',
      'portfolio.subtitle': 'Études de cas publiées au fur et à mesure. Vous souhaitez consulter le portfolio complet ? <a href="#contact" class="inline-link">Écrivez-moi</a>.',
      'p1.tag': 'Product Design · USA',
      'p1.desc': 'Refonte de la plateforme B2B de gestion énergétique : +25 % de conversion, −20 % d\'abandon.',
      'p2.tag': 'UX/UI · France',
      'p2.desc': 'Conception d\'un outil SaaS de gestion locative — design system multi-produits.',
      'p3.tag': 'Branding · Colombia',
      'p3.desc': 'Identité digitale et UI d\'une plateforme de bien-être — direction artistique complète.',
      'p4.tag': 'UX Research · Colombia',
      'p4.desc': 'Études utilisateurs et refonte UX d\'une plateforme immobilière premium.',

      'apropos.eyebrow': '— À propos',
      'apropos.title': 'Alejandro Guevara,<br><span class="italic">Product &amp; UX Designer</span> à Paris.',
      'apropos.lede': 'Designer international avec une expérience prouvée entre la France, les États-Unis et la Colombie. Je mets la rigueur du design produit au service de la transformation digitale des entreprises — avec une approche trilingue, orientée impact et nourrie par la recherche.',
      'apropos.dt1': 'Expertise',
      'apropos.dd1': 'UX · Product Design · Design Systems · AI + UX',
      'apropos.dt2': 'Outils',
      'apropos.dd2': 'Figma (expert) · FigJam · Maze · Hotjar · Notion',
      'apropos.dt3': 'Langues',
      'apropos.dd3': 'Français · Anglais · Espagnol',
      'apropos.dt4': 'Clients récents',
      'apropos.dd4': 'Andy Electric · Ublo · Iridian · Casatoro',
      'apropos.cta': 'Parlons de votre projet',

      'contact.eyebrow': '— Contact',
      'contact.title': 'Un projet en tête ?<br><span class="italic">Parlons-en.</span>',
      'contact.lede': 'Un appel découverte gratuit de 30 minutes pour cadrer vos enjeux, évaluer la faisabilité et vous proposer la meilleure approche.',
      'contact.li1label': 'Email',
      'contact.li2label': 'Téléphone',
      'contact.li3label': 'Localisation',
      'contact.li3val': 'Paris, France — missions en remote partout en Europe &amp; USA',
      'contact.li4label': 'Disponibilité',
      'contact.li4val': 'Acceptation de nouveaux projets',
      'contact.li5label': 'Appel découverte',
      'contact.li5val': 'Réserver 30 min gratuitement →',
      'contact.f.name': 'Nom complet',
      'contact.f.email': 'Email',
      'contact.f.company': 'Entreprise <span class="field__opt">(optionnel)</span>',
      'contact.f.service': 'Type de mission',
      'contact.f.opt0': 'Sélectionner…',
      'contact.f.opt1': 'UX Design',
      'contact.f.opt2': 'Product Design',
      'contact.f.opt3': 'UX Research',
      'contact.f.opt4': 'UI &amp; Branding digital',
      'contact.f.opt5': 'Design System',
      'contact.f.opt_ai': 'AI + UX Design',
      'contact.f.opt6': 'Autre',
      'contact.f.message': 'Décrivez votre projet',
      'contact.f.submit': 'Envoyer le message',
      'contact.f.sending': 'Envoi en cours…',
      'contact.f.success': 'Merci, votre message a bien été envoyé. Je reviens vers vous sous 24h.',
      'contact.f.error': 'Une erreur est survenue. Merci d\'écrire directement à oago1103@gmail.com.',
      'contact.f.nokey': 'Le formulaire n\'est pas encore configuré. Merci d\'écrire directement à oago1103@gmail.com.',

      'footer.brand': 'Studio freelance de Product &amp; UX Design — Paris.',
    },

    en: {
      'nav.services': 'Services',
      'nav.approche': 'Approach',
      'nav.portfolio': 'Projects',
      'nav.apropos': 'About',
      'nav.contact': 'Contact',

      'hero.eyebrow': 'Digital Product &amp; UX Design Studio — Paris',
      'hero.title': 'Digital experiences <span class="italic">designed</span> to create impact.',
      'hero.lede': 'Agence Mélo Design helps startups and SMEs design user-centred digital products — from research to interface, including strategy and design systems.',
      'hero.cta1': 'Start a project',
      'hero.cta2': 'View projects <span aria-hidden="true">→</span>',
      'hero.meta1label': 'years of experience',
      'hero.meta2label': 'languages — FR · EN · ES',
      'hero.meta3label': 'average conversion lift',
      'hero.card.label': '01 / Approach',
      'hero.card.quote': '<span class="italic">"Good design is not decorative — it is measurable."</span>',

      'services.eyebrow': '— Services',
      'services.title': 'Five pillars to <span class="italic">support</span><br>the full design value chain.',
      's1.title': 'UX Design',
      's1.lede': 'End-to-end user-centred design — from discovery to delivery and iteration. Clear journeys, effective interfaces.',
      's1.li1': 'UX framing &amp; business-aligned objectives',
      's1.li2': 'User flows &amp; customer journey maps',
      's1.li3': 'Wireframes &amp; high-fidelity prototyping (Figma)',
      's1.li4': 'UX audits &amp; conversion optimisation',
      's2.title': 'Product Design',
      's2.lede': 'Embedded as an external Product Designer within your product teams to build, prioritise and iterate with method.',
      's2.li1': 'Product discovery &amp; roadmap (RICE, MoSCoW, Kano)',
      's2.li2': 'Multi-product design systems',
      's2.li3': 'User stories &amp; acceptance criteria',
      's2.li4': 'Agile collaboration — product · tech · marketing',
      's3.title': 'UX Research',
      's3.lede': 'User research to inform your product decisions with qualitative and quantitative data.',
      's3.li1': 'Interviews, surveys, user testing',
      's3.li2': 'Competitive benchmarking &amp; market analysis',
      's3.li3': 'Analytics &amp; KPI exploitation',
      's3.li4': 'Insight synthesis &amp; recommendations',
      's4.title': 'UI &amp; Digital Branding',
      's4.lede': 'High-fidelity interfaces and consistent digital visual identities, designed to scale across all platforms.',
      's4.li1': 'Art direction &amp; digital identity redesign',
      's4.li2': 'High-fidelity web &amp; mobile interfaces',
      's4.li3': 'Graphic assets, icons, illustrations',
      's4.li4': 'Multi-platform visual design systems',
      's5.title': 'AI + UX Design',
      's5.lede': 'Design accelerated by artificial intelligence — audits, research synthesis and prototypes delivered in half the time, with the same level of quality.',
      's5.li1': 'AI UX Audit — full report in 48–72 h',
      's5.li2': 'AI-powered research synthesis (interviews, surveys, recordings)',
      's5.li3': 'Rapid prototyping + generative moodboard',
      's5.li4': 'UX Writing &amp; microcopy powered by AI',

      'approche.eyebrow': '— Approach',
      'approche.title': 'A <span class="italic">clear</span> method,<br>with <span class="italic">measurable</span> results.',
      'approche.lede': 'Every project follows a structured process, tailored to your maturity and challenges. Design is not a cost — it is an investment whose impact is measured in conversion, retention and satisfaction.',
      'step1.title': 'Discover',
      'step1.desc': 'Active listening, UX audit, user research and competitive benchmarking to frame the right problems.',
      'step2.title': 'Define',
      'step2.desc': 'Insight synthesis, prioritisation (RICE, MoSCoW) and definition of an actionable product roadmap.',
      'step3.title': 'Design',
      'step3.desc': 'Wireframes, interactive prototypes, design system and high-fidelity UI tested with real users.',
      'step4.title': 'Deliver',
      'step4.desc': 'Dev handoff, implementation follow-up, impact measurement and data-driven iterations.',

      'portfolio.eyebrow': '— Projects',
      'portfolio.title': 'A selection of <span class="italic">recent</span> work.',
      'portfolio.subtitle': 'Case studies published as they go. Want to see the full portfolio? <a href="#contact" class="inline-link">Write to me</a>.',
      'p1.tag': 'Product Design · USA',
      'p1.desc': 'Redesign of the B2B energy management platform: +25 % conversion, −20 % drop-off.',
      'p2.tag': 'UX/UI · France',
      'p2.desc': 'Design of a rental management SaaS tool — multi-product design system.',
      'p3.tag': 'Branding · Colombia',
      'p3.desc': 'Digital identity and UI for a wellness platform — complete art direction.',
      'p4.tag': 'UX Research · Colombia',
      'p4.desc': 'User studies and UX redesign of a premium real estate platform.',

      'apropos.eyebrow': '— About',
      'apropos.title': 'Alejandro Guevara,<br><span class="italic">Product &amp; UX Designer</span> in Paris.',
      'apropos.lede': 'International designer with proven experience across France, the United States and Colombia. I bring product design rigour to the digital transformation of businesses — with a trilingual, impact-driven approach grounded in research.',
      'apropos.dt1': 'Expertise',
      'apropos.dd1': 'UX · Product Design · Design Systems · AI + UX',
      'apropos.dt2': 'Tools',
      'apropos.dd2': 'Figma (expert) · FigJam · Maze · Hotjar · Notion',
      'apropos.dt3': 'Languages',
      'apropos.dd3': 'French · English · Spanish',
      'apropos.dt4': 'Recent clients',
      'apropos.dd4': 'Andy Electric · Ublo · Iridian · Casatoro',
      'apropos.cta': 'Let\'s talk about your project',

      'contact.eyebrow': '— Contact',
      'contact.title': 'Have a project in mind?<br><span class="italic">Let\'s talk.</span>',
      'contact.lede': 'A free 30-minute discovery call to frame your challenges, assess feasibility and propose the best approach.',
      'contact.li1label': 'Email',
      'contact.li2label': 'Phone',
      'contact.li3label': 'Location',
      'contact.li3val': 'Paris, France — remote projects across Europe &amp; USA',
      'contact.li4label': 'Availability',
      'contact.li4val': 'Accepting new projects',
      'contact.li5label': 'Discovery call',
      'contact.li5val': 'Book 30 min — free →',
      'contact.f.name': 'Full name',
      'contact.f.email': 'Email',
      'contact.f.company': 'Company <span class="field__opt">(optional)</span>',
      'contact.f.service': 'Project type',
      'contact.f.opt0': 'Select…',
      'contact.f.opt1': 'UX Design',
      'contact.f.opt2': 'Product Design',
      'contact.f.opt3': 'UX Research',
      'contact.f.opt4': 'UI &amp; Digital Branding',
      'contact.f.opt5': 'Design System',
      'contact.f.opt_ai': 'AI + UX Design',
      'contact.f.opt6': 'Other',
      'contact.f.message': 'Describe your project',
      'contact.f.submit': 'Send message',
      'contact.f.sending': 'Sending…',
      'contact.f.success': 'Thank you, your message has been sent. I\'ll get back to you within 24h.',
      'contact.f.error': 'An error occurred. Please write directly to oago1103@gmail.com.',
      'contact.f.nokey': 'The form is not yet configured. Please write directly to oago1103@gmail.com.',

      'footer.brand': 'Freelance Product &amp; UX Design Studio — Paris.',
    },

    es: {
      'nav.services': 'Servicios',
      'nav.approche': 'Enfoque',
      'nav.portfolio': 'Proyectos',
      'nav.apropos': 'Sobre mí',
      'nav.contact': 'Contacto',

      'hero.eyebrow': 'Diseñador UX &amp; Product Designer — 100% Remoto · Todo el mundo',
      'hero.title': 'Diseño que <span class="italic">convierte</span> — experiencias digitales de impacto para startups en LATAM y España.',
      'hero.lede': 'Diseñador UX con 6+ años de experiencia en productos para EE.UU., Europa y LATAM. Entrego resultados medibles: más conversión, menos abandono, usuarios más satisfechos. Y uso IA para diseñar más rápido y a mejor precio.',
      'hero.cta1': 'Iniciar un proyecto',
      'hero.cta2': 'Ver proyectos <span aria-hidden="true">→</span>',
      'hero.meta1label': 'años de experiencia',
      'hero.meta2label': 'idiomas — FR · EN · ES',
      'hero.meta3label': 'conversión promedio',
      'hero.card.label': '01 / Enfoque',
      'hero.card.quote': '<span class="italic">«El buen diseño no es decorativo — es medible.»</span>',

      'services.eyebrow': '— Servicios',
      'services.title': 'Cinco pilares para <span class="italic">acompañar</span><br>toda la cadena de valor del diseño.',
      's1.title': 'UX Design',
      's1.lede': 'Diseño end-to-end centrado en el usuario — desde la fase discovery hasta la entrega e iteración. Recorridos claros, interfaces eficaces.',
      's1.li1': 'Definición &amp; objetivos UX alineados al negocio',
      's1.li2': 'User flows &amp; customer journey maps',
      's1.li3': 'Wireframes &amp; prototipado de alta fidelidad (Figma)',
      's1.li4': 'Auditorías UX &amp; optimización de conversión',
      's2.title': 'Product Design',
      's2.lede': 'Integración como Product Designer externo en tus equipos de producto para construir, priorizar e iterar con método.',
      's2.li1': 'Product discovery &amp; roadmap (RICE, MoSCoW, Kano)',
      's2.li2': 'Design systems multi-producto',
      's2.li3': 'User stories &amp; criterios de aceptación',
      's2.li4': 'Colaboración ágil — producto · tech · marketing',
      's3.title': 'UX Research',
      's3.lede': 'Investigaciones de usuarios para informar tus decisiones de producto con datos cualitativos y cuantitativos.',
      's3.li1': 'Entrevistas, encuestas, pruebas con usuarios',
      's3.li2': 'Benchmark competitivo &amp; análisis de mercado',
      's3.li3': 'Analytics &amp; explotación de KPIs',
      's3.li4': 'Síntesis de insights &amp; recomendaciones',
      's4.title': 'UI &amp; Branding digital',
      's4.lede': 'Interfaces de alta fidelidad e identidades visuales digitales coherentes, pensadas para desplegarse en todas las plataformas.',
      's4.li1': 'Dirección artística &amp; rediseño de identidad digital',
      's4.li2': 'Interfaces web &amp; móvil de alta fidelidad',
      's4.li3': 'Assets gráficos, iconos, ilustraciones',
      's4.li4': 'Design systems visuales multi-plataforma',
      's5.title': 'AI + UX Design',
      's5.lede': 'Diseño acelerado con inteligencia artificial — auditorías, síntesis de investigación y prototipos en la mitad del tiempo, con el mismo nivel de calidad de siempre.',
      's5.li1': 'AI UX Audit — informe completo en 48–72 h',
      's5.li2': 'Síntesis de investigación con IA (entrevistas, encuestas, grabaciones)',
      's5.li3': 'Rapid prototyping + moodboard generativo',
      's5.li4': 'UX Writing &amp; microcopy potenciados con IA',

      'approche.eyebrow': '— Enfoque',
      'approche.title': 'Un método <span class="italic">claro</span>,<br>resultados <span class="italic">medibles</span>.',
      'approche.lede': 'Cada proyecto sigue un proceso estructurado, adaptado a tu madurez y tus retos. El diseño no es un costo — es una inversión cuyo impacto se mide en conversión, retención y satisfacción.',
      'step1.title': 'Discover',
      'step1.desc': 'Escucha activa, auditoría UX, investigación de usuarios y benchmark competitivo para definir los problemas correctos.',
      'step2.title': 'Define',
      'step2.desc': 'Síntesis de insights, priorización (RICE, MoSCoW) y definición de un roadmap de producto accionable.',
      'step3.title': 'Design',
      'step3.desc': 'Wireframes, prototipos interactivos, design system e interfaz de alta fidelidad probados con usuarios reales.',
      'step4.title': 'Deliver',
      'step4.desc': 'Handoff de desarrollo, seguimiento de implementación, medición de impacto e iteraciones basadas en datos.',

      'portfolio.eyebrow': '— Proyectos',
      'portfolio.title': 'Una selección de trabajos <span class="italic">recientes</span>.',
      'portfolio.subtitle': 'Estudios de caso publicados progresivamente. ¿Quieres ver el portfolio completo? <a href="#contact" class="inline-link">Escríbeme</a>.',
      'p1.tag': 'Product Design · USA',
      'p1.desc': 'Rediseño de la plataforma B2B de gestión energética: +25 % de conversión, −20 % de abandono.',
      'p2.tag': 'UX/UI · France',
      'p2.desc': 'Diseño de una herramienta SaaS de gestión de alquileres — design system multi-producto.',
      'p3.tag': 'Branding · Colombia',
      'p3.desc': 'Identidad digital e interfaz de una plataforma de bienestar — dirección artística completa.',
      'p4.tag': 'UX Research · Colombia',
      'p4.desc': 'Estudios de usuarios y rediseño UX de una plataforma inmobiliaria premium.',

      'apropos.eyebrow': '— Sobre mí',
      'apropos.title': 'Alejandro Guevara,<br><span class="italic">Product &amp; UX Designer</span> en París.',
      'apropos.lede': 'Diseñador internacional con experiencia demostrada entre Francia, Estados Unidos y Colombia. Aplico el rigor del diseño de producto al servicio de la transformación digital de las empresas — con un enfoque trilingüe, orientado al impacto y enriquecido por la investigación.',
      'apropos.dt1': 'Especialidad',
      'apropos.dd1': 'UX · Product Design · Design Systems · AI + UX',
      'apropos.dt2': 'Herramientas',
      'apropos.dd2': 'Figma (experto) · FigJam · Maze · Hotjar · Notion',
      'apropos.dt3': 'Idiomas',
      'apropos.dd3': 'Francés · Inglés · Español',
      'apropos.dt4': 'Clientes recientes',
      'apropos.dd4': 'Andy Electric · Ublo · Iridian · Casatoro',
      'apropos.cta': 'Hablemos de tu proyecto',

      'contact.eyebrow': '— Contacto',
      'contact.title': '¿Tienes un proyecto en mente?<br><span class="italic">Hablemos.</span>',
      'contact.lede': 'Una llamada de descubrimiento gratuita de 30 minutos para definir tus retos, evaluar la viabilidad y proponer el mejor enfoque.',
      'contact.li1label': 'Email',
      'contact.li2label': 'Teléfono',
      'contact.li3label': 'Ubicación',
      'contact.li3val': 'París, Francia — proyectos remotos en todo el mundo (LATAM · España · EE.UU. · Europa)',
      'contact.li4label': 'Disponibilidad',
      'contact.li4val': 'Aceptando nuevos proyectos',
      'contact.li5label': 'Llamada de descubrimiento',
      'contact.li5val': 'Reserva 30 min gratis →',
      'contact.f.name': 'Nombre completo',
      'contact.f.email': 'Email',
      'contact.f.company': 'Empresa <span class="field__opt">(opcional)</span>',
      'contact.f.service': 'Tipo de proyecto',
      'contact.f.opt0': 'Seleccionar…',
      'contact.f.opt1': 'UX Design',
      'contact.f.opt2': 'Product Design',
      'contact.f.opt3': 'UX Research',
      'contact.f.opt4': 'UI &amp; Branding digital',
      'contact.f.opt5': 'Design System',
      'contact.f.opt_ai': 'AI + UX Design',
      'contact.f.opt6': 'Otro',
      'contact.f.message': 'Cuéntame tu proyecto',
      'contact.f.submit': 'Enviar mensaje',
      'contact.f.sending': 'Enviando…',
      'contact.f.success': 'Gracias, tu mensaje ha sido enviado. Te responderé en menos de 24h.',
      'contact.f.error': 'Ha ocurrido un error. Por favor escribe directamente a oago1103@gmail.com.',
      'contact.f.nokey': 'El formulario aún no está configurado. Por favor escribe directamente a oago1103@gmail.com.',

      'footer.brand': 'Estudio freelance de Product &amp; UX Design — París.',
    }
  };

  /* =========================================================
     LANGUE / LANGUAGE SWITCHER
     ========================================================= */
  // Détection automatique de la langue du navigateur (priorité : stockage local → navigateur → FR par défaut)
  const _storedLang = localStorage.getItem('md-lang');
  const _browserLang = (navigator.language || navigator.userLanguage || 'fr').toLowerCase();
  let activeLang = _storedLang || (_browserLang.startsWith('es') ? 'es' : _browserLang.startsWith('en') ? 'en' : 'fr');

  function applyLang(lang) {
    if (!T[lang]) return;
    activeLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('md-lang', lang);

    const t = T[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = t[el.dataset.i18n];
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('.nav__lang-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });
  }

  document.querySelectorAll('.nav__lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  applyLang(activeLang);

  /* =========================================================
     MENU MOBILE
     ========================================================= */
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.querySelector('.nav__menu');
  const menuLinks = document.querySelectorAll('.nav__link');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      toggle.setAttribute('aria-label', expanded ? 'Ouvrir le menu' : 'Fermer le menu');
      menu.classList.toggle('is-open');
      document.body.style.overflow = !expanded ? 'hidden' : '';
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Ouvrir le menu');
        document.body.style.overflow = '';
      });
    });
  }

  /* =========================================================
     NAV SCROLL STATE
     ========================================================= */
  const nav = document.getElementById('nav');
  const onScroll = () => { if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 12); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* =========================================================
     REVEAL ON SCROLL
     ========================================================= */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');

  if (prefersReduced) {
    revealItems.forEach(el => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

    revealItems.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 40, 280)}ms`;
      io.observe(el);
    });

    requestAnimationFrame(() => {
      revealItems.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('is-visible');
      });
    });

    setTimeout(() => { revealItems.forEach(el => el.classList.add('is-visible')); }, 4000);
  } else {
    revealItems.forEach(el => el.classList.add('is-visible'));
  }

  /* =========================================================
     ANNÉE FOOTER
     ========================================================= */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* =========================================================
     FORMULAIRE CONTACT (Web3Forms)
     ========================================================= */
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const t = T[activeLang];
      status.className = 'form__status';
      status.textContent = t['contact.f.sending'];

      const formData = new FormData(form);
      const accessKey = formData.get('access_key');

      if (!accessKey || accessKey === 'VOTRE_ACCESS_KEY_WEB3FORMS') {
        status.className = 'form__status is-error';
        status.textContent = t['contact.f.nokey'];
        return;
      }

      try {
        const res  = await fetch(form.action, { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
        const data = await res.json();
        if (res.ok && data.success) {
          status.className = 'form__status is-success';
          status.textContent = t['contact.f.success'];
          form.reset();
        } else {
          throw new Error(data.message || 'Erreur');
        }
      } catch (err) {
        status.className = 'form__status is-error';
        status.textContent = t['contact.f.error'];
        console.error(err);
      }
    });
  }

})();
