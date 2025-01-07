"use client";
import { useState, useEffect } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { Film } from "lucide-react";
import { Search } from "lucide-react";

export const Header = () => {
  const [theme, setTheme] = useState(`light`);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(`dark`, theme === `dark`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === `light` ? `dark` : `light`);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        <Film /> Movie Z
      </h1>

      <div className="flex items-center space-x-4">
        <span
          onClick={toggleDropdown}
          className="p-4 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-400"
        >
          <Search />

          {isOpen && (
            <div className="absolute left-0 z-10 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600 w-screen">
              <h3 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-200">
                Genres
              </h3>
              <p className="mb-4 text-sm text-gray-500 dark:gray-400">
                See lists of movies by genre
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Action", "Animation", "Crime"].map((genre) => (
                  <button
                    key={genre}
                    className="px-2 py-1 text-sm font-medium text-gray-700 border rounded hover:bg-gray-200 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          )}
        </span>

        <button
          onClick={toggleTheme}
          className="p-4 text-gray-900 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-400"
        >
          {theme === `light` ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
};
