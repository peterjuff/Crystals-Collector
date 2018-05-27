$(function() {

//assign variables for, hidden-random number, crystals, wins, losses, your total score,
var green;
var yellow;
var red;
var blue;
var randNumb = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;    

//function that will get all random numbers at start of each game
function start() {

    totalScore = 0;
    
    //comp will randomly generate a number between 19-120
    randNumb = Math.floor((Math.random() * 120) + 19);

    //random numbers assigned to each crystal
    green = Math.floor((Math.random() * 12) + 1);
    yellow = Math.floor((Math.random() * 12) + 1);
    red = Math.floor((Math.random() * 12) + 1);
    blue= Math.floor((Math.random() * 12) + 1);

    $("#randNumb").text(randNumb);
    $("#totalScore").text(totalScore);

};



//function to put all four crystal values into the totalscore
function click(crystal) {
    
    totalScore += crystal;
    $("#totalScore").text(totalScore);
    
    console.log(totalScore)
    console.log(randNumb)

    //conditional statement to determine win/loss

    if (randNumb == totalScore) {
        alert("You won! Great job!");
        wins++;
        $("#wins").text(wins);
        start();
        
    }

    else if (randNumb < totalScore) {
        alert("You lose. Try again!");
        losses++
        $("#losses").text(losses);
        start();
    }

};



//starts game
start();


$("#green").click(function() {
    click(green);
});

$("#yellow").click(function() {
    click(yellow);
});

$("#red").click(function() {
    click(red);
});

$("#blue").click(function() {
    click(blue);
});



});


