import type { LucideIcon } from "lucide-react";

export function DualIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="relative">
      <Icon className="relative z-1 stroke-1  size-10 stroke-gray-700" />
      <Icon className="absolute top-0 left-0 size-10 translate-2 stroke-orange-400/50 stroke-0 fill-orange-400/50" />
    </div>
  );
}