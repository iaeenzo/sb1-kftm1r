import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-950 skew-y-6 transform origin-top-left"></div>
      <div className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="animate-slide-left">
              <h2 className="text-5xl font-bold mb-8 text-white">Vamos Conversar?</h2>
              <p className="text-purple-200 mb-12 text-lg">
                Estamos prontos para transformar suas ideias em resultados extraordinários
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Mail, text: 'contato@inteligencia.com.br' },
                  { icon: Phone, text: '+55 (11) 99999-9999' },
                  { icon: MapPin, text: 'São Paulo, SP - Brasil' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 text-purple-200 group">
                    <div className="p-3 bg-purple-900 rounded-lg group-hover:bg-purple-800 transition-colors">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="group-hover:text-white transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-6 mt-12">
                {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-purple-900 p-4 rounded-lg hover:bg-purple-800 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Icon className="h-6 w-6 text-purple-100" />
                  </a>
                ))}
              </div>
            </div>

            <form className="animate-slide-right bg-white p-10 rounded-2xl shadow-2xl space-y-8">
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-6 py-4 rounded-lg bg-purple-50 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-lg bg-purple-50 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                />
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="w-full px-6 py-4 rounded-lg bg-purple-50 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                ></textarea>
              </div>
              
              <button className="w-full bg-purple-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                <span>Enviar Mensagem</span>
                <Send className="h-5 w-5 animate-float" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}