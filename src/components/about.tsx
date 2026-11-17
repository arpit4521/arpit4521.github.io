import Image from "next/image";
import { education, introduction, personalInfo } from "@/data/portfolio";
import { SectionHeading } from "./ui";

export function About({ photoAvailable }: { photoAvailable: boolean }) {
  return <section id="about" className="section container">
    <SectionHeading number="01" label="THE PERSON BEHIND THE CODE" title="Curiosity across layers." accent="Clarity in the code." />
    <div className="about-grid">
      <aside className="about-aside">
        {photoAvailable && <div className="about-portrait"><Image src={personalInfo.profileImage} alt="Portrait of Arpit Gupta" fill sizes="(max-width: 700px) 90vw, 300px" /></div>}
        <span className="eyebrow">THE FOUNDATION</span>
        <h3>{education.shortName}</h3>
        <p>{education.degree}</p>
        <p className="school-name">{education.school}</p>
        <div className="education-meta"><span>{education.period}</span><span>CGPA {education.cgpa}</span></div>
      </aside>
      <div className="about-narrative">
        {introduction.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="core-subjects">
          <h3 id="core-subjects-heading" className="eyebrow">Core subjects</h3>
          <ul aria-labelledby="core-subjects-heading">{education.coreSubjects.map((subject) => <li key={subject}>{subject}</li>)}</ul>
        </div>
        <div className="about-signoff"><span className="signature">Arpit</span><span className="eyebrow">SOFTWARE ENGINEER.<br />ALWAYS A STUDENT OF SYSTEMS.</span></div>
      </div>
    </div>
  </section>;
}
