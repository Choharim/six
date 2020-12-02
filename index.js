const rangeTitle = document.querySelector(".range-title"),
range = document.querySelector("#range"),
guessNumberContainer = document.querySelector(".guessNumber-container"),
guessNumberInput = guessNumberContainer.querySelector(".guessNumber-input"),
guessNumberBtn = guessNumberContainer.querySelector(".guessNumber-btn"),
chooseUser = document.querySelector(".choose-user"),
chooseMachine = document.querySelector(".choose-machine"),
result = document.querySelector(".result");

function gameResult(user,machine){
  if(user === machine){
    result.innerText="You win!";
  }else{
    result.innerText="You lost!";
  }
}

function showChoosingNumber(machineNumber){
  chooseUser.innerText = `You chose: ${guessNumberInput.value}`;
  chooseMachine.innerText = `,the machine chose: ${machineNumber}`;
  gameResult(parseInt(guessNumberInput.value),machineNumber);
}

function makeRandomNumber(){
  const numberOfRange = parseInt(range.value)+1;
  let randomNumber = Math.floor(Math.random() *numberOfRange ); 
  if(parseInt(range.value) === 0){
    randomNumber = 0;
  }
  showChoosingNumber(randomNumber);
}

function submitHandle(event){
  event.preventDefault();
  if(isNaN(guessNumberInput.value) || parseInt(range.value) < parseInt(guessNumberInput.value) || guessNumberInput.value === ""){
    guessNumberInput.value="";
  }else{
    makeRandomNumber();
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