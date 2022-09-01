// operations
function add(a, b) {
  return parseInt(a) + parseInt(b)
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

let inputDisplay = document.getElementById('display')
let displayValue = ''
let operation = ''
let a = ''
let b = ''

// click on the number buttons and make them display on the screen
document.querySelectorAll('.number').forEach((button) => {
  button.addEventListener('click', (e) => {
    inputDisplay.value += e.target.value
    if (operation === '') {
      a += e.target.value
    } else {
      b += e.target.value
    }
  })
})

// get operations
document.querySelectorAll('.operationButtons').forEach((operator) => {
  operator.addEventListener('click', () => {
    //add operators
    operation = operator.value
    inputDisplay.value += operator.value
  })
})

// click on "=" and get total
document.getElementById('total').addEventListener('click', () => {
  let sum = operate(operation, a, b)
  inputDisplay.value = sum
})

// clear the display and variables
document.getElementById('clear').addEventListener('click', () => {
  inputDisplay.value = ''
  a = ''
  b = ''
  operation = ''
})
