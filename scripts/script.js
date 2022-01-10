function getWinner(user, computer) { /*This function tests the values of both players to get the winner*/
    let winner;

    if (user == computer) {
        winner = '';
    }
    else if ((user == 'r' && computer == 's') || (user == 'p' && computer == 'r') || (user == 's' && computer == 'p')){
        winner = 'user';
    }
    else{
        winner = 'computer';
    }
    
    return winner;
}

function getComputerChoice() {
    const options = ['r', 'p', 's'];
    choice = options[Math.floor(Math.random()*3)]; // gets a random index between 0 and 2 (0, 1, 2) that is used to choose a random play
    return choice;
}

function playGameRound() {
    const userChoice = prompt('Rock, paper or scissor?').toLowerCase().charAt(0); // first character of string ('lowercased')
    const computerChoice = getComputerChoice();
    console.log(userChoice + ' ' + computerChoice);
    return getWinner(userChoice, computerChoice);
}

let userWins = 0, computerWins = 0;

for (let i = 0; i < 5; i++) {
    let winner = playGameRound();

    if (winner == 'user') userWins++; // 35 and 36 count the amount of wins each player had
    else if (winner == 'computer') computerWins++;
    console.log(`Round ${i + 1}\nUser ${userWins} x Computer ${computerWins}`);
}

if (computerWins > userWins) {
    console.log('Computer won!');
} else if (userWins > computerWins) {
    console.log('User won!');
} else {
    console.log(`I'ts a draw!`);
}