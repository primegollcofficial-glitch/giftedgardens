import React, { useState } from 'react';
import { X, Phone, Clock, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [timePreference, setTimePreference] = useState('Morning (08:00 - 12:00)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Callback Request from ${name}`;
    const body = `Callback Request\n\nName: ${name}\nPhone: ${phone}\nPreferred time: ${timePreference}`;
    const mailtoUrl = `mailto:James@giftedgardens.biz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    try {
      confetti({ particleCount: 50, spread: 50 });
    } catch {}
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#d6dfce] overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="bg-[#0f2818] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1b4329] text-[#e5a918] flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base">Request a Call Back</h3>
              <p className="text-[11px] text-[#e5a918]">Direct groundsman consultation</p>
            </div>
          </div>
          <button onClick={handleClose} className="text-stone-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#edf6ed] text-[#256138] flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h4 className="text-lg font-bold text-[#0d2818]">Call Back Requested!</h4>
              <p className="text-xs text-stone-600">
                James will call <strong>{phone}</strong> during the requested window ({timePreference}).
              </p>
              <button
                onClick={handleClose}
                className="mt-4 px-5 py-2 bg-[#0f2818] text-white font-bold rounded-xl text-xs"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Smith"
                  className="w-full px-3 py-2 rounded-lg border border-[#cdd8c8] text-sm focus:outline-hidden focus:border-[#1b4329]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 07700 900123"
                  className="w-full px-3 py-2 rounded-lg border border-[#cdd8c8] text-sm focus:outline-hidden focus:border-[#1b4329]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Preferred Time Window</label>
                <select
                  value={timePreference}
                  onChange={(e) => setTimePreference(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#cdd8c8] text-sm bg-white focus:outline-hidden focus:border-[#1b4329]"
                >
                  <option>Morning (08:00 - 12:00)</option>
                  <option>Afternoon (12:00 - 16:30)</option>
                  <option>Evening (16:30 - 18:30)</option>
                  <option>ASAP (Within 2 Hours)</option>
                </select>
              </div>

              <div className="bg-[#f7f9f4] p-3 rounded-lg border border-[#dce3d5] text-[11px] text-stone-600 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#205330] shrink-0" />
                <span>Zero sales pressure. Straightforward advice from certified grounds crew.</span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#0f2818] hover:bg-[#183d25] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Confirm Call Back Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
