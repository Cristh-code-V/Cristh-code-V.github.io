# cristh-code-v.github.io

Código de mi portafolio personal: **https://cristh-code-v.github.io/**

Soy Cristhian Mayorga, Data Engineer y desarrollador full-stack. Formo parte del GCI World 2026 del Matsuo Lab (Universidad de Tokio) y estudio Ingeniería en Ciencia de Datos e IA en la Universidad de Guayaquil. Mi trabajo del día a día está más en el backend: pipelines ETL, RPA sobre ERPs, LLMs corriendo on-premise para procesar documentos financieros y administración de servidores Windows/Linux. Este repo es la parte visible de eso.

## Stack

- React 18 + Vite
- Tailwind CSS (modo claro/oscuro con `darkMode: 'class'` y variables CSS)
- Textos en español, inglés y alemán con un diccionario propio, sin librerías de i18n
- Formulario de contacto con Formspree, así mi correo no queda expuesto en la página
- Google Analytics 4, solo en producción
- Deploy automático a GitHub Pages con GitHub Actions en cada push a `main`

## Correrlo en local

```bash
npm install
npm run dev
```

`npm run build` genera el sitio estático en `dist/`.

## Estructura

```
src/
  components/   secciones de la página
  config/       datos de perfil y enlaces
  data/         proyectos y habilidades
  i18n/         traducciones
  theme/        modo claro/oscuro
  lib/          eventos de analítica
```

Los textos de proyectos y habilidades están en `src/i18n/translations.js`; los datos que no dependen del idioma (stack, enlaces) en `src/data/`.

## Contacto

[LinkedIn](https://www.linkedin.com/in/cristhian-mayorga) o el formulario del sitio.
