import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Car,
  Fuel,
  Gem,
  Globe,
  Monitor,
  Plane,
  ShoppingCart,
  Truck,
  Users,
  Wheat,
} from "lucide-react";

export type ServiceId =
  | "general-trading"
  | "food-beverages"
  | "car-export"
  | "hr-consultancy"
  | "precious-metals"
  | "ecommerce"
  | "business-management"
  | "crude-oil"
  | "logistics"
  | "agriculture"
  | "travel-agency";

export interface ServiceDefinition {
  id: ServiceId;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  popupIntroKey: string;
  popupPointsKey: string;
  iconBgClass: string;
  iconFgClass: string;
}

export const services: ServiceDefinition[] = [
  {
    id: "general-trading",
    icon: Globe,
    titleKey: "generalTrading",
    descKey: "generalTradingDesc",
    popupIntroKey: "generalTradingPopupIntro",
    popupPointsKey: "generalTradingPopupPoints",
    iconBgClass: "bg-orange-100",
    iconFgClass: "text-orange-600",
  },
  {
    id: "food-beverages",
    icon: ShoppingCart,
    titleKey: "foodBeverages",
    descKey: "foodBeveragesDesc",
    popupIntroKey: "foodBeveragesPopupIntro",
    popupPointsKey: "foodBeveragesPopupPoints",
    iconBgClass: "bg-green-100",
    iconFgClass: "text-green-600",
  },
  {
    id: "car-export",
    icon: Car,
    titleKey: "carExport",
    descKey: "carExportDesc",
    popupIntroKey: "carExportPopupIntro",
    popupPointsKey: "carExportPopupPoints",
    iconBgClass: "bg-rose-100",
    iconFgClass: "text-rose-600",
  },
  {
    id: "hr-consultancy",
    icon: Users,
    titleKey: "hrConsultancy",
    descKey: "hrConsultancyDesc",
    popupIntroKey: "hrConsultancyPopupIntro",
    popupPointsKey: "hrConsultancyPopupPoints",
    iconBgClass: "bg-purple-100",
    iconFgClass: "text-purple-600",
  },
  {
    id: "precious-metals",
    icon: Gem,
    titleKey: "preciousMetals",
    descKey: "preciousMetalsDesc",
    popupIntroKey: "preciousMetalsPopupIntro",
    popupPointsKey: "preciousMetalsPopupPoints",
    iconBgClass: "bg-amber-100",
    iconFgClass: "text-amber-600",
  },
  {
    id: "ecommerce",
    icon: Monitor,
    titleKey: "ecommerce",
    descKey: "ecommerceDesc",
    popupIntroKey: "ecommercePopupIntro",
    popupPointsKey: "ecommercePopupPoints",
    iconBgClass: "bg-cyan-100",
    iconFgClass: "text-cyan-700",
  },
  {
    id: "business-management",
    icon: Briefcase,
    titleKey: "businessManagement",
    descKey: "businessManagementDesc",
    popupIntroKey: "businessManagementPopupIntro",
    popupPointsKey: "businessManagementPopupPoints",
    iconBgClass: "bg-emerald-100",
    iconFgClass: "text-emerald-700",
  },
  {
    id: "crude-oil",
    icon: Fuel,
    titleKey: "crudeOil",
    descKey: "crudeOilDesc",
    popupIntroKey: "crudeOilPopupIntro",
    popupPointsKey: "crudeOilPopupPoints",
    iconBgClass: "bg-slate-100",
    iconFgClass: "text-slate-700",
  },
  {
    id: "logistics",
    icon: Truck,
    titleKey: "logistics",
    descKey: "logisticsDesc",
    popupIntroKey: "logisticsPopupIntro",
    popupPointsKey: "logisticsPopupPoints",
    iconBgClass: "bg-orange-100",
    iconFgClass: "text-orange-600",
  },
  {
    id: "agriculture",
    icon: Wheat,
    titleKey: "agriculture",
    descKey: "agricultureDesc",
    popupIntroKey: "agriculturePopupIntro",
    popupPointsKey: "agriculturePopupPoints",
    iconBgClass: "bg-lime-100",
    iconFgClass: "text-lime-700",
  },
  {
    id: "travel-agency",
    icon: Plane,
    titleKey: "travelAgency",
    descKey: "travelAgencyDesc",
    popupIntroKey: "travelAgencyPopupIntro",
    popupPointsKey: "travelAgencyPopupPoints",
    iconBgClass: "bg-blue-100",
    iconFgClass: "text-blue-700",
  },
];

