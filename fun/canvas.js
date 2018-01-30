var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function Square(x, y, dx, dy, sideLength){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.sideLength = sideLength;

	this.draw = function(){
	  c.fillRect(this.x, this.y, this.sideLength, this.sideLength);

	}

	this.update = function (){
		 if (this.x + this.sideLength > innerWidth || this.x <0){
		  	this.dx = -this.dx;
		  }

		  if (this.y + this.sideLength > innerHeight || this.y<0){
		  	this.dy= -this.dy;
		  }


		  this.x += this.dx;
		  this.y += this.dy;
		  this.draw();

	}
	
}




var squareArray = [];


for (var i = 0; i < 200; i++) {	
	var sideLength = 10;
	var x = Math.random() * (innerWidth - sideLength *2) + sideLength;
	var y = Math.random() * (innerHeight - sideLength *2)+ sideLength;
	var dy = (Math.random()- 0.5);
	var dx = (Math.random()- 0.5);
	squareArray.push(new Square(x, y, dx, dy, sideLength));

}

console.log(squareArray);


function moveRec () {
	  requestAnimationFrame(moveRec);
	  	c.clearRect(0,0, innerWidth, innerHeight);

	  	for (var i = 0; i < squareArray.length; i++) {

	  		squareArray[i].update();
	  	}



	 }

moveRec();
console.log(canvas);