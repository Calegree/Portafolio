import Image from "next/image";
import Navbar from "@/components/navbar";
import AboutMePage from "@/views/aboutMePage";
import ContactPage from "@/views/contact";
import ProjectsPage from "@/views/projects";
import Sidebar from "@/components/sidebar";
import HomePage from "@/views/homePage";
import { I18nProvider } from "@/components/i18n-provider";

export default function Home() {
  return (
    <I18nProvider>
      <div className="relative flex min-h-screen bg-zinc-50 font-sans dark:bg-black text-black dark:text-zinc-50">
        <Sidebar />
        <main className="flex-1 ml-64">
          <HomePage />
          <AboutMePage />
          <ProjectsPage />
          <ContactPage />
        </main>
      </div>
    </I18nProvider>
  );
}
