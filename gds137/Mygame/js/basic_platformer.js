//Declare my variables

var canvas;
var context;
var timer;
var interval;
var snake;
var size = 15;



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	
	
	snake = new GameObject({x:100, y:canvas.height/2-100,color:"purple"});
	
	

	

		
	goal = new GameObject({width:50, height:50, x:canvas.width-50, y:100, color:"pink"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 0;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w)
	{
		
		snake.vy += -snake.ax*snake.force*0.5;
	}

	if(a)
	{
		snake.vx += -snake.ax * snake.force;
	}
	if(s)
	{
		snake.vy += snake.ax*snake.force*0.5;
	}
	if(d)
	{
		snake.vx += snake.ax * snake.force;
	}
	

	snake.vx *= fX;
	snake.vy *= fY;
	
	snake.vy += gravity;
	
	snake.x += Math.round(snake.vx);
	snake.y += Math.round(snake.vy);
	
	
	
	
	
		
	if(snake.hitTestObject(goal))
	{
		goal.y = 10000;
		snake.height+=size;
		snake.width+=size;
	}
	
	
	
	

	//Show hit points
	snake.drawCircle();
	goal.drawCircle();
}

