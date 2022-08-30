// operations

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

// function that calls operations

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return subtract(a, b)
    case '*':
      return multiply(a, b)
    case '/':
      return divide(a, b)
  }
}

// click on the number buttons and make them display on the screen

let buttonNumbers = document.querySelectorAll('.number')
let inputDisplay = document.getElementById('display')
let storingValues = []

buttonNumbers.forEach(function (button) {
  button.addEventListener('click', (e) => {
    inputDisplay.value += e.target.value
  })
})

storingValues.push(inputDisplay.value)
