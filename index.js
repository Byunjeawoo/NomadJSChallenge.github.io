const title1 = document.querySelector(".titlemain");  
const BASE_COLOR = "rgb(53, 83, 94)";
const OTHER_COLOR = "#0f4c8d";
let count = 0;

function handleMovingOn(){
  const currentColor22 = title1.style.color;
  
  title1.innerHTML = "Mouse On";
  title1.style.color = OTHER_COLOR;
}

function handleMovingOut(){
  const currentColor33 = title1.style.color;

  title1.innerHTML = "Mouse Out"
  title1.style.color = BASE_COLOR
}



function resizefn(){
  title1.style.color = "#3f6c9d";
  title1.innerHTML = "창이 변경됩니다.";
}

function init(){
  title1.style.color = BASE_COLOR;
  //title1.addEventListener("click", handleClick);
}

function handleClick(){
    title1.style.color = "#7f9c5d";
    title1.innerHTML = "클릭ON";
}

init();

window.addEventListener("resize", resizefn);
title1.addEventListener("mouseenter", handleMovingOn);
title1.addEventListener("mouseout", handleMovingOut);
window.addEventListener("contextmenu", handleClick);