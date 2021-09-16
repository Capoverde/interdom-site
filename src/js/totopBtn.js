const totop = document.getElementById('totop')

window.addEventListener('scroll', e =>{
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        totop.classList.add('showTotop')
    }else{
        totop.classList.remove('showTotop')
    }

 
})

totop.addEventListener('click',scrollToTop = e =>{
    e.preventDefault();
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // chrome

    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
})