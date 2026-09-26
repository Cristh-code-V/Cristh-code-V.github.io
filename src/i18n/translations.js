// Diccionario de textos en Español, Inglés y Alemán.
// Los textos de proyectos y habilidades se indexan por `id`
// (ver src/data/projects.js y src/data/skills.js).

export const LANGUAGES = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

export const translations = {
  // ───────────────────────────── ESPAÑOL ─────────────────────────────
  es: {
    nav: {
      skills: 'Stack',
      projects: 'Proyectos',
      contact: 'Contacto',
      language: 'Idioma',
      toLight: 'Activar modo claro',
      toDark: 'Activar modo oscuro',
      menu: 'Menú',
    },
    countries: { EC: 'Ecuador', MX: 'México', VE: 'Venezuela', CO: 'Colombia' },
    hero: {
      badge: 'GCI World 2026 · Matsuo Lab · Universidad de Tokio',
      role: 'Data Engineer & AI / Full-Stack Developer',
      subtitle:
        'Transformando reglas de negocio complejas en arquitecturas de datos escalables y sistemas automatizados.',
      description:
        'Diseño y automatizo procesos empresariales a gran escala en finanzas, tributación y RRHH: ETL, RPA, LLMs locales, visión por computador y ciberseguridad. Muchos de estos sistemas operan en arquitectura multi-tenant desde servidores que administro, dando servicio a empresas de varios países de Latinoamérica.',
      academic:
        'Participante del GCI World 2026 (Global Consumer Intelligence) del Matsuo Lab de la Universidad de Tokio y estudiante de Ingeniería en Ciencia de Datos e IA en la Universidad de Guayaquil.',
      ctaProjects: 'Ver Proyectos',
      ctaCv: 'Descargar CV',
      available: 'Disponible para nuevos retos',
      panel: {
        focus: 'enfoque',
        focusValue: ['Automatización de procesos', 'Arquitecturas de datos', 'IA aplicada', 'Ciberseguridad'],
        domains: 'dominios',
        domainsValue: ['Finanzas', 'Tributación (SRI)', 'RRHH / Nómina', 'BI'],
        architecture: 'arquitectura',
        architectureValue: 'Multi-tenant · multi-país',
        regions: 'operación',
        education: 'formación',
        educationValue: 'Ing. Ciencia de Datos e IA — Universidad de Guayaquil',
      },
    },
    skills: {
      kicker: '// stack tecnológico',
      title: 'Habilidades & Aplicación Empresarial',
      subtitle: 'No solo qué tecnologías uso, sino cómo las aplico en sistemas que hoy están en producción.',
      hint: 'Pasa el cursor o toca una tarjeta para ver la aplicación empresarial.',
      application: 'Aplicación empresarial',
      usedIn: 'Aplicado en',
      more: 'Stack complementario',
      items: {
        python: {
          title: 'Python / FastAPI',
          description:
            'Orquestación de pipelines ETL y desarrollo de APIs robustas para validación de reglas de negocio.',
        },
        frontend: {
          title: 'React / Tailwind',
          description:
            'Construcción de interfaces de auditoría financiera e integración de herramientas de ciberseguridad.',
        },
        rpa: {
          title: 'RPA & Scraping',
          description:
            'Automatización de ERPs heredados vía VPN/RDP y extracción masiva de datos contables (SRI, Contífico).',
        },
        ai: {
          title: 'LLMs & Visión Documental',
          description:
            'Despliegue de IA on-premise para procesamiento documental, extracción de cheques y pentesting sin exposición de datos.',
        },
        infra: {
          title: 'Servidores & Bases de Datos',
          description:
            'Administración de Windows Server (IIS) y Linux que sirven plataformas multi-tenant a empresas de varios países, con modelado de datos en Databricks, PostgreSQL y SQL Server.',
        },
        identity: {
          title: 'Identidad, Nube & Seguridad',
          description:
            'Gestión de identidades y automatización de Microsoft 365 con Entra ID y Microsoft Graph, sincronización de almacenamiento con Rclone y auditorías de vulnerabilidades sobre infraestructura propia.',
        },
      },
    },
    projects: {
      kicker: '// casos reales',
      title: 'Proyectos Destacados',
      subtitle:
        'Cada proyecto se explica en dos capas: el impacto para el negocio y la arquitectura técnica que lo hace posible.',
      multitenant:
        'Muchos de estos sistemas son multi-tenant y operan para empresas en Ecuador, México, Venezuela y Colombia.',
      business: 'Impacto en el Negocio',
      technical: 'Arquitectura Técnica',
      problem: 'Problema',
      stack: 'Stack',
      featured: 'Destacado',
      viewDiagram: 'Ver diagrama',
      diagramAlt: 'Diagrama de arquitectura de',
      close: 'Cerrar',
      confidential: 'Código privado · proyecto corporativo',
      items: {
        atlas: {
          title: 'ATLAS',
          tagline: 'Sistema de Confirmaciones Bancarias',
          problem: 'Las confirmaciones bancarias se validaban manualmente, con retrasos y riesgo de error humano.',
          business:
            'Automatiza el flujo completo de confirmaciones y validación financiera: menos tiempo operativo, trazabilidad de cada movimiento y decisiones más rápidas para el área de Finanzas.',
          technical:
            'Aplicación web full-stack con React y FastAPI sobre Supabase/PostgreSQL. Pipeline ETL completo con LLMs integrados para interpretar, normalizar y validar la información bancaria.',
        },
        safe: {
          title: 'Ecosistema SAFE',
          tagline: 'Procesamiento contable y tributario (SRI)',
          problem: 'La revisión de comprobantes emitidos y recibidos ante el SRI consumía horas de trabajo contable repetitivo.',
          business:
            'Auditoría y cumplimiento tributario sin intervención manual: los documentos se descargan, procesan y validan automáticamente contra las reglas de negocio de la empresa.',
          technical:
            'RPA para la descarga de comprobantes electrónicos emitidos/recibidos, OCR para documentos no estructurados y un motor de validación de reglas contables con persistencia en SQL.',
        },
        payroll: {
          title: 'RPA Nómina & ERPs',
          tagline: 'Contífico · VPN/RDP · Excel',
          problem: 'RRHH descargaba roles y reportes uno por uno desde el ERP y los consolidaba a mano.',
          business:
            'Ahorro masivo de horas-hombre en RRHH: descargas unitarias masivas y reportes consolidados listos para usar, además de robots que operan ERPs heredados sin intervención humana.',
          technical:
            'Robots en Python (Selenium / DrissionPage) que automatizan Contífico con post-procesamiento en Excel, y bots que operan ERPs a través de conexiones VPN y escritorio remoto (RDP).',
        },
        fenixpay: {
          title: 'FENIXPay & Mensajería',
          tagline: 'Pagos y notificaciones automatizadas por WhatsApp',
          problem: 'Los clientes no recibían avisos oportunos de pagos y facturas, generando cobranza tardía.',
          business:
            'Plataforma de pagos con notificaciones automáticas por WhatsApp sincronizadas con la facturación interna: mejor comunicación con el cliente y ciclos de cobro más cortos.',
          technical:
            'Servicios en Python y Node.js integrados con la API de WhatsApp y el sistema de facturación, desplegados como procesos gestionados (PM2 / NSSM) en servidores Linux y Windows.',
        },
        aiFinance: {
          title: 'AI para Finanzas',
          tagline: 'LLMs locales + OCR para comprobantes y cheques',
          problem: 'La lectura de comprobantes bancarios y cheques era manual y no podía enviarse a servicios en la nube por confidencialidad.',
          business:
            'Lectura automatizada de comprobantes y cheques manteniendo los datos sensibles dentro de la empresa: menos digitación, menos errores y cero exposición a terceros.',
          technical:
            'Entrenamiento y ejecución de LLMs locales (Ollama, Qwen) y modelos de visión documental (Donut) combinados con EasyOCR, PyTesseract y preprocesamiento con OpenCV.',
        },
        biScraping: {
          title: 'BI & Web Scraping',
          tagline: 'Dashboards, SRI vs. Negocio y Big Data vehicular',
          problem: 'Los datos de BI y fuentes externas estaban dispersos y no podían usarse para análisis predictivo.',
          business:
            'Exportación automática de dashboards de BI a Excel, comparación de datos del SRI contra los del negocio para predicciones y un catálogo normalizado de vehículos de último modelo.',
          technical:
            'RPA sobre QlikSense, pipelines de procesamiento comparativo en Databricks y scrapers (DrissionPage / Selenium) con normalización de datos a escala.',
        },
        security: {
          title: 'Security & AI Pentesting',
          tagline: 'Auditorías de seguridad asistidas por IA local',
          problem: 'Las auditorías de seguridad debían realizarse sin enviar información sensible a herramientas externas.',
          business:
            'Seguridad preventiva: auditorías periódicas que fortalecen la postura de seguridad y reducen el riesgo operativo, manteniendo la información confidencial dentro de la organización.',
          technical:
            'Interfaz web con LLMs ejecutados on-premise, integrada con herramientas de auditoría y pentesting, utilizada exclusivamente en entornos propios y autorizados.',
        },
      },
    },
    contact: {
      kicker: '// hablemos',
      title: 'Contacto',
      subtitle: '¿Tienes un proceso que automatizar o datos que ordenar? Escríbeme por el canal que prefieras.',
      direct: 'Canales directos',
      form: {
        title: 'Envíame un mensaje',
        name: 'Nombre',
        email: 'Correo',
        message: 'Mensaje',
        namePh: 'Tu nombre',
        emailPh: 'tu@empresa.com',
        messagePh: 'Cuéntame sobre tu proyecto o proceso…',
        send: 'Enviar mensaje',
        sending: 'Enviando…',
        successTitle: 'Mensaje recibido',
        success:
          'Gracias por tu interés. He recibido tu mensaje correctamente y me pondré en contacto contigo a la brevedad.',
        sendAnother: 'Enviar otro mensaje',
        error: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por LinkedIn.',
        notConfigured: 'El formulario no está disponible en este momento. Escríbeme directamente por LinkedIn.',
        subject: 'Nuevo contacto desde el portafolio',
      },
    },
    footer: {
      message: 'Resuelvo problemas complejos con datos: de la regla de negocio al sistema en producción.',
      rights: 'Todos los derechos reservados.',
      built: 'Construido con React + Tailwind · Desplegado en GitHub Pages',
      backToTop: 'Volver arriba',
    },
  },

  // ───────────────────────────── ENGLISH ─────────────────────────────
  en: {
    nav: {
      skills: 'Stack',
      projects: 'Projects',
      contact: 'Contact',
      language: 'Language',
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
      menu: 'Menu',
    },
    countries: { EC: 'Ecuador', MX: 'Mexico', VE: 'Venezuela', CO: 'Colombia' },
    hero: {
      badge: 'GCI World 2026 · Matsuo Lab · University of Tokyo',
      role: 'Data Engineer & AI / Full-Stack Developer',
      subtitle: 'Turning complex business rules into scalable data architectures and automated systems.',
      description:
        'I design and automate large-scale business processes across finance, tax and HR: ETL, RPA, local LLMs, computer vision and cybersecurity. Many of these systems run on a multi-tenant architecture from servers I manage, serving companies in several Latin American countries.',
      academic:
        'Participant in GCI World 2026 (Global Consumer Intelligence) at the Matsuo Lab, University of Tokyo, and Data Science & AI Engineering student at the University of Guayaquil.',
      ctaProjects: 'View Projects',
      ctaCv: 'Download CV',
      available: 'Open to new challenges',
      panel: {
        focus: 'focus',
        focusValue: ['Process automation', 'Data architectures', 'Applied AI', 'Cybersecurity'],
        domains: 'domains',
        domainsValue: ['Finance', 'Tax (SRI)', 'HR / Payroll', 'BI'],
        architecture: 'architecture',
        architectureValue: 'Multi-tenant · multi-country',
        regions: 'operations',
        education: 'education',
        educationValue: 'B.Eng. Data Science & AI — University of Guayaquil',
      },
    },
    skills: {
      kicker: '// tech stack',
      title: 'Skills & Business Application',
      subtitle: 'Not just which technologies I use, but how I apply them in systems running in production today.',
      hint: 'Hover over or tap a card to see its business application.',
      application: 'Business application',
      usedIn: 'Applied in',
      more: 'Complementary stack',
      items: {
        python: {
          title: 'Python / FastAPI',
          description: 'Orchestrating ETL pipelines and building robust APIs to validate business rules.',
        },
        frontend: {
          title: 'React / Tailwind',
          description: 'Building financial audit interfaces and integrating cybersecurity tooling.',
        },
        rpa: {
          title: 'RPA & Scraping',
          description:
            'Automating legacy ERPs over VPN/RDP and bulk extraction of accounting data (SRI, Contífico).',
        },
        ai: {
          title: 'LLMs & Document Vision',
          description:
            'On-premise AI deployment for document processing, check extraction and pentesting with zero data exposure.',
        },
        infra: {
          title: 'Servers & Databases',
          description:
            'Managing Windows Server (IIS) and Linux hosts that serve multi-tenant platforms to companies across several countries, with data modeling in Databricks, PostgreSQL and SQL Server.',
        },
        identity: {
          title: 'Identity, Cloud & Security',
          description:
            'Identity management and Microsoft 365 automation with Entra ID and Microsoft Graph, storage sync with Rclone and vulnerability audits on owned infrastructure.',
        },
      },
    },
    projects: {
      kicker: '// real-world cases',
      title: 'Featured Projects',
      subtitle: 'Each project is explained in two layers: the business impact and the technical architecture behind it.',
      multitenant: 'Many of these systems are multi-tenant and serve companies in Ecuador, Mexico, Venezuela and Colombia.',
      business: 'Business Impact',
      technical: 'Technical Architecture',
      problem: 'Problem',
      stack: 'Stack',
      featured: 'Featured',
      viewDiagram: 'View diagram',
      diagramAlt: 'Architecture diagram of',
      close: 'Close',
      confidential: 'Private code · corporate project',
      items: {
        atlas: {
          title: 'ATLAS',
          tagline: 'Bank Confirmation System',
          problem: 'Bank confirmations were validated manually, causing delays and human-error risk.',
          business:
            'Automates the entire confirmation and financial validation flow: less operational time, full traceability of every transaction and faster decisions for the Finance team.',
          technical:
            'Full-stack web app built with React and FastAPI on Supabase/PostgreSQL. End-to-end ETL pipeline with integrated LLMs to interpret, normalize and validate banking data.',
        },
        safe: {
          title: 'SAFE Ecosystem',
          tagline: 'Accounting & tax processing (SRI)',
          problem: 'Reviewing issued and received tax documents from the SRI consumed hours of repetitive accounting work.',
          business:
            'Tax auditing and compliance with no manual intervention: documents are downloaded, processed and validated automatically against the company’s business rules.',
          technical:
            'RPA to download issued/received electronic invoices, OCR for unstructured documents and an accounting-rules validation engine with SQL persistence.',
        },
        payroll: {
          title: 'Payroll & ERP RPA',
          tagline: 'Contífico · VPN/RDP · Excel',
          problem: 'HR downloaded payroll records and reports one by one from the ERP and consolidated them by hand.',
          business:
            'Massive savings in HR man-hours: bulk unit downloads and ready-to-use consolidated reports, plus robots operating legacy ERPs with no human intervention.',
          technical:
            'Python robots (Selenium / DrissionPage) automating Contífico with Excel post-processing, and bots that operate ERPs over VPN and Remote Desktop (RDP) connections.',
        },
        fenixpay: {
          title: 'FENIXPay & Messaging',
          tagline: 'Payments and automated WhatsApp notifications',
          problem: 'Customers did not receive timely payment and invoice notices, leading to late collections.',
          business:
            'Payment platform with automated WhatsApp notifications synced with internal invoicing: better customer communication and shorter collection cycles.',
          technical:
            'Python and Node.js services integrated with the WhatsApp API and the invoicing system, deployed as managed processes (PM2 / NSSM) on Linux and Windows servers.',
        },
        aiFinance: {
          title: 'AI for Finance',
          tagline: 'Local LLMs + OCR for bank receipts and checks',
          problem: 'Reading bank receipts and checks was manual, and the data could not be sent to cloud services for confidentiality reasons.',
          business:
            'Automated reading of receipts and checks while keeping sensitive data in-house: less typing, fewer errors and zero third-party exposure.',
          technical:
            'Training and running local LLMs (Ollama, Qwen) and document-vision models (Donut), combined with EasyOCR, PyTesseract and OpenCV preprocessing.',
        },
        biScraping: {
          title: 'BI & Web Scraping',
          tagline: 'Dashboards, SRI vs. Business and vehicle Big Data',
          problem: 'BI data and external sources were scattered and unusable for predictive analysis.',
          business:
            'Automatic export of BI dashboards to Excel, comparison of SRI data against business data for forecasting, and a normalized catalog of latest-model vehicles.',
          technical:
            'RPA on QlikSense, comparative processing pipelines on Databricks and scrapers (DrissionPage / Selenium) with data normalization at scale.',
        },
        security: {
          title: 'Security & AI Pentesting',
          tagline: 'Security audits assisted by local AI',
          problem: 'Security audits had to be performed without sending sensitive information to external tools.',
          business:
            'Preventive security: periodic audits that strengthen the security posture and reduce operational risk, keeping confidential information inside the organization.',
          technical:
            'Web interface with on-premise LLMs, integrated with auditing and pentesting tools, used exclusively in owned and authorized environments.',
        },
      },
    },
    contact: {
      kicker: '// let’s talk',
      title: 'Contact',
      subtitle: 'Have a process to automate or data to organize? Reach out through your preferred channel.',
      direct: 'Direct channels',
      form: {
        title: 'Send me a message',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        namePh: 'Your name',
        emailPh: 'you@company.com',
        messagePh: 'Tell me about your project or process…',
        send: 'Send message',
        sending: 'Sending…',
        successTitle: 'Message received',
        success: 'Thank you for your interest. Your message has been received and I will get back to you shortly.',
        sendAnother: 'Send another message',
        error: 'The message could not be sent. Please try again or reach me directly on LinkedIn.',
        notConfigured: 'The form is currently unavailable. Please reach me directly on LinkedIn.',
        subject: 'New contact from portfolio',
      },
    },
    footer: {
      message: 'I solve complex problems with data: from business rule to production system.',
      rights: 'All rights reserved.',
      built: 'Built with React + Tailwind · Deployed on GitHub Pages',
      backToTop: 'Back to top',
    },
  },

  // ───────────────────────────── DEUTSCH ─────────────────────────────
  de: {
    nav: {
      skills: 'Stack',
      projects: 'Projekte',
      contact: 'Kontakt',
      language: 'Sprache',
      toLight: 'Hellen Modus aktivieren',
      toDark: 'Dunklen Modus aktivieren',
      menu: 'Menü',
    },
    countries: { EC: 'Ecuador', MX: 'Mexiko', VE: 'Venezuela', CO: 'Kolumbien' },
    hero: {
      badge: 'GCI World 2026 · Matsuo Lab · Universität Tokio',
      role: 'Data Engineer & AI / Full-Stack Developer',
      subtitle: 'Komplexe Geschäftsregeln in skalierbare Datenarchitekturen und automatisierte Systeme verwandeln.',
      description:
        'Ich entwerfe und automatisiere Geschäftsprozesse im großen Maßstab in Finanzen, Steuern und Personalwesen: ETL, RPA, lokale LLMs, Computer Vision und Cybersicherheit. Viele dieser Systeme laufen mandantenfähig (Multi-Tenant) auf von mir administrierten Servern und bedienen Unternehmen in mehreren Ländern Lateinamerikas.',
      academic:
        'Teilnehmer am GCI World 2026 (Global Consumer Intelligence) des Matsuo Lab der Universität Tokio und Student der Ingenieurwissenschaften für Data Science & KI an der Universität Guayaquil.',
      ctaProjects: 'Projekte ansehen',
      ctaCv: 'Lebenslauf herunterladen',
      available: 'Offen für neue Herausforderungen',
      panel: {
        focus: 'fokus',
        focusValue: ['Prozessautomatisierung', 'Datenarchitekturen', 'Angewandte KI', 'Cybersicherheit'],
        domains: 'bereiche',
        domainsValue: ['Finanzen', 'Steuern (SRI)', 'HR / Lohnabrechnung', 'BI'],
        architecture: 'architektur',
        architectureValue: 'Multi-Tenant · länderübergreifend',
        regions: 'betrieb',
        education: 'ausbildung',
        educationValue: 'Ing. Data Science & KI — Universität Guayaquil',
      },
    },
    skills: {
      kicker: '// tech stack',
      title: 'Fähigkeiten & Einsatz im Unternehmen',
      subtitle: 'Nicht nur, welche Technologien ich nutze, sondern wie ich sie in heute produktiven Systemen einsetze.',
      hint: 'Fahren Sie mit der Maus über eine Karte oder tippen Sie darauf, um den Unternehmenseinsatz zu sehen.',
      application: 'Einsatz im Unternehmen',
      usedIn: 'Eingesetzt in',
      more: 'Ergänzender Stack',
      items: {
        python: {
          title: 'Python / FastAPI',
          description: 'Orchestrierung von ETL-Pipelines und Entwicklung robuster APIs zur Validierung von Geschäftsregeln.',
        },
        frontend: {
          title: 'React / Tailwind',
          description: 'Entwicklung von Oberflächen für Finanzprüfungen und Integration von Cybersecurity-Werkzeugen.',
        },
        rpa: {
          title: 'RPA & Scraping',
          description:
            'Automatisierung von Legacy-ERPs über VPN/RDP und massenhafte Extraktion von Buchhaltungsdaten (SRI, Contífico).',
        },
        ai: {
          title: 'LLMs & Dokumenten-Vision',
          description:
            'On-Premise-KI für Dokumentenverarbeitung, Scheck-Extraktion und Pentesting ohne Offenlegung von Daten.',
        },
        infra: {
          title: 'Server & Datenbanken',
          description:
            'Administration von Windows Server (IIS) und Linux, die mandantenfähige Plattformen für Unternehmen in mehreren Ländern bereitstellen, mit Datenmodellierung in Databricks, PostgreSQL und SQL Server.',
        },
        identity: {
          title: 'Identität, Cloud & Sicherheit',
          description:
            'Identitätsverwaltung und Microsoft-365-Automatisierung mit Entra ID und Microsoft Graph, Speichersynchronisation mit Rclone und Schwachstellenanalysen auf eigener Infrastruktur.',
        },
      },
    },
    projects: {
      kicker: '// reale Fälle',
      title: 'Ausgewählte Projekte',
      subtitle:
        'Jedes Projekt wird auf zwei Ebenen erklärt: der geschäftliche Nutzen und die technische Architektur dahinter.',
      multitenant:
        'Viele dieser Systeme sind mandantenfähig und bedienen Unternehmen in Ecuador, Mexiko, Venezuela und Kolumbien.',
      business: 'Geschäftlicher Nutzen',
      technical: 'Technische Architektur',
      problem: 'Problem',
      stack: 'Stack',
      featured: 'Highlight',
      viewDiagram: 'Diagramm anzeigen',
      diagramAlt: 'Architekturdiagramm von',
      close: 'Schließen',
      confidential: 'Privater Code · Unternehmensprojekt',
      items: {
        atlas: {
          title: 'ATLAS',
          tagline: 'System für Bankbestätigungen',
          problem: 'Bankbestätigungen wurden manuell geprüft – mit Verzögerungen und dem Risiko menschlicher Fehler.',
          business:
            'Automatisiert den gesamten Bestätigungs- und Validierungsprozess: weniger operativer Aufwand, lückenlose Nachverfolgbarkeit jeder Buchung und schnellere Entscheidungen für die Finanzabteilung.',
          technical:
            'Full-Stack-Webanwendung mit React und FastAPI auf Supabase/PostgreSQL. Vollständige ETL-Pipeline mit integrierten LLMs zur Interpretation, Normalisierung und Validierung von Bankdaten.',
        },
        safe: {
          title: 'SAFE-Ökosystem',
          tagline: 'Buchhaltungs- und Steuerverarbeitung (SRI)',
          problem: 'Die Prüfung ausgestellter und empfangener Steuerbelege beim SRI kostete Stunden repetitiver Buchhaltungsarbeit.',
          business:
            'Steuerprüfung und Compliance ohne manuelle Eingriffe: Belege werden automatisch heruntergeladen, verarbeitet und gegen die Geschäftsregeln des Unternehmens validiert.',
          technical:
            'RPA zum Herunterladen ausgestellter/empfangener E-Belege, OCR für unstrukturierte Dokumente und eine Validierungs-Engine für Buchhaltungsregeln mit SQL-Persistenz.',
        },
        payroll: {
          title: 'RPA Lohnabrechnung & ERPs',
          tagline: 'Contífico · VPN/RDP · Excel',
          problem: 'Die Personalabteilung lud Abrechnungen und Berichte einzeln aus dem ERP herunter und konsolidierte sie manuell.',
          business:
            'Massive Einsparung von Arbeitsstunden im HR: Massen-Downloads und sofort nutzbare konsolidierte Berichte sowie Roboter, die Legacy-ERPs ohne menschliches Zutun bedienen.',
          technical:
            'Python-Roboter (Selenium / DrissionPage) zur Automatisierung von Contífico mit Excel-Nachbearbeitung sowie Bots, die ERPs über VPN- und Remotedesktop-Verbindungen (RDP) bedienen.',
        },
        fenixpay: {
          title: 'FENIXPay & Messaging',
          tagline: 'Zahlungen und automatisierte WhatsApp-Benachrichtigungen',
          problem: 'Kunden erhielten keine rechtzeitigen Zahlungs- und Rechnungshinweise, was zu verspäteten Zahlungseingängen führte.',
          business:
            'Zahlungsplattform mit automatischen WhatsApp-Benachrichtigungen, synchronisiert mit der internen Fakturierung: bessere Kundenkommunikation und kürzere Inkassozyklen.',
          technical:
            'Python- und Node.js-Dienste, integriert mit der WhatsApp-API und dem Fakturierungssystem, betrieben als verwaltete Prozesse (PM2 / NSSM) auf Linux- und Windows-Servern.',
        },
        aiFinance: {
          title: 'KI für Finanzen',
          tagline: 'Lokale LLMs + OCR für Bankbelege und Schecks',
          problem: 'Bankbelege und Schecks wurden manuell erfasst, und die Daten durften aus Vertraulichkeitsgründen nicht in die Cloud.',
          business:
            'Automatisiertes Auslesen von Belegen und Schecks, wobei sensible Daten im Unternehmen bleiben: weniger Tipparbeit, weniger Fehler und keine Weitergabe an Dritte.',
          technical:
            'Training und Betrieb lokaler LLMs (Ollama, Qwen) und Dokumenten-Vision-Modelle (Donut), kombiniert mit EasyOCR, PyTesseract und Vorverarbeitung mit OpenCV.',
        },
        biScraping: {
          title: 'BI & Web Scraping',
          tagline: 'Dashboards, SRI vs. Geschäft und Fahrzeug-Big-Data',
          problem: 'BI-Daten und externe Quellen waren verstreut und für prädiktive Analysen nicht nutzbar.',
          business:
            'Automatischer Export von BI-Dashboards nach Excel, Abgleich von SRI- mit Geschäftsdaten für Prognosen und ein normalisierter Katalog aktueller Fahrzeugmodelle.',
          technical:
            'RPA auf QlikSense, vergleichende Verarbeitungspipelines in Databricks und Scraper (DrissionPage / Selenium) mit Datennormalisierung im großen Maßstab.',
        },
        security: {
          title: 'Security & AI Pentesting',
          tagline: 'Sicherheitsaudits mit lokaler KI',
          problem: 'Sicherheitsaudits mussten durchgeführt werden, ohne sensible Informationen an externe Tools zu senden.',
          business:
            'Präventive Sicherheit: regelmäßige Audits, die die Sicherheitslage stärken und das operative Risiko senken, während vertrauliche Informationen im Unternehmen bleiben.',
          technical:
            'Weboberfläche mit on-premise betriebenen LLMs, integriert mit Audit- und Pentesting-Tools – ausschließlich in eigenen, autorisierten Umgebungen eingesetzt.',
        },
      },
    },
    contact: {
      kicker: '// lass uns reden',
      title: 'Kontakt',
      subtitle: 'Haben Sie einen Prozess zu automatisieren oder Daten zu ordnen? Schreiben Sie mir über Ihren bevorzugten Kanal.',
      direct: 'Direkte Kanäle',
      form: {
        title: 'Schreiben Sie mir',
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        namePh: 'Ihr Name',
        emailPh: 'sie@firma.com',
        messagePh: 'Erzählen Sie mir von Ihrem Projekt oder Prozess…',
        send: 'Nachricht senden',
        sending: 'Wird gesendet…',
        successTitle: 'Nachricht erhalten',
        success:
          'Vielen Dank für Ihr Interesse. Ihre Nachricht ist bei mir eingegangen und ich melde mich in Kürze bei Ihnen.',
        sendAnother: 'Weitere Nachricht senden',
        error: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt über LinkedIn.',
        notConfigured: 'Das Formular ist derzeit nicht verfügbar. Bitte kontaktieren Sie mich direkt über LinkedIn.',
        subject: 'Neuer Kontakt über das Portfolio',
      },
    },
    footer: {
      message: 'Ich löse komplexe Probleme mit Daten: von der Geschäftsregel bis zum Produktivsystem.',
      rights: 'Alle Rechte vorbehalten.',
      built: 'Erstellt mit React + Tailwind · Gehostet auf GitHub Pages',
      backToTop: 'Nach oben',
    },
  },
};
