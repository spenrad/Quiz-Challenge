var quizHeader = document.querySelector("#quiz-header");
var quizInfo = document.querySelector("#quiz-info");
var buttonStart = document.querySelector("#button-start");
var quizAnswers = document.querySelector("#quiz-answers");
var score = document.querySelector("#time-left");
var highScore = document.querySelector("#high-scores");

var questionIndex = 0;

// An array of objects should make out question, choices and answers easily accessed
var question = [
  {
    questionText: "How far is the sun",
    choices: [100, 10000, 1000000, 10000],
    answer: 1000000,
  },
  {
    questionText: "Is water wet",
    choices: ["yes", "no", "maybe", "i dont care"],
    answer: "yes",
  },
  {
    questionText: "Selecct \"a\" ",
    choices: ["a", "b", "c", "d"],
    answer: "a",
  },
  {
    questionText: "Select \"t\"",
    choices: ["b", "g", "y", "t"],
    answer: "t",
  },
];

var time = 60;
var timeDown;

function quizStart() {
  timeDown = setInterval(function () {
    time--;
    score.textContent = time;
  }, 1000);
  quizInfo.style.display = "none";
  buttonStart.style.display = "none";
}


buttonStart.addEventListener("click", quizStart);
