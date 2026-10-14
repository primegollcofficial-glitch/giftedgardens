import React from 'react';
import { ArrowRight, Scissors, Sprout, Leaf, Calendar, TreePine, Flower, Layers, Wrench } from 'lucide-react';
import { ScreenId } from '../types';

interface ServicesScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenQuote: () => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ onOpenQuote }) => {
  const lawnCareServices = [
    { title: 'Scarification', icon: <Sprout className="w-5 h-5" />, info: 'Removes thatch and moss so the lawn can breathe. Best in spring (Mar–May) or early autumn (Sep–Oct).' },
    { title: 'Aeration', icon: <Leaf className="w-5 h-5" />, info: 'Spikes or hollow cores relieve compaction and improve drainage. Best in autumn, or spring if the ground is firm.' },
    { title: 'Seasonal Treatments', icon: <Calendar className="w-5 h-5" />, info: 'Feed, weed and moss control through the year — tailored to your lawn.' },
    { title: 'Lawn Cutting', icon: <Scissors className="w-5 h-5" />, info: 'Regular mowing with clean edges. Weekly or fortnightly in the growing season (Mar–Oct).' },
  ];

  const hedgeTreeShrub = [
    { title: 'Hedge Cutting', icon: <Scissors className="w-5 h-5" />, info: 'Formal and informal hedges. Usually once or twice a year, and avoid bird nesting season (roughly Mar–Aug).' },
    { title: 'Pruning', icon: <TreePine className="w-5 h-5" />, info: 'Shaping and thinning for plant health — done at the right time for each species.' },
    { title: 'Fruit Trees', icon: <TreePine className="w-5 h-5" />, info: 'Apples and pears in winter (Nov–Feb), plums and cherries in summer to avoid silver leaf disease.' },
    { title: 'Shrubs', icon: <Flower className="w-5 h-5" />, info: 'Spring-flowering shrubs after flowering, summer-flowering ones in late winter or early spring.' },
  ];

  const groundWork = [
    { title: 'Top Dressing', icon: <Layers className="w-5 h-5" />, info: 'Levels the surface and improves soil. Best in spring or autumn.' },
    { title: 'Turfing', icon: <Sprout className="w-5 h-5" />, info: 'New lawns laid on prepared ground. Best in autumn and spring, avoiding hard frost and drought.' },
    { title: 'Rotovating', icon: <Wrench className="w-5 h-5" />, info: 'Breaks up ground ready for turf or seed. Done before seeding or turfing.' },
    { title: 'Overseeding', icon: <Sprout className="w-5 h-5" />, info: 'Thickens thin lawns with fresh seed. Best in early autumn (right now), or spring.' },
  ];

  const Section = ({ title, services }: { title: string; services: typeof lawnCareServices }) => (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-[#0d2818]">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <article key={s.title} className="bg-white rounded-xl border border-[#dce3d5] p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-[#eef4ec] text-[#1c482a] flex items-center justify-center">{s.icon}</div>
              <h3 className="text-base font-bold text-[#0d2818]">{s.title}</h3>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">{s.info}</p>
          </article>
        ))}
      </div>
    </section>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
      <header className="text-center space-y-3 mt-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0d2818]">Our Services</h1>
        <p className="text-stone-600">Simple, straightforward garden care. Tell us what you need — we'll arrange a visit.</p>
      </header>

      <Section title="Lawn Care" services={lawnCareServices} />
      <Section title="Hedges, Trees & Shrubs" services={hedgeTreeShrub} />
      <Section title="Ground Work" services={groundWork} />

      <footer className="text-center pt-6 border-t border-[#e5ebdf]">
        <button onClick={onOpenQuote} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0f2417] font-bold text-sm">
          Get a Free Quote
          <ArrowRight className="w-4 h-4" />
        </button>
        <p className="text-xs text-stone-500 mt-2">Just write what you need — we'll call to arrange a visit</p>
        <p className="text-xs text-stone-500 mt-3 uppercase tracking-widest font-semibold">
          Serving <span className="text-[#0d2818] font-bold">West Sussex</span>, <span className="text-[#0d2818] font-bold">Mid Sussex</span> & <span className="text-[#0d2818] font-bold">Surrey</span>
        </p>
      </footer>
    </div>
  );
};