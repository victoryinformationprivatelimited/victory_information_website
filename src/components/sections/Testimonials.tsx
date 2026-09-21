"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = { quote: string; name: string; role: string };

const avatarColors = [
  "from-brand-500 to-brand-700",
  "from-teal-400 to-teal-600",
  "from-amber-400 to-amber-600",
  "from-rose-400 to-rose-600",
  "from-violet-400 to-violet-600",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="relative mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-brand-950 to-brand-800 p-10 text-center text-white shadow-2xl shadow-brand-900/30 sm:p-14">
      <Quote className="mx-auto h-10 w-10 text-accent-400" />
      <p className="mt-6 text-balance text-xl font-medium leading-relaxed sm:text-2xl">&ldquo;{current.quote}&rdquo;</p>
      <div className="mt-8 flex flex-col items-center gap-3">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${
            avatarColors[index % avatarColors.length]
          }`}
        >
          {initials(current.name)}
        </span>
        <div>
          <div className="font-semibold">{current.name}</div>
          <div className="text-sm text-slate-300">{current.role}</div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-accent-400" : "w-1.5 bg-white/30"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((i) => (i + 1) % items.length)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
