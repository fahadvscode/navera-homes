"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode, type SelectHTMLAttributes } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { CASL_CONSENT } from "@/lib/consent";
import { leadSchema } from "@/lib/lead-schema";
import { captureUtm, readUtm } from "@/lib/utm";
import { trackEvent } from "./track";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  home_type_interest?: string;
  budget_range?: string;
  buyer_type?: string;
  timeline?: string;
  is_broker: boolean;
  casl_consent: boolean;
  website?: string;
  elapsed_ms: number;
  consent_page: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
};

const HOME_TYPES = ["38' series", "41' series", "Not sure yet"];
const BUDGETS = ["Under $1.0M", "$1.0M–$1.1M", "$1.1M–$1.25M", "$1.25M+", "Prefer not to say"];
const BUYERS = ["End user / family", "Investor", "Other"];
const TIMELINES = ["Ready now", "0–3 months", "3–6 months", "6–12 months", "Just exploring"];

export function LeadForm({
  variant = "full",
  location = "page",
}: {
  variant?: "full" | "compact";
  location?: string;
}) {
  const router = useRouter();
  const started = useRef<number>(0);
  const focused = useRef(false);
  const baseId = useId();
  const [formError, setFormError] = useState("");
  const [pending, setPending] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(leadSchema) as Resolver<FormValues>,
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      home_type_interest: "",
      budget_range: "",
      buyer_type: "",
      timeline: "",
      is_broker: false,
      casl_consent: false,
      website: "",
      elapsed_ms: 0,
      consent_page: "/",
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_term: null,
      utm_content: null,
    },
  });

  useEffect(() => {
    started.current = Date.now();
    captureUtm();
  }, []);

  function onFocus() {
    if (focused.current) return;
    focused.current = true;
    trackEvent("form_start", { form_location: location });
  }

  async function onValid(values: FormValues) {
    setPending(true);
    setFormError("");
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        home_type_interest: values.home_type_interest || undefined,
        budget_range: values.budget_range || undefined,
        buyer_type: values.buyer_type || undefined,
        timeline: values.timeline || undefined,
        casl_consent: true,
        website: values.website ?? "",
      }),
    });
    setPending(false);
    if (!response.ok) {
      setFormError("Registration could not be saved. Please review the form and try again.");
      return;
    }
    trackEvent("form_submit", { form_location: location });
    router.push("/thank-you");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const elapsed = Date.now() - started.current;
    if (elapsed < 3000) {
      setFormError("Please take a moment to review the form before submitting.");
      return;
    }
    const utm = readUtm();
    setValue("elapsed_ms", elapsed);
    setValue("consent_page", window.location.pathname.slice(0, 200));
    setValue("utm_source", utm.utm_source ?? null);
    setValue("utm_medium", utm.utm_medium ?? null);
    setValue("utm_campaign", utm.utm_campaign ?? null);
    setValue("utm_term", utm.utm_term ?? null);
    setValue("utm_content", utm.utm_content ?? null);
    void handleSubmit(onValid)();
  }

  const compact = variant === "compact";

  return (
    <form onSubmit={onSubmit} onFocus={onFocus} noValidate className="relative grid gap-4">
      <div className={compact ? "grid gap-4 md:grid-cols-2" : "grid gap-4 md:grid-cols-2"}>
        <Field label="First name" id={`${baseId}-first`} error={errors.first_name && "Enter your first name."}>
          <input id={`${baseId}-first`} className="field" autoComplete="given-name" {...register("first_name")} />
        </Field>
        <Field label="Last name" id={`${baseId}-last`} error={errors.last_name && "Enter your last name."}>
          <input id={`${baseId}-last`} className="field" autoComplete="family-name" {...register("last_name")} />
        </Field>
        <Field label="Email" id={`${baseId}-email`} error={errors.email && "Enter a valid email address."}>
          <input id={`${baseId}-email`} className="field" type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field
          label="Phone"
          id={`${baseId}-phone`}
          error={errors.phone && "Enter a phone number, 10 to 20 characters, using digits and + ( ) . -"}
        >
          <input id={`${baseId}-phone`} className="field" type="tel" autoComplete="tel" {...register("phone")} />
        </Field>
        <Select label="Home type interest" id={`${baseId}-home`} options={HOME_TYPES} {...register("home_type_interest")} />
        <Select label="Budget range" id={`${baseId}-budget`} options={BUDGETS} {...register("budget_range")} />
        <Select label="Buyer type" id={`${baseId}-buyer`} options={BUYERS} {...register("buyer_type")} />
        <Select label="Timeline" id={`${baseId}-timeline`} options={TIMELINES} {...register("timeline")} />
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input type="checkbox" className="mt-1 h-5 w-5" {...register("is_broker")} />
        <span>Are you a licensed real estate agent?</span>
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input type="checkbox" className="mt-1 h-5 w-5" {...register("casl_consent")} />
        <span>{CASL_CONSENT}</span>
      </label>
      {errors.casl_consent && (
        <p className="text-sm font-semibold text-brand-deep">Consent is required to register.</p>
      )}
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${baseId}-website`}>Website</label>
        <input id={`${baseId}-website`} tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <button type="submit" className="btn w-full md:w-auto" disabled={pending}>
        {pending ? "Sending…" : "Get Priority Access"}
      </button>
      <p role="alert" aria-live="assertive" className="min-h-6 text-sm font-semibold text-brand-deep">
        {formError}
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string | false;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold">
        {label} <span className="text-brand-accent-ink">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-brand-deep">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({
  label,
  id,
  options,
  ...props
}: {
  label: string;
  id: string;
  options: string[];
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold">
        {label}
      </label>
      <select id={id} className="field" {...props}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
