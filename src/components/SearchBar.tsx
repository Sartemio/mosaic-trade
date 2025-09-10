import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { id: "general-trading", title: "General Trading", category: "Export/Import" },
  { id: "food-beverages", title: "Food & Beverages", category: "F&B Trading" },
  { id: "car-export", title: "Car Export", category: "Automotive" },
  { id: "hr-consultancy", title: "HR Consultancy", category: "Consultancy" },
  { id: "precious-metals", title: "Precious Metals & Gems", category: "Commodities" },
  { id: "ecommerce", title: "E-Commerce", category: "Digital" },
  { id: "business-management", title: "Business Management", category: "Management" },
  { id: "crude-oil", title: "Crude Oil Trading", category: "Energy" },
  { id: "logistics", title: "Logistics", category: "Supply Chain" },
  { id: "agriculture", title: "Agriculture & Fertilizer", category: "Agriculture" },
  { id: "travel-agency", title: "Travel Agency", category: "Travel" }
];

interface SearchBarProps {
  onServiceSelect?: (serviceId: string) => void;
}

const SearchBar = ({ onServiceSelect }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(query.toLowerCase()) ||
    service.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleServiceClick = (serviceId: string) => {
    setQuery("");
    setIsOpen(false);
    if (onServiceSelect) {
      onServiceSelect(serviceId);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-4 h-4" />
        <Input
          type="text"
          placeholder="Search services..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(e.target.value.length > 0);
          }}
          onFocus={() => setIsOpen(query.length > 0)}
          className="pl-10 pr-10 border-border/50 focus:border-primary"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {isOpen && filteredServices.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-elegant border-0 bg-white">
          <CardContent className="p-2">
            {filteredServices.slice(0, 6).map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="flex items-center justify-between p-3 hover:bg-primary-light/50 rounded-md cursor-pointer transition-colors"
              >
                <div>
                  <div className="font-medium text-primary">{service.title}</div>
                  <div className="text-sm text-text-secondary">{service.category}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;