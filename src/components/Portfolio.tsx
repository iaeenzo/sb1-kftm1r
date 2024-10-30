import React from 'react';
import { ArrowRight, Sparkles, Target, Palette } from 'lucide-react';

const projects = [
  {
    icon: Target,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Campanha Digital",
    description: "Estratégia completa de marketing digital",
    category: "Marketing Digital"
  },
  {
    icon: Palette,
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Branding",
    description: "Desenvolvimento de identidade visual",
    category: "Design"
  },
  {
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Social Media",
    description: "Gestão de redes sociais",
    category: "Social Media"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-scale">
          <h2 className="text-4xl font-bold mb-4 text-purple-900">Nosso Portfólio</h2>
          <p className="text-purple-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos de sucesso e como transformamos a presença digital de nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 stagger-animation">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group animate-scale bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 text-white">
                    <project.icon className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-purple-900 mb-3">{project.title}</h3>
                <p className="text-purple-600 mb-6">{project.description}</p>
                <button className="flex items-center text-purple-700 hover:text-purple-900 transition-colors group-hover:translate-x-2 transform duration-300">
                  Ver projeto completo <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-float">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-purple-900 text-white rounded-full hover:bg-purple-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Vamos trabalhar juntos
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}