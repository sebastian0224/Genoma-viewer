export default function SearchResults({ results, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-8 p-6 bg-white rounded-2xl border border-[var(--color-border)] shadow-sm">
        <div className="text-center space-y-4">
          <svg
            className="animate-spin w-12 h-12 mx-auto text-[var(--color-primary)]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="text-[var(--color-text-secondary)]">Searching...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-8 p-6 bg-white rounded-2xl border border-red-200 shadow-sm">
        <div className="text-center space-y-4">
          <svg
            className="w-12 h-12 mx-auto text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="mb-4">
        <p className="text-[var(--color-text-muted)] text-sm">
          {results.length}{" "}
          {results.length === 1
            ? "resultado encontrado"
            : "resultados encontrados"}
        </p>
      </div>
      <div className="space-y-4">
        {results.map((person) => (
          <div
            key={person.username}
            className="p-6 bg-white rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <img
                src={person.imageUrl}
                alt={person.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    {person.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    @{person.username}
                  </p>
                </div>

                {person.professionalHeadline && (
                  <p className="text-[var(--color-text-secondary)]">
                    {person.professionalHeadline}
                  </p>
                )}

                {person.verified && (
                  <div className="flex items-center gap-1 text-sm text-blue-500">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Verified</span>
                  </div>
                )}

                <div className="pt-2">
                  <a
                    href={`/${person.username}`}
                    className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors font-medium"
                  >
                    Ver detalles
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
