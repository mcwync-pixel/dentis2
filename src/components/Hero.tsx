import { ArrowDown, Calendar, Phone, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

const FEATURES = [
  { icon: Sparkles, title: 'Implant Dentistry', text: 'Replace single or multiple teeth.' },
  { icon: HeartHandshake, title: "Children's Dentistry", text: 'Building good habits for life.' },
  { icon: ShieldCheck, title: 'Orthodontics & Invisalign', text: 'All services under one roof.' },
  { icon: Calendar, title: 'Affordable Payment Plans', text: 'Access the treatment you deserve.' },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.pexels.com/photos/6682745/pexels-photo-6682745.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Bright modern dental surgery"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/85 via-brand-900/70 to-teal-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      <div className="container-px pt-36 pb-20 sm:pt-44 lg:pt-52 lg:pb-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            Local dentists with a difference
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl animate-fade-up">
            Gentle, lifelong dental care in Green Valley
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 animate-fade-up [animation-delay:120ms]">
            Aura Dental is proudly setting a new standard in patient comfort and care, with a focus on building lifelong relationships with you and your family.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:220ms]">
            <a href="#contact" className="btn-primary">
              <Calendar className="h-4 w-4" />
              Book an Appointment
            </a>
            <a href="tel:0255550199" className="btn-ghost">
              <Phone className="h-4 w-4" />
              (02) 5555 0199
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="container-px pb-16 lg:pb-24">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15 animate-fade-up"
                style={{ animationDelay: `${i * 80 + 300}ms` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/90 text-slate-900 transition group-hover:bg-teal-300">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition hover:text-white lg:flex"
        aria-label="Scroll to services"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">Our Services</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
