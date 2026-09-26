// ─────────────────────────────────────────────────────────────
//  Datos personales y enlaces. Edita SOLO este archivo para
//  actualizar LinkedIn, CV y Formspree.
// ─────────────────────────────────────────────────────────────

const BASE = import.meta.env.BASE_URL; // respeta el `base` de vite.config.js

export const profile = {
  name: 'Cristhian Andres Mayorga Caiser',
  shortName: 'Cristhian Mayorga',
  initials: 'CM',

  linkedin: 'https://www.linkedin.com/in/cristhian-mayorga',
  location: 'Guayaquil, Ecuador',

  // Coloca tu PDF en /public/cv/ con este nombre exacto y cambia showCv a true
  cvUrl: `${BASE}cv/CV_Cristhian_Mayorga.pdf`,
  showCv: false,

  // Crea un formulario gratis en https://formspree.io y pega aquí el ID (ej: "xyzabcd").
  // Mientras esté vacío, el formulario mostrará un aviso y los canales directos.
  formspreeId: 'xaenpkev',

  // Google Analytics 4: el ID de medición se configura en vite.config.js.

  // Países donde operan los sistemas multi-tenant (códigos ISO para las banderas)
  countries: ['EC', 'MX', 'VE', 'CO'],
};
