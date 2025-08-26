import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, BarChart3, TrendingUp, Palette } from 'lucide-react';

interface MapItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
}

const MapsSection = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  
  const filters = [
    { id: 'todos', label: 'Todos os Mapas', icon: null },
    { id: 'localizacao', label: 'Localização', icon: MapPin },
    { id: 'tematico', label: 'Temático', icon: BarChart3 },
    { id: 'analitico', label: 'Analítico', icon: TrendingUp },
    { id: 'artistico', label: 'Artístico', icon: Palette }
  ];

  const maps: MapItem[] = [
    {
      id: 1,
      title: 'Zoneamento Pedoclimático Eucalyptus grandis',
      description: 'Mapeamento das áreas aptas, restritas e inaptas para o cultivo de Eucalyptus grandis na região da Bahia, considerando fatores pedológicos e climáticos.',
      category: 'tematico',
      image: '/lovable-uploads/6d3446a5-baa5-431f-b2b9-21085ee78661.png',
      tags: ['Eucalipto', 'Zoneamento', 'Bahia', 'Silvicultura']
    },
    // Add more sample maps here when needed
  ];

  const filteredMaps = activeFilter === 'todos' 
    ? maps 
    : maps.filter(map => map.category === activeFilter);

  return (
    <section id="maps" className="py-20 bg-gradient-to-br from-muted/30 to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Galeria de Mapas
            </h2>
            <p className="font-montserrat text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore minha coleção de mapas especializados, desenvolvidos com precisão técnica 
              e design profissional para diversos projetos florestais e ambientais.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={`font-montserrat font-medium px-6 py-3 rounded-xl transition-smooth ${
                    activeFilter === filter.id
                      ? 'bg-primary hover:bg-primary-dark text-primary-foreground shadow-forest'
                      : 'bg-card/50 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:border-primary/30'
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5 mr-2" />}
                  {filter.label}
                </Button>
              );
            })}
          </div>

          {/* Maps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaps.map((map) => (
              <Card 
                key={map.id} 
                className="group bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-forest border-border/50 hover:border-primary/30 rounded-2xl overflow-hidden transition-smooth cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={map.image}
                      alt={map.title}
                      className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-montserrat font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-smooth">
                      {map.title}
                    </h3>
                    <p className="font-montserrat text-muted-foreground mb-4 leading-relaxed">
                      {map.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {map.tags.map((tag, index) => (
                        <Badge 
                          key={index}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 font-montserrat text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMaps.length === 0 && (
            <div className="text-center py-16">
              <p className="font-montserrat text-xl text-muted-foreground">
                Nenhum mapa encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MapsSection;