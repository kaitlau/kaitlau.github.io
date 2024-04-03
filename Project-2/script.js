//sliders
let frames = document.getElementById("frame-slider");
let frameText = document.getElementById("frame-value");
frameText.innerHTML = frames.value;

frames.oninput = function() {
  frameText.innerHTML = this.value;
}

let opacity = document.getElementById("opacity-slider");
let opacityText = document.getElementById("opacity-value");
opacityText.innerHTML = opacity.value;

opacity.oninput = function() {
  opacityText.innerHTML = this.value;
}

//sketch 
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
}

function draw() {
  //background("teal");
  frameRate(10);
  noStroke();
  
 //SHAPE ATTRIBUTES 
fill(random(["rgba(255,228,196,0.46)","rgba(0,128,128,0.34)","rgba(230,230,250,0.52)","rgba(255,0,0,0.34)", "rgba(255,234,72,0.49)"]));
  //fill(0,100, 1, 50);
  rect(random(0,700),random(0,700),random(50,700),random(50,700));

  
 //LINE ATTRIBUTES
 let x2 = random(width);
 let y2 = random(height);
stroke("gray");
 line(x,y,x2,y2);
 x = x2;
 y = y2;
  
}

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