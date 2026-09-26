Cristhian Mayorga — Portfolio Source Code

Data Engineer & AI / Full-Stack Developer | GCI World 2026 (Matsuo Lab, Universidad de Tokio)

Este repositorio contiene el código fuente de mi portafolio profesional interactivo. Más que una simple página estática, esta aplicación fue diseñada como una SPA (Single Page Application) enfocada en rendimiento, mantenibilidad y accesibilidad, reflejando los estándares de ingeniería que aplico en entornos corporativos.

Ver Portafolio en Producción

 Arquitectura y Decisiones Técnicas

El proyecto fue construido bajo la premisa de mantener un ecosistema ligero pero altamente escalable (Serverless/Static), ideal para integraciones CI/CD continuas.

Core / Engine: React.js motorizado por Vite para tiempos de compilación ultrarrápidos y HMR.

Estilizado (UI/UX): Tailwind CSS configurado con un sistema de tokens de diseño semánticos. Implementación nativa de darkMode: 'class' para persistencia de temas sin parpadeo (FOUC).

Internacionalización (i18n): Sistema de diccionarios de estado integrado (ES, EN, DE) diseñado para escalabilidad sin depender de librerías pesadas externas, permitiendo la adaptación fluida a mercados extranjeros (Norteamérica y Europa).

Seguridad y Contacto: Implementación de peticiones HTTP (fetch API) hacia endpoints seguros (Formspree) para la gestión de leads, manteniendo el correo real aislado de scrapers y previniendo fugas de datos en el frontend.

Observabilidad: Integración silenciosa de telemetría (Google Analytics 4) orientada a eventos.

 Sobre el Autor

Aunque este repositorio demuestra mi capacidad para construir interfaces modernas y robustas, mi especialidad principal reside en el Backend, la Arquitectura de Datos y la Inteligencia Artificial.

En mi día a día, diseño y opero ecosistemas complejos:

Data Engineering & RPA: Orquestación de pipelines ETL, extracción masiva de datos (Web Scraping, Selenium, DrissionPage) y automatización de ERPs (Contífico) vía VPN/RDP.

Inteligencia Artificial: Despliegue de LLMs locales (Ollama, Qwen) on-premise y modelos de visión documental (Donut, EasyOCR) para el procesamiento de reglas de negocio financieras (SRI, bancos) con políticas estrictas de Zero-Data-Leak.

Infraestructura: Administración de servidores Windows (IIS) y Linux, bases de datos relacionales (PostgreSQL, SQL Server) e implementaciones de ciberseguridad.

Diseñado y construido por Cristhian Mayorga. Despliegue automatizado mediante GitHub Pages.
