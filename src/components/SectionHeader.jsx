export default function SectionHeader({ kicker, title, subtitle, children }) {
  return (
    <header className="mb-12 max-w-2xl">
      <p className="font-mono text-sm text-accent">{kicker}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
      {children}
    </header>
  );
}
