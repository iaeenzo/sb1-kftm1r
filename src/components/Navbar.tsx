import React from 'react';
import { Brain } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8" />
          <span className="text-2xl font-bold">Inteligência</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-purple-200 transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-purple-200 transition-colors">Portfólio</a>
          <a href="#about" className="hover:text-purple-200 transition-colors">Sobre</a>
          <a href="#contact" className="hover:text-purple-200 transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  );
}