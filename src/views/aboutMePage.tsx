const technologies = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
  "PostgreSQL", "MongoDB", "Docker", "Git", "Tailwind CSS", "REST APIs",
  "GraphQL", "AWS", "Vercel"
];

export default function AboutMePage() {
  return (
    <section id="about" className="w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-gray-800 flex items-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-left">&lt;About Me/&gt;</h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
          I'm a passionate Full Stack Developer with a love for creating beautiful, functional, and user-friendly websites and applications. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
        </p>

        <h3 className="text-3xl font-bold mb-6 text-left">Technologies & Tools</h3>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-md font-medium px-4 py-2 rounded-md shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}