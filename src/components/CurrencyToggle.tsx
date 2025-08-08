"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CurrencyToggleProps {
  currency: "USD" | "ARS";
  onCurrencyChange: (currency: "USD" | "ARS") => void;
}

export default function CurrencyToggle({ currency, onCurrencyChange }: CurrencyToggleProps) {
  return (
    <div className="flex items-center space-x-3">
      <Label htmlFor="currency-toggle" className="text-sm font-medium text-white">
        USD
      </Label>
      <Switch
        id="currency-toggle"
        checked={currency === "ARS"}
        onCheckedChange={(checked) => onCurrencyChange(checked ? "ARS" : "USD")}
        className="data-[state=checked]:bg-white"
      />
      <Label htmlFor="currency-toggle" className="text-sm font-medium text-white">
        ARS
      </Label>
    </div>
  );
}
