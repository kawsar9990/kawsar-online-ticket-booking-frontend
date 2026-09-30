"use client";

import { useState } from "react";
import type { Ticket } from "@/types/event";

type Props = { tickets: Ticket[]; closed: boolean };

const renderText = (text: string) =>
  text.split(/(https?:\/\/\S+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );

export default function TicketList({ tickets, closed }: Props) {
  const groups = Array.from(new Set(tickets.map((t) => t.group)));
  const tabs = ["All Tickets", ...groups];
  const [active, setActive] = useState("All Tickets");

  const filtered = active === "All Tickets" ? tickets : tickets.filter((t) => t.group === active);

  return (
    <section id="tickets" className="rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold">Tickets</h2>
      <p className="text-xs text-gray-500">Select your preferred ticket category.</p>

      {groups.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`rounded-full px-4 py-1.5 text-xs cursor-pointer font-semibold transition ${
                active === tab ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {filtered.map((ticket) => {
          const canBuy = ticket.available && !closed;

          return (
            <div key={ticket.id} className="flex flex-col rounded-xl border bg-white">
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-gray-900">{ticket.name}</h3>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                      ticket.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
                    }`}
                  >
                    {ticket.available ? "Available" : "Sold out"}
                  </span>
                </div>

                {ticket.description && (
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">{ticket.description}</p>
                )}

                {ticket.includes.length > 0 && (
                  <ul className="mt-2 list-disc space-y-0.5 pl-5 text-xs text-gray-600">
                    {ticket.includes.map((item) => (
                      <li key={item} className="break-words">
                        {renderText(item)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex items-center justify-between border-t px-4 py-3">
                <span className="text-base font-bold">৳ {ticket.price}</span>
                <button
                  type="button"
                  disabled={!canBuy}
                  className="rounded-md cursor-pointer bg-gray-900 px-4 py-1.5 text-xs font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}