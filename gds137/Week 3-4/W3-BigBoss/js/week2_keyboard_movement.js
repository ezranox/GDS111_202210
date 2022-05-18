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
var p2Wins = 0;
var gravity = 1;
var force = 0;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	


	
	//Instantiate the Player
	player = new GameObject(canvas.width/2, canvas.height - 50, 250, 40, "cyan");
	ball = new GameObject(canvas.width/2, canvas.height/2, 80, 80, "#ff00ff");
	//player2 = new GameObject(canvas.width - canvas.width/12, canvas.height/2,);
	score = new GameObject();

	//Set the Animation Timer
	timer = setInterval(animate, interval);

	//ball speed
	ball.vx = 5;
	force = ball.vx;
	ball.vy = 0;

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	score.score(p1Wins, p2Wins);

	
	
	//Move the Player to the right
	if(d)
	{
		console.log("Moving Down");
		//if(player.y + player.height/2 < canvas.height){
		player.vx += 0.5;
		//}
	}
	if(a)
	{
		console.log("Moving Up");
		//if(player.y - player.height/2 > 0){
		player.vx += -0.5;
		//}
	}
	
		
	player.vx = player.vx * 0.95;
		

	/*
	if(down)
	{
		console.log("P2 Moving Down");
		//if(player.y + player.height/2 < canvas.height){
		player2.y += 4;
		//}
	}
	if(up)
	{
		console.log("P1 Moving Up");
		//if(player.y - player.height/2 > 0){
		player2.y += -4;
		//}
	}
	*/
	player.move();
	//right collision
	if(player.x + player.width/2 > canvas.width){
		player.x = canvas.width - player.width/2;
		player.vx = 0;
	}
	//left collision
	if(player.x - player.width/2 < 0){
		player.x = player.width/2;
		player.vx = 0;
	}
	/*
	//bottom collision
	if(player2.y + player2.height/2 > canvas.height){
		player2.y = canvas.height - player2.height/2;
	}
	//top collision
	if(player2.y - player2.height/2 < 0){
		player2.y = player2.height/2;
	}
	*/
	//Update the Screen
	player.drawRect();
	//player2.drawRect();

	//Ball

	//----Movement Using the Player's move() function----
	ball.vy += gravity;
	ball.move();
	//---------------------------------------------------
	
	//--------------Bounce of Right----------------------
	if(ball.x > canvas.width)
	{
		//ball.changeColor();
		//ball.x = canvas.width/2;
		//ball.y = canvas.height/2;
		ball.x = canvas.width - ball.width;
		ball.vx = -ball.vx;
		//ball.vy = 1;
		//p1Wins++;
	}
	//--------------Bounce of Left----------------------
	if(ball.x < ball.width)
	{
		//ball.changeColor();
		//ball.x = canvas.width/2;
		//ball.y = canvas.height/2;
		ball.x = 0 + ball.width;
		ball.vx = -ball.vx;
		//ball.vy = 1;
		//p2Wins++;
	}
	//----------------------------------------------------

	//--------------Bounce of Bottom----------------------
	if(ball.y > canvas.height)
	{
		//ball.changeColor();
		ball.y = canvas.height;
		ball.vy = -ball.vy * .67;	
		//ball.vy--;
		p1Wins = 0;
	}
	//--------------Bounce of Top----------------------
	if(ball.y < ball.height)
	{
		//ball.changeColor();
		ball.y = ball.height;
		ball.vy = -ball.vy;	
		//ball.vy ++;
	}
	//----------------------------------------------------
	
	
	
	if(player.hitTestObject(ball))
	{
		console.log("hit");
		ball.y = player.y - player.height/2 - ball.height/2 
		//ball.changeColor();
		//player.changeColor();
		//player.changeSize();
		p1Wins++;
		ball.vy = -35;
		//ball.vx += 4;
		if(ball.x >= player.x + player.width/6 * 2){
			console.log("hit on rigth");
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
			console.log("hit on mid rigth");
			ball.vx = Math.abs(force);
		}
	}

	/*
	if(ball.x + ball.width >= player2.x + player2.width*1.5 && ball.x <= player2.x + player.width*2)
	{
		console.log("hit on x");
		if(ball.y - ball.width <= player2.y + player2.height/2 && ball.y >= player2.y - player.height/2)
		{
			console.log("hit on y");
			ball.changeColor();
			player2.changeColor();
			player2.changeSize();
			ball.vx += 4;
			if(ball.y >= player2.y + player2.height/6){
				console.log("hit on bottom");
				ball.vx = -Math.abs(ball.vx);
				ball.vy = Math.abs(ball.vy);
			}
			else if(ball.y <= player2.y - player2.height/6){
				console.log("hit on top");
				ball.vx = -Math.abs(ball.vx);
				ball.vy = -Math.abs(ball.vy);
			}
			else{
				console.log("hit on mid");
				ball.vx = -ball.vx;
			}
		}
	}
	*/
	ball.draw();

	context.save();
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(player.x , player.y);
	context.lineTo(ball.x, ball.y);
	context.closePath();
	//context.drawImage(img, ball.x - ball.width, ball.y - ball.width, ball.width, ball.width);
	context.lineWidth = 1;
	context.stroke();
	context.restore();
}
