import Swiper from 'swiper/bundle'
// import Swiper styles
import 'swiper/swiper-bundle.css'

const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  }
})
