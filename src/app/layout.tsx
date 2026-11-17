import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/ibm-plex-mono/400.css";
import "./globals.css";
import { personalInfo } from "@/data/portfolio";

const description = "Arpit Gupta — Software Engineer in Bengaluru, with experience at Western Digital and Siemens EDA across software, systems, simulation, and semiconductor technology.";

export const metadata: Metadata = {
  title: "Arpit Gupta — Software Engineer",
  description,
  applicationName: "Arpit Gupta Portfolio",
  authors: [{ name: personalInfo.name }],
  keywords: ["Arpit Gupta", "Software Engineer", "Western Digital", "Siemens EDA", "C++", "Software Architecture", "Systems", "Bengaluru"],
  openGraph: { title: "Arpit Gupta — Software Engineer", description, type: "website", locale: "en_IN", siteName: "Arpit Gupta" },
  twitter: { card: "summary", title: "Arpit Gupta — Software Engineer", description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
