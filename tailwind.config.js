/** @type {import('tailwindcss').Config} */

// Los colores semánticos leen variables CSS definidas en src/index.css
// (`:root` = modo claro, `.dark` = modo oscuro). Así un mismo `text-ink`
// funciona en ambos temas sin duplicar clases.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        canvas: token('canvas'), // fondo de página
        surface: token('surface'), // tarjetas
        raised: token('raised'), // tags, inputs
        line: { DEFAULT: token('line'), strong: token('line-strong') }, // bordes
        ink: token('ink'), // títulos
        body: token('body'), // texto de lectura
        muted: token('muted'), // texto secundario
        subtle: token('subtle'), // texto terciario / metadatos
        accent: { DEFAULT: token('accent'), hover: token('accent-hover'), fg: token('accent-fg') },
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgb(var(--grid) / var(--grid-alpha)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--grid) / var(--grid-alpha)) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        blink: { '0%, 49%': { opacity: 1 }, '50%, 100%': { opacity: 0 } },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
