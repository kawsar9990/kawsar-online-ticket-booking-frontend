export type LocationType =
  | 'city' | 'hotel' | 'country' | 'state' | 'district' | 'area'
  | 'park' | 'attraction' | 'venue';

export type SearchKind = 'hotel' | 'park' | 'tour' | 'event' | 'all';

export interface LocationItem {
  id: string;
  name: string;
  subtitle: string;
  type: LocationType;
  image?: string;
  hot?: boolean;
  lat?: number;
  lng?: number;
}