# 💪 FitLog — Workout Library

A modern workout library and daily workout planner built with **Next.js**. FitLog helps users explore exercises, view detailed workout information, build a daily workout plan, and save workouts for later.

## 🔗 Live Demo

**Live Website:** [assignment-6-beta-taupe.vercel.app](https://assignment-6-beta-taupe.vercel.app/)

**GitHub Repository:** [github.com/tamim-111/assignment-6](https://github.com/tamim-111/assignment-6)

---

## ✨ Features

* 🏋️ **Workout Library** — Browse a collection of workouts covering different muscle groups and difficulty levels.
* 🔎 **Workout Details** — View complete workout information including equipment, difficulty, sets, reps, duration, calories, rating, and instructions.
* 📋 **Today's Plan** — Add workouts to a daily plan and track total exercises, workout time, and calories.
* 💾 **Save for Later** — Save workouts that you want to use later.
* 🔄 **Sorting** — Sort workouts by duration, calories, or rating.
* ✅ **Mark as Done** — Mark planned workouts as completed.
* 🗑️ **Remove Workouts** — Easily remove workouts from the daily plan.
* 🔔 **Toast Notifications** — Get feedback when adding, saving, completing, or removing workouts.
* 📱 **Responsive Design** — Optimized for mobile, tablet, and desktop screens.
* ⚡ **Loading & Empty States** — Clear loading indicators and helpful empty-state messages.
* 🚫 **404 Page** — Handles unknown or invalid routes.
* 🔗 **Dynamic Workout Pages** — Each workout has its own detail page.

---

## 🛠️ Technologies Used

### Frontend

* **Next.js 16**
* **React 19**
* **TypeScript**
* **Tailwind CSS 4**
* **DaisyUI**
* **React Icons**
* **React Toastify**

### API & Data

FitLog uses the provided FitLog API to fetch workout data.

**All workouts:**

`https://api.abcz.workers.dev/api/fitlog`

**Single workout:**

`https://api.abcz.workers.dev/api/fitlog/:id`

---

## 📂 Project Structure

```text
assignment-6/
├── public/
├── src/
│   ├── app/
│   │   ├── my-plan/
│   │   ├── workout/
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   └── layout.tsx
│   │
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   └── types/
│
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tamim-111/assignment-6.git
```

### 2. Go to the project directory

```bash
cd assignment-6
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Start

```bash
npm run start
```

Starts the application in production mode.

### Lint

```bash
npm run lint
```

Runs ESLint to check the project code.

---

## 🎯 Main Pages

### Home `/`

The homepage contains:

* Hero section
* Workout library
* Workout cards
* Workout sorting
* Loading state
* Responsive layout

### Workout Details `/workout/[id]`

Displays detailed information about a selected workout, including:

* Workout image
* Workout name
* Description
* Categories
* Equipment
* Difficulty
* Sets and reps
* Duration
* Calories
* Rating
* Instructions
* Add to Today's Plan
* Save for Later

### My Plan `/my-plan`

Allows users to manage their selected workouts.

It includes:

* Today's Plan
* Saved workouts
* Exercise count
* Total duration
* Total calories
* Mark as Done
* Remove workout
* View Details
* Empty state

### 404 Page

Invalid or unknown routes are handled with a custom not-found page.

---

## 📱 Responsive Design

FitLog is designed to work across different screen sizes:

* 📱 Mobile
* 📱 Tablet
* 💻 Desktop

The workout grid, navigation, hero section, cards, and My Plan layout adapt to smaller screens.

---

## 🔄 User Flow

```text
Home
  │
  ├── Browse Workouts
  │       │
  │       └── Workout Details
  │              │
  │              ├── Add to Today's Plan
  │              │
  │              └── Save for Later
  │
  └── My Plan
         │
         ├── Today's Plan
         │      ├── View Details
         │      ├── Mark as Done
         │      └── Remove
         │
         └── Saved
```

---

## 🎨 Design

The project follows the provided **FitLog Figma design** with a dark fitness-focused visual style, bold typography, accent colors, workout cards, responsive layouts, and clear call-to-action elements.

---

## 🌐 Deployment

The application is deployed on **Vercel**.

**Live:** [assignment-6-beta-taupe.vercel.app](https://assignment-6-beta-taupe.vercel.app/)

---

## 👨‍💻 Author

**Muhammad Tamim**

Full-Stack Web Developer

* GitHub: [@tamim-111](https://github.com/tamim-111)

---

## 📄 Assignment

This project was developed as part of the **B14-A6 FitLog** assignment.

The application implements the required workout library, workout details, daily planning, saved workouts, responsive UI, sorting, notifications, and deployment requirements.
