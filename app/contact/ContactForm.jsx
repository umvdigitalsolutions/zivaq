"use client";

import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setForm(initialState);
      setStatus("success");
      setNotice("Thanks. Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setNotice(error.message || "Unable to send your message.");
    }
  }

  const isSending = status === "sending";

  return (
    <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
      <input
        name="website"
        value={form.website}
        onChange={updateField}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="firstName"
          value={form.firstName}
          onChange={updateField}
          required
          aria-label="First name"
          placeholder="First name"
          className="rounded-md border-gray-200 px-3 py-2 shadow-sm"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={updateField}
          required
          aria-label="Last name"
          placeholder="Last name"
          className="rounded-md border-gray-200 px-3 py-2 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          name="email"
          value={form.email}
          onChange={updateField}
          required
          type="email"
          aria-label="Email"
          placeholder="Email address"
          className="rounded-md border-gray-200 px-3 py-2 shadow-sm"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={updateField}
          aria-label="Phone"
          placeholder="Phone"
          className="rounded-md border-gray-200 px-3 py-2 shadow-sm"
        />
      </div>

      <input
        name="company"
        value={form.company}
        onChange={updateField}
        aria-label="Company"
        placeholder="Company (optional)"
        className="rounded-md border-gray-200 px-3 py-2 shadow-sm"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={updateField}
        required
        aria-label="Message"
        placeholder="How can we help?"
        rows={6}
        className="rounded-md border-gray-200 px-3 py-2 shadow-sm"
      />

      {notice ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-green-700" : "text-red-600"
          }`}
          role="status"
        >
          {notice}
        </p>
      ) : null}

      <div className="mt-2">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
