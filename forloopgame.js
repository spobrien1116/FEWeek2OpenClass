// Let's play a game. The game will consist of 100 turns. If the number of turns is even, you gain 5 points.
// If it's odd, you gain 3 points. If ever your score is equal to 125, you are reset back to 25 points.
// This will only be allowed to happen once. The game ends if you are able to make it through 100 turns or
// you reach more than 290 points, whichever comes first.
// Using a for loop, create the game.

var points = 0;
var pointsReset = false; 

//write your code here
for (turns = 0; turns <= 100 && points <=290; turns++) {
    
    if (turns % 2 == 0) {
        points = points + 5;
    } else if (points == 125 && pointsReset == false) {
        points = 25;
        pointsReset = true;
    } else {
        points = points + 3;
    }

    console.log("Turns: " + turns + " Score: " + points);
    
}