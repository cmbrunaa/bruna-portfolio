import { Code2, Star } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
};

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  github,
  demo,
}: ProjectCardProps) {
  const hasDemo = Boolean(demo);
  const hasGithub = Boolean(github);

  return (
    <article
      className="
        group
        pixel-card
        relative
        flex
        h-full
        min-h-[320px]
        flex-col
        overflow-hidden
        rounded-[6px]
        border-2
        border-[#A78BFA]
        bg-[#FFFDF9]
        shadow-[5px_5px_0_#DDD6FE]
        transition-[transform,border-color,box-shadow]
        duration-100
        hover:-translate-x-1
        hover:-translate-y-1
        hover:border-[#7C3AED]
        hover:shadow-[7px_7px_0_#6EEB83]
      "
    >
      {/* Destaque */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span className="font-pixel flex items-center gap-2 text-[10px] font-bold text-[#57C96B]">
          <Star
            size={12}
            fill="currentColor"
            className="
              transition-transform
              duration-100
              group-hover:-translate-y-0.5
            "
          />
          DESTAQUE
        </span>

        <span className="pixel-blink h-2 w-2 bg-[#6EEB83]" />
      </div>

      {/* Conteúdo principal */}
      <div className="grid flex-1 grid-cols-[145px_1fr] gap-5 px-5 pb-5 pt-4">
        {/* Imagem */}
        <div
          className="
            relative
            aspect-square
            overflow-hidden
            rounded-[5px]
            border-2
            border-[#7C3AED]
            bg-[#F3E8FF]
            shadow-[3px_3px_0_#C4B5FD]
            transition-[transform,box-shadow]
            duration-100
            group-hover:-translate-x-0.5
            group-hover:-translate-y-0.5
            group-hover:shadow-[4px_4px_0_#6EEB83]
          "
        >
          <Image
            src={image}
            alt={`Projeto ${title}`}
            fill
            sizes="145px"
            className="
              object-contain
              p-3
              transition-transform
              duration-100
              group-hover:-translate-y-0.5
            "
          />
        </div>

        {/* Textos */}
        <div className="min-w-0">
          <h3 className="font-pixel text-[17px] font-bold leading-6 text-[#7C3AED]">
            {title}
          </h3>

          <p className="mt-3 line-clamp-4 text-[13px] leading-6 text-[#444444]">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.slice(0, 5).map((technology) => (
              <span
                key={technology}
                className="
                  font-pixel
                  rounded-[3px]
                  border
                  border-[#A78BFA]
                  bg-white
                  px-2.5
                  py-1.5
                  text-[9px]
                  font-bold
                  text-[#7C3AED]
                  transition-[transform,background-color,border-color]
                  duration-100
                  hover:-translate-y-0.5
                  hover:border-[#6EEB83]
                  hover:bg-[#F3E8FF]
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="grid grid-cols-2 border-t-2 border-[#C4B5FD]">
        {hasDemo ? (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-pixel
              group/link
              flex
              min-h-[50px]
              items-center
              gap-2
              px-5
              text-[11px]
              font-bold
              text-[#7C3AED]
              transition-colors
              duration-100
              hover:bg-[#F3E8FF]
            "
          >
            <span
              className="
                text-[#57C96B]
                transition-transform
                duration-100
                group-hover/link:translate-x-1
              "
            >
              &gt;
            </span>

            VER PROJETO
          </a>
        ) : (
          <span className="font-pixel flex min-h-[50px] items-center px-5 text-[10px] text-[#999999]">
            SEM DEMO
          </span>
        )}

        {hasGithub ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              font-pixel
              group/github
              flex
              min-h-[50px]
              items-center
              justify-end
              gap-2
              border-l-2
              border-[#C4B5FD]
              px-5
              text-[11px]
              font-bold
              text-[#7C3AED]
              transition-colors
              duration-100
              hover:bg-[#F3E8FF]
            "
          >
            GITHUB

            <Code2
              size={16}
              className="
                transition-transform
                duration-100
                group-hover/github:-translate-y-0.5
              "
            />
          </a>
        ) : (
          <span className="font-pixel flex min-h-[50px] items-center justify-end border-l-2 border-[#C4B5FD] px-5 text-[10px] text-[#999999]">
            PRIVADO
          </span>
        )}
      </div>

      {/* Barra inferior estilo HUD */}
      <div className="absolute bottom-0 left-0 z-10 flex h-1.5 w-full">
        <span className="w-[55%] bg-[#7C3AED]" />
        <span className="w-[25%] bg-[#6EEB83]" />
        <span className="flex-1 bg-[#111111]" />
      </div>
    </article>
  );
}