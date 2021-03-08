const moreBtn = document.querySelectorAll('.more--offer')
const art = Array.from(document.querySelectorAll('.article--contentBox'))
console.log(art)
const artList = Array.from(document.querySelectorAll('.article--contentBox > ul'))
console.log(artList)

for (const btn of moreBtn) {
  btn.addEventListener('click', e => {
    artList.forEach(el => el.classList.toggle('showList'))

    console.log(e.target)
    console.log(art)
    console.log(artList)
  })
}
