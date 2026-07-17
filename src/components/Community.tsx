import { CheckCircle2, GraduationCap, HeartHandshake } from 'lucide-react';

const SCHOOLS = [
  'Green Valley Public School',
  'St. Jude Primary School',
  'Riverdale Heights Public School',
  'Happy Days Preschool',
  'Green Valley Early Learning Centre',
  'Sunshine Early Learning Centre',
  'Metro Kids Child Care',
];

export default function Community() {
  return (
    <section id="community" className="relative bg-white py-20 lg:py-28">
      <div className="container-px">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="rounded-[2rem] bg-gradient-to-br from-brand-50 to-teal-50 p-8 lg:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <CheckCircle2 className="h-7 w-7" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-slate-900 lg:text-3xl">
              Medicare & all health funds accepted
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We accept all major health funds and are able to make on-the-spot claims through HICAPS. We also welcome patients eligible for treatment under the Child Dental Benefits Schedule (CDBS) and the Department of Veteran Affairs (DVA).
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['HICAPS', 'Medicare CDBS', 'DVA', 'All major funds'].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-brand-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700"
                >
                  {b}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-primary mt-8">Make a booking</a>
          </div>

          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500 text-white">
              <GraduationCap className="h-7 w-7" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-slate-900 lg:text-3xl">
              Bright Smiles, Bright Futures
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our program teaches kids how to live a healthy life. We've introduced kids dental workshops into local schools and early learning centres to teach good oral hygiene and dietary habits in a fun, engaging way.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {SCHOOLS.map((s) => (
                <li key={s} className="flex items-start gap-3 rounded-xl bg-sand-50 px-4 py-3">
                  <HeartHandshake className="mt-0.5 h-4 w-4 flex-none text-teal-600" />
                  <span className="text-sm font-medium text-slate-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
