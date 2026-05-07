# Just Family — Static Website

This is the static HTML/CSS/JS website for [keesisklaar.nl](https://keesisklaar.nl), ready to publish via **GitHub Pages**.

## Structuur

```
just-family-site/
├── index.html          ← Homepage
├── css/
│   └── style.css       ← Alle stijlen
├── js/
│   └── main.js         ← Navigatie, FAQ accordion, animaties
├── over/
│   └── index.html      ← Over Just pagina
├── faq/
│   └── index.html      ← FAQ pagina
├── contact/
│   └── index.html      ← Contactpagina
└── proef/
    └── index.html      ← Proef de app pagina
```

## Publiceren via GitHub Pages

### Stap 1 – Maak een GitHub repository aan

1. Ga naar [github.com](https://github.com) en log in
2. Klik op **New repository**
3. Geef het een naam, bijv. `just-family-website`
4. Kies **Public** (vereist voor gratis GitHub Pages)
5. Klik **Create repository**

### Stap 2 – Upload de bestanden

**Via de GitHub website (makkelijkst):**
1. Open je nieuwe repository
2. Klik op **uploading an existing file**
3. Sleep alle bestanden en mappen hierheen
4. Klik op **Commit changes**

**Via de terminal (Git):**
```bash
cd just-family-site
git init
git add .
git commit -m "Initial commit: Just Family website"
git branch -M main
git remote add origin https://github.com/JOUW-GEBRUIKERSNAAM/just-family-website.git
git push -u origin main
```

### Stap 3 – Activeer GitHub Pages

1. Ga in je repository naar **Settings** → **Pages**
2. Onder **Source**: kies **Deploy from a branch**
3. Kies de **main** branch en de **/ (root)** map
4. Klik **Save**
5. Wacht 1-2 minuten — dan is de site live op:
   `https://JOUW-GEBRUIKERSNAAM.github.io/just-family-website/`

### Eigen domeinnaam koppelen (bijv. keesisklaar.nl)

1. Ga naar **Settings** → **Pages** → **Custom domain**
2. Vul in: `keesisklaar.nl`
3. Sla op — GitHub maakt automatisch een `CNAME` bestand aan
4. Bij je domeinhoster, voeg een DNS record toe:
   - Type: `A`
   - Name: `@`
   - Values:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Of een `CNAME` record:
     - Name: `www`
     - Value: `JOUW-GEBRUIKERSNAAM.github.io`
5. Wacht 10–60 minuten voor DNS-propagatie
6. Schakel **Enforce HTTPS** in (aanbevolen)

## Opmerkingen

- Afbeeldingen worden geladen van de originele WordPress-site (`keesisklaar.nl`). Als je die hosting opzegt, moet je de afbeeldingen lokaal opslaan.
- Het contactformulier toont een bevestiging maar verstuurt geen e-mail. Koppel hiervoor een dienst als [Formspree](https://formspree.io) of [Netlify Forms](https://www.netlify.com/products/forms/).
- Artikelen linken naar Substack (extern).
