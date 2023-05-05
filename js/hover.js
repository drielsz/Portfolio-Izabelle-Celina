const aElements = document.querySelectorAll("a.hover-effect")
const aElement = document.querySelector(".hover-effect")



aElement.addEventListener("mouseover", (event) => {
    Array.from(aElements).forEach((item) => {
        item.classList.add("hover-stroke-animation")
    })
   
})
