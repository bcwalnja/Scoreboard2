console.log("Welcome to the scoreboard script!");

// gather up the elements we need
// home-score and away-score
const homeScore = document.querySelector(".home-score");
const awayScore = document.querySelector(".away-score");

const homeIncrement = document.querySelector(".home-increment");
const homeDecrement = document.querySelector(".home-decrement");

const awayIncrement = document.querySelector(".away-increment");
const awayDecrement = document.querySelector(".away-decrement");

let homeScoreValue = 0;
let awayScoreValue = 0;