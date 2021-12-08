const numbers = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
let result = document.getElementsByClassName("result");
const clear = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const equals = document.getElementById("equals")
let operation = document.getElementsByClassName("operation");
let operator = document.getElementById("operator");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let ansGiven = false

display = ""


clear.addEventListener("click", () => clearDisplay());
deleteBtn.addEventListener("click", () => deleting());

function deleting() {
  display = display.slice(0, -1);
  result[0].textContent=display;
}

console.log(numbers);
numbers.forEach((number) =>
  number.addEventListener('click', () => appendNumber(number))
)

operatorBtn.forEach((operator) =>
  operator.addEventListener('click', () => operatorUpdate(operator))
)

function clearDisplay() {
  result[0].textContent="";
  display="";
}

function operatorUpdate(operatorClicked) {
  if (num1.textContent==="0" || ansGiven===true) {
    num1.textContent=result[0].textContent;
    ansGiven=false
  } else if (num2.textContent==="0") {
    num2.textContent=result[0].textContent;
  }

  operator.textContent=operatorClicked.textContent;
  display="";
}

function appendNumber(number) {
  display+=(number.textContent);
  result[0].textContent=display;
}

console.log(equals);
equals.addEventListener('click', () => evaluate());

function evaluate() {
  num2.textContent=result[0].textContent;
  ans = operate(operator.textContent, Number(num1.textContent), Number(num2.textContent));
  console.log(num1.textContent+num2.textContent);
  clearDisplay();
  display+=(ans);
  result[0].textContent=display;
  ansGiven=true
}

function add(num1, num2) {
  return num1 +num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1*num2;
}

function divide(num1, num2) {
  return num1/num2;
}

function operate(operator, num1, num2) {
  if(operator==="/" && num2===0) {
    alert("lol");
    
  }
  
  switch(operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
};

//console.log(operator([1,2],power));
console.log(operate(divide, 4, 10));



console.log(operate("+", 1, 2));