import { problemSolving } from "@/data/portfolio";
import { SectionHeading } from "./ui";

export function ProblemSolving() {
  return <section id="problem-solving" className="section container">
    <SectionHeading number="05" label="THE PROBLEM-SOLVING MINDSET" title="Think deeply." accent="Solve deliberately."><p>Alongside my professional work, I keep sharpening the fundamentals: breaking down problems, recognising patterns, and finding better solutions.</p></SectionHeading>
    <div className="stats-grid">{problemSolving.stats.map((stat, index) => <div className="stat" key={stat.label}><span className="stat-index" aria-hidden="true">/ 0{index + 1}</span><span className="stat-value">{stat.value}</span><h3>{stat.label}</h3><p>{stat.detail}</p></div>)}</div>
  </section>;
}
