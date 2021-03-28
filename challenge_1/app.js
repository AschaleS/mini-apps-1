

document.addEventListener('DOMContentLoaded', function (event) {
  let boxes = document.getElementsByClassName('box');

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', playGame);
  }
  let turnCounter = 0;
  let arrayOfX = [];
  let arrayOfO = [];
  let winningCombinations = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"],   ["1", "5", "9"], ["3", "5", "7"]];


  function playGame(event) {
    if (turnCounter % 2 === 0) {
      arrayOfX.push(event.target.id);
      event.target.value = "X";
      event.target.disabled = true;
      turnCounter++;
      checkWhoWins(arrayOfX, "X");

    } else {
      arrayOfO.push(event.target.id);
      event.target.value = "O";
      event.target.disabled = true;
      turnCounter++;
      checkWhoWins(arrayOfO, "O");
    }
    if(turnCounter === 9) {
      alert("It is a tie - Do you want to play again?");
      reset();
    }
  }

  const checkWhoWins = (arrayOfLetters, player) => {
    for(var i = 0; i < winningCombinations.length; i++) {
      let sameLetters = 0;
      for(var j = 0; j < winningCombinations[i].length; j++) {
        if(arrayOfLetters.indexOf(winningCombinations[i][j]) !== -1) {
          sameLetters++;
        }
        if(sameLetters === 3) {
          alert("Player: " + player + " wins!");
          reset();
        }
      }
    }
  }

  function reset() {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].value = '';
      boxes[i].disabled = false;
      turnCounter = 0;
      arrayOfX = [];
      arrayOfO = [];
    }
  }

})

