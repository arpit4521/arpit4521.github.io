"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, personalInfo } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -60% 0px" });
    navigation.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 1100px)");
    const resize = () => { if (media.matches) setOpen(false); };
    document.addEventListener("keydown", close);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      media.removeEventListener("change", resize);
    };
  }, [open]);

  return <header className="site-header">
    <div className="nav-shell container">
      <a href="#top" className="wordmark" aria-label={`${personalInfo.name}, back to top`}>arpit gupta<span className="wordmark-dot">.</span></a>
      <button ref={buttonRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}</button>
      <nav id="main-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>
        {navigation.map(({ label, id }) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </div>
  </header>;
}
