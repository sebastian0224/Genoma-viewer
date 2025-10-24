export default function LanguagesSection({ languages }) {
  if (!languages?.length) return null;
  return (
    <section className="bg-bg-card rounded-xl border border-[#3f4147] p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#c4d82e]/10 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-[#c4d82e]"
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
        <h2 className="text-lg md:text-xl font-bold text-text-primary">
          Languages
        </h2>
      </div>
      <div className="space-y-3">
        {languages.map((lang, i) => (
          <div key={i} className="flex items-center justify-between py-2">
            <span className="font-medium text-text-primary text-sm md:text-base">
              {lang.language}
            </span>
            <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-bg-secondary text-text-secondary border border-[#3f4147]">
              {lang.fluency}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
