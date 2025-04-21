
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-qoasis-blue py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-qoasis-blue-dark via-qoasis-blue to-qoasis-blue-light opacity-90"></div>
      
      {/* Background Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2LTZoNnY2em0tNi02aC02djZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container relative z-10 flex flex-col md:flex-row items-center mx-auto px-4 text-white">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            SOMOS A <span className="text-qoasis-yellow">CHAVE</span><br/> 
            PARA O SEU <span className="text-qoasis-yellow">SUCESSO</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-md">
            Transformamos sua visão em realidade com soluções tecnológicas inovadoras que impulsionam seu negócio para o futuro.
          </p>
          <div className="flex gap-4">
            <Button className="bg-qoasis-yellow text-qoasis-blue-dark hover:bg-white">
              Entre em Contato
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center animate-slide-up">
          <img 
            src="/lovable-uploads/50f1d336-bae3-4a1c-94eb-261d0b977040.png" 
            alt="Profissional de TI" 
            className="max-w-full md:max-w-md h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
