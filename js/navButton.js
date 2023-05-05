const scrollButton = document.querySelector('.scroll-button')

console.log(scrollButton)

window.addEventListener('scroll', (event) => {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    if (scrollPercentage > 0.041807432432432436) {
       scrollButton.style.opacity = 100
    }
    else {
        scrollButton.style.display = 0
    }
}) 

scrollButton.addEventListener('click', (event) => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})

