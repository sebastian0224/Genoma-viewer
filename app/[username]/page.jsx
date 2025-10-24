import getGenomeBio from "../../lib/getGenomeBio";
import PersonSection from "../../components/genome/PersonSection";
import StrengthsSection from "../../components/genome/StrengthsSection";
import ExperienceSection from "../../components/genome/ExperienceSection";
import EducationSection from "../../components/genome/EducationSection";
import LanguagesSection from "../../components/genome/LanguagesSection";
import BackButton from "../../components/genome/BackButton";
import NotFoundSection from "../../components/genome/NotFoundSection";

export default async function GenomePage({ params }) {
  const { username } = await params;
  const genome = await getGenomeBio(username);

  if (!genome) {
    return <NotFoundSection username={username} />;
  }

  const { person, strengths, experiences, education, languages } = genome;

  return (
    <main className="min-h-screen bg-bg-primary py-6 md:py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <BackButton />
        <PersonSection person={person} />

        <StrengthsSection strengths={strengths} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ExperienceSection experiences={experiences} />
          <div className="space-y-6">
            <EducationSection education={education} />
            <LanguagesSection languages={languages} />
          </div>
        </div>
      </div>
    </main>
  );
}
