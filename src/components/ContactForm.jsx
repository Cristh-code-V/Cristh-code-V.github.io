import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { profile } from '../config/profile';
import { trackEvent } from '../lib/analytics';
import { CheckIcon } from './Icons';

const ENDPOINT = profile.formspreeId ? `https://formspree.io/f/${profile.formspreeId}` : null;
const INITIAL = { name: '', email: '', message: '', _gotcha: '' };

// Formulario controlado → POST JSON a Formspree.
// Estados: idle | sending | success | error
export default function ContactForm() {
  const { t, lang } = useLanguage();
  const f = t.contact.form;
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;

    if (!ENDPOINT) {
      setStatus('error');
      setErrorMsg(f.notConfigured);
      return;
    }

    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          _replyto: values.email.trim(),
          _subject: `${f.subject} — ${values.name.trim()}`,
          _gotcha: values._gotcha, // honeypot anti-spam: los humanos lo dejan vacío
          language: lang,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setValues(INITIAL);
      setStatus('success');
      trackEvent('generate_lead', { method: 'contact_form' });
    } catch {
      setStatus('error');
      setErrorMsg(f.error);
    }
  }

  if (status === 'success') {
    return (
      <div className="card flex flex-col items-start justify-center gap-4 p-8" role="status" aria-live="polite">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckIcon className="h-7 w-7" />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-ink">{f.successTitle}</h3>
          <p className="mt-2 max-w-md leading-relaxed text-muted">{f.success}</p>
        </div>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-2 px-4 py-2 text-xs">
          {f.sendAnother}
        </button>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-6" noValidate={false}>
      <h3 className="font-mono text-xs uppercase tracking-wider text-subtle">{f.title}</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={f.name} htmlFor="name">
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={onChange}
            required
            maxLength={100}
            autoComplete="name"
            placeholder={f.namePh}
            disabled={sending}
            className="input"
          />
        </Field>
        <Field label={f.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            required
            maxLength={150}
            autoComplete="email"
            placeholder={f.emailPh}
            disabled={sending}
            className="input"
          />
        </Field>
      </div>

      <Field label={f.message} htmlFor="message">
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={onChange}
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder={f.messagePh}
          disabled={sending}
          className="input resize-y"
        />
      </Field>

      {/* Honeypot: invisible para personas, los bots lo rellenan */}
      <input
        type="text"
        name="_gotcha"
        value={values._gotcha}
        onChange={onChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={sending} aria-busy={sending} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
          {sending && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden />
          )}
          {sending ? f.sending : f.send}
        </button>
        <p className="text-sm" role="alert" aria-live="assertive">
          {status === 'error' && <span className="text-red-600 dark:text-red-400">{errorMsg}</span>}
        </p>
      </div>
    </form>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block font-mono text-xs text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
