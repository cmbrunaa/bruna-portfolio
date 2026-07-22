import { ProjectCard } from "@/components/projects/ProjectCard";
import { PixelReveal } from "@/components/ui/PixelReveal";
import { PixelItem, PixelStagger } from "@/components/ui/PixelStagger";
import { projects } from "@/data/projects";
import { Gamepad2 } from "lucide-react";

export function Projects() {
  return (
    <section
      id="projetos"
      className="
        relative
        scroll-mt-[120px]
        overflow-hidden
        border-b
        border-[#7C3AED]/20
        bg-[#FFFDF9]
        py-24
      "
    >
      {/* Grade discreta */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#7C3AED_1px,transparent_1px),linear-gradient(90deg,#7C3AED_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Decoração */}
      <div className="pointer-events-none absolute -left-44 top-10 h-[400px] w-[400px] rounded-full bg-[#6EEB83]/8 blur-3xl" />

      <div className="pointer-events-none absolute -right-44 bottom-[-100px] h-[460px] w-[460px] rounded-full bg-[#7C3AED]/8 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-10">
        {/* Cabeçalho */}
        <PixelReveal direction="left">
          <div className="flex flex-col gap-5 border-b border-[#7C3AED]/35 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  border-2
                  border-[#111111]
                  bg-[#6EEB83]
                  shadow-[3px_3px_0_#7C3AED]
                "
              >
                <Gamepad2
                  size={21}
                  strokeWidth={2.3}
                  className="text-[#111111]"
                />
              </span>

              <div>
                <p className="font-pixel mb-2 text-[9px] font-bold tracking-[0.06em] text-[#7C3AED]">
                  &gt; STAGE SELECT
                </p>

                <h2 className="font-pixel text-[22px] font-bold text-[#111111] sm:text-[26px]">
                  PROJETOS EM DESTAQUE
                </h2>
              </div>
            </div>

            <a
              href="https://github.com/cmbrunaa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver todos os projetos no GitHub"
              className="
    font-pixel
    group
    flex
    w-fit
    items-center
    gap-2
    text-[11px]
    font-bold
    text-[#7C3AED]
  "
            >
              VER TODOS
              <span
                className="
                  text-[#57C96B]
                  transition-transform
                  duration-100
                  group-hover:translate-x-1
                "
              >
                &gt;
              </span>
            </a>
          </div>
        </PixelReveal>

        {/* Cards */}
        <PixelStagger className="mt-8 grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <PixelItem key={project.id} className="h-full">
              <div className="relative h-full">
                {/* Número da fase */}
                <div
                  className="
                    font-pixel
                    absolute
                    -left-2
                    -top-3
                    z-20
                    border-2
                    border-[#111111]
                    bg-[#6EEB83]
                    px-3
                    py-2
                    text-[9px]
                    font-bold
                    text-[#111111]
                    shadow-[3px_3px_0_#7C3AED]
                  "
                >
                  STAGE 0{index + 1}
                </div>

                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                  github={project.github}
                  demo={project.demo}
                />
              </div>
            </PixelItem>
          ))}
        </PixelStagger>

        {/* Indicador inferior */}
        <PixelReveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="h-2 w-8 bg-[#7C3AED]" />
            <span className="h-2 w-2 bg-[#6EEB83]" />
            <span className="h-2 w-2 border border-[#7C3AED]" />
          </div>
        </PixelReveal>
      </div>
    </section>
  );
}
