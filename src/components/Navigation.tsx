import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            GlobalTrade Corp
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-text-secondary hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-text-secondary hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-text-secondary hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="default" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;