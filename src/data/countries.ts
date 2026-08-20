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
};
