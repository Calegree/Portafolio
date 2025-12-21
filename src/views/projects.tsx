"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

// Datos mínimos de ejemplo. Reemplaza rutas, logos y URLs según necesites.
const projectData = [
  {
    id: "anid",
    images: ["/images/anid-1.png", "/images/anid-2.png", "/images/anid-3.png"],
    companyLogo: "/images/company-anid-logo.png",
    tags: ["TensorFlow", "Flask", "Vue.js"],
    liveUrl: "#",
    codeUrl: "https://github.com/youruser/anid",
  },
  {
    id: "ufroGeoSync",
    images: ["/images/ufro-1.png", "/images/ufro-2.png"],
    companyLogo: "/images/company-ufro-logo.png",
    tags: ["Laravel", "Leaflet", "MySQL"],
    liveUrl: "#",
    codeUrl: "https://github.com/youruser/ufro-geosync",
  },
  {
    id: "ufroJobs",
    images: ["/images/ufrojobs-1.png"],
    companyLogo: "/images/company-ufrojobs-logo.png",
    tags: ["NestJS", "Vue.js", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "https://gitlab.example/yourproject/ufrojobs",
  },
];

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="w-full">
      <div className="relative w-full h-40 md:h-48 lg:h-56 bg-transparent rounded-lg overflow-hidden">
        <img src={images[index]} alt={`slide-${index}`} className="w-full h-full object-cover" />
        {images.length > 1 && (
          <>
            <button onClick={prev} aria-label="prev" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
              ‹
            </button>
            <button onClick={next} aria-label="next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full">
              ›
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 mt-2 justify-center">
          {images.map((src, i) => (
            <button key={src} onClick={() => setIndex(i)} className={`w-12 h-8 overflow-hidden rounded ${i === index ? 'ring-2 ring-indigo-500' : 'opacity-60'}`}>
              <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const { t } = useTranslation();

  const projects = projectData.map((p) => ({
    ...p,
    title: t(`${p.id}ProjectTitle`),
    description: t(`${p.id}ProjectDesc`),
  }));

  return (
    <section id="projects" className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-dark-cyan">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-left text-gray-900 dark:text-white">&lt;{t('projectsTitle')}/&gt;</h2>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <article key={project.id} className="flex flex-col md:flex-row bg-white dark:bg-dark-cyan border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md">
              <div className="md:w-1/2 p-4">
                <ImageCarousel images={project.images} />
              </div>

              <div className="md:w-1/2 p-6 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">&lt;{project.title}/&gt;</h3>
                    <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-transparent flex items-center justify-center border border-gray-600">
                      <img src={project.companyLogo} alt={`${project.title} logo`} className="w-full h-full object-contain p-1" />
                    </div>
                  </div>

                  <p className="mt-3 text-gray-700 dark:text-gray-300">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-200 dark:bg-gray-800 text-sm px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">{t('projectCodeLink')}</a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded text-gray-700 dark:text-gray-200">{t('projectDemoLink')}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}