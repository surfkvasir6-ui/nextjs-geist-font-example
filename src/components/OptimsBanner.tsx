"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function OptimusBanner() {
  const [selectedProcedencia, setSelectedProcedencia] = useState("Procedencia de grano");

  return (
    <div className="relative h-64 bg-gradient-to-r from-orange-600 via-yellow-500 to-green-600 rounded-xl mx-6 my-6 overflow-hidden shadow-2xl">
      {/* Imagen de fondo con cosechadora */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/099f4f59-129c-455d-bdc2-a425b3624d32.png')`,
        }}
      />
      
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      
      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 py-6">
      {/* Lado izquierdo - Logo Optimus */}
      <div className="text-white flex items-center space-x-4">
        <img src="/optimus-logo.png" alt="Optimus logo" className="h-16" />
        <div>
          <div className="text-5xl font-black tracking-wider drop-shadow-lg">OPTIMUS</div>
          <p className="text-xl font-medium opacity-95 drop-shadow-md">Encontrá tu mejor alternativa!</p>
          <p className="text-sm opacity-80 mt-1">by <span className="font-semibold">intagro</span></p>
        </div>
      </div>
        
        {/* Lado derecho - Dropdown Procedencia */}
        <div className="relative">
          <button 
            className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2 min-w-[200px] justify-between"
            onClick={() => window.open('https://www.intagro.online/', '_blank')}
          >
            <span>{selectedProcedencia}</span>
            <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Gráfico de velas superpuesto (simulado) */}
      {/* Eliminado */}
    </div>
  );
}
