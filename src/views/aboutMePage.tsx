"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { FiMail, FiPhone, FiLinkedin, FiTarget, FiRss, FiGlobe } from 'react-icons/fi';

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
Hola! , soy Carlos Fernando Iturra Bravo, Ingeniero en Informática y Técnico Superior en Electricidad y Automatización Industrial.            </p>
            <p>
Cuento con experiencia en desarrollo web Full Stack, creación de aplicaciones móviles, automatización de flujos CI/CD, integración de soluciones IoT, entrenamiento de modelos de Machine Learning, implementación de testing y documentación de procesos de software.            </p>
            <p>
Me apasiona la ciencia y convertir ideas en soluciones reales usando los avances más recientes en tecnología.</p>
            <p>
              Disfruto colaborar en equipos multidisciplinarios, donde distintas perspectivas enriquecen la comprensión de un problema, y valoro profundamente el intercambio de conocimientos.
            </p>
          
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-3">
                        <FiTarget className="text-2xl text-gray-500 dark:text-gray-400" />
                        <span><strong>Postulante a:</strong> Full Stack / MLOps / DevSecOps</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <FiMail className="text-3xl text-gray-500 dark:text-gray-400" /> 
                      
                        <a href="mailto:c.iturra07@ufromail.cl" className="hover:underline">   <strong>Correo electrónico: </strong> cariturra.bravo@gmail.com</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <FiPhone className="text-l text-gray-500 dark:text-gray-400" />
                        <span>   <strong>Teléfono: </strong> +56937738792</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <FiLinkedin className="text-l text-gray-500 dark:text-gray-400" />
                        <a href="https://www.linkedin.com/in/carlos-iturra-bravo/" target="_blank" rel="noopener noreferrer" className="hover:underline">Carlos Iturra Bravo</a>
                    </li>
                     <li className="flex items-center gap-3">
                        <FiRss className="text-xl text-gray-500 dark:text-gray-400" />
                        <span><strong>Disponibilidad: </strong>Inmediata, Remoto</span>
                    </li>
                      <li className="flex items-start gap-3">
                        <FiGlobe className="text-xl mt-1 text-gray-500 dark:text-gray-400" />
                        <div>
                          <strong>Idiomas: </strong>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {languages.map(lang => (
                              <span key={lang} className="bg-gray-200 dark:bg-gray-700 text-sm font-medium px-2.5 py-0.5 rounded">
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}