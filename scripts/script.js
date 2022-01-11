const userInput = document.querySelectorAll(".u");
const userWinsParagraph = document.querySelector(".user-wins");
const computerWinsParagraph = document.querySelector(".computer-wins");

let computerWins = 0;
let userWins = 0;

startListening();

function startListening(){
    userInput.forEach(user => user.addEventListener('click', getUserChoice));
}
function stopListening(){
    userInput.forEach(user => user.removeEventListener('click', getUserChoice));
}

function getComputerChoice() {
    const options = ['r', 'p', 's'];
    return options[Math.floor(Math.random(0, 2)*3)]; // gets random index between 0 and 2
}
function getUserChoice(e){ // when the user clicks the button, the round starts 
    stopListening();
    userChoice = this.classList.value[this.classList.value.length - 1]; //gets the last digit of the classes of the element (r, p or s)
    computerChoice = getComputerChoice();

    let winner = getWinner(computerChoice, userChoice), loser;
    
    if (winner[1] == 'c'){
        loser = `.u.${userChoice}`;
        computerWins++;
    } else if (winner[1] == 'u'){
        loser = `.c.${computerChoice}`
        userWins++;
    }

    console.log(winner, loser, computerWins, userWins);
    showResults(winner, loser);
}

function getWinner(computer, user) {
    if (computer == user){ 
        return `.${computer}`;
    }
    else if (computer == 'r' && user == 's' || computer == 'p' && user == 'r' || computer == 's' && user == 'p'){
        return `.c.${computer}`;
    }
    else{
        return `.u.${user}`;
    }
}
function showResults(winner, loser) {
    userWinsParagraph.textContent = `${userWins} POINTS`;
    computerWinsParagraph.textContent = `${computerWins} POINTS`;
    if(winner[1] != 'u' && winner[1] != 'c'){
        drawDivs = document.querySelectorAll(winner);
        drawDivs.forEach(div => div.classList.add("draw-class"))
        setTimeout(() => {
            drawDivs.forEach(div => div.classList.remove("draw-class"));
            decideToContinue();
        }, 250);
        
    }
    else{
        winnerDiv = document.querySelector(winner);
        loserDiv = document.querySelector(loser);
        winnerDiv.classList.add("winner-class");
        loserDiv.classList.add("loser-class");
        setTimeout(() => {
            winnerDiv.classList.remove("winner-class");
            loserDiv.classList.remove("loser-class");
            decideToContinue();
        }, 250);
    }
}

function decideToContinue() {
    if (userWins != 5 && computerWins != 5){
        startListening();    
        return;
    }
    const finalMessageDiv = document.querySelector('.final-message');

    winnerMessageHeading = document.createElement('h1'); 
    winnerMessageHeading.classList.add('winner-message')
    if(userWins == 5){
        winnerMessageHeading.textContent = 'The user won! '; 
        winnerMessageHeading.style.color = 'lightblue';
    } else{
        winnerMessageHeading.textContent = 'The computer won!';
        winnerMessageHeading.style.color = 'lemonchiffon';
    }

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.classList.add('play-again');

    finalMessageDiv.appendChild(winnerMessageHeading);
    finalMessageDiv.appendChild(playAgainButton);

    playAgainButton.addEventListener('click', () => {
        userWins = 0;
        computerWins = 0;
        finalMessageDiv.removeChild(winnerMessageHeading);
        finalMessageDiv.removeChild(playAgainButton);
        
        userWinsParagraph.textContent = computerWinsParagraph.textContent = `0 POINTS`;
        startListening();
    }); 
}