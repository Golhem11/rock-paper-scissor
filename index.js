const buttons = document.querySelectorAll('input')
function computerPlay() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}
function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""
    let playerCount = 0
    let computerCount = 0
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        
        result = ("You win! " + playerSelection + " beats " + computerSelection)
    }
    else if (playerSelection == computerSelection) {
        result = ("It\'s a tie.")
    }
    else {
        result = ("You lose! " + computerSelection + " beats " + playerSelection)
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
})
