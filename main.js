console.log("Welcome to the scoreboard script!");
const homeScore = document.querySelector("#home-score");
const awayScore = document.querySelector("#away-score");
const homeIncrement = document.querySelector("#home-decrement");
const homeDecrement = document.querySelector("#home-decrement");
const awayIncrement = document.querySelector("#away-increment");
const awayDecrement = document.querySelector("#away-decrement");

let _homeScoreValue = 0;
let _awayScoreValue = 0;

Object.defineProperty(window, 'homeScoreValue', {
    get: function() {
        return _homeScoreValue;
    },
    set: function(value) {
        _homeScoreValue = value;
        homeScore.textContent = value;
    }
});

Object.defineProperty(window, 'awayScoreValue', {
    get: function() {
        return _awayScoreValue;
    },
    set: function(value) {
        _awayScoreValue = value;
        awayScore.textContent = value;
    }
});

homeScoreValue = 0;
awayScoreValue = 0;
