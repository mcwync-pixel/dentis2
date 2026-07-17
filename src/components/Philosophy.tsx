import { Quote } from 'lucide-react';

const VALUES = [
  {
    title: 'Patient comfort first',
    text: 'We take time to listen, explain and make sure every visit feels calm and unhurried.',
  },
  {
    title: 'Honest, tailored advice',
    text: 'Treatment plans built around your goals, your budget and your long-term health.',
  },
  {
    title: 'Lifelong relationships',
    text: 'From first teeth to later life, we care for every generation of your family.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-brand-900 py-20 text-white lg:py-28">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-teal-500 blur-3xl" />
      </div>

      <div className="container-px">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
              Our Philosophy
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Dentistry built on trust, comfort and care
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              We believe great dentistry is about more than teeth. It's about understanding you, easing your worries and helping you feel confident in your smile for the rest of your life.
            </p>
            <a href="#contact" className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-800 shadow-lg transition hover:bg-brand-50">
              Make a booking
            </a>
          </div>

          <div className="grid gap-5">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-teal-400 font-display text-lg font-semibold text-slate-900">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-white">{v.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{v.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <figure className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:p-12">
          <Quote className="h-8 w-8 text-teal-300" />
          <blockquote className="mt-4 font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
            "From the moment you walk in, you're treated like family. The team genuinely cares and always takes the time to explain everything. Our kids actually look forward to the dentist now."
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 text-sm text-white/70">
            <span className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-300 to-brand-400" />
            <span>
              <span className="block font-semibold text-white">Sarah M.</span>
              Green Valley
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
