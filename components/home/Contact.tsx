import { Container } from "@/components/ui/Container";
import { PixelReveal } from "@/components/ui/PixelReveal";
import {
  PixelItem,
  PixelStagger,
} from "@/components/ui/PixelStagger";
import { BriefcaseBusiness, Code2, Mail, Send } from "lucide-react";

const contacts = [
  {
    label: "GitHub",
    value: "github.com/cmbrunaa",
    href: "https://github.com/cmbrunaa",
    icon: Code2,
    number: "01",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/brunamcandido",
    href: "https://linkedin.com/in/brunamcandido",
    icon: BriefcaseBusiness,
    number: "02",
  },
  {
    label: "E-mail",
    value: "brunacandido030@gmail.com",
    href: "mailto:brunacandido030@gmail.com",
    icon: Mail,
    number: "03",
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="
        relative
        scroll-mt-[130px]
        overflow-hidden
        border-y
        border-[#6EEB83]/30
        bg-[#5B21B6]
        py-24
        text-white
      "
    >
      {/* Grade retrô */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.065]
          [background-image:linear-gradient(#FFFFFF_1px,transparent_1px),linear-gradient(90deg,#FFFFFF_1px,transparent_1px)]
          [background-size:36px_36px]
        "
      />

      {/* Glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#6EEB83]/12 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-[-130px] h-[500px] w-[500px] rounded-full bg-[#A78BFA]/25 blur-3xl" />

      <Container className="relative">
        {/* Cabeçalho */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <PixelReveal direction="left">
            <div>
              <p className="font-pixel flex items-center gap-3 text-[12px] font-bold tracking-[0.08em] text-[#6EEB83] sm:text-[13px]">
                <span className="pixel-blink">&gt;</span>
                FINAL STAGE · NEW QUEST
              </p>

              <h2
                className="
                  font-pixel
                  mt-5
                  max-w-[720px]
                  text-[40px]
                  font-bold
                  leading-[1.08]
                  sm:text-[50px]
                  lg:text-[58px]
                "
              >
                Vamos construir algo{" "}
                <span className="text-[#6EEB83]">juntos?</span>
              </h2>
            </div>
          </PixelReveal>

          <PixelReveal direction="right" delay={0.12}>
            <div className="max-w-[700px] lg:justify-self-end">
              <p className="text-[16px] leading-8 text-[#F1ECFF] sm:text-[17px]">
                Estou aberta a oportunidades profissionais, colaborações e
                novos projetos na área de tecnologia.
              </p>

              <p className="mt-4 text-[16px] leading-8 text-[#F1ECFF] sm:text-[17px]">
                Escolha um dos canais abaixo para conversar comigo.
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
              SELECT CHANNEL
            </span>
          </div>
        </PixelReveal>

        {/* Contatos */}
        <PixelStagger className="mt-10 grid gap-6 lg:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <PixelItem key={contact.label} className="h-full">
                <a
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    group
                    pixel-card
                    relative
                    flex
                    min-h-[245px]
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[8px]
                    border-2
                    border-white
                    bg-[#FFFDF9]
                    p-7
                    text-[#111111]
                    shadow-[7px_7px_0_#6EEB83]
                    transition-[transform,border-color,box-shadow]
                    duration-100
                    hover:-translate-x-1
                    hover:-translate-y-1
                    hover:border-[#6EEB83]
                    hover:shadow-[10px_10px_0_#A78BFA]
                  "
                >
                  {/* Topo */}
                  <div className="flex items-center justify-between">
                    <span className="font-pixel text-[10px] font-bold text-[#7C3AED]">
                      CHANNEL {contact.number}
                    </span>

                    <span className="pixel-blink h-2.5 w-2.5 bg-[#6EEB83]" />
                  </div>

                  {/* Ícone */}
                  <div
                    className="
                      mt-7
                      flex
                      h-[68px]
                      w-[68px]
                      items-center
                      justify-center
                      border-2
                      border-[#111111]
                      bg-[#F3E8FF]
                      shadow-[4px_4px_0_#C4B5FD]
                      transition-transform
                      duration-100
                      group-hover:-translate-x-1
                      group-hover:-translate-y-1
                    "
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.9}
                      className="text-[#7C3AED]"
                    />
                  </div>

                  <h3 className="font-pixel mt-7 text-[20px] font-bold text-[#111111]">
                    {contact.label}
                  </h3>

                  <p className="mt-3 break-words text-[14px] leading-6 text-[#666666]">
                    {contact.value}
                  </p>

                  {/* Abrir */}
                  <div className="mt-auto flex items-center justify-between border-t border-[#DDD6FE] pt-5">
                    <span className="font-pixel text-[10px] font-bold text-[#7C3AED]">
                      ABRIR CANAL
                    </span>

                    <span
                      className="
                        font-pixel
                        text-[16px]
                        text-[#6EEB83]
                        transition-transform
                        duration-100
                        group-hover:translate-x-1
                      "
                    >
                      &gt;
                    </span>
                  </div>

                  {/* Barra inferior */}
                  <div className="absolute bottom-0 left-0 flex h-2 w-full">
                    <span className="w-[50%] bg-[#7C3AED]" />
                    <span className="w-[30%] bg-[#6EEB83]" />
                    <span className="flex-1 bg-[#111111]" />
                  </div>
                </a>
              </PixelItem>
            );
          })}
        </PixelStagger>

        {/* CTA principal */}
        <PixelReveal direction="up" delay={0.2}>
          <div
            className="
              pixel-card
              mt-12
              flex
              flex-col
              gap-7
              rounded-[8px]
              border-2
              border-[#6EEB83]
              bg-[#4C1D95]
              p-7
              shadow-[7px_7px_0_rgba(17,17,17,0.25)]
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>
              <p className="font-pixel text-[10px] font-bold text-[#6EEB83]">
                &gt; READY FOR A NEW QUEST?
              </p>

              <h3 className="font-pixel mt-3 text-[20px] font-bold leading-8 text-white sm:text-[24px]">
                Entre em contato e vamos conversar.
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-[#EDE9FE]">
                O e-mail é o canal mais direto para oportunidades e propostas.
              </p>
            </div>

            <a
              href="mailto:brunacandido030@gmail.com"
              className="
                font-pixel
                flex
                min-h-[54px]
                shrink-0
                items-center
                justify-center
                gap-3
                border-2
                border-[#111111]
                bg-[#6EEB83]
                px-6
                text-[11px]
                font-bold
                text-[#111111]
                shadow-[4px_4px_0_#111111]
                transition-[transform,box-shadow]
                duration-100
                hover:-translate-x-1
                hover:-translate-y-1
                hover:shadow-[6px_6px_0_#111111]
              "
            >
              <Send size={17} />
              ENVIAR E-MAIL
            </a>
          </div>
        </PixelReveal>
      </Container>
    </section>
  );
}