"use client";

import { useEffect, useState } from "react";

export function BootToast() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => {
      setVisible(true);
    }, 1300);

    const hide = setTimeout(() => {
      setVisible(false);
    }, 3400);

    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  return (
    <div
      className={`
        fixed
        bottom-6
        left-6
        z-[9998]
        transition-all
        duration-300
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }
      `}
    >
      <div
        className="
          border-2
          border-[#111111]
          bg-[#FFFDF9]
          p-4
          shadow-[6px_6px_0_#7C3AED]
        "
      >
        <p className="font-pixel text-[10px] text-[#7C3AED]">
          &gt; SAVE LOADED
        </p>

        <div className="mt-3 space-y-1">
          <p className="font-pixel text-[10px] text-[#111111]">
            PLAYER : BRUNA
          </p>

          <p className="font-pixel text-[10px] text-[#111111]">
            LEVEL : 01
          </p>

          <p className="font-pixel text-[10px] text-[#6EEB83]">
            STATUS : READY_
          </p>
        </div>
      </div>
    </div>
  );
}