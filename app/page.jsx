import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import SearchFlow from "../components/home/SearchFlow";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <SearchFlow />
      </main>
      <Footer />
    </div>
  );
}
