"use client";

import { posicionMaiz } from '@/data/dashboardData';
import { useTheme } from '@/contexts/ThemeContext';

export default function PosicionMaizChart() {
  const { isDarkMode } = useTheme();
  const maxValue = Math.max(...posicionMaiz.map(p => Math.abs(p.valor)));

  return (
    <div className={`${
      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    } rounded-xl p-6 shadow-lg border transition-colors duration-200`}>
      <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold mb-4 transition-colors duration-200`}>Maíz - Posición negociada</h3>
      
      {/* Gráfico de barras */}
      <div className="space-y-3">
        {posicionMaiz.map((posicion, index) => {
          const isPositive = posicion.valor > 0;
          const percentage = (Math.abs(posicion.valor) / maxValue) * 100;
          
          return (
            <div key={posicion.mes} className="flex items-center space-x-3">
              {/* Nombre del mes */}
              <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm font-medium w-20 text-right transition-colors duration-200`}>
                {posicion.mes}
              </div>
              
              {/* Barra de progreso */}
              <div className="flex-1 relative">
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-full h-6 relative overflow-hidden transition-colors duration-200`}>
                  <div
                    className={`h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2 ${
                      isPositive ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  >
                    <span className="text-white text-xs font-bold">
                      {isPositive ? '+' : ''}{posicion.valor.toFixed(1)}%
                    </span>
                  </div>
                </div>
                
                {/* Línea central para referencia */}
                <div className={`absolute left-1/2 top-0 bottom-0 w-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} transform -translate-x-1/2 transition-colors duration-200`} />
              </div>
              
              {/* Indicador de tendencia */}
              <div className={`w-0 h-0 ${
                isPositive 
                  ? 'border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-green-400'
                  : 'border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-red-400'
              }`} />
            </div>
          );
        })}
      </div>
      
      {/* Escala de referencia */}
      <div className={`mt-4 flex justify-between text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-200`}>
        <span>-2%</span>
        <span>0%</span>
        <span>+2%</span>
      </div>
      
      {/* Resumen */}
      <div className={`mt-4 pt-4 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} border-t transition-colors duration-200`}>
        <div className="flex justify-between items-center">
          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm transition-colors duration-200`}>Promedio:</span>
          <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold transition-colors duration-200`}>
            +{(posicionMaiz.reduce((acc, p) => acc + p.valor, 0) / posicionMaiz.length).toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}
