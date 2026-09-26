# FitLog — Workout Library

FitLog is a responsive workout library and planning application built with Next.js. It allows users to explore workouts, view detailed workout instructions, create a daily workout plan, and save workouts for later.

## Live Demo

**Live Website:** [assignment-6-beta-taupe.vercel.app](https://assignment-6-beta-taupe.vercel.app/)

**GitHub Repository:** [github.com/tamim-111/assignment-6](https://github.com/tamim-111/assignment-6)

---

## Features

* **Workout Library** — Browse workouts covering different muscle groups and difficulty levels.
* **Workout Details** — View workout descriptions, equipment, sets, reps, duration, calories, ratings, and step-by-step instructions.
* **Sort Workouts** — Sort workouts by duration, calories, or rating.
* **Today's Plan** — Add workouts to a personal daily workout plan.
* **Saved Workouts** — Save workouts for later.
* **Plan Metrics** — See the total number of exercises, workout minutes, and estimated calories for the current plan.
* **Mark as Done** — Mark planned workouts as completed.
* **Remove Workouts** — Remove workouts from the daily plan or saved list.
* **Local Storage** — Keep the plan and saved workouts after refreshing the browser.
* **Toast Notifications** — Get feedback when adding, saving, removing, or completing workouts.
* **Responsive Design** — Works across desktop, tablet, and mobile screen sizes.
* **Custom 404 Page** — Shows a dedicated page when a route does not exist.

---

## Technologies Used

* **Next.js** — React framework using the App Router
* **React** — User interface development
* **TypeScript** — Type-safe development
* **Tailwind CSS** — Styling and responsive design
* **DaisyUI** — UI components and loading states
* **React Icons** — Interface icons
* **React Toastify** — Toast notifications
* **Local Storage** — Client-side persistence
* **REST API** — Workout data fetching

---

## API

FitLog uses the provided workout API to load the workout data.

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## Main Pages

### Home

The home page contains:

* Hero section
* Workout library
* Workout cards
* Workout sorting

### Workout Details

Each workout has a dedicated details page containing:

* Workout image
* Muscle groups
* Description
* Equipment
* Difficulty
* Sets and reps
* Duration
* Calories
* Rating
* Step-by-step instructions
* Add to Today's Plan
* Save for Later

### My Plan

The My Plan page contains:

* Today's Plan
* Saved Workouts
* Exercise count
* Total workout minutes
* Total calories
* Mark as Done
* Remove workout
* View Details
* Empty states

---

## Project Structure

```text
fit-log/
│
├── public/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── my-plan/
│   │   │   └── page.tsx
│   │   ├── workouts/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Library.tsx
│   │   │   ├── WorkoutCard.tsx
│   │   │   └── SortDropdown.tsx
│   │   ├── workout/
│   │   │   ├── WorkoutDetails.tsx
│   │   │   ├── WorkoutSpecs.tsx
│   │   │   └── WorkoutActions.tsx
│   │   └── plan/
│   │       ├── PlanMetrics.tsx
│   │       ├── PlanTabs.tsx
│   │       ├── PlanWorkoutCard.tsx
│   │       └── EmptyPlan.tsx
│   │
│   ├── context/
│   │   └── FitLogContext.tsx
│   │
│   ├── hooks/
│   │   └── useFitLog.ts
│   │
│   ├── lib/
│   │   ├── api.ts
│   │   └── utils.ts
│   │
│   └── types/
│       └── workout.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd fit-log
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Build for Production

To create a production build:

```bash
npm run build
```

To run the production version locally:

```bash
npm start
```

---

## Responsive Design

FitLog is designed to work across:

* 📱 Mobile
* 📱 Tablet
* 💻 Laptop
* 🖥️ Desktop

The layout, navigation, workout cards, details page, and My Plan page adapt to different screen sizes.

---

## Author

**Muhammad Tamim**

CSE Student | Aspiring Software Engineer

---
