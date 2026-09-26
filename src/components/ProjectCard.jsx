import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CloseIcon, DiagramIcon, GitHubIcon, LockIcon } from './Icons';

const BASE = import.meta.env.BASE_URL;

export default function ProjectCard({ project, index }) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id];
  const [showDiagram, setShowDiagram] = useState(false);

  return (
    <article className="card group flex flex-col p-6 transition-colors hover:border-line-strong sm:p-7">
      {/* Cabecera */}
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-subtle">{String(index + 1).padStart(2, '0')}</p>
          <h3 className="mt-1 text-2xl font-bold tracking-tight text-ink">{copy.title}</h3>
          <p className="mt-1 text-sm text-muted">{copy.tagline}</p>
        </div>
        {project.featured && (
          <span className="shrink-0 rounded border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
            {t.projects.featured}
          </span>
        )}
      </header>

      {/* Problema */}
      <p className="mt-5 border-l-2 border-line-strong pl-3 text-sm italic text-muted">
        <span className="not-italic font-mono text-xs uppercase tracking-wider text-subtle">
          {t.projects.problem}:{' '}
        </span>
        {copy.problem}
      </p>

      {/* 1. Impacto en el Negocio (para Finanzas / RRHH) */}
      <Layer label={t.projects.business} accent>
        {copy.business}
      </Layer>

      {/* 2. Arquitectura Técnica (para CTOs) */}
      <Layer label={t.projects.technical}>{copy.technical}</Layer>

      {/* Stack */}
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.projects.stack}>
        {project.stack.map((s) => (
          <li key={s} className="tag">
            {s}
          </li>
        ))}
      </ul>

      {/* Pie de tarjeta */}
      <footer className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        {project.diagram && (
          <button type="button" onClick={() => setShowDiagram(true)} className="btn-ghost px-3 py-1.5 text-xs">
            <DiagramIcon className="h-4 w-4" />
            {t.projects.viewDiagram}
          </button>
        )}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-3 py-1.5 text-xs"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-subtle">
            <LockIcon className="h-3.5 w-3.5" />
            {t.projects.confidential}
          </span>
        )}
      </footer>

      {showDiagram && (
        <DiagramModal
          src={`${BASE}${project.diagram}`}
          alt={`${t.projects.diagramAlt} ${copy.title}`}
          closeLabel={t.projects.close}
          onClose={() => setShowDiagram(false)}
        />
      )}
    </article>
  );
}

function Layer({ label, accent = false, children }) {
  return (
    <section className="mt-5">
      <h4
        className={`flex items-center gap-2 font-mono text-xs uppercase tracking-wider ${
          accent ? 'text-accent' : 'text-muted'
        }`}
      >
        <span className={`h-px w-4 ${accent ? 'bg-accent' : 'bg-line-strong'}`} />
        {label}
      </h4>
      <p className="mt-2 leading-relaxed text-body">{children}</p>
    </section>
  );
}

// Visor a pantalla completa para diagramas exportados de Excalidraw / Mermaid (.svg / .png)
function DiagramModal({ src, alt, closeLabel, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative max-h-full w-full max-w-5xl overflow-auto rounded-xl border border-line bg-white p-4" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label={closeLabel} className="absolute right-3 top-3 rounded-md bg-slate-900 p-1.5 text-slate-200 hover:text-accent">
          <CloseIcon className="h-5 w-5" />
        </button>
        <img src={src} alt={alt} className="mx-auto h-auto max-w-full" loading="lazy" />
      </div>
    </div>
  );
}
