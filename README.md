#  System Design & Development – Storybook

A React-based Component Driven Development project using Storybook to build, isolate, test, and document reusable UI components.

---

## 🚀 Live Demo

Storybook:
https://system-design-and-development-story-nine.vercel.app/

---

## 🎯 Project Objective

The objective of this project is to establish a reusable component-driven workflow using Storybook.

The project demonstrates:

- Component isolation
- Reusable UI components
- Storybook Stories
- Dynamic Args & Controls
- Multiple component states
- Accessibility configuration
- Static Storybook build
- Vercel deployment

---

## 🛠️ Tech Stack

- React
- Vite
- Storybook
- JavaScript
- React Router
- CSS
- Vitest
- Git & GitHub
- Vercel

---

## 📦 Components

The project includes the following core components:

### Badge
Reusable status and label component.

### Button
Reusable action component with different states such as:

- Primary
- Secondary
- Disabled

### Input
Reusable form input component.

### ProductCard
E-commerce product component supporting:

- Product image
- Title
- Brand
- Category
- Price
- Rating
- Discount
- Stock state
- Navigation

---

## 📚 Storybook

Stories are located inside:
---
src/stories/
├── Badge.stories.jsx
├── Button.stories.jsx
├── Input.stories.jsx
└── ProductCard.stories.jsx
---

# 📁 Project Structure
---
├── .storybook/
│   ├── main.js
│   └── preview.jsx
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── stories/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
---
---
⚙️ Installation

Clone the repository:

git clone https://github.com/vansh21827/System-Design-and-Development-Storybook.git

Navigate to the project:

cd System-Design-and-Development-Storybook

Install dependencies:

npm install
▶️ Run Application

Start the React application:

npm run dev

Start Storybook:

npm run storybook

Storybook runs by default at:

http://localhost:6006
🏗️ Production Build

Build the React application:

npm run build

Build Storybook:

npm run build-storybook

The static Storybook output is generated in:

storybook-static/
☁️ Vercel Deployment

The Storybook application is deployed as a static production build.

Vercel Configuration
Setting	Value
Framework Preset	Other
Build Command	npm run build-storybook
Output Directory	storybook-static
Install Command	npm install
♿ Accessibility

Storybook Accessibility addon is configured to help identify common accessibility issues during component development.

📋 Sprint Completion
Phase 1 – Base Architecture
✅ Storybook configured
✅ Minimum 3 core components
✅ Component stories
✅ Isolated Storybook environment
Phase 2 – State & Integration
✅ Args & Controls
✅ Multiple component variants
✅ Accessibility addon
⏳ Dark Mode – Future Enhancement
Phase 3 – Advanced
✅ Static Storybook build
✅ Production deployment
✅ Vercel hosting
📌 Project Status

Status: ✅ Completed

The project successfully demonstrates a component-driven React development workflow with Storybook and a production-ready static deployment.

👨‍💻 Author

Vansh Bansal

Frontend Developer
```
