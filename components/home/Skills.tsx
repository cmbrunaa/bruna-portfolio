import { Container } from "@/components/ui/Container";
import { PixelReveal } from "@/components/ui/PixelReveal";
import {
  PixelItem,
  PixelStagger,
} from "@/components/ui/PixelStagger";
import { Cloud, Code2, Cpu, Database, Server } from "lucide-react";

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "React Native"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "NestJS", "Python", "Django", "APIs REST"],
  },
  {
    id: "database",
    title: "Banco de dados",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "SQLite", "Prisma ORM"],
  },
  {
    id: "cloud",
    title: "Cloud e ferramentas",
    icon: Cloud,
    skills: ["Git", "GitHub", "Docker", "Azure", "Railway"],
  },
  {
    id: "iot",
    title: "IoT",
    icon: Cpu,
    skills: ["ESP32", "MQTT", "Sensores", "Automação"],
  },
];

export function Skills() {
  return (
    <section
      id="habilidades"
      className="
        relative
        scroll-mt-[130px]
        overflow-hidden
        border-y
        border-[#57C96B]
        bg-[#6EEB83]
        py-24
      "
    >
      {/* Grade discreta */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
          [background-image:linear-gradient(#FFFFFF_1px,transparent_1px),linear-gradient(90deg,#FFFFFF_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#7C3AED]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-[-120px] h-[460px] w-[460px] rounded-full bg-white/20 blur-3xl" />

      <Container className="relative">
        {/* Cabeçalho */}
        <PixelReveal direction="left">
          <div className="max-w-[820px]">
            <p className="font-pixel flex items-center gap-3 text-[12px] font-bold tracking-[0.08em] text-white sm:text-[13px]">
              <span className="pixel-blink">&gt;</span>
              STAGE 04 · PLAYER INVENTORY
            </p>

            <h2 className="font-pixel mt-5 text-[40px] font-bold leading-[1.08] text-[#111111] sm:text-[50px] lg:text-[58px]">
              Tecnologias e{" "}
              <span className="text-[#7C3AED]">habilidades</span>
            </h2>

            <p className="mt-6 max-w-[720px] text-[16px] leading-8 text-[#1F2937] sm:text-[17px]">
              Ferramentas e tecnologias que utilizo para desenvolver aplicações
              web, mobile, serviços de backend e projetos de IoT.
            </p>
          </div>
        </PixelReveal>

        {/* Divisor */}
        <PixelReveal delay={0.14}>
          <div className="mt-12 flex items-center gap-4">
            <span className="pixel-blink h-3 w-3 bg-[#7C3AED]" />

            <div className="h-px flex-1 bg-white/45" />

            <span className="font-pixel text-[10px] font-bold text-white sm:text-[11px]">
              SELECT CATEGORY
            </span>
          </div>
        </PixelReveal>

        {/* Inventário */}
        <PixelStagger className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <PixelItem key={group.id} className="h-full">
                <article
                  className="
                    group
                    pixel-card
                    relative
                    flex
                    h-full
                    min-h-[285px]
                    flex-col
                    overflow-hidden
                    rounded-[8px]
                    border-2
                    border-[#7C3AED]
                    bg-[#FFFDF9]
                    p-7
                    shadow-[8px_8px_0_#7C3AED]
                    transition-[transform,border-color,box-shadow]
                    duration-100
                    hover:-translate-x-1
                    hover:-translate-y-1
                    hover:border-[#111111]
                    hover:shadow-[10px_10px_0_#FFFFFF]
                  "
                >
                  {/* Código do item */}
                  <div className="flex items-center justify-between">
                    <span className="font-pixel text-[9px] font-bold text-[#7C3AED]">
                      ITEM · {group.id.toUpperCase()}
                    </span>

                    <span className="pixel-blink h-2.5 w-2.5 bg-[#6EEB83]" />
                  </div>

                  {/* Ícone */}
                  <div
                    className="
                      mt-5
                      flex
                      h-[82px]
                      w-[82px]
                      items-center
                      justify-center
                      border-2
                      border-[#111111]
                      bg-[#F3E8FF]
                      shadow-[5px_5px_0_#C4B5FD]
                      transition-[transform,box-shadow]
                      duration-100
                      group-hover:-translate-x-1
                      group-hover:-translate-y-1
                      group-hover:shadow-[6px_6px_0_#6EEB83]
                    "
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.8}
                      className="text-[#7C3AED]"
                    />
                  </div>

                  {/* Título */}
                  <h3 className="font-pixel mt-7 text-[21px] font-bold text-[#111111]">
                    {group.title}
                  </h3>

                  {/* Tecnologias */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          font-pixel
                          rounded-[4px]
                          border
                          border-[#7C3AED]
                          bg-white
                          px-3
                          py-2
                          text-[10px]
                          font-bold
                          text-[#7C3AED]
                          transition-[transform,background-color,border-color,color]
                          duration-100
                          hover:-translate-x-0.5
                          hover:-translate-y-0.5
                          hover:border-[#111111]
                          hover:bg-[#6EEB83]
                          hover:text-[#111111]
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Faixa inferior */}
                  <div className="absolute bottom-0 left-0 flex h-2 w-full">
                    <span className="w-[52%] bg-[#7C3AED]" />
                    <span className="w-[30%] bg-[#6EEB83]" />
                    <span className="flex-1 bg-[#111111]" />
                  </div>
                </article>
              </PixelItem>
            );
          })}

          {/* Card final */}
          <PixelItem className="h-full">
            <article
              className="
                pixel-card
                group
                relative
                flex
                h-full
                min-h-[285px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-[8px]
                border-2
                border-dashed
                border-[#7C3AED]
                bg-white/45
                p-8
                text-center
                backdrop-blur-sm
                transition-[transform,background-color,box-shadow]
                duration-100
                hover:-translate-x-1
                hover:-translate-y-1
                hover:bg-white/60
                hover:shadow-[8px_8px_0_rgba(124,58,237,0.35)]
              "
            >
              <span
                className="
                  font-pixel
                  text-[42px]
                  font-bold
                  text-[#7C3AED]
                  transition-transform
                  duration-100
                  group-hover:-translate-y-1
                "
              >
                +
              </span>

              <p className="font-pixel mt-5 text-[14px] font-bold text-[#7C3AED]">
                EM EVOLUÇÃO
              </p>

              <p className="mt-4 max-w-[260px] text-[14px] leading-6 text-[#1F2937]">
                Sempre estudando novas ferramentas e aprimorando as habilidades
                que já utilizo em meus projetos.
              </p>

              <PixelStagger className="mt-7 flex gap-1" delay={0.25}>
                <PixelItem>
                  <span className="block h-3 w-7 bg-[#7C3AED]" />
                </PixelItem>

                <PixelItem>
                  <span className="block h-3 w-7 bg-[#7C3AED]" />
                </PixelItem>

                <PixelItem>
                  <span className="block h-3 w-7 bg-white" />
                </PixelItem>

                <PixelItem>
                  <span className="block h-3 w-7 border border-[#111111] bg-transparent" />
                </PixelItem>
              </PixelStagger>
            </article>
          </PixelItem>
        </PixelStagger>

        {/* Rodapé do inventário */}
        <PixelReveal direction="up" delay={0.2}>
          <div className="mt-12 flex flex-col gap-4 border-l-4 border-[#7C3AED] bg-white/35 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-pixel text-[10px] font-bold text-[#7C3AED]">
                &gt; INVENTORY STATUS
              </p>

              <p className="font-pixel mt-2 text-[15px] font-bold text-[#111111] sm:text-[17px]">
                Novas habilidades desbloqueadas a cada projeto.
              </p>
            </div>

            <span className="font-pixel pixel-blink text-[10px] font-bold text-white">
              LOADING MORE_
            </span>
          </div>
        </PixelReveal>
      </Container>
    </section>
  );
}