import Swiper, {Navigation, EffectFade} from 'swiper';

/*
Функция-обработичк события для отображения мобильного меню.
*/
function handleMenuMobileView(){
  const menu = document.querySelector(".nav");
  const burgerBtn = document.querySelector(".header__burger");
  const body = document.body;

  function handleBurgerBtnClick(){
    if (menu.classList.contains("nav--active")){
      menu.classList.remove("nav--active");
      burgerBtn.classList.remove("header__burger--active");
      body.style.overflow = "auto";
    }else{
      menu.classList.add("nav--active");
      burgerBtn.classList.add("header__burger--active");
      body.style.overflow = "hidden";
      menu.addEventListener("click", handleMenuLinkClick, {capture: true, once: true});
    }
  }
  
  function handleMenuLinkClick(e){
    const target = e.target;
    
    if (target.classList.contains("menu__link")){
      handleBurgerBtnClick();
    }
  }
  
  burgerBtn.addEventListener("click", handleBurgerBtnClick);
}

/*
  ОбЪект со свойствами для Swiper.
*/
const swiperProps = {
  speed: 400,
  spaceBetween: 100,
  loop: true,
  slidesPerView: 1,
  modules: [Navigation, EffectFade],
  navigation: {
    nextEl: '.carousel-works__button-next',
    prevEl: '.carousel-works__button-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
};

new Swiper(".carousel-works", swiperProps);
handleMenuMobileView();