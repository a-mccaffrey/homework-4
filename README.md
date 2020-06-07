# homework-4

So my idea is that I have a header where the view highscores button and the timer are kept. 

The timer needs to have certain rules - it has to go down by 1 second at a time (starting at 70 I think?) and it needs to lose 10 seconds every time you pick the wrong answer.

The high score area needs to stay constant, and go to the part of the application that will show you the locally stored list of high scores

the questions are going to cycle through - I wonder if this function should be inside the timer function since they effect the number on the timer. 

If they get a question wrong, they have to be told. Also they should probably get points docked (that would be the easiest way - 10 points for a correct answer, -5 for an incorrect one, can't go below 0). However, they move onto the next question right away.
