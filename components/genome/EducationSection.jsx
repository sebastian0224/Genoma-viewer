export default function EducationSection({ education }) {
  if (!education?.length) return null;
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
        <h2 className="text-lg md:text-xl font-bold text-text-primary">
          Education
        </h2>
      </div>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="space-y-1">
            <h3 className="font-semibold text-text-primary text-sm md:text-base">
              {edu.name}
            </h3>
            {edu.organizations?.[0]?.name && (
              <p className="text-xs md:text-sm text-text-secondary">
                {edu.organizations[0].name}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
