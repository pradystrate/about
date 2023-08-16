function setup() {
    createCanvas(100, 500);
}
let yPos = 0;
function setup() { // runs once
  frameRate(120);
}
function draw() { // loops forever, until stopped
  background(100, 255, 241);
  yPos = yPos - 0.9;
  if (yPos < 0) {
    yPos = height;
  }
  line(0, yPos, width, yPos);
}
function mousePressed() {
  noLoop(); //stops/pauses the loop
}

function mouseReleased() {
  loop(); // continues the loop
}