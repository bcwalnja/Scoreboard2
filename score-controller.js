let onHomeIncrementClick = () => {
    // put the code here to increment the home score
    homeScoreValue = homeScoreValue + 1;
}

// add the other click event handlers here

let onHomeDecrementClick = () => {
    // put the code here to decrement the home score
    homeScoreValue = homeScoreValue - 1;
}

// write the away increment and decrement click event handlers here
let onAwayIncrementClick = () => {
    // put the code here to increment the away score
    awayScoreValue = awayScoreValue + 1;
}

let onAwayDecrementClick = () => {
    // put the code here to decrement the away score
    awayScoreValue = awayScoreValue - 1;
}

// code to add event listeners to the away buttons
awayIncrement.addEventListener("click", onAwayIncrementClick);
awayDecrement.addEventListener("click", onAwayDecrementClick);




// code to define the score variables and get / set functions
let _homeScoreValue = 0;
let _awayScoreValue = 0;

Object.defineProperty(window, 'homeScoreValue', {
    get: function () {
        return _homeScoreValue;
    },
    set: function (value) {
        _homeScoreValue = value;
        homeScore.textContent = value;
    }
});

Object.defineProperty(window, 'awayScoreValue', {
    get: function () {
        return _awayScoreValue;
    },
    set: function (value) {
        _awayScoreValue = value;
        awayScore.textContent = value;
    }
});

// run the set code to initialize the scoreboard to show 0
homeScoreValue = 0;
awayScoreValue = 0;

// code to add event listeners to the buttons
homeIncrement.addEventListener("click", onHomeIncrementClick);
