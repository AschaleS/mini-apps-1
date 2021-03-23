

document.addEventListener('DOMContentLoaded', function (event) {
  let boxes = document.getElementsByClassName('box');

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', playGame);
  }
  let turnCounter = 0;
  let letterX = [];
  let letterO = [];


  function playGame(event) {
    if (turnCounter % 2 === 0) {
      letterX.push(event.target.id);
      event.target.value = "X";
      event.target.disabled = true;
      turnCounter++;

    } else {
      letterO.push(event.target.id);
      event.target.value = "O";
      event.target.disabled = true;
      turnCounter++;

    }

  }

})