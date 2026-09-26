import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { capabilities, complementaryStack } from '../data/skills';
import SectionHeader from './SectionHeader';
import { PlusIcon } from './Icons';

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section id="skills" className="container-x py-24">
      <SectionHeader kicker={s.kicker} title={s.title} subtitle={s.subtitle} />
      <p className="-mt-8 mb-8 font-mono text-xs text-subtle">{s.hint}</p>

      <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c) => (
          <SkillCard key={c.id} capability={c} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-2">
        <span className="mr-2 font-mono text-xs uppercase tracking-wider text-subtle">{s.more}:</span>
        {complementaryStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

// Tarjeta interactiva:
// - En dispositivos con mouse, la aplicación empresarial se revela al pasar el cursor.
// - En táctil o teclado funciona como acordeón (clic / Enter).
function SkillCard({ capability }) {
  const { t } = useLanguage();
  const copy = t.skills.items[capability.id];
  const [open, setOpen] = useState(false);
  const panelId = `skill-${capability.id}`;

  return (
    <article
      className={`card group relative overflow-hidden transition-all duration-300 hover:border-accent/60 ${
        open ? 'border-accent/60' : ''
      }`}
    >
      {/* Línea de acento superior */}
      <span
        aria-hidden
        className={`absolute inset-x-0 top-0 h-0.5 origin-left bg-accent transition-transform duration-300 [@media(hover:hover)]:group-hover:scale-x-100 ${
          open ? 'scale-x-100' : 'scale-x-0'
        }`}
      />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start gap-3 p-6 pb-4 text-left"
      >
        <span className="flex h-9 min-w-9 items-center justify-center rounded-md border border-line bg-canvas px-2 font-mono text-xs text-accent">
          {capability.icon}
        </span>
        <span className="flex-1 pt-1.5 font-semibold text-ink">{copy.title}</span>
        <PlusIcon
          className={`mt-1.5 h-4 w-4 shrink-0 text-subtle transition-transform duration-300 [@media(hover:hover)]:group-hover:rotate-45 [@media(hover:hover)]:group-hover:text-accent ${
            open ? 'rotate-45 text-accent' : ''
          }`}
        />
      </button>

      <ul className="flex flex-wrap gap-1.5 px-6">
        {capability.tech.map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>

      {/* Panel revelable (animación de altura con grid 0fr → 1fr) */}
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out [@media(hover:hover)]:group-hover:grid-rows-[1fr] ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        {/* `invisible` evita que el teclado enfoque enlaces ocultos */}
        <div className={`overflow-hidden [@media(hover:hover)]:group-hover:visible ${open ? 'visible' : 'invisible'}`}>
          <div className="mx-6 mt-4 border-t border-line pt-4">
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{t.skills.application}</p>
            <p className="mt-2 text-sm leading-relaxed text-body">{copy.description}</p>
            <p className="mt-3 font-mono text-[11px] text-subtle">
              {t.skills.usedIn}:{' '}
              {capability.usedIn.map((id, i) => (
                <span key={id}>
                  <a href="#projects" className="text-muted underline decoration-line-strong underline-offset-2 hover:text-accent">
                    {t.projects.items[id].title}
                  </a>
                  {i < capability.usedIn.length - 1 && ' · '}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="h-6" />
    </article>
  );
}
