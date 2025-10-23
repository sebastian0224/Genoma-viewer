import SearchSection from "../components/SearchSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--color-border)] shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></div>
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">
              Powered by Torre API
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] leading-tight">
              Genome Viewer
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Explore professional genomes by username from Torre. Discover
              experiences, education, skills, and more.
            </p>
          </div>

          {/* Search Section */}
          <div className="pt-4">
            <SearchSection />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <div className="p-6 rounded-xl bg-white border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)] bg-opacity-10 flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                Professional Profiles
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                View detailed professional information and career history
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)] bg-opacity-10 flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-[var(--color-accent)]"
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
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                Experience & Education
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Explore work history and educational background
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)] bg-opacity-10 flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-[var(--color-primary)]"
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
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                Languages & Skills
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Discover language proficiency and professional skills
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            Built with Next.js • Data from Torre API
          </p>
        </div>
      </footer>
    </main>
  );
}
