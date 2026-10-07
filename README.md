# SmileCare Dental Clinic — Demo Template & Agency Customization Guide

A complete, modern, high-conversion website template designed specifically for **private dental clinics and oral healthcare specialists**. Built with clean semantic HTML5, CSS3, and vanilla JavaScript for ultra-fast performance, zero build-step barriers, and maximum client trustworthiness.

---

## Table of Contents
1. [Quick Start / Running Locally](#1-quick-start--running-locally)
2. [How the Project is Structured](#2-how-the-project-is-structured)
3. [Customizing Clinic Information (Zero Code Hunting)](#3-customizing-clinic-information)
4. [Replacing Images & Recommended Specs](#4-replacing-images--recommended-specs)
5. [Connecting the Appointment Form to a Live Service](#5-connecting-the-appointment-form-to-a-live-service)
6. [Deploying to a Custom Domain](#6-deploying-to-a-custom-domain)

---

## 1. Quick Start / Running Locally

You have multiple zero-friction options to preview and test the website on your computer:

### Option A: Using the Built-In Node.js Server (Recommended)
This template includes a zero-dependency local web server in `server.js` (no `npm install` needed).
In your project terminal:
```bash
node server.js
```
Then open your browser to: **`http://localhost:3000`**

### Option B: Direct File Opening
Because this project uses vanilla modern web standards with no build step, you can simply **double-click `index.html`** in Windows File Explorer or right-click and select **"Open with Google Chrome / Edge / Firefox"**.

### Option C: VS Code Live Server
If you use VS Code:
1. Install the **Live Server** extension.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 2. How the Project is Structured

```
d:\Web\
├── index.html              # Semantic HTML5 with complete layout, modals & accessibility
├── server.js               # Zero-dependency local Node.js server (http://localhost:3000)
├── README.md               # Customization & deployment documentation
├── css\
│   ├── style.css           # Design tokens, medical palette, typography, cards & animations
│   └── responsive.css      # Fluid responsive breakpoints (Desktop, Tablet, Mobile)
└── js\
    ├── config.js           # 🌟 CENTRAL CONFIG HUB: All clinic data, doctor bio, contact, colors
    ├── app.js              # Interactive UI controller (sticky nav, form, accordions, modals)
    └── gallery-lightbox.js # Accessible image lightbox with keyboard & arrow navigation
```

---

## 3. Customizing Clinic Information

All clinic data, doctor credentials, treatments, contact numbers, and timings are managed in **`js/config.js`**. You do not need to search through hundreds of lines of HTML to rebrand the website for a new client!

### Step 1: Open `js/config.js`
In your editor, open `js/config.js`. You will find clearly structured sections:

```javascript
const CLINIC_CONFIG = {
  // 1. Clinic Branding
  clinicName: "SmileCare Dental Clinic",
  tagline: "Confident Smiles Start Here",
  subTagline: "Personalized dental care in a comfortable, modern clinic...",
  
  // 2. Contact Details
  contact: {
    phoneDisplay: "+91 98765 43210",
    phoneTel: "+919876543210",
    email: "hello@smilecareclinic.example",
    whatsappNumber: "919876543210", // Country code + number without symbols
    whatsappDefaultMessage: "Hello, I would like to inquire about booking an appointment.",
    addressLine1: "123 Example Road",
    addressLine2: "Indiranagar, 2nd Stage",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560038",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=..."
  },

  // 3. Operating Hours
  hours: {
    weekdays: "Monday – Saturday: 9:00 AM – 7:00 PM",
    sunday: "Sunday: Closed (Emergency consultations on request)"
  },

  // 4. Doctor Profile
  doctor: {
    name: "Dr. Ananya Rao",
    qualifications: "BDS, MDS",
    title: "Consultant Dentist & Oral Healthcare Specialist",
    shortBio: "Dr. Ananya Rao is committed to providing comfortable...",
    fullBio: "With over 12 years of clinical experience...",
    experienceYears: "12+",
    photo: "https://..."
  },

  // 5. Treatments, Testimonials, Gallery, and Theme Colors...
};
```

When you edit this file, `js/app.js` automatically binds these values across the navigation, phone links, WhatsApp links, emails, and address blocks.

---

## 4. Replacing Images & Recommended Specs

### Recommended Image Dimensions & Aspect Ratios
| Location | Recommended Size | Aspect Ratio | Format |
|---|---|---|---|
| **Hero Clinic Photo** | 1200 x 900 px | 4:3 or 16:10 | WebP or JPG |
| **Doctor Photograph** | 800 x 1000 px | 4:5 Portrait | WebP or JPG |
| **Gallery Images (6)** | 1200 x 800 px | 3:2 or 16:11 | WebP or JPG |
| **Social / Open Graph** | 1200 x 630 px | 1.91:1 | PNG or JPG |

### How to Replace Images:
1. Save the client's optimized photos into an `assets/images/` folder (or host them via Cloudinary / CDN).
2. For the **Doctor photo**, update `CLINIC_CONFIG.doctor.photo` in `js/config.js` and the `<img>` tags in `index.html`.
3. For the **Gallery photos**, update the `CLINIC_CONFIG.gallery` array in `js/config.js` and the corresponding `src` attributes in `index.html`.

> **Performance Tip**: Run images through [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app) to keep file sizes under 150KB per image for lightning-fast mobile loading.

---

## 5. Connecting the Appointment Form to a Live Service

The demo currently performs clean client-side validation and opens an attractive confirmation modal showing the patient's booking summary. To connect this to a real backend service for live client deployment, choose any of the methods below:

### Method A: Web3Forms (Zero Backend / 100% Free / Instant Setup)
1. Go to [web3forms.com](https://web3forms.com) and enter the clinic's email to get an Access Key.
2. In `index.html`, add your Access Key inside the `<form id="appointment-form">`:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. In `js/app.js` inside `initAppointmentForm()`, change the submission handler to send via `fetch`:
   ```javascript
   fetch('https://api.web3forms.com/submit', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   })
   .then(res => res.json())
   .then(data => {
     // Trigger confirmation modal
   });
   ```

### Method B: Formspree
1. Register at [formspree.io](https://formspree.io) and create a new form.
2. In `index.html`, set:
   ```html
   <form id="appointment-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Method C: Direct WhatsApp Booking (Favorite for Indian & Asian Clinics)
You can directly route appointment submissions to the clinic's WhatsApp chat with all patient details pre-formatted:
```javascript
const waMessage = `*New Appointment Request*%0A`
  + `*Name:* ${encodeURIComponent(formData.fullName)}%0A`
  + `*Phone:* ${encodeURIComponent(formData.phone)}%0A`
  + `*Treatment:* ${encodeURIComponent(formData.treatmentLabel)}%0A`
  + `*Date:* ${encodeURIComponent(formData.preferredDate)}%0A`
  + `*Slot:* ${encodeURIComponent(formData.preferredTime)}%0A`
  + `*Notes:* ${encodeURIComponent(formData.message)}`;

window.open(`https://wa.me/${CLINIC_CONFIG.contact.whatsappNumber}?text=${waMessage}`, '_blank');
```

---

## 6. Deploying to a Custom Domain

Because this website is built with clean static standards, you can host it anywhere with zero monthly server costs:

### Option 1: Vercel (Fastest & Free SSL)
1. Install Vercel CLI (`npm i -g vercel`) or go to [vercel.com](https://vercel.com).
2. Simply drag and drop the `d:\Web` folder into the Vercel Dashboard.
3. In **Project Settings > Domains**, enter the client's custom domain (e.g. `www.smilecareclinic.in`) and follow the simple DNS instructions.

### Option 2: Netlify (Drag & Drop)
1. Log in to [netlify.com](https://netlify.com).
2. Drag the `d:\Web` folder directly into the **Sites** deploy box.
3. Connect the clinic's custom domain in **Domain management**.

### Option 3: Traditional cPanel / Shared Hosting (Hostinger / GoDaddy / Bluehost)
1. Log in to the client's cPanel or hosting control panel.
2. Open **File Manager** and navigate to `public_html/`.
3. Upload all files and folders (`index.html`, `css/`, `js/`, `assets/`).
4. That's it! The website will load immediately under the domain.

---

## Final Quality Checklist Completed
- [x] Zero "Lorem ipsum" — authentic, patient-reassuring copy throughout
- [x] Medical claims comply with ethical medical standards (no false promises or fake guarantees)
- [x] Sticky navigation with smooth scrolling and active section spy
- [x] Accessible mobile hamburger menu drawer with keyboard Escape dismissal
- [x] Interactive treatment "Learn More" procedure modals with appointment pre-selection
- [x] Interactive Dr. Ananya Rao credentials and philosophy modal
- [x] Accessible FAQ accordion with ARIA state attributes
- [x] High-conversion appointment request form with minimum-date restriction
- [x] Responsive clinic gallery with fullscreen image lightbox (arrow keys & Escape support)
- [x] Direct WhatsApp and Click-to-Call integration
- [x] Fully responsive across Mobile, Tablet, Laptop, and Desktop screens
