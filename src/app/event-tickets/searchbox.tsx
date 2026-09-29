"use client";

import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { format, addMonths, subMonths, startOfToday, startOfMonth } from "date-fns";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import "react-day-picker/dist/style.css";

export default function EventSearchBar() {
  const [selectedLocation, setSelectedLocation] = useState<string>("Dhaka");
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  const [month, setMonth] = useState<Date>(() => startOfMonth(new Date()));
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setOpenCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


return (
    <div className="w-full bg-white rounded-[24px] p-4 sm:p-5 shadow-2xl border border-white/20" style={{userSelect: "none"}}>
      
      <div className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4">

        <div className="relative w-full lg:flex-1">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 transition-colors">
            <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="flex flex-col w-full">
              <span className="text-[11px] font-semibold text-emerald-600 leading-tight">
                Location
              </span>
              <input
                type="text"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                placeholder="Enter location"
                className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 bg-transparent outline-none pt-0.5"
              />
            </div>
          </div>
        </div>

  
        <div className="relative w-full lg:flex-1" ref={calendarRef}>
          <div
            onClick={() => setOpenCalendar(!openCalendar)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-orange-400 transition-colors cursor-pointer"
          >
            <div className="flex flex-col w-full">
              <span className="text-[11px] font-semibold text-orange-500 leading-tight">
                From Date
              </span>
              <span className="text-sm font-medium text-slate-800 pt-0.5 truncate">
                {selectedDate ? format(selectedDate, "dd MMMM, yyyy EEEE") : "Select Event Date"}
              </span>
            </div>
          </div>

      
          {openCalendar && (
            <div className={`absolute top-full z-99999999 left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl p-3 sm:p-4 w-[350px] max-w-[95vw]`}>
              <div className="relative">
         
                <button
                  type="button"
                  onClick={() => setMonth((prev) => subMonths(prev, 1))}
                  className="absolute cursor-pointer left-1 top-1 z-10 h-7 w-7 flex items-center justify-center rounded-full hover:bg-slate-100 transition"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-600" />
                </button>
                <button
                  type="button"
                  onClick={() => setMonth((prev) => addMonths(prev, 1))}
                  className="absolute cursor-pointer right-1 top-1 z-10 h-7 w-7 flex items-center justify-center rounded-full hover:bg-slate-100 transition"
                >
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>


                <DayPicker
                  mode="single"
                  month={month}
                  onMonthChange={setMonth}
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setOpenCalendar(false);
                  }}
                  disabled={{ before: startOfToday() }}
                  showOutsideDays={false}
                  className="rdp-custom"
                  classNames={{
                    months: "flex flex-row",
                    month: "flex flex-col text-[13px] px-2 sm:px-5 first-of-type:pl-0 last-of-type:pr-0 border-l border-slate-200 first-of-type:border-l-0",
                    month_caption: "flex justify-center items-center relative h-8",
                    caption_label: "text-xs font-bold text-slate-800",
                    nav: "hidden",
                  }}
                />
              </div>

              <div className="flex justify-end pt-2 border-t border-slate-100 mt-2">
                <button
                  type="button"
                  onClick={() => setOpenCalendar(false)}
                  className="bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white font-semibold text-xs px-4 py-1.5 rounded-lg transition"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

  
        <div className="w-full lg:w-auto shrink-0">
          <button
            disabled
            type="button"
            className="w-full lg:w-auto px-8 py-3.5 bg-[#52c48a] text-white font-bold text-sm tracking-wider uppercase rounded-xl opacity-95 transition-all shadow-sm flex items-center justify-center min-w-[180px]"
          >
            COMING SOON
          </button>
        </div>

      </div>

    </div>
  );
}