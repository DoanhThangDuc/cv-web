const menuBtn = document.querySelector('.mobie .menuBtn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen)  {   //true
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});