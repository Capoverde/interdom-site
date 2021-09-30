const rodoLink = document.querySelector('.rodo-link')
const rodo = document.getElementById('rodo')
const span = document.getElementsByClassName("close")[0];


rodoLink.addEventListener('click', function(){
    console.log('klik w rodo-link')
    rodo.style.dispaly = 'block'
})

span.addEventListener('click', e => {
    rodo.style.display = 'none'
})