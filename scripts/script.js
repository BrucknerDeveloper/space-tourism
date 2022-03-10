// NAVIGATION

const primaryNav = document.getElementById('primary-navigation');
const primaryNavLinks = document.querySelectorAll('.primary-navigation a')
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

console.log(primaryNavLinks)

mobileNavToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('primary-nav-active');
    mobileNavToggle.classList.toggle('mobile-nav-active');
})
