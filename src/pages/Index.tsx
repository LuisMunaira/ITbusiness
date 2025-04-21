
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import ServicosSection from "@/components/ServicosSection";
import ProdutosSection from "@/components/ProdutosSection";
import VantagensSection from "@/components/VantagensSection";
import CredenciaisSection from "@/components/CredenciaisSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <QuemSomosSection />
      <ServicosSection />
      <ProdutosSection />
      <VantagensSection />
      <CredenciaisSection />
      <Footer />
    </div>
  );
};

export default Index;
