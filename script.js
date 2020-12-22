var quizHeader = document.querySelector("#quiz-header");
var quizInfo = document.querySelector("#quiz-info");
var buttonStart = document.querySelector("#button-start");
var quizAnswers = document.querySelector("#quiz-ansers");
var score = document.querySelector("#time-left");
var highScore = document.querySelector("#high-scores");

var time = 60

function quizStart() {
    var timeDown = setInterval(function() {
        time--;
        score.textContent = time
    }, 1000);
}

buttonStart.addEventListener("click", quizStart());