/*=============== MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/* Show Menu  */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/* Hide Menu */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //Add a class if the button offset is greater than 50 of the v
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__container', 1.5, {opacity: 0, y: 150, delay: .1})
gsap.from('.home__data', 1.8, {opacity: 0, x: 100, delay: .2})
//gsap.from('.home__buttons', 1.8, {opacity: 0, y: 100, delay: .1})
