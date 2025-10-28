# TODO: Implement User-Specific Game Stats

## Overview
Make game stats (games played, achievements, hours today) user-specific. New users start with 0 stats, and stats update based on individual user progress.

## Steps
- [x] Modify script.js to initialize user-specific stats (gamesPlayed, achievements, hoursToday) to 0 on signup.
- [x] Update dashboard.html to load and display stats based on the current logged-in user.
- [x] Make hours tracking and high scores user-specific in localStorage.
- [x] Ensure games can update these stats per user (e.g., add functions to increment stats).
- [x] Test the implementation by signing up a new user and checking dashboard stats.

## Notes
- Use localStorage keys prefixed with username, e.g., `${username}_gamesPlayed`.
- Achievements might need to be defined per game or globally.
- Hours today should reset daily per user.
