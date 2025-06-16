
const choices = ['rock', 'paper', 'scissors']
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const result = document.getElementById("result")

const playerScoreDisplay = document.getElementById("playerScore")
const computerScoreDisplay = document.getElementById("computerScore")
let playerScore = 0
let computerScore = 0

function play(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)] // 0,1,2
    let gameResult = "";

    if(playerChoice === computerChoice){
        gameResult = "IT'S A TIE"
    }else{
        switch(playerChoice){
            case "rock":
                gameResult = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
            case "scissors":
                gameResult = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
            case "paper":
                gameResult = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`
    result.textContent = gameResult

    result.classList.remove("greenText")
    result.classList.remove("redText")
    switch(gameResult){
        case "YOU WIN!":
            result.classList.add("greenText")
            playerScore++
            break;
        case "YOU LOSE!":
            result.classList.add("redText")
            computerScore++
            break;
    }   

    playerScoreDisplay.textContent = playerScore
    computerScoreDisplay.textContent = computerScore
}