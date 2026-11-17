import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { introduction, personalInfo } from "@/data/portfolio";
import { SocialLinks } from "./ui";

function EngineeringStudy() {
  return <div className="engineering-study" aria-label="Connected areas of engineering experience: software, systems, and hardware">
    <div className="study-top"><span>THE ENGINEERING PERSPECTIVE</span><span>STUDY / 01</span></div>
    <svg className="layer-study" viewBox="0 0 620 340" fill="none" aria-hidden="true">
      <path className="study-guide" d="M310 20V320M75 170H545M120 70L500 270M120 270L500 70" />
      <g className="study-layer layer-hardware">
        <path d="M120 216 310 116 500 216 310 316Z" />
        <path d="M153 216 310 134 467 216 310 298Z" className="layer-inner" />
        <path d="M310 316V330H420" className="layer-leader" />
        <text x="430" y="334">03 / HARDWARE</text>
      </g>
      <g className="study-layer layer-systems">
        <path d="M120 166 310 66 500 166 310 266Z" />
        <path d="M153 166 310 84 467 166 310 248Z" className="layer-inner" />
        <path d="M500 166H550V161" className="layer-leader" />
        <text x="485" y="151">02 / SYSTEMS</text>
      </g>
      <g className="study-layer layer-software">
        <path d="M120 116 310 16 500 116 310 216Z" />
        <path d="M153 116 310 34 467 116 310 198Z" className="layer-inner" />
        <path d="M215 66 405 166M215 166 405 66M310 16V216M120 116H500" className="layer-grid" />
        <path d="M120 116H70V75" className="layer-leader" />
        <text x="27" y="63">01 / SOFTWARE</text>
        <circle cx="310" cy="116" r="24" className="layer-core" />
        <path d="M299 116H321M310 105V127" className="core-cross" />
      </g>
      <path d="M120 116V216M500 116V216M310 216V316" className="layer-connectors" />
    </svg>
    <div className="study-bottom"><span>Different layers.<br /><em>Connected thinking.</em></span><span className="study-coordinate">SOFTWARE × SYSTEMS</span></div>
  </div>;
}

export function Hero({ photoAvailable }: { photoAvailable: boolean }) {
  return <section className="hero container" aria-labelledby="hero-title">
    <div className="hero-topline"><span className="eyebrow"><span className="status-dot" />SOFTWARE ENGINEER</span><span className="eyebrow hero-location">{personalInfo.location} <span aria-hidden="true">↗</span></span></div>
    <div className="hero-title-row">
      <h1 id="hero-title">Arpit <em>Gupta.</em></h1>
      <div className="hero-seal" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none"><path d="M50 9V91M9 50H91M21 21L79 79M21 79L79 21" stroke="currentColor" strokeWidth="10" /><circle cx="50" cy="50" r="12" fill="var(--paper)" /></svg>
        <span>CURIOUS BY NATURE.<br />ENGINEER BY PRACTICE.</span>
      </div>
    </div>
    <div className="hero-grid">
      <div className="hero-copy">
        <p className="hero-statement">{introduction.statement}</p>
        <p className="hero-summary">{introduction.summary}</p>
        <div className="hero-actions"><a href="#projects" className="button button-primary">View my work<ArrowDown size={17} aria-hidden="true" /></a><a className="hero-contact" href="#contact">Contact me<ArrowUpRight size={15} aria-hidden="true" /></a></div>
        <SocialLinks />
      </div>
      <div className="hero-visual">
        {photoAvailable ? <figure className="hero-portrait"><Image src={personalInfo.profileImage} alt="Arpit Gupta, Software Engineer" fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 50vw, 660px" priority /><figcaption><span>ARPIT GUPTA</span><span>BENGALURU, IN</span></figcaption></figure> : <EngineeringStudy />}
        <div className="visual-caption"><span className="caption-line" aria-hidden="true" /><span>Software at the centre. A wider view of technology.</span></div>
      </div>
    </div>
    <div className="hero-footnote"><span className="eyebrow">EXPERIENCE ACROSS</span><div><span>Western Digital</span><span>Siemens EDA</span><span className="education-mark">MANIT Bhopal</span></div><a href="#about" aria-label="Explore about Arpit"><ArrowDown size={19} aria-hidden="true" /></a></div>
  </section>;
}
