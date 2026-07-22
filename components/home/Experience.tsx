import { Container } from "@/components/ui/Container";
import { PixelReveal } from "@/components/ui/PixelReveal";
import {
  PixelItem,
  PixelStagger,
} from "@/components/ui/PixelStagger";
import {
  BriefcaseBusiness,
  Code2,
  Headphones,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    stage: "STAGE 01",
    period: "2025",
    company: "Secretaria Municipal da Educação de Curitiba",
    role: "Estagiária de Tecnologia da Informação",
    location: "Curitiba — PR",
    icon: Headphones,
    description:
      "Atuação no suporte técnico aos usuários e apoio às atividades de Tecnologia da Informação da rede municipal de ensino.",
    activities: [
      "Atendimento e suporte técnico aos usuários",
      "Administração de contas e acessos",
      "Configuração e manutenção de computadores e tablets",
      "Apoio aos sistemas utilizados pela rede municipal",
      "Atendimento de chamados e resolução de problemas",
    ],
    technologies: ["SUPORTE", "HARDWARE", "ACESSOS", "SISTEMAS"],
  },
  {
    stage: "STAGE 02",
    period: "SET/2025 — JUN/2026",
    company: "Cobe Tecnologia",
    role: "Estagiária de Desenvolvimento",
    location: "Curitiba — PR",
    icon: Code2,
    description:
      "Participação no desenvolvimento, manutenção e evolução de aplicações web e sistemas corporativos.",
    activities: [
      "Desenvolvimento de funcionalidades com React, Next.js e TypeScript",
      "Criação e manutenção de APIs REST com NestJS",
      "Implementação de operações CRUD",
      "Integração entre frontend e backend",
      "Desenvolvimento de dashboards, relatórios e indicadores",
      "Implementação de filtros, paginação e exportação de dados",
      "Correção de bugs e manutenção evolutiva",
      "Participação na migração de funcionalidades para uma API V2",
    ],
    technologies: [
      "REACT",
      "NEXT.JS",
      "TYPESCRIPT",
      "NESTJS",
      "POSTGRESQL",
      "PRISMA",
      "GIT",
      "SCRUM",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-[#F8F8F8] py-24 text-[#111111]"
    >
      {/* Grade de fundo */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(#7C3AED_1px,transparent_1px),linear-gradient(90deg,#7C3AED_1px,transparent_1px)]
          [background-size:34px_34px]
        "
      />

      {/* Detalhes de fundo */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[360px] w-[360px] rounded-full bg-[#6EEB83]/15 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

      <Container className="relative">
        {/* Cabeçalho */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <PixelReveal direction="left">
            <div>
              <p className="font-pixel flex items-center gap-3 text-[12px] font-bold tracking-[0.08em] text-[#7C3AED] sm:text-[13px]">
                <span className="pixel-blink">&gt;</span>
                STAGE 03 · EXPERIENCE
              </p>

              <h2 className="font-pixel mt-5 text-[42px] font-bold leading-[1.08] sm:text-[52px] lg:text-[60px]">
                Experiência
                <span className="block text-[#7C3AED]">profissional</span>
              </h2>
            </div>
          </PixelReveal>

          <PixelReveal direction="right" delay={0.12}>
            <p className="max-w-[720px] text-[16px] leading-8 text-[#444444] sm:text-[17px] lg:justify-self-end">
              Minha trajetória profissional começou no suporte técnico e evoluiu
              para o desenvolvimento de aplicações web, APIs, bancos de dados e
              integrações entre sistemas.
            </p>
          </PixelReveal>
        </div>

        {/* Divisor */}
        <PixelReveal delay={0.16}>
          <div className="mt-12 flex items-center gap-4">
            <span className="pixel-blink h-3 w-3 bg-[#6EEB83]" />

            <div className="h-px flex-1 bg-[#111111]/15" />

            <span className="font-pixel text-[10px] font-bold text-[#7C3AED] sm:text-[11px]">
              CAREER LOG
            </span>
          </div>
        </PixelReveal>

        {/* Experiências */}
        <PixelStagger className="mt-12 grid gap-8 lg:grid-cols-2">
          {experiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <PixelItem key={experience.company}>
                <article
                  className="
                    pixel-card
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    border-2
                    border-[#111111]
                    bg-white
                    p-7
                    shadow-[8px_8px_0_#7C3AED]
                    transition-transform
                    duration-100
                    hover:-translate-x-1
                    hover:-translate-y-1
                  "
                >
                  {/* Cantos pixel */}
                  <span className="absolute left-0 top-0 h-10 w-10 border-l-4 border-t-4 border-[#6EEB83]" />

                  <span className="absolute bottom-0 right-0 h-10 w-10 border-b-4 border-r-4 border-[#7C3AED]" />

                  {/* Topo */}
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          border-2
                          border-[#111111]
                          bg-[#ECFFF0]
                          shadow-[4px_4px_0_#6EEB83]
                        "
                      >
                        <Icon
                          size={26}
                          strokeWidth={2}
                          className="text-[#7C3AED]"
                        />
                      </div>

                      <div>
                        <p className="font-pixel text-[10px] font-bold text-[#7C3AED]">
                          {experience.stage}
                        </p>

                        <h3 className="font-pixel mt-3 text-[20px] font-bold leading-7 text-[#111111]">
                          {experience.company}
                        </h3>

                        <p className="mt-2 text-[15px] font-semibold text-[#5B21B6]">
                          {experience.role}
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        font-pixel
                        inline-flex
                        w-fit
                        border
                        border-[#7C3AED]
                        bg-[#F3E8FF]
                        px-3
                        py-2
                        text-[9px]
                        font-bold
                        text-[#5B21B6]
                      "
                    >
                      {experience.period}
                    </span>
                  </div>

                  {/* Localização */}
                  <div className="mt-6 flex items-center gap-2 border-y border-[#111111]/10 py-4">
                    <MapPin size={17} className="text-[#7C3AED]" />

                    <span className="font-pixel text-[10px] font-bold text-[#555555]">
                      {experience.location}
                    </span>
                  </div>

                  {/* Descrição */}
                  <p className="mt-6 text-[15px] leading-7 text-[#444444]">
                    {experience.description}
                  </p>

                  {/* Atividades */}
                  <div className="mt-7">
                    <p className="font-pixel text-[10px] font-bold text-[#7C3AED]">
                      &gt; MAIN QUESTS
                    </p>

                    <ul className="mt-4 space-y-3">
                      {experience.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-start gap-3 text-[14px] leading-6 text-[#333333]"
                        >
                          <span className="mt-[9px] h-2 w-2 shrink-0 bg-[#6EEB83] shadow-[2px_2px_0_#7C3AED]" />

                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tecnologias */}
                  <div className="mt-auto pt-8">
                    <p className="font-pixel text-[10px] font-bold text-[#777777]">
                      SKILLS UNLOCKED
                    </p>

                    <PixelStagger
                      className="mt-4 flex flex-wrap gap-2"
                      delay={0.16}
                    >
                      {experience.technologies.map((technology) => (
                        <PixelItem key={technology}>
                          <span
                            className="
                              font-pixel
                              inline-block
                              border
                              border-[#111111]
                              bg-[#F8F8F8]
                              px-3
                              py-2
                              text-[9px]
                              font-bold
                              text-[#111111]
                              shadow-[2px_2px_0_#6EEB83]
                            "
                          >
                            {technology}
                          </span>
                        </PixelItem>
                      ))}
                    </PixelStagger>
                  </div>
                </article>
              </PixelItem>
            );
          })}
        </PixelStagger>

        {/* Rodapé da seção */}
        <PixelReveal direction="up" delay={0.2}>
          <div
            className="
              pixel-card
              mt-14
              flex
              flex-col
              gap-4
              border-2
              border-[#111111]
              bg-[#111111]
              px-6
              py-5
              text-white
              shadow-[6px_6px_0_#6EEB83]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-4">
              <BriefcaseBusiness
                size={22}
                className="text-[#6EEB83]"
              />

              <div>
                <p className="font-pixel text-[10px] font-bold text-[#6EEB83]">
                  EXPERIENCE STATUS
                </p>

                <p className="font-pixel mt-2 text-[15px] font-bold sm:text-[17px]">
                  Pronta para o próximo desafio.
                </p>
              </div>
            </div>

            <span className="font-pixel pixel-blink text-[10px] text-[#C4B5FD]">
              NEW OPPORTUNITIES_
            </span>
          </div>
        </PixelReveal>
      </Container>
    </section>
  );
}