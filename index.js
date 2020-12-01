const rangeTitle = document.querySelector(".range-title"),
range = document.querySelector("#range"),
guessNumberContainer = document.querySelector(".guessNumber-container"),
guessNumberInput = guessNumberContainer.querySelector(".guessNumber-input"),
guessNumberBtn = guessNumberContainer.querySelector(".guessNumber-btn"),
chooseUser = document.querySelector(".choose-user"),
chooseMachine = document.querySelector(".choose-machine"),
result = document.querySelector(".result");

function makeRandomNumber(){
  const numberOfRange = parseInt(range.value)+1;
  let randomNumber = Math.floor(Math.random() *numberOfRange ); 
  if(parseInt(range.value) === 0){
    randomNumber = 0;
  }
  return randomNumber;
}
makeRandomNumber();
setInterval(makeRandomNumber,1000);

function showChoosingNumber(){
  chooseUser.innerText = `You chose: ${guessNumberInput.value}`;
  chooseMachine.innerText = `,the machine chose: `;
}

function submitHandle(event){
  event.preventDefault();
  if(isNaN(guessNumberInput.value)){
    guessNumberInput.value="";
  }else if (range.value < guessNumberInput.value){
    guessNumberInput.value="";
  }
  else{
    showChoosingNumber();
  }
}

function showRange(){
  rangeTitle.innerText = `Generate a number between ${range.min} and ${range.value}`;
}

function init(){
  setInterval(showRange,1000);
  guessNumberContainer.addEventListener("submit",submitHandle);
}
init();