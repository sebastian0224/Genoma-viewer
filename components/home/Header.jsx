export default function Header() {
  return (
    <header className="w-full bg-bg-secondary border-b border-[#3f4147]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight">
              Genome Viewer
            </h1>
            <p className="text-sm sm:text-base text-text-secondary mt-1">
              Explore and visualize genomic information
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c4d82e] animate-pulse"></div>
            <span className="text-xs text-text-muted">Live</span>
          </div>
        </div>
      </div>
    </header>
  );
}
