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