const clockContainer = document.querySelector(".js_clock");
const clockTitle = clockContainer.querySelector("h1");

clockTitle.style.color = "#2f6c9d"

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}


init();