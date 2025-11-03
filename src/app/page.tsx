import Image from "next/image";
import Navbar from "@/components/navbar";
import AboutMePage from "@/views/aboutMePage";
import ContactPage from "@/views/contact";
import ProjectsPage from "@/views/projects";
import StackPage from "@/views/stackPage";

// Componente para la sección de inicio
function HomePage() {
  return (
    <section id="home" className="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Bienvenido a Mi Portafolio</h1>
        <p className="mt-4 text-xl">Desarrollador de Software</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black text-black dark:text-zinc-50">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col items-center">
  
        <AboutMePage />
        <StackPage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </div>
  );
}
