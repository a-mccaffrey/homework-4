var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var startQuizButton = document.getElementById("start-quiz");

var seeHighScores = [document.getElementById("home-highscores"), document.getElementById("gameover-highscores")];
var inputUsername = document.getElementById("input-username");

var questionSpace = document.querySelector("#question-space");

let currentQuestion = {};
let acceptingAnswers = false;
var score = 0;
var right = 0;
var wrong = 0;
let questionCounter = 0;
let availableQuestions = [];
var questionsAsked = 0;

// Question Arrays

let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choice1: "1. Strings",
    choice2: "2. Booleans",
    choice3: "3. Alerts",
    choice4: "4. Numbers",
    answer: 3,
  },
  {
    question:
      "The condition in an if / else statement is enclosed within (blank).",
    choice1: "1. Quotes",
    choice2: "2. Curly Brackets",
    choice3: "3. Parentheses",
    choice4: "4. Square Brackets",
    answer: 2,
  },
  {
    question: "Arrays in Javascript can be used to store:",
    choice1: "1. Numbers and strings",
    choice2: "2. Other arrays",
    choice3: "3. Booleans",
    choice4: "4. All of the above",
    answer: 4,
  },
  {
    question:
      "String values must be enclosed within (blank) when being assigned to variables.",
    choice1: "1. Commas",
    choice2: "2. Curly Brackets",
    choice3: "3. Quotes",
    choice4: "4. Parentheses",
    answer: 4,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "1. JavaScript",
    choice2: "2. Terminal/bash",
    choice3: "3. For Loops",
    choice4: "4. console.log()",
    answer: 4,
  },
];

var result = "correct";

var correctBonus = 10;
var maxQuestions = 4;

startQuizButton.addEventListener("click", startGame);

function startGame(event) {
  event.preventDefault();
  getNewQuestion();
  deleteHomePage();

// Removes the homepage content
function deleteHomePage() {
  var homepage = document.getElementById("homepage");
  homepage.remove();
}

function getNewQuestion() {
  // if (availableQuestions.length == 0){
  //     // go to the end page - will use the same method as with the buttons to fill in the info I think
  //     alert("you're at the end. Something else should happen. If it hasn't yet, this game isn't ready.")
  // };

  questionCounter = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);

  // Find  a new question
  questionCounter++;
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  // Add the new quesiton info into the HTML
  choices.forEach((choice) => {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  console.log(availableQuestions);
  acceptingAnswers = true;
}
  
// Make it listen to all the buttons
choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    event.preventDefault;
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    var selectedChoice = event.target;
    var selectedAnswer = selectedChoice.dataset["number"];

    console.log(selectedAnswer == currentQuestion.answer);

   // Give feedback if question answer is right or wrong
    if (selectedAnswer == parseInt(currentQuestion.answer)) {
      questionsAsked++;
      score++;
      feedback.innerHTML = "<hr/> <div class='container'> <div class='row'> <div class='col-6 offset-3 text-center'> <p> You fudged up! </p> </div> </div> </div>";
      setTimeout(function() {
        feedback.innerHTML = "";
      }, (2 * 1000));
    }
    else {
      questionsAsked++;
      score--;
      timeleft -= 5;
      feedback.innerHTML = "<hr/> <div class='container'> <div class='row'> <div class='col-6 offset-3 text-center'> <p> You fudged up! </p> </div> </div> </div>";
      setTimeout(function() {
        feedback.innerHTML = "";
      }, (2 * 1000));
    };
// Add to the questiones asked so we can go to the end
    if (questionsAsked <= 3){
      getNewQuestion();}
      else {endGame()
      }
  });
});
}

  // Timer
  var timeleft = 50;
 setInterval(function () {
    if (timeleft <= 0) {
      endGame();
      timer.innerHTML = "Finished";  
    } else {
      timer.innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);

  // get rid of the game when we're done
var gameArea = document.getElementById("game");
var endGame = () => {
  gameArea.innerHTML = "";
  displayForm();
};

// Show final score and forms
var initialPlace = document.getElementById("initial-place");
var message = document.getElementById("message");
var finalScore = document.getElementById("final-score");
function displayForm() {
  initialPlace.innerHTML = "  <div class='col-7 offset-3 text-center'> <form class='form-inline'> <div class='form-group mb-2'> <label id='input-a enter-intials'>Enter your Initials</label> </div> <div class='form-group mx-sm-3 mb-2'> <label for='input-initials' class='sr-only'> </label> <input type='password' class='form-control' id='inputPassword2' placeholder=''></input> <button type='submit' class='btn btn-primary mb-2'>Submit</button> </form> </div> ";
  message.innerText = "All done!";
  finalScore.innerText = "Your final score is " + score;
};
