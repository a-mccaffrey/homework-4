var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var startQuizButton = document.getElementById("start-quiz");

var questionSpace = document.querySelector("#question-space");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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

var correctBonus = 10;
var maxQuestions = 4;

startQuizButton.addEventListener("click", startGame);

function startGame(event) {
  event.preventDefault();
  getNewQuestion();
  deleteHomePage();

  // Timer
  var timeleft = 75;
  var gameTimer = setInterval(function () {
    if (timeleft <= 0) {
      // This will be used to show game over once possible
      clearInterval(gameTimer);
      timer.innerHTML = "Finished";
    } else {
      timer.innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);
}

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
  score = 0;
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
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];

        if (selectedAnswer == currentQuestion.answer) 
        {
            feedback.innerHTML = 'You fudged up'
        } 
        else (selectedAnswer !== currentQuestion.answer) 
        {
            feedback.innerHTML = 'You did good'
        }

        // giveFeedback ();

        // function giveFeedback() {
        //     if (feedbackToApply === 'incorrect') 
        //     {
        //         feedback.innerHTML = 'You fudged up'
        //     } 
        //     else (feedbackToApply === 'correct') 
        //     {
        //         feedback.innerHTML = 'You did good'
        //     }
        // };
        


        getNewQuestion();
    });
});