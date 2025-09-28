import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-16 text-foreground">
            Sobre Mim
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-in">
              <Card className="bg-card/80 backdrop-blur-sm shadow-soft border-border/50 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="font-montserrat text-lg leading-relaxed text-muted-foreground">
                      Sou <strong className="text-foreground font-semibold">Thiago Martins</strong>, 
                      Engenheiro Florestal e especialista em geoprocessamento, georreferenciamento e sensoriamento remoto.
                    </p>
                    
                    <p className="font-montserrat text-lg leading-relaxed text-muted-foreground">
                      Minha atuação é focada em transformar dados espaciais em informações claras e aplicáveis para tomada de decisão. 
                       
                      Neste portfólio, apresento diferentes categorias de mapas, todos produzidos com atenção ao 
                      detalhe e compromisso com resultados práticos, contribuindo para tomada de decisões estratégicas em 
                      ambientais. Entregando soluções cartográficas que unam rigor técnico e design profissional.
                      Se você busca apoio em projetos ambientais, florestais ou de geotecnologia, aqui está um 
                      ponto de partida para conhecer meu trabalho.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-earth border-4 border-primary/20">
                  <img
                    src="/lovable-uploads/thiago-professional.jpg"
                    alt="Thiago Martins - Engenheiro Florestal"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-4 shadow-forest animate-float">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;