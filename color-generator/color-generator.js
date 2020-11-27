var colors = "";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  var circleText = document.getElementsByClassName("colorCircleText");  
  var circleColor = document.getElementsByClassName("colorCircle");
  
  var listColorElement = document.getElementById("listColor");
  listColorElement.innerHTML = "";
  
  colors = "";
  
  for (i = 0; i < 5; i++) {
    randomColor = getRandomColor();
    circleText[i].innerText = randomColor;
    circleColor[i].style.backgroundColor = randomColor;
    
    colors = colors + randomColor + " ";
  }
}

function copyColors() {  
  var listColorElement = document.getElementById("listColor");
  listColorElement.innerHTML = "Colors: " + colors;
}

setRandomColor();
