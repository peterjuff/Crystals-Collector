//assign variables for, hidden-random number, crystals, wins, losses, your total score,
var randNumb;
var emCrystal;
var yellCrystal;
var rubyCrystal;
var blueCrystal;
var totalScore;
var wins = 0;
var losses = 0;


//comp will randomly generate a number between 19-120
function getRandomNumb() {
    return Math.floor((Math.random() * 120) + 19);
   console.log(getRandomNumb);
}
 
$("#randNumb") === getRandomNumb;

//assign random value to each crystal that changes with each round

var emCryNum = Math.floor(Math.random() * 12) + 1;
var yellCryNum = Math.floor(Math.random() * 12) + 1;
var rubCryNum = Math.floor(Math.random() * 12) + 1;
var bluCryNum = Math.floor(Math.random() * 12) + 1;
//if statements to keep track of score