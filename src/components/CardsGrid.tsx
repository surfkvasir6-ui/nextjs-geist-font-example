"use client";

import { Destino } from "@/data/mock";
import PriceCard from "./PriceCard";
import { motion } from "framer-motion";

interface CardsGridProps {
  destinos: Destino[];
  currency: "USD" | "ARS";
}

export default function CardsGrid({ destinos, currency }: CardsGridProps) {
  return (
    <div className="px-6">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {destinos.map((destino, index) => (
          <motion.div
            key={destino.nombre}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <PriceCard destino={destino} currency={currency} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
