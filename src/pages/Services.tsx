import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
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
  ArrowLeft
} from "lucide-react";

const services = [
  {
    id: "general-trading",
    icon: Globe,
    title: "General Trading",
    description: "Comprehensive export/import solutions for diverse product categories worldwide",
    category: "Export/Import"
  },
  {
    id: "food-beverages",
    icon: ShoppingCart,
    title: "Food & Beverages",
    description: "Specialized import and export of quality food products and beverages",
    category: "F&B Trading"
  },
  {
    id: "car-export",
    icon: Car,
    title: "Car Export",
    description: "Professional automotive export services with global logistics support",
    category: "Automotive"
  },
  {
    id: "hr-consultancy",
    icon: Users,
    title: "HR Consultancy",
    description: "Expert human resource consulting and talent management solutions",
    category: "Consultancy"
  },
  {
    id: "precious-metals",
    icon: Gem,
    title: "Precious Metals & Gems",
    description: "Trusted intermediary services for precious metals and gemstone trading",
    category: "Commodities"
  },
  {
    id: "ecommerce",
    icon: Monitor,
    title: "E-Commerce",
    description: "Digital commerce solutions and online marketplace management",
    category: "Digital"
  },
  {
    id: "business-management",
    icon: Briefcase,
    title: "Business Management",
    description: "Strategic business consulting and operational management services",
    category: "Management"
  },
  {
    id: "crude-oil",
    icon: Fuel,
    title: "Crude Oil Trading",
    description: "Professional petroleum and energy commodity trading services",
    category: "Energy"
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics",
    description: "End-to-end supply chain and logistics management solutions",
    category: "Supply Chain"
  },
  {
    id: "agriculture",
    icon: Wheat,
    title: "Agriculture & Fertilizer",
    description: "Agricultural products and fertilizer trading with quality assurance",
    category: "Agriculture"
  },
  {
    id: "travel-agency",
    icon: Plane,
    title: "Travel Agency",
    description: "Comprehensive travel planning and booking services for business and leisure",
    category: "Travel"
  }
];

const Services = () => {
  const navigate = useNavigate();

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
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Our Services
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Explore our comprehensive range of business solutions across multiple industries
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
                <Link key={index} to={`/services/${service.id}`}>
                  <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white cursor-pointer h-full">
                    <CardHeader className="text-center pb-4">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="inline-block px-3 py-1 bg-primary-gold/20 text-primary-gold text-sm rounded-full font-medium mb-2">
                        {service.category}
                      </div>
                      <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary-navy transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-text-secondary leading-relaxed text-center mb-6">
                        {service.description}
                      </CardDescription>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                      >
                        Learn More
                      </Button>
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