import { Facebook, Instagram, MapPin, Phone, Mail, Smile } from 'lucide-react';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-px py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600">
                <Smile className="h-6 w-6 text-white" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl font-semibold text-white">Collaroy Dental</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-400">Northern Beaches</span>
              </span>
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">
              Dentist servicing Collaroy Plateau, Collaroy, Wheeler Heights, Cromer, Narrabeen, Dee Why and the Northern Beaches.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-brand-600 hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-brand-600 hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-slate-400 transition hover:text-white">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white">Contact us</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-brand-400" />
                <a href="tel:0282527555" className="text-slate-400 hover:text-white">(02) 8252 7555</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-400" />
                <a href="mailto:[email protected]" className="text-slate-400 hover:text-white">[email protected]</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-400" />
                <span className="text-slate-400">
                  71 Veterans Parade<br />Collaroy Plateau, NSW 2097
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Collaroy Dental. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#contact" className="transition hover:text-white">Book Online</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
