import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Globe2, Users2 } from "lucide-react";

const stats = [
  { icon: Globe2, value: "50+", label: "Countries Served" },
  { icon: Users2, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: CheckCircle, value: "1000+", label: "Successful Projects" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              About GlobalTrade Corp
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              With over a decade of experience in international trade and business consultancy, 
              we have established ourselves as a trusted partner for businesses worldwide. 
              Our diverse portfolio spans across multiple industries, providing comprehensive 
              solutions tailored to your specific needs.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              From general trading and logistics to specialized services in precious metals, 
              crude oil, and human resources, we leverage our global network and expertise 
              to deliver exceptional results for our clients.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant"
            >
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-elegant transition-shadow duration-300 bg-white border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-navy" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-text-secondary font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;