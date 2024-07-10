// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var level = 0;
// var isStarted = false;

// var wrongSound = new Audio("sounds/wrong.mp3"); // Initialize the wrong sound

// function playSound(randomColorChoosen) {
//     var audio = new Audio("sounds/" + randomColorChoosen + ".mp3");
//     audio.play();
// }

// function startOver() {
//     gamePattern = [];
//     level = 0;
//     isStarted = false;
// }

// function checkAnswer(currentLevel) {
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {	
//         if (userClickedPattern.length === gamePattern.length) {
//             setTimeout(function() {
//                 nextSequence();
//             }, 1000);
//         }
//     } else {
//         $("body").addClass("game-over");
//         $("h1").text("Game Over, Press Any Key to Restart");
//         setTimeout(function() {
//             $("body").removeClass("game-over");
//         }, 200);

//         wrongSound.play();  // Play the wrong sound when the user makes a mistake

//         startOver();
//     }
// }

// function nextSequence() {
//     userClickedPattern = [];
//     level++;
//     $("h1").text("Level " + level);

//     var randomNumber = Math.floor(Math.random() * 4);
//     var randomColorChoosen = buttonColours[randomNumber];
//     gamePattern.push(randomColorChoosen);

//     var idToChose = '#' + randomColorChoosen;
//     $(idToChose).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     playSound(randomColorChoosen);
// }

// // Event Listener to clicking buttons 
// // It adds elements to Users Pattern
// $(".btn").click(function() {
//     var userChosenColor = $(this).attr("id");
//     userClickedPattern.push(userChosenColor);

//     playSound(userChosenColor);
//     animatePress(userChosenColor);

//     checkAnswer(userClickedPattern.length - 1);
// });

// // Function For Animation on Pressing
// function animatePress(currentColor) {
//     var idToChose = '#' + currentColor;
//     $(idToChose).addClass("pressed");
//     setTimeout(function() {
//         $(idToChose).removeClass("pressed");
//     }, 100);
// }

// // Start the game
// $(document).keypress(function(event) {
//     if (!isStarted) {
//         $("h1").text("Level " + level);
//         nextSequence();
//         isStarted = true;
//     }
// });

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var isStarted = false;
var wrongSound = new Audio("sounds/wrong.mp3");

function playSound(randomColorChoosen) {
    var audio = new Audio("sounds/" + randomColorChoosen + ".mp3");
    audio.play();
}

function startOver() {
    gamePattern = [];
    level = 0;
    isStarted = false;
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {    
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press the Start Button to Restart");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        wrongSound.play();
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomColorChoosen = buttonColours[randomNumber];
    gamePattern.push(randomColorChoosen);

    var idToChose = '#' + randomColorChoosen;
    $(idToChose).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColorChoosen);
}

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColor) {
    var idToChose = '#' + currentColor;
    $(idToChose).addClass("pressed");
    setTimeout(function() {
        $(idToChose).removeClass("pressed");
    }, 100);
}

function startGame() {
    if (!isStarted) {
        $("h1").text("Level " + level);
        nextSequence();
        isStarted = true;
    }
}

// Start the game by clicking the start button
$("#start-button").click(function() {
    startGame();
});
