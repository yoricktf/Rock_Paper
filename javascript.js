let 
// computerWon,
// userWon,
computerScore = 0,
userScore = 0,
possibleChoice = [1,2,3],
userchoice,
userOutput 
;

//let the computer pick one at random
function computerChoice (possibleChoice) {
   possibleChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
    if (possibleChoice == 1) {
        return "rock"
    } else if (possibleChoice == 2) {
        return "paper"
    } else if (possibleChoice == 3) {
        return "scissors";
    }
};     

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.id)
        evaluateWinner( computerChoice(possibleChoice), button.id)
    });
});


//evaluate them against each other including tie
//output the result, win, loss or tie
function evaluateWinner( computerChoice, humanChoice) {
    if 
        (computerChoice === 'rock' && humanChoice === 'scissors' || 
            computerChoice === 'paper' && humanChoice === 'rock' || 
            computerChoice === 'scissors' && humanChoice === 'paper' ) 
        {
        computerScore++;
        document.getElementById('gameMessage').innerHTML = `You lost! ${computerChoice} beats ${humanChoice}`;
        // console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        document.getElementById("computerScore").innerHTML = `the computers score is ${computerScore}`;
        
        // console.log(`the computers score is ${computerScore}`)
    } 
    else if 
        (humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice == 'paper' && computerChoice === 'rock' || 
            humanChoice === 'scissors' && computerChoice === 'paper' ) 
        {
        userScore++;
        document.getElementById('gameMessage').innerHTML = `You won! ${humanChoice} beats ${computerChoice}`
        // console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        document.getElementById("userScore").innerHTML = `Your score is ${userScore}`
        
        // console.log(`Your score is ${userScore}`)
    } 
    else {
        document.getElementById("gameMessage").innerHTML = `call it a draw, you picked ${humanChoice} and the computer picked ${computerChoice}`;
        // console.log(`call it a draw, you picked ${humanChoice} and the computer picked ${computerChoice}`)
    } 
};

// evaluateWinner( computerChoice(possibleChoice), humanChoice())


//function to play 5 games 
//     function fullGame(computerWon,userWon) {    
// //making the counter 
//         while (computerScore < 5 && userScore < 5) {
//             evaluateWinner(computerChoice(possibleChoice),humanChoice());
//         }
//     }
//start the game by calling the function
// fullGame();