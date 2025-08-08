"use client";

import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div className="relative h-48 bg-gradient-to-r from-orange-600 via-yellow-500 to-green-600 rounded-lg mx-6 mb-6 overflow-hidden">
      {/* Imagen de fondo simulada con gradiente */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d0b264f3-f9a2-4a65-a693-86422859a284.png')`,
        }}
      />
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-between h-full p-8">
        <div className="text-white">
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-4xl font-bold tracking-wider">
              <span className="text-white">OPTIMUS</span>
            </div>
            <div className="text-sm opacity-90">
              by <span className="font-semibold">intagro</span>
            </div>
          </div>
          <p className="text-sm italic opacity-90">
            Encontrá tu mejor alternativa!
          </p>
        </div>
        
        <Button 
          variant="secondary" 
          className="bg-white/90 text-gray-800 hover:bg-white font-medium px-6 py-2 rounded-full"
          onClick={() => window.open('https://www.intagro.online/', '_blank')}
        >
          Procedencia de grano
        </Button>
      </div>
    </div>
  );
}
