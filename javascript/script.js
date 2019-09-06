const burgerMenu = document.querySelectorAll('.navburger')


// Funkcja chowająca navbar pod warunkiem scrolla w range'u 910-980px od góry strony.
window.addEventListener('scroll', function () {
    const burgerIcon = document.querySelector('.navburger')
    let scrollY = window.scrollY;
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

let iswrapDownToggled = false;
const displayDiv = document.querySelector('.wrapDown')
const buttonWhen = document.querySelector('.btnWhen')
const buttonPrice = document.querySelector('.btnPrice')
const calendar = document.querySelector('.calendar')
const calendarTable = document.querySelector('.calendarTable')

buttonWhen.addEventListener('click', () => {
    if (!iswrapDownToggled) {
        displayDiv.style.height = "60vh"
        iswrapDownToggled = !iswrapDownToggled
    } else {
        displayDiv.style.height = "0vh"
        iswrapDownToggled = !iswrapDownToggled
    }
})

buttonPrice.addEventListener('click', () => {
    if (!iswrapDownToggled) {
        displayDiv.style.height = "60vh"
        iswrapDownToggled = !iswrapDownToggled
    } else {
        displayDiv.style.height = "0vh"
        iswrapDownToggled = !iswrapDownToggled
    }
})