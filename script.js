var quizHeader = document.querySelector("#quiz-header");
var quizInfo = document.querySelector("#quiz-info");
var buttonStart = document.querySelector("#button-start");
var quizAnswers = document.querySelector("#quiz-answers");
var score = document.querySelector("#time-left");
var container = document.querySelector(".container");
var input = document.querySelector("input");

var questionIndex = 0;

// An array of objects should make out question, choices and answers easily accessed
// user must pronounce volcano names correctly while taking quiz!!!
var question = [
  {
    questionText: "Which is Icelands largest volcano?",
    choices: ["Esjufjöll", "Öræfajökull", "Bárðarbunga", "Trölladyngja"],
    answer: "Bárðarbunga",
  },
  {
    questionText: "In 2010 this volcano massively disrupted air travel across the European continent.",
    choices: ["Eyjafjallajökull", "Hverfjall", "Herðubreið", "Theistareykjarbunga"],
    answer: "Eyjafjallajökull",
  },
  {
    questionText: "How many volcanoes are there in Iceland, active or inactive?",
    choices: ["18", "30", "65", "130"],
    answer: "130",
  },
  {
    questionText: "Mount Helka is the most active volcano in Iceland, how many times has it erupted since the year 1104?",
    choices: ["5", "8", "18", "24"],
    answer: "18",
  },
  {
    questionText: "Volcanoes can cause massive floods by melting glaciers as they erupt. What is the name for these floods?",
    choices: ["Jökulhlaup", "Flóðhestur", "Gæsalappir", "Gloggaveðu"],
    answer: "Jökulhlaup",
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
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "red";
    time -= 7;
  }
  //   upon selecting an answer, incorrect or not, advance to the next object array
  questionIndex++;
  if (questionIndex >= question.length) {
    clearInterval(timeDown);
    alert("Stop time!");
    endQuiz();
    // without the else statement the next object array does not get called
  } else {
    getAnswers();
  }
}

// Brings about the 'enter initials screen' for data storage
function endQuiz() {
  document.body.style.backgroundColor = "white";
  quizAnswers.style.display = "none";
  quizInfo.style.display = "block";
  quizHeader.innerHTML = "FINISHED";
  quizInfo.innerHTML =
    "Your score is " + score.textContent + "<br>" + "Enter your name below";

  var form = document.createElement("form");
  var input = document.createElement("input");
  var storeButton = document.createElement("button");
  storeButton.innerHTML = "Submit";
  form.appendChild(input);
  quizInfo.appendChild(form);
  quizInfo.appendChild(storeButton);

//   stores both score and entered name upon button click, calls highScoreScreen function
  storeButton.addEventListener("click", function storeData() {
    localStorage.setItem("Name", input.value);
    localStorage.setItem("Score", score.textContent);
    highScoreScreen();
  });
}

// displays the locally stored info in an ordered list Name- Score
function highScoreScreen() {
  quizHeader.innerHTML = "High Score";
  quizInfo.style.display = "none";

  var highName = localStorage.getItem("Name");
  var highScore = localStorage.getItem("Score");
    // concatenation of locally stored data 
  quizAnswers.style.display = "block";
  quizAnswers.textContent = highName + "- " + highScore;
}

// eventlistener to start quiz on start button click
buttonStart.addEventListener("click", quizStart);
