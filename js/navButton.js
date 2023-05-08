const scrollButton = document.querySelector('.scroll-button')
const svgScrollButton = document.querySelector('.svg-scroll-button')

const disappearMoment = 0.04180;

window.addEventListener('scroll', (event) => {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

    scrollButton.addEventListener('click', (event) => {
        window.scroll({
            top:0,
            behavior: "smooth",
        })
    })

    if (scrollPercentage > disappearMoment) {
        svgScrollButton.classList.add("appearButton");
        scrollButton.style.opacity = 100;
        scrollButton.style.scale = 1;
    }else {
        if(scrollPercentage < disappearMoment) {
            svgScrollButton.classList.remove("appearButton");
            scrollButton.style.opacity = 0;
            scrollButton.style.scale = 0;
        }
    }
})

