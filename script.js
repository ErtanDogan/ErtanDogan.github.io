var main = document.querySelector(".main #content");
main.textContent = "0 ";

var btn = document.querySelector("#button");
btn.style.height = "20px";
var target = 0;
var keyPressed = false;

var counter = 0;
var update = function(){
  counter++;
  main.textContent += counter + " ";
  
  if(counter >=  10){
    window.clearInterval(timer);
  }
}

function randomColor(){
  return Math.floor(Math.random()*100 + 155);
}

var add = function(){
  counter++;
  main.textContent += counter + " ";
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


var timer = window.setInterval(update, 500);

var button = document.querySelector("#button").addEventListener("click", add);
var buttonReset = window.addEventListener("keydown", function(event){
  if(event.which == 16)
    keyPressed = true;
});
var buttonReset2 = window.addEventListener("keyup", function(event){
  if(event.which == 16)
    keyPressed = false;
})


