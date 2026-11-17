
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
}

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor,
  iconBackground,
}: StatCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </h3>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBackground} ${iconColor}`}
        >
          <Icon size={21} strokeWidth={1.8} />
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        {description}
      </p>
    </article>
  );
}
