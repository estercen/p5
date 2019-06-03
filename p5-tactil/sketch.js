//

	function preload(){
		img = loadImage("img/1.png");
		log = loadImage("img/logo.png");
		mad = loadImage("img/mad.png");
					}

	function setup() {
		createCanvas(595, 900);
		image(img, 0, 0);
		background(255)

		textFont("Helvetica");
		textStyle(BOLD);
		textLeading(2);
		textSize(45);
		text('TRESOR', 10, 50);
		textSize(86);
		text('ARCHITECH', 10, 119);
		textSize(45);
		text('[05/06/2019] ', 10, 160);
		textSize(25);
		text('music and dealers - electronic festival', 10, 190);

		image(log, 10, 850);
		image(mad, 550, 850);
		}


	function draw(){
			
		var c= img.get(mouseX, mouseY);

		fill(c);
		noStroke();
		rect(mouseX, mouseY, 20, 20);
		}			