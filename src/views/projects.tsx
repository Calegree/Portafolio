"use client"; // <-- 1. Añade esta directiva al inicio del archivo.

import { useTranslation } from "react-i18next";

// 2. Renombra el array a 'projectData' y añade un 'id' para cada proyecto.
const projectData = [
  {
    id: "anid",
    image: "/path/to/project1.png",
    tags: ["TensorFlow", "Flask (Python)", "Vue.js", "React Native", "MLflow", "NumPy", "GitHub Actions"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "ufroGeoSync",
    image: "/path/to/project2.png",
    tags: ["Laravel (PHP)", "MySQL", "OpenStreetMap", "Leaflet"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "ufroJobs",
    image: "/path/to/ufro_jobs_dashboard.png",
    tags: ["NestJS (TypeScript)", "Vue.js", "PostgreSQL", "RabbitMQ", "MinioS3", "APK (PWA)"],
    liveUrl: "#",
    codeUrl: "https://gitlab./dci-project/arqsoft-dci/proyectos/1s2025/ufrojobs",
  },
];

export default function ProjectsPage() {
  const { t } = useTranslation();

  // 3. Usa 'projectData' para crear el nuevo array 'projects' con las traducciones.
  const projects = projectData.map((project) => ({
    ...project,
    title: t(`${project.id}ProjectTitle`),
    description: t(`${project.id}ProjectDesc`),
  }));

  return (
    <section id="projects" className="w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-dark-cyan">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-left text-gray-900 dark:text-white">&lt;{t('projectsTitle')}/&gt;</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">&lt;{project.title}/&gt;</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-sm font-medium px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-start gap-4">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">{t('projectCodeLink')}</a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">{t('projectDemoLink')}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}