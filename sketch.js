let soundy

function preload() {
  soundy = loadSound('Samples_flat/duane-01.wav');
}

function setup() {
  createCanvas(640, 480);
}

function mousePressed() {
  soundy.play();
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
