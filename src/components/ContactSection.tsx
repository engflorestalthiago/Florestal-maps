import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Instagram, Mail, Phone, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/thiago-martins-engflorestal/',
      color: 'hover:bg-blue-600',
      description: 'Conecte-se profissionalmente'
    },
    {
      name: 'Instagram', 
      icon: Instagram,
      url: '#',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
      description: 'Acompanhe projetos'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: '#',
      color: 'hover:bg-green-500',
      description: 'Mensagem direta'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contato@thiagomartins.eng.br',
      color: 'hover:bg-red-500',
      description: 'Envie um email'
    },
    {
      name: 'Telefone',
      icon: Phone,
      url: 'tel:+5511999999999',
      color: 'hover:bg-primary',
      description: 'Ligue agora'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Vamos Conversar
            </h2>
            <p className="font-montserrat text-xl text-muted-foreground max-w-2xl mx-auto">
              Entre em contato para discutir seu próximo projeto de mapeamento ou 
              para explorar oportunidades de colaboração.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Card 
                  key={link.name}
                  className="group bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-forest border-border/50 hover:border-primary/30 rounded-2xl overflow-hidden transition-smooth"
                >
                  <CardContent className="p-6">
                    <a 
                      href={link.url}
                      target={link.name === 'LinkedIn' ? '_blank' : '_self'}
                      rel={link.name === 'LinkedIn' ? 'noopener noreferrer' : ''}
                      className="flex flex-col items-center text-center space-y-4 group"
                    >
                      <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth ${link.color} group-hover:text-white`}>
                        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-smooth" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-lg text-foreground group-hover:text-primary transition-smooth">
                          {link.name}
                        </h3>
                        <p className="font-montserrat text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Card className="bg-gradient-forest text-white shadow-forest rounded-2xl overflow-hidden inline-block">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-2xl mb-4">
                  Pronto para seu próximo projeto?
                </h3>
                <p className="font-montserrat mb-6 opacity-90">
                  Transforme seus dados em mapas que comunicam e inspiram ação.
                </p>
                <Button 
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-montserrat font-semibold text-lg px-8 py-4 rounded-xl"
                  onClick={() => window.open('https://www.linkedin.com/in/thiago-martins-engflorestal/', '_blank')}
                >
                  Iniciar Conversa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;