import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesCardData } from "@/data/services";

const iconMap = {
  globe: Globe,
  "shopping-cart": ShoppingCart,
  car: Car,
  users: Users,
  gem: Gem,
  monitor: Monitor,
  briefcase: Briefcase,
  fuel: Fuel,
  truck: Truck,
  wheat: Wheat,
  plane: Plane,
} as const;

const ServicesGrid = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            {t("ourServices")}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t("servicesSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesCardData.map((service) => {
            const IconComponent = iconMap[service.iconKey];
            return (
              <Card
                key={service.id}
                className="group border border-border/60 shadow-sm hover:shadow-elegant transition-all duration-300 bg-white overflow-hidden h-full flex flex-col"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${service.iconBg}`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-primary">
                        {t(service.titleKey)}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-4">
                    {service.shortDescription}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-primary-gold font-semibold text-sm hover:text-primary-gold/80 transition-colors mt-auto"
                  >
                    {t("learnMore")}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
