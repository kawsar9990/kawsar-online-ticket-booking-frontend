import { CalendarDays, Clock, MapPin } from "lucide-react";

type Props = {
  bannerImage: string;
  title: string;
  venue: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  closed: boolean;
};

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const fmtDate = (iso: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}, ${d.getUTCFullYear()}`;
};

export const formatDateRange = (start: string, end: string) => {
  const s = fmtDate(start);
  const e = fmtDate(end);
  if (!s) return e;
  if (!e || s === e) return s;
  return `${s} – ${e}`;
};

const fmtTime = (t: string) => {
  if (!t) return "";
  const parts = t.split(":");
  if (parts.length < 2) return t;

  const h = Number(parts[0]);
  const m = Number(parts[1]);
  if (isNaN(h) || isNaN(m)) return t;

  const suffix = h >= 12 ? "PM" : "AM";
  const formattedHour = h % 12 || 12;
  const formattedMinute = String(m).padStart(2, "0");

  return `${formattedHour}:${formattedMinute} ${suffix}`;
};

export const formatTimeRange = (start: string, end: string) => {
  const s = fmtTime(start);
  const e = fmtTime(end);
  if (!s) return e || "";
  return e ? `${s} – ${e}` : s;
};

export default function EventHeader({
  bannerImage,
  title,
  venue,
  startDate,
  endDate,
  startTime,
  endTime,
  closed,
}: Props) {
  const timeText = formatTimeRange(startTime, endTime);
  const dateText = formatDateRange(startDate, endDate);

return (
    <div className="w-full pt-16 sm:pt-18">

      <div className="relative w-full overflow-hidden bg-black py-4 sm:py-">

        <img
          src={bannerImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60 blur-2xl scale-125 pointer-events-none select-none"
        />

        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <img
              src={bannerImage}
              alt={title}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>


      <div className="px-4">
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-gray-500">
              {venue && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="shrink-0 text-gray-700" />
                  {venue}
                </span>
              )}
              {dateText && (
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} className="shrink-0 text-gray-700" />
                  {dateText}
                </span>
              )}
              {timeText && (
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="shrink-0 text-gray-700" />
                  {timeText}
                </span>
              )}
            </div>
          </div>

          <div className="shrink-0">
            {closed ? (
              <span className="inline-block rounded-xl bg-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-600">
                Ticket Sales Closed
              </span>
            ) : (
              <a
                href="#tickets"
                className="inline-block rounded-xl bg-[#1e232a] px-7 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-black active:scale-95"
              >
                Buy Ticket Now
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}