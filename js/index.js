const body = document.body
const menuButton = document.querySelector(".menu-trigger")
const menuIcon = document.querySelector(".menu-icon")

const blurElement = document.getElementById("blur-overlay")
const headerElement = document.querySelector("header")
const mainElement = document.querySelector("main")
const branding = document.querySelector(".branding")
const navLinks = document.querySelector(".nav-links")

const divulgImg = document.querySelector(".divulg-img")
const overlayImg = document.querySelector(".overlay")


window.addEventListener("load", (event) => {
    overlayImg.style.height = `${divulgImg.clientHeight}px`
    overlayImg.style.width = `${divulgImg.clientWidth}px`
})

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    menuIcon.classList.toggle('change')
    mainElement.classList.toggle('prevent-scroll')
    blurElement.classList.toggle('hidden')
    console.log("ok")
})


window.addEventListener("resize", function () {
    console.log(`Height: ${divulgImg.clientHeight}`)
    console.log(`Width: ${divulgImg.clientWidth}`)
    if(window.innerWidth < 696) {
        overlayImg.style.height = `${divulgImg.clientHeight}px`
        overlayImg.style.width = `${divulgImg.clientWidth}px`
    }
    else {
        overlayImg.style.height = `${divulgImg.clientHeight}px`
        overlayImg.style.width = `${divulgImg.clientWidth}px`
    }
    console.log(overlayImg.clientHeight)
})

window.addEventListener("resize", function( ) {
    if(window.innerWidth > 920) {
        navLinks.classList.remove('mobile-menu')
        menuIcon.classList.remove('change')
        mainElement.classList.remove('prevent-scroll')
        blurElement.classList.add("hidden")
    }
})
