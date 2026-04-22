import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      <footer className="py-12 border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[12px] text-[var(--muted)]">
          <span>© {new Date().getFullYear()} Hussain Al-Shammari</span>
        </div>
      </footer>
    </div>
  );
}
