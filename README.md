# 🧩 System Design & Development – Storybook

A React-based Component Driven Development project using Storybook to build, isolate, document, and validate reusable UI components.


---

## 🚀 Live Demo

### Storybook
https://system-design-and-development-story-nine.vercel.app/

---

## 🎯 Project Objective

The objective of this project is to establish a reusable and scalable component-driven development workflow using Storybook.

The project demonstrates:

- Component isolation
- Reusable UI components
- Storybook Stories
- Dynamic Args & Controls
- Multiple component states
- Accessibility configuration
- Static Storybook builds
- Production deployment using Vercel

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI development |
| Vite | Development & build tooling |
| Storybook | Component development & documentation |
| JavaScript | Application logic |
| React Router | Client-side navigation |
| CSS | Component styling |
| Vitest | Testing |
| Playwright | Browser testing |
| Git & GitHub | Version control |
| Vercel | Production deployment |

---

## 📦 Components

The project contains the following reusable components.

### Badge

Reusable status and label component.

### Button

Reusable action component supporting multiple states:

- Primary
- Secondary
- Disabled

### Input

Reusable form input component.

### ProductCard

E-commerce product component supporting:

- Product image
- Product title
- Brand
- Category
- Price
- Rating
- Discount
- Stock state
- Product navigation

---

## 📚 Storybook

All Storybook stories are organized inside:

```
src/
└── stories/
    ├── Badge.stories.jsx
    ├── Button.stories.jsx
    ├── Input.stories.jsx
    └── ProductCard.stories.jsx
```

### ProductCard Variants

The ProductCard story demonstrates multiple product scenarios:

Default
No Discount
Expensive
Discount
Out of Stock
---

# 📁 Project Structure
```
System-Design-and-Development-Storybook/
│
├── .storybook/
│   ├── main.js
│   └── preview.jsx
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── iphone.png
│   │   ├── smartwatch.png
│   │   ├── macbook.png
│   │   ├── ipad.png
│   │   └── speaker.png
│   │
│   ├── components/
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── stories/
│   │   ├── Badge.stories.jsx
│   │   ├── Button.stories.jsx
│   │   ├── Input.stories.jsx
│   │   └── ProductCard.stories.jsx
│   │
│   ├── styles/
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```
---
## ⚙️ Installation
1. Clone the repository
git clone https://github.com/vansh21827/System-Design-and-Development-Storybook.git

2. Navigate to the project
cd System-Design-and-Development-Storybook

4. Install dependencies
npm install
---
## ▶️ Run the Project
Start React Application
npm run dev
Start Storybook
npm run storybook

### Storybook runs at:
http://localhost:6006
---

## 🏗️ Production Build
Build React Application
npm run build
Build Storybook
npm run build-storybook

The static Storybook build is generated inside:
storybook-static/
---
## ☁️ Vercel Deployment

The Storybook application is deployed as a static production build using Vercel.

Vercel Configuration
Setting | Value
Framework Preset |	Other
Build Command |	npm run build-storybook
Output Directory |	storybook-static
Install Command | npm install
---

Deployment Flow
```
GitHub Repository
       ↓
Vercel
       ↓
npm install
       ↓
npm run build-storybook
       ↓
storybook-static/
       ↓
Live Storybook
```
---
## ♿ Accessibility

The project includes the Storybook Accessibility addon to help identify common accessibility issues during component development.

Accessibility considerations include:

Semantic HTML
Accessible interactive elements
Image alternative text
Keyboard-friendly controls
Component-level accessibility checks
---

##🔮 Future Enhancements

Potential future improvements include:

Dark Mode support
Advanced interaction testing
Visual regression testing
Chromatic integration
Automated CI/CD
Expanded component library
Centralized design tokens
MDX-based component documentation
---

###👨‍💻 Author
Vansh Bansal

