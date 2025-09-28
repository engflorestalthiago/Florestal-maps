import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, BarChart3, TrendingUp, Palette, Eye } from 'lucide-react';
import ZoomableImage from '@/components/ui/ZoomableImage';

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
      tags: []
    },
    {
      id: 2,
      title: 'Uso e Cobertura do Solo - Igrapiúna/BA',
      description: 'Análise detalhada do uso e cobertura do solo no município de Igrapiúna, Bahia, utilizando dados do MapBiomas 2023. Identifica diferentes classes de uso como formação florestal, mangue, pastagem e áreas urbanas.',
      category: 'tematico',
      image: '/lovable-uploads/4c9ccced-9cf3-4249-bd7c-5434a253c34d.png',
      tags: []
    },
    {
      id: 3,
      title: 'Divisão Administrativa - Salvador/BA',
      description: 'Mapeamento da região dos subdistritos e divisão dos bairros do município de Salvador, Bahia. Apresenta a divisão administrativa municipal com identificação de todos os bairros e suas respectivas delimitações territoriais.',
      category: 'tematico',
      image: '/lovable-uploads/3d56d2d0-198e-4932-9986-c5289c479808.png',
      tags: []
    },
    {
      id: 4,
      title: 'Mapa Hipsométrico - Mucugê/BA',
      description: 'Análise altimétrica do município de Mucugê, Bahia, apresentando variações de altitude de 518 a 1.669 metros. Utiliza modelo digital de elevação (NASA DEM) para representar o relevo através de gradientes de cores, evidenciando as características topográficas da Chapada Diamantina.',
      category: 'analitico',
      image: '/lovable-uploads/mucuge-hipsometrico.png',
      tags: []
    },
    {
      id: 5,
      title: 'Análise de Queimadas NBR - Chapada Diamantina/BA',
      description: 'Estudo comparativo detalhado das queimadas no Parque Nacional da Chapada Diamantina utilizando índices NBR (Normalized Burn Ratio). Analisa cenários pré-queimada (20/07/2021) e pós-queimada (30/09/2021), classificando o grau de severidade em diferentes categorias: alta regeneração, baixa regeneração, não queimada, baixa severidade, moderada severidade, alta severidade e severidade crítica.',
      category: 'analitico',
      image: '/lovable-uploads/queimadas-chapada-nbr.jpg',
      tags: []
    },
    {
      id: 6,
      title: 'Impacto das Inundações - Eldorado do Sul/RS',
      description: 'Análise comparativa do impacto das inundações em Eldorado do Sul utilizando índices NMDWI (Normalized Modified Difference Water Index) entre 2023 e 2024. O estudo identifica áreas alagadas através da comparação temporal, destacando as regiões mais afetadas pelos eventos de inundação no Rio Grande do Sul.',
      category: 'analitico',
      image: '/lovable-uploads/inundacoes-eldorado.png',
      tags: []
    },
    {
      id: 7,
      title: 'Mudanças do Uso e Cobertura do Solo - Duque de Caxias/RJ',
      description: 'Estudo temporal das transformações no uso e cobertura do solo em Duque de Caxias, Rio de Janeiro, no período de 2013-2023. Inclui análise de transições entre diferentes classes como formação florestal, áreas urbanas, pastagem, agricultura e corpos d\'água, apresentado através de diagramas de Sankey que quantificam as mudanças entre as categorias de uso.',
      category: 'analitico',
      image: '/lovable-uploads/mudancas-duque-caxias.png',
      tags: []
    },
    {
      id: 8,
      title: 'Localização da Bacia do Rio Capivari',
      description: 'Mapa de localização da Bacia Hidrográfica do Rio Capivari com referenciamento espacial. Mostra a delimitação da bacia e sua localização no contexto estadual e nacional, utilizando imagem de satélite como base cartográfica.',
      category: 'localizacao',
      image: '/lovable-uploads/e2c5716d-7438-4f5b-8a6b-db4a38cf1405.png',
      tags: []
    },
    {
      id: 9,
      title: 'Paisagens da Chapada Diamantina/BA',
      description: 'Mapa de localização das principais paisagens e pontos turísticos do Parque Nacional da Chapada Diamantina, destacando atrativos como Morro do Pai Inácio, Lençóis, Cachoeira da Fumaça e Cachoeira do Funil.',
      category: 'localizacao',
      image: '/lovable-uploads/6f1482cb-52b3-4d7f-9c6f-3f4f72fde78d.png',
      tags: []
    },
    {
      id: 10,
      title: 'Trilha do Pico do Barbado - Abaíra/BA',
      description: 'Visualização 3D artística da trilha para o Pico do Barbado, a montanha mais alta do nordeste brasileiro com 2.021 metros de altitude, localizada em Abaíra, Bahia. O mapa apresenta o percurso da trilha de 4,38 km com dificuldade técnica moderada, utilizando modelagem tridimensional para destacar o relevo e a topografia da região.',
      category: 'artistico',
      image: '/lovable-uploads/pico-barbado-artistico.jpg',
      tags: []
    },
    {
      id: 11,
      title: 'Salvador Artístico - Primeira Capital do Brasil',
      description: 'Representação cartográfica artística de Salvador, Bahia, destacando sua importância histórica como primeira capital do Brasil. O mapa utiliza design contemporâneo com paleta de cores em tons de amarelo e preto, evidenciando a malha urbana e características geográficas da cidade através de uma abordagem estética diferenciada.',
      category: 'artistico',
      image: '/lovable-uploads/salvador-artistico.jpg',
      tags: []
    },
    {
      id: 12,
      title: 'Estádios dos Times do Nordeste - Brasileirão 2025',
      description: 'Mapa temático-artístico apresentando a localização dos principais estádios de futebol dos times nordestinos no Campeonato Brasileiro 2025. Inclui Arena Fonte Nova (Bahia), Arena Castelão (Fortaleza/Ceará), Ilha do Retiro (Sport) e Barradão (Vitória), com informações de capacidade e características de cada estádio, utilizando design moderno e elementos gráficos esportivos.',
      category: 'artistico',
      image: '/lovable-uploads/estadios-nordeste.png',
      tags: []
    }
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
                className="group bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-forest border-border/50 hover:border-primary/30 rounded-2xl overflow-hidden transition-smooth"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={map.image}
                      alt={map.title}
                      className={`w-full transition-smooth group-hover:scale-105 ${
                        map.id === 7 ? 'h-80 object-contain bg-muted' : 'h-64 object-cover'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    
                    {/* Ver Detalhes Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-smooth bg-white/90 hover:bg-white text-foreground backdrop-blur-sm border border-white/50 font-montserrat font-medium"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Detalhes
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                        <div className="flex flex-col lg:flex-row h-full">
                          <div className="flex-1 relative">
                            <ZoomableImage src={map.image} alt={map.title} />
                          </div>
                          
                          {/* Details Section */}
                          <div className="lg:w-1/3 p-6 bg-card border-l border-border overflow-y-auto">
                            <h3 className="font-montserrat font-bold text-2xl mb-4 text-foreground">
                              {map.title}
                            </h3>
                            <p className="font-montserrat text-muted-foreground mb-6 leading-relaxed">
                              {map.description}
                            </p>
                            
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                                  Categoria
                                </h4>
                                <Badge 
                                  variant="secondary"
                                  className="bg-primary/10 text-primary border-primary/20 font-montserrat"
                                >
                                  {map.category === 'tematico' ? 'Temático' : 
                                   map.category === 'localizacao' ? 'Localização' : 
                                   map.category === 'analitico' ? 'Analítico' : 'Artístico'}
                                </Badge>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-montserrat font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-smooth">
                      {map.title}
                    </h3>
                    <p className="font-montserrat text-muted-foreground mb-4 leading-relaxed">
                      {map.description}
                    </p>
                    
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