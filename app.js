// Game values

let min = 1,
    max = 10,
    winningNum = getWinningNum(min,max),
    guessesLeft = 3;

// UI

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI

minNum.textContent = min;
maxNum.textContent = max; 

// Play again
game.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// Listen for guess

guessBtn.addEventListener('click',function(){
  let guess = parseInt(guessInput.value);
  console.log("Guess numbetr is : " + guess);
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }

  // check if won
  if(guess === winningNum){

    gameOver(true,`${winningNum} is correct!, YOU WIN`);

  }else{
    // Wrong number
    guessesLeft -= 1;
    if(guessesLeft === 0){
      gameOver(false,`Game over!, YOU LOST, The correct number is ${winningNum}`);


    }else{
      // Game continue
      guessInput.style.borderColor = 'red';

      // Clear input
      guessInput.value = '';
 
      // Tell user its the wrong number
      setMessage(`${guess} is not correct!, ${guessesLeft} guesses left.`,'red');


    }
  }

});

// setMessage Func

function setMessage(msg,color){
  message.style.color = color;
  message.textContent = msg;
}

// Game over function


//

function gameOver(won, msg){

  let color; 
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;

  // change border to green
  guessInput.style.borderColor = color;

  // call setMessage

  setMessage(msg,color);

  // Play Again!
  guessBtn.value = 'Play Again!';
  guessBtn.className += 'play-again';
  


}

function getWinningNum(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}








