import { existsSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ID de medición de Google Analytics 4. Vacío = sin analítica.
const GA_MEASUREMENT_ID = 'G-YGE6HPFDS1';

// El botón de descarga del CV solo se habilita si el archivo existe al compilar.
const CV_FILE = 'public/cv/CV_Cristhian_Mayorga.pdf';

// Inserta la etiqueta oficial de Google (gtag.js) tras <head> únicamente en el
// build de producción, para no registrar tráfico del entorno de desarrollo.
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

// Sitio de usuario de GitHub Pages servido desde la raíz del dominio.
export default defineConfig({
  plugins: [react(), googleAnalytics(GA_MEASUREMENT_ID)],
  base: '/',
  define: {
    __CV_AVAILABLE__: JSON.stringify(existsSync(CV_FILE)),
  },
});
