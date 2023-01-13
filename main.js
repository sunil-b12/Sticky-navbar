const navWrapper = document.querySelector(".nav-wrapper")
const hero = document.querySelector(".hero")


/* Setting the rootMargin to -750px 0px 750px 0px. */
const scrollOptions = {
    rootMargin: "-750px 0px 750px 0px"
}

/* Creating a new IntersectionObserver object. */
const scrollOnObserver = new IntersectionObserver(function(
    entries,
    scrollOnObserver
){
    /* Checking to see if the hero element is intersecting with the viewport. If it is not, then the
    nav-scrolled class will be added to the nav-wrapper. If it is, then the nav-scrolled class will
    be removed from the nav-wrapper. */
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            navWrapper.classList.add("nav-scrolled")
        } else {
            navWrapper.classList.remove("nav-scrolled")
        }
    })

},scrollOptions)

/* Observing the hero element. */
scrollOnObserver.observe(hero)

const priamryNav = document.querySelector(".primary-navigation")
const hamburger = document.querySelector(".hamburger")

/* Adding an event listener to the hamburger icon. When the hamburger icon is clicked, the primary
navigation will toggle the class of open. */
hamburger.addEventListener('click', ()=>{
    priamryNav.classList.toggle("open")
})
