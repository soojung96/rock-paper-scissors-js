function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();
    if (playerSelection == computerSelection) {
        return `It's a tie! ${playerSelection} does not beat ${playerSelection}`;
    }
    const result = playerSelection + " " + computerSelection;
    const winConditions = {
        'Rock Scissors': true,
        'Rock Paper': false,
        'Paper Rock': true,
        'Paper Scissors': false,
        'Scissors Paper': true,
        'Scissors Rock': false
    };
    const win = winConditions[result];
    if (win) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (!win) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}
const playerSelection = 'rOck';
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

function game() {
    let currentRound = 1;
}