import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary-navy/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Global Trade
          <span className="bg-gradient-gold bg-clip-text text-transparent block">
            Excellence
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Your trusted partner in international trade, consultancy, and business solutions across multiple industries
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:opacity-90 text-primary-navy font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-luxury"
          >
            Explore Services
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;