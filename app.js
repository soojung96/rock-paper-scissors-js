function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

function getHumanChoice() {
    choice = prompt("Welcome to a game of Rock Paper Scissors! Please choose rock, paper, or scissors.");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice == computerChoice) {
        console.log(`It's a tie! You and the computer both chose ${humanChoice}`);
        return;
    }
    const result = humanChoice + " " + computerChoice;
    const winConditions = {
        'rock scissors': true,
        'rock paper': false,
        'paper rock': true,
        'paper scissors': false,
        'scissors paper': true,
        'scissors rock': false
    };
    const win = winConditions[result];
    if (win) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 'player win';

    }
    else if (!win) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return 'player loss'
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerWin = playRound(getHumanChoice(), getComputerChoice());
        if (playerWin == 'player win') {
            humanScore++;
        }
        else if (playerWin == 'player loss') {
            computerScore++;
        }
    }
    if (humanScore == computerScore) {
        return `Nobody won the game! It was a tie! Both you and the computer won ${humanScore} times.`;
    } else if (humanScore > computerScore) {
        return `Congratulations, you won the game! You won ${humanScore} times to the computer's ${computerScore}.`;
    } else if (computerScore > humanScore) {
        return `Sorry, you lost the game! The computer won ${computerScore} times to your ${humanScore}.`;
    }
}

console.log(playGame());
