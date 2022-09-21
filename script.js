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


function addColourClass(selectionArray, roundWon){
    const arrow = determineArrowName(selectionArray);
    if(roundWon===null)return;
    let colourClass = roundWon? 'winColour-triangle':'loseColour-triangle';
    const triangles = document.querySelectorAll(arrow);
    triangles.forEach((triangle)=>{
        triangle.classList.add(colourClass);
    })
}


function determineArrowName([playerSelection,computerSelection]){
    let arrow = playerSelection[0]+computerSelection[0];
    if(arrow==='PR'||arrow==='RP'){
        arrow = '.PR';
    }
    else if(arrow==='SR'||arrow==='RS'){
        arrow = '.RS';
    }
    else{
        arrow = '.SP';
    }
    return arrow
}


// PlayRound
//         #single round
//         # specific message for each play

function playRound(playerSelection){

    const computerSelection = getComputerChoice();
    let response;
    let roundWon;

   

    if(computerSelection === playerSelection){
        response = "It's a tie";
        roundWon = null;
    }

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
    addColourClass([computerSelection,playerSelection], roundWon);
    return [response, roundWon];
}


function updateScore(roundWon){
    if(roundWon){
        playerScore.textContent = Number(playerScore.textContent)+1;
        score.classList.add('winColour');
    }
    else if(!roundWon && roundWon!==null) {
        computerScore.textContent = Number(computerScore.textContent)+1;
        score.classList.add('loseColour');
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

function removeTransition(e){
    if(e.propertyName==='box-shadow'){
        this.classList.remove('winColour');
        this.classList.remove('loseColour');
    }
    else if(e.propertyName==='border-bottom-color'){
        this.classList.remove('winColour-triangle');
        this.classList.remove('loseColour-triangle');
    }
    else return;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    results.textContent='';
    delay(10).then(()=>{results.textContent = response});

    updateScore(roundWon);

    const transitions = document.querySelectorAll('.transitions');
    transitions.forEach(transition=>transition.addEventListener('transitionend',removeTransition));

    if(gameWinner = isGameFinished()){
        delay(500).then(()=>{
            alert(`${gameWinner} Let's play again!`);
            playerScore.textContent = 0;
            computerScore.textContent = 0;
            results.textContent = '';
        });
    }
}