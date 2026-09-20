import {
  UserCheck,
  Languages,
  Utensils,
  Sparkles,
  Wifi,
  Dumbbell,
  Car,
  HeartPulse,
  Waves,
  GlassWater,
  Bed,
  Briefcase,
  Baby,
  Bus,
  Accessibility,
  Dog,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export const categoryIconMap: Record<string, React.ElementType> = {
  "Services": UserCheck,
  "Languages Spoken": Languages,
  "Meals": Utensils,
  "USP": Sparkles,
  "Internet": Wifi,
  "Sports": Dumbbell,
  "Parking": Car,
  "Beauty and wellness": HeartPulse,
  "Recreation": GlassWater,
  "Services and amenities": UserCheck,
  "Pool and beach": Waves,
  "Rooms": Bed,
  "Business": Briefcase,
  "Kids": Baby,
  "Transfer": Bus,
  "Accessibility": Accessibility,
  "Pets": Dog,
  "Health and Safety Measures": ShieldCheck,
};

export const getCategoryIcon = (categoryName: string) => {
  return categoryIconMap[categoryName] || HelpCircle;
};