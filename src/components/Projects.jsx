import { useLanguage } from '../i18n/LanguageContext';
import { projects } from '../data/projects';
import { profile } from '../config/profile';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { GlobeIcon } from './Icons';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="container-x py-24">
      <SectionHeader kicker={t.projects.kicker} title={t.projects.title} subtitle={t.projects.subtitle}>
        {/* Nota de alcance multi-tenant / multi-país */}
        <div className="mt-5 flex items-start gap-3 rounded-lg border border-accent/30 bg-accent/5 p-4">
          <GlobeIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <div>
            <p className="text-sm text-body">{t.projects.multitenant}</p>
            <p className="mt-2 flex flex-wrap gap-1.5">
              {profile.countries.map((c) => (
                <span key={c} className="tag" title={t.countries[c]}>
                  {c}
                </span>
              ))}
            </p>
          </div>
        </div>
      </SectionHeader>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
