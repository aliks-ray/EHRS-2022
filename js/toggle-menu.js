var openBtn = document.querySelector(".main-menu__toggle");
var closeBtn = document.querySelector(".main-menu__toggle-close");
var menu = document.querySelector(".main-menu__list");
var desktopRegBtn = document.querySelector(".main-menu__item--registration");
var dropdownItems = document.querySelectorAll(".main-menu__dropdown");
var dropdownLinks = document.querySelectorAll(".main-menu__link");
var dropdownContent = document.querySelectorAll(".main-menu__sublist");

if( document.documentElement.clientWidth < 1024 ){
    openBtn.addEventListener("click", function (evt) {
        evt.preventDefault();
        menu.classList.add("main-menu__list-active");
        openBtn.classList.add("visually-hidden");
        closeBtn.classList.remove("visually-hidden");
        desktopRegBtn.classList.add("visually-hidden");
      });
    
      closeBtn.addEventListener("click", function (evt) {
        evt.preventDefault();
        menu.classList.remove("main-menu__list-active");
        openBtn.classList.remove("visually-hidden");
        closeBtn.classList.add("visually-hidden");
        desktopRegBtn.classList.remove("visually-hidden");
    });
    
    
    
    dropdownItems.forEach(item => {
        item.addEventListener("click", function (evt) {
            evt.preventDefault();
            item.classList.toggle("main-menu__item--active");
            
            dropdownLinks.forEach(link => {
                if (link === item.firstElementChild) {
                    link.classList.toggle("main-menu__link-active");
                }
            });
    
            dropdownContent.forEach(content => {
                if (content === item.lastElementChild) {
                    content.classList.toggle("main-menu__sublist-active");
                }
            });
    
          });
    });
}