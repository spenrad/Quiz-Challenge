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
    questionText: 'Selecct "a" ',
    choices: ["a", "b", "c", "d"],
    answer: "a",
  },
  {
    questionText: 'Select "t"',
    choices: ["b", "g", "y", "t"],
    answer: "t",
  },
];

var time = 60;
var timeDown;

// This function starts the timer and hides the original elements on the page
// also calls the getAnswers function that fetches the answers from the object array
function quizStart() {
  timeDown = setInterval(function () {
    time--;
    score.textContent = time;
  }, 1000);
  quizInfo.style.display = "none";
  buttonStart.style.display = "none";
  getAnswers();
}

// Grabs questions and answers from object array, writing them to their respective elements on page
function getAnswers() {
  quizAnswers.innerHTML = "";
  quizHeader.innerHTML = "";
  // need to increment questionIndex for each question
  quizHeader.innerHTML = question[questionIndex].questionText;

  for (i = 0; i < question[questionIndex].choices.length; i++) {
    var answer = question[questionIndex].choices[i];

    var li = document.createElement("li");
    li.textContent = answer;
    // checks for a click on the li item
    // calls a function that checks validity and continues quiz
    li.addEventListener("click", handleChoice);

    quizAnswers.appendChild(li);
  }
}

// this function handles what a correct choice of li element does
function handleChoice(event) {
  event.target.textContent;
  if (event.target.textContent == question[questionIndex].answer) {
    alert("Good job");
  } else {
    alert("Lose some time");
    time -= 5;
  }
  //   upon selecting an answer, incorrect or not, advance to the next object array
  questionIndex++;
  if (questionIndex >= question.length) {
    alert("stop time!");
    clearInterval(timeDown);
    // without the else statement the next object array does not get called
    } else {
    getAnswers();
  }
}

buttonStart.addEventListener("click", quizStart);
