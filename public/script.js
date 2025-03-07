const theNav = document.querySelector('.navbar');
const totalHeight = 100;

window.addEventListener("scroll", function() {
    if (window.scrollY >= totalHeight) {
        theNav.style.position = "sticky";
        theNav.style.top = "0";
        theNav.style.background = "FFF5F5";
    } 
    else {
        theNav.style.background = "#FFF5F5";
        theNav.style.position = "relative";
    }
});