"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { mailtoHref } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { serviceGroups } from "@/data/services";

type FieldName =
  | "name"
  | "company"
  | "phone"
  | "email"
  | "service"
  | "location"
  | "message";

type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  message: "",
};

const fieldOrder: FieldName[] = [
  "name",
  "company",
  "phone",
  "email",
  "service",
  "location",
  "message",
];

const serviceOptions = [
  ...serviceGroups.map((service) => service.title),
  "Other requirement",
];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const digits = values.phone.replace(/\D/g, "");

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a contact number.";
  } else if (digits.length < 10) {
    errors.phone =
      "Please enter a valid contact number with at least 10 digits.";
  }

  if (
    values.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())
  ) {
    errors.email = "Please check the email address entered.";
  }

  if (!values.service) {
    errors.service = "Please select the service required.";
  }

  if (!values.message.trim()) {
    errors.message = "Please describe the scope you want to discuss.";
  } else if (values.message.trim().length < 10) {
    errors.message =
      "Please add a short description of the scope (at least 10 characters).";
  }

  return errors;
}

const labelClasses = "block text-label text-ink-500 uppercase";
/* Fields sit on the off-white surface at rest and lift to white on focus, with
   the solar ring supplied by the global :focus-visible rule. Minimum height
   clears the 44px touch target on every control. */
const inputClasses =
  "mt-2.5 block min-h-12 w-full rounded-[3px] border border-ink-300 bg-ink-50 px-3.5 py-3 text-body text-ink-800 " +
  "transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-ink-400 " +
  "hover:border-ink-400 focus:border-navy-600 focus:bg-white focus:shadow-[var(--shadow-panel)]";
const errorClasses = "mt-2 text-micro font-medium text-solar-700";


/**
 * Enquiry form.
 *
 * There is no backend on this site, so the form validates the details and then
 * hands them to the visitor's email application, addressed to the company inbox.
 * Nothing is stored or sent anywhere else, and no success message appears before
 * the visitor has actually sent the message.
 */
export function InquiryForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [prepared, setPrepared] = useState(false);

  function updateField(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalidField = fieldOrder.find((field) => nextErrors[field]);

    if (firstInvalidField) {
      setPrepared(false);
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    const body = [
      "New project enquiry from the Khushi Enterprises website",
      "",
      `Name: ${values.name.trim()}`,
      `Company: ${values.company.trim() || "-"}`,
      `Phone: ${values.phone.trim()}`,
      `Email: ${values.email.trim() || "-"}`,
      `Service required: ${values.service}`,
      `Project location: ${values.location.trim() || "-"}`,
      "",
      "Requirement:",
      values.message.trim(),
    ].join("\n");

    window.location.href = mailtoHref(
      siteConfig.contact.email,
      `Project enquiry — ${values.name.trim()}`,
      body,
    );

    setPrepared(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-ink-200 bg-white p-6 shadow-[var(--shadow-panel)] sm:p-8 lg:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClasses}
            placeholder="Your full name"
          />
          {errors.name ? (
            <p id="name-error" className={errorClasses}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={inputClasses}
            placeholder="Company or plant name"
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClasses}
            placeholder="Contact number"
          />
          {errors.phone ? (
            <p id="phone-error" className={errorClasses}>
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClasses}
            placeholder="name@company.com"
          />
          {errors.email ? (
            <p id="email-error" className={errorClasses}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>
            Service Required <span aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={values.service}
            onChange={(event) => updateField("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={inputClasses}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="service-error" className={errorClasses}>
              {errors.service}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="location" className={labelClasses}>
            Project Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={values.location}
            onChange={(event) => updateField("location", event.target.value)}
            className={inputClasses}
            placeholder="City / district of the site"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={inputClasses}
            placeholder="Describe the scope, site conditions and the timeline you are working to."
          />
          {errors.message ? (
            <p id="message-error" className={errorClasses}>
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-ink-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-micro text-ink-500">
          Fields marked <span aria-hidden="true">*</span> are required.
        </p>
        <Button type="submit" size="lg">
          Send Enquiry
        </Button>
      </div>

      <div aria-live="polite" className="mt-5">
        {prepared ? (
          <p className="border-l-2 border-leaf-500 bg-leaf-50 px-4 py-3 text-detail text-ink-700">
            Your email application should now be open with the enquiry details
            filled in. Please send that message to reach us at{" "}
            <span className="font-medium">{siteConfig.contact.email}</span>. If
            nothing opened, email us directly or call{" "}
            <span className="font-medium">
              {siteConfig.contact.phoneDisplay}
            </span>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
