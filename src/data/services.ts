/**
 * Shared services data for cards (ServicesGrid, Services page).
 * Short descriptions are used exactly as provided on the cards.
 */

export const servicesCardData = [
  {
    id: "general-trading",
    titleKey: "generalTrading",
    iconKey: "globe",
    iconBg: "bg-amber-500",
    shortDescription:
      "Import and export of diversified goods, including raw materials and finished products. Acting as an international trading hub connecting Asia, Europe, and Africa.",
  },
  {
    id: "food-beverages",
    titleKey: "foodBeverages",
    iconKey: "shopping-cart",
    iconBg: "bg-emerald-500",
    shortDescription:
      "International trade of food products and non-alcoholic beverages. Re-export hub supplying GCC and Asian markets.",
  },
  {
    id: "car-export",
    titleKey: "carExport",
    iconKey: "car",
    iconBg: "bg-rose-500",
    shortDescription:
      "Trading of new and used vehicles and spare parts. Vehicle upgrading and customization services.",
  },
  {
    id: "hr-consultancy",
    titleKey: "hrConsultancy",
    iconKey: "users",
    iconBg: "bg-violet-500",
    shortDescription:
      "Recruitment consulting, talent management, and workforce mobility. Outsourcing and labor migration solutions for the UAE market.",
  },
  {
    id: "precious-metals",
    titleKey: "preciousMetals",
    iconKey: "gem",
    iconBg: "bg-yellow-500",
    shortDescription:
      "Intermediation in the trading of gold, diamonds, and precious stones (graphite, rubies, etc.). Dubai as a strategic hub providing access to international exchanges (e.g. DMCC).",
  },
  {
    id: "ecommerce",
    titleKey: "ecommerce",
    iconKey: "monitor",
    iconBg: "bg-sky-500",
    shortDescription:
      "Global digital trade through online platforms. Promotion of handicrafts, fashion, and agro-processed products to international markets. Strong logistics infrastructure supported by Aramex, DHL, and regional hubs.",
  },
  {
    id: "business-management",
    titleKey: "businessManagement",
    iconKey: "briefcase",
    iconBg: "bg-teal-600",
    shortDescription:
      "Corporate management, strategy, structuring, and advisory services. Support to companies and entrepreneurs requiring professional management services. Advisory for SMEs in expansion, including governance and compliance solutions. Strategic bridge between investors in the UAE and producers in Africa. Corporate due diligence services in the UAE (risk mitigation and partner verification).",
  },
  {
    id: "crude-oil",
    titleKey: "crudeOil",
    iconKey: "fuel",
    iconBg: "bg-slate-700",
    shortDescription:
      "Trading and intermediation of crude oil and aviation fuel. UAE positioned as one of the world's leading energy hubs.",
  },
  {
    id: "logistics",
    titleKey: "logistics",
    iconKey: "truck",
    iconBg: "bg-orange-500",
    shortDescription:
      "Transportation, storage, and re-export services. Land, air, and maritime logistics solutions.",
  },
  {
    id: "agriculture",
    titleKey: "agriculture",
    iconKey: "wheat",
    iconBg: "bg-lime-600",
    shortDescription:
      "Wholesale trading of natural fertilizers and agricultural recovery materials (import & export). Organic fertilizers. Trading and manufacturing of pesticides. Strategic advantage of UAE ports with high efficiency and multiple gateways, reducing lead time and re-export costs.",
  },
  {
    id: "travel-agency",
    titleKey: "travelAgency",
    iconKey: "plane",
    iconBg: "bg-cyan-500",
    shortDescription:
      "Corporate and leisure travel planning services. End-to-end travel arrangements including flights, hotels, and visas.",
  },
] as const;

export type ServiceId = (typeof servicesCardData)[number]["id"];
