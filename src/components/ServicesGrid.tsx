import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { services } from "@/content/services";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ServicesGrid = () => {
  const { t } = useLanguage();

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
          {services.map((service) => {
            const IconComponent = service.icon;
            const points = servicePopupPoints.get(service.id) ?? [];

            return (
              <Card
                key={service.id}
                className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/90 h-full"
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
  );
};

export default ServicesGrid;
