// Habilidades de alto nivel. Los textos (título y aplicación empresarial)
// están en translations[lang].skills.items[id]; `usedIn` enlaza con los
// ids de src/data/projects.js.
export const capabilities = [
  {
    id: 'python',
    icon: '{ }',
    tech: ['Python', 'FastAPI', 'REST APIs', 'ETL'],
    usedIn: ['atlas', 'safe', 'aiFinance'],
  },
  {
    id: 'frontend',
    icon: '</>',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Streamlit'],
    usedIn: ['atlas', 'security'],
  },
  {
    id: 'rpa',
    icon: '>>_',
    tech: ['Selenium', 'DrissionPage', 'VPN / RDP', 'Excel'],
    usedIn: ['payroll', 'safe', 'biScraping'],
  },
  {
    id: 'ai',
    icon: '(*)',
    tech: ['Ollama', 'Qwen', 'Donut', 'EasyOCR', 'PyTesseract', 'OpenCV'],
    usedIn: ['aiFinance', 'security', 'atlas'],
  },
  {
    id: 'infra',
    icon: '[#]',
    tech: ['Windows Server (IIS, NSSM)', 'Linux (PM2)', 'Databricks', 'PostgreSQL', 'SQL Server'],
    usedIn: ['fenixpay', 'biScraping', 'safe'],
  },
  {
    id: 'identity',
    icon: '[!]',
    tech: ['Entra ID', 'Microsoft Graph', 'Rclone', 'Pentesting'],
    usedIn: ['security'],
  },
];

// Tecnologías adicionales que se muestran como tags compactos
export const complementaryStack = [
  'Java',
  'Go',
  'JavaScript',
  'C',
  'PHP',
  'Node.js',
  'HTML / CSS',
  'MySQL',
  'SQLite',
  'Supabase',
  'QlikSense',
];
