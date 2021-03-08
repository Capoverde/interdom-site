const myNav = document.querySelector('.page__nav')
console.log(myNav)

window.addEventListener('scroll', e => {
  e.preventDefault();
  (document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100)
    ? myNav.classList.add('nav-colored') : myNav.classList.remove('nav-colored')
})

// hamburger & nav toggling:
const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    myNav.classList.add('open')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    myNav.classList.remove('open')
    menuOpen = false
  }
})

// Smooth Scroll:

const links = document.querySelectorAll('.page-link')
const navbar = document.querySelector('.page__nav')
const x = window.matchMedia('(max-width: 990px)')

for (const link of links) {
  link.addEventListener('click', clickHandler)
}

for (const link of links) {
  link.addEventListener('click', clickHandler)
}

function clickHandler(e) {
  console.log('klik')
  e.preventDefault()
  const href = this.getAttribute('href')
  const offsetTop = document.querySelector(href).offsetTop - navbar.clientHeight
  myNav.classList.remove('open')
   menuBtn.classList.remove('open')

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  })
}

// console.log(myNav.clientHeight)
