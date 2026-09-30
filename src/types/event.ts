export type EventStatus =
  | "LIVE_NOW"
  | "UPCOMING"
  | "EXPIRED"
  | "CANCELLED";

export interface Event {
  id: string;
  title: string;
  slug: string;
  category: string;
  bannerImage: string;
  startDate: string | Date;
  endDate: string | Date;
  startTime: string | null;
  endTime: string | null;
  venue: string;
  location: string;
  startingPrice: number;
  currency: string;
  isLive: boolean;
  status: EventStatus;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export type Ticket = {
  id: string;
  name: string;
  group: string;
  price: number;
  description: string | null;
  includes: string[];
  available: boolean;
  sortOrder: number;
};

export type EventDetail = {
  id: string;
  title: string;
  venue: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  description: string;
  bannerImage?: string;
  tickets: Ticket[];
};

export type EventWithDetail = {
  id: string;
  slug: string;
  title: string;
  bannerImage: string;
  status: EventStatus;
  detail: EventDetail;
};

export type EventApiResponse = {
  success: boolean;
  data: EventWithDetail;
};