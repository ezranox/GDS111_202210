// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new Player();
	
	//------Declare the Player's speed on the x and y axis------
	player.vx = 5;
	player.vy = -5;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	player.move();
	//---------------------------------------------------
	
	//--------------Bounce towards the Right----------------------
if(player.x > canvas.width - player.width/2)
{
    player.x = canvas.width - player.width/2;
	player.color = "blue";
    player.vx = -player.vx;
}
//---------------------------------------------------

	//--------------Bounce towards the Left-----------------------
if(player.x < 0 + player.width/2)
{
    player.x = 0 + player.width/2;
	player.color = "purple";
    player.vx = -player.vx;
}
//---------------------------------------------------
//---------------Bounce towards the Top-----------------------
if(player.y < 0 + player.height/2)
{
    player.y = 0 + player.height/2;
	player.color = "black"
    player.vy = -player.vy;
}
//---------------------------------------------------

//-------------Bounce towards the Bottom----------------------
if(player.y > canvas.height - player.height/2)
{
    player.y = canvas.height - player.height/2;
	player.color = "red";
    player.vy = -player.vy;
}
//---------------------------------------------------
	
	player.drawCircle();
}
