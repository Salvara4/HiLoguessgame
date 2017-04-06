
var secretNum = Math.floor(Math.random() * 100) + 1;
console.log(secretNum);
var count = 6;
function addButton() {
  var addBtn = document.querySelector("#button")
  var Btn = document.createElement("Input")
  Btn.type = "button"
  Btn.value = "Reset"
  Btn.addEventListener("click", reset)
  addBtn.appendChild(Btn)
}
function reset() {
  secretNum = Math.floor(Math.random() * 100) + 1;
  console.log(secretNum);
  count = 6;
  document.getElementById("status").innerHTML = "";
}

var playHiLo = function(){

  var guess = parseInt(document.getElementById("guessInput").value)

      guess = parseInt(document.getElementById("guessInput").value);
      if (guess < secretNum){
        document.getElementById("status").innerHTML = "Too low!";
      }
      if (guess > secretNum){
        document.getElementById("status").innerHTML = "Too high!";
      }
      if (count >= 0 && guess == secretNum){
        document.getElementById("status").innerHTML = "You win! The secret number was " + secretNum + ".";
      }
      if (count <= 0 && guess !== secretNum) {
        document.getElementById("status").innerHTML = "You lose! The secret number was " + secretNum + ".";
      }
      count = count - 1;
      if (count <= 0) {
        addButton()
      }
    }
