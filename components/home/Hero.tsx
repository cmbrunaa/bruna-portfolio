import { TerminalScreen } from "@/components/terminal/TerminalScreen";
import { Button } from "@/components/ui/Button";
import { PixelReveal } from "@/components/ui/PixelReveal";
import { Download, Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        scroll-mt-[120px]
        overflow-hidden
        border-b
        border-[#7C3AED]/20
        bg-[#FFFDF9]
      "
    >
      {/* Grade discreta */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(#7C3AED_1px,transparent_1px),linear-gradient(90deg,#7C3AED_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#6EEB83]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-20 h-[560px] w-[560px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

      <div
        className="
          relative
          mx-auto
          grid
          min-h-[calc(100vh-120px)]
          w-full
          max-w-[1500px]
          grid-cols-1
          items-center
          gap-14
          px-6
          py-16
          sm:px-8
          lg:grid-cols-[0.86fr_1.14fr]
          lg:gap-12
          lg:px-10
          lg:py-12
          xl:min-h-[720px]
        "
      >
        {/* Conteúdo */}
        <PixelReveal direction="left">
          <div className="relative z-10 mx-auto w-full max-w-[620px] lg:mx-0">
            <p className="font-pixel pixel-blink mb-6 text-[16px] text-[#6EEB83] sm:text-[18px]">
              &gt;_
            </p>

            <PixelReveal direction="left" delay={0.08}>
              <p className="font-pixel text-[20px] leading-none text-[#111111] sm:text-[24px] lg:text-[26px]">
                OLÁ! EU SOU A
              </p>
            </PixelReveal>

            <PixelReveal direction="left" delay={0.14}>
              <div className="mt-5 flex items-center gap-4 sm:gap-6">
                <h1
                  className="
                    font-pixel
                    text-[66px]
                    leading-[0.86]
                    tracking-[-0.05em]
                    text-[#7C3AED]
                    sm:text-[88px]
                    md:text-[104px]
                    lg:text-[88px]
                    xl:text-[108px]
                  "
                >
                  BRUNA
                </h1>

                <Image
                  src="/sprites/coracao-verde-pequeno.png"
                  alt=""
                  width={60}
                  height={60}
                  aria-hidden="true"
                  className="
                    pixel-heart
                    mt-3
                    h-auto
                    w-9
                    object-contain
                    sm:w-11
                    xl:w-12
                  "
                />
              </div>
            </PixelReveal>

            {/* Cargo */}
            <PixelReveal direction="left" delay={0.2}>
              <div
                className="
                  font-pixel
                  pixel-card
                  mt-8
                  flex
                  min-h-[54px]
                  w-full
                  max-w-[470px]
                  items-center
                  justify-between
                  border-2
                  border-[#7C3AED]
                  bg-white
                  px-5
                  text-[11px]
                  shadow-[4px_4px_0_#6EEB83]
                  sm:px-7
                  sm:text-[13px]
                "
              >
                <span className="pixel-blink text-[18px] text-[#7C3AED]">
                  &lt;
                </span>

                <span className="text-center">DESENVOLVIMENTO DE SOFTWARE</span>

                <span className="pixel-blink text-[18px] text-[#6EEB83]">
                  &gt;
                </span>
              </div>
            </PixelReveal>

            {/* Áreas */}
            <PixelReveal direction="left" delay={0.26}>
              <p className="font-pixel mt-8 text-[13px] text-[#7C3AED] sm:text-[16px]">
                WEB
                <span className="mx-3 text-[#6EEB83]">•</span>
                BACKEND
                <span className="mx-3 text-[#6EEB83]">•</span>
                IoT
              </p>
            </PixelReveal>

            {/* Descrição */}
            <PixelReveal direction="left" delay={0.32}>
              <p className="mt-7 max-w-[560px] text-[15px] leading-8 text-[#444444] sm:text-[17px]">
                Transformo ideias em aplicações completas, conectando interface,
                backend, banco de dados e integrações.
                <br />
                Código limpo. Soluções reais. Impacto positivo.
              </p>
            </PixelReveal>

            {/* Botões */}
            <PixelReveal direction="left" delay={0.38}>
              <div className="mt-9 flex flex-col gap-4 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Button href="#projetos">
                  <Play size={17} fill="currentColor" />
                  VER PROJETOS
                </Button>

                <Button
                  href="/curriculo-bruna-moreira.pdf"
                  variant="secondary"
                  download
                >
                  <Download size={17} />
                  BAIXAR CURRÍCULO
                </Button>
              </div>
            </PixelReveal>

            {/* Status */}
            <PixelReveal direction="left" delay={0.44}>
              <div className="font-pixel mt-9 flex flex-wrap items-center gap-3 text-[9px] sm:text-[11px]">
                <span className="text-[#6EEB83]">&gt;</span>

                <span className="text-[#6EEB83]">STATUS:</span>

                <span className="text-[#111111]">AVAILABLE FOR NEW QUESTS</span>

                <span className="pixel-blink h-3 w-2 bg-[#6EEB83]" />
              </div>
            </PixelReveal>
          </div>
        </PixelReveal>

        {/* Terminal */}
        <PixelReveal direction="right" delay={0.18}>
          <div className="relative flex min-w-0 items-center justify-center lg:justify-end">
            <TerminalScreen />
          </div>
        </PixelReveal>
      </div>
    </section>
  );
}
