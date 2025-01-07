
const submit=document.getElementById("submit");
const guessSlot=document.querySelector('.pGuess');
const remaining=document.querySelector('.rRemain');
const lowOrHigh=document.querySelector('.lowORHi')
let count=10;
// generate a random number between 1 and 100
const randomNum=parseInt(Math.random()*100+1);
// let userInput=90;

function resetGame() {
    count = 10;
    remaining.innerHTML = count;
    guessSlot.innerHTML = "";
    lowOrHigh.innerHTML = "";
    document.getElementById("GuessNum").value = "";
    return parseInt(Math.random() * 100 + 1);
}

submit.addEventListener("click",(event)=>{
    event.preventDefault();
     const  userInput=parseInt(document.getElementById("GuessNum").value);
     if (!userInput || isNaN(userInput)) {
        lowOrHigh.innerHTML = "Please enter a valid number!";
        document.getElementById("GuessNum").value = "";
        return;
    }
    if(count>1){
   
    if(userInput==randomNum)
        {
            document.getElementById('successCard').classList.add('show');
            document.getElementById('playAgain').addEventListener('click', () => {
                document.getElementById('successCard').classList.remove('show');
                resetGame();
            });
           
        }
    else if(userInput>randomNum){
        lowOrHigh.innerHTML= `Your Guess ${userInput} is Greater than the Random Number🥲!`
    }
    else if(userInput<randomNum){
        lowOrHigh.innerHTML= `Your Guess ${userInput} is Lower than the Random Number🥲!`
    }
    
    remaining.innerHTML= count<2?0:--count;
    guessSlot.innerHTML+=userInput+" ";

    document.getElementById("GuessNum").value = "";
}
 else {
        document.getElementById('correctNumber').textContent = randomNum;
        document.getElementById('gameOverCard').classList.add('show');
        document.getElementById('playAgainGameOver').addEventListener('click', () => {
            document.getElementById('gameOverCard').classList.remove('show');
            resetGame();
        });
    }
    
});

