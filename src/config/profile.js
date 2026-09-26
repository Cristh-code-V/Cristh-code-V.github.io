// Datos de perfil y enlaces externos del sitio.

const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: 'Cristhian Andres Mayorga Caiser',
  shortName: 'Cristhian Mayorga',

  linkedin: 'https://www.linkedin.com/in/cristhian-mayorga',

  // CV descargable: se muestra solo si `showCv` es true y el archivo existe en /public/cv/
  cvUrl: `${BASE}cv/CV_Cristhian_Mayorga.pdf`,
  showCv: false,

  // Endpoint del formulario de contacto (https://formspree.io/f/<id>)
  formspreeId: 'xaenpkev',

  // Países donde operan los sistemas multi-tenant (ISO 3166-1 alfa-2)
  countries: ['EC', 'MX', 'VE', 'CO'],
};
