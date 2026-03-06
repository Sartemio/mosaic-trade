import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Globe, 
  ShoppingCart, 
  Car, 
  Users, 
  Gem, 
  Monitor, 
  Briefcase, 
  Fuel, 
  Truck, 
  Wheat,
  Plane,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const services = [
    {
      id: "general-trading",
      icon: Globe,
      titleKey: "generalTrading",
      categoryKey: "categoryExportImport",
      iconBg: "bg-amber-500",
      descriptionBullets: [
        "Import and export of diversified goods, including raw materials and finished products",
        "Acting as an international trading hub connecting Asia, Europe, and Africa"
      ]
    },
    {
      id: "food-beverages",
      icon: ShoppingCart,
      titleKey: "foodBeverages",
      categoryKey: "categoryFB",
      iconBg: "bg-emerald-500",
      descriptionBullets: [
        "International trade of food products and non-alcoholic beverages",
        "Re-export hub supplying GCC and Asian markets"
      ]
    },
    {
      id: "car-export",
      icon: Car,
      titleKey: "carExport",
      categoryKey: "categoryAutomotive",
      iconBg: "bg-rose-500",
      descriptionBullets: [
        "Trading of new and used vehicles and spare parts",
        "Vehicle upgrading and customization services"
      ]
    },
    {
      id: "hr-consultancy",
      icon: Users,
      titleKey: "hrConsultancy",
      categoryKey: "categoryConsultancy",
      iconBg: "bg-violet-500",
      descriptionBullets: [
        "Recruitment consulting, talent management, and workforce mobility",
        "Outsourcing and labor migration solutions for the UAE market"
      ]
    },
    {
      id: "precious-metals",
      icon: Gem,
      titleKey: "preciousMetals",
      categoryKey: "categoryCommodities",
      iconBg: "bg-yellow-500",
      descriptionBullets: [
        "Intermediation in the trading of gold, diamonds, and precious stones (graphite, rubies, etc.)",
        "Dubai as a strategic hub providing access to international exchanges (e.g. DMCC)"
      ]
    },
    {
      id: "ecommerce",
      icon: Monitor,
      titleKey: "ecommerce",
      categoryKey: "categoryDigital",
      iconBg: "bg-sky-500",
      descriptionBullets: [
        "Global digital trade through online platforms",
        "Promotion of handicrafts, fashion, and agro-processed products to international markets",
        "Strong logistics infrastructure supported by Aramex, DHL, and regional hubs"
      ]
    },
    {
      id: "business-management",
      icon: Briefcase,
      titleKey: "businessManagement",
      categoryKey: "categoryManagement",
      iconBg: "bg-teal-600",
      descriptionBullets: [
        "Corporate management, strategy, structuring, and advisory services",
        "Support to companies and entrepreneurs requiring professional management services",
        "Advisory for SMEs in expansion, including governance and compliance solutions",
        "Strategic bridge between investors in the UAE and producers in Africa",
        "Corporate due diligence services in the UAE (risk mitigation and partner verification)"
      ]
    },
    {
      id: "crude-oil",
      icon: Fuel,
      titleKey: "crudeOil",
      categoryKey: "categoryEnergy",
      iconBg: "bg-slate-700",
      descriptionBullets: [
        "Trading and intermediation of crude oil and aviation fuel",
        "UAE positioned as one of the world’s leading energy hubs"
      ]
    },
    {
      id: "logistics",
      icon: Truck,
      titleKey: "logistics",
      categoryKey: "categorySupplyChain",
      iconBg: "bg-orange-500",
      descriptionBullets: [
        "Transportation, storage, and re-export services",
        "Land, air, and maritime logistics solutions"
      ]
    },
    {
      id: "agriculture",
      icon: Wheat,
      titleKey: "agriculture",
      categoryKey: "categoryAgriculture",
      iconBg: "bg-lime-600",
      descriptionBullets: [
        "Wholesale trading of natural fertilizers and agricultural recovery materials (import & export)",
        "Organic fertilizers and trading and manufacturing of pesticides",
        "Strategic advantage of UAE ports with high efficiency and multiple gateways, reducing lead time and re-export costs"
      ]
    },
    {
      id: "travel-agency",
      icon: Plane,
      titleKey: "travelAgency",
      categoryKey: "categoryTravel",
      iconBg: "bg-cyan-500",
      descriptionBullets: [
        "Corporate and leisure travel planning services",
        "End-to-end travel arrangements including flights, hotels, and visas"
      ]
    }
  ];

  const handleServiceSelect = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="ghost" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("backToHome")}
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              {t("ourServices")}
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              {t("servicesSubtitle")}
            </p>
            
            <div className="flex justify-center mb-8">
              <SearchBar onServiceSelect={handleServiceSelect} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link key={index} to={`/services/${service.id}`} className="block h-full">
                  <Card className="group h-full border border-border/60 shadow-sm hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 bg-white">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-primary">
                            {t(service.titleKey)}
                          </CardTitle>
                          <p className="text-xs text-text-secondary mt-1">
                            {t(service.categoryKey)}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-1 text-sm text-text-secondary mb-4 flex-1">
                        {service.descriptionBullets.map((line: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1 text-primary-gold">•</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-2">
                        <span className="inline-flex items-center text-primary-gold font-semibold text-sm group-hover:translate-x-1 transition-transform">
                          {t("learnMore")}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
