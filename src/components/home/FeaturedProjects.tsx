import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "@/components/ui/Icons";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <Section tone="light" id="projects">
      <div className="flex flex-col gap-8 border-b border-ink-200 pb-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Project Experience"
          description="Execution experience across solar, electrical, fabrication and industrial projects."
        />
        <Button href="/projects" variant="outline" className="shrink-0 self-start lg:self-auto">
          View All Projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {featuredProjects.map((project) => (
          <Reveal as="li" key={project.slug} className="flex">
            <ProjectCard project={project} className="w-full" />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
