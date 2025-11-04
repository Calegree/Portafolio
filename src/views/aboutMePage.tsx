"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { FiMail, FiPhone, FiLinkedin, FiTarget, FiRss } from 'react-icons/fi';
import { 
  SiJavascript, SiTypescript, SiPython, SiPhp, SiNestjs, SiSpringboot, 
  SiVuedotjs, SiReact, SiLaravel, SiFlask, SiArduino, SiDocker, SiRabbitmq, 
  SiMinio, SiGithubactions, SiScikitlearn, SiTensorflow, SiNumpy, 
  SiMlflow, SiLinux, SiGit, SiPostman, SiSwagger, SiTrello, 
  SiPostgresql, SiMysql, SiOracle
} from 'react-icons/si';

const skills = {
  "Lenguajes de Programación": [
    { name: "JavaScript", icon: <SiJavascript />, colorClass: "#F7DF1E" }, { name: "TypeScript", icon: <SiTypescript />, colorClass: "#3178C6" },
    { name: "Python", icon: <SiPython />, colorClass: "#3776AB" }, { name: "Java", icon: <SiOracle />, colorClass: "#F89820" }, { name: "PHP", icon: <SiPhp />, colorClass: "#777BB4" }
  ],
  "Frameworks & Librerías": [
    { name: "NestJS", icon: <SiNestjs />, colorClass: "#E0234E" }, { name: "Spring Boot", icon: <SiSpringboot />, colorClass: "#6DB33F" },
    { name: "Vue.js", icon: <SiVuedotjs />, colorClass: "#4FC08D" }, { name: "React Native", icon: <SiReact />, colorClass: "#61DAFB" },
    { name: "Laravel", icon: <SiLaravel />, colorClass: "#FF2D20" }, { name: "Flask", icon: <SiFlask />, colorClass: "#000000" },
    { name: "Arduino Core", icon: <SiArduino />, colorClass: "#00979D" }
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: <SiDocker />, colorClass: "#2496ED" }, { name: "Docker Compose", icon: <SiDocker />, colorClass: "#2496ED" },
    { name: "RabbitMQ", icon: <SiRabbitmq />, colorClass: "#FF6600" }, { name: "MinIO S3", icon: <SiMinio />, colorClass: "#C72C3A" },
    { name: "GitHub Actions", icon: <SiGithubactions />, colorClass: "#2088FF" }
  ],
  "Machine Learning": [
    { name: "scikit-learn", icon: <SiScikitlearn />, colorClass: "#F7931E" }, { name: "TensorFlow", icon: <SiTensorflow />, colorClass: "#FF6F00" },
    { name: "NumPy", icon: <SiNumpy />, colorClass: "#013243" }, { name: "MLflow", icon: <SiMlflow />, colorClass: "#0194E2" }
  ],
  "Herramientas": [
    { name: "Linux", icon: <SiLinux />, colorClass: "#FCC624" }, { name: "Git", icon: <SiGit />, colorClass: "#F05032" },
    { name: "Postman", icon: <SiPostman />, colorClass: "#FF6C37" }, { name: "Swagger", icon: <SiSwagger />, colorClass: "#85EA2D" }, { name: "Trello", icon: <SiTrello />, colorClass: "#0079BF" },
    { name: "PostgreSQL", icon: <SiPostgresql />, colorClass: "#4169E1" }, { name: "MySQL", icon: <SiMysql />, colorClass: "#4479A1" },
    { name: "UML", icon: null, colorClass: "" }, { name: "C4", icon: null, colorClass: "" }
  ],
};

const languages = ["Español (Nativo)", "Inglés (Intermedio)"];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-dark-cyan">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-left text-gray-900 dark:text-white">&lt;{t('aboutTitle', 'Sobre Mí')}/&gt;</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              Soy Carlos Fernando Iturra Bravo, Ingeniero en Computación e Informática con experiencia en desarrollo Full Stack, Machine Learning y DevOps.
            </p>
            <p>
              Me apasiona crear soluciones escalables y eficientes que integren modelos de inteligencia artificial con aplicaciones web y móviles. Cuento con experiencia en diseño de arquitecturas backend, integración de APIs, despliegue en entornos productivos y automatización de flujos CI/CD.
            </p>
            <p>
              He participado en proyectos académicos y de investigación, desarrollando modelos de clasificación de imágenes, APIs en Flask y aplicaciones frontend en Vue.js y React Native. Además, disfruto colaborar en equipos multidisciplinarios, documentar procesos y compartir conocimientos.
            </p>
            <div className="pt-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">⚙️ {t('aboutSkillsTitle', 'Tecnologías y Herramientas')}</h3>
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="mb-4">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {items.map(item => (
                                <span 
                                    key={item.name} 
                                    className="group flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium px-2.5 py-1 rounded transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                                    style={{ '--icon-color': item.colorClass } as React.CSSProperties}
                                >
                                    {item.icon && React.cloneElement(item.icon, { className: "text-current transition-colors duration-300 group-hover:text-[var(--icon-color)]" })}
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
             <div className="pt-4">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('aboutLanguagesTitle', 'Idiomas')}</h3>
                <div className="flex flex-wrap gap-2">
                    {languages.map(lang => (
                        <span key={lang} className="bg-gray-200 dark:bg-gray-700 text-sm font-medium px-2.5 py-0.5 rounded">
                            {lang}
                        </span>
                    ))}
                </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-3">
                        <FiTarget className="text-xl text-gray-500 dark:text-gray-400" />
                        <span><strong>Postulante a:</strong> Full Stack / ML / DevOps</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <FiMail className="text-xl text-gray-500 dark:text-gray-400" />
                        <a href="mailto:c.iturra07@ufromail.cl" className="hover:underline">c.iturra07@ufromail.cl</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <FiPhone className="text-xl text-gray-500 dark:text-gray-400" />
                        <span>+56 9 3773 8792</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <FiLinkedin className="text-xl text-gray-500 dark:text-gray-400" />
                        <a href="https://www.linkedin.com/in/carlos-iturra-bravo/" target="_blank" rel="noopener noreferrer" className="hover:underline">Carlos Iturra Bravo</a>
                    </li>
                     <li className="flex items-center gap-3">
                        <FiRss className="text-xl text-gray-500 dark:text-gray-400" />
                        <span><strong>Disponibilidad:</strong> Inmediata</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}