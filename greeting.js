const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser", SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault();  //enter -> NO work
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  //What is the classList?
  greeting.innerText = `Hello ${text}`
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser == null){
    console.log("I cant find User")
    askForName();
  }else{
    console.log("I found it!")
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();