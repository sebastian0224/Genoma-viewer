export default function ExperienceSection({ experiences }) {
  const jobs = experiences?.filter((exp) => exp.category === "jobs");

  if (!jobs?.length) return null;

  return (
    <section className="lg:col-span-2 bg-bg-card rounded-xl border border-[#3f4147] p-6 md:p-8">
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
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-text-primary">
          Work Experience
        </h2>
      </div>

      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div
            key={job.id}
            className={`pb-6 ${
              index !== jobs.length - 1 ? "border-b border-[#3f4147]" : ""
            }`}
          >
            <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2">
              {job.name}
            </h3>
            <p className="text-xs md:text-sm text-text-muted mb-3">
              {job.fromMonth} {job.fromYear}
              {job.toMonth && job.toYear && ` - ${job.toMonth} ${job.toYear}`}
            </p>
            {job.additionalInfo && (
              <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                {job.additionalInfo}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
