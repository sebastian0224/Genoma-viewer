import getGenomeBio from "../../../lib/getGenomeBio";

export default async function GenomePage({ params }) {
  const { username } = await params;
  const genome = await getGenomeBio(username);

  if (!genome) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-[var(--color-border-light)] flex items-center justify-center">
            <svg
              className="w-10 h-10 text-[var(--color-text-muted)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
            Genome Not Found
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            No genome found for username "{username}"
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors"
          >
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Search
          </a>
        </div>
      </main>
    );
  }

  const { person, experiences, education, languages } = genome;

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors mb-4"
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-medium">Back to Search</span>
        </a>

        {/* PERSON INFO */}
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

        {/* Grid Layout for Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* EXPERIENCE - Takes 2 columns on large screens */}
          {experiences?.length > 0 && (
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

              <div className="space-y-6">
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
          )}

          {/* Sidebar - Takes 1 column */}
          <div className="space-y-6">
            {/* EDUCATION */}
            {education?.length > 0 && (
              <section className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)] bg-opacity-10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[var(--color-accent)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
                    Education
                  </h2>
                </div>

                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id} className="space-y-1">
                      <h3 className="font-semibold text-[var(--color-text-primary)]">
                        {edu.name}
                      </h3>
                      {edu.organizations?.[0]?.name && (
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          {edu.organizations[0].name}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* LANGUAGES */}
            {languages?.length > 0 && (
              <section className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-6">
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
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
                    Languages
                  </h2>
                </div>

                <div className="space-y-3">
                  {languages.map((lang, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2"
                    >
                      <span className="font-medium text-[var(--color-text-primary)]">
                        {lang.language}
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full bg-[var(--color-border-light)] text-[var(--color-text-secondary)]">
                        {lang.fluency}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
