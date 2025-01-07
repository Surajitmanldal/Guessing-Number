/**
 * Number Guessing Game
 * A simple game where user tries to guess a random number between 1-100
 * Features:
 * - 10 attempts allowed
 * - Input validation
 * - Reset functionality
 */

// DOM Element Selections
const submit = document.getElementById("submit");
const guessSlot = document.querySelector('.pGuess');
const remaining = document.querySelector('.rRemain');
const lowOrHigh = document.querySelector('.lowORHi')

// Game Variables 
let count = 10;   // Number of attempts allowed
// generate a random number between 1 and 100
let randomNum = parseInt(Math.random() * 100 + 1);

console.log(randomNum);
/**
 * Resets the game state to initial values
 * - Resets attempt counter
 * - Clears display elements
 * - Generates new random number
 * @returns {number} New random number for the game
 */

function resetGame() {
    count = 10;
    remaining.innerHTML = count;
    guessSlot.innerHTML = "";
    lowOrHigh.innerHTML = "";
    document.getElementById("GuessNum").value = "";
    randomNum = parseInt(Math.random() * 100 + 1);
    return randomNum;
}

submit.addEventListener("click", (event) => {
    event.preventDefault();
    const userInput = parseInt(document.getElementById("GuessNum").value);
    if (!userInput || isNaN(userInput)) {
        lowOrHigh.innerHTML = "Please enter a valid number!";
        document.getElementById("GuessNum").value = "";
        return;
    }
    if (count > 1) {
        console.log(randomNum);
        if (userInput == randomNum) {
            document.getElementById('successCard').classList.add('show');
            document.getElementById('playAgain').addEventListener('click', () => {
                document.getElementById('successCard').classList.remove('show');
                resetGame();

            });

        }
        else if (userInput > randomNum) {
            lowOrHigh.innerHTML = `Your Guess ${userInput} is Greater than the Random Number🥲!`
        }
        else if (userInput < randomNum) {
            lowOrHigh.innerHTML = `Your Guess ${userInput} is Lower than the Random Number🥲!`
        }

        remaining.innerHTML = count < 2 ? 0 : --count;
        guessSlot.innerHTML += userInput + " ";

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

