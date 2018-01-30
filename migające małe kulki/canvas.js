var canvas = document.querySelector('canvas');

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

// c means context
var c = canvas.getContext('2d');


//c.fillStyle ="lightgrey";
//c.fillRect(100, 100, 100, 100);
//c.fillStyle= "grey";
//c.fillRect(400, 100, 100, 100);
//c.fillStyle = "purple";
//c.fillRect(300, 300, 100, 100);
//console.log(canvas);

//Line
//c.beginPath();
//c.moveTo(50, 300);
//c.lineTo(300, 100);
//c.lineTo(400, 300);
//c.strokeStyle = "red";
//c.stroke();

// Arc / Circle
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = "blue";
//c.stroke();

//for (var i = 0; i < 100; i++) {
//	var x = Math.random() * window.innerWidth;
//	var y = Math.random() * window.innerHeight;
//c.beginPath();
//c.arc(x, y, 30, 0, Math.PI * 2, false);
//c.strokeStyle = "blue";
//c.stroke();
//}


//var x = Math.random() * innerWidth;
//var y = Math.random() * innerHeight;
//var dx = (Math.random() - 0.5) * 8;
//var dy = (Math.random() - 0.5) * 8;
//var radius = 30;


window.addEventListener('resize', function(){
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;
});
var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
	'#471947',
	'#704c70',
	'#997f99',
	'#014947',
	'#494701',
	]

window.addEventListener('mousemove',
 function(event) {
 	mouse.x = event.x;
 	mouse.y = event.y; 
});

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius= radius;

	this.draw = function (){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'blue';
		c.stroke();
		c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];

		c.fill();
	}

	this.update = function(){
		if (this.x + this.radius  > innerWidth || this.x - this.radius <0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius <0){
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;


		//interactivity
		if (mouse.x - this.x<50 && mouse.x - this.x > -50 && mouse.y -this.y <50 && mouse.y - this.y > -50) {
			
			if (this.radius < maxRadius) {
			this.radius +=1;}
		}
		else if (this.radius >minRadius){
			this.radius -=1;
		}

		this.draw();
	}


	}



var circleArray = [];

for(var i = 0; i<250; i++){
	var radius = 30;
	var x = Math.random() * (innerWidth - radius *2) + radius;
	var y = Math.random() * (innerHeight -radius *2) + radius;
	var dx = (Math.random() - 0.5) *2;
	var dy = (Math.random() - 0.5) *2;
	circleArray.push(new Circle(x, y, dx, dy, radius));
}

//console.log(circleArray);


//var circle = new Circle(200, 200, 3, 3, 30);
//circle.draw();


function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++){
		circleArray[i].update();
	}


}






	animate();

