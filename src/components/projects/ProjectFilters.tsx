import { ProjectCategory } from "@/data/projects";

export type ProjectFilterValue = "All" | ProjectCategory;

export function ProjectFilters({
  options,
  active,
  onChange,
  resultCount,
}: {
  options: ProjectFilterValue[];
  active: ProjectFilterValue;
  onChange: (value: ProjectFilterValue) => void;
  resultCount: number;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = active === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`min-h-11 px-4 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                isActive
                  ? "bg-solar-500 text-brand-black font-semibold shadow-[0_0_15px_rgba(255,107,0,0.4)]"
                  : "bg-white/5 text-navy-300 border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <span className="font-mono text-xs text-navy-400 uppercase tracking-widest">
        SHOWING {resultCount} RECORDS
      </span>
    </div>
  );
}
