var canvas = document.querySelector('canvas');

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);
c.fillStyle = "#3C00DA";
c.fillRect(210, 210, 50, 50);
c.fillStyle = "#DA009E";
c.fillRect(270, 270, 30, 30);
c.fillStyle = "#057200";
c.fillRect(310, 310, 70, 70);


c.beginPath();
c.moveTo(200, 200);
c.lineTo(210, 210);
c.lineTo(270, 270);
c.lineTo(200, 100);
c.lineTo(380, 380);
c.lineTo(100, 200);
c.stroke();


console.log(canvas);