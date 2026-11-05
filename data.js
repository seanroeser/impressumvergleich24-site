/* ------------------------------------------------------------------
   ANBIETER-DATEN  –  hier pflegst du alle Inhalte des Vergleichs.
   WICHTIG vor dem Livegang:
   1. Preise & Leistungen beim jeweiligen Anbieter prüfen und aktualisieren.
   2. "link" durch deinen Partner-/Affiliate-Link ersetzen (aktuell "#").
   3. Die Kriterienwerte (0–5) sind eine erste redaktionelle Einschätzung –
      ersetze sie durch deine eigene Bewertung.
   Die Gesamtnote wird automatisch aus den Kriterien berechnet.
------------------------------------------------------------------- */
window.STAND = "November 2026";

window.ANBIETER = [
  {
    id: "postflex",
    nutzung: ["privat", "geschaeftlich"],
    name: "Postflex",
    produkt: "Postflex – Geschäftsadresse",
    logo: { text: "Postflex", bg: "#ffffff", fg: "#1a1b23" },
    link: "#",
    preisMonat: 3.32,
    preisText: "ab 3,32 €",
    preisHinweis: "pro Monat",
    ladungsfaehig: "ja",
    postservice: "Annahme, Scan, Weiterleitung (je nach Paket)",
    standorte: ["Deutschland"],
    zwecke: ["impressum", "gewerbe"],
    rechtsformen: ["einzel", "freiberuf", "ug"],
    bonus: { label: "Sehr gut", klasse: "sg", text: "Günstiger Einstieg" },
    geeignetFuer: "Selbstständige & Online-Shops mit kleinem Budget",
    kriterien: { preis: 5, recht: 4.5, service: 4, standorte: 3.5 }
  },
  {
    id: "gam",
    nutzung: ["privat", "geschaeftlich"],
    name: "geschaefts-adresse-mieten.de",
    produkt: "Ladungsfähige Adresse fürs Impressum",
    logo: { text: "Geschäftsadresse", bg: "#ffffff", fg: "#1a1b23" },
    link: "#",
    preisMonat: 2.9,
    preisText: "ab 2,90 € zzgl. USt",
    preisHinweis: "pro Monat, bei jährlicher Zahlung (Aktionspreis, kann abweichen)",
    ladungsfaehig: "ja",
    postservice: "Postannahme & digitale Bereitstellung",
    standorte: ["Deutschland"],
    zwecke: ["impressum", "gewerbe"],
    rechtsformen: ["einzel", "freiberuf", "ug"],
    bonus: { label: "Gut", klasse: "g", text: "Rabatt bei Jahreszahlung" },
    geeignetFuer: "Impressumsadresse zum Mini-Preis",
    kriterien: { preis: 5, recht: 4, service: 3.5, standorte: 3 }
  },
  {
    id: "buchimpressum",
    nutzung: ["privat", "geschaeftlich"],
    name: "buchimpressum.de",
    produkt: "Impressumsservice – Tarif Starter",
    logo: { text: "BuchImpressum", bg: "#ffffff", fg: "#1a1b23" },
    link: "#",
    preisMonat: 4.92,
    preisText: "59 € / Jahr",
    preisHinweis: "entspricht ca. 4,92 € pro Monat inkl. MwSt.",
    ladungsfaehig: "ja",
    postservice: "Digitalisierung, 25 Briefscans/Monat inklusive, danach 0,75 € je Scan",
    standorte: ["Deutschland"],
    zwecke: ["impressum"],
    rechtsformen: ["einzel", "freiberuf"],
    bonus: { label: "Gut", klasse: "g", text: "30 Tage Geld-zurück" },
    geeignetFuer: "Autoren & Self-Publisher",
    kriterien: { preis: 4.5, recht: 4, service: 4, standorte: 2.5 }
  },
  {
    id: "regus",
    nutzung: ["geschaeftlich"],
    name: "Regus",
    produkt: "Regus – Virtual Office",
    logo: { text: "REGUS", bg: "#ffffff", fg: "#0a4aa0" },
    link: "#",
    preisMonat: 40,
    preisText: "ab ca. 40 €",
    preisHinweis: "pro Monat, je nach Standort & Paket (auf Anfrage)",
    ladungsfaehig: "ja",
    postservice: "Postannahme, Weiterleitung, Telefonservice, Meetingräume",
    standorte: ["Berlin", "Hamburg", "Frankfurt", "München", "Köln", "Düsseldorf"],
    zwecke: ["impressum", "gewerbe", "gmbh"],
    rechtsformen: ["einzel", "freiberuf", "ug", "gmbh"],
    bonus: { label: "Befriedigend", klasse: "b", text: "Konditionen auf Anfrage" },
    geeignetFuer: "GmbH-Gründer mit Bedarf an Prestige-Adresse",
    kriterien: { preis: 2.5, recht: 5, service: 5, standorte: 5 }
  },
  {
    id: "spaces",
    nutzung: ["geschaeftlich"],
    name: "Spaces",
    produkt: "Spaces – Business Address",
    logo: { text: "SPACES", bg: "#ffffff", fg: "#1a1b23" },
    link: "#",
    preisMonat: 45,
    preisText: "auf Anfrage",
    preisHinweis: "marktüblich grob 40–100 € pro Monat",
    ladungsfaehig: "ja",
    postservice: "Postannahme, Empfang, Coworking-Zugang optional",
    standorte: ["Frankfurt", "Berlin", "Hamburg", "München"],
    zwecke: ["impressum", "gewerbe", "gmbh"],
    rechtsformen: ["einzel", "freiberuf", "ug", "gmbh"],
    bonus: { label: "Befriedigend", klasse: "b", text: "Konditionen auf Anfrage" },
    geeignetFuer: "Teams, die gelegentlich Coworking nutzen",
    kriterien: { preis: 2.5, recht: 5, service: 4.5, standorte: 4.5 }
  },
  {
    id: "hq",
    nutzung: ["geschaeftlich"],
    name: "HQ",
    produkt: "HQ – Virtuelles Büro",
    logo: { text: "HQ", bg: "#ffffff", fg: "#1a1b23" },
    link: "#",
    preisMonat: 45,
    preisText: "auf Anfrage",
    preisHinweis: "Preis je Standort & Paket",
    ladungsfaehig: "ja",
    postservice: "Postannahme, Weiterleitung, Büro-Services",
    standorte: ["Essen", "Düsseldorf", "Köln", "Frankfurt", "Berlin"],
    zwecke: ["impressum", "gewerbe", "gmbh"],
    rechtsformen: ["einzel", "freiberuf", "ug", "gmbh"],
    bonus: { label: "Befriedigend", klasse: "b", text: "Konditionen auf Anfrage" },
    geeignetFuer: "Unternehmen mit regionalem Bezug (NRW/Rhein-Main)",
    kriterien: { preis: 2.5, recht: 4.5, service: 4.5, standorte: 4 }
  },
  {
    id: "mindspace",
    nutzung: ["geschaeftlich"],
    name: "Mindspace",
    produkt: "Mindspace – Geschäftsadresse",
    logo: { text: "mindspace", bg: "#ffffff", fg: "#1a1b23" },
    link: "#",
    preisMonat: 60,
    preisText: "auf Anfrage",
    preisHinweis: "individuelles Angebot",
    ladungsfaehig: "ja",
    postservice: "Postannahme, Community-Zugang",
    standorte: ["München", "Berlin", "Hamburg", "Frankfurt"],
    zwecke: ["impressum", "gewerbe", "gmbh"],
    rechtsformen: ["einzel", "freiberuf", "ug", "gmbh"],
    bonus: { label: "Befriedigend", klasse: "b", text: "Konditionen auf Anfrage" },
    geeignetFuer: "Start-ups in Premium-Lagen",
    kriterien: { preis: 2, recht: 4.5, service: 4.5, standorte: 4 }
  },
  {
    id: "wezoo",
    nutzung: ["geschaeftlich"],
    name: "Wezoo",
    produkt: "Wezoo – Adress-Marktplatz",
    logo: { text: "Wezoo", bg: "#ffffff", fg: "#1a1b23" },
    link: "#",
    preisMonat: 40,
    preisText: "auf Anfrage",
    preisHinweis: "Marktplatz – Preise direkt beim Betreiber",
    ladungsfaehig: "ja",
    postservice: "abhängig vom gewählten Betreiber",
    standorte: ["Berlin", "München", "Hamburg", "Frankfurt", "Essen", "Köln", "Düsseldorf"],
    zwecke: ["impressum", "gewerbe", "gmbh"],
    rechtsformen: ["einzel", "freiberuf", "ug", "gmbh"],
    bonus: { label: "Gut", klasse: "g", text: "Große Standortauswahl" },
    geeignetFuer: "Wer viele Standorte direkt vergleichen will",
    kriterien: { preis: 3, recht: 4, service: 3.5, standorte: 5 }
  }
];

window.GEWICHTE = { preis: 0.35, recht: 0.3, service: 0.2, standorte: 0.15 };

window.FAQ = [
  ["Was bedeutet „ladungsfähige Anschrift“?",
   "Eine ladungsfähige Anschrift ist eine reale Adresse, unter der du oder dein Unternehmen rechtlich erreichbar bist und unter der Post – auch Behörden- und Gerichtspost – zugestellt werden kann. Ein reines Postfach genügt dafür nicht."],
  ["Darf ich eine gemietete Adresse im Impressum angeben?",
   "Ja, sofern der Anbieter die Ladungsfähigkeit ausdrücklich zusichert und die Adresse für diesen Zweck freigibt. Lass dir das vor Vertragsabschluss schriftlich bestätigen. Dieser Vergleich ersetzt keine Rechtsberatung."],
  ["Kann ich die Adresse für Gewerbeanmeldung und Handelsregister nutzen?",
   "Das hängt vom Anbieter und Paket ab. Für Kapitalgesellschaften wie UG oder GmbH ist eine inländische Geschäftsanschrift erforderlich. Kläre vorab, ob Finanzamt, Gewerbeamt und Registergericht die Adresse akzeptieren."],
  ["Was kostet eine Impressumsadresse?",
   "Einfache Impressums-Adressen mit Postscan gibt es schon im niedrigen einstelligen Euro-Bereich pro Monat. Echte Büro-Standorte in Top-Lagen mit Empfang liegen grob zwischen 40 und 100 € pro Monat."],
  ["Wie schnell ist die Adresse einsatzbereit?",
   "Bei vielen Anbietern nach wenigen Werktagen, teils sofort nach Vertragsabschluss und Identitätsprüfung."],
  ["Wie finanziert sich impressumvergleich24.de?",
   "Wir erhalten bei einigen Anbietern eine Provision, wenn du über einen mit * gekennzeichneten Link abschließt. Für dich entstehen dadurch keine Mehrkosten. Die Reihenfolge im Vergleich richtet sich nach unserer Bewertung."]
];
