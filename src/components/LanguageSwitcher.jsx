import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, languages, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`inline-flex rounded-md border border-line bg-raised p-0.5 font-mono text-xs ${className}`}
    >
      {languages.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            title={l.name}
            className={`rounded px-2.5 py-1 transition-colors ${
              active ? 'bg-accent text-accent-fg' : 'text-muted hover:text-ink'
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
