var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 3;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 3;
  currentNumberWrapper.innerHTML = currentNumber;
}