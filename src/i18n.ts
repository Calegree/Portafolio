import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Archivos de traducción
const resources = {
  en: {
    translation: {
      // --- Textos del Sidebar ---
      "Home": "Home",
      "Projects": "Projects",
      "About Me": "About Me",
      "Contact": "Contact",
      // --- Textos de HomePage ---
      "workWithMe": "Work with me",
      "greeting": "Hello, I'm Carlos Iturra!",
      "mainTitle_part1": "I design and deploy solutions",
      "intelligentSystems": "intelligent systems.",
      "subheading": "I integrate AI, DevOps, and web development to create scalable, automated, and innovative technological experiences."
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
      "mainTitle_part1": "Diseño y despliego soluciones",
      "intelligentSystems": "sistemas inteligentes.",
      "subheading": "Integro IA, DevOps y desarrollo web para crear experiencias tecnológicas escalables, automatizadas e innovadoras."
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