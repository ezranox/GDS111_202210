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

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	


	
	//Instantiate the Player
	player = new GameObject(canvas.width/2, canvas.height-50, 250, 40, "cyan");
	ball = new GameObject(canvas.width/2, canvas.height/2, 80, 80, "#ff00ff");
	score = new GameObject();

	//Set the Animation Timer
	timer = setInterval(animate, interval);

	//ball speed
	ball.vx = 5;
	ball.vy = 0;
	force = ball.vx

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	

	context.save();
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(player.x,player.y);
	context.lineTo(ball.x,ball.y);
	context.closePath();
	context.lineWidth = 1;
	context.stroke();
	context.restore();
	
	
	if(a)
	{
		console.log("Moving Left");
		player.vx += -0.5;
	}

	if(d)
	{
		console.log("Moving Right");
		player.vx += 0.5;
	}
	
	player.vx = player.vx*0.95
	player.move();
	
	if(player.x + player.width/2 > canvas.width){
		player.x = canvas.width - player.width/2;
		player.vx = 0;
	}
	
	if(player.x - player.width/2 < 0){
		player.x = player.width/2;
		player.vx = 0;
	}
	
	
	//Update the Screen
	player.drawRect();

	//Ball

	//----Movement Using the Player's move() function----
	ball.vy+=gravity
	ball.move();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(ball.x > canvas.width)
	{
		ball.x = canvas.width - ball.width
		ball.vx = -ball.vx
	}
	//--------------Bounce of Left----------------------
	if(ball.x < ball.width)
	{
		ball.x = 0 + ball.width
		ball.vx = -ball.vx
	}
	//----------------------------------------------------

	//--------------Bounce of Bottom----------------------
	if(ball.y > canvas.height)
	{
	ball.y = canvas.height
	ball.vy = -ball.vy*.67
	p1Wins = 0
	}
	//--------------Bounce of Top----------------------
	if(ball.y < ball.height)
	{
	ball.y = ball.height
	ball.vy = -ball.vy
	}

	if(player.hitTestObject(ball))
    {
        console.log("hit");
        ball.y = player.y - player.height/2 - ball.height/2 
       
        p1Wins++;
        ball.vy = -35;
    
        if(ball.x >= player.x + player.width/6 * 2){
            console.log("hit on right");
            ball.vx = Math.abs(force) * 5;
        }
        else if(ball.x <= player.x - player.width/6 * 2){
            console.log("hit on left");
            ball.vx = -Math.abs(force) * 5;
        }
        else if(ball.x <= player.x - player.width/6){
            console.log("hit on mid left");
            ball.vx = -Math.abs(force);
        }
        else if(ball.x >= player.x + player.width/6){
            console.log("hit on mid right");
            ball.vx = Math.abs(force);
        }
    }
		context.save();
        context.font = "16px Arial black";
		context.color = "dark gray"
        context.fillText("Score: "+p1Wins, 80, 25);
        context.restore();
		ball.draw();
}
