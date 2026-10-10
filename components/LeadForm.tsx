"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
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

export function LeadForm({
  variant = "full",
  location = "page",
}: {
  variant?: "full" | "compact" | "hero";
  location?: string;
}) {
  const router = useRouter();
  const started = useRef<number>(0);
  const focused = useRef(false);
  const baseId = useId();
  const [formError, setFormError] = useState("");
  const [pending, setPending] = useState(false);
  const [brokerAnswer, setBrokerAnswer] = useState<"" | "yes" | "no">("");

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
    if (brokerAnswer === "") {
      setFormError("Select yes or no for the broker question.");
      return;
    }
    setValue("is_broker", brokerAnswer === "yes");
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

  const stacked = variant === "hero";
  const fieldClass = "field";

  return (
    <form
      onSubmit={onSubmit}
      onFocus={onFocus}
      noValidate
      className={stacked ? "lead-form relative grid gap-2" : "lead-form relative grid max-w-2xl gap-3"}
    >
      <div className={stacked ? "grid grid-cols-2 gap-x-3 gap-y-2" : "grid gap-3 md:grid-cols-2"}>
        <Field label="First name" id={`${baseId}-first`} error={errors.first_name && "Enter your first name."}>
          <input id={`${baseId}-first`} className={fieldClass} autoComplete="given-name" {...register("first_name")} />
        </Field>
        <Field label="Last name" id={`${baseId}-last`} error={errors.last_name && "Enter your last name."}>
          <input id={`${baseId}-last`} className={fieldClass} autoComplete="family-name" {...register("last_name")} />
        </Field>
        <Field label="Email" id={`${baseId}-email`} error={errors.email && "Enter a valid email address."}>
          <input id={`${baseId}-email`} className={fieldClass} type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field
          label="Phone"
          id={`${baseId}-phone`}
          error={errors.phone && "Enter a phone number, 10 to 20 characters, using digits and + ( ) . -"}
        >
          <input id={`${baseId}-phone`} className={fieldClass} type="tel" autoComplete="tel" {...register("phone")} />
        </Field>
      </div>
      <fieldset>
        <legend className="text-xs font-semibold">Are you a licensed real estate agent?</legend>
        <div className="mt-1 flex gap-4">
          <label className="flex items-center gap-1.5 text-xs">
            <input
              type="radio"
              name={`${baseId}-broker`}
              className="h-3.5 w-3.5"
              checked={brokerAnswer === "yes"}
              onChange={() => setBrokerAnswer("yes")}
            />
            Yes
          </label>
          <label className="flex items-center gap-1.5 text-xs">
            <input
              type="radio"
              name={`${baseId}-broker`}
              className="h-3.5 w-3.5"
              checked={brokerAnswer === "no"}
              onChange={() => setBrokerAnswer("no")}
            />
            No
          </label>
        </div>
      </fieldset>
      <label className="flex items-start gap-2 text-[0.7rem] leading-snug">
        <input type="checkbox" className="mt-0.5 h-3.5 w-3.5 shrink-0" {...register("casl_consent")} />
        <span>{CASL_CONSENT}</span>
      </label>
      {errors.casl_consent && (
        <p className="form-alert text-xs font-semibold text-brand-deep">Consent is required to register.</p>
      )}
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${baseId}-website`}>Website</label>
        <input id={`${baseId}-website`} tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>
      <button type="submit" className={stacked ? "btn w-full" : "btn w-full md:w-auto"} disabled={pending}>
        {pending ? "Sending…" : "Get Priority Access"}
      </button>
      <p role="alert" aria-live="assertive" className="form-alert min-h-4 text-xs font-semibold text-brand-deep">
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
      <label htmlFor={id} className="mb-0.5 block text-xs font-semibold">
        {label} <span className="text-brand-accent-ink">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="form-alert mt-1 text-xs text-brand-deep">
          {error}
        </p>
      )}
    </div>
  );
}

