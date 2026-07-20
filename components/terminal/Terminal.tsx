"use client";

import { useEffect, useState } from "react";

type TerminalLine = {
  text: string;
  type: "command" | "success" | "response" | "empty";
};

const terminalLines: TerminalLine[] = [
  {
    text: "> booting bruna.dev...",
    type: "command",
  },
  {
    text: "✓ portfolio loaded",
    type: "success",
  },
  {
    text: "✓ projects loaded",
    type: "success",
  },
  {
    text: "✓ skills loaded",
    type: "success",
  },
  {
    text: "✓ experience loaded",
    type: "success",
  },
  {
    text: "",
    type: "empty",
  },
  {
    text: "> whoami",
    type: "command",
  },
  {
    text: "Bruna Moreira Candido",
    type: "response",
  },
  {
    text: "",
    type: "empty",
  },
  {
    text: "> role",
    type: "command",
  },
  {
    text: "Software Developer",
    type: "response",
  },
  {
    text: "",
    type: "empty",
  },
  {
    text: "> stack",
    type: "command",
  },
  {
    text: "React • Next.js • TypeScript",
    type: "response",
  },
  {
    text: "NestJS • PostgreSQL • Prisma",
    type: "response",
  },
  {
    text: "",
    type: "empty",
  },
  {
    text: "> experience",
    type: "command",
  },
  {
    text: "Web Development • IT Support",
    type: "response",
  },
  {
    text: "",
    type: "empty",
  },
  {
    text: "> status",
    type: "command",
  },
  {
    text: "Available for new opportunities",
    type: "success",
  },
];

function getLineColor(type: TerminalLine["type"]) {
  switch (type) {
    case "command":
      return "text-[#C4B5FD]";

    case "success":
      return "text-[#6EEB83]";

    case "response":
      return "text-[#F5F5F5]";

    default:
      return "";
  }
}

export function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);

  // Digitação das linhas
  useEffect(() => {
    if (lineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[lineIndex];

    // Linhas vazias
    if (currentLine.type === "empty") {
      const emptyLineTimeout = window.setTimeout(() => {
        setDisplayedLines((previous) => [...previous, currentLine]);
        setCurrentText("");
        setCharacterIndex(0);
        setLineIndex((previous) => previous + 1);
      }, 100);

      return () => window.clearTimeout(emptyLineTimeout);
    }

    // Digita cada caractere
    if (characterIndex < currentLine.text.length) {
      const typingTimeout = window.setTimeout(() => {
        setCurrentText(
          (previous) => previous + currentLine.text[characterIndex],
        );

        setCharacterIndex((previous) => previous + 1);
      }, currentLine.type === "response" ? 18 : 25);

      return () => window.clearTimeout(typingTimeout);
    }

    // Finaliza a linha e passa para a próxima
    const nextLineTimeout = window.setTimeout(() => {
      setDisplayedLines((previous) => [...previous, currentLine]);
      setCurrentText("");
      setCharacterIndex(0);
      setLineIndex((previous) => previous + 1);
    }, 190);

    return () => window.clearTimeout(nextLineTimeout);
  }, [characterIndex, lineIndex]);

  // Reinicia a animação após terminar
  useEffect(() => {
    if (lineIndex < terminalLines.length) return;

    const restartTimeout = window.setTimeout(() => {
      setDisplayedLines([]);
      setCurrentText("");
      setLineIndex(0);
      setCharacterIndex(0);
    }, 4500);

    return () => window.clearTimeout(restartTimeout);
  }, [lineIndex]);

  const currentLine = terminalLines[lineIndex];

  return (
    <div
      className="
        relative
        flex
        min-h-[430px]
        w-full
        flex-col
        bg-[#080B12]
        p-5
        font-mono
        text-[11px]
        leading-[1.5]
        sm:min-h-[500px]
        sm:p-7
        sm:text-[13px]
        lg:min-h-[520px]
        lg:p-8
        lg:text-[14px]
      "
    >
      {/* Barra superior */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#7C3AED]/45 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-[#7C3AED] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 bg-[#6EEB83] sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 bg-white sm:h-3 sm:w-3" />
        </div>

        <span className="font-pixel text-[8px] font-bold text-[#C4B5FD] sm:text-[10px]">
          BRUNA.DEV
        </span>

        <div className="flex items-center gap-2">
          <span className="font-pixel hidden text-[8px] text-[#6EEB83] sm:inline">
            ONLINE
          </span>

          <span className="h-2.5 w-2.5 animate-pulse bg-[#6EEB83]" />
        </div>
      </div>

      {/* Conteúdo */}
      <div
        aria-live="polite"
        className="
          relative
          z-10
          mt-5
          flex-1
          overflow-hidden
          whitespace-nowrap
        "
      >
        {displayedLines.map((line, index) => (
          <p
            key={`${line.text}-${index}`}
            className={
              line.type === "empty"
                ? "h-[0.75em]"
                : getLineColor(line.type)
            }
          >
            {line.type === "empty" ? "\u00A0" : line.text}
          </p>
        ))}

        {currentLine && currentLine.type !== "empty" && (
          <p className={getLineColor(currentLine.type)}>
            {currentText}

            <span className="ml-1 animate-pulse text-[#6EEB83]">█</span>
          </p>
        )}

        {lineIndex >= terminalLines.length && (
          <p className="mt-1 text-[#C4B5FD]">
            &gt; <span className="animate-pulse text-[#6EEB83]">█</span>
          </p>
        )}
      </div>

      {/* Rodapé */}
      <div className="relative z-10 mt-5 flex items-center justify-between border-t border-[#7C3AED]/30 pt-4">
        <span className="font-pixel text-[7px] text-[#777777] sm:text-[9px]">
          SESSION: ACTIVE
        </span>

        <span className="font-pixel text-[7px] text-[#6EEB83] sm:text-[9px]">
          PORTFOLIO_READY
        </span>
      </div>
    </div>
  );
}