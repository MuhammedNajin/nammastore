"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setStatus("error");
    setStatus("loading");
    try {
      // TODO: replace with your real endpoint (e.g. app/api/waitlist/route.ts)
      await new Promise((r) => setTimeout(r, 700));
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-emerald-200">
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        You're on the list. We'll email {email} when your spot opens.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-lg">
      <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 sm:flex-row">
        <label htmlFor="email" className="sr-only">Work email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
          placeholder="Enter your work email"
          autoComplete="email"
          aria-invalid={status === "error"}
          className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-emerald-950 transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-70"
        >
          {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Get Early Access
          {status !== "loading" && <ArrowRight className="h-4 w-4" />}
        </button>
      </div>
      <p className={`mt-2 text-sm ${status === "error" ? "text-rose-400" : "text-slate-500"}`}>
        {status === "error" ? "Enter a valid email address, like name@shop.in." : "Free during early access. No spam."}
      </p>
    </form>
  );
}
