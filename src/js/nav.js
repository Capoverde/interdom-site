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
