// Section
var quizSection = document.querySelectorAll("quiz-section");

// Start of Quiz
var startSection = document.getElementById("start");
var startButton =document.getElementById("start-button");

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

// Questions Element
class Question {
    constructor(question, choices, indexOfCorrectChoice) {
      this.question = question;
      this.choices = choices;
      this.indexOfCorrectChoice = indexOfCorrectChoice;
    }
  }

var questionOne = new Question("Commonly used data types DO NOT include: ",
["Strings","Booleans", "Alerts", "Numbers"], 2);
var questionTwo = new Question("The condition in an if / else statement is enclosed within _____.",
["Quotes", "Braces", "Parantheses", "Square Brackets"], 2);
var questionThree = new Question("Arrays in JavaScript can be used to store ____.",
["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], 3);
var questionFour = new Question("String values must be enclosed within _____ when being assigned to variables.",
["Commas", "Braces", "Quotes", "Parantheses"], 2);
var questionFive = new Question("A very useful tool used during development and debugging for printing content to the debugger is: ",
["JavaScript", "Terminal/Bash", "For Loops", "console.log"], 3);
var questionList = [questionOne, questionTwo, questionThree, questionFour, questionFive];