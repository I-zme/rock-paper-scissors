// PSEUDOCODE -- Rock Paper Scissors

// Assigning variables
const score = document.getElementById('score');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');


const results = document.getElementById('results');


// Get player Choice => no longer a function. Adding event listener and use query selector of button id to take the value from clicking button of R P or S. no need to make case insensitive or alert for mistakes.
// Once a button is fired, it starts up the play round function and feeds it the player's choice.

const buttonList = document.querySelectorAll(".btn");
buttonList.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const playerSelection = button.id;
        game(playerSelection);
    });
});




// GetcomputerChoice 
//     Computer chooses randomly R P or S
function getComputerChoice(){
    const gameOptions = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random()*3);
    return gameOptions[num];
}


function addColourClass(arrow, roundWon){
    let colourClass = roundWon? '.green':'.red';
    const triangles = document.querySelectorAll(arrow);
    triangles.forEach((triangle)=>{
        triangle.classList.add(colourClass);
    })
}



// PlayRound
//         #single round
//         # specific message for each play

function playRound(playerSelection){

    const computerSelection = getComputerChoice();
    let response;
    let roundWon;

    let RSarrow = '.RS';
    let PRarrow = '.PR';
    let PSarrow = '.SP';

    if(computerSelection === playerSelection){
        response = "It's a tie";
        roundWon = null;
    }

    else if(computerSelection === "Rock"){
        if(playerSelection === "Scissors"){
            response = "Rock beats scissors";
            roundWon = false;
            addColourClass(RSarrow,roundWon);
        }
        else{
            response = "Paper beats rock";
            roundWon = true;
            addColourClass(PRarrow,roundWon);
        }
    }

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


function updateScore(roundWon){
    if(roundWon){
        playerScore.textContent = Number(playerScore.textContent)+1;
        score.classList.add('green');
    }
    else if(!roundWon && roundWon!==null) {
        computerScore.textContent = Number(computerScore.textContent)+1;
        score.classList.add('red');
    }
}

function isGameFinished(){
    let gameWinner;
    if(playerScore.textContent==='5'){
        gameWinner = "You won!";
        return gameWinner
    }
    else if(computerScore.textContent==='5'){
        gameWinner = "You lost!";
        return gameWinner
    }
    else{
        return false
    }
}


// Game
//         # until player/ computer has 5 wins
//         PlayRound
//         keep tally of winner and loser
//         when score reaches 5
//         declare winner or loser
//         End Game

function game(playerSelection){

const [response, roundWon] = playRound(playerSelection);

results.textContent = response;

updateScore(roundWon);

function removeTransition(e){
    console.log('got here');//REMOVE LATER
    if(e.propertyName!=='transform')return;
    this.classList.remove('green');
    this.classList.remove('red');
}

const transitions = document.querySelectorAll('.transitions');
transitions.forEach(transition=>transition.addEventListener('transitionend',removeTransition));//problem is here


if(gameWinner = isGameFinished()){
    alert(`${gameWinner} Let's play again!`);
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    results.textContent = '';
}

}