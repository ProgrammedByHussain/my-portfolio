import ParticleBackground from "../components/ParticleBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Hussain Al-Shammari
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
