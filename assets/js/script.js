// Input MaxLength Project
// **************************


// Dom Elements Selection
let inputElem = document.getElementById('inputId')
let spanElem = document.querySelector('.counter')


// Function for Input keydown Event
function inpHandler(event) {
  if (event.key === 'Backspace') {
    if (spanElem.innerText < 19) {
      spanElem.innerText = +spanElem.innerText + 1
    }
  } else if (event.key === 'Enter' || event.key === 'Shift' || event.key === 'Control' || event.key === 'Alt') {
    // Nothing to do
  }
  else {
    if (spanElem.innerText > 0) {
      spanElem.innerText -= 1
    }
    else {
      inputElem.removeEventListener('keydown', inpHandler)
    }
  }
}