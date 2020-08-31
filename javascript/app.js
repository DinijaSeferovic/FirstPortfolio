$(document).ready(function(){

const bars=document.querySelectorAll('.progress-bar');

bars.forEach(function(bar){
    let percentage= bar.dataset.percent;
    let tooltip= bar.children[0];
    tooltip.innerText=percentage+'%';
    bar.style.width= percentage+'%';
    console.log(percentage);
})

window.addEventListener("load", function () {
      setTimeout(function(){
      const loader = document.querySelector(".loader");
      loader.className += " hidden"; // class "loader hidden"
      const loader_bg = document.querySelector(".loader_bg");
      loader_bg.className += " hidden"; // class "loader_bg hidden"
      }, 700);

})

});


