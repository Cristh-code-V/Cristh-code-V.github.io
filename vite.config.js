import { existsSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Google Analytics 4 — ID de medición (Admin → Flujos de datos → Web). Vacío = sin analítica.
const GA_MEASUREMENT_ID = 'G-YGE6HPFDS1';

// CV: el botón "Descargar CV" solo aparece si este archivo existe al compilar.
const CV_FILE = 'public/cv/CV_Cristhian_Mayorga.pdf';

// Inserta la etiqueta oficial de Google (gtag.js) justo después de <head>,
// SOLO en el build de producción: tus visitas en `npm run dev` no se registran.
function googleAnalytics(id) {
  return {
    name: 'inject-google-analytics',
    apply: 'build',
    transformIndexHtml(html) {
      if (!id) return html;
      const tag = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}');
    </script>`;
      return html.replace('<head>', `<head>${tag}`);
    },
  };
}

// IMPORTANTE: `base` debe coincidir con el repositorio en GitHub.
// - Repo "Cristh-code-V.github.io"  -> base: '/'   (https://cristh-code-v.github.io/)
// - Cualquier otro repo "NOMBRE"     -> base: '/NOMBRE/'
export default defineConfig({
  plugins: [react(), googleAnalytics(GA_MEASUREMENT_ID)],
  base: '/',
  define: {
    __CV_AVAILABLE__: JSON.stringify(existsSync(CV_FILE)),
  },
});
