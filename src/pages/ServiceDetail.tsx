import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle,
  Star,
  Award
} from "lucide-react";

const serviceDetails = {
  "general-trading": {
    icon: Globe,
    title: "General Trading",
    category: "Export/Import",
    description: "Comprehensive export/import solutions for diverse product categories worldwide",
    longDescription: "Our General Trading division offers end-to-end import and export solutions across multiple product categories. With extensive experience in international markets, we facilitate seamless trade operations between global suppliers and buyers.",
    features: [
      "Multi-product category expertise",
      "Global supplier network",
      "Customs clearance assistance",
      "Quality assurance programs",
      "Market research and analysis",
      "Risk management solutions"
    ],
    benefits: [
      "Access to worldwide markets",
      "Reduced operational costs",
      "Streamlined logistics",
      "Regulatory compliance support"
    ]
  },
  "food-beverages": {
    icon: ShoppingCart,
    title: "Food & Beverages",
    category: "F&B Trading",
    description: "Specialized import and export of quality food products and beverages",
    longDescription: "We specialize in the import and export of premium food products and beverages, ensuring the highest quality standards and regulatory compliance across international markets.",
    features: [
      "Cold chain logistics",
      "Food safety certifications",
      "Halal and organic products",
      "Private label services",
      "Seasonal product sourcing",
      "Packaging solutions"
    ],
    benefits: [
      "Quality guaranteed products",
      "Temperature-controlled transport",
      "Certification assistance",
      "Market entry support"
    ]
  },
  "car-export": {
    icon: Car,
    title: "Car Export",
    category: "Automotive",
    description: "Professional automotive export services with global logistics support",
    longDescription: "Our automotive export division provides comprehensive services for vehicle exports, from documentation to delivery, ensuring your vehicles reach their destination safely and efficiently.",
    features: [
      "Vehicle inspection services",
      "Export documentation",
      "Shipping arrangements",
      "Insurance coverage",
      "Port handling services",
      "Destination clearance"
    ],
    benefits: [
      "Professional handling",
      "Competitive shipping rates",
      "Complete insurance coverage",
      "Track and trace systems"
    ]
  },
  "hr-consultancy": {
    icon: Users,
    title: "HR Consultancy",
    category: "Consultancy",
    description: "Expert human resource consulting and talent management solutions",
    longDescription: "Our HR consultancy services help businesses optimize their human capital through strategic planning, talent acquisition, and organizational development solutions.",
    features: [
      "Talent acquisition services",
      "Organizational restructuring",
      "Performance management systems",
      "Training and development",
      "HR policy development",
      "Compensation planning"
    ],
    benefits: [
      "Improved employee retention",
      "Enhanced productivity",
      "Compliance assurance",
      "Strategic HR planning"
    ]
  },
  "precious-metals": {
    icon: Gem,
    title: "Precious Metals & Gems",
    category: "Commodities",
    description: "Trusted intermediary services for precious metals and gemstone trading",
    longDescription: "As trusted intermediaries in the precious metals and gemstone market, we facilitate secure transactions between suppliers and buyers while ensuring authenticity and quality.",
    features: [
      "Authentication services",
      "Market price monitoring",
      "Secure transaction facilitation",
      "Certification assistance",
      "Storage solutions",
      "Investment advisory"
    ],
    benefits: [
      "Verified authenticity",
      "Competitive pricing",
      "Secure transactions",
      "Expert guidance"
    ]
  },
  "ecommerce": {
    icon: Monitor,
    title: "E-Commerce",
    category: "Digital",
    description: "Digital commerce solutions and online marketplace management",
    longDescription: "Our e-commerce solutions help businesses establish and grow their online presence through comprehensive digital commerce strategies and marketplace management.",
    features: [
      "Online store development",
      "Marketplace integration",
      "Digital marketing",
      "Inventory management",
      "Payment gateway setup",
      "Analytics and reporting"
    ],
    benefits: [
      "Increased online visibility",
      "Higher conversion rates",
      "Streamlined operations",
      "Data-driven insights"
    ]
  },
  "business-management": {
    icon: Briefcase,
    title: "Business Management",
    category: "Management",
    description: "Strategic business consulting and operational management services",
    longDescription: "Our business management consultancy provides strategic guidance and operational support to help organizations achieve their goals and optimize performance.",
    features: [
      "Strategic planning",
      "Operational optimization",
      "Process improvement",
      "Change management",
      "Financial planning",
      "Risk assessment"
    ],
    benefits: [
      "Improved efficiency",
      "Cost optimization",
      "Strategic clarity",
      "Enhanced profitability"
    ]
  },
  "crude-oil": {
    icon: Fuel,
    title: "Crude Oil Trading",
    category: "Energy",
    description: "Professional petroleum and energy commodity trading services",
    longDescription: "Our energy commodities division specializes in crude oil trading, providing market expertise and logistical support for energy sector transactions.",
    features: [
      "Market analysis",
      "Price risk management",
      "Logistics coordination",
      "Quality specifications",
      "Documentation services",
      "Regulatory compliance"
    ],
    benefits: [
      "Market expertise",
      "Risk mitigation",
      "Efficient logistics",
      "Regulatory support"
    ]
  },
  "logistics": {
    icon: Truck,
    title: "Logistics",
    category: "Supply Chain",
    description: "End-to-end supply chain and logistics management solutions",
    longDescription: "Our logistics services provide comprehensive supply chain solutions, from warehousing to last-mile delivery, ensuring efficient and cost-effective operations.",
    features: [
      "Warehousing solutions",
      "Transportation management",
      "Inventory optimization",
      "Last-mile delivery",
      "Cross-docking services",
      "Supply chain analytics"
    ],
    benefits: [
      "Reduced shipping costs",
      "Faster delivery times",
      "Improved inventory turnover",
      "Enhanced customer satisfaction"
    ]
  },
  "agriculture": {
    icon: Wheat,
    title: "Agriculture & Fertilizer",
    category: "Agriculture",
    description: "Agricultural products and fertilizer trading with quality assurance",
    longDescription: "We facilitate the trading of agricultural products and fertilizers, connecting farmers and distributors with quality products and reliable supply chains.",
    features: [
      "Quality testing services",
      "Seasonal sourcing",
      "Bulk handling capabilities",
      "Storage facilities",
      "Transportation services",
      "Market intelligence"
    ],
    benefits: [
      "Consistent quality supply",
      "Competitive pricing",
      "Seasonal availability",
      "Expert market knowledge"
    ]
  },
  "travel-agency": {
    icon: Plane,
    title: "Travel Agency",
    category: "Travel",
    description: "Comprehensive travel planning and booking services for business and leisure",
    longDescription: "Our travel agency provides complete travel solutions for both corporate and leisure travelers, ensuring memorable experiences and cost-effective travel arrangements.",
    features: [
      "Flight booking services",
      "Hotel reservations",
      "Visa assistance",
      "Travel insurance",
      "Group travel packages",
      "24/7 customer support"
    ],
    benefits: [
      "Best price guarantees",
      "Personalized service",
      "Travel support",
      "Flexible booking options"
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceDetails[id as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8">
            <Link to="/services">
              <Button variant="ghost" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
              <IconComponent className="w-12 h-12 text-white" />
            </div>
            <Badge className="mb-4 bg-primary-gold/20 text-primary-gold hover:bg-primary-gold/30">
              {service.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              {service.title}
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {service.longDescription}
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our {service.title.toLowerCase()} services 
            and how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-gold hover:opacity-90 text-primary-navy font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-luxury"
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg transition-all duration-300"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;