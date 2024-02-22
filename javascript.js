function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        return 'rock';
    } else if (randomNum == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
console.log(getComputerChoice());

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection) {
        case 'rock':
            switch(computerSelection) {
                case 'rock':
                    return 'Draw! Rock vs rock';
                    break;
                case 'paper':
                    return 'You lose! Paper beats rock';
                    break;
                default: 
                    return 'You win! Rock beats scissors';  
            }
        case 'scissors': 
            switch(computerSelection) {
                case 'rock': 
                    return 'You lose! Rock beats scissors';
                    break;
                case 'paper': 
                    return 'You win! Scissors beats paper';
                    break;
                default: 
                    return 'Draw! Scissors vs scissors';
            }
        default: 
            switch(computerSelection) {
                case 'rock': 
                    return 'You win! Paper beats rock';
                    break;
                case 'paper': 
                    return 'Draw! Paper vs paper';
                    break;
                default: 
                    return 'You lose! Scissors beats paper';
            }
    }   
console.log(round('paper', getComputerChoice()));
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Rock, paper or scissors?");
        let computerChoice = getComputerChoice();
        let roundResult = round(userChoice, computerChoice);
        if (roundResult.charAt(4) == "w") {
            userScore++;
        } else if (roundResult.charAt(4) == "l") {
            computerScore++;
        } else {
            continue;
        }
    }
    console.log(userScore);
    console.log(computerScore);
    if (userScore > computerScore) {
        console.log(`You win! By ${userScore} to ${computerScore}`)
    } else if (userScore < computerScore) {
        console.log(`You lose! By ${computerScore} to ${userScore}`)
    } else {
        console.log(`It's a draw! ${userScore} to ${computerScore}`)
    }
}