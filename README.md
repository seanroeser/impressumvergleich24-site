# impressumvergleich24.de

Statische Vergleichsseite für Impressums- und Geschäftsadressen. Reines HTML, CSS und JavaScript, ohne Build-Schritt, ohne Datenbank, ohne Abhängigkeiten.

## Struktur

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite (Hero, Filter, Vergleichstabelle, Ratgeber, FAQ) |
| `data.js` | Alle Anbieter, Preise, Bewertungskriterien, Affiliate-Links und FAQ |
| `app.js` | Filter, Sortierung, Berechnung der Redaktionsnote, Tabellen-Rendering |
| `style.css` | Dunkles Design |
| `impressum.html`, `datenschutz.html` | Pflichtseiten (Platzhalter ausfüllen) |
| `.htaccess` | HTTPS- und www-Weiterleitung, Caching (Apache) |
| `robots.txt`, `sitemap.xml`, `favicon.svg` | SEO und Icon |

## Inhalte pflegen

Alles Inhaltliche steht in `data.js`:

- `link`: Affiliate-Link des Anbieters (aktuell `#`)
- `preisMonat`, `preisText`, `preisHinweis`: Preisangaben
- `kriterien` (0 bis 5): Preis, Recht, Service, Standorte. Daraus wird die Gesamtnote automatisch mit den `GEWICHTE` berechnet.
- `nutzung`: `privat` und/oder `geschaeftlich` (steuert den Filter „Nutzung“)
- `STAND`: Datum der letzten Aktualisierung

## Lokal ansehen

Datei `index.html` im Browser öffnen, oder:

```bash
python3 -m http.server 8000
```

## Deployment

Alle Dateien (inklusive `.htaccess`) per FTP in den Webroot der Domain hochladen. `index.html` muss im Stammordner liegen.

## Vor dem Livegang

- [ ] Affiliate-Links in `data.js` eintragen
- [ ] Preise und Leistungen beim jeweiligen Anbieter prüfen
- [ ] Kriterienwerte durch eigene Bewertung ersetzen
- [ ] Platzhalter in `impressum.html` und `datenschutz.html` ausfüllen und rechtlich prüfen
- [ ] Datum in `sitemap.xml` und `STAND` aktualisieren

Dieser Vergleich ersetzt keine Rechtsberatung.
