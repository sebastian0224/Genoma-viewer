export default function ExperienceSection({ experiences }) {
  if (!experiences?.length) return null;
  return (
    <section className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] bg-opacity-10 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-[var(--color-primary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Experience
        </h2>
      </div>
      <div>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`pb-6 ${
              index !== experiences.length - 1
                ? "border-b border-[var(--color-border-light)]"
                : ""
            }`}
          >
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
              {exp.name}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-3">
              {exp.fromMonth} {exp.fromYear}
            </p>
            {exp.additionalInfo && (
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed whitespace-pre-line">
                {exp.additionalInfo}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
