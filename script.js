/**
 * Lab 7 - Text
 */
function setup() {
  createCanvas(640, 240);
  textFont("Arial");
}
function draw() {
  background(200);
  if (mouseIsPressed) {
    push();
    textFont("Georgia")
    textSize(40);
    text("Lab 7 Complete... Right?", 20, 200);
    pop();
  } else {
    push();
    textSize(16);
    text("one small step for a man ...", 20, 60);
    pop();
    push();
    textSize(32);
    text("one giant leap for mankind.", 20, 160);
    pop();

  }
}

