//Declare my variables
var canvas;
var context;
var timer;
var img=document.getElementById("ric");
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;
var p1Wins = 0;
var gravity = 1;
var force = 0;
var change = 0;
var die=[5];
var point=[5];
	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	//Instantiate the Player
	player = new GameObject(canvas.width/2, canvas.height - 25, 50, 50, "#ffff00");
	for (i = 0; i < 5; i++)
	{
		die[i] = new GameObject(rand(10, canvas.width-10), rand(-canvas.height + 10, -10), 20, 20, "red");
	}

	for (i = 0; i < 5; i++)
	{
		point[i] = new GameObject(rand(10, canvas.width-10), rand(-canvas.height + 10, -10), 20, 20, "green");
	}
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move Player right
	if(d)
	{
		player.vx += 0.5;
	}
	if(a)
	{
		player.vx += -0.5;
	}
	
	player.vx = player.vx * 0.95;

	for (i = 0; i < 5; i++)
	{
		point[i].vy = rand(1, 5) + gravity;
		die[i].vy = rand(1, 5) + gravity;
	}

	for (i = 0; i < 5; i++)
	{
		point[i].move();
		die[i].move();
	}
		
	player.move();
	//colliding right
	if(player.x + player.width/2 > canvas.width){
		player.x = canvas.width - player.width/2;
		player.vx = 0;
	}
	//colliding left
	if(player.x - player.width/2 < 0){
		player.x = player.width/2;
		player.vx = 0;
	}
	for (i = 0; i < 5; i++)
	{
		if(die[i].hitTestObject(player))
		{
			p1Wins = 0;
			player.color = "red";
			change = 0;
			for (n = 0; n < 5; n++)
			{
				point[n].x = rand(10, canvas.width-10);
				point[n].y = rand(-canvas.height + 10, -10);
				die[n].x = rand(10, canvas.width-10);
				die[n].y = rand(-canvas.height + 10, -10);
			}
		}
		if(die[i].y > canvas.height + die[i].height/2)
		{
			die[i].x = rand(10, canvas.width-10);
			die[i].y = rand(-canvas.height + 10, -10);
		}
	}

	for (i = 0; i < 5; i++)
	{
		if(point[i].hitTestObject(player))
		{
			p1Wins++;
			point[i].x = rand(10, canvas.width-10);
			point[i].y = rand(-canvas.height + 10, -10);
			player.color = "green"
			change = 0;
		}
		if(point[i].y > canvas.height + point[i].height/2)
		{
			point[i].x = rand(10, canvas.width-10);
			point[i].y = rand(-canvas.height + 10, -10);
		}
	}

	if(player.color == "red" || player.color == "green")
	{
		change++;
	}
	if(change >= 50)
	{
		player.color = "#ffff00";
		change = 0;
	}

	//Update the Screen
	player.drawRect();
	for (i = 0; i < 5; i++)
	{
		die[i].drawCircle();
		point[i].drawRect();
	}
	player.score(p1Wins);
}