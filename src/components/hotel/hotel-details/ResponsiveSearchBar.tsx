"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { DateRange, DayPicker } from "react-day-picker";
import {
  format,
  differenceInDays,
  addDays,
  startOfToday,
} from "date-fns";
import {
  MapPin,
  Plus,
  Minus,
  Trash2,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  ChevronDown,
} from "lucide-react";
import "react-day-picker/dist/style.css";

interface RoomGuest {
  adults: number;
  childrenAges: number[];
}

interface SearchBarProps {
  city?: string,
  hotelName?: string;
  onSearch?: (data: {
    rooms: {
      adults: number;
      childrenAges: number[];
    }[];
  }) => void;
}

export default function SearchBar({ hotelName, onSearch, city }: SearchBarProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openGuestPicker, setOpenGuestPicker] = useState(false);

  const [month, setMonth] = useState<Date>(() => startOfToday());
  const [dateRange, setDateRange] = useState<DateRange | undefined>(() => {
    const today = startOfToday();
    return { from: today, to: addDays(today, 1) };
  });

  const calendarBtnRef = useRef<HTMLDivElement>(null);
  const guestBtnRef = useRef<HTMLDivElement>(null);
  const calendarPortalRef = useRef<HTMLDivElement>(null);
  const guestPortalRef = useRef<HTMLDivElement>(null);

  const [calendarPos, setCalendarPos] = useState({ top: 0, left: 0 });
  const [guestPos, setGuestPos] = useState({ top: 0, left: 0 });

  const [openRoomIndex, setOpenRoomIndex] = useState<number | null>(0);

  useLockBodyScroll(openGuestPicker || openCalendar);


  const updatePositions = useCallback(() => {
    if (calendarBtnRef.current) {
      const rect = calendarBtnRef.current.getBoundingClientRect();
      setCalendarPos({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
    if (guestBtnRef.current) {
      const rect = guestBtnRef.current.getBoundingClientRect();
      setGuestPos({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
  }, []);


  useEffect(() => {
    if (openCalendar || openGuestPicker) {
      updatePositions();
      window.addEventListener("resize", updatePositions);
      window.addEventListener("scroll", updatePositions);
    }
    return () => {
      window.removeEventListener("resize", updatePositions);
      window.removeEventListener("scroll", updatePositions);
    };
  }, [openCalendar, openGuestPicker, updatePositions]);



  const toggleCalendar = () => {
    updatePositions();
    setOpenCalendar((prev) => !prev);
    setOpenGuestPicker(false);
  };

  const toggleGuestPicker = () => {
    updatePositions();
    setOpenGuestPicker((prev) => !prev);
    setOpenCalendar(false);
  };



  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openCalendar &&
        calendarBtnRef.current &&
        !calendarBtnRef.current.contains(event.target as Node) &&
        calendarPortalRef.current &&
        !calendarPortalRef.current.contains(event.target as Node)
      ) {
        setOpenCalendar(false);
      }

      if (
        openGuestPicker &&
        guestBtnRef.current &&
        !guestBtnRef.current.contains(event.target as Node) &&
        guestPortalRef.current &&
        !guestPortalRef.current.contains(event.target as Node)
      ) {
        setOpenGuestPicker(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCalendar, openGuestPicker]);




  const totalNights =
    dateRange?.from && dateRange?.to
      ? differenceInDays(dateRange.to, dateRange.from)
      : 0;

      
  const [rooms, setRooms] = useState<RoomGuest[]>([
    { adults: 2, childrenAges: [] },
  ]);

  const totalAdults = rooms.reduce((acc, r) => acc + r.adults, 0);
  const totalChildren = rooms.reduce((acc, r) => acc + r.childrenAges.length, 0);
  const totalGuests = totalAdults + totalChildren;


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
        if (current === null) return null;
        if (current === index) return null;
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
    const currentRoom = newRooms[index];

    if (delta > 0) {
      if (currentRoom.childrenAges.length >= 2) return;
      currentRoom.childrenAges.push(5);
    } else if (delta < 0 && currentRoom.childrenAges.length > 0) {
      currentRoom.childrenAges.pop();
    }
    setRooms(newRooms);
  };

  const updateChildAge = (roomIdx: number, childIdx: number, age: number) => {
    const newRooms = [...rooms];
    newRooms[roomIdx].childrenAges[childIdx] = age;
    setRooms(newRooms);
  };

  const handleSearch = () => {
    onSearch?.({ rooms });
    setOpenGuestPicker(false);
    setOpenCalendar(false);

    setTimeout(() => {
      document
        .getElementById("room-selection-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };


return (
<div className="w-full max-w-[1280px] mx-auto p-4 font-sans">
<div className="bg-white rounded-[24px] border border-gray-100 shadow-xl overflow-hidden">
        

        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100">
          <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-gray-900 truncate">
              {hotelName || "Hotel Location"}
            </p>
            <p className="text-[12px] text-gray-400 truncate">{city}</p>
          </div>
        </div>


        <div className="relative border-b border-gray-100" ref={calendarBtnRef}>
          <div
            onClick={toggleCalendar}
            className="grid grid-cols-2 divide-x divide-gray-100 cursor-pointer active:bg-gray-50"
          >
            <div className="flex min-h-[82px] flex-col justify-center px-4 text-left">
              <div className="mb-1 flex items-center gap-1.5 text-gray-400">
                <CalendarDays className="h-3.5 w-3.5" />
                <span className="text-[11px]">Check-in</span>
              </div>
              <p className="text-[15px] font-semibold text-gray-900">
                {dateRange?.from ? format(dateRange.from, "dd MMM") : "Select"}
              </p>
              <p className="text-[13px] text-gray-400">
                {dateRange?.from ? format(dateRange.from, "EEEE") : ""}
              </p>
            </div>

            <div className="flex min-h-[82px] flex-col justify-center px-4 text-left">
              <div className="mb-1 flex items-center gap-1.5 text-gray-400">
                <CalendarDays className="h-3.5 w-3.5" />
                <span className="text-[11px]">Check-out</span>
              </div>
              <p className="text-[15px] font-semibold text-gray-900">
                {dateRange?.to ? format(dateRange.to, "dd MMM") : "Select"}
              </p>
              <p className="text-[13px] text-gray-400">
                {dateRange?.to ? format(dateRange.to, "EEEE") : ""}
              </p>
            </div>
          </div>
        </div>

   
        <div className="relative" ref={guestBtnRef}>
          <div
            onClick={toggleGuestPicker}
            className="flex items-center gap-3 px-4 py-3 bg-white transition cursor-pointer active:bg-gray-50"
          >
            <span className="text-xl font-bold text-slate-800 shrink-0">
              {String(totalGuests).padStart(1, "0")}
            </span>
            <div className="border-l border-slate-200 pl-3 min-w-0 flex-1">
              <div className="text-[13px] font-bold text-slate-800 truncate">
                Guests {totalChildren > 0 ? `(${totalChildren} Children)` : ""}
              </div>
              <div className="text-[13px] text-slate-400 truncate">
                {rooms.length} {rooms.length > 1 ? "Rooms" : "Room"}
              </div>
            </div>
            <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
          </div>
        </div>

        <div className="px-3 pb-3 pt-2">
          <button
            type="button"
            onClick={handleSearch}
            className="flex w-full cursor-pointer items-center justify-center rounded-[14px] bg-[#ff7a00] hover:bg-[#e66e00] py-3.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(255,122,0,0.22)] transition active:scale-[0.98]"
          >
            Check Availability
          </button>
        </div>
      </div>

   
      {mounted &&
        openCalendar &&
        createPortal(
          <div
            ref={calendarPortalRef}
            style={{
              position: "absolute",
              top: `${calendarPos.top}px`,
              left: `${calendarPos.left}px`,
              transform: "translateX(-50%)",
              zIndex: 99999,
            }}
            className="w-[320px] rounded-[20px] border border-gray-100 bg-white p-4 shadow-2xl"
          >
            <DayPicker
              className="rdp-responsive-booking"
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              month={month}
              onMonthChange={setMonth}
              disabled={{ before: startOfToday() }}
              showOutsideDays={false}
              components={{
                Chevron: ({ orientation }) =>
                  orientation === "left" ? (
                    <ChevronLeft className="h-4 w-4 text-gray-400" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  ),
              }}
            />
            <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-3">
              <span className="text-xs font-medium text-gray-500">
                {totalNights} {totalNights === 1 ? "Night" : "Nights"}
              </span>
              <button
                type="button"
                onClick={() => setOpenCalendar(false)}
                className="rounded-lg bg-[#2582ff] px-5 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-600 active:scale-95 cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>,
          document.body
        )}

     
      {mounted &&
        openGuestPicker &&
        createPortal(
          <div
            ref={guestPortalRef}
            style={{
              position: "absolute",
              top: `${guestPos.top}px`,
              left: `${guestPos.left}px`,
              transform: "translateX(-50%)",
              zIndex: 99999,
            }}
            className="w-[320px] sm:w-[360px] rounded-[20px] border border-gray-100 bg-white p-4 shadow-2xl space-y-4"
          >
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-slate-800">
                  Guests & Rooms
                </h4>
                <p className="text-[10px] text-slate-400">
                  Choose guests and room options
                </p>
              </div>
              <button
                type="button"
                onClick={() => setRooms([{ adults: 1, childrenAges: [] }])}
                className="text-xs font-semibold cursor-pointer text-blue-600 hover:underline"
              >
                Reset
              </button>
            </div>

           
            <div
              data-lenis-prevent
              style={{ touchAction: "pan-y", overscrollBehavior: "contain" }}
              className="max-h-[250px] overflow-y-auto overscroll-contain space-y-2 pr-1"
            >
              {rooms.map((room, roomIdx) => {
                const isOpen = openRoomIndex === roomIdx;

                return (
                  <div
                    key={roomIdx}
                    className="bg-slate-50 rounded-lg border border-slate-100 overflow-hidden"
                  >
                    <div className="flex items-center justify-between px-3 py-2.5">
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

                        <span className="text-xs text-slate-500 font-medium mr-2">
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
                          <div className="flex justify-between items-center py-2.5">
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

                          <div className="flex justify-between items-center py-2.5 border-t border-slate-200/60">
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
                              className="flex justify-between items-center py-2.5 border-t border-slate-200/60"
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
                                {Array.from(
                                  { length: 17 },
                                  (_, i) => i + 1
                                ).map((a) => (
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
              type="button"
              onClick={addRoom}
              className="w-full cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold text-xs py-2.5 rounded-xl transition flex items-center justify-center gap-1"
            >
              <Plus className="w-4 h-4" /> Add another Room
            </button>
          </div>,
          document.body
        )}
    </div>
  );
}