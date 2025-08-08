"use client";

import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Destino, estadoColors } from "@/data/mock";

interface PriceCardProps {
  destino: Destino;
  currency: "USD" | "ARS";
}

export default function PriceCard({ destino, currency }: PriceCardProps) {
  const precio = currency === "USD" ? destino.precioUSD : destino.precioARS;
  const simbolo = currency === "USD" ? "$" : "$";
  const estadoColor = estadoColors[destino.estado];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gray-900 border-t-4 border-gray-700 hover:border-gray-600 transition-all duration-200 p-4 relative overflow-hidden">
        {/* Borde superior de color según estado */}
        <div 
          className="absolute top-0 left-0 right-0 h-1"
          style={{ backgroundColor: estadoColor }}
        />
        
        <div className="space-y-3">
          {/* Nombre del destino */}
          <h3 className="text-white font-bold text-lg">{destino.nombre}</h3>
          
          {/* Precio */}
          <div className="text-2xl font-bold text-white">
            {simbolo} {precio.toLocaleString()}
          </div>
          
          {/* Estado */}
          <div 
            className="text-sm font-medium"
            style={{ color: estadoColor }}
          >
            {destino.estado}
          </div>
          
          {/* Icono de ojo */}
          <div className="flex justify-end">
            <Eye className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
