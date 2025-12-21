export default function NotFoundSection({ username }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-bg-primary">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-20 h-20 mx-auto rounded-full bg-bg-card border border-[#3f4147] flex items-center justify-center">
          <svg
            className="w-10 h-10 text-text-muted"
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
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
            Genome Not Found
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            No genome found for username "{username}"
          </p>
        </div>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#c4d82e] text-bg-primary font-semibold rounded-lg hover:bg-accent-hover transition-all hover:scale-105 shadow-lg"
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
