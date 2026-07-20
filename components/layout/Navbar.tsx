"use client";

import {
  Briefcase,
  Code2,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { label: "INÍCIO", href: "#home" },
  { label: "SOBRE", href: "#sobre" },
  { label: "PROJETOS", href: "#projetos" },
  { label: "HABILIDADES", href: "#habilidades" },
  { label: "CONTATO", href: "#contato" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/cmbrunaa",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/brunamcandido",
    icon: Briefcase,
  },
  {
    label: "E-mail",
    href: "mailto:brunacandido030@gmail.com",
    icon: Mail,
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F8F8]/95 px-3 pt-3 backdrop-blur-md sm:px-5 sm:pt-4">
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[82px]
          w-full
          max-w-[1800px]
          items-center
          justify-between
          rounded-[10px]
          border-2
          border-[#7C3AED]
          bg-[#FDFCFB]
          px-4
          shadow-[0_6px_20px_rgba(124,58,237,0.06)]
          sm:min-h-[92px]
          sm:px-6
          lg:grid
          lg:min-h-[106px]
          lg:grid-cols-[1fr_auto_1fr]
          lg:px-8
          xl:px-10
        "
      >
        {/* Cantos pixelados */}
        <span className="absolute -left-[2px] -top-[2px] h-3 w-3 rounded-tl-[8px] border-l-2 border-t-2 border-[#7C3AED]" />
        <span className="absolute -right-[2px] -top-[2px] h-3 w-3 rounded-tr-[8px] border-r-2 border-t-2 border-[#7C3AED]" />
        <span className="absolute -bottom-[2px] -left-[2px] h-3 w-3 rounded-bl-[8px] border-b-2 border-l-2 border-[#7C3AED]" />
        <span className="absolute -bottom-[2px] -right-[2px] h-3 w-3 rounded-br-[8px] border-b-2 border-r-2 border-[#7C3AED]" />

        {/* Logo */}
        <a
          href="#home"
          aria-label="Voltar ao início"
          onClick={closeMenu}
          className="
            group
            flex
            w-fit
            min-w-0
            shrink-0
            items-center
            gap-2
            sm:gap-4
            lg:gap-5
          "
        >
          <Image
            src="/sprites/gameboy-pequeno.png"
            alt="Game Boy em pixel art"
            width={80}
            height={92}
            priority
            className="
              h-[54px]
              w-auto
              shrink-0
              object-contain
              transition-transform
              duration-100
              group-hover:-translate-x-1
              group-hover:-translate-y-1
              sm:h-[64px]
              lg:h-[78px]
            "
          />

          <div className="min-w-0">
            <p
              className="
                font-pixel
                whitespace-nowrap
                text-[19px]
                font-bold
                leading-none
                tracking-[0.01em]
                min-[380px]:text-[21px]
                sm:text-[24px]
                lg:text-[27px]
              "
            >
              <span className="text-[#7C3AED]">BRUNA</span>
              <span className="text-[#6EEB83]">.DEV</span>
            </p>

            <p
              className="
                font-pixel
                mt-2
                hidden
                items-center
                gap-2
                whitespace-nowrap
                text-[11px]
                font-bold
                text-[#222222]
                min-[380px]:flex
                sm:mt-3
                sm:text-[12px]
                lg:text-[13px]
              "
            >
              <span className="pixel-blink text-[#57C96B]">&gt;</span>
              <span>PRESS START</span>
              <span className="pixel-blink text-[#57C96B]">&lt;</span>
            </p>
          </div>
        </a>

        {/* Navegação desktop */}
        <nav
          aria-label="Navegação principal"
          className="
            hidden
            items-center
            justify-center
            gap-6
            lg:flex
            xl:gap-10
            2xl:gap-14
          "
        >
          {navigation.map((item, index) => {
            const isActive = index === 0;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`
                  group
                  font-pixel
                  relative
                  flex
                  h-[104px]
                  items-center
                  whitespace-nowrap
                  text-[14px]
                  font-bold
                  tracking-[0.01em]
                  transition-colors
                  duration-100
                  xl:text-[15px]
                  2xl:text-[17px]
                  ${
                    isActive
                      ? "text-[#7C3AED]"
                      : "text-[#111111] hover:text-[#7C3AED]"
                  }
                `}
              >
                <span>{item.label}</span>

                <span
                  className={`
                    absolute
                    bottom-[18px]
                    left-1/2
                    h-[3px]
                    -translate-x-1/2
                    bg-[#7C3AED]
                    transition-[width]
                    duration-100
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </a>
            );
          })}
        </nav>

        {/* Redes sociais desktop */}
        <div className="hidden justify-self-end gap-3 lg:flex xl:gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                title={social.label}
                className={`
                  group
                  flex
                  h-[50px]
                  w-[50px]
                  items-center
                  justify-center
                  rounded-[4px]
                  border-2
                  bg-white
                  transition-[transform,box-shadow,background-color]
                  duration-100
                  hover:-translate-x-1
                  hover:-translate-y-1
                  hover:bg-[#FFFDF9]
                  hover:shadow-[4px_4px_0_#DDD6FE]
                  xl:h-[56px]
                  xl:w-[56px]
                  ${
                    index === 0
                      ? "border-[#111111] text-[#111111]"
                      : index === 1
                        ? "border-[#7C3AED] text-[#7C3AED]"
                        : "border-[#57C96B] text-[#57C96B]"
                  }
                `}
              >
                <Icon
                  size={24}
                  strokeWidth={2.2}
                  className="
                    transition-transform
                    duration-100
                    group-hover:-translate-y-0.5
                    xl:h-[26px]
                    xl:w-[26px]
                  "
                />
              </a>
            );
          })}
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="
            group
            flex
            h-[46px]
            w-[46px]
            shrink-0
            items-center
            justify-center
            rounded-[4px]
            border-2
            border-[#7C3AED]
            bg-white
            text-[#7C3AED]
            transition-[transform,box-shadow,background-color]
            duration-100
            hover:-translate-x-1
            hover:-translate-y-1
            hover:bg-[#FFFDF9]
            hover:shadow-[4px_4px_0_#DDD6FE]
            sm:h-[50px]
            sm:w-[50px]
            lg:hidden
          "
        >
          {menuOpen ? (
            <X
              size={25}
              strokeWidth={2.4}
              className="transition-transform duration-100 group-hover:-translate-y-0.5"
            />
          ) : (
            <Menu
              size={25}
              strokeWidth={2.4}
              className="transition-transform duration-100 group-hover:-translate-y-0.5"
            />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
            className="
              fixed
              inset-0
              top-[105px]
              z-[-1]
              bg-[#111111]/20
              backdrop-blur-[2px]
              lg:hidden
            "
          />

          <div
            id="mobile-navigation"
            className="
              pixel-bounce
              relative
              mx-auto
              mt-3
              w-full
              max-w-[1800px]
              rounded-[10px]
              border-2
              border-[#7C3AED]
              bg-[#FDFCFB]
              p-4
              shadow-[6px_6px_0_#DDD6FE]
              sm:p-6
              lg:hidden
            "
          >
            {/* Cantos pixelados */}
            <span className="absolute -left-[2px] -top-[2px] h-3 w-3 rounded-tl-[8px] border-l-2 border-t-2 border-[#7C3AED]" />
            <span className="absolute -right-[2px] -top-[2px] h-3 w-3 rounded-tr-[8px] border-r-2 border-t-2 border-[#7C3AED]" />
            <span className="absolute -bottom-[2px] -left-[2px] h-3 w-3 rounded-bl-[8px] border-b-2 border-l-2 border-[#7C3AED]" />
            <span className="absolute -bottom-[2px] -right-[2px] h-3 w-3 rounded-br-[8px] border-b-2 border-r-2 border-[#7C3AED]" />

            <div className="mb-4 flex items-center gap-2 border-b-2 border-dashed border-[#DDD6FE] pb-4">
              <span className="pixel-blink font-pixel text-[#57C96B]">
                &gt;
              </span>

              <p className="font-pixel text-[13px] font-bold text-[#7C3AED]">
                SELECT MENU
              </p>
            </div>

            <nav
              aria-label="Navegação mobile"
              className="flex flex-col gap-2"
            >
              {navigation.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`
                    group
                    font-pixel
                    flex
                    min-h-[48px]
                    items-center
                    justify-between
                    rounded-[4px]
                    border-2
                    px-4
                    py-3
                    text-[14px]
                    font-bold
                    transition-[transform,box-shadow,background-color,color]
                    duration-100
                    hover:-translate-x-1
                    hover:-translate-y-1
                    hover:shadow-[4px_4px_0_#DDD6FE]
                    sm:text-[15px]
                    ${
                      index === 0
                        ? "border-[#7C3AED] bg-[#F5F0FF] text-[#7C3AED]"
                        : "border-[#D9D9D9] bg-white text-[#111111] hover:border-[#7C3AED] hover:text-[#7C3AED]"
                    }
                  `}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`
                        text-[12px]
                        ${
                          index === 0
                            ? "text-[#57C96B]"
                            : "text-[#7C3AED]"
                        }
                      `}
                    >
                      {index === 0 ? "▶" : "◆"}
                    </span>

                    {item.label}
                  </span>

                  <span className="text-[#57C96B] opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                    &gt;
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-5 border-t-2 border-dashed border-[#DDD6FE] pt-5">
              <p className="font-pixel mb-3 text-[11px] font-bold text-[#777777]">
                CONNECT PLAYER
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={
                        social.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={social.label}
                      title={social.label}
                      onClick={closeMenu}
                      className={`
                        group
                        flex
                        h-[48px]
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-[4px]
                        border-2
                        bg-white
                        transition-[transform,box-shadow,background-color]
                        duration-100
                        hover:-translate-x-1
                        hover:-translate-y-1
                        hover:bg-[#FFFDF9]
                        hover:shadow-[4px_4px_0_#DDD6FE]
                        ${
                          index === 0
                            ? "border-[#111111] text-[#111111]"
                            : index === 1
                              ? "border-[#7C3AED] text-[#7C3AED]"
                              : "border-[#57C96B] text-[#57C96B]"
                        }
                      `}
                    >
                      <Icon
                        size={21}
                        strokeWidth={2.2}
                        className="shrink-0 transition-transform duration-100 group-hover:-translate-y-0.5"
                      />

                      <span className="font-pixel hidden text-[10px] font-bold min-[420px]:block">
                        {social.label.toUpperCase()}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}