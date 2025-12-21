export default function BackButton() {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-2 text-text-secondary hover:text-[#c4d82e] transition-colors mb-4 group"
    >
      <svg
        className="w-5 h-5 transition-transform group-hover:-translate-x-1"
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
      <span className="font-medium text-sm md:text-base">Back to Search</span>
    </a>
  );
}
