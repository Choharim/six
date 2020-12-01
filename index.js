const rangeTitle = document.querySelector(".range-title"),
range = document.querySelector("#range"),
guessNumberContainer = document.querySelector(".guessNumber-container"),
guessNumberInput = guessNumberContainer.querySelector(".guessNumber-input"),
guessNumberBtn = guessNumberContainer.querySelector(".guessNumber-btn"),
chooseUser = document.querySelector(".choose-user"),
chooseMachine = document.querySelector(".choose-machine"),
result = document.querySelector(".result");

function showRange(){
  rangeTitle.innerText = `Generate a number between ${range.min} and ${range.value}`;
}

function init(){
  range.addEventListener("change",showRange);
  showRange();
}
init();