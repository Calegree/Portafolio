// Datos de ejemplo para los proyectos
const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    image: "/path/to/project1.png", // Reemplaza con la imagen de tu proyecto
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "/path/to/project2.png", // Reemplaza con la imagen de tu proyecto
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Portfolio CMS",
    description: "Content management system for creative professionals to showcase their work.",
    image: "/path/to/project3.png", // Reemplaza con la imagen de tu proyecto
    tags: ["Next.js", "Sanity", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-black">
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