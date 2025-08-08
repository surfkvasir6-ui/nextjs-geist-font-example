"use client";

import { Card } from "@/components/ui/card";
import { PosicionNegociada } from "@/data/mock";
import { motion } from "framer-motion";

interface PositionByMonthPanelProps {
  posicionesPorMes: PosicionNegociada[];
  cultivoSeleccionado: string;
}

export default function PositionByMonthPanel({ 
  posicionesPorMes, 
  cultivoSeleccionado 
}: PositionByMonthPanelProps) {
  // Filtrar posiciones por el cultivo seleccionado
  const posicionesFiltradas = posicionesPorMes.filter(
    pos => pos.cultivo.toLowerCase() === cultivoSeleccionado.toLowerCase()
  );

  return (
    <Card className="bg-gray-900 border-gray-700 p-4">
      <h3 className="text-white font-bold text-lg mb-2">
        {cultivoSeleccionado} - Posición negociada
      </h3>
      
      <div className="grid grid-cols-2 gap-2">
        {posicionesFiltradas.map((posicion, index) => {
          const isPositive = posicion.variacion > 0;
          const isNegative = posicion.variacion < 0;
          
          let bgColor = "bg-gray-600"; // neutro
          let textColor = "text-white";
          
          if (isPositive) {
            bgColor = "bg-green-600";
            textColor = "text-white";
          } else if (isNegative) {
            bgColor = "bg-red-600";
            textColor = "text-white";
          }
          
          return (
            <motion.div
              key={`${posicion.mes}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`${bgColor} ${textColor} p-3 rounded-lg text-center`}
            >
              <div className="font-medium text-sm">{posicion.mes}</div>
              <div className="text-lg font-bold">
                {isPositive ? "+" : ""}{posicion.variacion.toFixed(1)}
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {posicionesFiltradas.length === 0 && (
        <div className="text-gray-400 text-center py-4">
          No hay datos disponibles para {cultivoSeleccionado}
        </div>
      )}
    </Card>
  );
}
