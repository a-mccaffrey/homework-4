var navigationBar = document.querySelector("#navigation-bar");
var questionSpace = document.querySelector("#question-space");
var timer = document.querySelector("#timer");
var startQuizButton = document.querySelector("#start-quiz");

console.log(navigationBar.innerHTML);
console.log(questionSpace.innerHTML);
console.log(startQuizButton.innerHTML);

// I'm putting the question choices as an array so its easy to fill in the HTML lower down with the DOM
var questionArray = [
  "<div class='row'> <div class='col-6 offset-3 text-center'> <h2>Question 1</h2> </div> </div> <div class='row'> <div class='col-6 offset-3 text-left'> <button type='button' class='btn btn-submit' id='answer1-1'> Answer 1 </button> </div> </div> <div class='row'> <div class='col-6 offset-3 text-left'> <button type='button' class='btn btn-submit' id='answer1-2'> Answer 2 </button> </div> </div> <div class='row'> <div class='col-6 offset-3 text-left'> <button type='button' class='btn btn-submit' id='answer1-3'> Answer 3 </button> </div> </div> <div class='row'> <div class='col-6 offset-3 text-left'> <button type='button' class='btn btn-submit' id='answer1-4'> Answer 4 </button> </div> </div> </div>",

  "<h2 id='Q2' class='col-6 offset-3 text-left'>Q2</h2> <div class='row'><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id='A1'>First Answer</button></div></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id='A2'>Second Answer</button></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id=‘A3'>Third Answer</button></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id=‘A4'>Fourth Answer</button></div>",

  "<h2 id='Q3' class='col-6 offset-3 text-left'>Q3</h2> <div class='row'><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id='A1'>First Answer</button></div></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id='A2'>Second Answer</button></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id=‘A3'>Third Answer</button></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id=‘A4'>Fourth Answer</button></div>",

  "<h2 id='Q4' class='col-6 offset-3 text-left'>Q4</h2> <div class='row'><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id='A1'>First Answer</button></div></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id='A2'>Second Answer</button></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id=‘A3'>Third Answer</button></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id=‘A4'>Fourth Answer</button></div>",

  "<h2 id='Q5' class='col-6 offset-3 text-left'>Q5</h2> <div class='row'><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id='A1'>First Answer</button></div></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id='A2'>Second Answer</button></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id=‘A3'>Third Answer</button></div><div class='col-6 offset-3 text-left'><button type='button' class='btn btn-submit' id=‘A4'>Fourth Answer</button></div>",
];

var interval;

startQuizButton.addEventListener("click", startQuizFunction);


function startQuizFunction() {

  // Timer
  var timeleft = 75;
  var gameTimer = setInterval(function(){
    if(timeleft <= 0){
      // This will be used to show game over once possible
      clearInterval(gameTimer);
      timer.innerHTML = "Finished";
    } else {
     timer.innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000)
  
// First question
  questionSpace.innerHTML = questionArray[0];

    };