"use client";

import { useEffect, useState } from "react";

export function InitialLoading() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = window.setInterval(() => {
      setProgress((currentProgress) => {
        if (currentProgress >= 5) {
          window.clearInterval(progressInterval);
          return currentProgress;
        }

        return currentProgress + 1;
      });
    }, 180);

    const loadingTimeout = window.setTimeout(() => {
      setVisible(false);
    }, 1250);

    return () => {
      window.clearInterval(progressInterval);
      window.clearTimeout(loadingTimeout);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#F8F8F8]
      "
    >
      {/* Grade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.06]
          [background-image:linear-gradient(#7C3AED_1px,transparent_1px),linear-gradient(90deg,#7C3AED_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <div
        className="
          relative
          mx-6
          w-full
          max-w-[540px]
          border-2
          border-[#111111]
          bg-[#FFFDF9]
          p-7
          shadow-[8px_8px_0_#7C3AED]
          sm:p-10
        "
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b-2 border-[#111111] pb-4">
          <p className="font-pixel text-[10px] font-bold text-[#7C3AED] sm:text-[12px]">
            BRUNA.DEV SYSTEM
          </p>

          <span className="pixel-blink h-3 w-3 bg-[#6EEB83]" />
        </div>

        {/* Terminal */}
        <div className="mt-7">
          <p className="font-pixel text-[11px] font-bold text-[#111111] sm:text-[13px]">
            <span className="text-[#6EEB83]">&gt;</span> BOOTING PORTFOLIO...
          </p>

          <p className="font-pixel mt-4 text-[9px] text-[#6B7280] sm:text-[10px]">
            LOADING PROJECTS · SKILLS · PLAYER DATA
          </p>
        </div>

        {/* Barra de carregamento */}
        <div className="mt-8 flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`
                h-5
                flex-1
                border-2
                border-[#111111]
                transition-none
                ${
                  index < progress
                    ? index === 4
                      ? "bg-[#6EEB83]"
                      : "bg-[#7C3AED]"
                    : "bg-transparent"
                }
              `}
            />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="font-pixel text-[9px] font-bold text-[#7C3AED] sm:text-[10px]">
            {progress < 5 ? "INITIALIZING..." : "READY!"}
          </p>

          <p className="font-pixel text-[9px] font-bold text-[#111111] sm:text-[10px]">
            {progress * 20}%
          </p>
        </div>

        {/* Linha inferior */}
        <div className="mt-8 flex items-center gap-3">
          <span className="h-2 w-2 bg-[#7C3AED]" />
          <div className="h-px flex-1 bg-[#111111]/20" />
          <span className="font-pixel pixel-blink text-[9px] text-[#6EEB83]">
            PRESS START_
          </span>
        </div>
      </div>
    </div>
  );
}