"use strict";

const firstNumberElement = document.getElementById("first-number");
const secondNumberElement = document.getElementById("second-number");
const operatorElement = document.getElementById("operator");
const button = document.getElementById("button");
const resultElementArea = document.getElementById("result");

firstNumberElement.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "0") {
    resultElementArea.innerText = `0 can not be the first number.`;
    firstNumberElement.value = "";
    return;
  }
});

const calculate = function (firstNumber, secondNumber) {
  let result;

  firstNumber = Number(firstNumberElement.value);
  secondNumber = Number(secondNumberElement.value);
  const operator = operatorElement.value;

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    resultElementArea.innerText = `Please enter a valid number`;
    firstNumberElement.value = "";
    return;
  }
  if (firstNumber === 0) {
    resultElementArea.innerText = `Please enter a valid number`;
    firstNumberElement.value = "";
    secondNumberElement.value = "";
    return;
  }

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) {
        resultElementArea.innerText = "Division bei 0 is not allowed";
        return;
      } else {
        result = firstNumber / secondNumber;
      }
      break;
    default:
      resultElementArea.innerText = `Invalid operator`;
  }

  // //If else statements

  // if (operator === "+") result = firstNumber + secondNumber;
  // else if (operator === "-") result = firstNumber - secondNumber;
  // else if (operator === "*") result = firstNumber * secondNumber;
  // else if (operator === "/") {
  //   if (secondNumber === 0) {
  //     resultElementArea.innerText = "Division bei 0 is not allowed";
  //     return;
  //   } else {
  //     result = firstNumber / secondNumber;
  //   }
  // }
  resultElementArea.innerText = `Result: ${result}`;
  firstNumberElement.value = "";
  secondNumberElement.value = "";
};

button.addEventListener("click", calculate);

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    calculate();
  }
});
