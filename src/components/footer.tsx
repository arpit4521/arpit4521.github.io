import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SocialLinks } from "./ui";

export function Footer() {
  return <footer className="site-footer container"><div className="footer-top"><a href="#top" className="wordmark">arpit gupta<span className="wordmark-dot">.</span></a><span>{personalInfo.title}</span><SocialLinks compact /><a className="back-to-top" href="#top">Back to top<ArrowUp size={15} aria-hidden="true" /></a></div></footer>;
}
