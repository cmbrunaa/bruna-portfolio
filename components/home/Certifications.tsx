"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { PixelReveal } from "@/components/ui/PixelReveal";
import {
  PixelItem,
  PixelStagger,
} from "@/components/ui/PixelStagger";
import {
  Award,
  Building2,
  CheckCircle2,
  FileText,
  GraduationCap,
  Trophy,
} from "lucide-react";

const certifications = [
  {
    id: "amcham-projeto-universidade",
    stage: "BONUS STAGE 01",
    title: "Projeto Universidade",
    organization: "Amcham Brasil — Amcham Paraná",
    project: "ValidaFlow",
    partner: "Landis+Gyr",
    description:
      "Certificado recebido pela participação no Projeto Universidade da Amcham Paraná, por meio do desenvolvimento do ValidaFlow em parceria com a Landis+Gyr.",
    details:
      "O projeto teve como objetivo desenvolver uma solução para automatizar parte do processo de validação de medidores, aplicando conhecimentos de desenvolvimento de software em uma demanda real.",
    skills: [
      "DESENVOLVIMENTO",
      "TRABALHO EM EQUIPE",
      "RESOLUÇÃO DE PROBLEMAS",
      "PROJETO REAL",
      "PYTHON",
      "SQLITE",
    ],
    certificateUrl: "/certificates/validaflow.png",
  },
];

export function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certifications)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <>
      <section
        id="certificacoes"
        className="
        relative
        scroll-mt-[130px]
        overflow-hidden
        border-y
        border-[#7C3AED]/20
        bg-[#FFFDF9]
        py-24
      "
      >
        {/* Grade de fundo */}
        <div
          className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(#7C3AED_1px,transparent_1px),linear-gradient(90deg,#7C3AED_1px,transparent_1px)]
          [background-size:38px_38px]
        "
        />

        {/* Glows */}
        <div className="pointer-events-none absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-[#6EEB83]/15 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-[-120px] h-[480px] w-[480px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

        <Container className="relative">
          {/* Cabeçalho */}
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <PixelReveal direction="left">
              <div>
                <p className="font-pixel flex items-center gap-3 text-[12px] font-bold tracking-[0.08em] text-[#7C3AED] sm:text-[13px]">
                  <span className="pixel-blink">&gt;</span>
                  BONUS STAGE · CERTIFICATIONS
                </p>

                <h2 className="font-pixel mt-5 max-w-[700px] text-[40px] font-bold leading-[1.08] text-[#111111] sm:text-[50px] lg:text-[58px]">
                  Certificações e{" "}
                  <span className="text-[#7C3AED]">reconhecimentos</span>
                </h2>
              </div>
            </PixelReveal>

            <PixelReveal direction="right" delay={0.12}>
              <p className="max-w-[700px] text-[16px] leading-8 text-[#555555] sm:text-[17px] lg:justify-self-end">
                Reconhecimentos obtidos durante minha formação e participação em
                projetos desenvolvidos em parceria com instituições e empresas.
              </p>
            </PixelReveal>
          </div>

          {/* Divisor */}
          <PixelReveal delay={0.18}>
            <div className="mt-12 flex items-center gap-4">
              <span className="pixel-blink h-3 w-3 bg-[#6EEB83]" />

              <div className="h-px flex-1 bg-[#7C3AED]/25" />

              <span className="font-pixel text-[10px] font-bold text-[#7C3AED] sm:text-[11px]">
                ACHIEVEMENTS UNLOCKED
              </span>
            </div>
          </PixelReveal>

          {/* Certificados */}
          <PixelStagger className="mt-12 grid gap-8">
            {certifications.map((certification) => {
              const hasCertificate = Boolean(certification.certificateUrl);

              return (
                <PixelItem key={certification.id}>
                  <article
                    className="
                    pixel-card
                    relative
                    overflow-hidden
                    rounded-[8px]
                    border-2
                    border-[#7C3AED]
                    bg-white
                    shadow-[8px_8px_0_#6EEB83]
                  "
                  >
                    {/* Barra superior */}
                    <div
                      className="
                      flex
                      flex-col
                      gap-4
                      border-b-2
                      border-[#7C3AED]
                      bg-[#F3E8FF]
                      px-6
                      py-5
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          border-2
                          border-[#111111]
                          bg-[#6EEB83]
                          shadow-[3px_3px_0_#7C3AED]
                        "
                        >
                          <Trophy
                            size={22}
                            strokeWidth={2.2}
                            className="text-[#111111]"
                          />
                        </span>

                        <div>
                          <p className="font-pixel text-[9px] font-bold text-[#7C3AED]">
                            {certification.stage}
                          </p>

                          <p className="font-pixel mt-1 text-[12px] font-bold text-[#111111]">
                            ACHIEVEMENT UNLOCKED
                          </p>
                        </div>
                      </div>

                      <span
                        className="
                        font-pixel
                        flex
                        w-fit
                        items-center
                        gap-2
                        border
                        border-[#57C96B]
                        bg-white
                        px-3
                        py-2
                        text-[9px]
                        font-bold
                        text-[#57C96B]
                      "
                      >
                        <CheckCircle2 size={14} />
                        CONCLUÍDO
                      </span>
                    </div>

                    {/* Conteúdo */}
                    <div className="grid gap-10 p-7 lg:grid-cols-[0.75fr_1.25fr] lg:p-9">
                      {/* Área visual */}
                      <div
                        className="
                        relative
                        flex
                        min-h-[280px]
                        flex-col
                        items-center
                        justify-center
                        overflow-hidden
                        border-2
                        border-[#111111]
                        bg-[#11131A]
                        p-8
                        text-center
                        shadow-[6px_6px_0_#C4B5FD]
                      "
                      >
                        {/* Grade interna */}
                        <div
                          className="
                          pointer-events-none
                          absolute
                          inset-0
                          opacity-[0.07]
                          [background-image:linear-gradient(#FFFFFF_1px,transparent_1px),linear-gradient(90deg,#FFFFFF_1px,transparent_1px)]
                          [background-size:24px_24px]
                        "
                        />

                        <div className="relative">
                          <div
                            className="
                            mx-auto
                            flex
                            h-24
                            w-24
                            items-center
                            justify-center
                            border-2
                            border-[#6EEB83]
                            bg-[#5B21B6]
                            shadow-[6px_6px_0_#6EEB83]
                          "
                          >
                            <Award
                              size={48}
                              strokeWidth={1.7}
                              className="text-white"
                            />
                          </div>

                          <p className="font-pixel mt-8 text-[12px] font-bold text-[#6EEB83]">
                            CERTIFICATE DATA
                          </p>

                          <p className="font-pixel mt-3 text-[10px] leading-5 text-[#C4B5FD]">
                            IMAGEM DO CERTIFICADO
                            <br />
                            SERÁ ADICIONADA EM BREVE
                          </p>

                          <span className="pixel-blink mt-6 inline-block h-3 w-3 bg-[#6EEB83]" />
                        </div>
                      </div>

                      {/* Informações */}
                      <div className="flex flex-col">
                        <p className="font-pixel text-[10px] font-bold tracking-[0.06em] text-[#57C96B]">
                          &gt; CERTIFICATION DETAILS
                        </p>

                        <h3 className="font-pixel mt-4 text-[25px] font-bold leading-8 text-[#111111] sm:text-[30px]">
                          {certification.title}
                        </h3>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                          <div className="flex items-start gap-3 border-l-4 border-[#7C3AED] bg-[#F8F5FF] p-4">
                            <Building2
                              size={21}
                              className="mt-0.5 shrink-0 text-[#7C3AED]"
                            />

                            <div>
                              <p className="font-pixel text-[9px] font-bold text-[#777777]">
                                ORGANIZAÇÃO
                              </p>

                              <p className="mt-2 text-[14px] font-semibold leading-6 text-[#111111]">
                                {certification.organization}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 border-l-4 border-[#6EEB83] bg-[#F1FFF4] p-4">
                            <GraduationCap
                              size={21}
                              className="mt-0.5 shrink-0 text-[#57C96B]"
                            />

                            <div>
                              <p className="font-pixel text-[9px] font-bold text-[#777777]">
                                PROJETO
                              </p>

                              <p className="mt-2 text-[14px] font-semibold leading-6 text-[#111111]">
                                {certification.project} ·{" "}
                                {certification.partner}
                              </p>
                            </div>
                          </div>
                        </div>

                        <p className="mt-6 text-[15px] leading-7 text-[#444444]">
                          {certification.description}
                        </p>

                        <p className="mt-4 text-[14px] leading-7 text-[#666666]">
                          {certification.details}
                        </p>

                        {/* Competências */}
                        <div className="mt-7">
                          <p className="font-pixel text-[10px] font-bold text-[#7C3AED]">
                            SKILLS UNLOCKED
                          </p>

                          <PixelStagger
                            className="mt-4 flex flex-wrap gap-2"
                            delay={0.16}
                          >
                            {certification.skills.map((skill) => (
                              <PixelItem key={skill}>
                                <span
                                  className="
                                  font-pixel
                                  inline-block
                                  border
                                  border-[#7C3AED]
                                  bg-white
                                  px-3
                                  py-2
                                  text-[9px]
                                  font-bold
                                  text-[#7C3AED]
                                  shadow-[2px_2px_0_#C4B5FD]
                                "
                                >
                                  {skill}
                                </span>
                              </PixelItem>
                            ))}
                          </PixelStagger>
                        </div>

                        {/* Botão */}
                        <div className="mt-auto pt-8">
                          {hasCertificate ? (
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedCertificate(certification)
                              }
                              className="
                              font-pixel
                              inline-flex
                              min-h-[52px]
                              items-center
                              justify-center
                              gap-3
                              border-2
                              border-[#111111]
                              bg-[#6EEB83]
                              px-6
                              text-[10px]
                              font-bold
                              text-[#111111]
                              shadow-[4px_4px_0_#7C3AED]
                              transition-transform
                              duration-100
                              hover:-translate-x-1
                              hover:-translate-y-1
                            "
                            >
                              <FileText size={18} />
                              VER CERTIFICADO
                            </button>
                          ) : (
                            <div
                              className="
                              font-pixel
                              inline-flex
                              min-h-[52px]
                              cursor-not-allowed
                              items-center
                              justify-center
                              gap-3
                              border-2
                              border-[#AAAAAA]
                              bg-[#F3F3F3]
                              px-6
                              text-[10px]
                              font-bold
                              text-[#888888]
                            "
                            >
                              <FileText size={18} />
                              CERTIFICADO EM BREVE
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Barra inferior */}
                    <div className="flex h-2 w-full">
                      <span className="w-[50%] bg-[#7C3AED]" />
                      <span className="w-[30%] bg-[#6EEB83]" />
                      <span className="flex-1 bg-[#111111]" />
                    </div>
                  </article>
                </PixelItem>
              );
            })}
          </PixelStagger>

          {/* Rodapé */}
          <PixelReveal direction="up" delay={0.2}>
            <div
              className="
              pixel-card
              mt-12
              flex
              flex-col
              gap-5
              border-2
              border-[#111111]
              bg-[#11131A]
              px-7
              py-6
              text-white
              shadow-[6px_6px_0_#7C3AED]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
            >
              <div>
                <p className="font-pixel text-[10px] font-bold text-[#6EEB83]">
                  &gt; ACHIEVEMENT LOG
                </p>

                <p className="font-pixel mt-2 text-[15px] font-bold sm:text-[17px]">
                  Reconhecimento por um projeto desenvolvido para um desafio real.
                </p>
              </div>

              <span className="font-pixel pixel-blink text-[10px] text-[#C4B5FD]">
                MORE ACHIEVEMENTS LOADING_
              </span>
            </div>
          </PixelReveal>
        </Container>
      </section>

      {/* POPUP — ADICIONADO */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#111111]/80 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCertificate(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="
              relative
              flex
              max-h-[92vh]
              w-full
              max-w-[1100px]
              flex-col
              overflow-hidden
              border-4
              border-[#111111]
              bg-[#FFFDF9]
              shadow-[8px_8px_0_#6EEB83,16px_16px_0_#7C3AED]
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                border-b-4
                border-[#111111]
                bg-[#7C3AED]
                px-5
                py-4
              "
            >
              <div>
                <p className="font-pixel text-[9px] font-bold text-[#6EEB83]">
                  &gt; CERTIFICATE.EXE
                </p>

                <p className="font-pixel mt-1 text-[11px] font-bold text-white">
                  {selectedCertificate.title}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Fechar certificado"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border-2
                  border-[#111111]
                  bg-[#6EEB83]
                  font-pixel
                  text-[12px]
                  font-bold
                  text-[#111111]
                  transition-transform
                  duration-100
                  hover:-translate-x-1
                  hover:-translate-y-1
                "
              >
                X
              </button>
            </div>

            <div
              className="
                min-h-0
                overflow-auto
                bg-[#11131A]
                p-4
                sm:p-8
              "
            >
              <div
                className="
                  flex
                  min-h-[300px]
                  items-center
                  justify-center
                  border-2
                  border-[#6EEB83]
                  bg-[#FFFDF9]
                  p-3
                  shadow-[5px_5px_0_#7C3AED]
                  sm:p-6
                "
              >
                <img
                  src={selectedCertificate.certificateUrl}
                  alt={`Certificado de ${selectedCertificate.title}`}
                  className="max-h-[70vh] max-w-full object-contain"
                />
              </div>
            </div>

            <div
              className="
                flex
                items-center
                justify-between
                border-t-4
                border-[#111111]
                bg-[#11131A]
                px-5
                py-3
              "
            >
              <span className="font-pixel text-[8px] text-[#C4B5FD]">
                &gt; CERTIFICATE LOADED_
              </span>

              <span className="font-pixel text-[8px] font-bold text-[#6EEB83]">
                STATUS: UNLOCKED
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}