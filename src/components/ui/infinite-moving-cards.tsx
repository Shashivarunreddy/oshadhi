import { useEffect, useRef, useCallback } from "react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export function InfiniteMovingCards({
  items,
  speed,
}: {
  items: Testimonial[];
  speed: "slow" | "fast" | number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const addAnimation = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      container.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-50%)" }
        ],
        {
          duration:
            typeof speed === "number"
              ? speed * 1000
              : speed === "fast"
              ? 6000
              : 12000,
          iterations: Infinity,
        }
      );
    }
  }, [speed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div ref={containerRef} className="flex overflow-hidden whitespace-nowrap">
      {items.map((item, idx) => (
        <div key={idx} className="mx-4 w-80 shrink-0 bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <blockquote className="italic mb-2">{item.quote}</blockquote>
          <div className="font-semibold">{item.name}</div>
          <div className="text-sm text-gray-500">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
