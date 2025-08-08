"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CropSelector from "./CropSelector";
import MonthSelector from "./MonthSelector";
import CurrencyToggle from "./CurrencyToggle";

interface FiltersBarProps {
  selectedCrop: string;
  selectedMonth: string;
  currency: "USD" | "ARS";
  onCropSelect: (cropId: string) => void;
  onMonthSelect: (month: string) => void;
  onCurrencyChange: (currency: "USD" | "ARS") => void;
}

export default function FiltersBar({
  selectedCrop,
  selectedMonth,
  currency,
  onCropSelect,
  onMonthSelect,
  onCurrencyChange,
}: FiltersBarProps) {
  return (
    <div className="px-6 py-4 space-y-4">
      {/* Selector de cultivos */}
      <div>
        <CropSelector selectedCrop={selectedCrop} onCropSelect={onCropSelect} />
      </div>

      {/* Selector de meses */}
      <div>
        <MonthSelector selectedMonth={selectedMonth} onMonthSelect={onMonthSelect} />
      </div>

      {/* Filtros adicionales */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Select defaultValue="todos-destinos">
            <SelectTrigger className="w-48 bg-gray-800 border-gray-600 text-white">
              <SelectValue placeholder="Todos los destinos" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              <SelectItem value="todos-destinos">Todos los destinos</SelectItem>
              <SelectItem value="rosario">Rosario</SelectItem>
              <SelectItem value="bahia-blanca">Bahía Blanca</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="todas-calidades">
            <SelectTrigger className="w-48 bg-gray-800 border-gray-600 text-white">
              <SelectValue placeholder="Todas las calidades" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              <SelectItem value="todas-calidades">Todas las calidades</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="estandar">Estándar</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <CurrencyToggle currency={currency} onCurrencyChange={onCurrencyChange} />
      </div>
    </div>
  );
}
