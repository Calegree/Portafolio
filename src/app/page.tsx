import Image from "next/image";
import Navbar from "@/components/navbar";
import AboutMePage from "@/views/aboutMePage";
import ContactPage from "@/views/contact";
import ProjectsPage from "@/views/projects";
import StackPage from "@/views/stackPage";
import Sidebar from "@/components/sidebar";

// Componente para la sección de inicio
function HomePage() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="absolute top-20 right-16">
         <a href="#contact" className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700 dark:bg-blue-600 dark:hover:bg-blue-700">
            Work with me
         </a>
      </div>
      <div className="max-w-4xl w-full px-8">
        <div className="font-mono text-4xl md:text-6xl font-bold space-y-4 text-gray-900 dark:text-gray-100">
          <div className="flex items-baseline gap-4">
            <span className="text-lg md:text-xl text-gray-400 dark:text-gray-500">01</span>
            <h1>&lt;Hello, I'm [Tu Nombre]!/&gt;</h1>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg md:text-xl text-gray-400 dark:text-gray-500">02</span>
            <h2>&lt;I design <span className="text-blue-500">^</span> and develop <span className="text-green-500">-&gt;</span></h2>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg md:text-xl text-gray-400 dark:text-gray-500">03</span>
            <h3>&lt;websites./&gt;</h3>
          </div>
        </div>
        <p className="mt-8 ml-12 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          I also design your brand image, logo, and create amazing digital experiences.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen bg-zinc-50 font-sans dark:bg-black text-black dark:text-zinc-50">
      <Sidebar />
      <main className="flex-1 ml-64"> {/* ml-64 para dejar espacio para el sidebar */}
        <HomePage />
        <AboutMePage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </div>
  );
}
