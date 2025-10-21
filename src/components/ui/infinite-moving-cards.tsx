import React from "react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

function getDuration(speed: "slow" | "normal" | "fast" | number | undefined) {
  if (typeof speed === "number") return speed;
  if (speed === "slow") return 40;
  if (speed === "fast") return 15;
  return 25;
}

export function InfiniteMovingCards({
  items,
  speed,
}: {
  items: Testimonial[];
  speed?: "slow" | "normal" | "fast" | number;
}) {
  const cards = [...items, ...items];
  const duration = getDuration(speed);

  return (
    <div className="relative w-full overflow-hidden bg-transparent py-6 group">
      <div
        className="flex animate-marquee group-hover:paused"
        style={{
          minWidth: "max-content",
          gap: "1rem",
          animation: `marquee ${duration}s linear infinite`,
        }}
      >
        {cards.map((item, idx) => (
          <div
            key={idx}
            className="w-48 shrink-0 bg-white dark:bg-gray-800 shadow rounded-lg p-4 overflow-hidden"
            style={{
              minWidth: "12rem",
              maxWidth: "12rem",
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            <blockquote className="italic mb-2 break-words">{item.quote}</blockquote>
            <div className="font-semibold">{item.name}</div>
            <div className="text-sm text-gray-500">{item.title}</div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-play-state: running;
        }
        .group:hover .animate-marquee,
        .group:focus-within .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
