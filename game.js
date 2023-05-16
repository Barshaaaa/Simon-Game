var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {

        $("#level-title").text("LEVEL" + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {

        console.log("wrong");
        var audio2 = new Audio('sounds/wrong.mp3');
        audio2.play();

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);


        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    console.log(userClickedPattern);
}

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var rand = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColor[rand];
    gamePattern.push(randomChosenColour);
    if (randomChosenColour === "red") {
        $("#red").fadeIn(100).fadeOut(100).fadeIn(100);
    }
    else if (randomChosenColour === "blue") {
        $("#blue").fadeIn(100).fadeOut(100).fadeIn(100);
    }
    else if (randomChosenColour === "green") {
        $("#green").fadeIn(100).fadeOut(100).fadeIn(100);
    }
    else {
        $("#yellow").fadeIn(100).fadeOut(100).fadeIn(100);
    }
    playSound(randomChosenColour);

}


function playSound(name) {
    if (name === "red") {
        var audio1 = new Audio('sounds/red.mp3');
        audio1.play();
    }
    else if (name === "blue") {

        var audio2 = new Audio('sounds/blue.mp3');
        audio2.play();
    }
    else if (name === "green") {

        var audio3 = new Audio('sounds/green.mp3');
        audio3.play();
    }
    else {

        var audio4 = new Audio('sounds/yellow.mp3');
        audio4.play();
    }
}

function animatePress(currentColour) {

    if (currentColour === "red") {
        $("#red").addClass("pressed");

        setTimeout(function () {
            $("#red").removeClass("pressed");
        }, 100);


    }
    else if (currentColour === "blue") {
        $("#blue").addClass("pressed");
        setTimeout(function () {
            $("#blue").removeClass("pressed");
        }, 100);
    }
    else if (currentColour === "green") {

        $("#green").addClass("pressed");
        setTimeout(function () {
            $("#green").removeClass("pressed");
        }, 100);
    }
    else {
        $("#yellow").addClass("pressed");
        setTimeout(function () {
            $("#yellow").removeClass("pressed");
        }, 100);
    }
}
function startOver() {
    gamePattern = [];
    started = false;
    level = 0;
}
