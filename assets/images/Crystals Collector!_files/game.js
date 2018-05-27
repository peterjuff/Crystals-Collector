$(function() {

//assign variables for, hidden-random number, crystals, wins, losses, your total score,
var crystals = {
    green:
    {
        name: "green",
        value: 0
    },
    yellow:
    {
        name: "yellow",
        value: 0
    },
    red:
    {
        name: "red",
        value: 0
    },
    blue:
    {
        name: "blue",
        value: 0
    }
};
var randNumb;
var totalScore = 0;
var wins = 0;
var losses = 0;    

//function that will get all random numbers at start of each game
function start() {

    totalScore = 0;
    
    //comp will randomly generate a number between 19-120
    var randNumb = Math.floor((Math.random() * 120) + 19);
    $("#randNumb").html(randNumb);

    //random numbers assigned to each crystal
    green = Math.floor((Math.random() * 12) + 1);
    yellow = Math.floor((Math.random() * 12) + 1);
    red = Math.floor((Math.random() * 12) + 1);
    blue= Math.floor((Math.random() * 12) + 1);

    console.log(randNumb);

};

//function to put all four crystal values into the totalscore
function click(crystal) {
    totalScore += crystal;
    $("#totalScore").text(totalScore);
    winLoss();
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

function winLoss() {

    if (totalScore === randNumb) {
        alert("You won! Great job!");
        wins++;
        $("#wins").text(wins);
        start();
    }

    else if (totalScore > randNumb) {
        alert("You lose. Try again!");
        loses++
        $("#losses").text(losses);
        start();
    }

}


});



// //assign variables for, hidden-random number, crystals, wins, losses, your total score,
// var randNumb;
// var green;
// var yellow;
// var red;
// var blue;
// var totalScore = [""];
// var wins = 0;
// var losses = 0;


// //comp will randomly generate a number between 19-120
// var randNumb = Math.floor((Math.random() * 120) + 19);
//    console.log(randNumb);

 
// $("#randNumb").html(randNumb);

// //assign random value to each crystal that changes with each round


//     var green = Math.floor(Math.random() * 12) + 1;
//    var newDiv = $("<div id='green'>"); 
//    $("#green").on("click");
//        newDiv.text(green);
//    $("totalScore").append(green);




//     console.log(green);

// var yellow = Math.floor(Math.random() * 12) + 1;
//     $("#yellow").html(yellow);
//     $("#yellow").append(yellow);
//     $("#yellow").on("click", function(){
//         var yellowValue = $(this).append("yellow");
//         alert(yellow);
// })

//     console.log(yellow);

// var red = Math.floor(Math.random() * 12) + 1;
//     $("#red").html(red);
//     $("#red").append(red);
//     $("#red").on("click", function(){
//     var redValue = ($(this).append("red"));
//         alert(red);
// })

//     console.log(red);

// var blue = Math.floor(Math.random() * 12) + 1;
//     $("#blue").html(blue);
//     $("#blue").append(blue);
//     $("#blue").on("click", function(){
//         var blueValue = ($(this).append("blue"));
//         alert(blue);
// })

//     console.log(blue);
// //if statements to keep track of score

// if (totalScore === randNumb) {
//     alert("You Win!!");
// }

// else if (totalScore === randNumb) {
//     alert("You Lose! Try Again!");
// }
