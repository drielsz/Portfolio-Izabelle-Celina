const scrollButton = document.querySelector('.scroll-button')

const disappearMoment = 0.04180

window.addEventListener('scroll', (event) => {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    if (scrollPercentage > disappearMoment) {
       scrollButton.style.opacity = 100;
    }
    if (scrollPercentage < disappearMoment) {
        scrollButton.style.opacity = 0;
    }
    console.log(scrollPercentage)
}) 

scrollButton.addEventListener('click', (event) => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})

