//sliders
let frames = document.getElementById("frame-slider");
let frameText = document.getElementById("frame-value");
frameText.innerHTML = frames.value;

frames.oninput = function() {
  frameText.innerHTML = this.value;
  frameR = this.value;
}

let opacity = document.getElementById("opacity-slider");
let opacityText = document.getElementById("opacity-value");
opacityText.innerHTML = opacity.value;

opacity.oninput = function() {
  opacityText.innerHTML = this.value;
  opac = this.value;
}


//sketch 
let canvasDiv = document.getElementById("sketch");
let frameR = 1; 
let opac = 1;
let slider;
let x, y;
let width, height;
let pickOne = document.getElementById("color-i");
let pickTwo = document.getElementById("color-ii");
let pickThree = document.getElementById("color-iii");
let pickFour = document.getElementById("color-iv");
let buttOne = document.getElementById("lines");
let buttTwo = document.getElementById("shapes");


  function setup() {
    width = canvasDiv.offsetWidth;
    height = width;
   let runCanvas = createCanvas(width/1.28, height/1.5);
runCanvas.parent("sketch");
runCanvas.id("art")
  x = random(width);
  y = random(height);
  }

  function draw() {
  noStroke();

 //SHAPE ATTRIBUTES 
let palette = [
  pickOne.value,
  pickTwo.value,
  pickThree.value,
  pickFour.value
]

fill(random(palette)+int(opac));
  if(buttTwo.checked) {
    fill(random(palette)+int(opac));
  } else {
    fill(0,0,0,0);
  }
rect(random(0,700),random(0,700),random(300,1000),random(300,1000));

; //LINE ATTRIBUTES

 let x2 = random(width);
 let y2 = random(height);

 stroke("black");
 if(buttOne.checked){
  stroke("black");
 } else {
  stroke(0,0,0,0);
 }

 line(x,y,x2,y2);
 x = x2;
 y = y2;

frameRate(int(frameR));
}

function windowResized() {
  width = canvasDiv.offsetWidth;
  height = width;
  resizeCanvas(width/1.28, height/1.5);

}


// function test () {
//   if (buttOne.checked== true) {
    
//     console.log('worked');
//   } else {
//     console.log('nonono');
//   }
// }

// test();


//music on image hover
let audio = document.getElementById("audio");
let notes = document.getElementById("notes");

function play() {
  audio.play();
}
function stop() {
  audio.pause();
}

notes.addEventListener('mouseover', play);
notes.addEventListener('click', stop);