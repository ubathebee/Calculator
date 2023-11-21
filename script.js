

let num1 = 10;
let num2 = 5;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let resultEl = document.getElementById("result-el");

function add() {
  addition = num1 + num2;
  resultEl.textContent = "Result: " + addition;
}
function subtract() {
  sub = num1 - num2;
  resultEl.textContent = "Result: " + sub;
}
function divide() {
  division = num1 / num2;
  resultEl.textContent = "Result: " + division;
}
function multiply() {
  multiplication = num1 * num2;
  resultEl.textContent = "Result: " + multiplication;
}
