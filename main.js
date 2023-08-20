const modal = document.getElementById('about-us');
const usbut = document.getElementById('us-button');

const navmenu = document.querySelector('.nav-menu');


function Toggle() {
    modal.style.position = 'fixed';
    modal.style.left = '10%';
    modal.style.top = '15%';
    modal.style.zIndex = '500';
    
    usbut.style.opacity = '.3'
    
    modal.hidden == true ? modal.hidden = false : modal.hidden = true;
    
};
function exitModal() {
    modal.hidden = true;
    usbut.style.opacity = '1'
}



