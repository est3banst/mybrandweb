const mobmenu = document.querySelector('.responsive-container-menu');
const iconmenu = document.querySelector('.icon-container');
const navmenu = document.querySelector('.menu-a-container');
const button = document.querySelector('.send-form');

function setStyle() {
    navmenu.style.color = "black";
    navmenu.style.zIndex = '600';
    navmenu.style.position = 'fixed';
    iconmenu.style.position = 'fixed';
    navmenu.style.backgroundColor = 'antiquewhite';
    navmenu.style.height = '80vh'
    navmenu.style.width = 'maxContent'
    navmenu.style.top = '5%'
    navmenu.style.left = '0'
}

function Toggle() {
    navmenu.hidden == true ? navmenu.hidden = false : navmenu.hidden = true;
    setStyle();
};

const scr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true,
})

scr.reveal('.middle-page-section',{delay: 100});
scr.reveal('.first-article',{delay: 90});
scr.reveal('.second-article', {delay:70});
scr.reveal('.third-article',{delay:50});
scr.reveal('.us-container',{delay: 80});
scr.reveal('.carousel.slide',{delay:90});
scr.reveal('.we-do-container',{delay:100});
scr.reveal('.social-media',{delay:80});




