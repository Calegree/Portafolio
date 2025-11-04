"use client";

import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center bg-white dark:bg-dark-cyan">
      <div className="absolute top-20 right-16">
         <a href="#contact" className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700 dark:bg-blue-600 dark:hover:bg-blue-700">
            {t('workWithMe')}
         </a>
      </div>
      <div className="max-w-4xl w-full px-8">
        <div className="font-mono text-4xl md:text-6xl font-bold space-y-4 text-gray-900 dark:text-gray-100">
          <div className="flex items-baseline gap-4">
            <span className="text-lg md:text-xl text-gray-400 dark:text-gray-500">01</span>
            <h1>&lt;{t('greeting')}/&gt;</h1>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg md:text-xl text-gray-400 dark:text-gray-500">02</span>
            <h2>
              {t('mainTitle_part1')}
            </h2>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg md:text-xl text-gray-400 dark:text-gray-500">03</span>
            <h3>
              &lt;{t('intelligentSystems')}/&gt;
              <span className="ml-2 text-green-500">-&gt;</span>
            </h3>
          </div>
        </div>
        <p className="mt-8 ml-12 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          {t('subheading')}
        </p>
      </div>
    </section>
  );
}