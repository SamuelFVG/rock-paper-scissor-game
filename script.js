function getComputerChoice(){
    options = ['r', 'p', 's'];
    choice = options[Math.floor(Math.random()*3)];
    return choice;
}
function playGameRound(){
    const userChoice = prompt('Rock, paper or scissor?').toLowerCase().charAt(0); // first character of string ('lowercased')
    const computerChoice = getComputerChoice();
    console.log(userChoice+" "+computerChoice);
}