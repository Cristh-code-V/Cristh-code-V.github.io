import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../config/profile';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { CloseIcon, MenuIcon } from './Icons';

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors ${
        scrolled || open ? 'border-line bg-canvas/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-mono text-sm font-bold text-ink">
          <span className="text-accent">&gt;</span> {profile.shortName.toLowerCase().replace(' ', '.')}
          <span className="ml-0.5 inline-block w-2 animate-blink text-accent">_</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-mono text-sm text-muted transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 border-l border-line pl-6">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn h-9 w-9"
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container-x flex flex-col gap-1 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 font-mono text-sm text-body hover:bg-raised hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitcher className="mt-2 self-start" />
        </div>
      )}
    </nav>
  );
}
