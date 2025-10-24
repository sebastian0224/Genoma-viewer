"use client";

export default function StrengthsSection({ strengths }) {
  if (!strengths?.length) return null;

  const getProficiencyColor = (proficiency) => {
    const colors = {
      expert: "bg-[#c4d82e]/20 text-[#c4d82e] border border-[#c4d82e]/30",
      proficient:
        "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
      novice: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
      "no-experience-interested":
        "bg-orange-500/20 text-orange-400 border border-orange-500/30",
    };
    return (
      colors[proficiency] ||
      "bg-[#3f4147] text-[#b5bac1] border border-[#3f4147]"
    );
  };

  return (
    <section className="bg-bg-card rounded-xl border border-[#3f4147] p-6 md:p-8">
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
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-text-primary">
          Skills & Strengths
        </h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {strengths.map((strength) => (
          <div
            key={strength.id}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${getProficiencyColor(
              strength.proficiency
            )}`}
          >
            <span className="font-medium text-sm">{strength.name}</span>
            {strength.pin && (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
