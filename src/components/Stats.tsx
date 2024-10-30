import React from 'react';
import { Award, Users, Rocket } from 'lucide-react';

const stats = [
  { icon: Award, value: '150+', label: 'Projetos Entregues' },
  { icon: Users, value: '98%', label: 'Clientes Satisfeitos' },
  { icon: Rocket, value: '10+', label: 'Anos de Experiência' },
];

export default function Stats() {
  return (
    <div className="relative -mt-20 z-10 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-2xl shadow-2xl p-8 stagger-animation">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="animate-scale flex flex-col items-center text-center p-8 hover:bg-purple-50 rounded-xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="mb-4 p-4 bg-purple-100 rounded-full animate-float">
              <stat.icon className="h-10 w-10 text-purple-800" />
            </div>
            <h3 className="text-4xl font-bold text-purple-900 mb-2">{stat.value}</h3>
            <p className="text-purple-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}