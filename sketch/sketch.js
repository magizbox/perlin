var slider;
var step = 0.01;
function setup() {
  createCanvas(400, 400);
  slider = document.getElementById("slider");
}
var xoff = 0;
function draw() {
  background(51);
  // var x = random(200);
  var x = map(noise(xoff), 0, 1, 0, width);
  step = map(slider.value, 0, 1000, 0, 0.3);
  xoff += step;
  console.log(step);
  console.log(xoff);
  ellipse(x, 200, 24, 24);
}