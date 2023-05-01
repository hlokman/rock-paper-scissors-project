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

//Add the different divs
const container = document.querySelector('.container');
const text = document.createElement('div');
text.setAttribute('class', 'textBox');
container.appendChild(text);

const btnRock = document.createElement('button');
btnRock.setAttribute('class', 'rock');
btnRock.textContent='Rock';
container.appendChild(btnRock);
//-
const btnPaper = document.createElement('button');
btnPaper.setAttribute('class', 'paper');
btnPaper.textContent='Paper';
container.appendChild(btnPaper);
//-
const btnScissors = document.createElement('button');
btnScissors.setAttribute('class', 'scissors');
btnScissors.textContent='Scissors';
container.appendChild(btnScissors);

// Event Listeners
btnRock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
});


btnPaper.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));

});


btnScissors.addEventListener('click', () => {
    playerSelection= 'scissors';
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
});




//
/*console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);*/

let gamesWon = 0;
let lostGames = 0;
let tieGames = 0;


/*function game() {
    while (gamesWon != 5 && lostGames != 5) {
        const computerSelection = getComputerChoice();
        const playerSelection;
        let result = playRound(playerSelection, computerSelection);

        if (result.startsWith("You Win")) {
            gamesWon++;
            console.log(computerSelection);
            console.log(result);
        } else if (result.startsWith("You Lose")) {
            lostGames++;
            console.log(computerSelection);
            console.log(result);
        } else {
            tieGames++;
            console.log(computerSelection);
            console.log(result);
            continue;
        }
    }


    if (gamesWon > lostGames) {
        console.log(`Congratulations, you WIN! You're the first to reach 5 victories: you lost ${lostGames} time(s) and you tied ${tieGames} time(s)`);
    } else {
        console.log(`Oh... you lost... The computer was the first to reach 5 victories: you won ${gamesWon} time(s) and you tied ${tieGames} time(s)`);
    };

};


console.log(game());*/




    /*for (let i=1; i <= gamesWon || i <= lostGames; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Choose between Rock, Paper and Scissors").toLowerCase();
        let result = playRound(playerSelection, computerSelection);

        if (result.startsWith("You Win")) {
            gamesWon++;
            console.log(computerSelection);
            console.log(result);
        } else if (result.startsWith("You Lose")) {
            lostGames++;
            console.log(computerSelection);
            console.log(result);
        } else {
            i--;
            console.log(computerSelection);
            console.log(result);
        }
    };*/

    /*console.log(result);
    console.log(computerSelection);*/

    /*if (result.startsWith("You Win!")) {
        gamesWon++ ;
    } else if (result.startsWith("You Lose!")) {
        lostGames++ ;
    } else if (result === "It's a tie!") {
        tieGames++ ;
    } else {
        return console.log("Please try again");
    }
game(rounds - 1);*/


    /*if (rounds === 0) {
        if (gamesWon > lostGames) {
            return console.log(`Congratulations, you WIN! (You won ${gamesWon} time(s), you lost ${lostGames} time(s) and tie ${tieGames} time(s))`);
        } else if (lostGames > gamesWon) {
            return console.log(`Oh... you lost... (You won ${gamesWon} time(s), you lost ${lostGames} time(s) and tie ${tieGames} time(s))`);
        } else {
            return console.log(`A tie! (You won ${gamesWon} time(s), you lost ${lostGames} time(s) and tie ${tieGames} time(s))`)}
    };
*/