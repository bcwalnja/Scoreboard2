gameClockValue = "00:00";
gameTimeElapsed = 0;
clockIsRunning = undefined;
let _gameClockValue = 0;

Object.defineProperty(window, 'gameClockValue', {
    get: function () {
        return _gameClockValue;
    },
    set: function (value) {
        _gameClockValue = value;
        gameClock.textContent = value;
    }
});

// add all functions here such as for the stopClock and resetClock
runClock = () => {
    if (clockIsRunning) {
        return;
    }
    clockIsRunning = setInterval(function () {
        gameTimeElapsed += 0.1;

        let minutes = Math.floor(gameTimeElapsed / 60);
        let seconds = Math.floor(gameTimeElapsed % 60);

        gameClockValue = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 100);
}


// add all event listeners here such as for the stop button and the reset button
document.getElementById('start-button').addEventListener('click', runClock);

