# Agency Portfolio v2

A modern agency portfolio application built with React (Create React App) and Firebase.  
This project showcases creative services while implementing real-world frontend architecture patterns including form validation, Firebase integration, image upload, and admin approval workflow.

## Live Demo

agency-portfolio-v2-snowy.vercel.app

---

## Features

- Dynamic service showcase section
- Contact form with client-side validation
- Firebase Firestore integration for message storage
- Admin approval workflow system
- Image upload functionality using Firebase Storage
- Smooth-scroll micro interactions
- Responsive mobile-first layout

---

## Tech Stack

**Frontend**
- React (CRA)
- JavaScript (ES6+)
- CSS

**Backend & Services**
- Firebase Authentication
- Firebase Firestore
- Firebase Storage

**Deployment**
- Vercel

---

## Architecture Overview

This project follows a modular React structure:

- Separation between UI components and utility logic
- Firebase abstraction layer for data submission
- Form validation handled through controlled components using useState
- Image upload handled via dedicated utility functions
- Admin dashboard separated from public-facing pages

---

## Folder Structure

src/

├── admin/

├── components/

├── utils/

├── firebase.js

├── App.js

---

## 🧠 Key Technical Implementation

- Controlled form validation using React useState
- Asynchronous Firebase Firestore submission
- Firebase Storage image upload integration
- Admin confirmation system logic
- Modular component-based design

---

## ⚙️ Installation & Run Locally

Clone the repository:

```bash
git clone https://github.com/anansyah24satriyo-dev/agency-portfolio-v2.git

Install dependencies:

npm install

Run development server:

npm start

Build for production:

npm run build
