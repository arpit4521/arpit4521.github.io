import { Plus } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeading, Tags } from "./ui";

export function Experience() {
  return <section id="experience" className="section experience-section">
    <div className="container">
      <SectionHeading number="02" label="PROFESSIONAL JOURNEY" title="Different environments." accent="The same engineering instinct."><p>From understanding protocols to modelling entire systems. A journey in building software, making complexity manageable, and learning at every layer.</p></SectionHeading>
      <div className="experience-list">{experiences.map((experience) => <article className="experience-row" key={experience.role}>
        <div className="experience-meta"><p className="eyebrow">{experience.period}</p><h3>{experience.company}</h3><p className="location">{experience.location}</p></div>
        <div className="experience-content"><div className="role-heading"><h4>{experience.role}</h4><span className="eyebrow">{experience.team}</span></div><p className="experience-summary">{experience.summary}</p><p className="muted">{experience.description}</p><details className="contribution-details"><summary>Engineering contributions<Plus size={16} aria-hidden="true" /></summary><ol>{experience.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ol></details><Tags items={experience.technologies} /></div>
        <div className="experience-impact"><span>{experience.metric}</span><p>{experience.metricLabel}</p></div>
      </article>)}</div>
    </div>
  </section>;
}
