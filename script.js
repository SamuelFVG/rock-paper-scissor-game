function getWinner(user, computer) {
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
    options = ['r', 'p', 's'];
    choice = options[Math.floor(Math.random()*3)];
    return choice;
}

function playGameRound() {
    const userChoice = prompt('Rock, paper or scissor?').toLowerCase().charAt(0); // first character of string ('lowercased')
    const computerChoice = getComputerChoice();
    console.log(userChoice + ' ' + computerChoice);
    return getWinner(userChoice, computerChoice);
}

let userWins = 0, computerWins = 0;

for(let i = 0; i < 5; i++){
    let winner = playGameRound();

    if (winner == 'user') userWins++;
    else if (winner == 'computer') computerWins++;
    console.log(`Round ${i + 1}\nUser ${userWins} x Computer ${computerWins}`);
}
