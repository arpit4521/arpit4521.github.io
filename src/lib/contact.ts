import { personalInfo } from "@/data/portfolio";

export type ContactFields = { name: string; email: string; subject: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

export function validateContact(fields: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  else if (fields.name.trim().length > 100) errors.name = "Please use 100 characters or fewer.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = "Please enter a valid email address.";
  else if (fields.email.trim().length > 254) errors.email = "Please use 254 characters or fewer.";
  if (!fields.subject.trim()) errors.subject = "Please add a subject.";
  else if (fields.subject.trim().length > 150) errors.subject = "Please use 150 characters or fewer.";
  if (fields.message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  else if (fields.message.trim().length > 2000) errors.message = "Please use 2,000 characters or fewer.";
  return errors;
}

export function createMailto(fields: ContactFields) {
  const subject = encodeURIComponent(fields.subject.trim().replace(/[\r\n]/g, " "));
  const body = encodeURIComponent(`${fields.message.trim()}\n\nFrom: ${fields.name.trim()}\nEmail: ${fields.email.trim()}`);
  return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
}
