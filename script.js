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
  // if somebody divides by 0, return error
  if (b === '0') {
    return 'ERROR'
  } else {
    return a / b
  }
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

let inputDisplay = document.getElementById('displayInput')
let outputDisplay = document.getElementById('displayOutput')
let total = ''
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
    inputDisplay.value += operator.value
    if (a !== '' && b !== '') {
      total = operate(operation, a, b)
      outputDisplay.value = total
      a = total
      b = ''
    }
    operation = operator.value
  })
})

// click on "=" and get total
document.getElementById('total').addEventListener('click', () => {
  // if there are numbers or operators missing, display massage
  if (a === '' || b === '' || operation === '') {
    outputDisplay.value = 'Values missing'
  } else {
    total = operate(operation, a, b)
    outputDisplay.value = total
  }
})

// clear the display and variables
document.getElementById('clear').addEventListener('click', () => {
  inputDisplay.value = ''
  outputDisplay.value = ''
  a = ''
  b = ''
  operation = ''
})
