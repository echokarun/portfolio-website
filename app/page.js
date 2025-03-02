import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212] min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-24 py-4 px-12">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
