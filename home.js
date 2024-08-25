
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

const card = document.querySelector(".card") ; 
function cardHoverStart(){
    card.classList.add("card-hover") ; 
}
function cardHoverEnd(){
    card.classList.remove("card-hover") ; 
}

const cardB = document.querySelector(".card")[1] ; 
function cardHoverStartB(){
    card.classList.add("card-hover") ; 
}
function cardHoverEndB(){
    card.classList.remove("card-hover") ; 
}

