export interface ProductFaq {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  short: string;
  category: "Commercial" | "Doors" | "Windows" | "Specialty";
  image: string;
  tagline: string;
  intro: string;
  body: string[];
  features: string[];
  applications: string[];
  options: string;
  faqs: ProductFaq[];
  related: string[];
}

export const products: Product[] = [
  {
    slug: "commercial-windows-and-doors",
    name: "Commercial Windows and Doors",
    short: "Commercial aluminium windows & doors",
    category: "Commercial",
    image: "/images/hero-commercial.jpg",
    tagline: "Sydney's complete commercial glazing supply & install service",
    intro:
      "CWD Commercial Windows and Doors Sydney designs, supplies and installs commercial-grade aluminium window and door systems for offices, retail shopfronts, hospitality venues, schools, medical facilities and multi-residential projects across Sydney. Every system is engineered to Australian Standards including AS 2047 (windows and external glazed doors) and AS 1288 (glass selection), fabricated from heavy-duty Australian aluminium and glazed to suit your energy, acoustic and security requirements.",
    body: [
      "Commercial glazing is not residential glazing scaled up. Commercial windows and doors must carry bigger spans, heavier glass, higher wind loads, disabled-access thresholds, fire and bushfire ratings, and the daily punishment of high-traffic use. Our commercial systems use thicker aluminium sections, commercial-grade hardware, and glazing options from 6.38mm laminated through to double glazed units with Low-E coatings.",
      "From a single shopfront replacement in Bondi Junction to a full curtain of commercial windows for an Eastern Suburbs apartment block, our in-house team measures, fabricates and installs — one accountable point of contact from quote to handover. We work directly with builders, architects, strata managers and business owners, and we can stage installations out of hours so your trade is never interrupted.",
      "Every commercial installation is backed by compliance documentation: glazing certificates to AS 1288, window and door compliance to AS 2047, and energy report support for Section J / NCC requirements on new commercial builds.",
    ],
    features: [
      "Heavy-duty commercial aluminium framing systems",
      "Glazing to AS 1288 — toughened, laminated & double glazed IGU options",
      "AS 2047 compliant with structural and water penetration ratings",
      "Accessible thresholds meeting AS 1428 disability access requirements",
      "Acoustic glazing options up to Rw 45+ for traffic and flight-path noise",
      "Out-of-hours and staged installation for trading businesses",
    ],
    applications: [
      "Office buildings & commercial fit-outs",
      "Retail shopfronts & hospitality venues",
      "Schools, childcare & medical facilities",
      "Strata & multi-residential developments",
    ],
    options:
      "Frames: commercial 101.6mm+ sections, anodised or powder-coated in any Dulux/Interpon colour. Glazing: single glazed 6mm-12mm, or double glazed units up to 28mm with Low-E, tinted, acoustic laminated or obscure glass. Hardware: commercial locks, panic egress, automatic door operators.",
    faqs: [
      {
        q: "What makes a window or door 'commercial grade'?",
        a: "Commercial-grade systems use thicker aluminium sections (typically 101.6mm or greater), heavier-duty hardware rated for high-cycle use, and glazing engineered to AS 1288 for larger pane sizes and higher wind loads. They are tested to AS 2047 for structural performance, water penetration and air infiltration at commercial ratings.",
      },
      {
        q: "Do commercial windows and doors in Sydney need to meet specific standards?",
        a: "Yes. Key standards are AS 2047 (windows and external glazed doors in buildings), AS 1288 (glass in buildings — selection and installation), AS 1428 (access for people with disability) for thresholds and door hardware, and NCC Section J for energy efficiency. Bushfire-prone sites also require BAL-rated systems to AS 3959. We supply compliance documentation with every commercial installation.",
      },
      {
        q: "How much do commercial aluminium windows and doors cost in Sydney?",
        a: "As a guide, commercial aluminium windows typically range from $450-$900 per square metre supplied and installed, and commercial door systems from $2,500-$8,500+ per opening depending on size, glazing type and hardware. We provide a free site measure and itemised fixed quote.",
      },
      {
        q: "Can you replace shopfront windows while we keep trading?",
        a: "Yes. We regularly stage commercial installations out of hours — early mornings, evenings or weekends — and secure openings same-day so your business keeps trading throughout the project.",
      },
    ],
    related: ["frameless-doors", "hinged-doors", "fixed-windows", "double-glazed-windows"],
  },
  {
    slug: "bifold-doors",
    name: "Bifold Doors",
    short: "Aluminium bifold doors",
    category: "Doors",
    image: "/images/bifold-doors.jpg",
    tagline: "Fold your wall away and open up to the outdoors",
    intro:
      "Aluminium bifold doors fold and stack neatly to one or both sides, opening up to 90% of the doorway to merge indoor and outdoor spaces. CWD supplies and installs custom bifold door systems across Sydney's Eastern Suburbs — engineered for smooth operation, slim sightlines and serious durability in coastal conditions.",
    body: [
      "Bifold doors are the signature opening of Sydney indoor-outdoor living — from harbourside entertaining decks in Vaucluse to courtyard cafes in Paddington. Our bifold systems run on precision stainless-steel rollers with top-hung or bottom-rolling configurations, so even large 6-8 panel walls glide open with one hand.",
      "Every set is custom-made to your opening: panel counts from 2 to 8+, opening in or out, stacking left, right or split, with a traffic door option for everyday access without folding the whole wall. Glazing options include double glazing, Low-E, acoustic laminated and bushfire-rated glass to BAL-40.",
    ],
    features: [
      "Up to 90% clear opening — panels fold and stack compactly",
      "Slim 50mm-60mm sightlines maximise glass and views",
      "Traffic door option for quick everyday access",
      "Marine-grade powder coating for coastal Sydney homes",
      "Multi-point locking and toughened safety glass as standard",
      "Double glazed, acoustic and BAL-rated glazing options",
    ],
    applications: [
      "Living rooms opening to decks & gardens",
      "Restaurant & cafe shopfronts",
      "Entertaining areas & pool houses",
      "Harbourside & beachside renovations",
    ],
    options:
      "2-8+ panels, open in/out, stack left/right/split. Standard, double glazed or acoustic glazing. Flush or weathered thresholds. Powder-coated in any Dulux colour including Monument, Surfmist and black anodised finishes.",
    faqs: [
      {
        q: "How much do bifold doors cost in Sydney?",
        a: "Quality aluminium bifold doors supplied and installed in Sydney typically range from $1,100-$1,800 per linear metre, depending on panel count, glazing type and hardware. A standard 3-metre opening usually lands between $3,500 and $6,500 fully installed. We confirm an exact fixed price after a free measure.",
      },
      {
        q: "What is the maximum size for bifold doors?",
        a: "Individual panels can be manufactured up to around 1,000mm wide and 2,700mm high in residential systems, and wider with commercial sections. Total openings of 8 metres or more are achievable with engineered head supports — we assess the structural requirements at measure.",
      },
      {
        q: "Are bifold doors secure?",
        a: "Yes. Modern bifold doors use multi-point locking that bolts panels at top and bottom, internally glazed toughened or laminated safety glass, and concealed hinges. Laminated glass options make forced entry significantly harder than older sliding door setups.",
      },
      {
        q: "Do bifold doors suit coastal suburbs like Bondi or Coogee?",
        a: "Absolutely — with the right specification. We use marine-grade powder coating, 316 stainless hardware and sealed rollers that resist salt air corrosion, which is essential within a few kilometres of the coast.",
      },
    ],
    related: ["bifold-windows", "sliding-stacking-doors", "french-doors", "retractable-flyscreens"],
  },
  {
    slug: "sliding-doors",
    name: "Sliding Doors",
    short: "Aluminium sliding doors",
    category: "Doors",
    image: "/images/sliding-doors.jpg",
    tagline: "Effortless glide, space-saving design",
    intro:
      "Aluminium sliding doors are Sydney's most practical patio and balcony door — large glass panels that glide smoothly on tracks without swinging into your living space. CWD's sliding door systems combine slim frames, big spans and reliable hardware built for daily use.",
    body: [
      "Sliding doors remain the workhorse of Sydney homes and apartments for good reason: no swing clearance, huge glass area, and simple robust operation. Our systems run on adjustable carriages with quality rollers that keep panels gliding for decades, not years.",
      "Choose from two, three or four-panel configurations, standard or cavity stacking arrangements, and glazing from clear toughened to acoustic laminated double glazed units — ideal for traffic noise along busy Eastern Suburbs corridors.",
    ],
    features: [
      "Zero swing clearance — perfect for balconies & tight decks",
      "Large panel sizes up to 3 metres wide per panel",
      "Adjustable heavy-duty rollers for lasting smooth glide",
      "Multi-point locks and anti-lift security blocks",
      "Double glazing and acoustic options for noise control",
      "Integrated flyscreen or retractable screen compatibility",
    ],
    applications: [
      "Apartment balconies & terraces",
      "Backyard patios & alfresco areas",
      "Strata unit upgrades & replacements",
      "Commercial tenancy rear access",
    ],
    options:
      "2, 3 or 4 panels; single or double track; standard or heavy-duty commercial sections; single or double glazed; full Dulux powder-coat colour range.",
    faqs: [
      {
        q: "How much do sliding doors cost in Sydney?",
        a: "Aluminium sliding doors supplied and installed generally range from $900-$1,500 per linear metre in Sydney. A typical 2.4m two-panel door lands around $2,500-$4,000 installed, depending on glazing and site conditions.",
      },
      {
        q: "Sliding doors vs bifold doors — which is better?",
        a: "Sliding doors are more affordable, lower maintenance and better for tight spaces, but only open around 50% of the frame. Bifolds cost more but open up to 90% for a true indoor-outdoor connection. We install both and can advise based on your opening, budget and how you use the space.",
      },
      {
        q: "Can old sliding doors be replaced without rebuilding the frame?",
        a: "In most cases, yes. We measure the existing opening and manufacture a new door to suit, removing the old unit and refitting with new flashing and sealing — usually completed in a single day.",
      },
    ],
    related: ["sliding-stacking-doors", "bifold-doors", "sliding-windows", "retractable-flyscreens"],
  },
  {
    slug: "sliding-stacking-doors",
    name: "Sliding Stacking Doors",
    short: "Sliding stacker doors",
    category: "Doors",
    image: "/images/sliding-stacking-doors.jpg",
    tagline: "Big openings, panels that stack out of the way",
    intro:
      "Sliding stacking doors (stacker doors) give you the wide clear opening of a bifold with the simple glide of a slider — panels slide along a multi-track frame and stack behind each other. They're a favourite for wide Sydney openings where swing room is limited.",
    body: [
      "Stacker doors use three or more tracks so panels slide and park behind a fixed panel, clearing roughly two-thirds of the opening. They handle very wide spans — 6 metres and beyond — with lighter per-panel weight than bifolds and no folding hardware to maintain.",
      "For Eastern Suburbs homes with harbour or ocean views, stackers deliver huge uninterrupted glass with slim interlocks, plus easy integration of flyscreens on the outer track.",
    ],
    features: [
      "Clears ~66% of very wide openings",
      "Handles spans of 6m+ with ease",
      "Simple sliding operation — no folding hardware",
      "Slim interlock sightlines keep views open",
      "Flyscreen track built into the frame",
      "Double glazed and acoustic options available",
    ],
    applications: [
      "Wide living room openings to decks",
      "Beachside homes in Maroubra & Coogee",
      "Harbourside apartments with big spans",
      "Commercial hospitality fronts",
    ],
    options:
      "3 or 6 panel configurations on triple tracks; open from left, right or centre; single or double glazed; screen-ready frames; full colour range.",
    faqs: [
      {
        q: "What's the difference between sliding and sliding stacking doors?",
        a: "A standard slider moves one or two panels on a double track, opening about 50% of the frame. A stacker adds a third track so multiple panels slide and stack together, opening roughly two-thirds of the frame — ideal for wider openings.",
      },
      {
        q: "How much do stacker doors cost in Sydney?",
        a: "Sliding stacking doors typically cost $1,000-$1,600 per linear metre installed in Sydney. A 4.5m three-panel stacker commonly falls between $4,500 and $7,000 depending on glazing.",
      },
      {
        q: "Can stacker doors have flyscreens?",
        a: "Yes — the multi-track frame is designed for it. A dedicated outer track carries sliding flyscreen panels, or you can upgrade to a retractable screen that spans the full opening.",
      },
    ],
    related: ["sliding-doors", "bifold-doors", "sliding-stacking-windows", "retractable-flyscreens"],
  },
  {
    slug: "hinged-doors",
    name: "Hinged Doors",
    short: "Aluminium hinged doors",
    category: "Doors",
    image: "/images/hinged-doors.jpg",
    tagline: "Classic entry performance, commercial strength",
    intro:
      "Aluminium hinged doors are the dependable choice for front entries, shopfronts and commercial access points — a single or double door on heavy-duty hinges with commercial locks and closers. CWD builds hinged door systems for homes, retail and offices across Sydney.",
    body: [
      "From a boutique Double Bay shopfront to a rear-of-house commercial entry, hinged doors deliver the tightest seal and the simplest, most robust operation of any door type. Ours are built on commercial sections that take high-traffic hardware: lever handles, mortice locks, panic egress and door closers.",
      "Double (French-style) hinged doors create a grand 1.8m+ clear opening for retail and hospitality, while glazed panel options keep entries bright without sacrificing security.",
    ],
    features: [
      "Single or double (French) door configurations",
      "Commercial hinges, closers & locking hardware",
      "Disabled-access compliant thresholds to AS 1428",
      "Excellent weather and acoustic sealing",
      "Toughened or laminated safety glazing",
      "Sidelites and highlight windows available",
    ],
    applications: [
      "Retail & shopfront entries",
      "Office & commercial access doors",
      "Residential front and laundry doors",
      "Fire-isolated & service corridors",
    ],
    options:
      "Single, pair or door-plus-sidelite layouts; open in/out; manual or automatic closers; panic hardware; single or double glazed; any powder-coat colour.",
    faqs: [
      {
        q: "How much do aluminium hinged doors cost in Sydney?",
        a: "A residential hinged door typically costs $1,200-$2,500 installed, while commercial shopfront hinged doors with closers and commercial locks range from $2,500-$5,500 depending on size and hardware.",
      },
      {
        q: "Can hinged doors meet disability access requirements?",
        a: "Yes. We fit low-profile thresholds, 850mm+ clear openings, lever handles and compliant door closer forces to meet AS 1428.1 for accessible entrances — essential for most commercial premises.",
      },
      {
        q: "Are hinged doors better than sliding for shops?",
        a: "For primary customer entries, hinged (or automatic) doors are generally preferred: they seal better, take panic egress hardware, and present a more inviting entry. Sliding or frameless systems suit wide display frontages.",
      },
    ],
    related: ["french-doors", "pivot-doors", "frameless-doors", "commercial-windows-and-doors"],
  },
  {
    slug: "french-doors",
    name: "French Doors",
    short: "Aluminium French doors",
    category: "Doors",
    image: "/images/french-doors.jpg",
    tagline: "Timeless double doors, modern aluminium strength",
    intro:
      "Aluminium French doors pair two hinged glass panels that open from the centre — the classic entrance to gardens, courtyards and balconies, reimagined in low-maintenance aluminium. CWD custom-builds French doors for Sydney's heritage terraces, family homes and boutique commercial spaces.",
    body: [
      "French doors bring symmetry and charm that no other door style matches: open both panels for a wide, welcoming entrance, or use one leaf for everyday access. In aluminium they keep the classic look — slim rails, colonial bar options, heritage colours — without the swelling, sticking and repainting of timber.",
      "For Paddington and Woollahra-era terraces opening to courtyards, or family homes connecting living rooms to gardens across the Eastern Suburbs, French doors deliver light, ventilation and character in one move. Glazing options include double glazing, laminated security glass and obscure panels.",
    ],
    features: [
      "Classic double-door opening from the centre",
      "Slim aluminium rails maximise glass area",
      "Colonial bar & heritage profile options",
      "Open one or both leaves as needed",
      "Multi-point locking on both panels",
      "Double glazed & obscure glass options",
    ],
    applications: [
      "Terrace homes opening to courtyards",
      "Living rooms connecting to gardens",
      "Balcony & verandah access",
      "Boutique retail & studio entries",
    ],
    options:
      "Open in or out; equal or offset leaf widths; colonial glazing bars; sidelites and highlights; heritage colours (white, cream, primrose) or contemporary black/grey; single or double glazed.",
    faqs: [
      {
        q: "How much do French doors cost in Sydney?",
        a: "Aluminium French doors typically cost $2,000-$4,500 per pair supplied and installed in Sydney, depending on size, glazing and hardware. Heritage profiles with colonial bars and double glazing sit at the higher end.",
      },
      {
        q: "Are aluminium French doors better than timber?",
        a: "For most Sydney homes, yes. Aluminium never swells, sticks or needs repainting — critical in humid and coastal conditions — while modern heritage profiles and colonial bars replicate the classic timber look. Timber suits strict heritage restorations; aluminium suits everywhere else.",
      },
      {
        q: "Can French doors be secure?",
        a: "Yes — modern French doors use multi-point locking that bolts both leaves at top, centre and bottom, plus toughened or laminated safety glass. Properly specified, they're as secure as any hinged entry door.",
      },
      {
        q: "Can French doors have flyscreens?",
        a: "Yes — retractable flyscreens are the ideal match, spanning the double opening and rolling away invisible when not in use. Hinged screen doors are the alternative for high-traffic use.",
      },
    ],
    related: ["hinged-doors", "pivot-doors", "bifold-doors", "retractable-flyscreens"],
  },
  {
    slug: "pivot-doors",
    name: "Pivot Doors",
    short: "Architectural pivot doors",
    category: "Doors",
    image: "/images/pivot-doors.jpg",
    tagline: "A statement entrance that moves like silk",
    intro:
      "Pivot doors rotate on a concealed pivot instead of side hinges, allowing oversized, heavy panels to open with fingertip ease. CWD's aluminium and glass pivot doors create architectural entrances for Sydney homes and premium commercial spaces.",
    body: [
      "A pivot door is the entrance people remember. Because the weight carries through the floor pivot rather than the jamb, panels can go far bigger than hinged doors — 1.5m wide and 2.7m high or more — in glass, aluminium-framed glass, or solid aluminium cladding.",
      "We engineer each pivot system for its panel weight and wind exposure, with soft-close pivots, drop seals and multi-point locking so the drama never comes at the cost of security or weatherproofing.",
    ],
    features: [
      "Oversized panels up to 1.5m+ wide",
      "Concealed floor & head pivot hardware",
      "Soft-close and hold-open functionality",
      "Glass, aluminium or clad panel designs",
      "Multi-point locking for real security",
      "Engineered for wind load on exposed sites",
    ],
    applications: [
      "Luxury home front entries",
      "Architect-designed harbour-view homes",
      "Boutique hotel & showroom entries",
      "Premium office lobbies",
    ],
    options:
      "Panel widths to 1,500mm+, heights to 3,000mm with engineering; framed or frameless glass; solid aluminium or timber-look clad panels; custom handle rails to 1.8m.",
    faqs: [
      {
        q: "How much does a pivot door cost in Sydney?",
        a: "Quality pivot door systems in Sydney typically range from $4,500-$12,000+ installed depending on size, material and hardware. Large glass or engineered clad panels sit at the higher end. We quote after a site measure and structural check.",
      },
      {
        q: "Are pivot doors weather-sealed?",
        a: "Yes — modern pivot systems use compression drop seals, perimeter brush seals and engineered thresholds. They seal very well, though on extremely exposed coastal sites we'll discuss threshold and drainage detailing to match conditions.",
      },
      {
        q: "Can a pivot door be used as a front door?",
        a: "Absolutely — that's their most popular use. With multi-point locking and laminated security glass options, a pivot entry is every bit as secure as a conventional hinged front door.",
      },
    ],
    related: ["hinged-doors", "frameless-doors", "fixed-windows", "shaped-windows"],
  },
  {
    slug: "frameless-doors",
    name: "Frameless Doors",
    short: "Frameless glass doors",
    category: "Doors",
    image: "/images/frameless-doors.jpg",
    tagline: "Pure glass, zero visual interruption",
    intro:
      "Frameless glass doors use thick toughened glass with minimal patch fittings instead of aluminium frames — the premium choice for office entries, shopfronts and interiors where a seamless glass look matters. CWD supplies and installs frameless door systems across Sydney.",
    body: [
      "Frameless doors are the language of modern commercial design: 10-12mm toughened glass, polished edges, and discreet stainless patch or rail fittings. Paired with frameless sidelites and transoms, they create shopfronts and lobbies that read as one continuous sheet of glass.",
      "We engineer each frameless installation to AS 1288 with the correct glass thickness for the span and wind load, soft-close hydraulic patch or floor-spring hardware, and compliant manifestation (safety decals) where required.",
    ],
    features: [
      "10mm-12mm toughened glass panels",
      "Minimal stainless patch or rail fittings",
      "Soft-close floor springs & hydraulic patches",
      "Seamless integration with frameless shopfronts",
      "Lockable patch fittings & electric strike options",
      "AS 1288 compliant with safety manifestation",
    ],
    applications: [
      "Retail shopfronts & showrooms",
      "Office & lobby entrances",
      "Internal office partitions & meeting rooms",
      "Restaurants, gyms & studios",
    ],
    options:
      "Swing or sliding frameless panels; patch, rail or channel fittings; clear, low-iron, tinted or frosted glass; printed manifestation strips; manual or automatic operation.",
    faqs: [
      {
        q: "Are frameless glass doors safe?",
        a: "Yes. They use Grade A toughened safety glass to AS 1288 — typically 10-12mm — which is five times stronger than standard glass and crumbles safely if ever broken. We also fit compliant glass manifestation so panels are visible.",
      },
      {
        q: "How much do frameless glass doors cost in Sydney?",
        a: "Frameless glass doors typically range from $2,000-$5,000 per panel installed, depending on glass thickness, hardware (patch vs floor spring) and whether sidelites or automation are included.",
      },
      {
        q: "Can frameless doors be locked?",
        a: "Yes — lockable patch fittings, floor locks and electric strikes integrated with access control systems are all available, making frameless doors suitable for secure commercial entries.",
      },
    ],
    related: ["hinged-doors", "pivot-doors", "fixed-windows", "commercial-windows-and-doors"],
  },
  {
    slug: "cavity-doors",
    name: "Cavity Doors",
    short: "Cavity sliding doors",
    category: "Doors",
    image: "/images/cavity-doors.jpg",
    tagline: "Doors that disappear into the wall",
    intro:
      "Cavity doors slide into a hidden pocket inside the wall, freeing up the floor space a swinging door would steal. CWD supplies and installs aluminium and glass cavity door systems for Sydney homes, offices and hospitality fit-outs.",
    body: [
      "In tight Eastern Suburbs terraces, apartments and commercial tenancies, a cavity slider can reclaim up to a square metre of usable floor per doorway. Glass cavity doors go further — sharing light between rooms while still closing off space when needed.",
      "Our systems use smooth top-hung tracks with quality rollers and soft-close options, sized for standard and oversized openings, with aluminium-framed glass panels that match your window and door suite.",
    ],
    features: [
      "Panel slides fully into the wall cavity",
      "Reclaims swing space in tight floor plans",
      "Aluminium-framed glass or solid panels",
      "Soft-close & simultaneous open options",
      "Top-hung tracks — no floor channel to trip on",
      "Matches your aluminium window & door finishes",
    ],
    applications: [
      "Apartment ensuites, laundries & robes",
      "Office meeting rooms & partitions",
      "Restaurant & clinic consulting rooms",
      "Terrace renovations & granny flats",
    ],
    options:
      "Single or double (bi-parting) cavities; clear, frosted or reeded glass; soft-close both directions; cavity kits for new walls or retrofit where structure allows.",
    faqs: [
      {
        q: "Can a cavity door be retrofitted to an existing wall?",
        a: "Often, yes — but the wall must be non-load-bearing or be modified by a builder, and the cavity needs to be free of plumbing and wiring. We assess feasibility at the measure and can work with your builder on the framing.",
      },
      {
        q: "How much do cavity sliding doors cost in Sydney?",
        a: "Aluminium-framed glass cavity doors typically range from $1,500-$3,500 per doorway supplied and installed, including the cavity track kit, depending on panel size and glass type.",
      },
      {
        q: "Are glass cavity doors private enough for bathrooms?",
        a: "With frosted, reeded or switchable electric glass they offer full privacy while still passing light. Electric (switchable) glass goes from clear to opaque at the touch of a button.",
      },
    ],
    related: ["sliding-doors", "electric-glass-windows", "frameless-doors", "hinged-doors"],
  },
  {
    slug: "bifold-windows",
    name: "Bifold Windows",
    short: "Aluminium bifold windows",
    category: "Windows",
    image: "/images/bifold-windows.jpg",
    tagline: "Open your kitchen to the outdoors",
    intro:
      "Aluminium bifold windows fold aside to create a completely open servery or outlook — the go-to for kitchen-to-deck serving areas, cafes and bars across Sydney's Eastern Suburbs. CWD custom-builds bifold windows to suit any opening size and benchtop configuration.",
    body: [
      "A bifold window over a servery bench turns a kitchen into an entertainer: fold the panels away and the indoors flows straight to the deck. Our systems fold smoothly on quality rollers, stack neatly, and seal tight against Eastern Suburbs weather when closed.",
      "For hospitality venues in Bondi, Coogee and Darlinghurst, bifold windows double as a serving counter by day and a secure, weather-tight shopfront by night — with multi-point locking and laminated glass options.",
    ],
    features: [
      "Up to 90% clear opening when folded",
      "Perfect over servery benchtops & bars",
      "Smooth top-hung or bottom-rolling operation",
      "Multi-point locking for security",
      "Double glazed & acoustic options",
      "Marine-grade finishes for coastal venues",
    ],
    applications: [
      "Kitchen serveries to decks & gardens",
      "Cafe, bar & restaurant counters",
      "Pool house & cabana serving windows",
      "Market & food-truck style servery fronts",
    ],
    options:
      "2-6 panels, fold in/out, stack left/right/split; sill-less or benchtop-threshold designs; single or double glazed; retractable flyscreen compatible.",
    faqs: [
      {
        q: "How much do bifold windows cost in Sydney?",
        a: "Aluminium bifold windows generally cost $1,000-$1,700 per linear metre installed in Sydney. A standard 1.8m kitchen servery bifold typically lands between $2,200 and $3,800 depending on glazing and configuration.",
      },
      {
        q: "Can bifold windows be used as a servery?",
        a: "Yes — that's their most popular use. We build them with a sill-less bottom track or benchtop threshold so the servery bench runs cleanly through, and can match benchtop heights precisely at measure.",
      },
      {
        q: "Do bifold windows seal well against weather?",
        a: "Quality bifolds seal very well: compression seals between panels, drop seals at the sill and multi-point locking that pulls panels tight. Correctly installed, they meet the water penetration requirements of AS 2047.",
      },
    ],
    related: ["servery-windows", "gas-strut-windows", "bifold-doors", "sliding-stacking-windows"],
  },
  {
    slug: "sliding-windows",
    name: "Sliding Windows",
    short: "Aluminium sliding windows",
    category: "Windows",
    image: "/images/sliding-windows.jpg",
    tagline: "Simple, strong and made to last",
    intro:
      "Aluminium sliding windows are the dependable all-rounder of Sydney homes and commercial buildings — horizontal panels that glide on tracks, never protruding in or out. CWD builds sliding windows from compact bathroom sizes to wide commercial spans.",
    body: [
      "Sliding windows suit almost every situation: they don't swing into walkways or decks, they're easy to screen, and the simple mechanism has very little to wear out. That makes them the default choice for strata buildings, schools and high-use commercial spaces.",
      "Our sliders run on adjustable rollers with woolpile sealing, take single or double glazing, and can be configured with fixed, sliding and highlight combinations to suit any elevation.",
    ],
    features: [
      "No protrusion — safe over paths & decks",
      "Easy glide operation with adjustable rollers",
      "Simple flyscreen integration",
      "Single, double or triple track layouts",
      "Double glazed & acoustic upgrade options",
      "Low maintenance — few moving parts",
    ],
    applications: [
      "Bedrooms, kitchens & living areas",
      "Strata & apartment buildings",
      "Schools, clinics & offices",
      "Over walkways, decks & servery benches",
    ],
    options:
      "2, 3 or 4 panel layouts; double hung-style vertical sliders on request; security screens; flyscreens; keyed locks; full powder-coat colour range.",
    faqs: [
      {
        q: "How much do sliding windows cost in Sydney?",
        a: "Aluminium sliding windows typically cost $350-$700 per square metre supplied and installed in Sydney, with a standard 1.8m x 1.2m window usually between $800 and $1,600 depending on glazing.",
      },
      {
        q: "Are sliding windows energy efficient?",
        a: "With double glazing and quality woolpile seals, modern sliding windows perform well on energy ratings. For maximum efficiency we recommend double glazed units with Low-E glass, which can cut heat transfer by over 50% versus single glazing.",
      },
      {
        q: "Can you add security screens to sliding windows?",
        a: "Yes — sliding windows take standard flyscreens, and can be upgraded to stainless mesh security screens or barred configurations for ground-floor commercial premises.",
      },
    ],
    related: ["sliding-stacking-windows", "sashless-sliding-windows", "double-glazed-windows", "retractable-flyscreens"],
  },
  {
    slug: "sliding-stacking-windows",
    name: "Sliding Stacking Windows",
    short: "Sliding stacker windows",
    category: "Windows",
    image: "/images/sliding-stacking-windows.jpg",
    tagline: "Wider openings, windows that stack away",
    intro:
      "Sliding stacking windows put three or more sashes on a multi-track frame so panels stack behind each other — opening up roughly two-thirds of very wide windows. Ideal for panoramic Sydney views and wide servery openings.",
    body: [
      "Where a standard slider opens half the frame, a stacker window opens around two-thirds — and handles widths a bifold window would struggle with economically. Panels glide on separate tracks and park neatly behind the fixed end panel.",
      "They're a smart choice for wide kitchen serveries, coastal view walls and commercial counters that need big clear openings without folding hardware.",
    ],
    features: [
      "Opens ~66% of very wide frames",
      "Handles 3m-6m+ widths with ease",
      "Simple sliding — no folding hardware",
      "Built-in flyscreen track",
      "Slim interlocks keep views open",
      "Single or double glazed options",
    ],
    applications: [
      "Wide kitchen & bar serveries",
      "Panoramic view windows",
      "Commercial service counters",
      "Beachside & harbourside living rooms",
    ],
    options:
      "3 or more panels on triple tracks; stack left or right; keyed and vent locks; single or double glazing; colour-matched to your door suite.",
    faqs: [
      {
        q: "What's the difference between sliding and sliding stacking windows?",
        a: "A standard sliding window moves one sash past a fixed or sliding panel on two tracks, opening about 50%. A stacker uses three tracks so multiple sashes slide and stack, opening roughly two-thirds of the frame.",
      },
      {
        q: "How much do sliding stacking windows cost in Sydney?",
        a: "Sliding stacking windows generally cost $500-$900 per square metre installed in Sydney, depending on width, panel count and glazing. Wide servery configurations are quoted individually after measure.",
      },
      {
        q: "Can stacker windows take flyscreens?",
        a: "Yes — the outer track is designed for a full-width sliding flyscreen, or you can fit a retractable screen across the opening.",
      },
    ],
    related: ["sliding-windows", "sashless-sliding-windows", "servery-windows", "bifold-windows"],
  },
  {
    slug: "awning-windows",
    name: "Awning Windows",
    short: "Aluminium awning windows",
    category: "Windows",
    image: "/images/awning-windows.jpg",
    tagline: "Fresh air, even when it's raining",
    intro:
      "Awning windows hinge at the top and push out from the bottom, creating a weather-shedding canopy — so you can ventilate in any weather. CWD's aluminium awning windows are a Sydney staple for bedrooms, bathrooms and commercial facades alike.",
    body: [
      "Top-hinged and chain-winder operated, awning windows catch breezes while deflecting rain — perfect for Sydney's summer storms. They seal tightly on compression seals, making them one of the best-performing openable window types for both weather and acoustics.",
      "Available as standalone windows, stacked columns, or combined with fixed panes, they take single or double glazing and flyscreens fitted on the inside.",
    ],
    features: [
      "Ventilate in wet weather — glass sheds rain",
      "Compression seals for excellent air & water tightness",
      "Chain winder or electric operation",
      "Great acoustic performance when closed",
      "Secure — hard to force from outside",
      "Combines neatly with fixed picture windows",
    ],
    applications: [
      "Bedrooms & bathrooms",
      "High-level highlight & clerestory windows",
      "Commercial facades & schools",
      "Above/below fixed glass combinations",
    ],
    options:
      "Manual winders, electric winders or push-out stays; single or double glazed; obscure glass for bathrooms; internal flyscreens; restrictors for fall prevention.",
    faqs: [
      {
        q: "How much do awning windows cost in Sydney?",
        a: "Aluminium awning windows typically cost $400-$800 per square metre installed in Sydney. A standard 1.2m x 1.2m unit usually runs $700-$1,400 depending on glazing and hardware.",
      },
      {
        q: "Can awning windows be left open in the rain?",
        a: "Yes — that's their signature advantage. The outward-opening sash forms a canopy that sheds rain away from the opening, so you can keep ventilation going through Sydney's wet weather.",
      },
      {
        q: "Are awning windows good for two-storey installations?",
        a: "Very — with electric winders or remote operation, high-level awning windows are easy to open, and restrictors can be fitted to meet fall-prevention requirements for windows above ground floor.",
      },
    ],
    related: ["casement-windows", "double-glazed-windows", "fixed-windows", "electric-glass-windows"],
  },
  {
    slug: "casement-windows",
    name: "Casement Windows",
    short: "Aluminium casement windows",
    category: "Windows",
    image: "/images/casement-windows.jpg",
    tagline: "Full opening, classic side-hung style",
    intro:
      "Casement windows hinge at the side and swing out like a door, opening the full sash area to catch and direct breezes. CWD's aluminium casement windows bring this classic style to Sydney homes and commercial buildings with modern seals and hardware.",
    body: [
      "Side-hung casements open to nearly 100% of the sash area — more than any sliding or double hung window — and can be angled to scoop breezes into the room. Compression seals make them outstanding for weather tightness and noise reduction.",
      "Our casements use heavy-duty stainless friction stays and multi-point locking, and pair beautifully with fixed panes or colonial bar layouts for character homes in Paddington and Woollahra-era streetscapes.",
    ],
    features: [
      "Opens up to ~100% of sash area",
      "Angled sashes catch & funnel breezes",
      "Compression seals — top-tier weather & acoustic seal",
      "Multi-point locking standard",
      "Colonial bar & heritage styles available",
      "Single or double glazed",
    ],
    applications: [
      "Character & heritage-style homes",
      "Coastal homes chasing cross-breezes",
      "Bedrooms & living areas",
      "Boutique commercial fit-outs",
    ],
    options:
      "Single or paired sashes; friction stays or winders; flyscreens inside; colonial glazing bars; obscure, tinted, Low-E or acoustic glass.",
    faqs: [
      {
        q: "How much do casement windows cost in Sydney?",
        a: "Aluminium casement windows generally cost $450-$850 per square metre installed in Sydney, with a typical 1.2m x 1.5m unit between $900 and $1,700 depending on glazing and hardware.",
      },
      {
        q: "Casement vs awning windows — what's the difference?",
        a: "Both are hinged sashes on compression seals. Casements hinge on the side and open wider (near 100%), catching side breezes; awnings hinge at the top, shed rain better, and suit wider, shorter openings. We often mix both across a home.",
      },
      {
        q: "Do casement windows suit heritage homes?",
        a: "Yes — with slim colonial glazing bars, traditional hardware and the right colour (white, cream or heritage greens), aluminium casements replicate the look of timber sashes with none of the maintenance.",
      },
    ],
    related: ["awning-windows", "double-hung-windows", "fixed-windows", "shaped-windows"],
  },
  {
    slug: "double-hung-windows",
    name: "Double Hung Windows",
    short: "Aluminium double hung windows",
    category: "Windows",
    image: "/images/double-hung-windows.jpg",
    tagline: "Timeless vertical sliders, modern engineering",
    intro:
      "Double hung windows slide both top and bottom sashes vertically in the frame — the classic window of Sydney's older suburbs, now in low-maintenance aluminium. CWD builds smooth, balanced double hung windows for heritage-style homes and modern builds.",
    body: [
      "Double hung windows give you ventilation control no other window can: drop the top sash to vent hot air, raise the bottom for cool air, or open both for full circulation. Neither sash protrudes, so they're safe over decks and paths.",
      "Our aluminium double hungs run on concealed balances — no sash cords — with tilt-in or removable sashes for easy cleaning, and period-appropriate details for heritage streetscapes.",
    ],
    features: [
      "Both sashes open — superior ventilation control",
      "No protrusion inside or out",
      "Concealed balance systems, no cords",
      "Heritage profiles & colonial bar options",
      "Easy-clean tilt or removable sashes",
      "Single or double glazed",
    ],
    applications: [
      "Heritage & federation-style homes",
      "Bedrooms & upstairs rooms",
      "Windows over paths & decks",
      "Strata upgrades matching existing styles",
    ],
    options:
      "Equal or offset sash splits; colonial bars; spiral or spring balances; flyscreens; keyed locks; obscure glass for bathrooms; double glazing for comfort.",
    faqs: [
      {
        q: "How much do double hung windows cost in Sydney?",
        a: "Aluminium double hung windows typically cost $500-$950 per square metre installed in Sydney. A standard 1.2m x 1.8m window usually falls between $1,100 and $2,000 depending on glazing and balances.",
      },
      {
        q: "Can aluminium double hung windows look like timber sash windows?",
        a: "Yes — with heritage horn details, colonial glazing bars and traditional colours, aluminium double hungs closely replicate timber sash aesthetics while eliminating painting, swelling and sash-cord maintenance.",
      },
      {
        q: "Are double hung windows safe for kids' rooms?",
        a: "With top-sash-only ventilation you can ventilate high while keeping the bottom sash locked, and we fit restrictors to limit opening to 125mm where fall prevention is required — meeting NSW regulations for windows above ground level.",
      },
    ],
    related: ["sashless-double-hung-windows", "casement-windows", "double-glazed-windows", "louvre-windows"],
  },
  {
    slug: "sashless-double-hung-windows",
    name: "Sashless Double Hung Windows",
    short: "Sashless double hung windows",
    category: "Windows",
    image: "/images/sashless-double-hung.jpg",
    tagline: "All glass, no visible frame between panes",
    intro:
      "Sashless double hung windows counterbalance two frameless glass panes that slide past each other with no visible sash frame — just glass and view. CWD installs sashless double hung systems for Sydney homes chasing a clean, minimal aesthetic.",
    body: [
      "Sashless double hungs replace aluminium sash frames with polished-edge toughened glass panes riding on concealed balances. The result looks like a fixed glass wall until you slide a pane open — ventilation with an almost uninterrupted view.",
      "They're a designer favourite for harbour and ocean view homes across Vaucluse, Bronte and Coogee, where every millimetre of frame is a millimetre of lost view.",
    ],
    features: [
      "Frameless glass panes — near-uninterrupted views",
      "Top & bottom panes both openable",
      "Concealed counterbalance system",
      "Toughened safety glass to AS 1288",
      "Minimalist hardware & flush locks",
      "Pairs with frameless & fixed glass walls",
    ],
    applications: [
      "Harbour & ocean view living areas",
      "Architect-designed contemporary homes",
      "Balcony & view-facing bedrooms",
      "High-end apartments & penthouses",
    ],
    options:
      "Clear, low-iron or tinted toughened glass; keyed flush locks; restrictors for fall prevention; flyscreen solutions; custom heights and widths.",
    faqs: [
      {
        q: "How much do sashless double hung windows cost in Sydney?",
        a: "Sashless double hung windows are a premium product, typically $700-$1,200 per square metre installed in Sydney depending on size and glass specification. They're quoted individually after a site measure.",
      },
      {
        q: "Are sashless windows secure?",
        a: "Yes — panes are toughened glass to AS 1288 and lock with flush-mounted keyed locks. For ground-floor or accessible positions we recommend laminated glass for added security.",
      },
      {
        q: "Do sashless double hung windows seal well?",
        a: "They seal well for a frameless system, using interlocking brush seals between panes — suitable for most Sydney conditions. For extreme-exposure coastal sites we'll advise on the best configuration at measure.",
      },
    ],
    related: ["double-hung-windows", "sashless-sliding-windows", "fixed-windows", "frameless-doors"],
  },
  {
    slug: "sashless-sliding-windows",
    name: "Sashless Sliding Windows",
    short: "Sashless sliding windows",
    category: "Windows",
    image: "/images/sashless-sliding.jpg",
    tagline: "Frameless glass that slides",
    intro:
      "Sashless sliding windows glide frameless glass panes along a slim head and sill track — no visible sash frames, just horizontal movement of pure glass. CWD supplies and installs sashless sliding systems across Sydney for view-focused homes and commercial spaces.",
    body: [
      "Where a conventional sliding window frames each pane in aluminium, a sashless slider lets polished-edge toughened panes slide past each other directly. The view stays open; only the slim top and bottom tracks hint at how it works.",
      "Multiple tracks allow two, three or more panes to stack as they slide, opening half to two-thirds of the span while keeping the frameless look that architects specify for premium Eastern Suburbs projects.",
    ],
    features: [
      "Frameless sliding glass panes",
      "Slim concealed head & sill tracks",
      "Multi-track stacking for wide openings",
      "Toughened safety glass as standard",
      "Minimalist keyed locking",
      "Ideal with frameless door & fixed systems",
    ],
    applications: [
      "View walls in living & entertaining areas",
      "Premium servery & bar openings",
      "Boutique retail & gallery fronts",
      "Contemporary apartments",
    ],
    options:
      "2-4 track configurations; clear, low-iron, tinted or frosted panes; flush locks; flyscreen options; custom sizes to suit structural openings.",
    faqs: [
      {
        q: "How much do sashless sliding windows cost in Sydney?",
        a: "Sashless sliding windows typically range from $650-$1,100 per square metre installed in Sydney, depending on track count, pane size and glass type. Each project is quoted after measure.",
      },
      {
        q: "What's the difference between sashless sliding and sashless double hung?",
        a: "Both slide frameless glass panes — sashless sliders move horizontally on head and sill tracks, while sashless double hungs move vertically on concealed balances. Sliders suit wide openings; double hungs suit tall ones.",
      },
      {
        q: "Can sashless sliding windows be screened?",
        a: "Yes — retractable flyscreens are the best match, spanning the opening and disappearing when not in use, keeping the frameless aesthetic intact.",
      },
    ],
    related: ["sashless-double-hung-windows", "sliding-stacking-windows", "retractable-flyscreens", "fixed-windows"],
  },
  {
    slug: "louvre-windows",
    name: "Louvre Windows",
    short: "Aluminium louvre windows",
    category: "Windows",
    image: "/images/louvre-windows.jpg",
    tagline: "Total airflow control, Sydney-coastal cool",
    intro:
      "Louvre windows angle horizontal glass blades to funnel breezes exactly where you want them — opening to nearly 100% of the frame area, more than any other window type. CWD's aluminium louvres are built for Sydney's coastal homes and breezeways.",
    body: [
      "No window ventilates like a louvre. Fully open, the blades almost disappear and the whole aperture breathes; tilted, they direct airflow up for cooling or down for circulation. That makes them perfect for Sydney's beachside suburbs, laundries, stairwells and high-level hot-air venting.",
      "Our modern louvre systems use strong aluminium blade carriers, positive-seal blade ends and quality operators — manual, or electric for high installations — with flyscreens fitted externally.",
    ],
    features: [
      "Up to ~100% of frame area for ventilation",
      "Precise airflow direction control",
      "Manual or electric operators",
      "102mm or 152mm glass blade options",
      "Toughened, obscure or tinted blades",
      "Excellent for high-level hot-air venting",
    ],
    applications: [
      "Beachside homes & breezeways",
      "Laundries, bathrooms & stairwells",
      "High-level clerestory ventilation",
      "Commercial & hospitality ventilation",
    ],
    options:
      "Manual lever, winder or 24V electric control; glass, aluminium or timber-look blades; external flyscreens; low-profile frames to match your suite.",
    faqs: [
      {
        q: "How much do louvre windows cost in Sydney?",
        a: "Aluminium louvre windows generally cost $550-$1,000 per square metre installed in Sydney, depending on blade size, operator type and glass specification. Electric operators add to the cost but are worth it for high-level installs.",
      },
      {
        q: "Are louvre windows weather-tight?",
        a: "Modern louvre systems with positive-seal blade ends and overlapping blades seal far better than older designs and meet AS 2047 requirements. For very exposed coastal positions we'll recommend blade seals and positioning to suit.",
      },
      {
        q: "Can louvres be used for bushfire (BAL) areas?",
        a: "Standard louvres are not ideal for higher BAL ratings because ember protection requires screened openings. For BAL-40 sites we specify compliant window types with mesh screening — ask us at measure.",
      },
    ],
    related: ["awning-windows", "double-glazed-windows", "bal-40-windows", "electric-glass-windows"],
  },
  {
    slug: "fixed-windows",
    name: "Fixed Windows",
    short: "Fixed & picture windows",
    category: "Windows",
    image: "/images/fixed-windows.jpg",
    tagline: "Frame the view, nothing else",
    intro:
      "Fixed windows are pure glass in a frame — no hardware, no moving parts, just maximum light and view at the best price per square metre of any window type. CWD builds fixed and picture windows from small highlights to full commercial glass walls.",
    body: [
      "Because nothing opens, fixed windows deliver the slimmest frames, biggest panes and best seals of any window type — and the lowest cost. They frame Sydney's harbour, ocean and skyline views like artwork.",
      "Fixed panes combine with every openable type: awnings below a picture window, louvres beside a fixed wall, or full commercial fixed glazing between structural mullions for shopfronts and facades.",
    ],
    features: [
      "Biggest glass area, slimmest sightlines",
      "Most cost-effective window per m2",
      "Best possible weather & acoustic seal",
      "Any size — small highlights to glass walls",
      "Low-E, tinted, acoustic & laminated options",
      "Structural silicone commercial glazing available",
    ],
    applications: [
      "Picture windows for views",
      "Commercial facades & shopfront glazing",
      "Stairwells, voids & double-height spaces",
      "Highlights & clerestory bands",
    ],
    options:
      "Residential frames or commercial structural glazing; single or double glazed; low-iron for crystal clarity; shaped and raked heads to match rooflines.",
    faqs: [
      {
        q: "How much do fixed windows cost in Sydney?",
        a: "Fixed windows are the most affordable type: typically $300-$600 per square metre installed in Sydney for residential frames, and $450-$900 per square metre for commercial structural glazing depending on glass spec.",
      },
      {
        q: "How big can a fixed window be?",
        a: "Very big — with the right glass. Residential frames routinely take panes of 3m x 2.4m, and commercial structural glazing goes well beyond with engineered mullions and thicker glass to AS 1288. We engineer each large pane for wind load.",
      },
      {
        q: "Do fixed windows help with energy efficiency?",
        a: "Yes — with no opening gaps they have the best air-seal of any window, and with double glazed Low-E units they achieve top energy ratings. Pairing fixed panes with a few openable windows is the classic efficient design strategy.",
      },
    ],
    related: ["shaped-windows", "arched-windows", "double-glazed-windows", "commercial-windows-and-doors"],
  },
  {
    slug: "shaped-windows",
    name: "Shaped Windows",
    short: "Custom shaped windows",
    category: "Windows",
    image: "/images/shaped-windows.jpg",
    tagline: "Triangles, rakes, circles — glass cut to your architecture",
    intro:
      "Shaped windows turn architectural geometry into glazed reality: raked heads that follow rooflines, gable-end triangles, circular portholes, trapezoids and custom polygons. CWD fabricates custom shaped aluminium windows for Sydney's architect-designed homes and commercial projects.",
    body: [
      "Standard rectangles don't suit every design. Raked windows follow cathedral ceilings, gable triangles fill pitched roof ends with light, and circular or angled windows become signature features. Our shaped windows are custom-fabricated frame by frame, with mitred or curved aluminium sections cut precisely to your angles.",
      "Send us architectural drawings or book a site measure — we template the opening, fabricate, and glaze to AS 1288 with toughened, laminated or double glazed options.",
    ],
    features: [
      "Any geometry — rakes, triangles, circles, trapezoids",
      "Custom-fabricated aluminium frames to your angles",
      "Templated on site for a perfect fit",
      "Double glazed & energy glass options",
      "Matches rectangular window suite finishes",
      "Architectural & builder documentation support",
    ],
    applications: [
      "Gable ends & cathedral ceilings",
      "Stairwell & void feature glazing",
      "Portholes & circular features",
      "Architect-designed homes & commercial facades",
    ],
    options:
      "Fixed glazed shapes (openable shapes by special design); single or double glazed; low-iron, tinted or obscure glass; frames matched to your whole-house colour.",
    faqs: [
      {
        q: "How much do shaped windows cost in Sydney?",
        a: "Custom shaped windows typically cost 30-60% more than an equivalent rectangular window due to custom fabrication — generally $500-$1,000 per square metre installed in Sydney. Complex curves and circles are quoted individually.",
      },
      {
        q: "Can shaped windows be double glazed?",
        a: "Yes — most shapes can be double glazed, including rakes and triangles. Circular and heavily curved shapes have some glass limitations, which we confirm at design stage.",
      },
      {
        q: "Do you work from architectural drawings?",
        a: "Absolutely. We regularly fabricate from DA and construction drawings, then verify with a site template before manufacture. Early involvement in the design stage gives the best results and pricing.",
      },
    ],
    related: ["arched-windows", "curved-glass-windows", "fixed-windows", "pivot-doors"],
  },
  {
    slug: "arched-windows",
    name: "Arched Windows",
    short: "Arched & curved-top windows",
    category: "Windows",
    image: "/images/arched-windows.jpg",
    tagline: "Soft curves for character facades",
    intro:
      "Arched windows crown an opening with a curved head — from gentle segmental arches to full semicircles. CWD custom-manufactures arched aluminium windows for Sydney's heritage-style homes, character facades and architectural builds.",
    body: [
      "The arch is architecture's oldest opening — and still one of its most beautiful. Aluminium frames are precision-rolled to your arch radius, then glazed with glass cut to match. Full-circle, half-round, segmental and elliptical heads are all possible.",
      "Arched windows pair with rectangular doors and windows in matching finishes, so the feature arch sits naturally within the whole facade.",
    ],
    features: [
      "Precision-rolled aluminium arch frames",
      "Full round, half-round, segmental & elliptical",
      "Glass cut to arch geometry",
      "Colonial bar & heritage detail options",
      "Fixed or openable designs",
      "Site-templated for perfect fit",
    ],
    applications: [
      "Heritage & federation facades",
      "Feature entry & stairwell windows",
      "Church, hall & community buildings",
      "Mediterranean & classical-style homes",
    ],
    options:
      "True radius or faceted arches; single or double glazed (radius-dependent); colonial glazing bars; heritage colours including cream, white and primrose.",
    faqs: [
      {
        q: "How much do arched windows cost in Sydney?",
        a: "Arched windows generally cost $600-$1,200 per square metre installed in Sydney due to the rolled frame and shaped glass — roughly 40-70% above a standard rectangular window. We quote from drawings or a site template.",
      },
      {
        q: "Can an arched window open?",
        a: "Yes — arched awning and casement configurations are possible, with the arch as a fixed curved head above openable rectangular sashes being the most practical and cost-effective design.",
      },
      {
        q: "Do arched windows suit modern homes?",
        a: "They're back in fashion — contemporary architects use soft arches for entries and feature windows in otherwise minimalist facades, and the look works beautifully in both heritage and modern contexts.",
      },
    ],
    related: ["shaped-windows", "curved-glass-windows", "fixed-windows", "double-hung-windows"],
  },
  {
    slug: "double-glazed-windows",
    name: "Double Glazed Windows",
    short: "Double glazing & IGUs",
    category: "Windows",
    image: "/images/double-glazed.jpg",
    tagline: "Quieter, cooler, warmer — the upgrade Sydney homes feel immediately",
    intro:
      "Double glazed windows use two panes separated by a sealed argon gap, cutting heat transfer by over 50% and outside noise dramatically. CWD supplies and installs double glazed aluminium windows and doors across Sydney — in almost every style we make.",
    body: [
      "A double glazed unit (IGU) transforms comfort: rooms stay cooler in summer, warmer in winter, and dramatically quieter — essential under flight paths and along busy Eastern Suburbs roads. Add Low-E coatings and the energy performance jumps again, helping meet NCC energy requirements on new builds and renovations.",
      "Almost every window and door style we manufacture can be double glazed: bifolds, sliders, awnings, casements, double hungs and fixed panes. We specify the right IGU build-up — thickness, gap, Low-E, laminated interlayers — for your orientation, noise exposure and budget.",
    ],
    features: [
      "Cuts heat transfer by 50%+ vs single glazing",
      "Major noise reduction — traffic & flight paths",
      "Argon-filled units with Low-E coating options",
      "Reduces condensation on cold mornings",
      "Available across almost all window & door styles",
      "Helps meet NCC Section J / BASIX energy targets",
    ],
    applications: [
      "Homes near traffic & flight paths",
      "Energy-efficient new builds & renovations",
      "West & north facing rooms that overheat",
      "Bedrooms where quiet matters most",
    ],
    options:
      "IGU build-ups from 18mm to 28mm+; Low-E, grey/neutral toned, acoustic laminated (6.5mm-10.5mm) inner panes; warm-edge spacers; argon fill standard.",
    faqs: [
      {
        q: "How much do double glazed windows cost in Sydney?",
        a: "Double glazing typically adds $150-$350 per square metre over single glazing in Sydney. Complete double glazed aluminium windows generally land between $550 and $1,100 per square metre installed, depending on style and glass specification.",
      },
      {
        q: "Is double glazing worth it in Sydney's climate?",
        a: "Yes — Sydney's hot summers and cool winter nights both benefit. Double glazing with Low-E can cut heat gain through glass by more than half in summer and retain warmth in winter, while dramatically reducing outside noise. Most clients tell us it's the upgrade they feel every single day.",
      },
      {
        q: "Can existing windows be retrofitted with double glazing?",
        a: "Sometimes — if the existing frames are deep enough and in good condition, sashes can be re-glazed with IGUs. More often we replace the full window with a purpose-built double glazed unit; the cost difference is often smaller than expected and the performance is guaranteed.",
      },
      {
        q: "What's the difference between double glazing and laminated glass?",
        a: "Double glazing is two panes with an insulating gap — best for temperature control. Laminated glass is two sheets bonded with an interlayer — best for security and safety. For the best of both, we build IGUs with a laminated inner pane: insulation, acoustics and security in one unit.",
      },
    ],
    related: ["single-glazed-windows", "awning-windows", "fixed-windows", "bifold-doors"],
  },
  {
    slug: "single-glazed-windows",
    name: "Single Glazed Windows",
    short: "Single glazing options",
    category: "Windows",
    image: "/images/single-glazed.jpg",
    tagline: "Cost-effective glazing done right",
    intro:
      "Single glazed windows remain the practical, budget-conscious choice for many Sydney projects — from investment properties to commercial tenancies. CWD supplies quality single glazed aluminium windows with the right glass type for safety, security and compliance.",
    body: [
      "Not every opening needs double glazing. Single glazed windows in toughened or laminated safety glass are cost-effective, lighter, and perfectly compliant for most Sydney applications — and they can always be upgraded later.",
      "The key is correct glass selection to AS 1288: toughened glass where human impact is possible, laminated for security and overhead glazing, and the right thickness for pane size and wind load. We handle that engineering on every job.",
    ],
    features: [
      "Most economical glazing option",
      "Toughened & laminated safety glass to AS 1288",
      "Lighter sashes — easy operation",
      "Tinted, obscure & Low-E single glass options",
      "Fast manufacture & replacement",
      "Upgradeable to IGUs in suitable frames",
    ],
    applications: [
      "Investment & rental properties",
      "Commercial tenancies & shopfronts",
      "Garages, sheds & secondary spaces",
      "Like-for-like strata replacements",
    ],
    options:
      "4mm-12mm glass; clear, grey, bronze, obscure; toughened or laminated safety grades; standard residential and commercial frame sections.",
    faqs: [
      {
        q: "How much do single glazed windows cost in Sydney?",
        a: "Single glazed aluminium windows typically cost $300-$650 per square metre installed in Sydney — the most budget-friendly compliant option. Exact pricing depends on style, size and glass type.",
      },
      {
        q: "Is single glazing still allowed in new builds?",
        a: "It depends on your energy assessment. NCC/BASIX requirements often push new homes toward double glazing, but single glazing can still comply in many designs and climate zones, and remains common in alterations and commercial work. We can advise based on your project.",
      },
      {
        q: "What's the best glass for security on a budget?",
        a: "6.38mm laminated glass is the sweet spot — it holds together when struck, resists break-and-enter far better than standard glass, adds acoustic benefit, and costs much less than double glazing.",
      },
    ],
    related: ["double-glazed-windows", "sliding-windows", "fixed-windows", "commercial-windows-and-doors"],
  },
  {
    slug: "curved-glass-windows",
    name: "Curved Glass Windows",
    short: "Curved glass & windows",
    category: "Windows",
    image: "/images/curved-glass.jpg",
    tagline: "Glass that bends to the architecture",
    intro:
      "Curved glass windows sweep around corners and follow curved walls — the pinnacle of architectural glazing. CWD designs, supplies and installs curved glass window systems for Sydney's most ambitious homes and commercial projects.",
    body: [
      "Curved glass eliminates the corner: views flow uninterrupted around bends, and facades gain a sculptural quality flat glass can't match. Panels are heat-bent to your radius, then set in curved aluminium frames or structural silicone channels.",
      "These are engineered projects: we work from architectural drawings, template the curve on site, coordinate glass bending (locally or through specialist processors) and install with the precision curved work demands.",
    ],
    features: [
      "Heat-bent glass to custom radii",
      "Curved corners with no corner post",
      "Curved aluminium frames or structural glazing",
      "Toughened & laminated curved options",
      "Full engineering & templating service",
      "Architect & builder coordination",
    ],
    applications: [
      "Curved corner windows & view walls",
      "Architectural feature facades",
      "Curved shopfronts & display glass",
      "Stairwells & sculptural interiors",
    ],
    options:
      "Radii typically from 1,000mm up (tighter by special process); clear, low-iron or tinted; curved IGUs available for energy performance; framing matched to project palette.",
    faqs: [
      {
        q: "How much does curved glass cost in Sydney?",
        a: "Curved glass is a premium product: expect $1,200-$2,500+ per square metre installed in Sydney depending on radius, glass build-up and framing. Every curved project is engineered and quoted individually.",
      },
      {
        q: "Can curved glass be double glazed?",
        a: "Yes — curved IGUs are achievable for many radii, though lead times and cost increase. We confirm feasibility against your radius and size at design stage.",
      },
      {
        q: "How long does curved glass take?",
        a: "Lead times are typically 6-12 weeks from confirmed template, as panels are bent to order by specialist processors. We schedule your project around the glass from day one.",
      },
    ],
    related: ["shaped-windows", "arched-windows", "fixed-windows", "frameless-doors"],
  },
  {
    slug: "bal-40-windows",
    name: "BAL-40 Windows",
    short: "BAL-40 bushfire rated windows",
    category: "Windows",
    image: "/images/bal-40-windows.jpg",
    tagline: "Bushfire-rated glazing for high-risk sites",
    intro:
      "BAL-40 windows are bushfire-rated systems designed to resist radiant heat up to 40kW/m2 and ember attack, required for homes in bushfire-prone areas of Sydney. CWD supplies and installs compliant BAL-rated windows and doors with full documentation.",
    body: [
      "Building in a bushfire-prone area means your windows and doors must comply with AS 3959 (Construction of buildings in bushfire-prone areas). At BAL-40 — the second-highest rating — windows need toughened or bushfire-rated glazing, non-combustible frames, tight sealing, and ember-proof screening.",
      "We supply BAL-12.5 through BAL-40 compliant aluminium systems with the correct glass, seals and stainless mesh screening, and provide the compliance certificates your certifier needs for sign-off.",
    ],
    features: [
      "Compliant to AS 3959 for BAL-40 sites",
      "Bushfire-rated toughened glazing systems",
      "Ember-proof stainless mesh screening",
      "Non-combustible aluminium framing",
      "Sealed systems resist ember entry",
      "Compliance certificates supplied",
    ],
    applications: [
      "Homes in bushfire-prone Sydney fringes",
      "New builds requiring BAL compliance",
      "Renovations in flame-adjacent zones",
      "Schools & facilities in risk areas",
    ],
    options:
      "BAL-12.5, BAL-19, BAL-29 and BAL-40 configurations; compliant fixed, awning and sliding systems; stainless ember mesh screens; documentation packs for certifiers.",
    faqs: [
      {
        q: "What does BAL-40 mean for windows?",
        a: "BAL-40 (Bushfire Attack Level 40) means the building may face radiant heat up to 40kW/m2 plus ember attack. Windows must use bushfire-rated glazing systems, non-combustible frames, specific seals and ember screens to AS 3959. Standard residential windows do not comply.",
      },
      {
        q: "How much do BAL-40 windows cost in Sydney?",
        a: "BAL-40 rated windows typically cost 40-80% more than standard equivalents — generally $700-$1,300 per square metre installed in Sydney. Lower BAL ratings (12.5-29) add less. We quote against your bushfire assessment report.",
      },
      {
        q: "How do I know my property's BAL rating?",
        a: "Your BAL is set by a bushfire assessment — usually done at DA stage and shown on your planning documents. If you're unsure, check with your council or certifier, or ask us and we'll point you to an assessor.",
      },
    ],
    related: ["double-glazed-windows", "awning-windows", "fixed-windows", "commercial-windows-and-doors"],
  },
  {
    slug: "servery-windows",
    name: "Servery Windows",
    short: "Kitchen servery windows",
    category: "Windows",
    image: "/images/servery-windows.jpg",
    tagline: "From kitchen to deck in one smooth move",
    intro:
      "Servery windows connect your kitchen to outdoor entertaining — bifold, sliding or gas strut styles that open above the benchtop for effortless serving. CWD builds custom servery windows for Sydney homes, cafes and bars across the Eastern Suburbs.",
    body: [
      "A servery window changes how a home entertains: drinks and food pass straight from kitchen to deck, and the cook stays part of the party. For hospitality venues, it turns a window into a service counter that opens for trade and locks up tight at close.",
      "Choose bifold panels for maximum opening, sliding stackers for wide spans, or a gas strut awning for a dramatic single-panel canopy. We size every servery to your benchtop height and overhang for a clean, weatherproof finish.",
    ],
    features: [
      "Bifold, sliding or gas strut styles",
      "Sill-less designs for benchtop continuity",
      "Sized precisely to your benchtop height",
      "Weather-tight when closed",
      "Multi-point locking for security",
      "Flyscreen options including retractable",
    ],
    applications: [
      "Kitchen-to-deck entertaining",
      "Cafe, bar & restaurant counters",
      "Pool houses & outdoor kitchens",
      "Market-style serving fronts",
    ],
    options:
      "Bifold (fold aside), sliding stacker (wide spans) or gas strut (single canopy panel); benchtop-matched sills; double glazing available; colours matched to your door suite.",
    faqs: [
      {
        q: "How much does a servery window cost in Sydney?",
        a: "Servery windows in Sydney typically cost $2,200-$4,500 installed for a standard 1.8m-2.4m bifold or gas strut servery, depending on style, glazing and benchtop integration. Wide sliding configurations are quoted individually.",
      },
      {
        q: "Which servery style is best — bifold, sliding or gas strut?",
        a: "Bifolds open the widest and suit most kitchens; sliding stackers suit very wide benches; gas strut windows give a stunning single-panel canopy with zero frame in the way when open. We'll recommend based on your bench width, overhang and budget.",
      },
      {
        q: "Can a servery window be flyscreened?",
        a: "Yes — retractable flyscreens are the neatest solution, spanning the servery opening and retracting out of sight when you're serving.",
      },
    ],
    related: ["bifold-windows", "gas-strut-windows", "sliding-stacking-windows", "retractable-flyscreens"],
  },
  {
    slug: "gas-strut-windows",
    name: "Gas Strut Windows",
    short: "Gas strut servery windows",
    category: "Windows",
    image: "/images/gas-strut-windows.jpg",
    tagline: "One panel, one push — a canopy of glass",
    intro:
      "Gas strut windows lift a single large sash upward on gas struts, forming a glass canopy over your servery or bar — no folding panels, no sliding tracks, just one dramatic opening. CWD builds custom gas strut servery windows across Sydney.",
    body: [
      "The gas strut window is the showpiece of modern serveries: the entire window tilts up and out, clearing 100% of the opening and providing its own awning. Balanced struts make even large double glazed sashes lift with one hand and hold safely overhead.",
      "Perfect over outdoor bars and kitchen benches, they close to a clean single pane with compression seals — excellent weather performance and a minimalist look both open and closed.",
    ],
    features: [
      "100% clear opening — no panels or tracks",
      "Gas struts balance heavy sashes effortlessly",
      "Open sash forms its own awning canopy",
      "Single clean pane when closed",
      "Compression seals for weather tightness",
      "Lockable in closed and vent positions",
    ],
    applications: [
      "Outdoor bars & kitchen serveries",
      "Cafe & takeaway service windows",
      "Pool cabanas & entertaining pavilions",
      "Food trucks & market stalls (fixed)",
    ],
    options:
      "Sash sizes to ~2.4m wide x 1.5m high (larger with engineering); single or double glazed; manual or motorised lift; matched sill and benchtop detailing.",
    faqs: [
      {
        q: "How much does a gas strut window cost in Sydney?",
        a: "Gas strut servery windows typically cost $3,000-$6,500 installed in Sydney depending on size and glazing. The mechanism is more complex than a bifold, but the clean single-panel result is unmatched.",
      },
      {
        q: "Are gas strut windows safe overhead?",
        a: "Yes — quality struts are rated well beyond the sash weight and hold the panel positively at full open. We size struts to the exact sash weight (including double glazing) and fit safety stays where specified.",
      },
      {
        q: "Can a gas strut window be double glazed?",
        a: "Yes — struts are sized to carry the extra IGU weight, so you keep energy and acoustic performance without compromising the effortless lift.",
      },
    ],
    related: ["servery-windows", "bifold-windows", "electric-glass-windows", "fixed-windows"],
  },
  {
    slug: "electric-glass-windows",
    name: "Electric Glass Windows",
    short: "Electric & switchable glass",
    category: "Windows",
    image: "/images/electric-glass.jpg",
    tagline: "Glass that switches from clear to private",
    intro:
      "Electric glass (switchable/smart glass) changes from transparent to opaque at the flick of a switch — instant privacy without blinds. CWD supplies and installs switchable glass windows and partitions for Sydney homes, offices and medical facilities.",
    body: [
      "Switchable glass uses a PDLC film laminated between glass layers: powered, it's clear; unpowered, it turns translucent white — privacy on demand. It's the modern answer for bathrooms, boardrooms, clinics and street-facing rooms where blinds and curtains clutter the design.",
      "We integrate electric glass into aluminium window and door systems with concealed wiring and control via wall switch, remote, or home automation.",
    ],
    features: [
      "Clear to opaque in under a second",
      "Privacy without blinds or curtains",
      "Wall switch, remote or automation control",
      "Laminated safety glass construction",
      "Available in windows, doors & partitions",
      "Blocks ~99% UV in both states",
    ],
    applications: [
      "Bathrooms & ensuites",
      "Boardrooms & office partitions",
      "Medical & consulting rooms",
      "Street-facing bedrooms & entries",
    ],
    options:
      "Switchable laminated panels in fixed, awning or door configurations; grouped or individual switching; 240V with transformer; integration with smart home systems.",
    faqs: [
      {
        q: "How much does electric glass cost in Sydney?",
        a: "Switchable electric glass typically costs $1,500-$2,800 per square metre installed in Sydney including glass, electrics and controls. It's a premium product — most clients use it selectively in bathrooms, boardrooms and entries.",
      },
      {
        q: "Does electric glass use much power?",
        a: "Very little — around 3-5 watts per square metre while clear, and nothing in the opaque (privacy) state. Many clients leave it powered only when they want the clear view.",
      },
      {
        q: "Can electric glass be retrofitted to existing windows?",
        a: "Retrofit switchable film can be applied to some existing glass, but results are best with purpose-laminated panels. We assess your windows and recommend the cleaner option.",
      },
    ],
    related: ["fixed-windows", "frameless-doors", "cavity-doors", "double-glazed-windows"],
  },
  {
    slug: "retractable-flyscreens",
    name: "Retractable Flyscreens",
    short: "Retractable fly screens",
    category: "Specialty",
    image: "/images/flyscreen.jpg",
    tagline: "Insect protection that disappears",
    intro:
      "Retractable flyscreens roll away into a slim cassette when not in use — insect protection for bifold doors, French doors and wide openings without a permanent screen spoiling the view. CWD supplies and installs retractable screens across Sydney.",
    body: [
      "Big openings deserve screens that don't compromise them. Retractable flyscreens span up to 4.5 metres (9 metres double-sided), glide on a fingertip track, and vanish into a colour-matched cassette — your bifold or servery opening stays visually clean.",
      "Mesh options include standard insect mesh, midge-proof fine mesh for coastal areas, and privacy/solar mesh that cuts glare and heat while screening.",
    ],
    features: [
      "Retracts fully into a slim cassette",
      "Spans up to 4.5m single, 9m double",
      "Works with bifold, French & stacker doors",
      "Insect, midge & solar mesh options",
      "Colour-matched to your frames",
      "Pet-resistant mesh upgrades available",
    ],
    applications: [
      "Bifold & sliding stacking doors",
      "Servery & bifold windows",
      "French & hinged door pairs",
      "Wide alfresco openings",
    ],
    options:
      "Single or double-sided draw; standard, fine (midge), privacy or pet mesh; floor-track or trackless pleated styles; full colour matching.",
    faqs: [
      {
        q: "How much do retractable flyscreens cost in Sydney?",
        a: "Retractable flyscreens typically cost $600-$1,500 per opening installed in Sydney depending on width and mesh type — a 3m bifold opening usually lands around $900-$1,200.",
      },
      {
        q: "Can you add a retractable screen to existing bifold doors?",
        a: "Yes — most existing bifold, French and sliding doors can be retrofitted. We measure the reveal, mount the cassette and track, and colour-match to your frames.",
      },
      {
        q: "Do retractable screens keep midges out near the coast?",
        a: "Standard mesh stops flies and mosquitoes; for midges and sandflies common around Sydney's bays and beaches, we fit fine-weave midge mesh — slightly denser, but the right call for coastal homes.",
      },
    ],
    related: ["bifold-doors", "sliding-stacking-doors", "servery-windows", "bifold-windows"],
  },
];

export const productCategories = ["Commercial", "Doors", "Windows", "Specialty"] as const;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
