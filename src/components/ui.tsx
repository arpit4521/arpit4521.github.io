import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { socialLinks } from "@/data/portfolio";

export function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`external-link ${className}`}>{children}<ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>;
}

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return <div className={`social-links ${compact ? "compact" : ""}`}>{socialLinks.map((link) => <ExternalLink key={link.label} href={link.href}>{link.label}</ExternalLink>)}</div>;
}

export function SectionHeading({ number, label, title, accent, children }: { number: string; label: string; title: string; accent?: string; children?: ReactNode }) {
  return <div className="section-heading">
    <div className="eyebrow"><span className="section-number">{number}</span>{label}</div>
    <div className="section-heading-main"><h2>{title}{accent && <><br /><em>{accent}</em></>}</h2>{children && <div className="section-intro">{children}</div>}</div>
  </div>;
}

export function Tags({ items }: { items: readonly string[] }) {
  return <ul className="tags" aria-label="Technologies">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
