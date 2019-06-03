//

	function preload(){
		img = loadImage("img/1.png");
		log = loadImage("img/logo.png");
		mad = loadImage("img/mad.png");
					}

	function setup() {
		createCanvas(595, 920);
		image(img, 0, 0);
		smallPoint = 4;
	  largePoint = 20;
	  imageMode(CENTER);
	  noStroke();
	  background(255);
	  img.loadPixels();

		textFont("Helvetica");
		textStyle(BOLD);
		textLeading(2);
		textSize(45);
		text('TRESOR', 10, 50);
		textSize(86);
		text('DANNY DA', 10, 119);
		textSize(45);
		text('[03/06/2019] ', 10, 160);
		textSize(25);
		text('music and dealers - electronic festival', 10, 190);

		image(log, 57, 890);
		image(mad, 550, 890);

		}


	function draw(){
			
	let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  	let x = floor(random(img.width));
  	let y = floor(random(img.height));
  	let pix = img.get(x, y);
  	fill(pix, 128);
  	ellipse(x, y, pointillize, pointillize);
		}			