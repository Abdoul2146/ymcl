import { cn } from "@/core/lib/cn";

export function SectionHeader({
  title,
  subtitle,
  centered,
  className,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center", className)}>
      <h2 className="text-[32px] font-bold leading-10 text-primary dark:text-primary-fixed">{title}</h2>
      <div className="h-1 w-10 rounded-full" style={{ backgroundColor: "#d4af37" }} aria-hidden="true" />
      {subtitle && (
        <p className="text-[18px] leading-7 text-on-surface dark:text-neutral-300 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
