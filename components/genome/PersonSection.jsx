export default function PersonSection({ person }) {
  return (
    <section className="bg-bg-card rounded-xl border border-[#3f4147] overflow-hidden">
      <div className="p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="shrink-0">
            <img
              src={person.picture || "/placeholder.svg"}
              alt={person.name}
              className="w-28 h-28 md:w-36 md:h-36 rounded-xl object-cover ring-2 ring-[#3f4147]"
            />
          </div>
          <div className="flex-1 text-center md:text-left space-y-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                {person.name}
              </h1>
              <p className="text-base md:text-lg text-text-secondary font-medium">
                {person.professionalHeadline}
              </p>
            </div>
            {person.location?.name && (
              <div className="flex items-center justify-center md:justify-start gap-2 text-text-muted">
                <svg
                  className="w-4 h-4"
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
                <span className="text-sm">{person.location.name}</span>
              </div>
            )}
            {person.summaryOfBio && (
              <p className="text-text-secondary leading-relaxed pt-3 max-w-3xl text-sm md:text-base">
                {person.summaryOfBio}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
