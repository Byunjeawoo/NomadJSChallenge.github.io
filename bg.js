const body = document.querySelector("body");
const IMG_NUMBER = 3;

function handleImgLoad(){
  console.log("finished loading");
}

function paintImage(imgNumber){
  const image = new Image();
  image.src = `/Images/${imgNumber + 1}.PNG`;
  image.classList.add('bgImage');
  body.prepend(image);
  //image.addEventListener("loaded");
}

function genRandom(){
  const number = Math.floor(Math.random() * 3);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber) 
}

init();