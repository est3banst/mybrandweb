const mobmenu = document.querySelector('.responsive-container-menu')
const iconmenu = document.querySelector('.icon-container')
const navmenu = document.querySelector('.menu-a-container');


function Toggle() {
    navmenu.hidden == true ? navmenu.hidden = false : navmenu.hidden = true;
    navmenu.style.color = "black";
    navmenu.style.zIndex = '600';
    navmenu.style.position = 'fixed';
    navmenu.style.backgroundColor = 'antiquewhite';
    navmenu.style.height = '80vh'
    navmenu.style.width = '30%'
};



