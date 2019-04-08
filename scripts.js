// RED CIRCLE PAGE //

var ellipseDiameter = 180;
var shape;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(45);
  textAlign(CENTER);
  text('pick a shape and color', 720, 300);
  textFont('Helvetica');
}



function draw() {






  document.getElementById("red").addEventListener("click", function () {
    fill('#FF0000');
  })
  document.getElementById("blue").addEventListener("click", function () {
    fill('#0000FF');
  })
  document.getElementById("yellow").addEventListener("click", function () {
    fill('#FFFF00');
  })
 document.getElementById("circle").addEventListener("click", function () {
   shape = "circle"
 })
 document.getElementById("triangle").addEventListener("click", function () {
   shape = 'triangle'
 })
 document.getElementById("square").addEventListener("click", function () {
   shape = 'square'
   square(mouseX, mouseY, 5);
 })
if(shape == 'circle'){
  ellipse(mouseX, mouseY, ellipseDiameter, ellipseDiameter);
} else if(shape == 'triangle'){
  triangle(mouseX + 75, mouseY + 75, mouseX, mouseY - 75, mouseX - 75, mouseY + 75);
} else if(shape == 'square') {
 square(mouseX - 87.5, mouseY - 87.5, 175);
}
}
