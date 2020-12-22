var quizHeader = document.querySelector("#quiz-header");
var quizInfo = document.querySelector("#quiz-info");
var buttonStart = document.querySelector("#button-start");
var quizAnswers = document.querySelector("#quiz-answers");
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
//     getAnswers (answerBlock1);
//     // getAnswers (answerBlock2);
//     // getAnswers (answerBlock3);
//     // getAnswers (answerBlock4);


// function getAnswers(answerBlock) {
//     quizAnswers.innerHTML = "";
//     for (i = 0; i < answerBlock.length; i ++) {
//         var answer = answerBlock[i];

//         var li = document.createElement("li");
//         li.textContent = answer;
//         quizAnswers.appendChild(li);
//     }
// }


buttonStart.addEventListener("click", quizStart());