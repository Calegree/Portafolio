"use client"; // Necesario para usar hooks

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { Home, User, FolderKanban, Mail, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About Me", href: "#about", icon: User },
  { name: "Stack and Tools", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="flex flex-col items-center p-8">
        <Image
          src="/path/to/your/photo.jpg" // Reemplaza con la ruta a tu foto
          alt="Tu Nombre"
          width={128}
          height={128}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold mt-4">Carlos Iturra</h1>
      </div>
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="flex items-center p-2 text-lg text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <link.icon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">{t(link.name)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-around items-center">
            <button onClick={toggleLanguage} className="font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              {i18n.language.toUpperCase()}
            </button>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'light' ? <Moon className="text-gray-600" /> : <Sun className="text-yellow-400" />}
            </button>
        </div>
      </div>
    </aside>
  );
}