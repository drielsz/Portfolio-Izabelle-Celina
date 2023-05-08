const body = document.body
const menuButton = document.querySelector(".menu-trigger")
const menuIcon = document.querySelector(".menu-icon")

const blurElement = document.getElementById("blur-overlay")
const headerElement = document.querySelector("header")
const mainElement = document.querySelector("main")
const branding = document.querySelector(".branding")
const navLinks = document.querySelector(".nav-links")

const divulgImg = document.querySelector(".divulg-img")

const overlayImg = document.querySelectorAll("div.overlay")


menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    menuIcon.classList.toggle('change')
    mainElement.classList.toggle('prevent-scroll')
    blurElement.classList.toggle('hidden')
})


window.addEventListener("resize", function () {

    if(window.innerWidth < 696) {
        Array.from(overlayImg).forEach((item) => {
            item.style.height = `${divulgImg.clientHeight}px`
            item.style.width = `${divulgImg.clientWidth}px`
        })
    }
    else {
        Array.from(overlayImg).forEach((item) => {
            item.style.height = `${divulgImg.clientHeight}px`
            item.style.width = `${divulgImg.clientWidth}px`
        })
    }
})

window.addEventListener("resize", function( ) {
    if(window.innerWidth > 920) {
        navLinks.classList.remove('mobile-menu')
        menuIcon.classList.remove('change')
        mainElement.classList.remove('prevent-scroll')
        blurElement.classList.add("hidden")
    }
})