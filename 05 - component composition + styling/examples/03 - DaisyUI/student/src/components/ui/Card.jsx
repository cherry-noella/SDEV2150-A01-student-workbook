export default function Card({ title, children }) {
  return (
    <section className="h-full rounded border border-base-300 bg-base-100 shadow-sm">
      <header className="flex items-center justify-between border-b border-base-300 px-4 py-3">
        <h2 className="leading-relaxed font-bold text-sm text-base-content">{title}</h2>
      </header>
      <div>
        {children}
      </div>
    </section>
  );
}