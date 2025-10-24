# 🧬 Genome Viewer

**Genome Viewer** is a web application that allows users to **search and visualize professional genome** from the [Torre](https://torre.ai) platform.
It combines clean UI, modular architecture, and real API data to create an interactive portfolio-ready experience.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/docs/app)
- **Frontend:** [React 19](https://react.dev/) + [Tailwind CSS](https://tailwindcss.com/)
- **Language:** JavaScript
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🌐 Torre Endpoints Used

1. **🔍 Search Entities (People & Organizations)**

   ```
   POST https://torre.ai/api/entities/_searchStream
   ```

   Used to search for people by name or keyword.
   Returns basic profile data such as `publicId`, which is used to access each genome.

2. **🧬 Get Genome (Bio by Username)**

   ```
   GET https://torre.bio/api/bios/{username}
   ```

   Retrieves the full professional genome of a person:
   personal info, summary, experience, education, strengths, and languages.

---

## 🧭 Application Flow

1. The user enters a **user name** on the home page (`/`).
2. The app uses the **\_searchStream endpoint** to fetch matching people.
3. When the user selects a profile, it navigates to
   **`/genome/[username]`**.
4. The genome page fetches complete data from
   **`/bios/{username}`** using `getGenomeBio()` inside `/lib`.
5. The information is rendered in separate, reusable components:

   - `PersonSection` → photo, name, headline, summary
   - `ExperienceSection` → jobs and professional history
   - `EducationSection` → education details
   - `LanguagesSection` → spoken languages

---

## ⚙️ Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/genome-viewer.git

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

**Author:** Sebastián Osorio Carrasquilla
