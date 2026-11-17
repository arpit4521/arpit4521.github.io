import { ArrowUpRight, Plus } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ProjectDiagram } from "./project-diagram";
import { SectionHeading, Tags } from "./ui";

export function Projects() {
  return <section id="projects" className="section container">
    <SectionHeading number="03" label="SELECTED ENGINEERING WORK" title="Complex problems." accent="Considered solutions."><p>A selection of projects across simulation, developer tools, and protocol engineering. Different domains, connected by software.</p></SectionHeading>
    <div className="project-grid">{projects.map((project) => <article key={project.id} className={`project-card project-${project.diagram}`}>
      <ProjectDiagram type={project.diagram} number={project.number} />
      <div className="project-copy"><div className="project-kicker"><span className="eyebrow">{project.category}</span><span className="eyebrow">/{project.number}</span></div><h3>{project.title}<ArrowUpRight size={22} aria-hidden="true" /></h3><p className="project-subtitle">{project.subtitle}</p><p className="muted">{project.introduction}</p>
        <details className="project-details"><summary><span>Explore the project<span className="sr-only">: {project.title}</span></span><Plus size={18} aria-hidden="true" /></summary>
          <div className="project-detail-content"><h4>The problem</h4><p>{project.problem}</p><h4>Engineering approach</h4><p>{project.approach}</p><h4>Implementation</h4><ul>{project.implementation.map((item) => <li key={item}>{item}</li>)}</ul><div className="project-outcome"><h4>Outcome</h4><p>{project.outcome}</p></div><Tags items={project.technologies} /></div>
        </details>
      </div>
    </article>)}</div>
    <p className="projects-note"><span aria-hidden="true">↳</span> Conceptual illustrations of the engineering ideas. No private source code is published here.</p>
  </section>;
}
