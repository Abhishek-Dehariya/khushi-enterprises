"use client";

import { useMemo, useState } from "react";
import { projectCategories, projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import {
  ProjectFilters,
  type ProjectFilterValue,
} from "./ProjectFilters";

const filterOptions: ProjectFilterValue[] = ["All", ...projectCategories];

/**
 * Client-side project filtering. The project list itself is static data, so the
 * only JavaScript involved is the filter state.
 *
 * Re-keying the list on the active filter restarts the entrance animation, so a
 * filter change reads as the new set arriving rather than as an abrupt swap.
 * The stagger is capped so a twelve-card result still settles quickly, and
 * `prefers-reduced-motion` removes it entirely.
 */
export function ProjectsExplorer() {
  const [active, setActive] = useState<ProjectFilterValue>("All");

  const visibleProjects = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(active)),
    [active],
  );

  return (
    <div>
      <ProjectFilters
        options={filterOptions}
        active={active}
        onChange={setActive}
        resultCount={visibleProjects.length}
      />

      {visibleProjects.length > 0 ? (
        <ul
          key={active}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
          {visibleProjects.map((project, index) => (
            <li
              key={project.slug}
              className="flex animate-rise"
              style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
            >
              <ProjectCard
                project={project}
                imageSizesOverride="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="w-full"
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 border border-dashed border-ink-300 bg-ink-50 px-6 py-12 text-center">
          <p className="text-body text-ink-600">
            No projects are listed under this category.
          </p>
          <button
            type="button"
            onClick={() => setActive("All")}
            className="mt-4 text-detail font-semibold text-solar-700 underline underline-offset-4 transition-colors hover:text-solar-600"
          >
            Show all projects
          </button>
        </div>
      )}
    </div>
  );
}
