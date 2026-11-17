import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { ContactForm } from "./contact-form";
import { SocialLinks } from "./ui";

export function Contact() {
  return <section id="contact" className="section contact-section"><div className="container">
    <div className="eyebrow"><span className="section-number">06</span>GOOD WORK STARTS WITH A CONVERSATION</div>
    <div className="contact-heading"><h2>Let’s <em>connect.</em></h2><ArrowUpRight aria-hidden="true" /></div>
    <div className="contact-grid"><div className="contact-copy"><p>I’m always interested in interesting engineering problems, meaningful collaborations, and opportunities to build impactful software.</p><a className="email-link" href={`mailto:${personalInfo.email}`}>{personalInfo.email}<ArrowUpRight size={18} aria-hidden="true" /></a><a className="phone-link" href={`tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`}>{personalInfo.phone}</a><SocialLinks /><p className="eyebrow contact-location">BASED IN {personalInfo.location.toUpperCase()}</p></div><ContactForm /></div>
  </div></section>;
}
