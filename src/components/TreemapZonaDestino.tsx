"use client";

import { zonasDestino } from '@/data/dashboardData';
import { useTheme } from '@/contexts/ThemeContext';

export default function TreemapZonaDestino() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${
      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    } rounded-xl p-4 shadow-lg border transition-colors duration-200`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold transition-colors duration-200`}>
          Zona de destino negociada
        </h3>
        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm transition-colors duration-200`}>
          20/07 12:05
        </span>
      </div>
      
      {/* Treemap Grid */}
      <div className="grid grid-cols-3 gap-2 min-h-[280px]">
        {/* Rosario Total - Large block */}
        <div 
          className="col-span-2 row-span-2 rounded-lg p-4 flex flex-col justify-center text-white font-bold"
          style={{ backgroundColor: zonasDestino[0].color }}
        >
          <div className="text-2xl font-black mb-2">Rosario</div>
          <div className="text-2xl font-black mb-1">Total</div>
          <div className="text-3xl font-black">
            +{zonasDestino[0].valor.toFixed(1)}
          </div>
        </div>

        {/* BB */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-center items-center text-white font-bold"
          style={{ backgroundColor: zonasDestino[1].color }}
        >
          <div className="text-lg font-bold">BB</div>
          <div className="text-xl font-black">
            +{zonasDestino[1].valor.toFixed(2)}
          </div>
        </div>

        {/* QQ */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-center items-center text-white font-bold"
          style={{ backgroundColor: zonasDestino[2].color }}
        >
          <div className="text-lg font-bold">QQ</div>
          <div className="text-xl font-black">
            +{zonasDestino[2].valor.toFixed(1)}
          </div>
        </div>

        {/* Lima */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-center items-center text-white font-bold"
          style={{ backgroundColor: zonasDestino[3].color }}
        >
          <div className="text-sm font-bold">Lima</div>
          <div className="text-lg font-black">
            +{zonasDestino[3].valor.toFixed(1)}
          </div>
        </div>

        {/* Ros Norte */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-center items-center text-white font-bold"
          style={{ backgroundColor: zonasDestino[4].color }}
        >
          <div className="text-xs font-bold">Ros Norte</div>
          <div className="text-lg font-black">
            +{zonasDestino[4].valor.toFixed(1)}
          </div>
        </div>

        {/* TLP */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-center items-center text-white font-bold"
          style={{ backgroundColor: zonasDestino[6].color }}
        >
          <div className="text-sm font-bold">TLP</div>
          <div className="text-lg font-black">
            {zonasDestino[6].valor.toFixed(1)}
          </div>
        </div>

        {/* Ros Sur */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-center items-center text-white font-bold"
          style={{ backgroundColor: zonasDestino[5].color }}
        >
          <div className="text-xs font-bold">Ros Sur</div>
          <div className="text-lg font-black">
            +{zonasDestino[5].valor.toFixed(1)}
          </div>
        </div>

        {/* Espartillar */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-center items-center text-white font-bold"
          style={{ backgroundColor: zonasDestino[7].color }}
        >
          <div className="text-xs font-bold">Espartillar</div>
          <div className="text-sm font-black">
            {zonasDestino[7].valor.toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
}
