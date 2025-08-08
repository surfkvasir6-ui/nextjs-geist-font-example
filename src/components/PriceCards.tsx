"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { destinos, estadoColors } from '@/data/dashboardData';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

interface PriceCardsProps {
  prices?: any[];
  loading?: boolean;
}

export default function PriceCards({ prices, loading }: PriceCardsProps) {
  const { isDarkMode } = useTheme();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  // Use real-time data if available, otherwise fall back to static data
  const displayPrices = prices && prices.length > 0 ? prices : destinos;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="px-6 py-4">
      <h2 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-xl font-bold mb-6 transition-colors duration-200`}>
        Precios por Localidad
        {loading && (
          <span className="ml-2 text-sm font-normal opacity-70">
            (Actualizando datos en tiempo real...)
          </span>
        )}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {loading && displayPrices.length === 0 && (
          <div className="col-span-full flex items-center justify-center py-8">
            <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center space-x-2`}>
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-current"></div>
              <span>Cargando precios en tiempo real...</span>
            </div>
          </div>
        )}
        
        {displayPrices.map((destino: any, index: number) => (
          <div
            key={destino.nombre || index}
            className={`${
              isDarkMode ? 'bg-gray-900 border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 hover:border-gray-300'
            } rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border relative overflow-hidden group`}
            style={{
              borderTopColor: estadoColors[destino.estado as keyof typeof estadoColors] || '#3B82F6',
              borderTopWidth: '3px'
            }}
          >
            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
            
            <div className="relative z-10">
              {/* Nombre del destino */}
              <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-3 tracking-wide transition-colors duration-200`}>
                {destino.nombre}
              </h3>
              
              {/* Precio */}
              <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-2xl font-black mb-3 transition-colors duration-200`}>
                {formatPrice(destino.precio)}
              </div>
              
              {/* Estado con color */}
              <div 
                className="text-sm font-semibold mb-4 uppercase tracking-wide"
                style={{ color: estadoColors[destino.estado as keyof typeof estadoColors] || '#3B82F6' }}
              >
                {destino.estado}
              </div>
              
              {/* Ícono de ojo con tooltip */}
              <div className="flex justify-end relative">
                <button 
                  className={`${
                    isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  } transition-colors duration-200 p-2 rounded-full relative`}
                  onMouseEnter={() => setHoveredCard(destino.nombre)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <FontAwesomeIcon icon={faEye} className="w-5 h-5" />
                  
                  {/* Tooltip */}
                  {hoveredCard === destino.nombre && (
                    <div className="absolute right-0 bottom-full mb-2 w-64 p-3 rounded-lg shadow-lg z-50 text-sm bg-white/90 text-gray-900 border border-gray-200 backdrop-blur-sm transition-all duration-200">
                      <div className="space-y-1">
                        <div><strong>Cons. H° hta:</strong> 15,5%</div>
                        <div><strong>Plazo de pago:</strong> 45 días</div>
                        <div><strong>Recibo hasta:</strong> 15,5% Hum. Libre de gastos</div>
                      </div>
                      {/* Arrow pointing down */}
                      <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/90" />
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Indicador de estado en la esquina */}
            <div 
              className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-transparent"
              style={{ borderBottomColor: estadoColors[destino.estado as keyof typeof estadoColors] || '#3B82F6' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
