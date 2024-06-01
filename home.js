
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var navbar = document.getElementById("navbar");
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollPosition >= 80) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.55)"; 
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0)"; 
    }
}

function clickFunction(){
    alert("Working") ; 
}