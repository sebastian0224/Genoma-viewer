export default function SearchResults({ results, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-8 p-8 sm:p-12 bg-bg-card rounded-xl border border-[#3f4147] shadow-xl">
        <div className="text-center space-y-4">
          <svg
            className="animate-spin w-12 h-12 sm:w-16 sm:h-16 mx-auto text-[#c4d82e]"
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
          <p className="text-text-secondary text-base sm:text-lg">
            Searching for users...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-8 p-8 sm:p-12 bg-bg-card rounded-xl border border-red-900/50 shadow-xl">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-red-500"
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
          </div>
          <p className="text-red-400 font-medium text-base sm:text-lg">
            {error}
          </p>
        </div>
      </div>
    );
  }

  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-[#3f4147]"></div>
        <p className="text-text-muted text-sm sm:text-base font-medium">
          {results.length}{" "}
          {results.length === 1 ? "result found" : "results found"}
        </p>
        <div className="h-px flex-1 bg-[#3f4147]"></div>
      </div>

      {/* Results grid */}
      <div className="space-y-4 sm:space-y-6">
        {results.map((person) => (
          <div
            key={person.username}
            className="p-4 sm:p-6 lg:p-8 bg-bg-card rounded-xl border border-[#3f4147] hover:border-[#c4d82e] transition-all duration-200 shadow-lg hover:shadow-2xl group"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              {/* Avatar */}
              <div className="shrink-0 mx-auto sm:mx-0">
                <img
                  src={person.imageUrl || "/placeholder.svg"}
                  alt={person.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#3f4147] group-hover:border-[#c4d82e] transition-colors"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left w-full">
                {/* Name and username */}
                <div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                      {person.name}
                    </h3>
                    {person.verified && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/10 rounded-md">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs text-blue-400 font-medium">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-text-muted mt-1">
                    @{person.username}
                  </p>
                </div>

                {/* Professional headline */}
                {person.professionalHeadline && (
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {person.professionalHeadline}
                  </p>
                )}

                {/* View genome button */}
                <div className="pt-2">
                  <a
                    href={`/${person.username}`}
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#c4d82e] text-bg-primary hover:bg-accent-hover transition-all duration-200 font-semibold rounded-lg shadow-md hover:shadow-xl group/btn"
                  >
                    <span className="text-sm sm:text-base">View Genome</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform"
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
