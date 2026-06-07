# habit-tracker
A web-based habit tracking application that allows users to add habits, track daily completion, monitor streaks, and view progress statistics.

## Features

- Add new habits with a name, category, and weekly target
- Form validation with inline error messages
- Mark habits as completed for the day
- Automatic streak tracking
- Delete habits from the tracker
- View a progress summary including:
  - Total habits
  - Habits completed today
  - Overall completion percentage
- Responsive and user-friendly design

## Built With

- HTML5
- CSS3
- JavaScript

## How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your web browser.

No additional installations or dependencies are required.

## Habit Object Structure

javascript
{
  id: 1,
  name: "Read",
  category: "Study",
  target: 5,
  streak: 0,
  doneToday: false
}

## Concepts Demonstrated

This project demonstrates the following JavaScript concepts:

- Variables and data types
- Arrays and objects
- Functions
- Loops
- Conditional statements
- DOM manipulation
- Event handling
- Form validation
- Array methods (`push`, `filter`, `map`, `forEach`)

## Future Improvements

- Save habits using Local Storage
- Filter habits by category
- Sort habits by streak length
- Add a dark mode theme
- Display a weekly activity history
- Add habit completion analytics
