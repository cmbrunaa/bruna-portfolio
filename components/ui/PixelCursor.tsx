"use client";

import { useEffect, useState } from "react";

export function PixelCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);

      const target = event.target as HTMLElement;

      setHover(
        Boolean(
          target.closest(
            "a, button, input, textarea, select, summary, [role='button']",
          ),
        ),
      );
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);
    const down = () => setClick(true);
    const up = () => setClick(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        fixed
        left-0
        top-0
        z-[99999]
        transition-opacity
        duration-75
        ${visible ? "opacity-100" : "opacity-0"}
      `}
      style={{
        transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0)`,
      }}
    >
      <div
        className={`
          h-[10px]
          w-[10px]
          border
          border-[#111111]
          ${
            click
              ? "bg-[#6EEB83]"
              : hover
                ? "bg-[#7C3AED]"
                : "bg-[#111111]"
          }
        `}
      />
    </div>
  );
}