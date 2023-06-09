let path = document.querySelectorAll('path')

Array.from(path).forEach((items) => {
    let pathLength = items.getTotalLength()
    items.style.strokeDasharray = pathLength + ' ' + pathLength

    items.style.strokeDashoffset = pathLength
    window.addEventListener('scroll', (event) => {
        var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
        // Tamanho do path * scroll %, scroll % max é 1. se scroll no max = tamanho máximo do path.
        var drawLength = pathLength * scrollPercentage 
        // Velocidade que é feito, modificar a multiplicação para diminuir ou aumentar.
        items.style.strokeDashoffset = pathLength - drawLength * 5
    
    })
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hiddensection');
hiddenElements.forEach((el) => observer.observe(el));