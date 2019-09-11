

var slider;
function setup() {
  createCanvas(900, 900);
  colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(350);
  translate(width/2, height);
  branch(400);
  //branch(mouseX); //sets branch value based on mouse position
}

function branch (len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  var fraction = 2/3;
  if(len > 4) {
    push();
    rotate(angle);
    branch(len*fraction); 
    pop();
    push();
    rotate(-angle);
    branch(len*fraction);
    pop();
  }
  
}

// function draw() {
//   var val = slider.value();
//   background(val, 100, 100, 1);
// }