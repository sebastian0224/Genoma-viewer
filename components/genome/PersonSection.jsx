export default function PersonSection({ person }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] overflow-hidden">
      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={person.picture || "/placeholder.svg"}
              alt={person.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-md ring-4 ring-[var(--color-border-light)]"
            />
          </div>
          {/* Info */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-2">
                {person.name}
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-medium">
                {person.professionalHeadline}
              </p>
            </div>
            {person.location?.name && (
              <div className="flex items-center justify-center md:justify-start gap-2 text-[var(--color-text-muted)]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{person.location.name}</span>
              </div>
            )}
            {person.summaryOfBio && (
              <p className="text-[var(--color-text-secondary)] leading-relaxed pt-4 max-w-3xl">
                {person.summaryOfBio}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
