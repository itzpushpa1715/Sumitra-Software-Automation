# Sumitra Software & Automation — Website

A static, no-backend company website: Home, About, Services, Contact.

## Structure
```
sumitra-website/
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/style.css
├── js/script.js
└── images/ (logo + favicons)
```

## Before you launch
1. **Replace placeholders** — the real email (`info@sumitrasoftware.com.np`) and
   phone number (`+977 00-000000`) are placeholders. Search-and-replace them in
   all four `.html` files and in `js/script.js` (the `mailto:` fallback address).
2. **Contact form** — the form has no backend. Right now it opens a pre-filled
   email in the visitor's mail client as a reliable fallback. To send email
   directly instead, sign up at emailjs.com and wire it up where marked with a
   comment block in `js/script.js`.
3. **Social links** — LinkedIn/Facebook icons in the header and footer link to
   `#` until you add real profile URLs.

## Preview locally
Open `index.html` directly in a browser, or serve the folder:
```
npx serve .
```

## Deploy
Push this folder to GitHub and enable **GitHub Pages**, or drag-and-drop it
into **Netlify** or **Cloudflare Pages** — all free static hosts, no build step
needed.
# Sumitra-Software-Automation
