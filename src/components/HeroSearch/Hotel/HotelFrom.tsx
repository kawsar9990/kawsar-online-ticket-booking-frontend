"use client";

import { useState, useRef, useEffect } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { DateRange, DayPicker } from "react-day-picker";
import {
  format,
  differenceInDays,
  addMonths,
  subMonths,
  addDays,
  startOfToday,
  startOfMonth,
} from "date-fns";
import { Plus, Minus, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import "react-day-picker/dist/style.css";
import LocationPicker from "./AddressSearch";
import { DEFAULT_LOCATION } from "@/db/hotellocationdata";
import { LocationItem } from "@/types/locationFilter";
import ResponsiveLocationPicker from "./ResponsiveAddress";

interface RoomGuest {
  adults: number;
  childrenAges: number[];
}

interface SearchBarProps {
 onSearch?: (data: {
    location: LocationItem;
    dateRange?: DateRange;
    rooms: RoomGuest[];
  }) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [selectedLocation, setSelectedLocation] = useState<LocationItem>(DEFAULT_LOCATION);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [month, setMonth] = useState<Date>(() => startOfMonth(new Date()));
  const [dateRange, setDateRange] = useState<DateRange | undefined>(() => {
    const today = startOfToday();
    return { from: today, to: addDays(today, 1) };
  });

  const [openGuestPicker, setOpenGuestPicker] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const guestPickerRef = useRef<HTMLDivElement>(null);
  const [openRoomIndex, setOpenRoomIndex] = useState<number | null>(0);


  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 768px)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setOpenCalendar(false);
      }
      if (guestPickerRef.current && !guestPickerRef.current.contains(event.target as Node)) {
        setOpenGuestPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const totalNights = dateRange?.from && dateRange?.to ? differenceInDays(dateRange.to, dateRange.from) : 0;
  const [rooms, setRooms] = useState<RoomGuest[]>([{ adults: 2, childrenAges: [] }]);
  const totalAdults = rooms.reduce((acc, r) => acc + r.adults, 0);
  const totalChildren = rooms.reduce((acc, r) => acc + r.childrenAges.length, 0);
  const totalGuests = totalAdults + totalChildren;

  useLockBodyScroll(openGuestPicker);

  const addRoom = () => {
    setRooms((prev) => {
      const newRooms = [...prev, { adults: 1, childrenAges: [] }];
      setOpenRoomIndex(newRooms.length - 1);
      return newRooms;
    });
  };

  const removeRoom = (index: number) => {
    if (rooms.length === 1) return;
    setRooms((prev) => {
      const newRooms = prev.filter((_, i) => i !== index);
      setOpenRoomIndex((current) => {
        if (current === null || current === index) return null;
        if (current > index) return current - 1;
        return current;
      });
      return newRooms;
    });
  };

  const updateAdults = (index: number, delta: number) => {
    const newRooms = [...rooms];
    const currentRoom = newRooms[index];
    const newAdults = currentRoom.adults + delta;
    if (newAdults < 1 || newAdults > 4) return;
    newRooms[index] = { ...currentRoom, adults: newAdults };
    setRooms(newRooms);
  };

  const updateChildren = (index: number, delta: number) => {
    const newRooms = [...rooms];
    const currentRoom = { ...newRooms[index], childrenAges: [...newRooms[index].childrenAges] };

    if (delta > 0) {
      if (currentRoom.childrenAges.length >= 2) return;
      currentRoom.childrenAges.push(5);
    } else if (delta < 0 && currentRoom.childrenAges.length > 0) {
      currentRoom.childrenAges.pop();
    }
    newRooms[index] = currentRoom;
    setRooms(newRooms);
  };

  const updateChildAge = (roomIdx: number, childIdx: number, age: number) => {
    const newRooms = [...rooms];
    const room = { ...newRooms[roomIdx], childrenAges: [...newRooms[roomIdx].childrenAges] };
    room.childrenAges[childIdx] = age;
    newRooms[roomIdx] = room;
    setRooms(newRooms);
  };

return (
<div className="w-full max-w-[1280px] mx-auto py-3 sm:p-4 font-sans">
<div className="bg-white p-2.5 flex flex-col lg:flex-row items-center gap-2.5 relative">
      

<div className="hidden lg:block">
  <LocationPicker
     selectedLocation={selectedLocation}
     onSelect={(loc) => setSelectedLocation(loc)}
   />
</div>

<div className="lg:hidden block w-full z-[1999999999]">
  <ResponsiveLocationPicker
     selectedLocation={selectedLocation}
     onSelect={(loc) => setSelectedLocation(loc)}
   />
</div>
     

<div className="grid grid-cols-2 gap-2.5 relative w-full lg:w-auto" ref={calendarRef}>
<div
  onClick={() => {
    setOpenCalendar(!openCalendar);
    setOpenGuestPicker(false);
  }}
  className="flex items-center gap-3 px-4 py-2.5 rounded-md border border-slate-200 bg-white hover:border-slate-300 transition cursor-pointer"
>
  <span className="text-[13px] sm:text-xl text-slate-800 shrink-0">
    {dateRange?.from ? format(dateRange.from, "dd") : "--"}
  </span>
  <div className="border-l border-slate-200 pl-3 min-w-0">
    <div className="text-[13px] font-semibold text-slate-800 truncate">
      {dateRange?.from ? format(dateRange.from, "MMMM, EEEE") : "Select Date"}
    </div>
    <div className="text-[10px] sm:text-[13px] text-slate-400">Check-in</div>
  </div>
</div>

<div
  onClick={() => {
    setOpenCalendar(!openCalendar);
    setOpenGuestPicker(false);
  }}
  className="flex items-center gap-3 px-4 py-2.5 rounded-md border border-slate-200 bg-white hover:border-slate-300 transition cursor-pointer"
>
  <span className="text-[13px] sm:text-xl text-slate-800 shrink-0">
    {dateRange?.to ? format(dateRange.to, "dd") : "--"}
  </span>
  <div className="border-l border-slate-200 pl-3 min-w-0">
    <div className="text-[13px] font-semibold text-slate-800 truncate">
      {dateRange?.to ? format(dateRange.to, "MMMM, EEEE") : "Select Date"}
    </div>
    <div className="text-[10px] sm:text-[13px] text-slate-400">Check-out</div>
  </div>
</div>

  {openCalendar && (
    <div className={`absolute top-full z-99999999 left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl p-3 sm:p-4 ${
      isDesktop ? "w-[520px]" : "w-[300px]"
    } max-w-[95vw]`}>
      <div className="relative">
        <button
          type="button"
          onClick={() => setMonth((prev) => subMonths(prev, 1))}
          className="absolute cursor-pointer left-1 top-0.5 z-10 h-6 w-6 flex items-center justify-center rounded-full hover:bg-slate-100 transition"
        >
          <ChevronLeft className="w-4 h-4 text-slate-500" />
        </button>
        <button
          type="button"
          onClick={() => setMonth((prev) => addMonths(prev, 1))}
          className="absolute cursor-pointer right-1 top-0.5 z-10 h-6 w-6 flex items-center justify-center rounded-full hover:bg-slate-100 transition"
        >
          <ChevronRight className="w-4 h-4 text-slate-500" />
        </button>
        <DayPicker
          mode="range"
          numberOfMonths={isDesktop ? 2 : 1}
          month={month}
          onMonthChange={setMonth}
          selected={dateRange}
          onSelect={setDateRange}
          disabled={{ before: startOfToday() }}
          showOutsideDays={false}
          className="rdp-booking border-b border-slate-200 pb-1"
          classNames={{
            months: "flex flex-row",
            month: "flex flex-col text-[13px] px-2 sm:px-5 first-of-type:pl-0 last-of-type:pr-0 border-l border-slate-200 first-of-type:border-l-0",
            month_caption: "flex justify-center items-center relative h-8",
            caption_label: "text-xs font-bold text-slate-800",
            nav: "hidden",
          }}
        />
      </div>
      <div className="flex justify-between items-center pt-2">
        <span className="text-xs font-bold text-slate-600">
          {totalNights > 0 ? `${totalNights} Nights Selected` : "Select Date"}
        </span>
        <button
          onClick={() => setOpenCalendar(false)}
          className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold text-xs px-6 py-2 rounded-lg transition"
        >
          Apply
        </button>
      </div>
    </div>
  )}
</div>




<div className="flex-1 relative w-full lg:w-auto" ref={guestPickerRef}>
  <div
    onClick={() => {
      setOpenGuestPicker(!openGuestPicker);
      setOpenCalendar(false);
    }}
    className="flex items-center gap-3 px-4 py-2.5 rounded-md border border-slate-200 bg-white hover:border-slate-300 transition cursor-pointer"
  >
    <span className="text-[13px] sm:text-xl text-slate-800 shrink-0">
      {String(totalGuests).padStart(2, "0")}
    </span>
    <div className="border-l border-slate-200 pl-3 min-w-0">
      <div className="text-[13px] font-semibold text-slate-800 truncate">
        Guests {totalChildren > 0 ? `(${totalChildren} Children)` : ""}
      </div>
      <div className="text-[13px] text-slate-400 truncate">
        {rooms.length} {rooms.length > 1 ? "Rooms" : "Room"}
      </div>
    </div>
  </div>

{openGuestPicker && (
  <div className="absolute top-[-10px] right-0 z-50 bg-white border border-slate-200 rounded-sm shadow-xl shadow-black p-4 w-full md:w-[360px] space-y-4">
    <div className="flex justify-between items-center pb-2 border-b border-slate-100">
      <div className="flex flex-col">
        <h4 className="text-sm font-bold text-slate-800">Guests & Rooms</h4>
        <p className="text-[9px] text-slate-400">Choose guests and room options</p>
      </div>
      <button
        onClick={() => setRooms([{ adults: 1, childrenAges: [] }])}
        className="text-xs font-semibold cursor-pointer text-blue-600 hover:underline"
      >
        Reset
      </button>
    </div>

<div
  data-lenis-prevent
  style={{ touchAction: "pan-y", overscrollBehavior: "contain" }}
  className="max-h-[190px] sm:max-h-[200px] overflow-y-auto overscroll-contain space-y-2 pr-1"
>
  {rooms.map((room, roomIdx) => {
  const isOpen = openRoomIndex === roomIdx;
  return (
    <div key={roomIdx} className="bg-slate-50 rounded-md border border-slate-100 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-3">
        <button
          type="button"
          onClick={() =>
            setOpenRoomIndex((current) =>
              current === roomIdx ? null : roomIdx
            )
          }
          className="flex-1 flex items-center justify-between text-left cursor-pointer"
                  >
<span className="text-sm font-bold text-slate-700">
  Room {roomIdx + 1}
</span>
<span className="text-xs text-slate-500 font-medium mr-3">
      {room.adults} Adult{room.adults !== 1 ? "s" : ""},{" "}
      {room.childrenAges.length} Child
      {room.childrenAges.length !== 1 ? "ren" : ""}
    </span>
  </button>

  {rooms.length > 1 && (
    <button
      type="button"
      onClick={() => removeRoom(roomIdx)}
      className="text-rose-500 cursor-pointer hover:bg-rose-50 p-1 rounded-md transition"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  )}
</div>

<div
  className={`grid transition-all duration-300 ease-in-out ${
    isOpen
      ? "grid-rows-[1fr] opacity-100"
      : "grid-rows-[0fr] opacity-0"
  }`}
>
  <div className="overflow-hidden">
    <div className="border-t border-slate-200/60 px-3">
      <div className="flex justify-between items-center py-3">
        <div>
          <span className="text-xs font-semibold text-slate-800 block">
            Adults
          </span>
          <span className="text-[10px] text-slate-400">
            17+ years
          </span>
        </div>

<div className="flex items-center gap-2">
  <button
    type="button"
    onClick={() => updateAdults(roomIdx, -1)}
    disabled={room.adults <= 1}
    className="w-7 h-7 rounded-full cursor-pointer disabled:cursor-not-allowed border border-slate-300 flex items-center justify-center hover:bg-white text-slate-600 disabled:opacity-40"
  >
    <Minus className="w-3 h-3" />
  </button>

<span className="text-xs font-bold w-4 text-center">
  {room.adults}
</span>

<button
  type="button"
  onClick={() => updateAdults(roomIdx, 1)}
  disabled={room.adults >= 4}
  className="w-7 h-7 rounded-full border cursor-pointer disabled:cursor-not-allowed border-slate-300 flex items-center justify-center hover:bg-white text-slate-600 disabled:opacity-40"
>
  <Plus className="w-3 h-3" />
</button>
  </div>
</div>

<div className="flex justify-between items-center py-3 border-t border-slate-200/60">
  <div>
    <span className="text-xs font-semibold text-slate-800 block">
      Children
    </span>
    <span className="text-[10px] text-slate-400">
      1 - 17 years
    </span>
  </div>

  <div className="flex items-center gap-2">
<button
  type="button"
  onClick={() => updateChildren(roomIdx, -1)}
  disabled={room.childrenAges.length <= 0}
  className="w-7 h-7 cursor-pointer disabled:cursor-not-allowed rounded-full border border-slate-300 flex items-center justify-center hover:bg-white text-slate-600 disabled:opacity-40"
>
  <Minus className="w-3 h-3" />
</button>
<span className="text-xs font-bold w-4 text-center">
  {room.childrenAges.length}
</span>

    <button
      type="button"
      onClick={() => updateChildren(roomIdx, 1)}
      disabled={room.childrenAges.length >= 2}
      className="w-7 h-7 rounded-full border cursor-pointer disabled:cursor-not-allowed border-slate-300 flex items-center justify-center hover:bg-white text-slate-600 disabled:opacity-40"
    >
      <Plus className="w-3 h-3" />
    </button>
  </div>
</div>

{room.childrenAges.map((age, childIdx) => (
  <div
    key={childIdx}
    className="flex justify-between items-center py-3 border-t border-slate-200/60"
  >
    <span className="text-[11px] font-medium text-slate-600">
      Age of Child {childIdx + 1}
    </span>
    <select
      value={age}
      onChange={(e) =>
        updateChildAge(
          roomIdx,
          childIdx,
          Number(e.target.value)
        )
      }
  className="text-xs cursor-pointer font-semibold bg-white border border-slate-300 rounded-md px-2 py-1 outline-none focus:border-blue-500"
>
  {Array.from({ length: 17 }, (_, i) => i + 1).map((a) => (
    <option key={a} value={a}>
      {String(a).padStart(2, "0")} Years
    </option>
  ))}
    </select>
  </div>
    ))}
  </div>
</div>
  </div>
</div>
  );
})}
  </div>

      <button
        onClick={addRoom}
        className="w-full cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold text-xs py-2 rounded-xl transition flex items-center justify-center gap-1"
      >
        <Plus className="w-4 h-4" /> Add another Room
      </button>
    </div>
  )}
</div>
      </div>
    </div>
  );
}