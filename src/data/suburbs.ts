export interface Suburb {
  slug: string;
  name: string;
  region: "Harbourside East" | "Beachside East" | "Parkside & Inner East";
  blurb: string;
  character: string;
}

export const suburbs: Suburb[] = [
  { slug: "vaucluse", name: "Vaucluse", region: "Harbourside East", blurb: "Grand harbour-view estates and architect-designed homes overlooking the Heads.", character: "Vaucluse's prestige homes demand oversized glazing, curved and shaped feature windows, and marine-grade finishes that stand up to harbour salt air." },
  { slug: "watsons-bay", name: "Watsons Bay", region: "Harbourside East", blurb: "Australia's oldest fishing village turned premium harbour enclave.", character: "Watsons Bay sits exposed to both harbour and ocean conditions — we specify marine-grade powder coating, 316 stainless hardware and laminated glass for its homes and waterfront venues." },
  { slug: "dover-heights", name: "Dover Heights", region: "Harbourside East", blurb: "Clifftop homes with sweeping city and harbour panoramas.", character: "Dover Heights' elevated, wind-exposed blocks need engineered glazing: we size glass and frames to AS 1170 wind loads and specify acoustic options along Old South Head Road." },
  { slug: "rose-bay", name: "Rose Bay", region: "Harbourside East", blurb: "Harbourside apartments and family homes around the bay.", character: "In Rose Bay we regularly upgrade apartments and waterfront homes with double glazed windows to tame flight-path and harbour traffic noise." },
  { slug: "double-bay", name: "Double Bay", region: "Harbourside East", blurb: "Sydney's boutique shopping and dining village by the harbour.", character: "Double Bay's retail strip calls for elegant shopfronts — frameless glass entries, hinged commercial doors and facades that match the village's upmarket character." },
  { slug: "point-piper", name: "Point Piper", region: "Harbourside East", blurb: "One of Australia's most exclusive harbourside peninsulas.", character: "Point Piper projects are bespoke by definition: pivot entries, sashless view walls, curved glass and electric privacy glass feature in our work here." },
  { slug: "darling-point", name: "Darling Point", region: "Harbourside East", blurb: "Leafy harbourside peninsula of apartments and heritage homes.", character: "Darling Point's mix of heritage houses and harbourside apartments suits our heritage-style double hungs and discreet double glazed upgrades." },
  { slug: "edgecliff", name: "Edgecliff", region: "Harbourside East", blurb: "Transit-connected hub on the eastern edge of the CBD fringe.", character: "Around Edgecliff's busy rail and road corridor, acoustic laminated and double glazed windows make a measurable difference to apartment and office comfort." },
  { slug: "bellevue-hill", name: "Bellevue Hill", region: "Harbourside East", blurb: "Stately family homes on one of the East's grandest ridges.", character: "Bellevue Hill's large family estates take full-window-suite replacements — casements, double hungs and shaped feature glazing in coordinated finishes." },
  { slug: "bondi-junction", name: "Bondi Junction", region: "Parkside & Inner East", blurb: "The East's commercial heart — retail, offices and towers.", character: "Bondi Junction is commercial glazing territory: shopfronts, office fit-out windows, balcony sliders and high-rise replacements are our daily work here." },
  { slug: "queens-park", name: "Queens Park", region: "Parkside & Inner East", blurb: "Federation streets wrapped around a beloved park.", character: "Queens Park's federation homes suit heritage-profile aluminium windows — colonial bars, double hungs and casements that respect the streetscape." },
  { slug: "bondi", name: "Bondi", region: "Beachside East", blurb: "The world's most famous beach suburb, from hall street to the sand.", character: "Bondi homes and hospitality venues need salt-tough glazing: marine-grade finishes, bifold serveries and acoustic glass for its lively streets." },
  { slug: "bondi-beach", name: "Bondi Beach", region: "Beachside East", blurb: "Beachfront apartments, cafes and iconic coastal living.", character: "Right on Bondi Beach, corrosion resistance is everything — we specify 316 stainless hardware, marine powder coats and laminated glass for beachfront exposure." },
  { slug: "north-bondi", name: "North Bondi", region: "Beachside East", blurb: "Hillside family homes above the northern headland.", character: "North Bondi's sloping blocks capture views and wind in equal measure — engineered large-format sliding doors and wind-rated windows are our specialty here." },
  { slug: "tamarama", name: "Tamarama", region: "Beachside East", blurb: "Glamarama — a tiny, tightly-held coastal pocket.", character: "Tamarama's boutique homes and apartments lean architectural: sashless windows, frameless glass and pivot doors suit its design-led renovations." },
  { slug: "bronte", name: "Bronte", region: "Beachside East", blurb: "Family beachside living around the park and baths.", character: "Bronte renovations love indoor-outdoor openings — bifold doors to decks, servery windows to barbecue areas, all in marine-grade coastal finishes." },
  { slug: "clovelly", name: "Clovelly", region: "Beachside East", blurb: "A sheltered bay village with a strong community feel.", character: "Clovelly's seaside cottages and apartments benefit from louvre and awning windows that harvest sea breezes, plus double glazing for winter comfort." },
  { slug: "coogee", name: "Coogee", region: "Beachside East", blurb: "Buzzing beach suburb of apartments, cafes and family homes.", character: "In Coogee we handle everything from strata window replacements to beachfront cafe shopfronts — always with coastal-grade corrosion protection." },
  { slug: "south-coogee", name: "South Coogee", region: "Beachside East", blurb: "Quiet clifftop streets above the coastal walk.", character: "South Coogee's exposed clifftop position calls for wind-rated frames and laminated glass, with big fixed panes to frame the ocean views." },
  { slug: "maroubra", name: "Maroubra", region: "Beachside East", blurb: "A surf beach suburb with growing family appeal.", character: "Maroubra's mix of brick homes and new duplexes takes our full range — stacker doors for wide alfresco openings and double glazed windows for comfort." },
  { slug: "malabar", name: "Malabar", region: "Beachside East", blurb: "Sheltered bay suburb with a village atmosphere.", character: "Malabar homes overlooking the bay suit fixed picture windows and servery openings that make the most of sheltered outdoor areas." },
  { slug: "little-bay", name: "Little Bay", region: "Beachside East", blurb: "Clifftop golf-course suburb with modern estates.", character: "Little Bay's newer estates and apartments are ideal candidates for whole-home double glazing and contemporary black-framed window suites." },
  { slug: "la-perouse", name: "La Perouse", region: "Beachside East", blurb: "Historic headland suburb at Botany Bay's entrance.", character: "La Perouse's exposed headland weather demands robust, sealed glazing — awning windows and quality sliders with marine-grade finishes perform best." },
  { slug: "waverley", name: "Waverley", region: "Parkside & Inner East", blurb: "Elevated family suburb between Bondi and Bronte.", character: "Waverley's federation and Californian bungalow homes suit heritage-look double hungs and casements, often upgraded to double glazing." },
  { slug: "paddington", name: "Paddington", region: "Parkside & Inner East", blurb: "Sydney's iconic terrace-house suburb and design precinct.", character: "Paddington's heritage terraces need sensitive glazing: slim heritage-profile windows, French-style hinged doors to courtyards and cavity sliders inside." },
  { slug: "centennial-park", name: "Centennial Park", region: "Parkside & Inner East", blurb: "Prestigious homes ringing Sydney's great park.", character: "Homes facing Centennial Park capture leafy views worth framing — large fixed panes, corner windows and bifold walls are signature upgrades here." },
  { slug: "moore-park", name: "Moore Park", region: "Parkside & Inner East", blurb: "Entertainment and residential pocket by the SCG precinct.", character: "Moore Park's proximity to stadiums and busy roads makes acoustic laminated and double glazed windows a practical must for its homes and venues." },
  { slug: "randwick", name: "Randwick", region: "Parkside & Inner East", blurb: "The Spot, the racecourse and grand old streets.", character: "Randwick's mix of heritage homes, apartments and hospital-precinct commercial sites covers our full service range — residential suites to commercial shopfronts." },
  { slug: "kingsford", name: "Kingsford", region: "Parkside & Inner East", blurb: "UNSW precinct suburb with busy retail strips.", character: "Kingsford's Anzac Parade corridor homes and businesses benefit from acoustic glazing, while its retail strip takes practical commercial shopfront systems." },
  { slug: "kensington", name: "Kensington", region: "Parkside & Inner East", blurb: "Leafy university-adjacent suburb of character homes.", character: "Kensington's Californian bungalows and character homes suit heritage-style aluminium windows with the modern comfort of double glazing." },
  { slug: "darlinghurst", name: "Darlinghurst", region: "Parkside & Inner East", blurb: "Vibrant inner-east dining, nightlife and apartments.", character: "Darlinghurst's cafes, bars and small venues use our bifold servery windows and shopfront doors; its apartments take acoustic double glazing for the lively streets." },
  { slug: "potts-point", name: "Potts Point", region: "Parkside & Inner East", blurb: "Art deco apartment towers and sophisticated dining.", character: "Potts Point's art deco apartments call for sympathetic window replacements — slim profiles, heritage colours and acoustic glass for city-edge living." },
  { slug: "elizabeth-bay", name: "Elizabeth Bay", region: "Parkside & Inner East", blurb: "Harbourside art deco elegance on a quiet bay.", character: "Elizabeth Bay's harbour-facing apartments deserve sashless and slim-frame glazing that keeps harbour views uninterrupted while taming wind and noise." },
];

export const suburbRegions = ["Harbourside East", "Beachside East", "Parkside & Inner East"] as const;

export function getSuburb(slug: string) {
  return suburbs.find((s) => s.slug === slug);
}

export function nearbySuburbs(slug: string, count = 6) {
  const idx = suburbs.findIndex((s) => s.slug === slug);
  if (idx === -1) return suburbs.slice(0, count);
  const out: Suburb[] = [];
  for (let i = 1; out.length < count && i < suburbs.length; i++) {
    out.push(suburbs[(idx + i) % suburbs.length]);
  }
  return out;
}
