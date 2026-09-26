import { useTheme } from '../theme/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import { MoonIcon, SunIcon } from './Icons';

// Interruptor tipo "switch": el círculo se desplaza y muestra el icono del tema activo.
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';
  const label = isDark ? t.nav.toLight : t.nav.toDark;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={label}
      title={label}
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-line bg-raised transition-colors hover:border-accent"
    >
      <SunIcon className="absolute left-1.5 h-4 w-4 text-subtle" />
      <MoonIcon className="absolute right-1.5 h-4 w-4 text-subtle" />
      <span
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-fg shadow transition-transform duration-300 ${
          isDark ? 'translate-x-7' : 'translate-x-1'
        }`}
      >
        {isDark ? <MoonIcon className="h-3.5 w-3.5" /> : <SunIcon className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
