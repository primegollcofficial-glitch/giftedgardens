import React, { useState } from 'react';
import { X, Check, ArrowRight, User, Phone, MapPin, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Quote Request from ${name}`;
    const body = `New Quote Request\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nPostcode: ${postcode}\nAddress: ${address}\n\nDetails:\n${details}`;
    const mailtoUrl = `mailto:James@giftedgardens.biz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch { }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setName(''); setPhone(''); setEmail(''); setPostcode(''); setAddress(''); setDetails('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#d6dfce] overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        <div className="bg-[#0f2818] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1b4329] border border-[#2e5d3c] flex items-center justify-center text-[#e5a918]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Get a Free Quote</h2>
              <p className="text-xs text-stone-300">We'll arrange a visit</p>
            </div>
          </div>
          <button onClick={resetAndClose} className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-5">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#eef6ed] border-2 border-[#2b683e] text-[#2b683e] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0d2818]">Request Sent</h3>
              <p className="text-sm text-stone-600">Thanks <strong className="text-[#0d2818]">{name || 'there'}</strong>! We'll call to arrange a visit.</p>
              <button onClick={resetAndClose} className="px-6 py-2.5 rounded-xl bg-[#0f2818] text-white font-bold text-sm hover:bg-[#163a23]">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#0d2818] mb-1.5">Your Name *</label>
                <div className="relative"><User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input required value={name} onChange={e => setName(e.target.value)} placeholder="John Smith" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e]" /></div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0d2818] mb-1.5">Phone *</label>
                <div className="relative"><Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="07xxx xxx xxx" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e]" /></div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0d2818] mb-1.5">Email</label>
                <div className="relative"><Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@email.com" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e]" /></div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0d2818] mb-1.5">Postcode *</label>
                <input required value={postcode} onChange={e => setPostcode(e.target.value.toUpperCase())} placeholder="SL5 7AX" maxLength={8} className="w-full px-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0d2818] mb-1.5">Address (for visit) *</label>
                <div className="relative"><MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input required value={address} onChange={e => setAddress(e.target.value)} placeholder="10 High Street, Lindfield" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e]" /></div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0d2818] mb-1.5">What do you need? *</label>
                <textarea required rows={4} value={details} onChange={e => setDetails(e.target.value)} placeholder="e.g. Scarify front lawn, cut hedges, new turf back garden..." className="w-full px-4 py-2.5 rounded-xl border border-[#d2d9c9] bg-white text-sm text-[#0d2818] focus:outline-none focus:ring-2 focus:ring-[#2b683e]/20 focus:border-[#2b683e] resize-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0f2417] font-bold text-sm shadow-sm flex items-center justify-center gap-2"><span>Send Request</span><ArrowRight className="w-4 h-4" /></button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};