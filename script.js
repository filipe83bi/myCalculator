"use strict";

const firstNumberInput = document.getElementById("first-number");
const secondNumberInput = document.getElementById("second-number");
const operatorInput = document.getElementById("operator");
const button = document.getElementById("button");
const resultInputArea = document.getElementById("result");

const calculate = function (firstNumber, secondNumber) {
  let result;

  firstNumber = Number(firstNumberInput.value);
  secondNumber = Number(secondNumberInput.value);
  const operator = operatorInput.value;

  if(!operator) return;
  if (operator === "+") result = firstNumber + secondNumber;
  if (operator === "-") result = firstNumber - secondNumber;
  if (operator === "*") result = firstNumber * secondNumber;
  if (operator === "/") result = firstNumber / secondNumber;

  resultInputArea.innerText = "Result: " + result;
};

button.addEventListener("click", calculate);
