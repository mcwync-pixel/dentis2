import { useEffect, useState } from 'react';
import { Phone, Calendar, Menu, X, Smile } from 'lucide-react';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md shadow-slate-900/5 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="container-px">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                scrolled ? 'bg-brand-600' : 'bg-white/15 backdrop-blur'
              }`}
            >
              <Smile className="h-6 w-6 text-white" />
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className={`font-display text-xl font-semibold tracking-tight transition-colors ${
                  scrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                Collaroy Dental
              </span>
              <span
                className={`text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${
                  scrolled ? 'text-brand-600' : 'text-white/80'
                }`}
              >
                Northern Beaches
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:text-brand-700'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:0282527555"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? 'text-slate-800 hover:text-brand-700' : 'text-white hover:text-white'
              }`}
            >
              <Phone className="h-4 w-4" />
              (02) 8252 7555
            </a>
            <a href="#contact" className="btn-primary">
              <Calendar className="h-4 w-4" />
              Book Online
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
              scrolled ? 'bg-brand-50 text-brand-700' : 'bg-white/15 text-white backdrop-blur'
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 rounded-3xl bg-white p-6 shadow-2xl shadow-slate-900/10">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <a
                href="tel:0282527555"
                className="flex items-center gap-2 px-4 text-sm font-semibold text-slate-800"
              >
                <Phone className="h-4 w-4 text-brand-600" />
                (02) 8252 7555
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">
                <Calendar className="h-4 w-4" />
                Book Online
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
