
import { useState } from "react";
import { Heart, Eye, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const QuemSomosCard = ({ 
  icon: Icon, 
  title, 
  description, 
  isActive, 
  onClick 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  isActive: boolean; 
  onClick: () => void;
}) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 ${
        isActive 
          ? "border-qoasis-yellow bg-white shadow-lg" 
          : "border-gray-200 bg-gray-50 hover:border-qoasis-blue-light"
      }`}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className={`p-2 rounded-full ${
          isActive ? "bg-qoasis-yellow text-qoasis-blue" : "bg-gray-100 text-qoasis-blue-light"
        }`}>
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const QuemSomosSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const cards = [
    {
      title: "Missão",
      icon: Target,
      description: "Fornecer soluções tecnológicas inovadoras que impulsionem o sucesso dos nossos clientes, garantindo excelência, segurança e sustentabilidade."
    },
    {
      title: "Visão",
      icon: Eye,
      description: "Ser referência em soluções de TI no mercado nacional, reconhecida pela qualidade dos serviços, inovação tecnológica e compromisso com os resultados dos clientes."
    },
    {
      title: "Valores",
      icon: Heart,
      description: "Comprometimento, inovação, ética, responsabilidade, excelência técnica e valorização das relações humanas em todas as nossas interações."
    }
  ];

  return (
    <section id="quem-somos" className="py-16 bg-qoasis-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-qoasis-blue">QUEM SOMOS?</h2>
          <div className="w-20 h-1 bg-qoasis-yellow mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-qoasis-gray-dark">
            Somos uma empresa especializada em tecnologia da informação, 
            comprometida em oferecer soluções personalizadas e inovadoras que 
            transformam a maneira como nossos clientes fazem negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
          {cards.map((card, index) => (
            <QuemSomosCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              isActive={activeCard === index}
              onClick={() => setActiveCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
