const PARTNERS = [
  'SomnoMed',
  'Invisalign',
  'NSW Health',
  'Myobrace',
  'ADA',
  'Dental Board',
  'CSU',
  'Australian Society of Dental Implants',
];

export default function Partners() {
  return (
    <section className="border-y border-slate-100 bg-sand-50 py-14">
      <div className="container-px">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Trusted partners & affiliations
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="flex h-12 items-center justify-center text-center text-sm font-semibold text-slate-400 grayscale transition hover:text-brand-700 hover:grayscale-0"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
