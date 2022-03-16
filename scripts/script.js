// NAVIGATION

const primaryNav = document.getElementById('primary-navigation');
const primaryNavLinks = document.querySelectorAll('.primary-navigation a')
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

console.log(primaryNavLinks)

mobileNavToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('primary-nav-active');
    mobileNavToggle.classList.toggle('mobile-nav-active');
})

// DESTINATION

const planetsImgs = document.querySelectorAll("[data-planetImg]");
const planetsLinks = document.querySelectorAll("[data-destination]");
const planetsArticles = document.querySelectorAll("[data-article]")

planetsLinks.forEach(link => link.addEventListener("click", () => {
    //remove all active classes
    planetsLinks.forEach(link => link.classList.remove("active"));
    //add active to clicked link
    link.classList.add("active");
    
    planetsImgs.forEach(planet => setPlanetImage(planet, link));
    planetsArticles.forEach(article => setArticleAndActiveLink(article, link));
}))

function setPlanetImage(planet, link) {
    if (planet.dataset.planetimg === link.dataset.destination)
        planet.classList.add("active-img")
    else 
        planet.classList.remove("active-img")
}

function setArticleAndActiveLink(article, link) {
    if (article.dataset.article === link.dataset.destination) {
        article.hidden = false;
        
    }
        
    else {
        article.hidden = true;
    }
        
}