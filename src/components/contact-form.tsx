"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { createMailto, validateContact, type ContactErrors, type ContactFields } from "@/lib/contact";

const initialFields: ContactFields = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(initialFields);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [draft, setDraft] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setDraft("");
      const first = Object.keys(nextErrors)[0];
      formRef.current?.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setDraft(createMailto(fields));
  }

  function update(name: keyof ContactFields, value: string) {
    setFields((previous) => ({ ...previous, [name]: value }));
    setDraft("");
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  }

  return <form ref={formRef} className="contact-form" onSubmit={submit} noValidate aria-label="Contact Arpit">
    <div className="form-grid">{(["name", "email", "subject", "message"] as const).map((name) => <div className={`form-field field-${name}`} key={name}>
      <label htmlFor={`contact-${name}`}>{name === "name" ? "Your name" : name === "email" ? "Email address" : name === "subject" ? "Subject" : "Your message"}<span aria-hidden="true"> *</span></label>
      {name === "message"
        ? <textarea id={`contact-${name}`} name={name} rows={4} required minLength={10} maxLength={2000} value={fields[name]} onChange={(event) => update(name, event.target.value)} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `error-${name}` : undefined} placeholder="Tell me what you have in mind…" />
        : <input id={`contact-${name}`} name={name} type={name === "email" ? "email" : "text"} autoComplete={name === "name" ? "name" : name === "email" ? "email" : undefined} required maxLength={name === "name" ? 100 : name === "email" ? 254 : 150} value={fields[name]} onChange={(event) => update(name, event.target.value)} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `error-${name}` : undefined} placeholder={name === "name" ? "Your name" : name === "email" ? "you@example.com" : "A conversation about…"} />}
      {errors[name] && <p className="field-error" id={`error-${name}`}>{errors[name]}</p>}
    </div>)}</div>
    <div className="form-bottom"><p>All fields are required. This form prepares a draft in your email app. Nothing is sent from this website.</p><button type="submit" className="button button-primary">Prepare email<ArrowUpRight size={17} aria-hidden="true" /></button></div>
    <div className="draft-status" role="status" aria-live="polite">{draft && <div className="draft-ready"><p>Your draft is ready. Open your email app to review and send it. If no app opens, email me directly using the address alongside this form.</p><a className="button button-outline" href={draft}>Open email draft<ArrowUpRight size={17} aria-hidden="true" /></a></div>}</div>
  </form>;
}
