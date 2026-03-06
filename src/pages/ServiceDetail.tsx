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
    description: "Import and export of diversified goods, connecting global markets through Dubai.",
    longDescription: "Our General Trading division acts as an international hub connecting Asia, Europe, and Africa. We move both raw materials and finished products across borders, managing documentation, compliance, and logistics so that our clients can focus on their core business.",
    highlights: [
      "Import and export of diversified goods, including raw materials and finished products",
      "Acting as an international trading hub connecting Asia, Europe, and Africa"
    ],
    features: [
      "Multi-category sourcing of raw materials and finished products",
      "Established network of suppliers and off-takers across Asia, Europe, and Africa",
      "End-to-end trade documentation and customs coordination",
      "Quality and compliance checks aligned with destination-market standards",
      "Market intelligence on pricing, demand, and trade regulations",
      "Flexible trade structures including direct export, re-export, and agency models"
    ],
    benefits: [
      "Access to multiple international markets through a single trading partner",
      "Reduced operational complexity and faster go-to-market cycles",
      "Optimised logistics costs via consolidated shipments and re-export flows",
      "Lower regulatory and documentation risk through experienced trade support"
    ]
  },
  "food-beverages": {
    icon: ShoppingCart,
    title: "Import & Export of Food Products and Non-Alcoholic Beverages",
    category: "F&B Trading",
    description: "International trade of food products and non‑alcoholic beverages with GCC and Asian reach.",
    longDescription: "Our Food & Beverage trade desk focuses on safe, compliant, and efficient movement of food products and non‑alcoholic beverages. Using the UAE as a re‑export hub, we connect producers and brand owners with fast‑growing GCC and Asian markets.",
    highlights: [
      "International trade of food products and non-alcoholic beverages",
      "Re-export hub supplying GCC and Asian markets"
    ],
    features: [
      "Sourcing of branded and private‑label food and beverage products",
      "Experience with GCC, Asian, and African food import regulations",
      "Temperature‑controlled and dry supply chain options",
      "Halal, organic, and specialty product handling capabilities",
      "Re‑export structuring from UAE free‑zones to regional markets",
      "Support with labelling, packaging, and product adaptation"
    ],
    benefits: [
      "Accelerated market entry into GCC and Asian food corridors",
      "Reduced product spoilage and quality risks through structured logistics",
      "Easier regulatory navigation for importers and brand owners",
      "Access to a diversified portfolio of suppliers and buyers"
    ]
  },
  "car-export": {
    icon: Car,
    title: "Automobile Export",
    category: "Automotive",
    description: "Export of new and used vehicles, spare parts, and custom vehicle upgrades.",
    longDescription: "From individual units to bulk fleets, we manage the export of new and used vehicles and spare parts from the UAE to global markets. Our team also coordinates vehicle customization so that exports meet regulatory, performance, or branding requirements.",
    highlights: [
      "Trading of new and used vehicles and spare parts",
      "Vehicle upgrading and customization services"
    ],
    features: [
      "Sourcing of passenger cars, SUVs, commercial vehicles, and specialty units",
      "Export of OEM and aftermarket spare parts",
      "Vehicle modification and upgrade coordination (suspension, body kits, interiors, branding)",
      "Pre‑export inspection and condition reporting",
      "Shipping and port handling across Ro‑Ro and container routes",
      "Destination‑specific documentation and compliance support"
    ],
    benefits: [
      "Access to competitive vehicle and spare‑part supply from the UAE",
      "Higher resale value through tailored upgrades and customization",
      "Reduced export risk via structured inspection and documentation",
      "Streamlined end‑to‑end logistics for global automotive buyers"
    ]
  },
  "hr-consultancy": {
    icon: Users,
    title: "Human Resources Consultancy",
    category: "Consultancy",
    description: "Strategic HR consulting, talent management, and workforce mobility for the UAE.",
    longDescription: "Our Human Resources Consultancy supports organisations in the UAE with recruitment, workforce planning, and people‑operations strategies. We help employers attract the right talent, structure compliant employment models, and manage labour mobility across borders.",
    highlights: [
      "Recruitment consulting, talent management, and workforce mobility",
      "Outsourcing and labor migration solutions for the UAE market"
    ],
    features: [
      "End‑to‑end recruitment support for white‑collar and blue‑collar roles",
      "Design of talent management and performance frameworks",
      "Advisory on workforce planning and organisational structure",
      "HR outsourcing models for non‑core functions",
      "Support with labour migration, visas, and regulatory compliance in the UAE",
      "Training and capability‑building programmes for HR teams"
    ],
    benefits: [
      "Stronger alignment between business strategy and workforce capabilities",
      "Reduced hiring risk and faster role fulfilment",
      "More compliant and scalable HR operations in the UAE",
      "Improved employee engagement, retention, and performance"
    ]
  },
  "precious-metals": {
    icon: Gem,
    title: "Precious Metals & Gemstones Trading (Intermediary – Non-Seller)",
    category: "Commodities",
    description: "Intermediary services for gold, diamonds, and precious stones, with Dubai as a global hub.",
    longDescription: "Operating strictly as an intermediary, we connect verified buyers and sellers of precious metals and gemstones through Dubai’s regulated ecosystem. Our role is to structure transparent transactions, coordinate due diligence, and facilitate access to reputable exchanges such as DMCC.",
    highlights: [
      "Intermediation in the trading of gold, diamonds, and precious stones (graphite, rubies, etc.)",
      "Dubai as a strategic hub providing access to international exchanges (e.g. DMCC)"
    ],
    features: [
      "Intermediary facilitation for gold, diamonds, and other precious stones",
      "Vendor and buyer pre‑screening and documentation support",
      "Transaction structuring aligned with international compliance standards",
      "Coordination with Dubai‑based exchanges and free‑zones (including DMCC)",
      "Support with certification, assaying, and secure logistics partners",
      "Confidential deal handling and stakeholder coordination"
    ],
    benefits: [
      "Access to vetted counterparties in the precious metals and gemstone markets",
      "Lower counterparty and compliance risk in high‑value transactions",
      "Transparent structures leveraging Dubai’s regulatory and logistics advantages",
      "Specialised support for institutional and private investors"
    ]
  },
  "ecommerce": {
    icon: Monitor,
    title: "International E-Commerce",
    category: "Digital",
    description: "International e-commerce solutions connecting regional products to global buyers.",
    longDescription: "Our International E‑Commerce practice promotes handicrafts, fashion, and agro‑processed products to worldwide audiences through digital channels. We manage storefronts, logistics, and cross‑border operations using leading carriers such as Aramex and DHL.",
    highlights: [
      "Global digital trade through online platforms",
      "Promotion of handicrafts, fashion, and agro-processed products to international markets",
      "Strong logistics infrastructure supported by Aramex, DHL, and regional hubs"
    ],
    features: [
      "Creation and management of branded online stores and marketplace listings",
      "Digital merchandising for handicrafts, fashion, and agro‑processed products",
      "Cross‑border shipping integration with major logistics partners",
      "Payment gateway and currency management for international buyers",
      "Content and campaign support for global brand visibility",
      "Order tracking, returns management, and customer‑service coordination"
    ],
    benefits: [
      "Access to international customers without heavy physical investment",
      "More predictable cross‑border logistics through integrated partners",
      "Stronger brand presence for regional producers and artisans",
      "Higher conversion and repeat business via optimised digital journeys"
    ]
  },
  "business-management": {
    icon: Briefcase,
    title: "Business Management & Consulting",
    category: "Management",
    description: "End‑to‑end business management, advisory, and governance support for growing companies.",
    longDescription: "Our Business Management & Consulting team helps corporates, SMEs, and entrepreneurs structure, scale, and govern their organisations. From strategy and organisation design to investor relations and due diligence, we provide a bridge between UAE‑based capital and African and international producers.",
    highlights: [
      "Corporate management, strategy, structuring, and advisory services",
      "Support to companies and entrepreneurs requiring professional management services",
      "Advisory for SMEs in expansion, including governance and compliance solutions",
      "Strategic bridge between investors in the UAE and producers in Africa",
      "Corporate due diligence services in the UAE (risk mitigation and partner verification)"
    ],
    features: [
      "Strategy design, business planning, and operating‑model definition",
      "Corporate structuring and governance frameworks for growing companies",
      "Advisory for SME expansion, including compliance and risk policies",
      "Transaction support and investor‑readiness for UAE and regional investors",
      "Partner due‑diligence and background checks in the UAE market",
      "Intermediation between African producers and UAE‑based investors or buyers"
    ],
    benefits: [
      "Clearer strategic direction and governance for owners and boards",
      "Reduced operational and reputational risk when entering new markets",
      "Better alignment between investors, management teams, and partners",
      "Higher enterprise value driven by structured growth and compliance"
    ]
  },
  "crude-oil": {
    icon: Fuel,
    title: "Crude Oil & Jet Fuel Trading",
    category: "Energy",
    description: "Energy trading and intermediation focused on crude oil and aviation fuel.",
    longDescription: "Leveraging the UAE’s position as one of the world’s foremost energy hubs, we connect producers, refiners, and large consumers of crude oil and jet fuel. Our role covers commercial intermediation, documentation support, and alignment with international compliance frameworks.",
    highlights: [
      "Trading and intermediation of crude oil and aviation fuel",
      "UAE positioned as one of the world’s leading energy hubs"
    ],
    features: [
      "Sourcing and placement of crude oil and aviation fuel cargoes",
      "Commercial intermediation between producers, traders, and off‑takers",
      "Support with contract structures, pricing formulas, and shipment terms",
      "Coordination with logistics partners for marine and pipeline movements",
      "Documentation support aligned with international sanctions and compliance rules",
      "Market intelligence on benchmark pricing and demand trends"
    ],
    benefits: [
      "Improved access to regional and international energy supply",
      "Reduced counterparty and compliance risk in complex energy deals",
      "More efficient execution of large‑ticket transactions",
      "Stronger visibility on pricing, timing, and logistics constraints"
    ]
  },
  "logistics": {
    icon: Truck,
    title: "Logistics Services",
    category: "Supply Chain",
    description: "Integrated logistics services covering transport, storage, and re‑export flows.",
    longDescription: "We design and coordinate multi‑modal logistics solutions that connect factories, warehouses, ports, and final customers. Using the UAE’s strategic geography, we support land, air, and sea movements with re‑export options to regional markets.",
    highlights: [
      "Transportation, storage, and re-export services",
      "Land, air, and maritime logistics solutions"
    ],
    features: [
      "Road, air, and sea freight coordination for regional and international moves",
      "Short‑ and long‑term warehousing and storage solutions",
      "Re‑export flows via UAE ports and free‑zones",
      "Customs brokerage and documentation support",
      "Cargo consolidation, cross‑docking, and last‑mile coordination",
      "Visibility and tracking across key transport milestones"
    ],
    benefits: [
      "Optimised logistics cost through better routing and mode selection",
      "Shorter lead times thanks to efficient re‑export and consolidation",
      "Improved service levels and reliability for end customers",
      "Greater control and visibility over goods in transit"
    ]
  },
  "agriculture": {
    icon: Wheat,
    title: "Agriculture & Fertilizers",
    category: "Agriculture",
    description: "Trade in natural and organic fertilizers, pesticides, and agricultural recovery materials.",
    longDescription: "Our Agriculture & Fertilizers desk focuses on supplying high‑quality inputs that help restore soil health and improve yields. From natural fertilizers to pesticides, we leverage the efficiency of UAE ports to move agricultural inputs quickly and cost‑effectively.",
    highlights: [
      "Wholesale trading of natural fertilizers and agricultural recovery materials (import & export)",
      "Organic fertilizers",
      "Trading and manufacturing of pesticides",
      "Strategic advantage of UAE ports with high efficiency and multiple gateways, reducing lead time and re-export costs"
    ],
    features: [
      "Sourcing of natural and organic fertilizers for different crop profiles",
      "Trading of agricultural recovery materials and soil‑improvement products",
      "Supply and coordination with pesticide manufacturers and formulators",
      "Bulk and containerised shipment options depending on destination",
      "Quality documentation and product specification management",
      "Re‑export flows optimised via multiple UAE ports and gateways"
    ],
    benefits: [
      "Access to reliable, quality‑controlled agricultural inputs",
      "Shorter delivery times and lower logistics costs for importers",
      "Better crop performance and soil resilience for end users",
      "Stronger continuity of supply through diversified sourcing"
    ]
  },
  "travel-agency": {
    icon: Plane,
    title: "Travel Agency",
    category: "Travel",
    description: "Corporate and leisure travel planning with end‑to‑end itinerary management.",
    longDescription: "Our Travel Agency services support both corporate travellers and leisure guests with tailored itineraries, competitive fares, and on‑trip assistance. We manage the full journey from ticketing to accommodation and local experiences.",
    highlights: [
      "Corporate and leisure travel planning services",
      "End-to-end travel arrangements including flights, hotels, and visas"
    ],
    features: [
      "Flight bookings across major global carriers",
      "Hotel reservations tailored to budget and travel policy",
      "Visa and travel‑document assistance for key destinations",
      "Travel insurance and risk‑management options",
      "Incentive, group, and conference travel coordination",
      "24/7 support for itinerary changes and disruptions"
    ],
    benefits: [
      "Best price guarantees",
      "Personalized travel experiences for business and leisure",
      "Reduced administrative burden for companies and travellers",
      "Greater peace of mind through professional on‑trip support",
      "Flexible booking, rebooking, and cancellation options"
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
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
          <div className="prose prose-lg text-text-secondary max-w-none leading-relaxed">
            <p className="text-lg">{service.longDescription}</p>
          </div>
        </div>
      </section>

      {/* What We Offer – exact bullets from service scope */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            What We Offer
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {service.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-gold flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key Capabilities & Benefits – two columns */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  Key Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-gold flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Bique */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Why Choose Bique Global Enterprise
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            We combine deep sector expertise with a strong presence in the UAE and key international markets. 
            Whether you need trading, consultancy, or end-to-end supply chain support, our team delivers 
            reliable, compliant, and scalable solutions tailored to your business goals.
          </p>
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