//Declare my variables

var canvas;
var context;
var timer;
var interval;
var snake;
var size = 15;
var goal = [2];
var smolFood = [20];

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	snake = new GameObject({x:100, y:canvas.height/2-100,color:"purple"});
	

	//Constructor Functions for object arrays :)
	for(i = 0;i < 2; i++)
	{
		goal[i] = new GameObject({width:50, height:50, x:Math.floor(Math.random() * (canvas.width -100) + 50), y:Math.floor(Math.random() * (canvas.height - 100) + 50), color:"pink"});
	}
	for(i = 0; i < 20;i++)
	{
		smolFood[i] = new GameObject({width:25, height:25, x:Math.floor(Math.random() * (canvas.width - 50) + 25), y:Math.floor(Math.random() * (canvas.height - 50) + 25), color:"aqua"})
	}

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
	

	//Collision Detection for loops 

	for(i = 0;i < 2;i++)
	{
	if(snake.hitTestObject(goal[i]))
		{
			goal[i].y = 10000;
			snake.height+=size;
			snake.width+=size;
		}
	}
	for(i = 0; i < 20;i++)
	{
		if(snake.hitTestObject(smolFood[i]))
		{
			smolFood[i].y = 10000;
			snake.height+=size/2;
			snake.width+=size/2;
		}
	}
	
	//In order to draw each object in the array (as seperate pieces) 
	snake.drawCircle();
	for(i = 0; i < 20;i++)
	{
		smolFood[i].drawCircle();
	}
	for(i=0; i<2;i++)
	{
		goal[i].drawCircle();
	}
}

