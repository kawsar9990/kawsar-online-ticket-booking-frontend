'use client';

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { geteventData } from "@/services/eventDetailsApi";
import type { EventWithDetail } from "@/types/event";
import EventHeader from "./EventHeader";
import EventDescription from "./EventDescription";
import TicketList from "./TicketList";

type Props = { params: Promise<{ slug: string }> };

export default function EventPage({ params }: Props) {
  const { slug } = use(params);
  const [event, setEvent] = useState<EventWithDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadEvent() {
      try {
        setLoading(true);
        const res = await geteventData(slug);
        if (isMounted) {
          if (res?.data) {
            setEvent(res.data);
          } else {
            setError(true);
          }
        }
      } catch {
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    if (slug) {
      loadEvent();
    }

    return () => {
      isMounted = false;
    };
  }, [slug]);


  if (loading) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-12 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-600 border-r-transparent align-[-0.125em]" />
        <p className="mt-2 text-sm text-gray-500">Event details loading...</p>
      </main>
    );
  }

  if (error || !event || !event.detail) {
    notFound();
  }

  const { detail } = event;
  const closed = event.status === "EXPIRED" || event.status === "CANCELLED";

  return (
    <main className="">
      <EventHeader
        bannerImage={detail.bannerImage ?? event.bannerImage}
        title={detail.title}
        venue={detail.venue}
        startDate={detail.startDate}
        endDate={detail.endDate}
        startTime={detail.startTime}
        endTime={detail.endTime}
        closed={closed}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <EventDescription description={detail.description} />
          <TicketList tickets={detail.tickets} closed={closed} />
        </div>
      </div>
    </main>
  );
}