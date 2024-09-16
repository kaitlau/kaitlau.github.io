let lineColor;

function setup() {
  createCanvas(600, 700);

  lineColor = color(0);

}

function draw() {
  
  stroke(lineColor);

  //draw the rectangle button over the mouse trail
  fill(lineColor);
  rect(80, 20, 100, 90);

  if (mouseIsPressed) {

    line(pmouseX, pmouseY, mouseX, mouseY);
    //if the mouse is over the rectangle
    if ((mouseX > 80) && (mouseX < 80 + 100) &&
      (mouseY > 20) && (mouseY < 20 + 90)) {

      //set the line stroke to blue
     lineColor = color(random(255),random(255), random(255));

    }

  }

}