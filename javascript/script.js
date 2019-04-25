const burgerMenu = document.querySelectorAll('.navburger')
const burgerIcon = document.querySelector('.navburger')


window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    console.log(scrollY);
    if ((930 < scrollY && scrollY < 960) && (!burgerIcon.classList.contains('active'))) {
        for (i = 0; i < burgerMenu.length; i++) {
            burgerMenu[i].classList.toggle('active');
        }
        console.log('triggered!')
    }
})

document.addEventListener('click', function () {
    if (!event.target.classList.contains('navburger')) return;
    else {
        for (i = 0; i < burgerMenu.length; i++) {
            burgerMenu[i].classList.toggle('active');
        }
    }
})

// document.addEventListener('scroll', function () {
//     if ((scrollY == 500) && (burgerIcon.classList.contains('active'))) {
//         for (i = 0; i < burgerMenu.length; i++) {
//             burgerMenu[i].classList.toggle('active');
//         }
//     }
// })