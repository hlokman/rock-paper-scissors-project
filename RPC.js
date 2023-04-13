function getComputerChoice() {
    let myArray=['Rock','Paper','Scissors'];
    let random= Math.floor(Math.random() * myArray.length) ;
    return randomChoice= myArray[random];
} 
//console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else { 
        return "Please choose between Rock, Paper and Scissors";
    }
}
const computerSelection = getComputerChoice();
const playerSelection = 'paper';

console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);