import { LucideIcon } from "lucide-react";

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function InfoCard({
  icon: Icon,
  title,
  description,
}: InfoCardProps) {
  return (
    <div className="group border-2 border-[#7C3AED] bg-white p-6 shadow-[6px_6px_0_#7C3AED] transition-all duration-200 hover:-translate-y-1 hover:border-[#6EEB83] hover:shadow-[8px_8px_0_#6EEB83]">
      <div className="flex h-12 w-12 items-center justify-center border-2 border-[#111111] bg-[#F8F8F8] transition-colors duration-200 group-hover:bg-[#6EEB83]">
        <Icon size={28} className="text-[#7C3AED]" />
      </div>

      <h3 className="mt-5 font-bold">{title}</h3>
      <p className="mt-2 text-sm text-[#777777]">{description}</p>
    </div>
  );
}