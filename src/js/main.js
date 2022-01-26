function handleMenuMobileView(){
  const menu = document.querySelector(".nav");
  const burgerBtn = document.querySelector(".header__burger");
  const body = document.body;

  function handleBurgerBtnClick(){
    if (menu.classList.contains("nav--active")){
      menu.classList.remove("nav--active");
      burgerBtn.classList.remove("header__burger--active");
      body.style.overflow = "auto";
      menu.removeEventListener("click", handleMenuLinkClick, {capture: true});
    }else{
      menu.classList.add("nav--active");
      burgerBtn.classList.add("header__burger--active");
      body.style.overflow = "hidden";
      menu.addEventListener("click", handleMenuLinkClick, {capture: true});
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

handleMenuMobileView();