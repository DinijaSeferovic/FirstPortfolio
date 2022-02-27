$(document).ready(function(){

const bars=document.querySelectorAll('.progress-bar');

bars.forEach(function(bar){
    let percentage= bar.dataset.percent;
    bar.style.width= percentage+'%';
})

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
    const loader_bg = document.querySelector(".loader_bg");
    loader_bg.className += " hidden"; // class "loader_bg hidden"

});

const menu = document.querySelector(".menu");
const times = document.querySelector(".times");
const mobileNav = document.querySelector(".mobile-nav");

menu.addEventListener("click", function () {
    mobileNav.classList.add("open");
});

times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
});


});


