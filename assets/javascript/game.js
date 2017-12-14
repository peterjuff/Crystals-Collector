//assign variables for, hidden-random number, crystals, wins, losses, your total score,
var randNumb;
var green;
var yellow;
var red;
var blue;
var totalScore;
var wins = 0;
var losses = 0;


//comp will randomly generate a number between 19-120
var randNumb = Math.floor((Math.random() * 120) + 19);
   console.log(randNumb);

 
$("#randNumb").html(randNumb);

//assign random value to each crystal that changes with each round

var green = Math.floor(Math.random() * 12) + 1;
   newDiv = $("<div>"); 
   newDiv.text(green);
   $("#green").append(newDiv);

    console.log(green);

var yellow = Math.floor(Math.random() * 12) + 1;
    $("#yellow").html(yellow);
    $("#yellow").append(yellow);
    $("#yellow").on("click", function(){
        var yellowValue = ($(this).append("yellow"));
})

    console.log(yellow);

var red = Math.floor(Math.random() * 12) + 1;
    $("#red").html(red);
    $("#red").append(red);
    $("#red").on("click", function(){
        var redValue = ($(this).append("red"));
})

    console.log(red);

var blue = Math.floor(Math.random() * 12) + 1;
    $("#blue").html(blue);
    $("#blue").append(blue);
    $("#blue").on("click", function(){
        var blueValue = ($(this).append("blue"));
})

    console.log(blue);
//if statements to keep track of score

if (totalScore === randNumb) {
    alert("You Win!!");
}

else if (totalScore === randNumb) {
    alert("You Lose! Try Again!");
}