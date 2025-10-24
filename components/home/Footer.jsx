export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 border-t border-[#3f4147] bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base text-text-secondary font-medium">
              Built with Next.js
            </p>
            <p className="text-xs sm:text-sm text-text-muted mt-1">
              Data powered by Torre API
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#c4d82e]"></div>
            <span className="text-xs sm:text-sm text-text-muted">
              © 2025 Genome Viewer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
