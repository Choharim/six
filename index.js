const rangeTitle = document.querySelector(".range-title"),
range = document.querySelector("#range"),
guessNumberContainer = document.querySelector(".guessNumber-container"),
guessNumberInput = guessNumberContainer.querySelector(".guessNumber-input"),
guessNumberBtn = guessNumberContainer.querySelector(".guessNumber-btn"),
chooseUser = document.querySelector(".choose-user"),
chooseMachine = document.querySelector(".choose-machine"),
result = document.querySelector(".result");

function showChoosingNumber(){}

function submitHandle(event){
  event.preventDefault();
  if(isNaN(guessNumberInput.value)){
    guessNumberInput.value="";
  }else{
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