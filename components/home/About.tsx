import { Container } from "@/components/ui/Container";
import { PixelReveal } from "@/components/ui/PixelReveal";
import {
  PixelItem,
  PixelStagger,
} from "@/components/ui/PixelStagger";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  MapPin,
} from "lucide-react";

const profileItems = [
  {
    number: "01",
    icon: GraduationCap,
    label: "FORMAÇÃO",
    title: "Análise e Desenvolvimento de Sistemas",
    description: "Graduação em fase de conclusão.",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    label: "EXPERIÊNCIA",
    title: "Desenvolvimento web e suporte técnico",
    description: "Vivência profissional em ambientes e projetos reais.",
  },
  {
    number: "03",
    icon: Code2,
    label: "ÁREA",
    title: "Desenvolvimento de Software",
    description: "Frontend, backend, APIs, banco de dados e integrações.",
  },
  {
    number: "04",
    icon: MapPin,
    label: "LOCALIZAÇÃO",
    title: "Paraná — Brasil",
    description:
      "Disponível para oportunidades presenciais, híbridas e remotas.",
  },
];

const focusTags = ["WEB", "BACKEND", "APIs", "DATABASE"];

export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden border-y border-[#6EEB83]/30 bg-[#5B21B6] py-24 text-white"
    >
      {/* Grade de fundo */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.065]
          [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          [background-size:34px_34px]
        "
      />

      {/* Luzes suaves */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#6EEB83]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-36 bottom-[-100px] h-[480px] w-[480px] rounded-full bg-[#A78BFA]/20 blur-3xl" />

      <Container className="relative">
        {/* Cabeçalho */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <PixelReveal direction="left">
            <div>
              <p className="font-pixel flex items-center gap-3 text-[12px] font-bold tracking-[0.08em] text-[#6EEB83] sm:text-[13px]">
                <span className="pixel-blink">&gt;</span>
                STAGE 02 · ABOUT
              </p>

              <h2 className="font-pixel mt-5 max-w-[650px] text-[42px] font-bold leading-[1.08] sm:text-[52px] lg:text-[60px]">
                Um pouco sobre
                <span className="block text-[#6EEB83]">mim</span>
              </h2>
            </div>
          </PixelReveal>

          <PixelReveal direction="right" delay={0.12}>
            <div className="max-w-[720px] lg:justify-self-end">
              <p className="text-[16px] leading-8 text-[#F1ECFF] sm:text-[17px]">
                Sou profissional de Tecnologia da Informação, com formação em
                Análise e Desenvolvimento de Sistemas em fase de conclusão e
                experiência em desenvolvimento web e suporte técnico.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-[#F1ECFF] sm:text-[17px]">
                Gosto de transformar ideias em aplicações completas, conectando
                frontend, backend, banco de dados e integrações para resolver
                problemas reais.
              </p>
            </div>
          </PixelReveal>
        </div>

        {/* Divisor */}
        <PixelReveal delay={0.18}>
          <div className="mt-12 flex items-center gap-4">
            <span className="pixel-blink h-3 w-3 bg-[#6EEB83]" />

            <div className="h-px flex-1 bg-white/25" />

            <span className="font-pixel text-[10px] font-bold text-[#C4B5FD] sm:text-[11px]">
              PLAYER INFO
            </span>
          </div>
        </PixelReveal>

        {/* Conteúdo principal */}
        <div className="mt-12 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Informações */}
          <PixelStagger className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {profileItems.map((item) => {
              const Icon = item.icon;

              return (
                <PixelItem key={item.number}>
                  <article className="group flex gap-4 border-b border-white/30 pb-7">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-[#6EEB83]
                        bg-white/10
                        shadow-[3px_3px_0_rgba(110,235,131,0.35)]
                        transition-transform
                        duration-100
                        group-hover:-translate-x-1
                        group-hover:-translate-y-1
                      "
                    >
                      <Icon
                        size={23}
                        strokeWidth={2}
                        className="text-[#6EEB83]"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-pixel text-[10px] font-bold text-[#C4B5FD]">
                          {item.number}
                        </span>

                        <span className="font-pixel text-[11px] font-bold tracking-[0.04em] text-[#6EEB83]">
                          {item.label}
                        </span>
                      </div>

                      <h3 className="font-pixel mt-3 text-[16px] font-bold leading-6 text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[14px] leading-6 text-[#F0EBFF]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </PixelItem>
              );
            })}
          </PixelStagger>

          {/* Foco atual */}
          <PixelReveal direction="right" delay={0.14}>
            <aside
              className="
                pixel-card
                relative
                overflow-hidden
                rounded-[8px]
                border
                border-white/25
                bg-white/10
                p-8
                shadow-[8px_8px_0_rgba(17,17,17,0.18)]
                backdrop-blur-sm
              "
            >
              <span className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-[#6EEB83]" />

              <span className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-[#A78BFA]" />

              <p className="font-pixel text-[11px] font-bold tracking-[0.05em] text-[#6EEB83]">
                &gt; CURRENT FOCUS
              </p>

              <h3 className="font-pixel mt-5 text-[23px] font-bold leading-8 text-white sm:text-[26px]">
                Criar soluções úteis e continuar evoluindo na prática.
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-[#F0EBFF]">
                Busco oportunidades para aplicar meus conhecimentos, contribuir
                com projetos reais e crescer profissionalmente na área de
                tecnologia.
              </p>

              <PixelStagger
                className="mt-8 flex flex-wrap gap-3"
                delay={0.18}
              >
                {focusTags.map((tag) => (
                  <PixelItem key={tag}>
                    <span
                      className="
                        font-pixel
                        inline-block
                        border
                        border-[#6EEB83]
                        bg-[#4C1D95]
                        px-3
                        py-2
                        text-[10px]
                        font-bold
                        text-[#6EEB83]
                        shadow-[2px_2px_0_rgba(110,235,131,0.25)]
                        transition-transform
                        duration-100
                        hover:-translate-x-0.5
                        hover:-translate-y-0.5
                      "
                    >
                      {tag}
                    </span>
                  </PixelItem>
                ))}
              </PixelStagger>

              <div className="mt-8 border-t border-white/20 pt-5">
                <div className="font-pixel flex items-center justify-between text-[10px] font-bold">
                  <span className="text-[#C4B5FD]">STATUS</span>
                  <span className="pixel-blink text-[#6EEB83]">
                    READY TO GROW
                  </span>
                </div>

                <PixelStagger
                  className="mt-3 flex gap-1"
                  delay={0.26}
                >
                  <PixelItem className="flex-1">
                    <span className="block h-3 bg-[#6EEB83]" />
                  </PixelItem>

                  <PixelItem className="flex-1">
                    <span className="block h-3 bg-[#6EEB83]" />
                  </PixelItem>

                  <PixelItem className="flex-1">
                    <span className="block h-3 bg-[#6EEB83]" />
                  </PixelItem>

                  <PixelItem className="flex-1">
                    <span className="block h-3 bg-[#A78BFA]" />
                  </PixelItem>

                  <PixelItem className="flex-1">
                    <span className="block h-3 border border-white/60" />
                  </PixelItem>
                </PixelStagger>
              </div>
            </aside>
          </PixelReveal>
        </div>

        {/* Missão */}
        <PixelReveal direction="up" delay={0.2}>
          <div
            className="
              pixel-card
              mt-14
              flex
              flex-col
              gap-4
              border
              border-white/10
              border-l-4
              border-l-[#6EEB83]
              bg-[#4C1D95]/80
              px-6
              py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p className="font-pixel text-[10px] font-bold text-[#6EEB83]">
                &gt; CURRENT MISSION
              </p>

              <p className="font-pixel mt-2 text-[16px] font-bold text-white sm:text-[18px]">
                Transformar ideias em soluções reais.
              </p>
            </div>

            <span className="font-pixel pixel-blink text-[10px] text-[#C4B5FD]">
              ALWAYS EVOLVING_
            </span>
          </div>
        </PixelReveal>
      </Container>
    </section>
  );
}