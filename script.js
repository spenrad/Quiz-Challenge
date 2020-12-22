var quizHeader = document.querySelector("#quiz-header");
var quizInfo = document.querySelector("#quiz-info");
var buttonStart = document.querySelector("#button-start");
var quizAnswers = document.querySelector("#quiz-ansers");
var score = document.querySelector("#time-left");
var highScore = document.querySelector("#high-scores");

var answerBlock1 = ["false", "false", "true", "false"]
var answerBlock2 = ["true", "false", "false", "false"]
var answerBlock3 = ["false", "false", "false", "true"]
var answerBlock4 = ["false", "true", "false", "false"]

var time = 60



function quizStart() {
    var timeDown = setInterval(function() {
        time--;
        score.textContent = time
    }, 1000);
    if (quizInfo.style.visibility == "visible") {
        quizInfo.style.visibility = "hidden";
    };
    if (buttonStart.style.visibility == "visibile") {
        buttonStart.style.visibility = "hidden";
    };

}


var quizStarted = buttonStart.addEventListener("click", quizStart());