"use client";

import { granosNegociados } from '@/data/dashboardData';
import { useTheme } from '@/contexts/ThemeContext';

export default function GranosNegociadosChart() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${
      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    } rounded-xl p-6 shadow-lg border h-fit transition-colors duration-200`}>
      <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-6 transition-colors duration-200`}>Granos negociados</h3>
      
      {/* Treemap simulado con grid - una sola columna más grande */}
      <div className="space-y-4">
        {granosNegociados.map((grano, index) => {
          const isPositive = grano.variacion > 0;
          
          return (
            <div
              key={grano.nombre}
              className="rounded-lg p-6 flex items-center justify-between transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
              style={{
                backgroundColor: grano.color,
                minHeight: '70px'
              }}
            >
              <div className="text-white font-bold text-xl">
                {grano.nombre}
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-white text-2xl font-black">
                  {isPositive ? '+' : ''}{grano.variacion.toFixed(1)}%
                </div>
                
                {/* Indicador visual de tendencia */}
                <div className={`w-0 h-0 ${
                  isPositive 
                    ? 'border-l-[10px] border-r-[10px] border-b-[12px] border-l-transparent border-r-transparent border-b-white'
                    : 'border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-white'
                }`} />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Leyenda */}
      <div className={`mt-6 flex items-center justify-between text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-200`}>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>Positivo</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span>Negativo</span>
        </div>
      </div>
    </div>
  );
}
