
import { Award, Shield, Clock, Users } from "lucide-react";

interface CredentialProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Credential = ({ icon, title, description }: CredentialProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 service-card-hover">
      <div className="flex items-center mb-4">
        <div className="text-qoasis-blue-light mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-qoasis-blue">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CredenciaisSection = () => {
  const credentials = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certificações",
      description: "Nossa equipe possui certificações Microsoft, Cisco, AWS e outras reconhecidas internacionalmente."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança",
      description: "Seguimos os mais rigorosos protocolos de segurança e proteção de dados em todos os serviços."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Experiência",
      description: "Mais de uma década transformando negócios através de soluções tecnológicas inovadoras."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Clientes",
      description: "Atendemos mais de 500 empresas em diversos segmentos com altos índices de satisfação."
    }
  ];

  return (
    <section id="credenciais" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-qoasis-blue">CREDENCIAIS</h2>
          <div className="w-20 h-1 bg-qoasis-yellow mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-qoasis-gray-dark">
            Conheça os diferenciais que fazem da QOASIS uma referência no mercado de tecnologia da informação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {credentials.map((credential, index) => (
            <Credential
              key={index}
              icon={credential.icon}
              title={credential.title}
              description={credential.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredenciaisSection;
