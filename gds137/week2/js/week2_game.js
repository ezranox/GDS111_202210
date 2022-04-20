//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.height = 150;
	player.width = 10;
	player.x = 20 + player.width / 2;
	player.color = "Blue";

	ball = new GameObject();
	
	//------Declare the Player's speed on the x and y axis------
	ball.vx = -10;
	ball.width = 20;
	ball.height = ball.width;
	ball.vy = 0;
	ball.color = "Purple"
	//----------------------------------------------------

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	ball.move();

	//--------------Bounce of Right----------------------
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2;
		ball.vx = -ball.vx;
	}
	//---------------------------------------------------

	//--------------Bounce of Left-----------------------
	if(ball.x < 0 - ball.width/2)
	{
		ball.x = canvas.width/2;
	}

	//if(ball.hitTestObject(player))
	//{
		//change color
		//ball.x = 30 + ball.width/2;
		//ball.vx = -ball.vx;	
	//}
	if(ball.hitTestObject(player))
	{
		ball.x = player.x + player.width/2 + ball.width/2;
		//ball.y = 30 + ball.height/2;
		ball.vx = -ball.vx;	
     //ball hits top
     
	 if(ball.y < player.y - player.height/6)
     {
       //ball.vx = 10; //+force
       ball.vy = -5; //-force
     }

	 //else if(ball.y > player.y + player.height/3) //SOMEWHAT WORKS
	 else if(ball.y > player.y + player.height/6)
     {
       //ball.vx = 10; //+force
       ball.vy = 5; //-force
     }
	
}
	//---------------------------------------------------

	//---------------Bounce of Top-----------------------
	if(ball.y < 0 + ball.height/2)
	{
		ball.y = 0 + ball.height/2;
		ball.vy = -ball.vy;	
	}
	//---------------------------------------------------

	//-------------Bounce of Bottom----------------------
	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2;
		ball.vy = -ball.vy;
	}
	//---------------------------------------------------
	
	if(w)
	{
		
		player.y += -5;
	}
	if(s)
	{
		
		player.y += 5;
	}
	if(player.y < 0 + player.height/2)
	{
		player.y = 0 + player.height/2;
	}
	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height - player.height/2
	}
	//Update the Screen
	player.drawRect();
	ball.drawCircle();
}