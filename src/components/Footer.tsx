
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-qoasis-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-qoasis-yellow">Q</span>OASIS
            </div>
            <p className="text-white/80 mb-4">
              Transformando ideias em soluções tecnológicas inovadoras para impulsionar o seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-qoasis-yellow transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-qoasis-yellow transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-qoasis-yellow transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-qoasis-yellow transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-qoasis-yellow">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Consultoria</a></li>
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Alojamento Web</a></li>
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Software</a></li>
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Hardware</a></li>
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Design Gráfico & Web</a></li>
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Material Elétrico</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-qoasis-yellow">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Quem Somos</a></li>
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Produtos</a></li>
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Vantagens</a></li>
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Credenciais</a></li>
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-qoasis-yellow transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-qoasis-yellow">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-qoasis-yellow flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Av. Principal, 1234, Centro, Cidade - Estado, CEP 12345-678</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-qoasis-yellow flex-shrink-0" />
                <span className="text-white/80">+55 (11) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-qoasis-yellow flex-shrink-0" />
                <span className="text-white/80">contato@qoasis.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} QOASIS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
