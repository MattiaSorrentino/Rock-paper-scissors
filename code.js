let humanScore = 0
let computerScore = 0
let round = 0




function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    const pcChoice = (options[(Math.floor(Math.random()*options.length))]);
    console.log("The computer played " + pcChoice.toUpperCase());
    return pcChoice    
}

function getHumanChoice(){
    const playerChoice = prompt("insert your choice", "Rock, Paper or Scissors");
    if(playerChoice.toLowerCase() === "rock"||playerChoice.toLowerCase() === "paper"||playerChoice.toLowerCase() === "scissors"){
        console.log("You played " + playerChoice.toUpperCase());
        return playerChoice.toLowerCase();
    } else {
        alert("Invalid input, try again!");
        playGame();
    }        
       
}

function playRound(humanChoice,computerChoice){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
    if(humanSelection === computerSelection){
        round++ ;
        console.log("Tie!");
        console.log("CURRENT SCORE | You " + humanScore + " - Computer " + computerScore + "|");
        console.log("Round -> "+round);
    } else if (humanSelection === "rock" && computerSelection === "paper" ||
        humanSelection === "paper" && computerSelection === "scissors" ||
        humanSelection === "scissors" && computerSelection === "rock"){
            console.log("You've lost!");
            computerScore++ ;
            round++ ;
            console.log("CURRENT SCORE | You " + humanScore +" - Computer "+ computerScore + "|");
            console.log("Round -> "+round);
            // return computerScore && humanScore;           
                        
        } else if (humanSelection === "rock" && computerSelection === "scissors" ||
            humanSelection === "paper" && computerSelection === "rock" ||
            humanSelection === "scissors" && computerSelection === "paper"){
                console.log("You win!");
                humanScore++ ;
                round++ ;
                console.log("CURRENT SCORE | You " + humanScore + " - Computer " + computerScore +"|");
                console.log("Round -> "+round);
                // return computerScore && humanScore;
            } 
    
}

function endgame(){
    if(humanScore > computerScore){
        alert("YOU WON!! YOUR SCORE " + humanScore + " - COMPUTER SCORE " + computerScore);
    }else if (humanScore === computerScore){
        alert("TIE! "+ humanScore + " - COMPUTER SCORE " + computerScore);        
    }else{ 
        alert("YOU LOSE! YOUR SCORE "+ humanScore + " - COMPUTER SCORE " + computerScore);
    }    
}

// function resetGame(){
//     humanScore = 0;
//     computerScore = 0;
//     round = 0;
//     playGame();
// }

function playGame(){
    playRound();
    if(round < 5 || humanScore === 5 || computerScore === 5){
            playGame();
    }else{
        endgame();
    }
}


playGame()
