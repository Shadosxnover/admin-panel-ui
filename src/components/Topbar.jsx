import React from 'react';
import { MenuIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';

const Topbar = ({ darkMode, setDarkMode, sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-light dark:bg-dark-surface shadow-elevation transition-smooth">
      <div className="flex items-center">
        <button
          className="text-secondary dark:text-light focus:outline-none lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="flex items-center">
        <button
          className="flex items-center focus:outline-none"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6 text-primary" />
          ) : (
            <MoonIcon className="h-6 w-6 text-secondary" />
          )}
        </button>
        <div className="relative ml-4">
          <span className="block h-10 w-10 rounded-full overflow-hidden shadow-elevation">
            <img
              className="h-full w-full object-cover"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Your avatar"
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

