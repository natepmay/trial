function setup() {
  let cnv = createCanvas(640, 480);
  cnv.parent('myContainer');
  // put setup code here
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX,mouseY,80,80);
  // put drawing code here
}
