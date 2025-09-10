import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleServiceSelect = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            GlobalTrade Corp
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            <SearchBar onServiceSelect={handleServiceSelect} />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/services" className="text-text-secondary hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-text-secondary hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-text-secondary hover:text-primary transition-colors">
              Contact
            </Link>
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