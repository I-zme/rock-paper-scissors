// PSEUDOCODE -- Rock Paper Scissors

// Assigning variables
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');

const results = document.getElementById('results');


// Get player Choice => no longer a function. Adding event listener and use query selector of button id to take the value from clicking button of R P or S. no need to make case insensitive or alert for mistakes.
// Once a button is fired, it starts up the play round function and feeds it the player's choice.

const buttonList = document.querySelectorAll(".btn");
buttonList.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const playerSelection = button.id;
    });
});




// GetcomputerChoice 
//     Computer chooses randomly R P or S
function getComputerChoice(){
    const gameOptions = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random()*3);
    return gameOptions[num];
}






// PlayRound
//         #single round
//         # specific message for each play

function playRound(playerSelection){
    //Variables
    const computerSelection = getComputerChoice();
    let response;
    let roundWon;
//     IF computerChoice === PlayerChoice
//         it's a tie, play again
    if(computerSelection === playerSelection){
        response = "It's a tie";
        roundWon = 'tie';
    }
//     ELSE IF computerChoice === Rock
//         IF playerChoice === Scissors
//         playerLost
//         Return
//         IF playerChoice === Paper
//         playerWon
//         Return
    else if(computerSelection === "Rock"){
        if(playerSelection === "Scissors"){
            response = "Rock beats scissors";
            roundWon = false;
        }
        else{
            response = "Paper beats rock";
            roundWon = true;
        }
    }
//     ELSE IF computerChoice === Paper
//         IF playerChoice === Rock
//         playerLost
//         Return
//         IF playerChoice === Scissors
//         playerWon
//         Return
    else if(computerSelection === "Paper"){
        if(playerSelection === "Rock"){
            response = "Paper beats rock";
            roundWon = false;            
        }
        else{
            response = "Scissors beats paper";
            roundWon = true;
        }
    }
//     ELSE IF computerChoice === Scissors
//         IF playerChoice === Paper
//         playerLost
//         Return
//         IF playerChoice === Rock
//         playerWon
//         Return
    else if(computerSelection === "Scissors"){
        if(playerSelection === "Paper"){
            response = "Scissors beats paper";
            roundWon = false;
        }
        else{
            response = "Rock beats scissors";
            roundWon = true;
        }
    }

    return [response, roundWon];

}



// Game
//         # until player/ computer has 5 wins
//         PlayRound
//         keep tally of winner and loser
//         when score reaches 5
//         declare winner or loser
//         End Game

function game(){
    let playerWon = 0;
    let playerLost = 0;

    for(let i=1; i<=5; i++){
        let play = playRound();
        alert(play);
        if(play === "you won this round"){
            playerWon++;
        }
        else if(play === "you lost this round"){
            playerLost++;
        }
    }

    if(playerWon > playerLost){
        console.log("You won the Game!")
    }
    else if(playerWon < playerLost){
        console.log("You lost the Game!")
    }
    else if(playerWon === playerLost){
        console.log("It's a tie! Incredible!")
    }
    else{
        console.log("Something went wrong with the game.")
    }
}