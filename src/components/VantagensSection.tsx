
import { CheckCircle } from "lucide-react";

const VantagensSection = () => {
  const vantagens = [
    "Equipe técnica altamente qualificada e certificada",
    "Mais de 10 anos de experiência no mercado",
    "Suporte técnico dedicado 24/7",
    "Soluções personalizadas para cada tipo de negócio",
    "Tecnologia de ponta com os melhores fornecedores",
    "Processos ágeis e eficientes",
    "Compromisso com prazos e resultados",
    "Melhor custo-benefício do mercado"
  ];

  return (
    <section id="vantagens" className="py-16 bg-qoasis-gray-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-slide-right">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Equipe QOASIS" 
              className="max-w-full rounded-lg shadow-xl"
            />
          </div>
          
          <div className="md:w-1/2 animate-fade-in">
            <h2 className="text-3xl font-bold text-qoasis-blue mb-6">
              VANTAGENS DE ESCOLHER A NOSSA EMPRESA
            </h2>
            <div className="w-20 h-1 bg-qoasis-yellow mb-6"></div>
            
            <div className="space-y-4">
              {vantagens.map((vantagem, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-qoasis-blue-light mr-3 flex-shrink-0" />
                  <p className="text-qoasis-gray-dark">{vantagem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VantagensSection;
