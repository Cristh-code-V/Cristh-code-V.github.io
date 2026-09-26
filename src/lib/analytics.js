// ─────────────────────────────────────────────────────────────
//  Google Analytics 4
//
//  La etiqueta gtag.js se inyecta en index.html al compilar
//  (ver plugin `googleAnalytics` en vite.config.js), solo en producción.
//  El sitio usa anclas (#skills, #projects…) y no un router, así que el
//  page_view automático de la carga inicial basta.
// ─────────────────────────────────────────────────────────────

// Eventos personalizados (GA4 → Informes → Interacción → Eventos).
// En desarrollo `window.gtag` no existe y la llamada no hace nada.
export function trackEvent(name, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}
