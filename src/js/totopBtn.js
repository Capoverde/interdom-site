const totop = document.getElementById('totop')

window.addEventListener('scroll', e =>{
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        totop.classList.add('showTotop')
    }else{
        totop.classList.remove('showTotop')
    }
})


totop.addEventListener('click',scrollToTop = e =>{
let position = document.body.scrollTop || document.documentElement.scrollTop;
   if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
    scrollAnimation = setTimeout("scrollToTop()", 30);
} else clearTimeout(scrollAnimation);
})