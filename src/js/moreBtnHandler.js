const moreBtn = document.querySelectorAll('.more--offer')
const art = Array.from(document.querySelectorAll('.article--contentBox'))
// console.log(art)
const artList = Array.from(document.querySelectorAll('.article--contentBox > ul'))
// console.log(artList)



let clicked = false;

for (const btn of moreBtn) {
  btn.addEventListener('click', e => {
    artList.forEach(el => el.classList.toggle('showList'))
    if(!clicked){
      moreBtn.forEach(e=>e.innerHTML = 'zwiń')
      clicked = true;
    }else{
      moreBtn.forEach(e=>e.innerHTML = 'czytaj więcej')
    }
   
  })
}
