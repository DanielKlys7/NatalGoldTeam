const burgerMenu = document.querySelectorAll('.navburger')
const burgerIcon = document.querySelector('.navburger')

// Funkcja chowająca navbar pod warunkiem scrolla w range'u 910-980px od góry strony.
window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    if ((910 < scrollY && scrollY < 980) && (!burgerIcon.classList.contains('active'))) {
        for (i = 0; i < burgerMenu.length; i++) {
            burgerMenu[i].classList.toggle('active');
        }
        console.log('triggered!')
    }
})
// Navbar i fontawesome
document.addEventListener('click', function () {
    if (!event.target.classList.contains('navburger')) return;
    else {
        for (i = 0; i < burgerMenu.length; i++) {
            burgerMenu[i].classList.toggle('active');
        }
    }
})