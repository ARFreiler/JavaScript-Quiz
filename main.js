// Section
var quizSection = document.querySelectorAll("quiz-section");

// Start of Quiz
var startSection = document.getElementById("start");
var startButton = document.getElementById("start-button");

// Quiz Questions
var quizQuestions = document.getElementById("quiz-questions");
var timeRemaining = document.getElementById("time-remaining");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var choiceStatus = document.querySelectorAll(".choice-status");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");

// End of Quiz
var end = document.getElementById("end");
var endTitle = document.getElementById("end-title");
var scoreText = document.getElementById("score-text");
var score = document.getElementById("score");
var submitScore = document.getElementById("submit-score");
var initials = document.getElementById("initials");
var error = document.getElementById("error-message");

// Event Listeners
document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("start-button").addEventListener("click", startTimer);
// document.getElementById("start-button").addEventListener("click", Question);

// Hides section start and shows section quiz-questions
function startQuiz() {
  if (document.getElementById("start")) {
    if (document.getElementById("start").style.display === "block") {
      document.getElementById("start").style.display = "none";
      document.getElementById("quiz-questions").style.display = "block";
    }
  }
  startTimer();
  displayQuestion();
  displayChoices();
}

// Runs timer
function startTimer() {
  var counter = 60;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("time-remaining");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      clearInterval(counter);
    }
  }, 1000);
}
function start() {
};

// // Displays quiz question
// function displayQuestion() {
//   question.textContent = questionList[currentQuestion].question;
//   displayChoiceList();
// }

// // Displays ul of answer choices
// function displayChoiceList() {
//   choices.innerHTML = "";
//   questionList[currentQuestion].choices.forEach(function (answer, index) {
//     var li = document.createElement("li");
//     li.dataset.index = index;
//     var button = document.createElement("button");
//     button.textContent = (index + 1) + ". " + answer;
//     li.appendChild(button);
//     choices.appendChild(li);
//   });
// }



// function confirmChoice(event) {
//   var userChoice = parseInt(event.target.parentElement.dataset.index);
// }

// // Questions Element
// class Question {
//   constructor(question, choices, indexOfCorrectChoice) {
//     this.question = question;
//     this.choices = choices;
//     this.indexOfCorrectChoice = indexOfCorrectChoice;
//   }
// }

// // Quiz questions
// var questionOne = new Question("Commonly used data types DO NOT include: ",
//   ["Strings", "Booleans", "Alerts", "Numbers"], 2);
// var questionTwo = new Question("The condition in an if / else statement is enclosed within _____.",
//   ["Quotes", "Braces", "Parantheses", "Square Brackets"], 2);
// var questionThree = new Question("Arrays in JavaScript can be used to store ____.",
//   ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], 3);
// var questionFour = new Question("String values must be enclosed within _____ when being assigned to variables.",
//   ["Commas", "Braces", "Quotes", "Parantheses"], 2);
// var questionFive = new Question("A very useful tool used during development and debugging for printing content to the debugger is: ",
//   ["JavaScript", "Terminal/Bash", "For Loops", "console.log"], 3);
// var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var currentQuestion = 0;
var totalTime = 60;
var totalTimeInterval;
var choiceStatusTimeout;

/* QUESTIONS ARRAY */
var questions = [
  {
    question: "Commonly used data types DO NOT include: ",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Booleans"
  },
  {
    question: "The condition in an if / else statement is enclosed within _____.",
    choices: ["Quotes", "Braces", "Paranthese", "Square Brackets"],
    answer: "Parantheses"
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"],
    answer: "All of the above"
  },
  {question: "String values must be enclosed within _____ when being assigned to variables.",
   choices: ["Commas", "Braces", "Quotes", "Parantheses"],
   answer: "Quotes"
  },
  {question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
   choices: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
   answer: "console.log"
  }
];

function displayQuestion() {
  question.textContent = questions[currentQuestion].question
}

function displayChoices() {
  var quizAnswer = questions[currentQuestion].choices;
  for ( i = 0; i < quizAnswer.length; i++){
    var listItem = document.createElement("li");
    listItem.textContent = quizAnswer[i];
    choices.appendChild(listItem);
    console.log(quizAnswer[i]);
    console.log(i)
  }
}

for ( i = 0; i < questions.length; i++) {
  console.log(questions[i]);
}

// choices.forEach(index(choices)) {
//   console.log(choices);
// };

var questionChoice = [question, choices];
console.log(questions[currentQuestion].choices);

var questionObjects = {
  
}
