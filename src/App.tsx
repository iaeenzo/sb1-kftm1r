import React from 'react';
import { Brain } from 'lucide-react';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-purple-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-800 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <Navbar />
        
        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sua agência de Marketing
              <span className="block text-purple-300">inteligente</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-purple-200 max-w-3xl mx-auto">
              Transformamos sua presença digital com estratégias inovadoras e resultados comprovados
            </p>
            <a
              href="#contact"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-500 transition-colors duration-300 transform hover:scale-105"
            >
              Comece Agora
            </a>
          </div>
        </div>
      </header>

      <Stats />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer className="bg-purple-950 text-purple-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-8 w-8" />
              <span className="text-2xl font-bold">Inteligência</span>
            </div>
            <div className="flex space-x-8">
              <a href="#services" className="hover:text-white transition-colors">Serviços</a>
              <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
              <a href="#about" className="hover:text-white transition-colors">Sobre</a>
              <a href="#contact" className="hover:text-white transition-colors">Contato</a>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-8 text-center md:text-left">
            <p className="text-sm">
              © {new Date().getFullYear()} Inteligência Marketing. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;