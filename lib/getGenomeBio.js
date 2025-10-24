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
export async function searchPeople(query) {
  const res = await fetch("https://torre.ai/api/entities/_searchStream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "genome-viewer",
    },
    body: JSON.stringify({
      query,
      identityType: "person",
      limit: 10,
      meta: true,
      excludeContacts: true,
    }),
  });

  if (!res.ok) throw new Error("Error searching people");

  const text = await res.text();

  const results = text
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch (e) {
        console.error("Error parsing line:", line);
        return null;
      }
    })
    .filter((item) => item !== null);

  return results;
}
