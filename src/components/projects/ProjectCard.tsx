import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
}: {
  project: Project;
  className?: string;
  imageSizesOverride?: string;
}) {
  const category = project.categories[0] ?? project.type;

  return (
    <article className="group flex flex-col h-full rounded-3xl overflow-hidden border border-white/15 bg-brand-surface hover:border-solar-500/50 transition-all duration-500 shadow-xl">
      <div className="relative aspect-16/10 overflow-hidden bg-brand-black">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent opacity-90" />
        
        {category && (
          <span className="absolute top-4 left-4 font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-brand-black/80 border border-white/20 text-white backdrop-blur-md">
            {category}
          </span>
        )}
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-6">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white group-hover:text-solar-400 transition-colors">
            {project.client}
          </h3>

          <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs font-mono">
            {project.capacity && (
              <div className="flex justify-between text-navy-300">
                <span className="text-white/40 uppercase">CAPACITY:</span>
                <span className="text-white font-semibold">{project.capacity}</span>
              </div>
            )}
            {project.location && (
              <div className="flex justify-between text-navy-300">
                <span className="text-white/40 uppercase">LOCATION:</span>
                <span className="text-white font-semibold">{project.location}</span>
              </div>
            )}
          </div>
        </div>

        <div className="pt-2">
          <p className="text-xs text-navy-400 leading-relaxed font-mono uppercase tracking-wider">
            SCOPE: {project.scope.join(" • ")}
          </p>
        </div>
      </div>
    </article>
  );
}
