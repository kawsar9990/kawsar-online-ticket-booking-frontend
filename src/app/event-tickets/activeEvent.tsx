"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { MapPin, Tag, CalendarDays } from "lucide-react";

import { fetchFeaturedEventHome } from "@/services/eventhome";
import type { Event } from "@/types/event";

type EventTab = "upcoming" | "past";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [activeTab, setActiveTab] = useState<EventTab>("upcoming");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getEvents = async () => {
      try {
        setLoading(true);
        setError("");
        const result = await fetchFeaturedEventHome();
        setEvents(Array.isArray(result) ? result : []);
      } catch (err) {
        console.error("Failed to fetch events:", err);
        setError("Failed to load events. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);


  const getValidDate = (
    date: string | Date | null | undefined
  ) => {
    if (!date) return null;

    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime()) ? null : parsedDate;
  };

  
  const formatDate = (
    date: string | Date | null | undefined
  ) => {
    const d = getValidDate(date);
    if (!d) {
      return {
        day: "--",
        month: "TBA",
      };
    }

    return {
      day: new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        timeZone: "Asia/Dhaka",
      }).format(d),

      month: new Intl.DateTimeFormat("en-GB", {
        month: "short",
        timeZone: "Asia/Dhaka",
      }).format(d),
    };
  };

  const formatEndDate = (
    date: string | Date | null | undefined
  ) => {
    const d = getValidDate(date);

    if (!d) return "TBA";

    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "Asia/Dhaka",
    }).format(d);
  };


  const { upcomingEvents, pastEvents } = useMemo(() => {
    const now = new Date();

    const upcoming: Event[] = [];
    const past: Event[] = [];

    events.forEach((event) => {
      const startDate = getValidDate(event.startDate);
      const endDate = getValidDate(event.endDate);

      if (!startDate || !endDate) {
        console.warn(
          "Invalid event date:",
          event.title,
          event.startDate,
          event.endDate
        );
        return;
      }


      if (event.status === "CANCELLED") {
        return;
      }

      if (
        event.status === "EXPIRED" ||
        endDate < now
      ) {
        past.push(event);
      } else {
        upcoming.push(event);
      }
    });

    upcoming.sort(
      (a, b) =>
        new Date(a.startDate).getTime() -
        new Date(b.startDate).getTime()
    );

    past.sort(
      (a, b) =>
        new Date(b.endDate).getTime() -
        new Date(a.endDate).getTime()
    );

    return {
      upcomingEvents: upcoming,
      pastEvents: past,
    };
  }, [events]);

  const displayedEvents =
    activeTab === "upcoming"
      ? upcomingEvents
      : pastEvents;

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <section className="mx-auto max-w-[1280px] px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-10">


        <div className="mb-7 text-center">
          <span className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Discover Events
          </span>

          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            Explore All Events
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-gray-500 sm:text-sm">
            Discover upcoming events, competitions,
            festivals and memorable experiences
            happening around you.
          </p>
        </div>


        <div className="mb-7 flex justify-center">
          <div className="inline-flex w-full max-w-[340px] rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`flex flex-1 items-center cursor-pointer justify-center gap-2 rounded-md px-3 py-2 text-xs font-bold transition-all sm:text-sm ${
                activeTab === "upcoming"
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Upcoming

              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  activeTab === "upcoming"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {upcomingEvents.length}
              </span>
            </button>


            <button
              onClick={() => setActiveTab("past")}
              className={`flex flex-1 items-center cursor-pointer justify-center gap-2 rounded-md px-3 py-2 text-xs font-bold transition-all sm:text-sm ${
                activeTab === "past"
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Past Events

              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  activeTab === "past"
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {pastEvents.length}
              </span>
            </button>
          </div>
        </div>

 
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-bold text-gray-900 sm:text-xl">
              {activeTab === "upcoming"
                ? "Upcoming Events"
                : "Past Events"}
            </h2>

            <p className="mt-0.5 text-[8px] text-gray-500 sm:text-sm">
              {activeTab === "upcoming"
                ? "Don't miss out on these upcoming experiences."
                : "Take a look at our previous events."}
            </p>
          </div>

          <span className="rounded-full bg-white px-3 py-1.5 text-[8px] sm:text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-200">
            {displayedEvents.length} Events
          </span>
        </div>


        {loading && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-xl bg-white p-2.5 shadow-sm"
              >
                <div className="aspect-[16/9] rounded-lg bg-gray-200" />

                <div className="space-y-2 p-2">
                  <div className="h-4 w-3/4 rounded bg-gray-200" />
                  <div className="h-3 w-1/2 rounded bg-gray-200" />
                  <div className="h-3 w-2/3 rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        )}


        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-8 text-center">
            <p className="text-sm font-semibold text-red-600">
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}


        {!loading &&
          !error &&
          displayedEvents.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {displayedEvents.map((event) => {
                const date = formatDate(event.startDate);

                const isPast =
                  activeTab === "past";

                const isLive =
                  event.isLive &&
                  event.status === "LIVE_NOW";

                const cardContent = (
                  <article
                    className={`overflow-hidden rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm transition-all duration-300 ${
                      !isPast
                        ? "group-hover:-translate-y-1 group-hover:shadow-lg"
                        : ""
                    }`}
                  >

                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">

                      {event.bannerImage ? (
                        <img
                          src={event.bannerImage}
                          alt={event.title}
                          className={`h-full w-full object-cover transition-transform duration-500 ${
                            !isPast
                              ? "group-hover:scale-105"
                              : ""
                          } ${
                            isPast
                              ? "brightness-90 grayscale-[15%]"
                              : ""
                          }`}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gray-100 text-xs text-gray-400">
                          No image available
                        </div>
                      )}

     
                      <span className="absolute left-2 top-2 max-w-[60%] truncate rounded-md bg-black/60 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                        {event.category}
                      </span>

       
                      <span
                        className={`absolute right-2 top-2 rounded-md px-2 py-1 text-[10px] font-bold text-white shadow backdrop-blur-md ${
                          isLive
                            ? "bg-red-600"
                            : isPast
                            ? "bg-gray-800/90"
                            : "bg-gray-900/80"
                        }`}
                      >
                        {isLive
                          ? "● Live Now"
                          : isPast
                          ? "Expired"
                          : "Upcoming"}
                      </span>
                    </div>


                    <div className="px-1.5 pb-1 pt-3">

            
                      <h3
                        className={`mb-3 truncate text-sm font-extrabold leading-5 sm:text-[15px] ${
                          !isPast
                            ? "text-gray-900 transition-colors group-hover:text-green-700"
                            : "text-gray-700"
                        }`}
                        title={event.title}
                      >
                        {event.title}
                      </h3>

                      <div className="flex items-center gap-2.5">

                 
                        <div className="flex h-[62px] min-w-[58px] shrink-0 flex-col items-center justify-center rounded-lg bg-gray-950 px-2 text-white">
                          <span className="text-lg font-extrabold leading-5">
                            {date.day}
                          </span>

                          <span className="mt-0.5 text-[11px] font-semibold uppercase">
                            {date.month}
                          </span>
                        </div>

             
                        <div className="min-w-0 flex-1 space-y-2">

                         
                          <div className="flex items-start gap-1.5">
                            <MapPin
                              size={15}
                              strokeWidth={2}
                              className={`mt-0.5 shrink-0 ${
                                isPast
                                  ? "text-gray-400"
                                  : "text-green-600"
                              }`}
                            />

                            <p className="line-clamp-1 text-xs leading-4.5 text-gray-600">
                              {event.venue}
                              {event.location
                                ? `, ${event.location}`
                                : ""}
                            </p>
                          </div>

                 
                          {isPast ? (
                            <div className="flex items-center gap-1.5">
                              <CalendarDays
                                size={15}
                                strokeWidth={2}
                                className="shrink-0 text-gray-400"
                              />

                              <p className="truncate text-xs font-medium text-gray-400">
                                Ends{" "}
                                <span className="text-gray-500">
                                  {formatEndDate(
                                    event.endDate
                                  )}
                                </span>
                              </p>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5">
                              <Tag
                                size={15}
                                strokeWidth={2}
                                className="shrink-0 text-green-600"
                              />

                              <p className="truncate text-xs font-medium text-gray-700">
                                {event.startingPrice === 0
                                  ? "Free Entry"
                                  : `From ৳ ${event.startingPrice.toLocaleString(
                                      "en-BD"
                                    )}`}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );

      
                return isPast ? (
                  <div key={event.id ?? event.slug}>
                    {cardContent}
                  </div>
                ) : (
                  <Link
                    key={event.id ?? event.slug}
                    href={`/events/${event.slug}`}
                    className="group block"
                  >
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          )}


        {!loading &&
          !error &&
          displayedEvents.length === 0 && (
            <div className="rounded-xl border border-dashed border-gray-300 bg-white px-5 py-12 text-center">
              <div className="mb-3 text-4xl">
                {activeTab === "upcoming"
                  ? "📅"
                  : "🎟️"}
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                {activeTab === "upcoming"
                  ? "No Upcoming Events"
                  : "No Past Events"}
              </h3>

              <p className="mx-auto mt-1.5 max-w-md text-xs leading-5 text-gray-500">
                {activeTab === "upcoming"
                  ? "There are no upcoming events right now. Please check back later."
                  : "Previous events will appear here once they are available."}
              </p>

              {activeTab === "past" && (
                <button
                  onClick={() =>
                    setActiveTab("upcoming")
                  }
                  className="mt-4 rounded-lg bg-green-600 px-5 py-2 text-xs font-bold text-white transition hover:bg-green-700"
                >
                  Explore Upcoming Events
                </button>
              )}
            </div>
          )}
      </section>
    </main>
  );
}