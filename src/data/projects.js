// Datos estructurales de los proyectos (no traducibles).
// Los textos (título, problema, negocio, técnico) viven en src/i18n/translations.js.
//
// `diagram`: ruta relativa a /public de un diagrama de arquitectura (.svg / .png),
// p. ej. 'diagrams/atlas.svg'. Con `null` la tarjeta no muestra el visor.

export const projects = [
  {
    id: 'atlas',
    featured: true,
    stack: ['React', 'FastAPI', 'Supabase', 'PostgreSQL', 'LLMs', 'ETL', 'Python'],
    diagram: null,
    repo: null,
  },
  {
    id: 'safe',
    featured: true,
    stack: ['Python', 'RPA', 'OCR', 'SQL Server', 'Business Rules'],
    diagram: null,
    repo: null,
  },
  {
    id: 'payroll',
    featured: true,
    stack: ['Python', 'Selenium', 'DrissionPage', 'Excel', 'VPN/RDP'],
    diagram: null,
    repo: null,
  },
  {
    id: 'fenixpay',
    featured: true,
    stack: ['Python', 'Node.js', 'WhatsApp API', 'PM2', 'NSSM'],
    diagram: null,
    repo: null,
  },
  {
    id: 'aiFinance',
    featured: false,
    stack: ['Ollama', 'Qwen', 'Donut', 'EasyOCR', 'PyTesseract', 'OpenCV'],
    diagram: null,
    repo: null,
  },
  {
    id: 'biScraping',
    featured: false,
    stack: ['QlikSense', 'Databricks', 'DrissionPage', 'Selenium', 'Python'],
    diagram: null,
    repo: null,
  },
  {
    id: 'security',
    featured: false,
    stack: ['Local LLMs', 'Ollama', 'Python', 'Pentesting', 'Web UI'],
    diagram: null,
    repo: null,
  },
];
