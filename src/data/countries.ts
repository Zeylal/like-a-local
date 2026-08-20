export interface CountryInfo {
  code: string;
  name: string;
  emoji: string;
  tags: string[];
  travelTimeFromFrance: string;
  visa: string;
  whenToGo: string;
  intro: string[];
  // Cities on the radar for this country — shown/planned, not necessarily
  // written up as a trip yet (see src/trips/ for actual trip write-ups).
  cities?: string[];
  // Broader regions worth calling out separately from individual cities
  // (used for e.g. France, where "French Riviera" and "Paris" are both
  // useful but different kinds of entries).
  regions?: string[];
}

// Every country lit up on the home globe gets an entry here — this is what
// renders on its /countries/<code>/ page (visa/when-to-go/travel-time facts
// + the intro paragraphs), whether or not it has a trip written up yet.
export const countries: Record<string, CountryInfo> = {
  ITA: {
    code: 'ITA',
    name: 'Italy',
    emoji: '🇮🇹',
    tags: ['Cities', 'Food', 'Lakes', 'Italy'],
    travelTimeFromFrance: 'Paris → Milan, about 1h35 direct — shorter than some train rides within France.',
    visa: 'None needed. Italy is in the Schengen Area, same as home — just a passport or ID card.',
    whenToGo: 'Late spring (May–June) or September: warm enough to swim in Como, cool enough to actually enjoy climbing the Duomo steps.',
    intro: [
      "Italy might be the destination that needs the least convincing — no visa, a flight shorter than the drive to Biarritz, and a culture that rewards showing up without much of a plan.",
      "What I didn't expect was how different the north feels from the postcard version of Italy: Milan is fashion and finance by day, spritz-on-a-canal by evening, and an hour's train ride puts you lakeside in Como or under a 2,000-year-old arena in Verona.",
    ],
    cities: ['Rome', 'Milan', 'Naples', 'Pompei', 'Italian islands'],
  },
  PRT: {
    code: 'PRT',
    name: 'Portugal',
    emoji: '🇵🇹',
    tags: ['Coast', 'Food', 'Cities', 'Portugal'],
    travelTimeFromFrance: 'Paris → Lisbon, about 2h20 direct.',
    visa: 'None needed. Portugal is in the Schengen Area — passport or ID card is enough.',
    whenToGo: 'April–June or September–October: coastal enough to want good weather, southern enough that August gets uncomfortably hot.',
    intro: [
      "Portugal is the trip I keep meaning to book because everyone who's been comes back saying the same thing: cheaper than Spain, just as good, somehow still not crowded.",
      "Lisbon's hills, the pastel de nata debates, a coastline that goes from surf towns to cliffside fishing villages within an hour's drive — this one's queued up, not written yet.",
    ],
    cities: ['Lisbon', 'Porto'],
  },
  FRA: {
    code: 'FRA',
    name: 'France',
    emoji: '🇫🇷',
    tags: ['Home', 'Cities', 'Countryside', 'France'],
    travelTimeFromFrance: "You're already here 🏠",
    visa: "Don't need one — this is home base.",
    whenToGo: "Anytime, honestly — that's the advantage of not needing a plane ticket.",
    intro: [
      "This is the one country on the map I don't need a boarding pass for. But \"local\" cuts both ways — half the point of this site is not skipping the streets in my own backyard just because I walk past them every day.",
      "Consider this the placeholder for every day trip and long weekend that doesn't feel big enough to plan around but is absolutely worth writing down.",
    ],
    cities: ['Paris', 'Nice', 'Monaco', 'Nantes', 'Montpellier', 'Mont Saint-Michel', 'Strasbourg'],
    regions: ['French Riviera', 'Normandy', 'Brittany'],
  },
  GRC: {
    code: 'GRC',
    name: 'Greece',
    emoji: '🇬🇷',
    tags: ['Islands', 'History', 'Food', 'Greece'],
    travelTimeFromFrance: 'Paris → Athens, about 3h15 direct.',
    visa: 'None needed. Greece is in the Schengen Area — passport or ID card is enough.',
    whenToGo: 'Late May or September: island season without the July–August crowds and prices.',
    intro: [
      "Greece is on here for Meteora before it's on here for the islands — monasteries balanced on rock pillars that look photoshopped until you're standing under them.",
      "The island-hopping version of this trip is the one everyone pictures, but I'm more curious about the mainland: the mountains, the ferries that only make sense once you're actually at the port.",
    ],
    cities: ['Athens', 'Meteora', 'Samos', 'Chalkidiki'],
  },
  TUR: {
    code: 'TUR',
    name: 'Turkey',
    emoji: '🇹🇷',
    tags: ['Cities', 'Culture', 'History', 'Turkey'],
    travelTimeFromFrance: 'Paris → Istanbul, about 3h30 direct.',
    visa: "None needed for stays up to 90 days — French passport or even just a national ID card gets you in for tourism. No paperwork to sort out before you go.",
    whenToGo: 'April–May or September–October: Istanbul is a summer-hot city, and shoulder season means the Basilica Cistern queue is actually a queue.',
    intro: [
      "Istanbul is the trip that surprised me most on the visa front — no forms, no fee, just a passport and a return ticket, easier than I expected for a country straddling two continents.",
      "One city, two continents, a skyline built in layers — Byzantine, Ottoman, modern — and cisterns under the streets that feel more like a film set than a tourist stop.",
    ],
    cities: ['Istanbul', 'Antalya', 'Cappadocia', 'Izmir', 'Gaziantep', 'Şanlıurfa', 'Rize'],
  },
  NOR: {
    code: 'NOR',
    name: 'Norway',
    emoji: '🇳🇴',
    tags: ['Nature', 'Fjords', 'Cities', 'Norway'],
    travelTimeFromFrance: 'Paris → Oslo, about 2h25 direct.',
    visa: 'None needed. Norway is in the Schengen Area (even though it\'s not in the EU) — passport or ID card is enough.',
    whenToGo: 'June–August for fjord hikes and near-endless daylight, or February–March if the plan is chasing the northern lights.',
    intro: [
      "Norway breaks the usual budget-trip logic — it's expensive, it's Schengen so there's no visa hurdle, and it's still worth every krone for a fjord that looks unedited even in real life.",
      "This one's queued up for the long-daylight version: hiking above a fjord at 10pm because the sun hasn't figured out it should set yet.",
    ],
    cities: ['Oslo'],
  },
  DNK: {
    code: 'DNK',
    name: 'Denmark',
    emoji: '🇩🇰',
    tags: ['Cities', 'Design', 'Food', 'Denmark'],
    travelTimeFromFrance: 'Paris → Copenhagen, about 2h direct.',
    visa: 'None needed. Denmark is in the Schengen Area — passport or ID card is enough.',
    whenToGo: 'May–August for long days and everyone eating outside; a bike is basically required equipment.',
    intro: [
      "Copenhagen keeps coming up as \"the city everyone underrates\" — a two-hour flight, no visa, and a reputation for being effortlessly livable that I want to test in person.",
      "Bike lanes over highways, a food scene that goes well beyond New Nordic tasting menus, and — this one's still on the list — a harbor worth swimming in, mid-city.",
    ],
    cities: ['Copenhagen'],
  },
  EGY: {
    code: 'EGY',
    name: 'Egypt',
    emoji: '🇪🇬',
    tags: ['History', 'Desert', 'Nile', 'Egypt'],
    travelTimeFromFrance: 'Paris → Cairo, about 4h40 direct.',
    visa: 'An e-visa (~$25, apply online in advance) or a visa on arrival at the airport — both straightforward. Sinai resorts alone are visa-free for up to 15 days, if that\'s the whole trip.',
    whenToGo: 'October–April: outside of that window, Cairo and the Nile Valley get brutally hot for sightseeing on foot.',
    intro: [
      "Egypt is the one on this map that actually needs a bit of admin — an e-visa applied for ahead of time, a passport valid 6+ months — small print worth sorting before, not at, the airport.",
      "The pyramids are the headline, but it's the Nile itself — felucca sails, temple towns strung along the water — that's pulling me toward a longer trip than a weekend allows.",
    ],
    cities: ['Cairo', 'Hurghada'],
  },
  JOR: {
    code: 'JOR',
    name: 'Jordan',
    emoji: '🇯🇴',
    tags: ['Desert', 'History', 'Off the Beaten Path', 'Jordan'],
    travelTimeFromFrance: 'Paris → Amman, about 4h50 direct.',
    visa: 'Visa on arrival (40 JOD) — or skip the fee entirely with a Jordan Pass if you\'re staying 3+ nights and visiting Petra, which is the better deal almost every time.',
    whenToGo: 'March–May or September–November: Wadi Rum and Petra in summer heat is a very different (harder) trip.',
    intro: [
      "Jordan is where the Jordan Pass math actually matters: buy it ahead of the trip and the visa fee disappears, plus it covers Petra — worth doing before you land, not after.",
      "Petra at sunrise before the tour buses arrive, then a night in Wadi Rum with zero light pollution — this is the trip I keep describing to people before I've actually taken it.",
    ],
    cities: ['Amman', 'Wadi Rum', 'Petra'],
  },
  BEL: {
    code: 'BEL',
    name: 'Belgium',
    emoji: '🇧🇪',
    tags: ['Cities', 'Food', 'Weekend trip', 'Belgium'],
    travelTimeFromFrance: 'Paris → Brussels, about 1h20 by train (Thalys/Eurostar) — no flight needed at all.',
    visa: 'None needed. Belgium is in the Schengen Area — passport or ID card is enough.',
    whenToGo: 'Anytime, but May–September means terrace season for the beer gardens and market squares.',
    intro: [
      "Belgium is the trip with the least excuse not to happen — under an hour and a half by train, no visa, no jet lag, and somehow still feels like a proper change of scenery.",
      "Brussels beyond the EU-quarter reputation, Bruges canals without the day-trip crowds if you stay the night — this is the closest \"local\" gets to actually meaning next door.",
    ],
    cities: ['Brussels', 'Antwerp', 'Ghent'],
  },
  HRV: {
    code: 'HRV',
    name: 'Croatia',
    emoji: '🇭🇷',
    tags: ['Coast', 'Islands', 'History', 'Croatia'],
    travelTimeFromFrance: 'Paris → Split or Zagreb, about 2h direct.',
    visa: 'None needed. Croatia joined the Schengen Area in 2023 — passport or ID card is enough, no border stop even coming from elsewhere in Schengen.',
    whenToGo: "June or September: full Adriatic-blue water without August's island-hopping crowds and inflated prices.",
    intro: [
      "Croatia joining Schengen properly sealed the deal — no visa, no border queue, just a two-hour flight to water that colour normally requires a longer trip to find.",
      "Dubrovnik's Old Town rightfully gets the attention, but it's the smaller islands and Split's Roman core — a literal palace with a city living inside it — that are higher on my list.",
    ],
  },
  USA: {
    code: 'USA',
    name: 'United States',
    emoji: '🇺🇸',
    tags: ['Cities', 'Road trip', 'USA'],
    travelTimeFromFrance: 'Paris → New York, about 8h direct — the west coast (LA, Vegas) is closer to 11–12h.',
    visa: 'An ESTA is required before you fly (~$21, valid 2 years) — not a visa, just an online travel authorisation under the Visa Waiver Program, good for stays up to 90 days.',
    whenToGo: 'Spring or fall almost everywhere; for Vegas or Orlando specifically, winter beats the summer heat.',
    intro: [
      "The US is the one destination on this list that comes with actual homework — an ESTA applied for online before you fly, not at the airport — but once that's sorted it's visa-free for 90 days.",
      "It's less \"one trip\" than several: New York's density, LA's sprawl, Vegas's excess, Orlando's theme parks, Philadelphia's history — closer to picking a country's worth of different trips than one itinerary.",
    ],
    cities: ['Los Angeles', 'New York', 'Las Vegas', 'Orlando', 'Philadelphia'],
  },
  CHE: {
    code: 'CHE',
    name: 'Switzerland',
    emoji: '🇨🇭',
    tags: ['Cities', 'Mountains', 'Switzerland'],
    travelTimeFromFrance: 'Paris → Zurich, about 1h20 direct — or under 4h by TGV Lyria train, no airport hassle at all.',
    visa: "None needed. Switzerland is in the Schengen Area (though not the EU) — passport or ID card is enough.",
    whenToGo: 'June–September for lake swims and mountain hikes; December–March if it\'s a ski trip.',
    intro: [
      "Switzerland doesn't need a visa and barely needs a flight — the train from Paris is genuinely competitive with flying once you count airport time.",
      "It's an expensive country to eat and sleep in, but the lakes-and-mountains combination in Zurich or Lausanne is hard to replicate this close to home.",
    ],
    cities: ['Zurich', 'Lausanne'],
  },
  TZA: {
    code: 'TZA',
    name: 'Tanzania',
    emoji: '🇹🇿',
    tags: ['Islands', 'Safari', 'Tanzania'],
    travelTimeFromFrance: 'Paris → Zanzibar, roughly 10–12h with one stopover (no direct flights) — Dar es Salaam is a common connection point.',
    visa: "An e-visa (~$50, apply online 7–15 business days ahead) covers both mainland Tanzania and Zanzibar on one entry — visa on arrival exists too, but online is more reliable.",
    whenToGo: "June–October (dry season) for safaris; year-round for Zanzibar's beaches, though June–September avoids the heaviest rains.",
    intro: [
      "Tanzania needs actual planning ahead — an e-visa applied for weeks in advance, a long flight with a stopover — but one visa covers both the safari mainland and Zanzibar's beaches.",
      "This one's still just an idea: somewhere between a safari and doing absolutely nothing on a beach in the Indian Ocean.",
    ],
    cities: ['Zanzibar'],
  },
  KEN: {
    code: 'KEN',
    name: 'Kenya',
    emoji: '🇰🇪',
    tags: ['Safari', 'Wildlife', 'Kenya'],
    travelTimeFromFrance: 'Paris → Nairobi, about 8h direct.',
    visa: "An eTA (electronic travel authorisation) is required before you fly — Kenya no longer offers visa on arrival, so this has to be sorted online in advance, valid for stays up to 90 days.",
    whenToGo: 'July–October for the Great Migration and dry-season game viewing; January–February is also good and quieter.',
    intro: [
      "Kenya moved fully to an online eTA system, so — like the US — this is a plan-ahead-not-wing-it destination, but a direct 8-hour flight from Paris keeps it more reachable than it feels.",
      "This one's on the list for the obvious reason: the Maasai Mara during migration season is the kind of thing that's genuinely hard to describe secondhand.",
    ],
  },
  LUX: {
    code: 'LUX',
    name: 'Luxembourg',
    emoji: '🇱🇺',
    tags: ['Weekend trip', 'Cities', 'Luxembourg'],
    travelTimeFromFrance: 'Paris → Luxembourg City, about 2h15 by train — barely worth flying.',
    visa: 'None needed. Luxembourg is in the Schengen Area — passport or ID card is enough.',
    whenToGo: "May–September for the old town's terraces and the surrounding countryside.",
    intro: [
      "Luxembourg is almost aggressively convenient — a couple of hours by train, no visa, and a capital small enough to actually see properly in a weekend.",
      "It's one of those countries that rarely makes anyone's list on its own, which is exactly the kind of gap this site exists to fill.",
    ],
  },
  ARE: {
    code: 'ARE',
    name: 'United Arab Emirates',
    emoji: '🇦🇪',
    tags: ['Cities', 'Desert', 'UAE'],
    travelTimeFromFrance: 'Paris → Dubai, about 6h40 direct.',
    visa: "None needed for stays up to 90 days — a free visa is issued automatically on arrival for French passport holders, no forms or fees.",
    whenToGo: "November–March: outside that window Dubai's heat and humidity make sightseeing outdoors rough.",
    intro: [
      "The UAE is one of the easiest long-haul destinations on this list on paper — no visa admin at all, just a passport stamp on arrival for up to 90 days.",
      "Dubai's reputation is all skyscrapers and malls, but it's on the list more for the contrast: an ultra-modern skyline a short drive from actual desert.",
    ],
    cities: ['Dubai'],
  },
  NLD: {
    code: 'NLD',
    name: 'Netherlands',
    emoji: '🇳🇱',
    tags: ['Cities', 'Cycling', 'Netherlands'],
    travelTimeFromFrance: 'Paris → Amsterdam, about 1h20 direct — or roughly 3h20 by Thalys train.',
    visa: 'None needed. The Netherlands is in the Schengen Area — passport or ID card is enough.',
    whenToGo: 'April–May for tulip season, or June–August for long daylight and canal-side terraces.',
    intro: [
      "Amsterdam by train is almost as fast as flying once you count getting to the airport, and there's no visa admin to think about either.",
      "Still an open question on this list: canals and museums in Amsterdam, or something smaller and quieter outside the city.",
    ],
  },
  AUT: {
    code: 'AUT',
    name: 'Austria',
    emoji: '🇦🇹',
    tags: ['Cities', 'Mountains', 'Austria'],
    travelTimeFromFrance: 'Paris → Vienna, about 2h10 direct.',
    visa: 'None needed. Austria is in the Schengen Area — passport or ID card is enough.',
    whenToGo: 'May–September for the cities; December for Christmas markets if that\'s more the vibe.',
    intro: [
      "Austria sits in that easy Schengen middle ground — a two-hour flight, no visa, and a reputation for imperial architecture and coffeehouse culture I still haven't tested in person.",
      "Vienna's the obvious starting point, though the mountains further west are pulling at least as hard.",
    ],
  },
  POL: {
    code: 'POL',
    name: 'Poland',
    emoji: '🇵🇱',
    tags: ['Cities', 'History', 'Poland'],
    travelTimeFromFrance: 'Paris → Warsaw, about 2h10 direct; Kraków is closer to 2h20.',
    visa: 'None needed. Poland is in the Schengen Area — passport or ID card is enough.',
    whenToGo: 'May–September for warm-weather city walking; outside that, winters are properly cold.',
    intro: [
      "Poland is close, cheap by Western European standards, and needs zero visa planning — one of those countries that's easy to justify on a whim.",
      "Kraków's old town and Warsaw's rebuilt-from-rubble history are pulling in genuinely different directions, which is reason enough to eventually do both.",
    ],
    cities: ['Kraków', 'Warsaw'],
  },
  DEU: {
    code: 'DEU',
    name: 'Germany',
    emoji: '🇩🇪',
    tags: ['Cities', 'Culture', 'Germany'],
    travelTimeFromFrance: 'Paris → Munich, about 1h35 direct; Berlin is closer to 1h45.',
    visa: 'None needed. Germany is in the Schengen Area — passport or ID card is enough.',
    whenToGo: 'May–September for beer gardens and long daylight; late November–December for Christmas markets.',
    intro: [
      "Germany is another no-visa, short-flight neighbour — the kind of trip that's easy to keep putting off precisely because it's always available.",
      "Munich and Berlin barely feel like the same country: one is Bavarian tradition and beer halls, the other is a city still visibly shaped by how recently it was divided.",
    ],
    cities: ['Munich', 'Berlin'],
  },
};
