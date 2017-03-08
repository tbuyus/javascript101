var waitElement = document.getElementById('wait')
var dots = 0
var interval = 500

setInterval(renderLoadingDots, interval)

function renderLoadingDots() {
  if (dots < 3) {
    waitElement.innerHTML += '.'
    dots++
  } else {
    waitElement.innerHTML = ''
    dots = 0
  }
}
console.log('Yo')
