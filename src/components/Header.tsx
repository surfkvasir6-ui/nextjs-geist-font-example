"use client";

import { Switch } from "@/components/ui/switch";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-[#0B0F14]">
      <div className="flex items-center space-x-2">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3c92dfa3-f736-4b61-8866-5cfc6401af96.png" 
          alt="Intagro Logo" 
          className="h-8 w-auto"
          onError={(e) => {
            // Fallback al logo de texto si la imagen no carga
            const target = e.currentTarget as HTMLImageElement;
            const nextElement = target.nextElementSibling as HTMLElement;
            target.style.display = 'none';
            if (nextElement) nextElement.style.display = 'block';
          }}
        />
        <div className="text-white text-2xl font-bold hidden">
          <span className="bg-white text-black px-1 mr-1 transform -skew-x-12">≡</span>
          intagro
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Switch defaultChecked className="data-[state=checked]:bg-white" />
      </div>
    </header>
  );
}
