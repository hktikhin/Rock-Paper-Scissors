function game(){
    let playerScore=0;
    let computerScore=0;
    let roundCounter = 0;

    function computerPlay(){
        let choice = Math.floor(3*Math.random()+1);
        return (choice === 1)?"Rock":(choice === 2)?"Paper": "Scissors" ; 
    }

    function playRound(event) {
        let computerSelection = computerPlay();
        let playerSelection = event.target.textContent;
        const body = document.querySelector("body");
        // remove previous div node from dom tree if having 
        const previousDivNode = document.querySelector(".round-result");
        if (previousDivNode) previousDivNode.remove();
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("round-result") ;
        const resultRound = document.createElement("p");
        const resultScore = document.createElement("p");
         
        if (playerSelection === computerSelection){
            resultRound.textContent = `Tie! ${playerSelection} equals ${computerSelection}`
        }
        switch(true){
            case playerSelection  === "Rock" && computerSelection === "Paper" :
                computerScore++;
                resultRound.textContent = "You Lose! Paper beats Rock";
                break;
            case playerSelection  ==="Rock" && computerSelection === "Scissors" :
                playerScore++;
                resultRound.textContent = "You Win! Rock beats Scissors";
                break;
            case playerSelection  ==="Paper" && computerSelection === "Rock"  :
                playerScore++;
                resultRound.textContent = "You Win! Paper beats Rock";
                break;
            case playerSelection  ==="Paper" && computerSelection ===  "Scissors":
                computerScore++;
                resultRound.textContent = "You Lose! Scissor beats Paper";
                break;
            case playerSelection  ==="Scissors" && computerSelection ===  "Rock" :
                computerScore++;
                resultRound.textContent = "You Lose! Rock beats Scissors";
                break;
            case playerSelection  === "Scissors"&& computerSelection === "Paper" :
                playerScore++;
                resultRound.textContent = "You Win! Scissors beats Paper";
                break;
        }

        resultScore.textContent = `Round ${++roundCounter}.Player Score:${playerScore},Computer Score:${computerScore}.`;
        body.appendChild(resultDiv);
        resultDiv.appendChild(resultRound);
        resultDiv.appendChild(resultScore);

        if(playerScore === 5 || computerScore === 5){
            const finalResult = document.createElement("p");
            if(playerScore > computerScore){
                finalResult.textContent = "Player Win!";
            }
            else{
                finalResult.textContent = "Player Lose!";
            }
            // clear the buttons, add new button in below 
            const buttonDiv = document.querySelector(".buttons");
            body.removeChild(buttonDiv);
            const  newButton =  document.createElement("button");
            newButton.textContent = "Replay?"
            newButton.addEventListener("click",() => replayGame(buttonDiv));
            resultDiv.appendChild(finalResult);
            resultDiv.appendChild(newButton);
        }
    }

    function replayGame(buttonDiv){
        const body = document.querySelector("body");
        // clear the result div 
        const child = body.lastElementChild;
        child.remove();
        body.appendChild(buttonDiv);
        // reset the score 
        playerScore=0;
        computerScore=0;
        roundCounter = 0;
    }

    let buttons = Array.from(document.querySelectorAll(".button"));
    buttons.forEach(button => {
        button.addEventListener("click",playRound);
    });
}

game();
