/* Element Variable */
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

/* Funtioning Variables */
var currentQuestion = 0;
var currentChoices = 0;
var totalTime = 60;
var totalTimeInterval;
var choiceStatusTimeout;

// Event Listeners
document.getElementById("start-button").addEventListener("click", startQuiz);
// document.getElementById("start-button").addEventListener("click", startTimer);

/* QUESTIONS ARRAY */
var questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
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
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["Commas", "Braces", "Quotes", "Parantheses"],
        answer: "Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
        answer: "console.log"
    }
];

function displayTime() {
    timeRemaining.textContent = totalTime;
}

function startTimer() {
    totalTimeInterval = setInterval(function () {
        totalTime--;
        displayTime();
        checkTime();
    }, 1000);
}

function checkTime() {
    if (totalTime <= 0) {
      totalTime = 0;
      endGame();
    }
  }

function displayQuestion() {
    question.textContent = questions[currentQuestion].question;
    currentQuestion++
}

/* Lagging Choice Index */
function displayChoices() {
    choices.innerHTML = "";
    questions[currentQuestion].choices.forEach(function(answer, index) {
        var listItem = document.createElement("li");
        listItem.dataset.index = index;
        var button = document.createElement("button");
        button.textContent = (index + 1) + ". " + answer;
        listItem.appendChild(button);
        choices.appendChild(listItem);
        listItem.onclick = function(e){
            var userAnswerText = e.target.textContent;
            var actualAnswer = questions[currentQuestion].answer;
            if (actualAnswer === userAnswerText) {
                correct.innerHTML = "Correct!"
            } else {
              wrong.innerHTML = "Wrong!";
            }
        }
    })
}

choices.addEventListener("click", displayQuestion);
choices.addEventListener("click", displayChoices);

function startQuiz() {
    if (document.getElementById("start")) {
        if (document.getElementById("start").style.display === "block") {
            document.getElementById("start").style.display = "none";
            document.getElementById("quiz-questions").style.display = "block";
        }
    }
    displayQuestion();
    displayChoices();
    startTimer();
}

