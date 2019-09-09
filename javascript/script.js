const burgerMenu = document.querySelectorAll('.navburger')
const navOption = document.querySelectorAll('.navOption')


// Funkcja chowająca navbar pod warunkiem scrolla w range'u 910-980px od góry strony.
window.addEventListener('scroll', function () {
    const burgerIcon = document.querySelector('.navburger')
    let scrollY = window.scrollY;
    if ((910 < scrollY && scrollY < 980) && (!burgerIcon.classList.contains('active'))) {
        for (i = 0; i < burgerMenu.length; i++) {
            burgerMenu[i].classList.toggle('active');
        }
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

navOption.forEach((single) => {
    single.addEventListener('click', function () {
        for (i = 0; i < burgerMenu.length; i++) {
            burgerMenu[i].classList.toggle('active');
        }
    })
})

let iswrapDownToggled = false;
const displayDiv = document.querySelector('.wrapDown')
const buttonWhen = document.querySelector('.btnWhen')
const buttonPrice = document.querySelector('.btnPrice')
const calendarTable = document.querySelector('.calendarTable')
const priceDisplay = document.querySelector('.price')

buttonWhen.addEventListener('click', () => {
    priceDisplay.style.display = "none"
    calendarTable.style.display = "block"
    if (!iswrapDownToggled) {
        displayDiv.classList.add("wrapedDown")
        iswrapDownToggled = !iswrapDownToggled
    } else {
        displayDiv.classList.remove("wrapedDown")
        iswrapDownToggled = !iswrapDownToggled
    }
})

buttonPrice.addEventListener('click', () => {
    calendarTable.style.display = "none"
    priceDisplay.style.display = "block"
    if (!iswrapDownToggled) {
        displayDiv.classList.add("wrapedDown")
        iswrapDownToggled = !iswrapDownToggled
    } else {
        displayDiv.classList.remove("wrapedDown")
        iswrapDownToggled = !iswrapDownToggled
    }
})