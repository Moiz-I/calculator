function add(no1, no2) {
  return no1 +no2;
}

function subtract(no1, no2) {
  return no1 - no2;
}

function multiply(no1, no2) {
  return no1*no2;
}

function divide(no1, no2) {
  return no1/no2;
}

function operator(operation, no1, no2) {
  return operation(no1, no2);
};

//console.log(operator([1,2],power));
console.log(operator(divide, 4, 10));