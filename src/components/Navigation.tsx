import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpeg";

const Navigation = () => {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServiceSelect = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-sm border-b border-border" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Bique Global Enterprise" className="h-10 w-auto" />
            <span className={`text-xl font-bold hidden sm:inline transition-colors ${
              isScrolled 
                ? "bg-gradient-primary bg-clip-text text-transparent" 
                : "text-white"
            }`}>
              Bique Global Enterprise
            </span>
          </Link>
          
          {/* Desktop Search */}
          <div className="hidden lg:flex items-center space-x-6">
            <SearchBar onServiceSelect={handleServiceSelect} isScrolled={isScrolled} />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/services" 
              className={`transition-colors ${
                isScrolled 
                  ? "text-text-secondary hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("services")}
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${
                isScrolled 
                  ? "text-text-secondary hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("about")}
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${
                isScrolled 
                  ? "text-text-secondary hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t("contact")}
            </Link>
            <Select value={language} onValueChange={(value) => setLanguage(value as "en" | "fr" | "pt")}>
              <SelectTrigger className={`w-[140px] transition-colors ${
                isScrolled 
                  ? "border-border/50 bg-background" 
                  : "border-white/20 bg-white/10 text-white"
              }`}>
                <Globe className={`w-4 h-4 mr-2 ${isScrolled ? "" : "text-white"}`} />
                <SelectValue className={isScrolled ? "" : "text-white"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
              </SelectContent>
            </Select>
            <Link to="/contact">
              <Button 
                variant="default" 
                className={`transition-all ${
                  isScrolled 
                    ? "bg-gradient-primary hover:opacity-90" 
                    : "bg-white/20 hover:bg-white/30 text-white border-white/30"
                }`}
              >
                {t("getStarted")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className={isScrolled ? "" : "text-white hover:bg-white/20"}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-8">
                <SheetClose asChild>
                  <Link to="/" className="text-lg font-semibold text-primary hover:text-primary-navy transition-colors">
                    Home
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link to="/services" className="text-lg font-semibold text-primary hover:text-primary-navy transition-colors">
                    {t("services")}
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link to="/about" className="text-lg font-semibold text-primary hover:text-primary-navy transition-colors">
                    {t("about")}
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link to="/contact" className="text-lg font-semibold text-primary hover:text-primary-navy transition-colors">
                    {t("contact")}
                  </Link>
                </SheetClose>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-text-secondary mb-3">Language</p>
                  <Select value={language} onValueChange={(value) => setLanguage(value as "en" | "fr" | "pt")}>
                    <SelectTrigger className="w-full border-border/50">
                      <Globe className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="pt">Português</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4">
                  <SearchBar onServiceSelect={handleServiceSelect} isScrolled={isScrolled} />
                </div>

                <SheetClose asChild>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                      {t("getStarted")}
                    </Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;