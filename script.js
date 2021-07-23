function game(){
    let computerSelection;
    let playerChoice;
    let playerSelection;
    let playerScore=0;
    let computerScore=0;

    function computerPlay(){
        let choice = Math.floor(3*Math.random()+1);
        return (choice === 1)?"Rock":(choice === 2)?"Paper": "Scissors" ; 
    }

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection[0].toUpperCase()+playerSelection.slice(1).toLowerCase()
        if (playerSelection === computerSelection){
            return `Tie! ${playerSelection} equals ${computerSelection}`
        }
        switch(true){
            case playerSelection  === "Rock" && computerSelection === "Paper" :
                computerScore++;
                return "You Lose! Paper beats Rock";
            case playerSelection  ==="Rock" && computerSelection === "Scissors" :
                playerScore++;
                return "You Win! Rock beats Scissors";
            case playerSelection  ==="Paper" && computerSelection === "Rock"  :
                playerScore++;
                return "You Win! Paper beats Rock";
            case playerSelection  ==="Paper" && computerSelection ===  "Scissors":
                computerScore++;
                return "You Lose! Scissor beats Paper";
            case playerSelection  ==="Scissors" && computerSelection ===  "Rock" :
                computerScore++;
                return "You Lose! Rock beats Scissors";
            case playerSelection  === "Scissors"&& computerSelection === "Paper" :
                playerScore++;
                return "You Win! Scissors beats Paper";
        }
    }

    for(let i =0; i<5;i++){
        do{
            playerChoice = prompt(`Round ${i+1}.What is your choice?(1:Rock,2:Paper,3:Scissors)`)
            playerSelection = (playerChoice === "1")?"Rock":(playerChoice === "2")?"Paper": 
            (playerChoice === "3")?"Scissors":undefined;
        }while(playerSelection === undefined)

        computerSelection =  computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Round ${i+1}.Player Score:${playerScore},Computer Score:${computerScore}.`);
    }
    if(playerScore === computerScore){
        console.log("Tie!");
    }
    else if(playerScore > computerScore){
        console.log("You Win!");
    }
    else{
        console.log("You Lose!");
    }
}

game();