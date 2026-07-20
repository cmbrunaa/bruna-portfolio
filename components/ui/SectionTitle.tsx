import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 font-mono text-sm font-bold text-[#7C3AED]">
        &gt; {eyebrow}
      </p>

      <h2 className="text-4xl font-black md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#777777]">
          {description}
        </p>
      )}
    </div>
  );
}