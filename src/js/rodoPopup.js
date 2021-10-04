const rodoLink = document.querySelector('.rodo-link')
const rodo = document.getElementById('rodo')
const okBtn = document.getElementById("okRodoBtn");

// okBtn = false

rodoLink.addEventListener('click', function(){
    console.log('klik w rodo-link')
    rodo.classList.add('showRodo')
})

okBtn.addEventListener('click', e => {
    rodo.classList.remove('showRodo')
})

