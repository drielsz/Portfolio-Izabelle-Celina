const aElements = document.querySelectorAll("a.btn-click")
const aElement = document.querySelector(".btn-click")

aElement.addEventListener("mouseover", (event) => {
    Array.from(aElements).forEach((item) => {
        item.classList.add("hover-stroke-animation")
    })
})




const magnets = document.querySelectorAll('.magnetic');

magnets.forEach((magnet) => {

    if(window.innerWidth > 540) {
        magnet.addEventListener("mousemove", function(e) {
            const position = magnet.getBoundingClientRect();
            const x = e.pageX - window.scrollX - position.left-position.width / 2;
            const y = e.pageY - window.scrollY - position.top-position.height / 2;
    
            magnet.style.transform = "translate(" + x * 0.3 + "px, "+ y * 0.5 + "px)";
            magnet.style.transition = "all 0s linear";
            
        });

        magnet.addEventListener("mouseleave", function(e) {
            magnet.style.transition = "all 0.2s cubic-bezier(0, 0, 0.72, 0.21";
            magnet.style.transform = "translate(0px, 0px)";
            // magnet.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -12, 0, 0, 1)";
        });
    };
});