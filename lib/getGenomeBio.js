export default async function getGenomeBio(username) {
  try {
    const res = await fetch(`https://torre.bio/api/bios/${username}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching genome:", error);
    return null;
  }
}
