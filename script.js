// PSEUDOCODE -- Rock Paper Scissors






// GetcomputerChoice 
//     Computer chooses randomly R P or S
function getComputerChoice(gameOptions){
    let num = Math.floor(Math.random()*3);
    let computerSelection = gameOptions[num];
    return computerSelection;
}



// GetplayerChoice 
//         #case insesitive
        
//     Player inputs value Rock Paper or Scissors
//     IF player input not Rock Paper or Scissors
//         request input again
function getPlayerChoice(gameOptions){
        let playerSelection = makeCaseInsensitive(prompt("Enter Rock, Paper or Scissors: "));
        return playerSelection;
        }

function makeCaseInsensitive(a_string){
    //takes string, makes lower case, capitalizes first letter
    changed_string = a_string.toLowerCase().replace(a_string[0],a_string[0].toUpperCase());
    return changed_string;
}
    

function evalPlayerSelection(gameOptions){
    while(true){
        let playerSelection = getPlayerChoice(gameOptions);
        if(gameOptions.includes(playerSelection)){
            return playerSelection;
        }
        else{
            alert("Wrong Entry, try again!");
        }
    }
}

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