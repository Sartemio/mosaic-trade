import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Services = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleServiceSelect = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  const servicePopupPoints = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const s of services) {
      map.set(
        s.id,
        t(s.popupPointsKey)
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
      );
    }
    return map;
  }, [t]);

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
            {services.map((service) => {
              const IconComponent = service.icon;
              const points = servicePopupPoints.get(service.id) ?? [];
              return (
                <Card
                  key={service.id}
                  className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white h-full"
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl ${service.iconBgClass} flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 ${service.iconFgClass}`} />
                    </div>

                    <h3 className="text-lg font-bold text-primary mb-2">{t(service.titleKey)}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                      {t(service.descKey)}
                    </p>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="link"
                          className="p-0 h-auto justify-start text-primary-gold hover:text-primary-gold/90 font-semibold"
                        >
                          {t("learnMore")}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-xl">
                        <DialogHeader>
                          <DialogTitle className="text-primary">{t(service.titleKey)}</DialogTitle>
                        </DialogHeader>

                        <div className="space-y-4">
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {t(service.popupIntroKey)}
                          </p>

                          {points.length > 0 && (
                            <ul className="list-disc pl-5 space-y-2 text-sm text-text-secondary">
                              {points.map((p, idx) => (
                                <li key={idx}>{p}</li>
                              ))}
                            </ul>
                          )}

                          <div className="flex justify-end pt-2">
                            <Link to="/contact">
                              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                                {t("contactUs")}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
