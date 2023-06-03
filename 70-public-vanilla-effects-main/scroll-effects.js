const body = document.body
const introSection = document.querySelector('.intro-section')
const boxEl = document.querySelector('.box')

const clientHeight = document.documentElement.clientHeight

const introSectionOffSetTop = introSection.offsetTop - (clientHeight / 2)
const boxElOffSetTop = boxEl.offsetTop - (clientHeight)

const changeBackground = currentScroll => {
  sectionInterception = currentScroll > introSectionOffSetTop

  sectionInterception
    ? body.style.background = '#000' 
    : body.style.background = '#fff'
}

const increaseBoxSize = currentScroll => {
  const boxElWidth = 100
  const boxElHeight = 100

 if (currentScroll > boxElOffSetTop) {
    boxEl.style.width = `${boxElWidth + (currentScroll - boxElOffSetTop) * 2}px`
    boxEl.style.height = `${boxElHeight + (currentScroll - boxElOffSetTop)}px`
  }
}

window.addEventListener('scroll', e => {
  const currentScroll = document.documentElement.scrollTop

  changeBackground(currentScroll)
  increaseBoxSize(currentScroll)
})
