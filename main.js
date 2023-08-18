const modal = document.getElementById('about-us');

function Toggle() {
    modal.style.position = 'fixed';
    modal.style.left = '10%'
    modal.style.top = '15%'
    modal.style.zIndex = '500'
    modal.style.fontSize = '1.2rem'
    modal.hidden == true ? modal.hidden = false : modal.hidden = true
};