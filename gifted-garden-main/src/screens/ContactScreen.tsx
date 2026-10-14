import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, MessageSquare, Clock, MapPin, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { POSTCODE_AREAS, FAQ_ITEMS } from '../data/mockData';
import { ScreenId } from '../types';
import confetti from 'canvas-confetti';

interface ContactScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenQuote: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({
  onNavigate,
  onOpenQuote
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Contact Request from ${fullName}`;
    const body = `New Contact Request\n\nName: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nPostcode: ${postcode}\nAddress: ${address}\n\nDetails:\n${details}`;
    const mailtoUrl = `mailto:James@giftedgardens.biz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    try { confetti({ particleCount: 70, spread: 60 }); } catch {}
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0a2013] to-[#123620] text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#e5a918] inline-block">Get in Touch</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Contact Us</h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Need a quote, have a question, or want to book a visit? Fill in the form, give us a call, or drop an email.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#dce3d5] p-6 sm:p-8 shadow-sm">
            <div className="border-b border-[#edf1e8] pb-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0d2818]">Send Us a Message</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32]" />
                <span className="text-xs text-stone-500">We typically reply within 2 working hours.</span>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#edf6ed] text-[#256138] flex items-center justify-center mx-auto border-2 border-[#256138]"><CheckCircle2 className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold text-[#0d2818]">Message Sent Successfully!</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">Thanks <strong className="text-[#0d2818]">{fullName || 'there'}</strong>! We'll be in touch to arrange a visit.</p>
                <button onClick={() => { setIsSubmitted(false); setFullName(''); setEmail(''); setPhone(''); setPostcode(''); setAddress(''); setDetails(''); }} className="px-6 py-2.5 rounded-xl bg-[#0f2818] text-white font-bold text-sm hover:bg-[#163a23]">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#0d2818] mb-1.5">Full Name *</label>
                    <input required value={fullName} onChange={e => setFullName(e.target.value)} placeholder="John Smith" inputMode="text" autoComplete="name" className="w-full px-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e]" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0d2818] mb-1.5">Phone *</label>
                    <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="07xxx xxx xxx" inputMode="tel" autoComplete="tel" className="w-full px-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#0d2818] mb-1.5">Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@email.com" inputMode="email" autoComplete="email" className="w-full px-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e]" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0d2818] mb-1.5">Postcode *</label>
                    <input required value={postcode} onChange={e => setPostcode(e.target.value.toUpperCase())} placeholder="SL5 7AX" maxLength={8} inputMode="text" autoComplete="postal-code" className="w-full px-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0d2818] mb-1.5">Address (for visit) *</label>
                  <input required value={address} onChange={e => setAddress(e.target.value)} placeholder="10 High Street, Lindfield" autoComplete="street-address" className="w-full px-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e]" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0d2818] mb-1.5">What do you need? *</label>
                  <textarea required rows={4} value={details} onChange={e => setDetails(e.target.value)} placeholder="e.g. Scarify front lawn, cut hedges, new turf back garden..." className="w-full px-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e] resize-none" />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0f2417] font-bold text-sm shadow-sm flex items-center justify-center gap-2"><span>Send Request</span><ArrowRight className="w-4 h-4" /></button>
              </form>
            )}
          </div>

          {/* CONTACT INFO + POSTCODES + FAQ */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Channels */}
            <div className="bg-white rounded-2xl border border-[#dce3d5] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0d2818] mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                <a href="tel:+447568533301" className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f9f5] border border-[#e2e8dc] hover:bg-[#edf2ea] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#eef4ec] text-[#1c482a] flex items-center justify-center shrink-0"><Phone className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-stone-500">Call</p>
                    <p className="font-semibold text-[#0d2818]">07568 533 301</p>
                    <p className="text-[11px] text-stone-500">Mon–Fri 7am–6pm, Sat 8am–1pm</p>
                  </div>
                </a>
                <a href="https://wa.me/447568533301" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-[#25d366] text-white hover:bg-[#20ba59] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0"><MessageSquare className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-white/80">WhatsApp</p>
                    <p className="font-semibold text-white">07568 533 301</p>
                    <p className="text-[11px] text-white/70">Instant message us</p>
                  </div>
                </a>
                <a href="mailto:James@giftedgardens.biz" className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f9f5] border border-[#e2e8dc] hover:bg-[#edf2ea] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#eef4ec] text-[#1c482a] flex items-center justify-center shrink-0"><Mail className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-stone-500">Email</p>
                    <p className="font-semibold text-[#0d2818]">James@giftedgardens.biz</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f9f5] border border-[#e2e8dc]">
                  <div className="w-10 h-10 rounded-lg bg-[#eef4ec] text-[#1c482a] flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-stone-500">Based In</p>
                    <p className="font-semibold text-[#0d2818]">West Sussex</p>
                    <p className="text-[11px] text-stone-500">Covering Mid Sussex & Surrey</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Postcode Areas */}
            <div className="bg-white rounded-2xl border border-[#dce3d5] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0d2818] mb-3">Areas We Cover</h3>
              <p className="text-sm text-stone-600 mb-4">Regular weekly routes across these postcode districts:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {POSTCODE_AREAS.map(area => (
                  <div key={area.code} className="p-3 rounded-lg bg-[#f7f9f5] border border-[#e2e8dc] text-center">
                    <p className="font-bold text-[#0d2818] text-sm">{area.code}</p>
                    <p className="text-[11px] text-stone-600">{area.town}</p>
                    <p className="text-[10px] text-[#2b683e]">{area.typicalDispatchDay}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-3 text-center">Not listed? We often go further — <button onClick={onOpenQuote} className="text-[#0d2818] underline hover:text-[#e5a918]">ask us</button>.</p>
            </div>

            {/* FAQ (5 items) */}
            <div className="bg-white rounded-2xl border border-[#dce3d5] p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0d2818] mb-4">Quick Answers</h3>
              <div className="space-y-3">
                {FAQ_ITEMS.slice(0, 5).map(faq => (
                  <details key={faq.id} className="group border border-[#e2e8dc] rounded-xl bg-white">
                    <summary className="p-4 cursor-pointer list-none flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#0d2818] pr-4">{faq.question}</span>
                      <svg className="w-5 h-5 text-stone-400 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-stone-600 leading-relaxed">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}