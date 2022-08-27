let elBurger = document.querySelector(".site-header__burger")
let elNav = document.querySelector(".sitenav")
let elClose = document.querySelector(".sitenav__close")
let elbody = document.querySelector("body")

elBurger.addEventListener("click", function(){
    elNav.classList.toggle("open")
    elBurger.classList.toggle("close")

    elbody.classList.toggle("overflow")
})

