"use client";

import { meses } from "@/data/mock";
import { motion } from "framer-motion";

interface MonthSelectorProps {
  selectedMonth: string;
  onMonthSelect: (month: string) => void;
}

export default function MonthSelector({ selectedMonth, onMonthSelect }: MonthSelectorProps) {
  return (
    <div className="flex items-center space-x-2 flex-wrap">
      {meses.map((mes) => (
        <motion.button
          key={mes}
          onClick={() => onMonthSelect(mes)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedMonth === mes
              ? "bg-green-500 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {mes}
        </motion.button>
      ))}
    </div>
  );
}
