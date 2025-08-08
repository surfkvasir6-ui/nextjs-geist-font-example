"use client";

import { posicionMaiz } from '@/data/dashboardData';
import { useTheme } from '@/contexts/ThemeContext';

export default function TreemapPosicionMaiz() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${
      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    } rounded-xl p-6 shadow-lg border transition-colors duration-200`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold transition-colors duration-200`}>
          Maíz - Posición negociada
        </h3>
        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm transition-colors duration-200`}>
          20/07 12:05
        </span>
      </div>

      {/* Treemap Grid */}
      <div className="grid grid-cols-2 gap-2 min-h-[280px]">
        {/* Agosto - Large block */}
        <div 
          className="row-span-2 rounded-lg p-4 flex flex-col justify-center items-center text-white font-bold relative overflow-hidden"
          style={{ backgroundColor: posicionMaiz[0].color }}
        >
          <div className="text-3xl font-black mb-2">Agosto</div>
          <div className="text-4xl font-black">
            +{posicionMaiz[0].valor.toFixed(1)}
          </div>
        </div>

        {/* Sep */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-center items-center text-white font-bold"
          style={{ backgroundColor: posicionMaiz[1].color }}
        >
          <div className="text-xl font-bold">Sep</div>
          <div className="text-2xl font-black">
            {posicionMaiz[1].valor.toFixed(1)}
          </div>
        </div>

        {/* Oct */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-center items-center text-white font-bold"
          style={{ backgroundColor: posicionMaiz[2].color }}
        >
          <div className="text-xl font-bold">Oct</div>
          <div className="text-2xl font-black">
            +{posicionMaiz[2].valor.toFixed(1)}
          </div>
        </div>

        {/* Diciembre - Bottom row spanning both columns */}
        <div 
          className="col-span-2 rounded-lg p-3 flex items-center justify-between text-white font-bold"
          style={{ backgroundColor: posicionMaiz[3].color }}
        >
          <div className="text-xl font-bold">Diciembre</div>
          <div className="text-2xl font-black">
            +{posicionMaiz[3].valor.toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
}
