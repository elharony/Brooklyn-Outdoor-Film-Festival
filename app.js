const navbar = document.querySelector(".navbar")
const aboutSection = document.querySelector(".about")
let yPos

console.log(aboutSection.offsetTop)

window.addEventListener('scroll', function(e) {
    yPos = window.scrollY
  
    if(yPos > (aboutSection.offsetTop - 50)) {
        navbar.classList.add("sticky-top")
    } else {
        navbar.classList.remove("sticky-top")
    }
});