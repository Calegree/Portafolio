// Datos de ejemplo para los proyectos
const projects = [
  {
    title: "Proyecto ANID: Reconocimiento de Hongos",
    description: "Sistema de IA para el reconocimiento de hongos chilenos. Incluyó la construcción de un dataset, entrenamiento de un modelo con TensorFlow, una API en Flask y despliegue de apps en Vue.js y React Native.",
    image: "/path/to/project1.png", // Reemplaza con la imagen de tu proyecto
    tags: ["TensorFlow", "Flask (Python)", "Vue.js", "React Native", "MLflow", "NumPy", "GitHub Actions"],
    liveUrl: "#",
    codeUrl: "#",
  },
{
  title: "Ufro GeoSync",
  description:
    "Aplicación web desarrollada en Laravel para la georreferenciación de dispositivos de red de la Universidad de La Frontera  (access points, racks de switches, routers, entre otros) . Integrada con OpenStreetMap y Leaflet, incluye importación de datos compatible con GPS Garmin y despliegue en servidores institucionales.",
  image: "/path/to/project2.png", // Reemplaza con la imagen de tu proyecto
  tags: ["Laravel (PHP)", "MySQL", "OpenStreetMap", "Leaflet"],
  liveUrl: "#",
  codeUrl: "#",
},
  {
  title: "Bolsa de Trabajo UFRO",
  description: "Plataforma laboral universitaria para conectar estudiantes y empresas. Se diseñó una arquitectura robusta (monolito modular) y se implementó con una SPA (Vue.js) y una API RESTful (NestJS). Incluye gestión asincrónica de notificaciones con RabbitMQ y almacenamiento de archivos con MinioS3.",
  image: "/path/to/ufro_jobs_dashboard.png", // Sugerencia: Usa una imagen del Dashboard de Administración o del Dashboard de ofertas PWA (Fig 18 o Fig 11).
  tags: ["NestJS (TypeScript)", "Vue.js", "PostgreSQL", "RabbitMQ", "MinioS3", "APK (PWA)"],
  liveUrl: "#",
  codeUrl: "https://gitlab./dci-project/arqsoft-dci/proyectos/1s2025/ufrojobs", // Enlaza al grupo de repositorios
},
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-dark-cyan">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-left">&lt;Projects/&gt;</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-sm font-medium px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-start gap-4">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">Code</a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}