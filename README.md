# FitLog

FitLog is a responsive workout tracking web application built with Next.js, React, and TypeScript. Users can explore workouts, view detailed workout information, create a daily workout plan, and save workouts for later.

## Live Demo

[**Visit FitLog**](https://fit-log-weld-xi.vercel.app/)

## Features

- Browse a variety of workouts and exercises.
- View detailed information about individual workouts.
- Add workouts to today's plan.
- Save workouts for later.
- Manage today's plan and saved workouts.
- Mark workouts as completed.
- Remove workouts from today's plan or saved list.
- Sort workouts by:
  - Duration
  - Calories burned
  - Rating
- Responsive navigation bar, banner, and workout library.

## Technologies Used

- **Next.js** – React framework with App Router and dynamic routing.
- **React** – Component-based user interface.
- **TypeScript** – Type safety and improved code maintainability.
- **Tailwind CSS** – Utility-first styling.
- **DaisyUI** – UI components and styling.
- **React Icons** – Icons for the user interface.
- **React Toastify** – Toast notifications.

## Key Implementations

### Context API

Used React Context API to manage shared application state, including:

- Today's workout plan
- Saved workouts
- Selected tab
- Completed workout tracking

### Dynamic Routing

Implemented Next.js dynamic routing to display individual workout details based on workout ID.

```text
/workout-details/[id]
```

### Workout Management

Implemented functionality to add workouts to today's plan, save workouts for later, remove workouts, and mark workouts as completed.

### Sorting

Implemented sorting functionality for today's plan and saved workouts based on:

- Duration
- Calories burned
- Rating

### Reusable Components

The application is organized into reusable components, including:

- Navbar
- Banner
- Library and Library Card
- Workout Details
- Listed Workout Card
- Listed Workout Fallback
- Delete Button
- Save Later Button
- Today Plan Button
- Mark as Done
- Footer

## Project Structure

```text
fit-log/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── my-plan/
│   │   │   └── page.tsx
│   │   └── workout-details/
│   │       ├── not-found.tsx
│   │       └── [id]/
│   │           └── page.tsx
│   ├── assets/
│   ├── components/
│   │   ├── deleteButton/
│   │   │   └── DeleteButton.tsx
│   │   ├── homepage/
│   │   │   ├── Banner.tsx
│   │   │   ├── BrowseButton.tsx
│   │   │   ├── Library.tsx
│   │   │   └── LibraryCard.tsx
│   │   ├── shared/
│   │   │   ├── Footer.tsx
│   │   │   ├── ListedWorkoutCard.tsx
│   │   │   ├── ListedWorkoutFallback.tsx
│   │   │   ├── MarkAsDone.tsx
│   │   │   └── Navbar.tsx
│   │   └── workoutDetails/
│   │       ├── SaveLaterButton.tsx
│   │       └── TodayPlanButton.tsx
│   ├── context/
│   │   └── WorkoutContext.tsx
│   └── types/
│       └── exerciseDataTypes.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
└── next-env.d.ts
```

## Getting Started

Follow these steps to run FitLog locally.

### 1. Clone the repository

```bash
git clone https://github.com/rezasdsju/fit-log.git
```

### 2. Navigate to the project directory

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

### 5. Open the application

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Author

**Rezaul Karim Rifat**

- GitHub: [@rezasdsju](https://github.com/rezasdsju)
- Project Repository: [FitLog](https://github.com/rezasdsju/fit-log)
