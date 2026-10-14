import {
  ScreenMeta,
  ServiceItem,
  Testimonial,
  TeamMember,
  FAQItem,
  BeforeAfterItem,
  GalleryItem,
  PostcodeArea
} from '../types';

export const SCREENS_ORDER: ScreenMeta[] = [
  {
    id: 'home',
    order: 1,
    title: 'Home',
    shortTitle: 'Home',
    description: 'Lawn care, hedges and ground work in West Sussex and Surrey',
    badge: 'Main'
  },
  {
    id: 'services',
    order: 2,
    title: 'Services',
    shortTitle: 'Services',
    description: 'Lawn care, hedges & trees, ground work — all in one place',
    badge: 'What We Do'
  },
  {
    id: 'work',
    order: 3,
    title: 'Our Work',
    shortTitle: 'Our Work',
    description: 'Photos, before & after transformations, and client reviews',
    badge: 'Portfolio'
  },
  {
    id: 'about',
    order: 4,
    title: 'About Us',
    shortTitle: 'About',
    description: 'Local team, horticultural background, fully insured',
    badge: 'Our Story'
  },
  {
    id: 'contact',
    order: 5,
    title: 'Contact',
    shortTitle: 'Contact',
    description: 'Get a quote, check your postcode, or give us a call',
    badge: 'Get in Touch'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'scarification',
    title: 'Scarification',
    subtitle: 'Lawn Care',
    description: 'Removes thatch and moss so the lawn can breathe. Best in spring (Mar–May) or early autumn (Sep–Oct).',
    features: [
      'Mechanical removal of dead thatch and moss',
      'Opens soil surface for air, water and nutrients',
      'Oversowing included where needed',
      'All waste bagged and removed'
    ],
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80&auto=format&fit=crop',
    badgeText: 'Spring or Autumn',
    idealFor: 'Spongy lawns, heavy moss, waterlogged patches.'
  },
  {
    id: 'aeration',
    title: 'Aeration',
    subtitle: 'Lawn Care',
    description: 'Spikes or hollow cores relieve compaction and improve drainage. Best in autumn, or spring if the ground is firm.',
    features: [
      'Hollow-tine or solid-tine options',
      'Improves root depth and drought tolerance',
      'Sand top-dressing available',
      'Works well paired with scarification'
    ],
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80&auto=format&fit=crop',
    badgeText: 'Autumn Preferred',
    idealFor: 'Compacted soil, poor drainage, thin grass.'
  },
  {
    id: 'seasonal-treatments',
    title: 'Seasonal Treatments',
    subtitle: 'Lawn Care',
    description: 'Feed, weed and moss control through the year — tailored to your lawn.',
    features: [
      'Spring: nitrogen feed + pre-emergent weed control',
      'Summer: light feed + spot weed treatment',
      'Autumn: high-potash feed + moss suppression',
      'Winter: iron application for colour and strength'
    ],
    image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1200&q=80&auto=format&fit=crop',
    badgeText: '4 Visits / Year',
    idealFor: 'Lawns needing year-round nutrition and weed control.'
  },
  {
    id: 'lawn-cutting',
    title: 'Lawn Cutting',
    subtitle: 'Lawn Care',
    description: 'Regular mowing with clean edges. Weekly or fortnightly in the growing season (Mar–Oct).',
    features: [
      'Cylinder or rotary mowers matched to lawn type',
      'Crisp hand-cut or machine trench edging',
      'Clippings collected and removed',
      'Hard surfaces blown clean'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80&auto=format&fit=crop',
    badgeText: 'Weekly or Fortnightly',
    idealFor: 'Lawns that need regular, tidy maintenance.'
  },
  {
    id: 'hedge-cutting',
    title: 'Hedge Cutting',
    subtitle: 'Hedges, Trees & Shrubs',
    description: 'Formal and informal hedges. Usually once or twice a year, and avoid bird nesting season (roughly Mar–Aug).',
    features: [
      'Straight, level tops and flush sides',
      'Beech, yew, box, privet, laurel, leylandii',
      'High-reach scaffolding for tall hedges',
      'All trimmings chipped and cleared'
    ],
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop',
    badgeText: 'Avoid Mar–Aug (Nesting)',
    idealFor: 'Boundary hedges, formal topiary, overgrown restoration.'
  },
  {
    id: 'pruning',
    title: 'Pruning',
    subtitle: 'Hedges, Trees & Shrubs',
    description: 'Shaping and thinning for plant health — done at the right time for each species.',
    features: [
      'Removes dead, diseased or crossing wood',
      'Improves light and air through the canopy',
      'Encourages flowers and fruit',
      'Waste removed and recycled'
    ],
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop',
    badgeText: 'Species-Dependent Timing',
    idealFor: 'Fruit trees, ornamental trees, overgrown shrubs.'
  },
  {
    id: 'fruit-trees',
    title: 'Fruit Trees',
    subtitle: 'Hedges, Trees & Shrubs',
    description: 'Apples and pears in winter (Nov–Feb), plums and cherries in summer to avoid silver leaf disease.',
    features: [
      'Winter prune for structure and fruiting wood',
      'Summer prune for stone fruit disease prevention',
      'Trained forms (espalier, fan, cordon) maintained',
      'All prunings cleared away'
    ],
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80&auto=format&fit=crop',
    badgeText: 'Nov–Feb (Pome) / Jun–Aug (Stone)',
    idealFor: 'Apple, pear, plum, cherry, quince — garden or orchard.'
  },
  {
    id: 'shrubs',
    title: 'Shrubs',
    subtitle: 'Hedges, Trees & Shrubs',
    description: 'Spring-flowering shrubs after flowering, summer-flowering ones in late winter or early spring.',
    features: [
      'Trim to shape and encourage new flowering wood',
      'Remove old woody stems at base',
      'Mulch applied after pruning',
      'Green waste recycled'
    ],
    image: 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?w=1200&q=80&auto=format&fit=crop',
    badgeText: 'After Flowering or Late Winter',
    idealFor: 'Hydrangea, buddleia, lavender, roses, hebe, weigela.'
  },
  {
    id: 'top-dressing',
    title: 'Top Dressing',
    subtitle: 'Ground Work',
    description: 'Levels the surface and improves soil. Best in spring or autumn.',
    features: [
      'Sand/soil/compost blend matched to your soil',
      'Fills hollows after scarification or aeration',
      'Improves drainage and root zone',
      'Worked in with drag mat or lute'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&auto=format&fit=crop',
    badgeText: 'Spring or Autumn',
    idealFor: 'Uneven lawns, after scarifying, poor soil structure.'
  },
  {
    id: 'turfing',
    title: 'Turfing',
    subtitle: 'Ground Work',
    description: 'New lawns laid on prepared ground. Best in autumn and spring, avoiding hard frost and drought.',
    features: [
      'Ground cultivated, levelled and firmed',
      'Quality Rolawn or equivalent turf',
      'Laid, rolled and watered in',
      'First cut and aftercare advice included'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&auto=format&fit=crop',
    badgeText: 'Autumn or Spring',
    idealFor: 'New lawns, replacing old turf, extending grass areas.'
  },
  {
    id: 'rotovating',
    title: 'Rotovating',
    subtitle: 'Ground Work',
    description: 'Breaks up ground ready for turf or seed. Done before seeding or turfing.',
    features: [
      'Powered rotovator to 150–200mm depth',
      'Removes compaction and old root mats',
      'Stone and debris raked off',
      'Ready for seeding, turfing or planting'
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80&auto=format&fit=crop',
    badgeText: 'Before Turf or Seed',
    idealFor: 'New garden areas, compacted soil, lawn renovations.'
  },
  {
    id: 'overseeding',
    title: 'Overseeding',
    subtitle: 'Ground Work',
    description: 'Thickens thin lawns with fresh seed. Best in early autumn (right now), or spring.',
    features: [
      'Seed matched to existing grass type',
      'Applied after scarification or aeration for best contact',
      'Starter fertiliser included',
      'Watering schedule provided'
    ],
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80&auto=format&fit=crop',
    badgeText: 'Early Autumn Best',
    idealFor: 'Thin patches, after scarifying, worn high-traffic areas.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'james',
    name: 'James',
    role: 'Founder & Groundsman',
    description: 'Runs the business and oversees every lawn programme across West Sussex and Surrey.',
    funFact: 'Started mowing neighbours\' lawns at 14 and never stopped.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&auto=format&fit=crop',
    badge: 'Founder'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'David M.',
    location: 'Lindfield, West Sussex',
    rating: 5,
    timeAgo: '2 weeks ago',
    serviceTag: 'Scarification & Overseed',
    title: 'Our moss patch is now a proper lawn',
    content: 'James and the crew scarified and oversowed our back lawn in October. We thought half of it was lost to thick moss. Six weeks later it looks like a bowling green. Punctual, tidy, spotless cleanup.',
    source: 'Google Review',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Eleanor & Mark T.',
    location: 'Haywards Heath, West Sussex',
    rating: 5,
    timeAgo: '3 days ago',
    serviceTag: 'Lawn Cutting',
    title: 'Precision edging every visit',
    content: 'James comes fortnightly with the cylinder mower. The stripes are crisp, edges are sharp, and they always shut the gates so the dogs don\'t get out. Never a complaint.',
    source: 'Direct Client',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Caroline P.',
    location: 'Cuckfield, West Sussex',
    rating: 5,
    timeAgo: 'Last month',
    serviceTag: 'Hedge Cutting',
    title: 'Straight, clean 12ft yew hedges',
    content: 'Our mature yew hadn\'t been trimmed squarely in four years. They brought scaffolding and laser lines. The result is architectural perfection. All chippings taken away, courtyard left cleaner than they found it.',
    source: 'Google Review',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Julian H.',
    location: 'Virginia Water, Surrey',
    rating: 5,
    timeAgo: '3 weeks ago',
    serviceTag: 'Seasonal Treatments',
    title: 'Saved us thousands vs returfing',
    content: 'Two landscapers said we needed new turf at £6,500. James inspected the compaction and prescribed an organic treatment course. Eight weeks later the roots had recovered completely. Honest, expert advice.',
    source: 'Checkatrade',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Sarah W.',
    location: 'Burgess Hill, West Sussex',
    rating: 5,
    timeAgo: '1 month ago',
    serviceTag: 'Aeration & Feed',
    title: 'Dependable, clean-cut team',
    content: 'What stands out is respect for the property. Gates secured, machines quiet, and they explain every product applied. You get what you pay for: complete peace of mind.',
    source: 'Facebook Rec',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Dr Robert K.',
    location: 'Ardingly, West Sussex',
    rating: 5,
    timeAgo: '5 days ago',
    serviceTag: 'Turfing & Ground Work',
    title: 'Transformed our riverside grounds',
    content: 'Heavy silt and winter waterlogging by the river. James installed drainage, rotovated, top-dressed with sandy loam and laid new turf. The lawn stood firm all winter and is lush now. A proper horticultural job.',
    source: 'Google Review',
    verified: true
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'trans-1',
    title: 'Moss-Choked Lawn to Healthy Green Turf',
    location: 'West Sussex Residence',
    beforeLabel: 'Heavy Moss & Thatch',
    afterLabel: 'After Scarification & Overseed',
    timeframe: '6 Weeks',
    treatments: 'Scarify + Aerate + Overseed + Feed',
    resultMetric: '98% Moss Cleared',
    beforeImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&q=80&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&q=80&auto=format&fit=crop',
    beforeDescription: 'Thick moss layer over 25mm choked oxygen and starved grass crowns.',
    afterDescription: 'Dual-pass scarification, hollow-tining, ryegrass overseed created dense green sward.'
  },
  {
    id: 'trans-2',
    title: 'Overgrown Boundary to Formal Hedge Line',
    location: 'Lindfield Estate',
    beforeLabel: 'Untamed Hedges & Bramble',
    afterLabel: 'Laser-Levelled Formal Hedges',
    timeframe: '3 Days',
    treatments: 'Hedge Restoration + Clearance',
    resultMetric: '3.4 Tonnes Waste Removed',
    beforeImage: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1000&q=80&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1000&q=80&auto=format&fit=crop',
    beforeDescription: 'Brambles and unshaped hedges encroached 2 metres into garden borders.',
    afterDescription: 'Precision flailing and laser levelling restored sharp rectilinear borders.'
  },
  {
    id: 'trans-3',
    title: 'Bare Compacted Ground to New Turf Lawn',
    location: 'Cuckfield Family Home',
    beforeLabel: 'Baked Clay & Weeds',
    afterLabel: 'New Turf on Prepared Ground',
    timeframe: '2 Weeks Established',
    treatments: 'Rotovate + Level + Top Dress + Turf',
    resultMetric: 'Full Establishment in 14 Days',
    beforeImage: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?w=1000&q=80&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1000&q=80&auto=format&fit=crop',
    beforeDescription: 'Intense summer heat baked the clay soil; nothing would grow.',
    afterDescription: 'Rotovated, levelled, top-dressed and turfed — rooted in two weeks.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Lawn Striping',
    category: 'lawns',
    categoryLabel: 'Lawns',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631621/WhatsApp_Image_2026-10-09_at_14.26.51_zzbowp.jpg',
    location: 'Haywards Heath, West Sussex',
    description: 'Crisp cylinder mowing stripes with clean edges.'
  },
  {
    id: 'gal-2',
    title: 'Formal Hedge Shaping',
    category: 'hedges-trees',
    categoryLabel: 'Hedges & Trees',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631620/WhatsApp_Image_2026-10-09_at_14.26.51_1_gzwje5.jpg',
    location: 'Cuckfield, West Sussex',
    description: 'Levelled yew and beech hedges, all trimmings removed.'
  },
  {
    id: 'gal-3',
    title: 'Scarification & Moss Removal',
    category: 'lawns',
    categoryLabel: 'Lawns',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631620/WhatsApp_Image_2026-10-09_at_14.26.50_cvc2q9.jpg',
    location: 'Virginia Water, Surrey',
    description: 'Deep mechanical scarification, moss bagged and cleared.'
  },
  {
    id: 'gal-4',
    title: 'Seasonal Lawn Treatment',
    category: 'lawns',
    categoryLabel: 'Lawns',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631620/WhatsApp_Image_2026-10-09_at_14.26.51_2_n7kpnm.jpg',
    location: 'Wentworth, Surrey',
    description: 'Granular feed and moss control application.'
  },
  {
    id: 'gal-5',
    title: 'Hedge & Shrub Pruning',
    category: 'hedges-trees',
    categoryLabel: 'Hedges & Trees',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631620/WhatsApp_Image_2026-10-09_at_14.26.53_4_bzia7z.jpg',
    location: 'Cobham, Surrey',
    description: 'Mixed hedge line trimmed and shaped.'
  },
  {
    id: 'gal-6',
    title: 'New Turf Installation',
    category: 'ground-work',
    categoryLabel: 'Ground Work',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631620/WhatsApp_Image_2026-10-09_at_14.26.51_3_ug3j8p.jpg',
    location: 'Burgess Hill, West Sussex',
    description: 'Ground prepared, levelled and turfed.'
  },
  {
    id: 'gal-7',
    title: 'Lawn Aeration & Top Dressing',
    category: 'ground-work',
    categoryLabel: 'Ground Work',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631619/WhatsApp_Image_2026-10-09_at_14.26.52_n8engh.jpg',
    location: 'Lindfield, West Sussex',
    description: 'Hollow-tine aeration with sand top dressing.'
  },
  {
    id: 'gal-8',
    title: 'Boundary Hedge Restoration',
    category: 'hedges-trees',
    categoryLabel: 'Hedges & Trees',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631619/WhatsApp_Image_2026-10-09_at_14.26.53_2_yievzq.jpg',
    location: 'Crawley, West Sussex',
    description: 'Overgrown boundary hedge cut back hard and shaped.'
  },
  {
    id: 'gal-9',
    title: 'Overseeding & Lawn Repair',
    category: 'ground-work',
    categoryLabel: 'Ground Work',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631619/WhatsApp_Image_2026-10-09_at_14.26.53_xlfv3c.jpg',
    location: 'East Grinstead, West Sussex',
    description: 'Bare patches oversown and top dressed.'
  },
  {
    id: 'gal-10',
    title: 'Large Estate Lawn Maintenance',
    category: 'lawns',
    categoryLabel: 'Lawns',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631618/WhatsApp_Image_2026-10-09_at_14.26.54_6_vu57qn.jpg',
    location: 'Virginia Water, Surrey',
    description: 'Fortnightly cylinder mowing on 2-acre estate.'
  },
  {
    id: 'gal-11',
    title: 'Hedge Cutting & Clearance',
    category: 'hedges-trees',
    categoryLabel: 'Hedges & Trees',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631618/WhatsApp_Image_2026-10-09_at_14.26.53_1_blh1jb.jpg',
    location: 'Haywards Heath, West Sussex',
    description: 'Mixed species hedge trimmed, all waste chipped.'
  },
  {
    id: 'gal-12',
    title: 'Fruit Tree Pruning',
    category: 'hedges-trees',
    categoryLabel: 'Hedges & Trees',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631618/WhatsApp_Image_2026-10-09_at_14.26.53_3_hlnhih.jpg',
    location: 'Cuckfield, West Sussex',
    description: 'Apple and pear trees winter pruned for structure.'
  },
  {
    id: 'gal-13',
    title: 'Ground Preparation for Turf',
    category: 'ground-work',
    categoryLabel: 'Ground Work',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631617/WhatsApp_Image_2026-10-09_at_14.26.54_ygxtlz.jpg',
    location: 'Burgess Hill, West Sussex',
    description: 'Rotovated, levelled and rolled ready for turf.'
  },
  {
    id: 'gal-14',
    title: 'Lawn Renovation Complete',
    category: 'lawns',
    categoryLabel: 'Lawns',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631617/WhatsApp_Image_2026-10-09_at_14.26.54_1_i2knmh.jpg',
    location: 'Lindfield, West Sussex',
    description: 'Scarified, aerated, oversown and fed — 6 weeks later.'
  },
  {
    id: 'gal-15',
    title: 'Shrub Bed Maintenance',
    category: 'hedges-trees',
    categoryLabel: 'Hedges & Trees',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631617/WhatsApp_Image_2026-10-09_at_14.26.54_4_ind5me.jpg',
    location: 'Cobham, Surrey',
    description: 'Borders edged, mulched and shrubs trimmed.'
  },
  {
    id: 'gal-16',
    title: 'New Lawn from Seed',
    category: 'ground-work',
    categoryLabel: 'Ground Work',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631617/WhatsApp_Image_2026-10-09_at_14.26.54_11_puwt7c.jpg',
    location: 'East Grinstead, West Sussex',
    description: 'Rotovated, levelled, seeded and netted.'
  },
  {
    id: 'gal-17',
    title: 'Estate Lawn Edging',
    category: 'lawns',
    categoryLabel: 'Lawns',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631616/WhatsApp_Image_2026-10-09_at_14.26.54_2_up4eoi.jpg',
    location: 'Haywards Heath, West Sussex',
    description: 'Hand-cut trench edges along beds and paths.'
  },
  {
    id: 'gal-18',
    title: 'Leylandii Hedge Reduction',
    category: 'hedges-trees',
    categoryLabel: 'Hedges & Trees',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631616/WhatsApp_Image_2026-10-09_at_14.26.54_3_auoi3x.jpg',
    location: 'Crawley, West Sussex',
    description: 'Tall leylandii reduced and shaped.'
  },
  {
    id: 'gal-19',
    title: 'Top Dressing Application',
    category: 'ground-work',
    categoryLabel: 'Ground Work',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631616/WhatsApp_Image_2026-10-09_at_14.26.54_5_tqoq5n.jpg',
    location: 'Cuckfield, West Sussex',
    description: 'Sand/loam top dressing worked into surface.'
  },
  {
    id: 'gal-20',
    title: 'Complete Garden Transformation',
    category: 'ground-work',
    categoryLabel: 'Ground Work',
    image: 'https://res.cloudinary.com/h0krm6ex/image/upload/v1791631615/WhatsApp_Image_2026-10-09_at_14.26.54_7_ztzj5y.jpg',
    location: 'Burgess Hill, West Sussex',
    description: 'Rotovated, turfed, edged and planted borders.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'Do I need to be home when you visit?',
    answer: 'No. As long as we have side-gate access and any exterior tap/power needed, we\'ll get on with it. We secure all gates, blow patios clean, and send a completion photo to your phone or email.',
    category: 'booking',
    tags: ['Access', 'Security']
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'What happens if it rains on my scheduled day?',
    answer: 'Mowing waterlogged ground damages soil and turf. If heavy rain makes work inadvisable we\'ll message before 7:30am and reschedule within 24–48 hours as priority.',
    category: 'weather',
    tags: ['Rain policy', 'Rescheduling']
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'When is the best time to scarify?',
    answer: 'Early autumn (late Aug–Oct) is ideal — warm soil, less weed pressure, natural moisture for seed. Spring (Mar–Apr) is the second window. We avoid summer heat and winter frost.',
    category: 'treatments',
    tags: ['Scarification', 'Timing']
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'Do you take away all clippings and waste?',
    answer: 'Yes. We\'re a registered Environment Agency Upper-Tier Waste Carrier. Every clipping, moss tuft, hedge trimming and turf offcut is recycled into commercial compost at local facilities.',
    category: 'aftercare',
    tags: ['Waste', 'Green waste']
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'Are treatments safe for dogs and children?',
    answer: 'Yes. We use organic-first bio-nutrients and selective herbicides. Once liquid sprays are touch-dry (2–3 hours), the lawn is safe for pets and family.',
    category: 'treatments',
    tags: ['Pet-safe', 'Child-safe', 'Organic']
  }
];

export const POSTCODE_AREAS: PostcodeArea[] = [
  { code: 'KT11', town: 'Cobham & Oxshott', typicalDispatchDay: 'Wed & Fri', inRadius: true },
  { code: 'RH10', town: 'Crawley (West Sussex)', typicalDispatchDay: 'Tue & Thu', inRadius: true },
  { code: 'RH11', town: 'Crawley (West Sussex)', typicalDispatchDay: 'Tue & Thu', inRadius: true },
  { code: 'RH16', town: 'Haywards Heath (Mid Sussex)', typicalDispatchDay: 'Wed', inRadius: true },
  { code: 'RH17', town: 'Burgess Hill (Mid Sussex)', typicalDispatchDay: 'Wed', inRadius: true },
  { code: 'RH19', town: 'East Grinstead (Mid Sussex)', typicalDispatchDay: 'Thu', inRadius: true },
  { code: 'KT24', town: 'Leatherhead (Surrey)', typicalDispatchDay: 'Fri', inRadius: true },
  { code: 'KT16', town: 'Chertsey (Surrey)', typicalDispatchDay: 'Fri', inRadius: true },
  { code: 'KT17', town: 'Epsom (Surrey)', typicalDispatchDay: 'Fri', inRadius: true },
  { code: 'KT18', town: 'Epsom Downs (Surrey)', typicalDispatchDay: 'Fri', inRadius: true },
  { code: 'KT19', town: 'Epsom (Surrey)', typicalDispatchDay: 'Fri', inRadius: true },
  { code: 'KT20', town: 'Tadworth (Surrey)', typicalDispatchDay: 'Fri', inRadius: true },
  { code: 'RH1', town: 'Redhill (Surrey)', typicalDispatchDay: 'Thu', inRadius: true },
  { code: 'RH2', town: 'Reigate (Surrey)', typicalDispatchDay: 'Thu', inRadius: true },
  { code: 'RH5', town: 'Dorking (Surrey)', typicalDispatchDay: 'Thu', inRadius: true }
];

export const CERTIFICATIONS = [
  {
    title: 'Fully Insured',
    detail: '£5M Public Liability',
    icon: 'ShieldCheck'
  },
  {
    title: 'RHS Trained',
    detail: 'PA1/PA6 Spray Certified',
    icon: 'Award'
  },
  {
    title: 'Commercial Machinery',
    detail: 'Camon, Hayter, Allett',
    icon: 'Wrench'
  },
  {
    title: 'Licensed Waste Carrier',
    detail: 'Environment Agency Registered',
    icon: 'Recycle'
  }
];