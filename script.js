main = document.querySelector(".main #content");
main.textContent = "0 ";

var counter = 0;
var update = function(){
  counter++;
  main.textContent += counter + " ";
  
  if(counter >=  10){
    window.clearInterval(timer);
  }
}

function randomColor(){
  return Math.floor(Math.random()*255);
}

var add = function(){
  counter++;
  main.textContent += counter + " ";
  main.style.backgroundColor = "rgb(" + randomColor()+","+ randomColor()+","+ randomColor() + ")";
}

timer = window.setInterval(update, 500);
button = document.querySelector("#button").addEventListener("click", add);

