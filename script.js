let menu = document.querySelector("nav ul");
let button = document.querySelector("#menu-btn");
let icon = document.querySelector("#icon");
button.onclick = function(){
    menu.classList.toggle('active');
    icon.classList.toggle("fa-xmark");
}
document.body.onscroll= function(){
    menu.classList.remove('active');
    icon.classList.remove("fa-xmark");
}