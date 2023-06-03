const text = document.querySelector('[data-js="title-effect"]')

const message = 'Split Text Effect'
const separatedLetters = message.split('')

const splitEffect = separatedLetters.map((letter, index) => 
text.innerHTML += `<span class="letter">${letter}</span>`)


let currentLetter = 0

const split = () => {
  if (currentLetter === separatedLetters.length) {
    clearInterval(timer)
    return
  }
  
  const span = text.querySelectorAll('span')[currentLetter]
  span.classList.add('active')   
  currentLetter++
}

const timer = setInterval(split, 30)