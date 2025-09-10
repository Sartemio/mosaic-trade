import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Globe2, Users2, Award, CheckCircle, Target, Eye, Heart } from "lucide-react";

const stats = [
  { icon: Globe2, value: "50+", label: "Countries Served" },
  { icon: Users2, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: CheckCircle, value: "1000+", label: "Successful Projects" }
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every service we provide, ensuring the highest quality standards."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We believe in transparent communication and honest business practices with all our clients."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Our business is built on trust, reliability, and ethical practices in all our operations."
  }
];

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
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
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              About GlobalTrade Corp
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Building bridges in international commerce through expertise, integrity, and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-text-secondary leading-relaxed">
              <p className="text-lg mb-6">
                Founded over a decade ago, GlobalTrade Corp emerged from a vision to simplify 
                international commerce and make global trade accessible to businesses of all sizes. 
                What started as a small trading company has evolved into a comprehensive business 
                solutions provider serving clients across 50+ countries.
              </p>
              <p className="text-lg mb-6">
                Our journey began with a simple mission: to bridge the gap between global suppliers 
                and buyers while providing exceptional service and value. Today, we've expanded our 
                expertise across multiple industries, from traditional import/export to cutting-edge 
                e-commerce solutions and specialized consultancy services.
              </p>
              <p className="text-lg">
                Through years of building relationships, understanding markets, and adapting to 
                changing global dynamics, we've established ourselves as a trusted partner for 
                businesses looking to expand their international footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-elegant transition-shadow duration-300 bg-white border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary-navy" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-text-secondary font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-elegant transition-shadow duration-300 bg-white border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed text-white/90">
                To empower businesses worldwide by providing comprehensive, reliable, and 
                innovative trade and consultancy solutions that drive growth and create 
                lasting partnerships across global markets.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed text-white/90">
                To be the leading global facilitator of international commerce, recognized 
                for our expertise, integrity, and commitment to helping businesses thrive 
                in an interconnected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us for their international 
            business needs. Let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant px-8 py-4"
              >
                Contact Us Today
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;