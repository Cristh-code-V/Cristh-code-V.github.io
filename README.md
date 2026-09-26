<div align="center">

# Cristhian Mayorga — Portfolio Source Code

**Data Engineer & AI / Full-Stack Developer**<br>
GCI World 2026 · Matsuo Lab, Universidad de Tokio

[![Ver portafolio](https://img.shields.io/badge/Ver_portafolio-cristh--code--v.github.io-22c55e?style=for-the-badge&logo=githubpages&logoColor=white)](https://cristh-code-v.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Cristhian_Mayorga-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cristhian-mayorga)

[![Deploy](https://github.com/Cristh-code-V/Cristh-code-V.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Cristh-code-V/Cristh-code-V.github.io/actions/workflows/deploy.yml)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-ES_·_EN_·_DE-334155)

</div>

---

Este repositorio contiene el código fuente de mi portafolio profesional interactivo. Más que una simple página estática, es una **SPA (Single Page Application)** enfocada en rendimiento, mantenibilidad y accesibilidad, que refleja los estándares de ingeniería que aplico en entornos corporativos.

## 🏗️ Arquitectura y decisiones técnicas

El proyecto se construyó para mantener un ecosistema ligero pero escalable (**Serverless / Static**), ideal para integración y despliegue continuos.

| Área | Implementación |
|---|---|
| **Core / Engine** | React.js sobre Vite, con compilaciones rápidas y HMR. |
| **UI / UX** | Tailwind CSS con un sistema de *design tokens* semánticos. Modo oscuro/claro nativo (`darkMode: 'class'`) persistido y sin parpadeo (FOUC). |
| **Internacionalización** | Diccionarios de estado propios (ES · EN · DE), escalables y sin librerías externas pesadas, pensados para mercados de Norteamérica y Europa. |
| **Seguridad y contacto** | Peticiones HTTP (`fetch`) a endpoints seguros (Formspree) para la gestión de leads. El correo real queda aislado de scrapers y no se expone en el frontend. |
| **Observabilidad** | Telemetría silenciosa con Google Analytics 4, orientada a eventos. |
| **CI/CD** | Build y despliegue automáticos en GitHub Pages mediante GitHub Actions en cada `push` a `main`. |

## 👨‍💻 Sobre el autor

Aunque este repositorio demuestra mi capacidad para construir interfaces modernas y robustas, mi especialidad principal está en el **Backend**, la **Arquitectura de Datos** y la **Inteligencia Artificial**. En mi día a día diseño y opero ecosistemas complejos:

- **⚙️ Data Engineering & RPA:** orquestación de pipelines ETL, extracción masiva de datos (Web Scraping, Selenium, DrissionPage) y automatización de ERPs (Contífico) vía VPN/RDP.
- **🧠 Inteligencia Artificial:** despliegue on-premise de LLMs locales (Ollama, Qwen) y modelos de visión documental (Donut, EasyOCR) para procesar reglas de negocio financieras (SRI, bancos) con políticas estrictas de *Zero-Data-Leak*.
- **🖥️ Infraestructura:** administración de servidores Windows (IIS) y Linux, bases de datos relacionales (PostgreSQL, SQL Server) e implementaciones de ciberseguridad.

## 🚀 Ejecución local

```bash
npm install
npm run dev      # http://localhost:5173/
npm run build    # genera el sitio estático en /dist
```

## 📁 Estructura

```
src/
├── components/   # Navbar, Hero, Skills, Projects, ContactForm, Footer…
├── config/       # Datos de perfil y enlaces
├── data/         # Proyectos y habilidades
├── i18n/         # Diccionarios ES / EN / DE + hook useLanguage()
├── theme/        # Contexto de modo oscuro / claro
└── lib/          # Analítica (eventos GA4)
```

---

<div align="center">
<sub>Diseñado y construido por <b>Cristhian Mayorga</b> · Desplegado automáticamente en GitHub Pages</sub>
</div>
