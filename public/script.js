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


const respNav = document.getElementById('menuicon');
const displayNav = document.getElementById('navul');
const undisplayNav =document.getElementById('nav-header')


respNav.addEventListener("click", function(){
        displayNav.style.display = "flex";
});

undisplayNav.addEventListener("click", function(){
    displayNav.style.display = "none";
});