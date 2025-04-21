
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProdutosSection = () => {
  return (
    <section
      id="produtos"
      className="py-16 relative bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,36,114,0.6),rgba(10,36,114,0.9)),url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80')",
      }}
    >
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-white">PRODUTOS</h2>
          <div className="w-20 h-1 bg-qoasis-yellow mx-auto mt-4 mb-6"></div>
        </div>

        <div className="w-full md:w-3/4 xl:w-1/2 text-center animate-slide-up rounded-lg bg-black/30 p-8 backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white mb-4">Software de Gestão Empresarial</h3>
          <p className="text-white/80 mb-6">
            Nossa solução de gestão integrada reúne todas as operações da sua empresa em uma 
            única plataforma: vendas, estoque, financeiro, RH e muito mais. Aumente a produtividade 
            e tenha controle total do seu negócio com relatórios detalhados e insights valiosos.
          </p>
          <ul className="space-y-2 mb-6 text-left mx-auto max-w-md">
            <li className="flex items-center text-white/90">
              <span className="inline-block w-2 h-2 bg-qoasis-yellow rounded-full mr-2"></span>
              Interface amigável e intuitiva
            </li>
            <li className="flex items-center text-white/90">
              <span className="inline-block w-2 h-2 bg-qoasis-yellow rounded-full mr-2"></span>
              Compatível com dispositivos móveis
            </li>
            <li className="flex items-center text-white/90">
              <span className="inline-block w-2 h-2 bg-qoasis-yellow rounded-full mr-2"></span>
              Sistema na nuvem com backup automático
            </li>
            <li className="flex items-center text-white/90">
              <span className="inline-block w-2 h-2 bg-qoasis-yellow rounded-full mr-2"></span>
              Suporte técnico especializado
            </li>
          </ul>
          <Button className="bg-qoasis-yellow text-qoasis-blue hover:bg-white">
            Solicite uma Demonstração <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProdutosSection;
