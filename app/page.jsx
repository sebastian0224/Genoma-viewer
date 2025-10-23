import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import SearchFlow from "../components/home/SearchFlow";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <SearchFlow />
      </main>
      <Footer />
    </div>
  );
}
