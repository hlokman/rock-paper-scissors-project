function getComputerChoice() {
    let myArray=['Rock','Paper','Scissors'];
    let random= Math.floor(Math.random() * myArray.length) ;
    return randomChoice= myArray[random];
} 
//console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else { 
        return "Please choose between Rock, Paper and Scissors";
    }
}
const computerSelection = getComputerChoice();
const playerSelection = 'Rock';

console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);