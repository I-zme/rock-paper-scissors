// PSEUDOCODE -- Rock Paper Scissors






// GetcomputerChoice 
//     Computer chooses randomly R P or S
function getComputerChoice(gameOptions){
    let num = Math.floor(Math.random()*3);
    let computerSelection = gameOptions[num];
    return computerSelection;
}



// Get player Choice => no longer a function. Adding event listener and use query selector of button id to take the value from clicking button of R P or S. no need to make case insensitive or alert for mistakes.
// Once a button is fired, it starts up the play round function and feeds it the player's choice.

const buttonList = document.querySelectorAll(".btn");
buttonList.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const playerChoice = button.id;
    });
});



// PlayRound
//         #single round
//         # specific message for each play

function playRound(){
    //Variables
    const gameOptions = ["Rock", "Paper", "Scissors"];
    const computerSelection = getComputerChoice(gameOptions);
    const playerSelection = evalPlayerSelection(gameOptions);

//     IF computerChoice === PlayerChoice
//         it's a tie, play again
    if(computerSelection === playerSelection){
        return "It's a tie";
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
            return "you lost this round";
        }
        else{
            return "you won this round";
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
        return "you lost this round";
    }
    else{
        return "you won this round";
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
        return "you lost this round";
    }
    else{
        return "you won this round";
    }
}
//     ELSE 
//         something went wrong
else{
    alert("something went wrong");
}
}



// Game
//         # 5 rounds
//     Reiterate over 5 times
//         GetComputerChoice
//         GetPlayerChoice
//         PlayRound
//         keep tally of winner and loser
//     when 5 round were played
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