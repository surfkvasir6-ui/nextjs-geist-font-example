"use client";

import { granosNegociados } from '@/data/dashboardData';
import { useTheme } from '@/contexts/ThemeContext';

interface TreemapGranosNegociadosProps {
  data?: any[];
  loading?: boolean;
}

export default function TreemapGranosNegociados({ data, loading }: TreemapGranosNegociadosProps) {
  const { isDarkMode } = useTheme();
  
  // Use real-time data if available, otherwise fall back to static data
  const displayData = data && data.length > 0 ? data : granosNegociados;

  // Calculate sizes based on absolute values for better visual representation
  const maxValue = Math.max(...displayData.map(g => Math.abs(g.variacion)));
  const totalArea = 100;

  const itemsWithSizes = displayData.map(grano => ({
    ...grano,
    size: Math.max((Math.abs(grano.variacion) / maxValue) * 40, 15) // Minimum size of 15%
  }));

  return (
    <div className={`${
      isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    } rounded-xl p-4 shadow-lg border transition-colors duration-200`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-bold transition-colors duration-200`}>
          Granos negociados
          {loading && (
            <span className="ml-2 text-sm font-normal opacity-70">
              (Datos en tiempo real)
            </span>
          )}
        </h3>
        <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm transition-colors duration-200`}>
          {new Date().toLocaleDateString('es-AR')} {new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      
      {loading && (
        <div className="flex items-center justify-center py-4 mb-4">
          <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center space-x-2`}>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
            <span className="text-sm">Actualizando variaciones...</span>
          </div>
        </div>
      )}
      
      {/* Treemap Grid */}
      <div className="grid grid-cols-3 gap-2 h-64">
        {/* Maíz - Large block */}
        <div 
          className="col-span-2 row-span-2 rounded-lg p-4 flex flex-col justify-between text-white font-bold relative overflow-hidden"
          style={{ backgroundColor: itemsWithSizes[0]?.color || '#10B981' }}
        >
          <div className="text-2xl font-black">{itemsWithSizes[0]?.nombre || 'Maíz'}</div>
          <div className="text-3xl font-black">
            {(itemsWithSizes[0]?.variacion || 0) >= 0 ? '+' : ''}{(itemsWithSizes[0]?.variacion || 0).toFixed(1)}
          </div>
        </div>

        {/* Trigo */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-between text-white font-bold"
          style={{ backgroundColor: itemsWithSizes[1]?.color || '#6B7280' }}
        >
          <div className="text-lg font-bold">{itemsWithSizes[1]?.nombre || 'Trigo'}</div>
          <div className="text-xl font-black">
            {(itemsWithSizes[1]?.variacion || 0) >= 0 ? '+' : ''}{(itemsWithSizes[1]?.variacion || 0).toFixed(1)}
          </div>
        </div>

        {/* Soja */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-between text-white font-bold"
          style={{ backgroundColor: itemsWithSizes[2]?.color || '#EF4444' }}
        >
          <div className="text-lg font-bold">{itemsWithSizes[2]?.nombre || 'Soja'}</div>
          <div className="text-xl font-black">
            {(itemsWithSizes[2]?.variacion || 0).toFixed(1)}
          </div>
        </div>

        {/* Sorgo */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-between text-white font-bold"
          style={{ backgroundColor: itemsWithSizes[3]?.color || '#EF4444' }}
        >
          <div className="text-sm font-bold">{itemsWithSizes[3]?.nombre || 'Sorgo'}</div>
          <div className="text-lg font-black">
            {(itemsWithSizes[3]?.variacion || 0).toFixed(1)}
          </div>
        </div>

        {/* Cebada */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-between text-white font-bold"
          style={{ backgroundColor: itemsWithSizes[4]?.color || '#10B981' }}
        >
          <div className="text-sm font-bold">{itemsWithSizes[4]?.nombre || 'Cebada'}</div>
          <div className="text-lg font-black">
            {(itemsWithSizes[4]?.variacion || 0) >= 0 ? '+' : ''}{(itemsWithSizes[4]?.variacion || 0).toFixed(1)}
          </div>
        </div>

        {/* Girasol */}
        <div 
          className="rounded-lg p-3 flex flex-col justify-between text-white font-bold"
          style={{ backgroundColor: itemsWithSizes[5]?.color || '#EF4444' }}
        >
          <div className="text-sm font-bold">{itemsWithSizes[5]?.nombre || 'Girasol'}</div>
          <div className="text-lg font-black">
            {(itemsWithSizes[5]?.variacion || 0).toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
}
