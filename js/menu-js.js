var mainNavElements=document.querySelectorAll(".mobile-menu"),navToggle=document.querySelector(".main-nav__toggle");function isMenuOpened(){for(var e=!0,n=0;n<mainNavElements.length;n++)e=e&&mainNavElements[n].classList.contains("mobile-menu-open");return e}function showMenu(e){if(e)for(var n=0;n<mainNavElements.length;n++)mainNavElements[n].classList.remove("mobile-menu-closed"),mainNavElements[n].classList.add("mobile-menu-open"),navToggle.classList.contains("main-nav__toggle--close"),navToggle.classList.remove("main-nav__toggle--close"),navToggle.classList.add("main-nav__toggle--open");else for(n=0;n<mainNavElements.length;n++)mainNavElements[n].classList.remove("mobile-menu-open"),mainNavElements[n].classList.add("mobile-menu-closed"),navToggle.classList.contains("main-nav__toggle--open"),navToggle.classList.remove("main-nav__toggle--open"),navToggle.classList.add("main-nav__toggle--close")}showMenu(!1),navToggle.addEventListener("click",function(){showMenu(!isMenuOpened())});