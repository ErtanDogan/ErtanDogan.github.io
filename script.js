var main = document.querySelector(".main");
var mainText = document.querySelector(".main #content");
mainText.textContent = "0 ";

var mainList = document.querySelector(".main #list");
var textInput = document.querySelector(".mid #textInput");

var btn = document.querySelector("#button");
btn.style.height = "20px";
var target = 0;
var keyPressed = false;


var counter = 0;
var update = function(){
  counter++;
  mainText.textContent += counter + " ";
  
  if(counter >=  10){
    window.clearInterval(timer);
  }
}

function randomColor(){
  return Math.floor(Math.random()*100 + 155);
}

var add = function(){
  counter++;
  mainText.textContent += counter + " ";
  main.style.backgroundColor = "rgb(" + randomColor()+","+ randomColor()+","+ randomColor() + ")";
  target = parseInt(btn.style.height) + 20;
  if(!keyPressed){
    grow();
  } else {
    shrink();
  }
}

var grow = function(){
  btn.style.height = (parseInt(btn.style.height) + 1) + "px";
  if(parseInt(btn.style.height) <= target){
    window.requestAnimationFrame(grow);
  }
}
var shrink = function(){
  btn.style.height = parseInt(btn.style.height) - 2 + "px";
  if(parseInt(btn.style.height) > 20){
    window.requestAnimationFrame(shrink);
  }
}

var addList = function(){
  var text = textInput.value;
  if(text == "clear" || text=="Clear"){
    textInput.value = "";
    mainList.innerHTML = "List:";
  } else {
    mainList.innerHTML += "<br>" + text;
    textInput.value = "";
  }
  updateStorage();
}

var textInputListener = textInput.addEventListener("change", addList);



var timer = window.setInterval(update, 500);

var button = document.querySelector("#button").addEventListener("click", add);
var buttonReset = window.addEventListener("keydown", function(event){
  if(event.which == 16)
    keyPressed = true;
});
var buttonReset2 = window.addEventListener("keyup", function(event){
  if(event.which == 16)
    keyPressed = false;
});


//Fancy storage stuffies

var updateStorage = function(){
  localStorage.setItem("ListContent", mainList.innerHTML);
}
var useStorage = function(){
  listContent = localStorage.getItem("ListContent");
  mainList.innerHTML = listContent;
}




if(!localStorage.getItem("ListContent")){
  updateStorage();
} else {
  useStorage();
}
