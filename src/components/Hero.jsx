import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../config/profile';
import { trackEvent } from '../lib/analytics';
import { ArrowRightIcon, DownloadIcon, GlobeIcon, LinkedInIcon } from './Icons';

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  const quickLinks = [
    { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon, external: true },  ];

  return (
    <section id="top" className="container-x relative grid min-h-screen items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.35fr_1fr]">
      <div className="animate-fadeUp">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-body">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {h.badge}
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 font-mono text-base text-accent sm:text-lg">{h.role}</p>

        <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-ink">{h.subtitle}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{h.description}</p>

        {/* Alcance multi-tenant / multi-país */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-subtle">
            <GlobeIcon className="h-4 w-4 text-accent" />
            {h.panel.architectureValue}
          </span>
          {profile.countries.map((c) => (
            <span key={c} className="tag" title={t.countries[c]}>
              <span className="text-accent">{c}</span> {t.countries[c]}
            </span>
          ))}
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-subtle">{h.academic}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            {h.ctaProjects}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          {/* __CV_AVAILABLE__ se define en vite.config.js según exista el PDF */}
          {profile.showCv && __CV_AVAILABLE__ && (
            <a href={profile.cvUrl} download onClick={() => trackEvent('cv_download')} className="btn-ghost">
              <DownloadIcon className="h-4 w-4" />
              {h.ctaCv}
            </a>
          )}
          {quickLinks.map(({ href, label, Icon, external }) => (
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
      </div>

      {/* Panel estilo terminal */}
      <aside className="card animate-fadeUp overflow-hidden font-mono text-sm [animation-delay:150ms]">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="ml-3 text-xs text-subtle">profile.json</span>
        </div>
        <div className="space-y-4 p-5 leading-relaxed">
          <PanelRow k={h.panel.focus} values={h.panel.focusValue} />
          <PanelRow k={h.panel.domains} values={h.panel.domainsValue} />
          <PanelValue k={h.panel.architecture} v={h.panel.architectureValue} />
          <PanelRow k={h.panel.regions} values={profile.countries.map((c) => t.countries[c])} inline />
          <PanelValue k={h.panel.education} v={h.panel.educationValue} />
          <PanelValue k="status" v={h.available} accent />
        </div>
      </aside>
    </section>
  );
}

function Key({ k }) {
  return (
    <>
      <span className="text-subtle">"{k}"</span>
      <span className="text-subtle/70">: </span>
    </>
  );
}

function PanelValue({ k, v, accent = false }) {
  return (
    <div>
      <Key k={k} />
      <span className={accent ? 'text-accent' : 'text-ink'}>"{v}"</span>
    </div>
  );
}

function PanelRow({ k, values, inline = false }) {
  if (inline) {
    return (
      <div>
        <Key k={k} />
        <span className="text-subtle/70">[</span>
        {values.map((v, i) => (
          <span key={v} className="text-ink">
            "{v}"{i < values.length - 1 && <span className="text-subtle/70">, </span>}
          </span>
        ))}
        <span className="text-subtle/70">]</span>
      </div>
    );
  }
  return (
    <div>
      <Key k={k} />
      <span className="text-subtle/70">[</span>
      <ul className="pl-4">
        {values.map((v, i) => (
          <li key={v} className="text-ink">
            "{v}"{i < values.length - 1 && <span className="text-subtle/70">,</span>}
          </li>
        ))}
      </ul>
      <span className="text-subtle/70">]</span>
    </div>
  );
}
