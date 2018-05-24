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
var totalScore = [""];
var wins = 0;
var losses = 0;    

//function that will get all random numbers at start of each game
function start() {
    //comp will randomly generate a number between 19-120
    var randNumb = Math.floor((Math.random() * 120) + 19);
    $("#randNumb").html(randNumb);
    crystals.green.value = Math.floor((Math.random() * 12) + 1);
    crystals.yellow.value = Math.floor((Math.random() * 12) + 1);
    crystals.red.value = Math.floor((Math.random() * 12) + 1);
    crystals.blue.value = Math.floor((Math.random() * 12) + 1);
}

start();


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
