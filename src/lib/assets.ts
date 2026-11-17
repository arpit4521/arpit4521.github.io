import { existsSync } from "node:fs";
import path from "node:path";
import { personalInfo } from "@/data/portfolio";

export function getAssets() {
  return {
    photo: existsSync(path.join(process.cwd(), "public", personalInfo.profileImage)),
  };
}
