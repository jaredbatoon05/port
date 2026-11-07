# Jared L. Batoon — Personal BSCS & IT Portfolio Web Application

A responsive, modern personal portfolio web application optimized for instant deployment on **Vercel** or local hosting in **XAMPP / Apache**.

---

## 🌟 Key Features

- **Cyber & Electric Blue Aesthetic**:
  - **Light Mode**: Clean, cool slate background (`#f8fafc`) with deep royal blue accents and sharp typography.
  - **Dark Mode**: Deep carbon navy background (`#070b14` / `#0c1324`) with vibrant **electric cyan & neon blue glow** accents.
  - Smooth theme toggling with automatic `localStorage` persistence and system preference detection.
- **Custom Design Adjustments**:
  - **No "Earned" tag** on certificates — modern, clean document display with institution badges, date issued, and verification IDs.
  - Interactive **Certificate Lightbox Modal** for high-resolution inspection.
  - Featured Project: **Balai ti Arjud — Glow & Co. Beauty Lounge** with a 6-screenshot **interactive gallery slider** supporting touch swipe gestures, arrow navigation, keyboard controls, and captions.
- **Centralized Data File (`data.js`)**: All personal info, education milestones, skills, project galleries, and certificate data are separated into a single configuration object.

---

## 📁 File Structure

```text
Batoon Portfolio/
├── assets/
│   ├── profile.svg                # Modern tech silhouette avatar
│   ├── certs/
│   │   ├── cert-dict-startup.png  # DICT Philippine Startup Challenge XI
│   │   ├── cert-dost-ihub.webp    # DOST & iHub Cordillera Startups
│   │   └── cert-dict-netiquette.webp # DICT Online Safety Netiquette
│   └── projects/
│       └── balai_ti_arjud/        # 6 screenshots of the salon & spa booking web app
├── data.js                        # Centralized portfolio data
├── app.js                         # Application logic, theme engine, touch slider, modals
├── style.css                      # Minimalist CSS & electric blue neon glow effects
├── index.html                     # Responsive single-page layout
├── vercel.json                    # Vercel deployment headers & configuration
└── README.md                      # Documentation & deployment guide
```

---

## 🚀 How to Deploy to Vercel (Instant & Free)

1. Push this folder to a GitHub repository:
   ```bash
   git remote add origin https://github.com/jaredbatoon05/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository, leave Framework Preset as **Other**, and click **Deploy**.
4. Your site will be live instantly!

---

## 💻 Local Testing

- **XAMPP**: Visit `http://localhost/Batoon%20Portfolio/` in your browser.
- **Direct**: Open `index.html` directly in Chrome, Edge, or Firefox.
