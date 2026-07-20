import { Container } from "@/components/ui/Container";
import { PixelReveal } from "@/components/ui/PixelReveal";

export function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t-2
        border-[#6EEB83]
        bg-[#11131A]
        py-10
        text-white
      "
    >
      {/* Grade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(#FFFFFF_1px,transparent_1px),linear-gradient(90deg,#FFFFFF_1px,transparent_1px)]
          [background-size:28px_28px]
        "
      />

      {/* Brilho discreto */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-[#7C3AED]/15 blur-3xl" />

      <Container className="relative">
        <PixelReveal direction="up">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {/* Esquerda */}
            <div className="lg:w-1/3">
              <p className="font-pixel flex items-center gap-2 text-[10px] font-bold text-[#6EEB83] sm:text-[11px]">
                <span className="pixel-blink">&gt;</span>
                GAME SAVED
              </p>

              <div className="mt-4 flex gap-1">
                <span className="h-3 w-6 bg-[#6EEB83]" />
                <span className="h-3 w-6 bg-[#6EEB83]" />
                <span className="h-3 w-6 bg-[#6EEB83]" />
                <span className="h-3 w-6 bg-[#7C3AED]" />
                <span className="pixel-blink h-3 w-6 border border-white/70" />
              </div>

              <p className="mt-4 text-[13px] leading-6 text-gray-400">
                Obrigada por visitar meu portfólio.
              </p>
            </div>

            {/* Centro */}
            <div className="lg:w-1/3 lg:text-center">
              <h3 className="font-pixel text-[22px] font-bold sm:text-[25px]">
                <span className="text-[#7C3AED]">BRUNA</span>
                <span className="text-[#6EEB83]">.DEV</span>
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-gray-400">
                Desenvolvimento de Software • Web • APIs • IoT
              </p>
            </div>

            {/* Direita */}
            <div className="lg:w-1/3 lg:text-right">
              <p className="font-pixel text-[10px] font-bold text-[#6EEB83] sm:text-[11px]">
                PLAYER STATUS
              </p>

              <p className="font-pixel mt-3 text-[10px] leading-5 text-white">
                LEVEL 01 · READY FOR NEW QUESTS
                <span className="pixel-blink text-[#6EEB83]">_</span>
              </p>

              <p className="mt-4 text-[11px] text-gray-500">
                © {new Date().getFullYear()} Bruna Moreira Candido
              </p>
            </div>
          </div>
        </PixelReveal>

        {/* Linha final */}
        <PixelReveal delay={0.15}>
          <div className="mt-9 flex items-center gap-4 border-t border-white/10 pt-5">
            <span className="h-2 w-2 bg-[#7C3AED]" />

            <div className="h-px flex-1 bg-white/10" />

            <a
              href="#home"
              className="
                font-pixel
                group
                flex
                items-center
                gap-2
                text-[9px]
                font-bold
                text-gray-400
                transition-colors
                duration-100
                hover:text-[#6EEB83]
              "
            >
              VOLTAR AO INÍCIO

              <span className="transition-transform duration-100 group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </div>
        </PixelReveal>
      </Container>
    </footer>
  );
}