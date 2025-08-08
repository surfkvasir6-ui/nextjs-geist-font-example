"use client";

import { cultivos } from "@/data/mock";
import { motion } from "framer-motion";

interface CropSelectorProps {
  selectedCrop: string;
  onCropSelect: (cropId: string) => void;
}

export default function CropSelector({ selectedCrop, onCropSelect }: CropSelectorProps) {
  return (
    <div className="flex items-center space-x-4">
      {cultivos.map((cultivo) => (
        <motion.button
          key={cultivo.id}
          onClick={() => onCropSelect(cultivo.id)}
          className={`flex flex-col items-center p-3 rounded-lg transition-all duration-200 ${
            selectedCrop === cultivo.id
              ? "bg-white/10 border border-white/20"
              : "hover:bg-white/5"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl mb-1">{cultivo.icono}</span>
          <span className="text-xs text-white/80 font-medium">{cultivo.nombre}</span>
        </motion.button>
      ))}
    </div>
  );
}
