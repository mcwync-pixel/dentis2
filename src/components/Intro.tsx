import { CheckCircle2 } from 'lucide-react';

const POINTS = [
  'Full range of general, cosmetic & orthodontic services',
  'Lifelong relationships with you and your family',
  'A new standard in patient comfort and care',
];

export default function Intro() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/10">
              <img
                src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Friendly dental team welcoming a patient"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white p-5 shadow-xl shadow-slate-900/10 sm:block lg:-right-8">
              <p className="font-display text-3xl font-semibold text-brand-700">20+</p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Years caring for locals
              </p>
            </div>
            <div className="absolute -left-4 top-8 hidden rounded-2xl bg-teal-500 px-5 py-4 text-white shadow-xl lg:block">
              <p className="font-display text-lg font-semibold leading-tight">All health funds accepted</p>
              <p className="text-xs text-white/85">HICAPS on-the-spot claims</p>
            </div>
          </div>

          <div>
            <span className="eyebrow">Your health is our priority</span>
            <h2 className="section-title mt-3">
              A full range of dental care, under one roof
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              At Aura Dental your health is our priority. We offer a full range of General Dental, Cosmetic and Orthodontic services so you and your family can receive the care you deserve in one familiar, friendly place.
            </p>
            <ul className="mt-8 space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-teal-500" />
                  <span className="text-base text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">See our services</a>
              <a href="#philosophy" className="btn-outline">Our philosophy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
