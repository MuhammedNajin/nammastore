import { Camera, Check, Database, Mic, MessageCircle, Server, Sparkles, Store, Languages } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

const features = [
  { icon: Mic, title: "Voice-to-Stock", text: "Speak naturally in regional languages to log sales and update inventory instantly." },
  { icon: Camera, title: "Auto-Cataloging", text: "Snap a photo of new stock; AI vision generates product listings and storefront links." },
  { icon: MessageCircle, title: "AI Customer Concierge", text: "Automated WhatsApp replies handle customer pricing and availability queries 24/7." },
];

const steps = [
  { title: "Connect WhatsApp", text: "Link your shop's WhatsApp Business line." },
  { title: "Send voice notes or photos", text: "Share your daily stock the way you already talk." },
  { title: "Watch it update", text: "Your database and online storefront sync automatically." },
];

const stack = [
  { icon: Server, name: "NestJS microservices", text: "Separate services for messaging, media and catalog keep processing fast and independently scalable." },
  { icon: Database, name: "PostgreSQL + Prisma", text: "Typed, relational inventory data with safe migrations and per-merchant isolation." },
  { icon: Languages, name: "Claude API", text: "Multilingual parsing turns voice transcripts and photos into structured stock changes." },
];

function Waveform() {
  return (
    <div className="flex h-6 items-center gap-[3px]" aria-hidden>
      {Array.from({ length: 22 }).map((_, i) => (
        <span key={i} className="w-[3px] origin-center animate-wave rounded-full bg-emerald-300"
          style={{ height: `${8 + ((i * 7) % 16)}px`, animationDelay: `${i * 70}ms` }} />
      ))}
    </div>
  );
}

function PhoneDemo() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-8 -z-10 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f1a17] shadow-2xl shadow-emerald-950/50">
        <div className="flex items-center gap-3 border-b border-white/10 bg-[#13221e] px-4 py-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400/20 text-emerald-300"><Store className="h-4 w-4" /></div>
          <div>
            <p className="text-sm font-semibold text-white">Lakshmi Provisions</p>
            <p className="text-xs text-emerald-300">NammaStore connected</p>
          </div>
        </div>
        <div className="space-y-3 p-4 text-sm">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-emerald-900/70 px-3 py-2">
            <div className="flex items-center gap-3"><Mic className="h-4 w-4 text-emerald-300" /><Waveform /><span className="text-xs text-slate-400">0:07</span></div>
            <p className="mt-2 text-xs text-slate-300">“ಇವತ್ತು 5 ಕೆಜಿ ಟೊಮೆಟೊ ಮಾರಿದೆ, 20 ಕೆಜಿ ಅಕ್ಕಿ ಬಂತು.”</p>
            <p className="text-[11px] text-slate-500">Sold 5 kg tomatoes, received 20 kg rice.</p>
          </div>
          <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-3 py-2 text-slate-200">
            <p className="mb-2 flex items-center gap-1.5 font-medium text-emerald-300"><Check className="h-4 w-4" /> Stock updated</p>
            <dl className="space-y-1 font-mono text-xs">
              <div className="flex justify-between gap-6"><dt className="text-slate-400">Tomato</dt><dd>38 → 33 kg</dd></div>
              <div className="flex justify-between gap-6"><dt className="text-slate-400">Rice (Sona Masuri)</dt><dd>12 → 32 kg</dd></div>
            </dl>
          </div>
          <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-3 py-2 text-slate-300">
            <p className="text-xs text-slate-500">Customer asked: “Rice price, 10 kg?”</p>
            <p>Sona Masuri 10 kg is ₹620 and in stock. Want it delivered today?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(60%_50%_at_70%_0%,rgba(16,185,129,0.14),transparent)]" />

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b1210]/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold text-white">
            NammaStore
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how-it-works" className="hover:text-white">How It Works</a>
            <a href="#tech-stack" className="hover:text-white">Tech Stack</a>
          </div>
          <a href="#waitlist" className="rounded-lg border border-emerald-400/40 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-emerald-950">
            Early Access
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="waitlist" className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-16 lg:grid-cols-2 lg:pt-24">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
              🚀 Backed by AI &amp; Next-Gen Architecture
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Manage Your Local Shop via WhatsApp Voice &amp; Vision.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Empowering Tier-2 &amp; Tier-3 MSMEs. Update inventory with a voice note in your native language, snap photos for instant auto-cataloging, and let AI handle customer orders.
            </p>
            <div className="mt-8"><WaitlistForm /></div>
          </div>
          <PhoneDemo />
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">Everything your shop needs, inside the chat you already use.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-emerald-400/40">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Set up in minutes, not weeks.</h2>
            <ol className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              <div className="absolute left-[1.15rem] top-2 hidden h-px w-full bg-gradient-to-r from-emerald-400/50 to-transparent md:block" aria-hidden />
              {steps.map((s, i) => (
                <li key={s.title} className="relative flex gap-4 md:block">
                  <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-400 font-display font-bold text-emerald-950">{i + 1}</span>
                  <div className="md:mt-5">
                    <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-slate-400">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Tech */}
        <section id="tech-stack" className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-3xl border border-white/10 bg-[#0e1714] p-8 sm:p-12">
            <div className="flex items-center gap-2 text-emerald-300"><Sparkles className="h-4 w-4" /><span className="font-mono text-sm">built for reliability at the edge of the market</span></div>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">Serious infrastructure behind a simple chat.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {stack.map(({ icon: Icon, name, text }) => (
                <div key={name}>
                  <Icon className="h-5 w-5 text-emerald-300" />
                  <h3 className="mt-3 font-mono text-base font-semibold text-white">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>Copyright © 2026 NammaStore. All rights reserved.</p>
          <p>Built with modern web technologies for local merchants.</p>
        </div>
      </footer>
    </div>
  );
}
