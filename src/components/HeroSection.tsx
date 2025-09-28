import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 86, 44, 0.85) 0%, rgba(34, 139, 34, 0.75) 25%, rgba(70, 130, 180, 0.6) 100%), url('/lovable-uploads/5ad920d7-3f21-42a6-b0a7-14d9c4a3bb1a.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Thiago Martins
          </h1>
          <h2 className="font-montserrat font-semibold text-2xl md:text-4xl lg:text-5xl mb-8 text-primary-light">
            Engenheiro Florestal
          </h2>
          <p className="font-montserrat font-medium text-xl md:text-2xl mb-14 leading-relaxed max-w-2xl mx-auto">
            Portfólio de Mapas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-montserrat font-semibold text-lg px-8 py-4 rounded-xl shadow-soft transition-smooth"
            >
              Conheça meu trabalho
            </Button>
            <Button 
              onClick={() => document.getElementById('maps')?.scrollIntoView({ behavior: 'smooth' })}
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary-dark font-montserrat font-semibold text-lg px-8 py-4 rounded-xl shadow-forest transition-smooth"
            >
              Ver Mapas
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown 
          className="w-8 h-8 text-white cursor-pointer opacity-70 hover:opacity-100 transition-smooth"
          onClick={scrollToAbout}
        />
      </div>
    </section>
  );
};

export default HeroSection;