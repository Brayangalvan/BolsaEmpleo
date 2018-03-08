icono = document.getElementById("icon");
menu = document.getElementById("menuresponsive");

icono.addEventListener("click",esconder);

function esconder() {

 var clase = menu.className;
 
 if (clase == "invisible"){
     menu.classList.remove("invisible");
     menu.classList.add("visible");
     icono.classList.add("activo");
 }
 else
 {
    menu.classList.remove("visible");
    menu.classList.add("invisible");
    icono.classList.remove("activo"); 
 }
}