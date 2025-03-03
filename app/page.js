import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/Achievement";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212] min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-24 py-4 px-12">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
        <Footer />
    </main>
  );
}
