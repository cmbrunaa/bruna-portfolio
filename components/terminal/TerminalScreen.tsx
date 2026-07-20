import { Terminal } from "@/components/terminal/Terminal";

export function TerminalScreen() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[700px]
        overflow-hidden
        rounded-[10px]
        border-2
        border-[#7C3AED]
        bg-[#080B12]
        shadow-[10px_10px_0_#6EEB83]
        transition-transform
        duration-300
        hover:-translate-y-1
        sm:rounded-[12px]
      "
    >
      {/* Moldura externa */}
      <span className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#6EEB83]" />

      <span className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#6EEB83]" />

      <span className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#6EEB83]" />

      <span className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#6EEB83]" />

      <Terminal />

      {/* Reflexo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />

      {/* Vinheta */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.45)]" />
    </div>
  );
}