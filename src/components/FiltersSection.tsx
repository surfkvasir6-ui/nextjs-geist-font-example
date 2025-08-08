"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheatAwn, faSeedling, faLeaf, faSun, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { cultivos, meses } from '@/data/dashboardData';
import { useTheme } from '@/contexts/ThemeContext';
import { useCropFilter, getCropDisplayName } from '@/contexts/CropFilterContext';

export default function FiltersSection() {
  const { isDarkMode } = useTheme();
  const { selectedCrop, setSelectedCrop } = useCropFilter();
  const [selectedMes, setSelectedMes] = useState("Ago");
  const [selectedDestino, setSelectedDestino] = useState("Todos los destinos");
  const [selectedCalidad, setSelectedCalidad] = useState("Todas las calidades");

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'wheat-awn': return faWheatAwn;
      case 'seedling': return faSeedling;
      case 'leaf': return faLeaf;
      case 'sun': return faSun;
      default: return faWheatAwn;
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-[#121212]' : 'bg-gray-50'} px-6 py-6 space-y-6 transition-colors duration-200`}>
      {/* Filtros de cultivos */}
      <div>
        <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm font-medium mb-4 opacity-80 transition-colors duration-200`}>
          Cultivos - Seleccionado: {getCropDisplayName(selectedCrop)}
        </h3>
        <div className="flex items-center space-x-4 flex-wrap">
          {cultivos.map((cultivo) => (
            <button
              key={cultivo.id}
              onClick={() => setSelectedCrop(cultivo.id)}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-200 min-w-[80px] ${
                selectedCrop === cultivo.id
                  ? "bg-yellow-500 shadow-lg shadow-yellow-500/25"
                  : isDarkMode 
                    ? "bg-gray-800 hover:bg-gray-700" 
                    : "bg-white hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <FontAwesomeIcon 
                icon={getIcon(cultivo.icon)} 
                className={`w-6 h-6 mb-2 transition-colors duration-200 ${
                  selectedCrop === cultivo.id 
                    ? "text-white" 
                    : isDarkMode 
                      ? "text-gray-300" 
                      : "text-gray-600"
                }`} 
              />
              <span className={`text-xs font-medium transition-colors duration-200 ${
                selectedCrop === cultivo.id 
                  ? "text-white" 
                  : isDarkMode 
                    ? "text-gray-300" 
                    : "text-gray-600"
              }`}>
                {cultivo.nombre}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Filtros de meses */}
      <div>
        <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm font-medium mb-4 opacity-80 transition-colors duration-200`}>Período</h3>
        <div className="flex items-center space-x-3 flex-wrap">
          {meses.map((mes) => (
            <button
              key={mes}
              onClick={() => setSelectedMes(mes)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedMes === mes
                  ? "bg-green-600 text-white shadow-lg shadow-green-600/25"
                  : isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {mes}
            </button>
          ))}
        </div>
      </div>

      {/* Selectores adicionales */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <select 
            value={selectedDestino}
            onChange={(e) => setSelectedDestino(e.target.value)}
            className={`${
              isDarkMode 
                ? 'bg-gray-800 text-white border-gray-700' 
                : 'bg-white text-gray-900 border-gray-300'
            } border rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[180px] transition-colors duration-200`}
          >
            <option value="Todos los destinos">Todos los destinos</option>
            <option value="Rosario">Rosario</option>
            <option value="Bahía Blanca">Bahía Blanca</option>
            <option value="Buenos Aires">Buenos Aires</option>
          </select>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} w-3 h-3 pointer-events-none transition-colors duration-200`} 
          />
        </div>

        <div className="relative">
          <select 
            value={selectedCalidad}
            onChange={(e) => setSelectedCalidad(e.target.value)}
            className={`${
              isDarkMode 
                ? 'bg-gray-800 text-white border-gray-700' 
                : 'bg-white text-gray-900 border-gray-300'
            } border rounded-lg px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[180px] transition-colors duration-200`}
          >
            <option value="Todas las calidades">Todas las calidades</option>
            <option value="Premium">Premium</option>
            <option value="Estándar">Estándar</option>
            <option value="Comercial">Comercial</option>
          </select>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} w-3 h-3 pointer-events-none transition-colors duration-200`} 
          />
        </div>
      </div>
    </div>
  );
}
