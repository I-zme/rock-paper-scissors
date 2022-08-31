/*PSEUDOCODE -- Rock Paper Scissors

GetcomputerChoice 
    Computer chooses randomly R P or S
GetplayerChoice 
        #case insesitive
        
    Player inputs value Rock Paper or Scissors
    IF player input not Rock Paper or Scissors
        request input again

PlayRound
        #single round
        # specific message for each play

    IF computerChoice === PlayerChoice
        it's a tie, play again
    ELSE IF computerChoice === Rock
        IF playerChoice === Scissors
        playerLost
        Return
        IF playerChoice === Paper
        playerWon
        Return
    ELSE IF computerChoice === Paper
        IF playerChoice === Rock
        playerLost
        Return
        IF playerChoice === Scissors
        playerWon
        Return
    ELSE IF computerChoice === Scissors
        IF playerChoice === Paper
        playerLost
        Return
        IF playerChoice === Rock
        playerWon
        Return
 
    ELSE 
        something went wrong


Game
        # 5 rounds
    Reiterate over 5 times
        GetComputerChoice
        GetPlayerChoice
        PlayRound
        keep tally of winner and loser
    when 5 round were played
        declare winner or loser
        End Game
*/

