import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Archivos de traducción
const resources = {
  en: {
    translation: {
      // --- Sidebar Texts ---
      "Home": "Home",
      "Projects": "Projects",
      "About Me": "About Me",
      "Contact": "Contact",

      // --- HomePage Texts ---
      "workWithMe": "Work with me",
      "greeting": "Hello, I'm Carlos Iturra!",
      "mainTitle_part1": "I design and deploy scalable solutions",
      "intelligentSystems": "intelligent systems.",
      "subheading":
        "I integrate AI, DevOps, and web development to create scalable, automated, and innovative technological experiences.",

      // --- Projects Page Texts ---
      "projectsTitle": "Projects",
      "projectCodeLink": "Code",
      "projectDemoLink": "Demo",

      // --- Project Details ---
      "anidProjectTitle": "ANID Project: Fungi Recognition",
      "anidProjectDesc":
        "Research and development of an AI-based system for the recognition of Chilean fungi. The project included dataset creation, model training with TensorFlow and scikit-learn, and the deployment of a Flask API integrated with Vue.js and React Native applications. Responsibilities also involved performance evaluation, model documentation, and version control using MLflow.",

      "ufroGeoSyncProjectTitle": "Ufro GeoSync",
      "ufroGeoSyncProjectDesc":
        "Full-stack web application developed in Laravel for the georeferencing of network devices (access points, switch racks, routers, and others) at the University of La Frontera. Integrated with OpenStreetMap and Leaflet, it includes Garmin GPS data import, institutional server deployment, and user documentation and training for administrative staff.",

      "ufroJobsProjectTitle": "UFRO Job Board",
      "ufroJobsProjectDesc":
        "University employment platform designed to connect students with companies. Built with an event-driven architecture, it features a Vue.js single-page application and a NestJS RESTful API. The project includes company registration workflows, job posting management, and an administrative approval system."
    }
  },
  es: {
    translation: {
      // --- Textos del Sidebar ---
      "Home": "Inicio",
      "Projects": "Proyectos",
      "About Me": "Sobre Mí",
      "Contact": "Contacto",

      // --- Textos de HomePage ---
      "workWithMe": "Trabaja conmigo",
      "greeting": "Hola, soy Carlos Iturra!",
      "mainTitle_part1": "Diseño y despliego soluciones escalables",
      "intelligentSystems": "sistemas inteligentes.",
      "subheading":
        "Integro IA, DevOps y desarrollo web para crear experiencias tecnológicas escalables, automatizadas e innovadoras.",

      // --- Textos de la Página de Proyectos ---
      "projectsTitle": "Proyectos",
      "projectCodeLink": "Código",
      "projectDemoLink": "Demo",

      // --- Detalles de los Proyectos ---
      "anidProjectTitle": "Proyecto ANID: Reconocimiento de Hongos",
      "anidProjectDesc":
        "Investigación y desarrollo de un sistema de inteligencia artificial para el reconocimiento de hongos chilenos. Incluyó la creación de un dataset propio, entrenamiento de modelos con TensorFlow y scikit-learn, y el despliegue de una API en Flask integrada con aplicaciones en Vue.js y React Native. También se realizaron evaluaciones de desempeño, documentación y versionado de modelos mediante MLflow.",

      "ufroGeoSyncProjectTitle": "Ufro GeoSync",
      "ufroGeoSyncProjectDesc":
        "Aplicación web full stack desarrollada en Laravel para la georreferenciación de dispositivos de red (access points, racks de switches, routers, entre otros) de la Universidad de La Frontera. Integrada con OpenStreetMap y Leaflet, incorpora importación de datos desde GPS Garmin, despliegue en servidores institucionales y documentación técnica con capacitación para el personal administrativo.",

      "ufroJobsProjectTitle": "Bolsa de Trabajo UFRO",
      "ufroJobsProjectDesc":
        "Plataforma laboral universitaria diseñada para conectar estudiantes con empresas. Construida bajo una arquitectura guiada por eventos, incluye una aplicación SPA en Vue.js y una API RESTful en NestJS. El sistema permite el registro de empresas, publicación de ofertas laborales y gestión de aprobaciones por parte del equipo administrativo."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
