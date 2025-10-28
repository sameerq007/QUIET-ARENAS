// Utility functions for updating user-specific game stats

function updateUserStat(username, statKey, value) {
    localStorage.setItem(`${username}_${statKey}`, value);
}

function getUserStat(username, statKey) {
    return localStorage.getItem(`${username}_${statKey}`) || '0';
}

function incrementUserStat(username, statKey) {
    const current = parseInt(getUserStat(username, statKey)) || 0;
    updateUserStat(username, statKey, (current + 1).toString());
}

function updateUserHighScore(username, gameKey, score) {
    const currentHigh = parseInt(getUserStat(username, gameKey)) || 0;
    if (score > currentHigh) {
        updateUserStat(username, gameKey, score.toString());
    }
}

function updateUserHoursToday(username, hours) {
    const today = new Date().toDateString();
    const playDate = getUserStat(username, 'playDate');
    if (playDate !== today) {
        updateUserStat(username, 'playDate', today);
        updateUserStat(username, 'hoursToday', hours.toString());
        // Save yesterday's hours to history
        if (playDate) {
            const yesterdayHours = getUserStat(username, 'hoursToday');
            updateUserStat(username, `playTime_${playDate}`, yesterdayHours);
        }
    } else {
        const currentHours = parseFloat(getUserStat(username, 'hoursToday')) || 0;
        updateUserStat(username, 'hoursToday', (currentHours + hours).toString());
    }
}

// Example usage in games:
// const username = localStorage.getItem('userUsername');
// incrementUserStat(username, 'gamesPlayed');
// updateUserHighScore(username, 'cyberHighScore', score);
// updateUserHoursToday(username, hoursPlayed);
