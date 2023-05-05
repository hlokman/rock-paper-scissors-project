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
//const computerSelection = getComputerChoice();
/*const playerSelection;*/

// UI (Add the different divs)-------------------------------
const container = document.querySelector('.container');

const btnBox = document.createElement('div');
btnBox.setAttribute('class', 'btnBox');
container.appendChild(btnBox);

const btnRock = document.createElement('button');
btnRock.setAttribute('class', 'rock');
btnRock.textContent='Rock';
btnBox.appendChild(btnRock);

const btnPaper = document.createElement('button');
btnPaper.setAttribute('class', 'paper');
btnPaper.textContent='Paper';
btnBox.appendChild(btnPaper);

const btnScissors = document.createElement('button');
btnScissors.setAttribute('class', 'scissors');
btnScissors.textContent='Scissors';
btnBox.appendChild(btnScissors);

const text = document.createElement('div');
text.setAttribute('class', 'textBox');
container.appendChild(text);

const scoresBox = document.createElement('div');
scoresBox.setAttribute('class', 'scoresBox');
container.appendChild(scoresBox);

const wins = document.createElement('div');
wins.setAttribute('class', 'wins');
scoresBox.appendChild(wins);
//
const ties = document.createElement('div');
ties.setAttribute('class', 'ties');
scoresBox.appendChild(ties);
//
const losses = document.createElement('div');
losses.setAttribute('class', 'losses');
scoresBox.appendChild(losses);
//
const winsBox = document.createElement('div');
winsBox.setAttribute('class', 'winsBox');
wins.appendChild(winsBox);
const tiesBox = document.createElement('div');
tiesBox.setAttribute('class', 'tiesBox');
ties.appendChild(tiesBox);
const lossesBox = document.createElement('div');
lossesBox.setAttribute('class', 'lossesBox');
losses.appendChild(lossesBox);

const winsText = document.createElement('div');
winsText.setAttribute('class', 'winsText');
winsText.textContent='Player Score';
wins.appendChild(winsText);

const tiesText = document.createElement('div');
tiesText.setAttribute('class', 'tiesText');
tiesText.textContent='Ties';
ties.appendChild(tiesText);

const lossesText = document.createElement('div');
lossesText.setAttribute('class', 'lossesText');
lossesText.textContent='Computer Score';
losses.appendChild(lossesText);

const btnBox2 = document.createElement('div');
btnBox2.setAttribute('class', 'btnBox2');
container.appendChild(btnBox2);
//
const btnRestart = document.createElement('button');
btnRestart.setAttribute('class', 'restart');
btnRestart.textContent='Restart';
btnBox2.appendChild(btnRestart);
//-----------------------------------------------------------




// The game--------------------------------------------------
let gamesWon = 0;
let lostGames = 0;
let tieGames = 0;

winsBox.innerText = `${gamesWon}`;
lossesBox.textContent = `${lostGames}`;
tiesBox.textContent = `${tieGames}`

// Event Listeners
//const controller = new AbortController();

btnBox.addEventListener('click', (e) => {

    if (e.target.className == 'rock') {
        playerSelection = 'rock'
    } else if (e.target.className == 'paper') {
        playerSelection = 'paper'
    } else if (e.target.className == 'scissors') {
        playerSelection = 'scissors'
    };
    
    while (gamesWon !== 5 && lostGames !== 5) {
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result.startsWith("You Win") && gamesWon < 4) {
            gamesWon++;
            winsBox.innerText = `${gamesWon}`;
            return text.innerText += `\n Computer chooses ${computerSelection}: ${result}\n`;
        } else if (result.startsWith("You Lose") && lostGames < 4) {
            lostGames++;
            lossesBox.textContent = `${lostGames}`;
            return text.innerText += `\n Computer chooses ${computerSelection}: ${result} \n`;
        } else if (result.startsWith("You Win") && gamesWon == 4) {
            gamesWon ++;
            winsBox.innerText = `${gamesWon}`;
            return text.innerHTML += `<br>Computer chooses ${computerSelection}: ${result}<br><strong><br>Congratulations, you WIN! You're the first to reach 5 victories: you lost ${lostGames} time(s) and you tied ${tieGames} time(s)</strong>`
        } else if (result.startsWith("You Lose") && lostGames == 4) {
            lostGames++;
            lossesBox.textContent = `${lostGames}`;
            return text.innerHTML += `<br>Computer chooses ${computerSelection}: ${result}<br><strong><br>Oh... you lost... The computer was the first to reach 5 victories: you won ${gamesWon} time(s) and you tied ${tieGames} time(s)</strong>`;
        } else if (result.startsWith("It's a tie!")) {
            tieGames++;
            tiesBox.textContent = `${tieGames}`
            return text.innerText += `\n Computer chooses ${computerSelection}: ${result} \n`;
        } 
    };
    /* Previous version that caused an issue (when someone reaches 5 victories, you have to click on a button again to display the final result.
        The version below allows to end the loop and the text displaying without adding an AbortSignal

    if (gamesWon > lostGames) {
        text.innerHTML += `<strong><br>Congratulations, you WIN! You're the first to reach 5 victories: you lost ${lostGames} time(s) and you tied ${tieGames} time(s)</strong>`;
        controller.abort();
    } else if (lostGames > gamesWon) {
        text.innerHTML += `<strong><br>Oh... you lost... The computer was the first to reach 5 victories: you won ${gamesWon} time(s) and you tied ${tieGames} time(s)</strong>`;
        controller.abort();
    };*/
}/*, 
{ signal: controller.signal }*/
);

btnRestart.addEventListener('click', () => {
    document.location.reload();
});