var css = document.querySelector("h3");
var clr1 = document.querySelector(".clr1");
var clr2 = document.querySelector(".clr2");
var body = document.getElementById("gardient");

body.style.background = "rgb(100,200,100)";
body.style.color = "white";

function setGradient() {
    body.style.background = "linear-gradient(to right," + clr1.value + "," + clr2.value + ")";  
    css.textContent = body.style.background + ";";
}



//classic metheod using Event Listener
clr1.addEventListener("input",setGradient);
//clr2.addEventListener("input",setGradient);
//can also be done with On-click

//the long version:

//clr1.addEventListener("input", function(){
//    console.log("color 1: " + clr1.value);
//    setGradient();
//})


