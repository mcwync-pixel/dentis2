import {
  ClipboardCheck,
  ShieldPlus,
  Baby,
  Smile,
  Activity,
  Crown,
  Anchor,
  Siren,
  Glasses,
  Brain,
  Moon,
  HeartPulse,
  Wrench,
  Sun,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

type Service = { icon: LucideIcon; title: string; text: string };

const GENERAL: Service[] = [
  { icon: ClipboardCheck, title: 'Your First Visit', text: 'A calm, thorough welcome and assessment.' },
  { icon: ShieldPlus, title: 'Preventative Dentistry', text: 'Keep your smile healthy for life.' },
  { icon: Baby, title: "Children's Dentistry", text: 'Building good habits early.' },
  { icon: Smile, title: 'Fillings', text: 'Tooth-coloured restorations that last.' },
  { icon: Activity, title: 'Root Canal Therapy', text: 'Save your natural tooth comfortably.' },
  { icon: Crown, title: 'Porcelain Crowns', text: 'Restore strength and beauty.' },
  { icon: Anchor, title: 'Dental Implants', text: 'Replace single or multiple teeth.' },
  { icon: Siren, title: 'Dental Emergencies', text: 'Same-day relief when you need it.' },
  { icon: Glasses, title: 'Dentures', text: 'Comfortable, natural-looking solutions.' },
  { icon: Brain, title: 'Wisdom Teeth', text: 'Expert assessment and removal.' },
  { icon: Moon, title: 'Sleep Apnoea & Snoring', text: 'Rest easier with custom devices.' },
  { icon: HeartPulse, title: 'Anxious Patients', text: 'Gentle, supportive, unhurried care.' },
];

const COSMETIC: Service[] = [
  { icon: Baby, title: 'Child Orthodontics', text: 'Guide growing smiles with confidence.' },
  { icon: Wrench, title: 'Adult Orthodontics', text: 'Discreet options for every lifestyle.' },
  { icon: Sun, title: 'Teeth Whitening', text: 'Brighten your smile safely.' },
  { icon: Sparkles, title: 'Veneers', text: 'Reshape and restore your smile.' },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <a
      href="#contact"
      className="group relative flex flex-col items-start rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-xl hover:shadow-brand-900/10"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-teal-50 text-brand-700 transition group-hover:from-brand-600 group-hover:to-teal-500 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </span>
      <h4 className="mt-5 font-display text-lg font-semibold text-slate-900">{service.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{service.text}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 opacity-0 transition group-hover:opacity-100">
        Learn more
      </span>
    </a>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-sand-50 py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="section-title mt-3">Comprehensive care for every smile</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            From routine check-ups to advanced cosmetic and orthodontic treatment, our team offers everything you need under one roof.
          </p>
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
              <ClipboardCheck className="h-5 w-5" />
            </span>
            <h3 className="font-display text-2xl font-semibold text-slate-900">General Dental</h3>
            <div className="ml-3 hidden h-px flex-1 bg-gradient-to-r from-brand-200 to-transparent sm:block" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GENERAL.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="font-display text-2xl font-semibold text-slate-900">Orthodontics & Cosmetic</h3>
            <div className="ml-3 hidden h-px flex-1 bg-gradient-to-r from-teal-200 to-transparent sm:block" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COSMETIC.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
