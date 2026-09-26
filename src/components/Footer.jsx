import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../config/profile';
import { ArrowUpIcon, LinkedInIcon } from './Icons';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon, external: true },  ];

  return (
    <footer className="relative border-t border-line bg-canvas">
      <div className="container-x py-12">
        <p className="max-w-2xl text-lg font-medium text-ink">
          <span className="font-mono text-accent">&gt; </span>
          {t.footer.message}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex gap-2">
            {links.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                className="icon-btn"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <a href="#top" className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent">
            <ArrowUpIcon className="h-4 w-4" />
            {t.footer.backToTop}
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-1 border-t border-line pt-6 font-mono text-xs text-subtle sm:flex-row sm:justify-between">
          <span>
            © {year} {profile.name}. {t.footer.rights}
          </span>
          <span>{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}
