
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`relative bg-qoasis-blue ${scrolled ? 'py-3' : 'py-4'} transition-all duration-300`}>
      <div className="absolute inset-0 bg-gradient-to-r from-qoasis-blue-dark via-qoasis-blue to-qoasis-blue-light opacity-90"></div>
      
      <nav className="container mx-auto px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <div className="text-white font-bold text-2xl">
            <span className="text-qoasis-yellow">Q</span>OASIS
          </div>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#quem-somos" className="text-white hover:text-qoasis-yellow transition-colors">Quem Somos</a>
          <a href="#servicos" className="text-white hover:text-qoasis-yellow transition-colors">Serviços</a>
          <a href="#produtos" className="text-white hover:text-qoasis-yellow transition-colors">Produtos</a>
          <a href="#vantagens" className="text-white hover:text-qoasis-yellow transition-colors">Vantagens</a>
          <a href="#credenciais" className="text-white hover:text-qoasis-yellow transition-colors">Credenciais</a>
          <a href="#contato" className="text-white hover:text-qoasis-yellow transition-colors">Contato</a>
        </div>
        
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
