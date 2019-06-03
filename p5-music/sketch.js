var song;
var amp;
let angle = 0;

var volhistory = [];

function preload() {
  song = loadSound('fischerspooner-emerge.mp3');
    log = loadImage("img/logo.png");
    mad = loadImage("img/mad.png");
}

function setup() {
  createCanvas(595, 616, WEBGL);
  angleMode(DEGREES);
  song.play();
  amp = new p5.Amplitude();
 
    }


function draw() {
  background(252, 168, 98);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();


  //Onda de sonido


  translate(20, 20);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 100, 500);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }

  //color lila
  rectMode();
  noStroke()
  fill(170, 106, 233);
  rotateX(angle * 4);
  rotateY(angle * 6);
  rotateZ(angle * 10);
  torus(50, 10);

  angle += 0.07;

  //color rosa

  rectMode();
  noStroke()
  fill(255, 0, 128);
  rotateX(angle * 4);
  rotateY(angle * 6);
  rotateZ(angle * 10);
  torus(50, 10);

  angle += 0.07;


//otro azul

  rectMode();
  noStroke()
  fill(0, 0, 255);
  rotateX(angle * 4);
  rotateY(angle * 6);
  rotateZ(angle * 10);
  torus(50, 10);

  angle += 0.07;
}
