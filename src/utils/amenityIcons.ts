import {
  CigaretteOff,
  Utensils,
  Refrigerator,
  Tv,
  Wind,
  Footprints,
  ShieldCheck,
  Bath,
  Lock,
  ShowerHead,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export const amenityIconMap: Record<string, LucideIcon> = {
  "Non-smoking rooms": CigaretteOff,
  "Room service": Utensils,
  "Fridge": Refrigerator,
  "TV": Tv,
  "Hairdryer": Wind,
  "Slippers": Footprints,
  "Safe (In Room)": ShieldCheck,
  "Toiletries": Bath,
  "Locker": Lock,
  "Shower": ShowerHead,
};