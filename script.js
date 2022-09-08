// operations
function add(a, b) {
  return parseFloat(a) + parseFloat(b)
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

    decimal.disabled = false
    if (a !== '' && b !== '') {
      total = operate(operation, a, b)
      inputDisplay.value = total
      inputDisplay.value += operator.value
      outputDisplay.value = total
      a = total
      b = ''
    }

    operation = operator.value
  })
})

//add decimal numbers and disable if user wants to add more
let decimal = document.getElementById('decimal')
decimal.addEventListener('click', decimalButton)

function decimalButton() {
  if (a.toString().indexOf('.') === -1 && operation == '') {
    a += '.'
    inputDisplay.value += '.'
  } else if (operation !== '' && !b.includes('.')) {
    b += '.'
    inputDisplay.value += '.'
  } else {
    decimal.disabled = true
  }
}

// click on "=" and get total
document.getElementById('total').addEventListener('click', () => {
  // if there are numbers or operators missing, display massage
  if (a === '' || b === '' || operation === '') {
    outputDisplay.value = 'Values missing'
  } else {
    total = operate(operation, a, b)
    inputDisplay.value += '='
    outputDisplay.value = total
  }
})

//delete one by one
let backspaceButton = document.getElementById('backspace')
backspaceButton.addEventListener('click', () => {
  inputDisplay.value = inputDisplay.value.slice(0, -1)
})

// clear the display and variables
document.getElementById('clear').addEventListener('click', () => {
  inputDisplay.value = ''
  outputDisplay.value = ''
  a = ''
  b = ''
  operation = ''
  total = ''
  decimal.disabled = false
})

// // percentage
document.getElementById('percent').addEventListener('click', () => {
  inputDisplay.value += '%'
  //if there is no number yet, display error
  if (a === '') {
    outputDisplay.value = 'Error'
  } else if (a !== '' && operation === '') {
    a = a / 100
    inputDisplay.value = a
  } else if (operation !== '' && b !== '' && !inputDisplay.value.includes('=')) {
    b = b / 100
    inputDisplay.value = `${a} + ${b}`
  } else {
    inputDisplay.value = total
    inputDisplay.value += '%'
    total = total / 100
    outputDisplay.value = total
  }
})

//keyboard support

window.addEventListener('keydown', function (e) {
  let button = document.querySelector(`input[data-key="${e.key}"]`)

  if (!button) return // stop the function from running
  console.log(button)
  button.click()
})
