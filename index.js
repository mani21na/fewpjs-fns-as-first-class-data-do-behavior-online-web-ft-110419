/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string) {
  let message = ""
  let splitString = string.split(':')
  let time = splitString[0]
  let newTime = parseInt(time, 10)

  if (newTime < 12) {
    message = "Good Morning"
  } else if (newTime > 17) {
    message = "Good Evening"
  } else {
    message = "Good Afternoon"
  }

  return message
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const greeting = document.querySelector('h1')
  greeting.innerText = string
}
