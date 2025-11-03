import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            href="#home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              width={32}
              height={32}
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Mi Portafolio
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="mailto:tu-email@ejemplo.com"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              tu-email@ejemplo.com
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Tecnologías
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}