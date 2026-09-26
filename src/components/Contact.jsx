import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../config/profile';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';
import { LinkedInIcon } from './Icons';

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  const channels = [
    {
      label: 'LinkedIn',
      value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
      href: profile.linkedin,
      Icon: LinkedInIcon,
      external: true,
    },
  ];

  return (
    <section id="contact" className="container-x py-24">
      <SectionHeader kicker={c.kicker} title={c.title} subtitle={c.subtitle} />

      <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.4fr]">
        {/* Canales directos */}
        <div className="card p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-subtle">{c.direct}</h3>
          <ul className="mt-4 space-y-2">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-4 rounded-lg border border-transparent p-3 transition-colors hover:border-line hover:bg-raised"
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-ink">{label}</span>
                    <span className="block truncate font-mono text-xs text-muted">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
