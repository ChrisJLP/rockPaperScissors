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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    switch(playerSelection) {
        case 'rock':
            switch(computerSelection) {
                case 'rock':
                    return 'd';
                    break;
                case 'paper':
                    return 'l';
                    break;
                default: 
                    return 'w';  
            }
        case 'scissors': 
            switch(computerSelection) {
                case 'rock': 
                    return 'l';
                    break;
                case 'paper': 
                    return 'w';
                    break;
                default: 
                    return 'd';
            }
        default: 
            switch(computerSelection) {
                case 'rock': 
                    return 'w';
                    break;
                case 'paper': 
                    return 'd';
                    break;
                default: 
                    return 'l';
            }
    }   
console.log(playRound('paper', getComputerChoice()));
}

let userScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click', () => {
        if (userScore < 5 && computerScore < 5) {
            let result = playRound(button.textContent, getComputerChoice());
            updateScores(result);
            displayScores();
            if (userScore == 5 || computerScore == 5) {
                displayWinner();
            }
        } else {
            displayWinner();
        }
    });
});

function updateScores(result) {
    if (result == "w") {
        userScore++;
    } else if (result == 'l') {
        computerScore++;
    } else {
        return;
    }
}

function displayScores() {
    const displayUserScore = document.querySelector('.userScore');
    displayUserScore.textContent = `User Score: ${userScore}`;
    const displayComputerScore = document.querySelector('.computerScore');
    displayComputerScore.textContent = `Computer Score: ${computerScore}`;
}

function displayWinner() {
    if (userScore == 5) {
        const displayWinner = document.querySelector('.winner');
        displayWinner.textContent = `User is the winner! ${userScore} to ${computerScore}`;
    } else {
        const displayWinner = document.querySelector('.winner');
        displayWinner.textContent = `Computer is the winner! ${computerScore} to ${userScore}`;
    }
}