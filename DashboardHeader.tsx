"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';
import CurrencyToggle from './CurrencyToggle';

export default function DashboardHeader() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${isDarkMode ? 'bg-[#121212] border-gray-800' : 'bg-white border-gray-200'} border-b px-6 py-4 transition-colors duration-200`}>
      <div className="flex items-center justify-between">
        {/* Logo y menú hamburguesa */}
        <div className="relative flex items-center space-x-4">
          <button className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold tracking-wide transition-colors duration-200`} onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`${isDarkMode ? 'bg-white text-black' : 'bg-gray-900 text-white'} px-2 py-1 mr-2 transform -skew-x-12 inline-block font-bold transition-colors duration-200 cursor-pointer`}>≡</span>
            intagro
          </button>
          {menuOpen && (
            <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50`}>
              <ul className="py-1">
                <li><a href="https://www.intagro.com/institucional" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-700 hover:text-white">Institucional</a></li>
                <li><a href="https://www.intagro.com/informes" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-700 hover:text-white">Informes</a></li>
                <li><a href="https://www.intagro.com/clima" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-700 hover:text-white">Clima</a></li>
                <li><a href="https://www.infocampo.com.ar/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-700 hover:text-white">Noticias del sector</a></li>
                <li><a href="https://www.intagro.com/optimus/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-700 hover:text-white">Más sobre Optimus</a></li>
                <li><a href="https://www.intagro.com/contacto/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-700 hover:text-white">Oficinas comerciales</a></li>
              </ul>
            </div>
          )}
        </div>

        {/* Toggle dark/light mode */}
        <div className="flex items-center space-x-4">
          <CurrencyToggle />
          <button 
            onClick={toggleTheme}
            className={`flex items-center space-x-2 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} px-4 py-2 rounded-full transition-colors duration-200`}
          >
            <FontAwesomeIcon 
              icon={isDarkMode ? faSun : faMoon} 
              className={`w-4 h-4 ${isDarkMode ? 'text-yellow-400' : 'text-gray-600'} transition-colors duration-200`} 
            />
            <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm transition-colors duration-200`}>
              {isDarkMode ? 'Light' : 'Dark'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
