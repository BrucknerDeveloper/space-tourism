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
const planetsArticles = document.querySelectorAll("[data-articleDestination]")

planetsLinks.forEach(link => link.addEventListener("click", () => {
    //remove all active classes
    planetsLinks.forEach(link => link.classList.remove("active"));
    //add active to clicked link
    link.classList.add("active");
    
    planetsImgs.forEach(planet => setPlanetImage(planet, link));
    planetsArticles.forEach(article => setArticleAndActiveLinkDestination(article, link));
}))

function setPlanetImage(planet, link) {
    if (planet.dataset.planetimg === link.dataset.destination)
        planet.classList.add("active-img")       
    else 
        planet.classList.remove("active-img")
}

function setArticleAndActiveLinkDestination(article, link) {
    if (article.dataset.articledestination === link.dataset.destination) {
        article.hidden = false;      
    } else {
        article.hidden = true;
    }
        
}

// CREW

const crewImgs = document.querySelectorAll("[data-crewImg]");
const crewLinks = document.querySelectorAll("[data-crewNav]");
const crewArticles = document.querySelectorAll("[data-articleCrew]")

crewLinks.forEach(link => link.addEventListener("click", () => {
    //remove all active classes
    crewLinks.forEach(link => link.classList.remove("active"));
    //add active to clicked link
    link.classList.add("active");
    
    crewImgs.forEach(member => setCrewImage(member, link));
    crewArticles.forEach(article => setArticleAndActiveLinkCrew(article, link));
}))

function setCrewImage(member, link) {
    if (member.dataset.crewimg === link.dataset.crewnav)
        member.classList.add("active-img")
    else 
        member.classList.remove("active-img")
}

function setArticleAndActiveLinkCrew(article, link) {
    if (article.dataset.articlecrew === link.dataset.crewnav)
        article.hidden = false;
    else
        article.hidden = true;    
}

// TECHNOLOGY

const techImgs = document.querySelectorAll("[data-techImg]");
const techLinks = document.querySelectorAll("[data-techNav]");
const techArticles = document.querySelectorAll("[data-techCrew]")

console.log(techLinks)

document.addEventListener("DOMContentLoaded", setTechImgs());

window.addEventListener("resize", () => {
    setTechImgs();
})

function setTechImgs() {
    if(window.innerWidth <= 800) {
        techImgs.forEach(img => {
            img.src = `../assets/technology/image-${img.dataset.techimg}-landscape.jpg`
        })
    }
    else {
        techImgs.forEach(img => {
            img.src = `../assets/technology/image-${img.dataset.techimg}-portrait.jpg`
        })
    }
}