//Declare my variables

var canvas;
var context;
var timer;
var interval;
var snake;
var size = 15;
var goal = [2];
var smolFood = [20];
var speed = [2];
var active = false;
var timer2 = 0;
var bomb;
var lose = false;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	snake = new GameObject({x:100, y:canvas.height/2-100,color:"purple"});
	
	bomb = new GameObject({width:50, height:50, x:Math.floor(Math.random() * (canvas.width -100) + 50), y:Math.floor(Math.random() * (canvas.height - 100) + 50), color:"black"});
	//Constructor Functions for object arrays :)
	for(i = 0;i < 2; i++)
	{
		goal[i] = new GameObject({width:50, height:50, x:Math.floor(Math.random() * (canvas.width -100) + 50), y:Math.floor(Math.random() * (canvas.height - 100) + 50), color:"blueviolet"});
	}
	for(i = 0; i < 20;i++)
	{
		smolFood[i] = new GameObject({width:25, height:25, x:Math.floor(Math.random() * (canvas.width - 50) + 25), y:Math.floor(Math.random() * (canvas.height - 50) + 25), color:"aqua"})
	}
	for(i = 0;i < 2; i++)
	{
		speed[i] = new GameObject({width:50, height:50, x:Math.floor(Math.random() * (canvas.width -100) + 50), y:Math.floor(Math.random() * (canvas.height - 100) + 50), color:"pink"});
	}
	var fX = .85;
	var fY = .97;
	
	var gravity = 0;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && lose == false)
	{
		
		snake.vy += -snake.ax*snake.force*0.5;

	}

	if(a && lose == false)
	{
		snake.vx += -snake.ax * snake.force;
	}
	if(s && lose == false)
	{
		snake.vy += snake.ax*snake.force*0.5;
	}
	if(d && lose == false)
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
	if(snake.hitTestObject(bomb))
	{
		snake.color = "red"
		lose = true;

	}
	for(i = 0;i < 2;i++)
	{
	if(snake.hitTestObject(speed[i]))
		{
			speed[i].y = 10000;
			active  = true;
		}
	}
	if(active == true)
	{
		snake.vx = snake.vx*2;
		snake.vy = snake.vy*2;
		timer2++;
	}
	if(timer2 > 2)
	{
		active = false;
		timer2 = 0;
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
	for(i=0; i<2;i++)
	{
		speed[i].drawCircle();
	}
	bomb.drawRect();
	if(lose == true)
	{
		context.save();
		context.font = "64px Arial black";
		context.color = "darkgray";
		context.fillText("You Lose!",-175+canvas.width/2, canvas.height/2);
		context.restore();
	}
}

