
import { 
  Headphones, 
  Server, 
  Code, 
  HardDrive, 
  Palette, 
  Cpu 
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 service-card-hover border border-gray-100">
      <div className="text-qoasis-blue-light mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-qoasis-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicosSection = () => {
  const services = [
    {
      icon: <Headphones className="h-12 w-12" />,
      title: "Consultoria",
      description: "Orientamos sua empresa na tomada de decisões estratégicas de TI, com análise personalizada das necessidades do seu negócio."
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: "Alojamento Web",
      description: "Soluções de hospedagem seguras, rápidas e escaláveis para seu site, aplicativo ou sistema em servidores de alto desempenho."
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Software",
      description: "Desenvolvimento de softwares personalizados e integração de sistemas para automatizar e otimizar processos empresariais."
    },
    {
      icon: <HardDrive className="h-12 w-12" />,
      title: "Hardware",
      description: "Fornecimento e manutenção de equipamentos de informática com as melhores marcas e garantia de qualidade."
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Design Gráfico & Web",
      description: "Criação de identidade visual, websites responsivos e interfaces de usuário modernas e intuitivas."
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "Material Elétrico",
      description: "Fornecimento de componentes elétricos e eletrônicos de qualidade para projetos de infraestrutura de TI."
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-qoasis-blue">SERVIÇOS</h2>
          <div className="w-20 h-1 bg-qoasis-yellow mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-qoasis-gray-dark">
            Oferecemos uma gama completa de serviços de TI para atender às necessidades 
            específicas do seu negócio e impulsionar seu crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
