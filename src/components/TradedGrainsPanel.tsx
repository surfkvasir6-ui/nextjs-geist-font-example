"use client";

import { Card } from "@/components/ui/card";
import { GranoNegociado } from "@/data/mock";
import { motion } from "framer-motion";

interface TradedGrainsPanelProps {
  granosNegociados: GranoNegociado[];
}

export default function TradedGrainsPanel({ granosNegociados }: TradedGrainsPanelProps) {
  return (
    <Card className="bg-gray-900 border-gray-700 p-4">
      <h3 className="text-white font-bold text-lg mb-4">Granos negociados</h3>
      
      <div className="grid grid-cols-2 gap-2">
        {granosNegociados.map((grano, index) => {
          const isPositive = grano.variacion > 0;
          const isNegative = grano.variacion < 0;
          
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
              key={grano.cultivo}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`${bgColor} ${textColor} p-3 rounded-lg text-center`}
            >
              <div className="font-medium text-sm">{grano.cultivo}</div>
              <div className="text-lg font-bold">
                {isPositive ? "+" : ""}{grano.variacion.toFixed(1)}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
}
