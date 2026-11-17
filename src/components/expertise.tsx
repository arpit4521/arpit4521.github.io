import { Plus } from "lucide-react";
import { expertise } from "@/data/portfolio";
import { SectionHeading, Tags } from "./ui";

export function Expertise() {
  return <section id="expertise" className="section expertise-section"><div className="container">
    <SectionHeading number="04" label="MY ENGINEERING LANDSCAPE" title="Engineering" accent="across domains."><p>Working across software, hardware, simulation, and systems has given me a broader perspective on engineering.</p><p className="expertise-disclaimer">Areas of hands-on experience and technical exposure—not a claim of equal proficiency in every technology.</p></SectionHeading>
    <div className="landscape-intro"><span className="eyebrow">ONE SOFTWARE ENGINEERING PERSPECTIVE</span><span className="eyebrow">EXPLORE THE CONNECTIONS ↓</span></div>
    <div className="landscape">{expertise.map((domain, index) => <details key={domain.title} className="domain" open={index === 0}>
      <summary><span className="domain-index">{String(index + 1).padStart(2, "0")}</span><span className="domain-title">{domain.title}</span><span className="domain-featured">{domain.featured}</span><Plus size={19} aria-hidden="true" /></summary>
      <div className="domain-content"><p>{domain.description}</p><Tags items={domain.skills} /></div>
    </details>)}</div>
  </div></section>;
}
