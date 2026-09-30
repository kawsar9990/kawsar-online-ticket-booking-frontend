"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronDown, FileText } from "lucide-react";

export default function EventDescription({ description }: { description: string }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="px-4">
        <div className="rounded-2xl border bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4"
      >
        <span className="flex items-center gap-2 text-sm font-semibold">
          <FileText size={15} /> Event Description
        </span>
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="prose prose-sm max-w-none px-5 pb-5 prose-p:my-3 prose-ul:my-2">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      )}
    </div>
    </div>
  );
}