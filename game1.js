const compChoiceDisplay = document.getElementById('comp-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const TimeOut = 1000;

let userChoice;
let compChoice;
let result;

let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) =>{
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateRandom();
        getResult();
    })
})

function generateRandom(){
    const random = Math.floor(Math.random() * 3) + 1;

    if(random === 1){
        compChoice = 'ROCK';
    }
    if(random === 2){
        compChoice = 'PAPER';
    }
    if(random === 3){
        compChoice = 'SCISSORS';
    }
    compChoiceDisplay.innerHTML = compChoice;
    console.log(random);
}

function getResult(){
    if(userChoice === compChoice){
        result = 'Its a draw!';
    }
    else if(userChoice === 'ROCK' && compChoice === 'PAPER'){
        result = 'Computer Wins!';
    }
    else if(userChoice === 'ROCK' && compChoice === 'SCISSORS'){
        result = 'User Wins!';
    }
    else if(userChoice === 'PAPER' && compChoice === 'ROCK'){
        result = 'User Wins!';
    }
    else if(userChoice === 'PAPER' && compChoice === 'SCISSORS'){
        result = 'Computer Wins!';
    }
    else if(userChoice === 'SCISSORS' && compChoice === 'PAPER'){
        result = 'User Wins!';
    }
    else if(userChoice === 'SCISSORS' && compChoice === 'ROCK'){
        result = 'Computer Wins!';
    }

    resultDisplay.innerHTML = result;
}