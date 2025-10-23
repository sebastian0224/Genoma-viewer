import "./globals.css";

export const metadata = {
  title: "Torre Genome Viewer",
  description: "Visualize professional genomes from Torre profiles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-5xl mx-auto px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
