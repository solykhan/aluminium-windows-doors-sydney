export type Block =
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string; by: string; role: string }
  | { type: "faq"; items: { q: string; a: string }[] };

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string;
  updated: string;
  readingTime: number;
  image: string;
  author: { name: string; role: string; bio: string };
  keywords: string[];
  quickAnswer: string;
  toc: string[];
  content: Block[];
  relatedProducts: string[];
}

export const articles: Article[] = [
  {
    slug: "aluminium-windows-and-doors-sydney-complete-guide",
    title: "Aluminium Windows and Doors in Sydney: The Complete Buyer's Guide (2026)",
    metaTitle: "Aluminium Windows and Doors in Sydney | 2026 Guide — CWD",
    metaDescription:
      "The definitive guide to aluminium windows and doors in Sydney: types, glass options, AS 2047 & AS 1288 compliance, costs per m2, energy performance and how to choose a supplier. Expert advice from CWD Sydney.",
    excerpt:
      "Everything Sydney homeowners, builders and business owners need to know about choosing, pricing and installing aluminium windows and doors — types, standards, costs and supplier selection.",
    category: "Buying Guides",
    date: "2026-08-01",
    updated: "2026-08-03",
    readingTime: 14,
    image: "/images/blog-commercial-skyline.jpg",
    author: {
      name: "CWD Projects Team",
      role: "Commercial Glazing Specialists, Sydney",
      bio: "The CWD Projects Team has supplied and installed commercial aluminium windows and doors across Sydney for over a decade — from Eastern Suburbs shopfronts and office fit-outs to schools, medical facilities and multi-residential developments. Every project is measured, fabricated and installed by our own in-house team.",
    },
    keywords: [
      "aluminium windows and doors sydney",
      "aluminium windows sydney",
      "aluminium doors sydney",
      "bifold doors sydney",
      "AS 2047 windows",
      "aluminium window cost per m2",
    ],
    quickAnswer:
      "Aluminium windows and doors in Sydney are durable, low-maintenance glazing systems built with powder-coated aluminium frames to Australian Standards AS 2047 and AS 1288 — the most popular choice for Sydney homes and businesses thanks to their strength, slim sightlines and resistance to coastal corrosion. Expect to pay $350-$900 per square metre for windows and $1,200-$8,500 per door system, supplied and installed, depending on style, glass and size.",
    toc: [
      "Why aluminium is Sydney's favourite window and door material",
      "Main types used in Sydney homes and buildings",
      "Glass options for commercial glazing",
      "The Australian Standards that matter",
      "How much do aluminium windows and doors cost in Sydney?",
      "Energy rules: NCC Section J and BASIX",
      "How to choose an aluminium window and door supplier",
      "Frequently asked questions",
    ],
    content: [
      {
        type: "h2",
        id: "what-counts",
        text: "Why aluminium is Sydney's favourite window and door material",
      },
      {
        type: "p",
        text: "Aluminium dominates Sydney's window and door market for practical reasons: it never rots, warps or needs painting; powder-coated frames shrug off salt air that destroys timber and corrodes steel; and its strength allows slimmer frames and bigger glass than any other material at the price. Whether it's a beachside apartment in Coogee or a family home in Randwick, aluminium delivers decades of service with nothing more than an occasional wash.",
      },
      {
        type: "callout",
        title: "Direct answer",
        text: "Every aluminium window and door installed in NSW should comply with AS 2047 (performance) and AS 1288 (glass selection) — and your installer should hand over certificates proving it. This applies to homes just as much as commercial buildings.",
      },
      {
        type: "h2",
        id: "types",
        text: "Main types of aluminium windows and doors used in Sydney",
      },
      {
        type: "p",
        text: "Sydney homes and buildings use a consistent set of aluminium systems. The right choice depends on your opening, exposure, budget and how you use the space:",
      },
      {
        type: "table",
        caption: "Common aluminium window and door types and where they're used",
        head: ["System", "Best for", "Key strength"],
        rows: [
          ["Fixed & structural glazing", "Facades, display frontages, atriums", "Maximum glass area, best seal, lowest cost per m2"],
          ["Awning & casement windows", "Offices, schools, clinics", "Weather-tight ventilation, strong acoustic seal"],
          ["Sliding windows & doors", "Apartments, balconies, tenancies", "Space-saving, robust, low maintenance"],
          ["Hinged & French doors", "Retail entries, fire exits, service doors", "Tightest seal, takes closers & panic hardware"],
          ["Frameless glass doors", "Shopfronts, lobbies, showrooms", "Premium all-glass appearance"],
          ["Bifold & stacker doors", "Hospitality, alfresco dining, showrooms", "Opens whole frontage to footpath or terrace"],
          ["Automatic doors", "High-traffic retail & medical entries", "Hands-free access, DDA compliant"],
        ],
      },
      {
        type: "h2",
        id: "glass",
        text: "Glass options for commercial glazing",
      },
      {
        type: "p",
        text: "Glass does most of the work in any window or door system. In Sydney, the specification usually comes down to four variables: safety, energy, acoustics and security.",
      },
      {
        type: "list",
        items: [
          "Toughened glass — Grade A safety glass, 4-5x stronger than annealed; the baseline for doors and low-level glazing under AS 1288.",
          "Laminated glass (6.38mm-12.5mm) — two sheets bonded with a PVB interlayer; holds together when broken, improves security and reduces noise.",
          "Double glazed units (IGUs) — two panes with a sealed argon gap; cuts heat transfer by over 50% and is the default for energy-efficient commercial builds.",
          "Low-E coated glass — a microscopically thin metallic coating that reflects heat; the single biggest energy upgrade for west-facing Sydney facades.",
          "Acoustic laminated (e.g. 6.5mm-10.5mm VLam Hush) — interlayers tuned for sound; essential near arterial roads, rail lines and flight paths.",
          "Tinted & obscure glass — solar control and privacy for street frontages, bathrooms and consulting rooms.",
        ],
      },
      {
        type: "h2",
        id: "standards",
        text: "The Australian Standards that matter",
      },
      {
        type: "p",
        text: "Compliance is where professional suppliers separate themselves from the rest. These are the standards your certifier, insurer and future buyer will care about:",
      },
      {
        type: "table",
        caption: "Key standards for commercial windows and doors in NSW",
        head: ["Standard", "Covers", "Why it matters"],
        rows: [
          ["AS 2047", "Windows and external glazed doors in buildings", "Structural, water penetration and air infiltration performance — required for compliance certificates"],
          ["AS 1288", "Glass in buildings — selection and installation", "Correct glass type and thickness for every pane; legal safety baseline"],
          ["AS 1428.1", "Design for access and mobility", "Threshold heights, clear openings and door forces for public access"],
          ["NCC Section J", "Energy efficiency of commercial buildings", "Maximum U-values and solar heat gain for glazing"],
          ["AS 3959", "Construction in bushfire-prone areas", "BAL-rated glazing for at-risk sites, e.g. BAL-40"],
          ["AS 1170.2", "Wind actions", "Wind load engineering for large and exposed panes"],
        ],
      },
      {
        type: "quote",
        text: "On any glazing job, the glass and frame are only half the product. The other half is documentation — glazing certificates, AS 2047 compliance, energy data. If your supplier can't hand over that paperwork at completion, you don't have a compliant installation.",
        by: "CWD Projects Team",
        role: "Commercial Glazing Specialists",
      },
      {
        type: "h2",
        id: "costs",
        text: "How much do aluminium windows and doors cost in Sydney?",
      },
      {
        type: "p",
        text: "Every opening is quoted individually, but these 2026 Sydney ranges are a reliable budgeting guide for aluminium windows and doors, supplied and professionally installed:",
      },
      {
        type: "table",
        caption: "2026 Sydney price guide — supplied & installed (AUD, ex GST)",
        head: ["Item", "Typical range", "Notes"],
        rows: [
          ["Aluminium windows (residential)", "$350 - $700 per m2", "Single glazed; add $150-$350/m2 for double glazing"],
          ["Commercial aluminium windows", "$450 - $900 per m2", "Heavier sections for high-traffic buildings"],
          ["Fixed structural glazing", "$450 - $900 per m2", "Depends on glass thickness & engineering"],
          ["Aluminium hinged / entry door", "$1,200 - $5,500 per door", "Residential to commercial specifications"],
          ["Frameless glass door", "$2,000 - $5,000 per panel", "10-12mm toughened, patch or floor spring"],
          ["Shopfront (frame + door + glazing)", "$8,000 - $25,000 per frontage", "Size and automation dependent"],
          ["Bifold / stacker door systems", "$1,000 - $1,800 per linear metre", "Hospitality & showroom frontages"],
          ["Automatic sliding door", "$8,000 - $15,000 per opening", "Including operator & safety sensors"],
        ],
      },
      {
        type: "callout",
        title: "Budgeting tip",
        text: "Glass specification is the biggest cost lever. Upgrading from standard glass to double glazed Low-E typically adds 25-40% to the cost but can halve heat gain through the glass — most clients feel the comfort difference immediately, especially in west-facing rooms.",
      },
      {
        type: "h2",
        id: "energy",
        text: "Energy rules: NCC Section J and BASIX",
      },
      {
        type: "p",
        text: "New homes in NSW assess glazing under BASIX, and commercial buildings under NCC Section J — both cap thermal performance (U-value) and solar heat gain (SHGC) based on glazing area and orientation. In practice, most new Sydney builds now require double glazing, Low-E coatings, or both. Renovations have more flexibility, but high-performance glass is the direction the rules keep pushing.",
      },
      {
        type: "p",
        text: "A competent supplier models glazing performance early — changing glass spec at documentation stage costs nothing; changing it after fabrication costs thousands. CWD provides glazing performance data (U-value, SHGC, VLT) with every commercial quote.",
      },
      {
        type: "h2",
        id: "choose-supplier",
        text: "How to choose an aluminium window and door supplier in Sydney",
      },
      {
        type: "p",
        text: "Five questions separate genuine window and door specialists from generalists:",
      },
      {
        type: "list",
        items: [
          "Do they fabricate and install with their own team, or subcontract? In-house teams control quality and program.",
          "Can they supply AS 2047 compliance certificates and AS 1288 glazing certificates at handover?",
          "Do they carry appropriate licensing and insurance for commercial sites (NSW contractor licence, public liability, workers comp)?",
          "Will they provide an itemised fixed quote after a real site measure — not a guess over the phone?",
          "Can they stage work out of hours so your business or tenants aren't disrupted?",
        ],
      },
      {
        type: "p",
        text: "CWD Commercial Windows and Doors Sydney answers yes to all five. We measure free, quote fixed prices itemised by opening, fabricate to order, install with our own crew — including out-of-hours work for trading businesses — and hand over full compliance documentation at completion.",
      },
      {
        type: "h2",
        id: "faqs",
        text: "Frequently asked questions",
      },
      {
        type: "faq",
        items: [
          {
            q: "What are aluminium windows and doors?",
            a: "They are windows and doors built with powder-coated aluminium frames and safety glass, compliant with AS 2047 (performance) and AS 1288 (glass selection). Aluminium is Sydney's most popular framing material because it's strong, slim, rust-resistant and virtually maintenance-free — ideal for the local climate including coastal conditions.",
          },
          {
            q: "How much do aluminium windows and doors cost in Sydney?",
            a: "As of 2026, aluminium windows typically cost $350-$900 per square metre supplied and installed in Sydney, while aluminium doors range from $1,200-$8,500+ per opening depending on style. Bifold and pivot doors sit at the premium end; sliding windows and doors are the most affordable. Glass specification is the biggest cost variable.",
          },
          {
            q: "Do aluminium windows need to be double glazed in NSW?",
            a: "For new homes, BASIX energy requirements often push towards double glazing or Low-E glass. Existing homes replacing like-for-like can often stay single glazed, though upgrading usually pays back through comfort and energy savings — especially on west-facing rooms and noisy streets.",
          },
          {
            q: "How long does a commercial window or shopfront installation take?",
            a: "Fabrication typically takes 2-4 weeks from confirmed measure. On-site installation runs from a single day for a shopfront door to 1-2 weeks for a full glazed facade, and can be staged out of hours so your business keeps trading.",
          },
          {
            q: "What areas of Sydney does CWD service?",
            a: "CWD services all of Sydney with a focus on the Eastern Suburbs — Vaucluse, Watsons Bay, Double Bay, Rose Bay, Bondi, Bondi Junction, Coogee, Maroubra, Randwick, Paddington, Darlinghurst, Potts Point and surrounding suburbs.",
          },
        ],
      },
    ],
    relatedProducts: ["commercial-windows-and-doors", "frameless-doors", "hinged-doors", "fixed-windows"],
  },
  {
    slug: "double-glazed-windows-sydney-worth-it",
    title: "Double Glazed Windows in Sydney: Cost, Benefits & Whether They're Worth It",
    metaTitle: "Double Glazed Windows Sydney — Cost & Benefits Guide | CWD",
    metaDescription:
      "What double glazing costs in Sydney, how much noise and heat it actually cuts, and when it's worth the upgrade. Practical advice from Sydney glazing specialists.",
    excerpt:
      "Sydney pricing, real performance numbers and honest advice on when double glazing pays for itself — and when single glazing is still the right call.",
    category: "Windows",
    date: "2026-07-22",
    updated: "2026-07-22",
    readingTime: 7,
    image: "/images/blog-double-glazing-benefits.jpg",
    author: {
      name: "CWD Projects Team",
      role: "Commercial Glazing Specialists, Sydney",
      bio: "The CWD Projects Team has supplied and installed aluminium windows and doors across Sydney for over a decade.",
    },
    keywords: ["double glazed windows sydney", "double glazing cost sydney", "is double glazing worth it"],
    quickAnswer:
      "Double glazed windows cost $550-$1,100 per square metre installed in Sydney (2026), roughly $150-$350/m2 more than single glazing. They cut heat transfer by over 50%, reduce outside noise dramatically, and are effectively required on most new builds by energy rules — making them worth it for most Sydney homes.",
    toc: ["What double glazing actually does", "Sydney costs in 2026", "When it's worth it", "FAQ"],
    content: [
      { type: "h2", text: "What double glazing actually does" },
      {
        type: "p",
        text: "A double glazed unit (IGU) seals two panes of glass around an argon-filled gap. That gap is the insulator: it slows heat passing through the window by more than half compared with a single pane, and the two-pane mass damps sound. Add a Low-E coating and summer heat gain drops further — critical for Sydney's west-facing rooms.",
      },
      {
        type: "list",
        items: [
          "Heat transfer reduced by 50%+ (and up to 70% with Low-E)",
          "Noticeable noise reduction — typically 30-40% perceived reduction for traffic",
          "Far less internal condensation on winter mornings",
          "Higher energy ratings for BASIX and NCC compliance",
        ],
      },
      { type: "h2", text: "Sydney costs in 2026" },
      {
        type: "table",
        caption: "Double glazing upgrade cost guide (supplied & installed)",
        head: ["Scenario", "Typical cost", "Notes"],
        rows: [
          ["Upgrade from single glazing", "+$150-$350 per m2", "Depends on IGU thickness & Low-E"],
          ["Complete double glazed window", "$550-$1,100 per m2", "Style and size dependent"],
          ["Double glazed bifold door", "$1,200-$1,900 per linear m", "Including heavy-duty rollers"],
          ["Acoustic laminated IGU upgrade", "+$80-$180 per m2", "For flight-path & traffic noise"],
        ],
      },
      { type: "h2", text: "When it's worth it — and when it's not" },
      {
        type: "p",
        text: "Double glazing is clearly worth it for bedrooms, west and north-facing rooms, homes near traffic or flight paths, and any new build or major renovation (where energy rules effectively require it). Single glazing can still make sense for garages, investment properties on tight budgets and mild-exposure secondary rooms — with the option to upgrade later.",
      },
      {
        type: "quote",
        text: "Clients always ask about the payback. The honest answer: you'll feel the comfort difference the day it goes in, and the energy savings build from there. Nobody has ever told us they regretted double glazing a bedroom.",
        by: "CWD Projects Team",
        role: "Commercial Glazing Specialists",
      },
      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "How much do double glazed windows cost in Sydney?",
            a: "Complete double glazed aluminium windows cost $550-$1,100 per square metre installed in Sydney as of 2026 — roughly $150-$350 per square metre more than single glazed equivalents.",
          },
          {
            q: "Does double glazing really reduce noise?",
            a: "Yes. A standard IGU reduces perceived outside noise by roughly 30-40%, and acoustic laminated IGUs can do substantially better — the difference is clearly audible on busy Sydney roads and under flight paths.",
          },
          {
            q: "Can I double glaze just some rooms?",
            a: "Absolutely — and it's a smart strategy. Prioritise bedrooms and hot west-facing rooms first; other windows can be upgraded later in matching frames.",
          },
        ],
      },
    ],
    relatedProducts: ["double-glazed-windows", "single-glazed-windows", "awning-windows", "sliding-windows"],
  },
  {
    slug: "as-2047-as-1288-window-compliance-guide",
    title: "AS 2047 & AS 1288 Explained: Window and Glass Compliance in Plain English",
    metaTitle: "AS 2047 & AS 1288 Window Compliance Guide | CWD Sydney",
    metaDescription:
      "What AS 2047 and AS 1288 actually require for windows and glass in NSW buildings, what certificates you should receive, and why it matters for insurance and resale.",
    excerpt:
      "The two standards every Sydney window and door must meet, translated into plain English — plus the paperwork you should demand from your installer.",
    category: "Compliance",
    date: "2026-07-10",
    updated: "2026-07-10",
    readingTime: 6,
    image: "/images/blog-compliance-check.jpg",
    author: {
      name: "CWD Projects Team",
      role: "Commercial Glazing Specialists, Sydney",
      bio: "The CWD Projects Team has supplied and installed compliant glazing across Sydney for over a decade.",
    },
    keywords: ["AS 2047", "AS 1288", "window compliance nsw", "glazing certificate"],
    quickAnswer:
      "AS 2047 is the Australian Standard for window and external glazed door performance (strength, water and air sealing). AS 1288 governs glass selection and installation — what type and thickness of glass is legal and safe in each location. Every window and door installed in NSW should comply with both, and your installer should provide certificates proving it.",
    toc: ["AS 2047 in plain English", "AS 1288 in plain English", "Certificates you should receive", "FAQ"],
    content: [
      { type: "h2", text: "AS 2047 in plain English" },
      {
        type: "p",
        text: "AS 2047 (Windows and external glazed doors in buildings) sets the performance a window or door must demonstrate: structural strength against wind, resistance to water penetration, and limits on air leakage. Products are tested and rated — a window suitable for a sheltered suburban wall is not automatically suitable for an exposed clifftop in Dover Heights.",
      },
      { type: "h2", text: "AS 1288 in plain English" },
      {
        type: "p",
        text: "AS 1288 (Glass in buildings — selection and installation) dictates what glass can go where. Larger panes need thicker glass; doors and low-level glazing need Grade A safety glass (toughened or laminated); overhead and balustrade glass have their own rules. Installing the wrong glass isn't just dangerous — it's non-compliant, and it can void insurance.",
      },
      { type: "h2", text: "Certificates you should receive" },
      {
        type: "list",
        items: [
          "AS 2047 compliance certificate for the window/door system installed",
          "AS 1288 glazing certificate confirming correct glass selection",
          "Energy performance data (U-value, SHGC) where NCC Section J or BASIX applies",
          "BAL compliance documentation for bushfire-prone sites (AS 3959)",
        ],
      },
      {
        type: "callout",
        title: "Why it matters",
        text: "Non-compliant glazing can fail building inspections, complicate insurance claims after breakage or storm damage, and surface as a defect when you sell. CWD supplies compliance documentation with every installation as standard.",
      },
      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "Do replacement windows need to comply with AS 2047?",
            a: "Yes — replacement windows and doors in NSW must meet current standards regardless of the age of the building, including AS 2047 performance and AS 1288 glass selection.",
          },
          {
            q: "What is a glazing certificate?",
            a: "A glazing certificate is a document from your installer confirming the glass installed meets AS 1288 for its location and size. You should receive one with every installation — ask for it before final payment.",
          },
          {
            q: "Who checks window compliance in NSW?",
            a: "Certifiers check compliance on new builds and renovations requiring approval. For replacements, compliance rests with the licensed installer — which is why choosing an installer who documents their work matters.",
          },
        ],
      },
    ],
    relatedProducts: ["commercial-windows-and-doors", "bal-40-windows", "double-glazed-windows", "fixed-windows"],
  },
  {
    slug: "bal-40-windows-bushfire-rated-guide",
    title: "BAL Ratings Explained: Choosing Bushfire-Rated Windows and Doors",
    metaTitle: "BAL-40 Windows & Bushfire Ratings Explained | CWD Sydney",
    metaDescription:
      "What BAL-12.5 through BAL-40 ratings mean for your windows and doors, what AS 3959 requires, and what bushfire-rated glazing costs in Sydney.",
    excerpt:
      "Bushfire Attack Levels decoded — what each BAL rating demands of your glazing, and how to comply without over-spending.",
    category: "Compliance",
    date: "2026-06-28",
    updated: "2026-06-28",
    readingTime: 6,
    image: "/images/blog-bushfire-balcony.jpg",
    author: {
      name: "CWD Projects Team",
      role: "Commercial Glazing Specialists, Sydney",
      bio: "The CWD Projects Team supplies compliant bushfire-rated glazing across Sydney's prone areas.",
    },
    keywords: ["BAL-40 windows", "bushfire rated windows", "AS 3959 glazing"],
    quickAnswer:
      "A BAL (Bushfire Attack Level) rating measures your site's bushfire exposure from BAL-LOW to BAL-FZ. BAL-40 — exposure to radiant heat up to 40kW/m2 — requires windows with bushfire-rated glazing, non-combustible frames, specific seals and ember screens under AS 3959. BAL-rated windows typically cost 40-80% more than standard windows in Sydney.",
    toc: ["What the BAL ratings mean", "What AS 3959 requires at each level", "Costs", "FAQ"],
    content: [
      { type: "h2", text: "What the BAL ratings mean" },
      {
        type: "table",
        caption: "Bushfire Attack Levels and what they mean for glazing",
        head: ["Rating", "Exposure", "Glazing implication"],
        rows: [
          ["BAL-LOW", "Minimal risk", "Standard glazing acceptable"],
          ["BAL-12.5", "Ember attack", "Ember screens; toughened glass recommended"],
          ["BAL-19", "Heat + embers", "Toughened glass, screened openable parts"],
          ["BAL-29", "Higher radiant heat", "Upgraded glass systems, non-combustible frames"],
          ["BAL-40", "Up to 40kW/m2 + flame contact risk", "Bushfire-rated glazing systems, ember-proof screens, sealed construction"],
          ["BAL-FZ", "Flame zone", "Specialist fire-rated systems — engineer-led design"],
        ],
      },
      { type: "h2", text: "What AS 3959 requires at each level" },
      {
        type: "p",
        text: "AS 3959 scales requirements with attack level. The consistent themes: aluminium (non-combustible) frames suit all ratings; openable windows need ember screening with stainless or bronze mesh; glass must be toughened or thicker as ratings climb; and at BAL-40 the entire system — frame, glass, seals and screens — must work together as a tested, compliant assembly.",
      },
      { type: "h2", text: "What bushfire-rated windows cost" },
      {
        type: "p",
        text: "In Sydney, BAL-40 rated windows typically run $700-$1,300 per square metre installed — roughly 40-80% above standard windows. Lower ratings add less. Because requirements scale steeply, an accurate BAL assessment matters: over-specifying wastes money, under-specifying fails certification.",
      },
      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "How do I find my property's BAL rating?",
            a: "Your BAL is determined by a bushfire assessment, usually prepared during the DA process and shown on your planning documents. Your council or certifier can confirm it, or a bushfire consultant can assess your site.",
          },
          {
            q: "Can aluminium windows be BAL-40 compliant?",
            a: "Yes — aluminium is non-combustible and ideal for bushfire areas. BAL-40 compliance comes from the complete system: bushfire-rated glass, compliant seals, ember screens and correct installation, all documented to AS 3959.",
          },
          {
            q: "Do I need special screens for bushfire areas?",
            a: "From BAL-12.5 up, openable windows generally require ember screens made from non-corroding metal mesh with apertures of 2mm or less. We supply compliant stainless mesh screens with all BAL-rated installations.",
          },
        ],
      },
    ],
    relatedProducts: ["bal-40-windows", "double-glazed-windows", "awning-windows", "fixed-windows"],
  },
  {
    slug: "shopfront-doors-guide-sydney",
    title: "Choosing Shopfront Doors and Windows for Sydney Retail & Hospitality",
    metaTitle: "Shopfront Doors & Windows Sydney — Buyer's Guide | CWD",
    metaDescription:
      "How to choose shopfront glazing for Sydney retail and hospitality: hinged vs frameless vs bifold fronts, glass safety rules, accessibility, security and costs.",
    excerpt:
      "The practical guide to shopfront glazing — entry door options, safety glass rules, DDA access, security and what a Sydney shopfront costs in 2026.",
    category: "Buying Guides",
    date: "2026-06-15",
    updated: "2026-06-15",
    readingTime: 7,
    image: "/images/blog-shopfront-design.jpg",
    author: {
      name: "CWD Projects Team",
      role: "Commercial Glazing Specialists, Sydney",
      bio: "The CWD Projects Team builds shopfronts across Sydney's Eastern Suburbs retail strips.",
    },
    keywords: ["shopfront doors sydney", "shopfront glazing", "retail entry doors"],
    quickAnswer:
      "A Sydney shopfront combines commercial framing, Grade A safety glass (AS 1288), an accessible entry door (AS 1428) and appropriate security glass. Hinged doors suit most entries ($2,500-$5,500), frameless doors give a premium look ($2,000-$5,000 per panel), and bifold fronts open hospitality venues to the street. Complete shopfronts typically cost $8,000-$25,000 installed.",
    toc: ["Entry door options", "Safety and accessibility rules", "Security choices", "Costs", "FAQ"],
    content: [
      { type: "h2", text: "Entry door options" },
      {
        type: "list",
        items: [
          "Hinged commercial doors — the reliable default; takes closers, locks and panic hardware; best weather seal.",
          "Frameless glass doors — premium all-glass look for boutiques and showrooms.",
          "Automatic sliding doors — hands-free access for high-traffic retail and medical.",
          "Bifold & stacker fronts — cafes, bars and restaurants opening to footpath dining.",
        ],
      },
      { type: "h2", text: "Safety and accessibility rules" },
      {
        type: "p",
        text: "Shopfront glass must be Grade A safety glass to AS 1288 — toughened or laminated — and large frameless panels need manifestation (visible strips or decals) so people don't walk into them. Entries serving the public must meet AS 1428.1: compliant threshold heights, clear opening widths and door forces. These aren't optional — your certifier and insurer both care.",
      },
      { type: "h2", text: "Security choices" },
      {
        type: "p",
        text: "Laminated glass is the shopfront security standard: it holds together under attack, buying time and denying entry. Pair it with quality commercial locks, and consider security film or mesh for high-risk locations. For after-hours protection without shutters, 10.5mm+ laminated glass keeps the display visible while remaining highly resistant.",
      },
      { type: "h2", text: "What a shopfront costs in Sydney (2026)" },
      {
        type: "table",
        caption: "Shopfront cost guide — supplied & installed",
        head: ["Component", "Typical range"],
        rows: [
          ["Commercial hinged entry door", "$2,500 - $5,500"],
          ["Frameless glass door", "$2,000 - $5,000 per panel"],
          ["Fixed shopfront glazing", "$450 - $900 per m2"],
          ["Automatic sliding entry", "$8,000 - $15,000"],
          ["Complete shopfront package", "$8,000 - $25,000"],
        ],
      },
      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "Can a shopfront be replaced while the business stays open?",
            a: "Yes — we stage shopfront work out of hours (early mornings, evenings, weekends) and secure openings same-day, so trading continues throughout the project.",
          },
          {
            q: "What glass is legally required in a shopfront?",
            a: "Grade A safety glass to AS 1288 — toughened or laminated. Doors and adjacent panels need safety glass without exception, and frameless panels require visible manifestation.",
          },
          {
            q: "How long does a shopfront replacement take?",
            a: "Fabrication runs 2-4 weeks from measure; on-site installation typically takes 1-3 days for a standard frontage, staged to keep you trading.",
          },
        ],
      },
    ],
    relatedProducts: ["hinged-doors", "frameless-doors", "bifold-doors", "commercial-windows-and-doors"],
  },
  {
    slug: "coastal-window-maintenance-sydney",
    title: "Coastal Care: Maintaining Aluminium Windows and Doors Near the Beach",
    metaTitle: "Aluminium Window Maintenance for Coastal Sydney | CWD",
    metaDescription:
      "How to protect aluminium windows and doors from salt air in Sydney's beachside suburbs — cleaning schedules, hardware care, and the finishes that last.",
    excerpt:
      "Salt air is glazing's biggest enemy on Sydney's coast. Here's the maintenance routine and the specifications that keep windows and doors performing for decades.",
    category: "Maintenance",
    date: "2026-06-02",
    updated: "2026-06-02",
    readingTime: 5,
    image: "/images/blog-coastal-maintenance.jpg",
    author: {
      name: "CWD Projects Team",
      role: "Commercial Glazing Specialists, Sydney",
      bio: "The CWD Projects Team installs and services coastal glazing across Sydney's Eastern Suburbs.",
    },
    keywords: ["aluminium window maintenance", "coastal window care", "salt air windows sydney"],
    quickAnswer:
      "In Sydney's beachside suburbs, aluminium windows and doors should be washed with fresh water and mild detergent every 3 months (monthly within 500m of the surf), tracks and rollers cleaned and lubricated twice a year, and hardware inspected annually. Marine-grade powder coating and 316 stainless hardware are essential specifications for coastal longevity.",
    toc: ["The coastal maintenance schedule", "Hardware & track care", "Specifying for salt air", "FAQ"],
    content: [
      { type: "h2", text: "The coastal maintenance schedule" },
      {
        type: "list",
        items: [
          "Monthly (within 500m of surf): rinse frames and glass with fresh water; wipe dry.",
          "Quarterly: wash frames with mild car-wash detergent; never use abrasives or solvents on powder coat.",
          "Twice yearly: vacuum tracks, clean rollers, apply silicone spray to moving parts.",
          "Annually: check hardware, locks and fasteners for corrosion; tighten and replace as needed.",
        ],
      },
      { type: "h2", text: "Hardware & track care" },
      {
        type: "p",
        text: "Rollers, locks and hinges are the first casualties of salt air. A twice-yearly clean and silicone lubrication takes ten minutes per door and prevents the gritty, hard-to-slide doors that plague beachside homes. Stainless (316 grade) hardware resists corrosion far better than standard plated components — worth every cent near the water.",
      },
      { type: "h2", text: "Specifying for salt air" },
      {
        type: "p",
        text: "If you're within a kilometre or two of the ocean, specification matters more than maintenance: marine-grade (or super-durable) powder coating, 316 stainless screws and hardware, sealed roller assemblies and anodised options for severe exposure. Specified correctly, coastal aluminium glazing should deliver 20+ years of service.",
      },
      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "How often should coastal windows be cleaned?",
            a: "Rinse monthly if you're within 500 metres of the surf, and wash with mild detergent at least quarterly. Salt build-up left on frames accelerates coating breakdown and hardware corrosion.",
          },
          {
            q: "My sliding door is hard to slide — is it the salt air?",
            a: "Very likely. Dirty tracks and corroded rollers are the usual cause. Clean the track, lubricate with silicone spray, and if the door still drags, the rollers need adjustment or replacement — a quick service call.",
          },
          {
            q: "Can corroded powder coating be repaired?",
            a: "Minor chalking cleans up; advanced corrosion usually means refinishing or replacement. Prevention — marine-grade coating and regular rinsing — is far cheaper than cure.",
          },
        ],
      },
    ],
    relatedProducts: ["sliding-doors", "bifold-doors", "awning-windows", "retractable-flyscreens"],
  },
  {
    slug: "aluminium-window-styles-compared",
    title: "Aluminium Window Styles Compared: Sliding vs Awning vs Casement vs Louvre",
    metaTitle: "Window Styles Compared — Sliding, Awning, Casement, Louvre | CWD",
    metaDescription:
      "Sliding vs awning vs casement vs double hung vs louvre windows: ventilation, sealing, cost and best uses compared for Sydney homes and buildings.",
    excerpt:
      "The five most common window styles head-to-head — which opens widest, seals tightest, and suits each room and budget.",
    category: "Windows",
    date: "2026-05-20",
    updated: "2026-05-20",
    readingTime: 6,
    image: "/images/blog-window-styles.jpg",
    author: {
      name: "CWD Projects Team",
      role: "Commercial Glazing Specialists, Sydney",
      bio: "The CWD Projects Team manufactures every major window style for Sydney projects.",
    },
    keywords: ["window styles compared", "sliding vs awning windows", "best windows for sydney homes"],
    quickAnswer:
      "Sliding windows are the most affordable and low-maintenance; awning windows ventilate in rain and seal best for noise; casements open widest and catch breezes; double hungs offer top-and-bottom ventilation control for heritage styles; louvres move the most air. Most Sydney homes mix styles room by room.",
    toc: ["Head-to-head comparison", "Which style for which room", "FAQ"],
    content: [
      { type: "h2", text: "Head-to-head comparison" },
      {
        type: "table",
        caption: "Common aluminium window styles compared",
        head: ["Style", "Openable area", "Weather seal", "Cost per m2 (Sydney)", "Best for"],
        rows: [
          ["Sliding", "~50%", "Good", "$350-$700", "General use, tight spaces, screens"],
          ["Awning", "~60-80%", "Excellent", "$400-$800", "Wet-weather ventilation, acoustics"],
          ["Casement", "~100%", "Excellent", "$450-$850", "Catching breezes, character homes"],
          ["Double hung", "~50%", "Good", "$500-$950", "Heritage styles, airflow control"],
          ["Louvre", "~100%", "Good (modern systems)", "$550-$1,000", "Maximum airflow, coastal homes"],
          ["Fixed", "0%", "Best", "$300-$600", "Views, light, efficiency pairing"],
        ],
      },
      { type: "h2", text: "Which style for which room" },
      {
        type: "list",
        items: [
          "Bedrooms: awning or casement with acoustic glass — best sealed for sleep.",
          "Kitchens: sliding or servery styles over benches; awnings elsewhere.",
          "Bathrooms: awnings or louvres with obscure glass; both ventilate well.",
          "Living areas: fixed picture panes paired with openable windows — the efficiency sweet spot.",
          "Coastal/exposed sites: awnings and quality sliders; marine-grade finishes throughout.",
        ],
      },
      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "Which window style is most energy efficient?",
            a: "Fixed windows seal best, followed by awning and casement styles on compression seals. Any style gains hugely from double glazing — the glass matters more than the style for energy performance.",
          },
          {
            q: "Which windows are best for noise?",
            a: "Awning and casement windows, because their compression seals close tightest, paired with acoustic laminated or double glazing. Sliding windows can also perform well with quality seals and IGUs.",
          },
          {
            q: "Can I mix window styles in one house?",
            a: "Yes — and you should. Matching frame colours and sightlines keeps the look cohesive while each room gets the style that suits its use, orientation and exposure.",
          },
        ],
      },
    ],
    relatedProducts: ["sliding-windows", "awning-windows", "casement-windows", "louvre-windows"],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
