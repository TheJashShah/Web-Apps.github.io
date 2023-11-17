const resultDisplay = document.getElementById('result');
const GetUserInput = document.getElementById('guess');
const ButtonClick = document.getElementById('button');
const random = Math.floor(Math.random() * 100) + 1;

let result;

ButtonClick.addEventListener('click', (e)=>{
    checkGuess();
});

function checkGuess(){
    const user_guess = parseInt(GetUserInput.value);

    if(user_guess === random){
        result = 'Congratulations! You got it correct!';
    }
    else if(user_guess < random){
        result = 'Your guess is lower than the number!';
    }
    else if(user_guess > random){
        result = 'Your guess is higher than the number!';
    }
    resultDisplay.innerHTML = result;
}