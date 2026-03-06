import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Truck, Monitor, Plane, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  const { t } = useLanguage();

  const heroServices = [
    {
      id: "general-trading",
      icon: Globe,
      titleKey: "generalTrading",
      color: "text-blue-400"
    },
    {
      id: "logistics",
      icon: Truck,
      titleKey: "logistics",
      color: "text-green-400"
    },
    {
      id: "ecommerce",
      icon: Monitor,
      titleKey: "ecommerce",
      color: "text-purple-400"
    },
    {
      id: "travel-agency",
      icon: Plane,
      titleKey: "travelAgency",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero image.jpg')` }}
      >
        <div className="absolute inset-0 bg-primary-navy/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="text-left text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              {t("heroDescription")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/services">
                <Button 
                  size="lg" 
                  className="bg-gradient-gold hover:opacity-90 text-primary-navy font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-luxury"
                >
                  {t("exploreServices")}
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg transition-all duration-300"
                >
                  {t("contactUs")}
                </Button>
              </Link>
            </div>

            {/* Partnership Indicator */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`/picture ${i}.png`}
                    alt={`Partner ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-white/90 text-sm md:text-base">
                Trusted by <span className="font-bold">500+</span> Global Partners
              </p>
            </div>
          </div>

          {/* Right Side - Service Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {heroServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link key={service.id} to={`/services/${service.id}`}>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer h-full">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center min-h-[140px]">
                      <IconComponent className={`w-12 h-12 mb-3 ${service.color}`} />
                      <p className="text-white font-semibold text-sm md:text-base">
                        {t(service.titleKey)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;
