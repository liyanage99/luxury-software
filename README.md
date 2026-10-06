# Luxury Software website

Static site: no build step. Open `index.html` in a browser, or upload the folder to any web host.

```
luxury-software/
├── index.html        Page structure (semantic HTML, SEO meta)
├── css/style.css     Design tokens, glass styles, layout, responsive rules
├── js/config.js      ✏️  EDIT HERE: logo, contact info, services, clients, stats, industries, process
├── js/icons.js       Inline SVG icon paths
├── js/main.js        Rendering, mobile menu, scroll reveal, counters, form handling
└── assets/           logo.svg (placeholder), favicon.svg
```

## Common edits
- **Logo:** replace `assets/logo.svg` with your logo (or change `logo` in `js/config.js` to e.g. `assets/logo.png`).
- **Client logos:** in `js/config.js`, change `{name:"Abans"}` to `{name:"Abans", logo:"assets/clients/abans.svg"}`.
- **Colours / fonts:** top of `css/style.css` (`:root` tokens).
- **Contact form:** currently front-end only. Connect `#form` in `js/main.js` to your backend, Formspree, EmailJS, etc.
- Client names, stats and contact details are placeholders.

- **Projects and feedback:** edit `projects` and `testimonials` in `js/config.js` (optional project `image` path). Current entries are sample content.
