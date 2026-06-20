import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Server, Cloud, Network, Database, ShieldCheck, Headphones,
  Clock, Lock, TrendingUp, Zap, ArrowRight, ArrowUpRight,
  MapPin, Phone, Mail, Building2, Landmark, HeartPulse, ShoppingBag, Factory, GraduationCap,
} from "lucide-react";
import { QtechxLogo } from "@/components/QtechxLogo";
import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import animationData from "@/components/Animation - 1741463397139.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qtechx — Enterprise IT Solutions for Modern Businesses" },
      { name: "description", content: "Managed IT, cloud, networking, server management, cybersecurity, and 24/7 support. Qtechx delivers enterprise-grade IT solutions for growing businesses." },
      { property: "og:title", content: "Qtechx — Enterprise IT Solutions" },
      { property: "og:description", content: "Managed IT services, cloud infrastructure, networking, cybersecurity, and technical support for modern businesses." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: LandingPage,
});

const services = [
  { icon: Server, title: "Managed IT Services", desc: "Proactive monitoring and end-to-end management of your IT estate." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Migrate, scale, and optimize across AWS, Azure, and private cloud." },
  { icon: Network, title: "Networking", desc: "High-performance LAN, WAN, and SD-WAN built for uptime." },
  { icon: Database, title: "Server Management", desc: "Patching, backups, and tuning for mission-critical workloads." },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Threat detection, zero-trust access, and compliance hardening." },
  { icon: Headphones, title: "Technical Support", desc: "24/7 helpdesk with rapid response from certified engineers." },
];

const benefits = [
  { icon: Clock, stat: "24/7", label: "Round-the-clock support" },
  { icon: Lock, stat: "99.99%", label: "Secure uptime SLA" },
  { icon: TrendingUp, stat: "∞", label: "Elastic infrastructure" },
  { icon: Zap, stat: "<15m", label: "Average response time" },
];

const sectors = [
  { icon: Landmark, label: "Finance" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Building2, label: "Government" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Factory, label: "Manufacturing" },
  { icon: GraduationCap, label: "Education" },
];

const process = [
  { n: "01", title: "Discover", desc: "We map your stack, risks, and goals in a focused technical audit." },
  { n: "02", title: "Design", desc: "A tailored architecture and roadmap aligned to your business outcomes." },
  { n: "03", title: "Deploy", desc: "Zero-disruption rollout with documented runbooks and validation." },
  { n: "04", title: "Operate", desc: "24/7 monitoring, continuous improvement, and quarterly reviews." },
];

function LottieView() {
  const options = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Sectors />
      <Services />
      <Process />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "How we work" },
    { href: "#why", label: "Why Qtechx" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-foreground"><QtechxLogo className="h-10 w-auto" /></a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground hover:bg-white/5 transition-colors">
          Get consultation <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <button onClick={() => setOpen(o => !o)} aria-label="Menu" className="md:hidden p-2 text-foreground">
          <div className="space-y-1.5"><span className="block h-0.5 w-5 bg-foreground" /><span className="block h-0.5 w-5 bg-foreground" /></div>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur border-t border-border px-6 py-4 flex flex-col gap-3">
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">{l.label}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="rounded-full border border-border px-4 py-2 text-sm text-center">Get consultation</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-20 md:pt-44 pb-24 md:pb-32 px-6 overflow-hidden">
      {/* Subtle ambient glow — very restrained */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute top-20 -left-20 w-[300px] h-[300px] rounded-full bg-accent/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/[0.02] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground mb-8"
            >
              <span className="h-1 w-1 rounded-full bg-accent" />
              Enterprise IT Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] text-foreground break-words"
            >
              IT infrastructure 
               <br className="hidden sm:block" />
               {" "} that never{" "}
              <span className="relative inline-block">
                <span className="text-foreground">sleeps.</span>
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1.5 left-0 h-0.5 bg-gradient-to-r from-accent via-blue-500 to-accent rounded-full"
                />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4, type: "spring" }}
                  className="absolute -bottom-2 right-0 w-1.5 h-1.5 bg-accent rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Managed IT, cloud, and security — built for businesses that demand uptime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors">
                Get consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-white/5 transition-colors">
                Our services
              </a>
            </motion.div>
          </div>

          {/* Right: Hero Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-sm sm:max-w-md mx-auto lg:ml-auto lg:mr-0 mt-10 lg:mt-0"
          >
            <LottieView />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section className="relative py-16 px-6 border-y border-border/60">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
          Trusted across regulated sectors
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {sectors.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <s.icon className="h-5 w-5" strokeWidth={1.5} />
              <span className="text-xs font-medium tracking-wide">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Services" title="Everything your IT needs, under one roof." sub="A unified team for the full stack — so you can focus on your business." />
        <div className="mt-14 grid gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative bg-background p-8 hover:bg-surface/40 transition-colors">
              <s.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="How we work" title="A process built for outcomes." sub="Four deliberate steps from first call to long-term partnership." />
        <div className="mt-14 grid gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <motion.div key={p.n}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-background p-8">
              <div className="text-xs font-mono text-accent tracking-widest">{p.n}</div>
              <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Why Qtechx" title="Enterprise-grade reliability, without the overhead." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div key={b.label}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border/60 p-7 bg-surface/30">
              <b.icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
              <div className="mt-6 text-3xl font-semibold tracking-tight text-gradient">{b.stat}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Contact" title="Let's talk about your infrastructure." />
        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 rounded-2xl border border-border/60 bg-surface/30 p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold">Qtechx</h3>
              <p className="mt-2 text-sm text-muted-foreground">Smart IT Solutions for modern businesses.</p>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3"><MapPin className="h-4 w-4 text-accent shrink-0 mt-1" strokeWidth={1.5} /><span className="text-muted-foreground">House #7 Block #1, Karim Park,<br /> Ravi Road, Lahore</span></div>
              <div className="flex gap-3"><Phone className="h-4 w-4 text-accent shrink-0 mt-1" strokeWidth={1.5} /><a href="tel:+923244686837" className="text-muted-foreground hover:text-foreground">+92 324 4686837</a></div>
              <div className="flex gap-3"><Mail className="h-4 w-4 text-accent shrink-0 mt-1" strokeWidth={1.5} /><a href="mailto:hello@qtechx.com" className="text-muted-foreground hover:text-foreground">hello@qtechx.com</a></div>
            </div>
          </div>
          <form onSubmit={e => { e.preventDefault(); }} className="lg:col-span-3 rounded-2xl border border-border/60 bg-surface/30 p-8 space-y-5">
            <Field label="Name" id="name"><input id="name" required className="input-base" placeholder="Your full name" /></Field>
            <Field label="Email" id="email"><input id="email" type="email" required className="input-base" placeholder="you@company.com" /></Field>
            <Field label="Message" id="msg"><textarea id="msg" rows={5} required className="input-base resize-none" placeholder="Tell us about your project…" /></Field>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors">
              Send message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
      <style>{`.input-base{width:100%;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:0.75rem;padding:0.75rem 1rem;color:white;font-size:0.875rem;outline:none;transition:border-color .2s, box-shadow .2s;}
      .input-base:focus{border-color:rgba(37,99,235,0.5);box-shadow:0 0 0 4px rgba(37,99,235,0.12);}
      .input-base::placeholder{color:rgba(255,255,255,0.3);}`}</style>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</div>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <QtechxLogo className="h-8 w-auto text-foreground" />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">Empowering businesses with reliable, secure, and scalable IT solutions.</p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4">Services</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {services.map(s => <li key={s.title}><a href="#services" className="hover:text-foreground">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>House #7 Block #1, Karim Park, Ravi Road, Lahore</li>
            <li>+92 324 4686837</li>
            <li>info@qtechx.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground text-center">© 2026 Qtechx. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
