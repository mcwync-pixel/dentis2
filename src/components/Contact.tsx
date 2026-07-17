import { useState } from 'react';
import { Calendar, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

const HOURS = [
  { day: 'Monday', time: '8:00am – 5:00pm' },
  { day: 'Tuesday', time: '8:00am – 5:00pm' },
  { day: 'Wednesday', time: '8:00am – 5:00pm' },
  { day: 'Thursday', time: '8:00am – 7:00pm' },
  { day: 'Friday', time: '8:00am – 5:00pm' },
  { day: 'Saturday', time: 'By appointment' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative bg-white py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Book your visit</span>
          <h2 className="section-title mt-3">Get in touch with Aura Dental</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Ready to experience dentistry with a difference? Send us a message or call the clinic and our friendly team will help you book the right appointment.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div className="rounded-[2rem] border border-slate-100 bg-sand-50 p-8 shadow-sm lg:p-10">
            <h3 className="font-display text-2xl font-semibold text-slate-900">Request an appointment</h3>
            <p className="mt-2 text-sm text-slate-500">
              Fill in your details and we'll be in touch within one business day.
            </p>
            {submitted ? (
              <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-white">
                  <Send className="h-6 w-6" />
                </div>
                <p className="mt-4 font-display text-xl font-semibold text-slate-900">Thank you!</p>
                <p className="mt-2 text-sm text-slate-600">
                  Your request has been received. Our team will contact you shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form
                className="mt-8 grid gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="First name" name="first" placeholder="Jane" />
                  <Field label="Last name" name="last" placeholder="Smith" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone" name="phone" type="tel" placeholder="04xx xxx xxx" />
                  <Field label="Email" name="email" type="email" placeholder="[email protected]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">How can we help?</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us briefly what you'd like to book or discuss..."
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
                  <Send className="h-4 w-4" />
                  Send request
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] bg-brand-900 p-8 text-white lg:p-10">
              <h3 className="font-display text-2xl font-semibold text-white">Contact details</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-none text-teal-300" />
                  <a href="tel:0255550199" className="text-white/90 hover:text-white">(02) 5555 0199</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-none text-teal-300" />
                  <a href="mailto:[email protected]" className="text-white/90 hover:text-white">[email protected]</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-none text-teal-300" />
                  <span className="text-white/90">
                    123 Wellness Way<br />Green Valley, NSW 2000
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 flex-none text-teal-300" />
                  <span className="text-white/90">Servicing Green Valley, Oakwood, Riverdale, Kingswood & the surrounding Metro Area</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm lg:p-10">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand-600" />
                <h3 className="font-display text-xl font-semibold text-slate-900">Opening hours</h3>
              </div>
              <ul className="mt-6 divide-y divide-slate-100">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-3 text-sm">
                    <span className="font-medium text-slate-700">{h.day}</span>
                    <span className="text-slate-500">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-slate-700">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
