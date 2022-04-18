var canvas;
var context;
var timer;
var interval = 1000/60;
var ball;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject();
	player.height = 150;
	player.width = 10;
	player.x = 20 + player.width/2;

	ball = new GameObject();
	
	//------Declare the Player's speed on the x and y axis------
	ball.vx = -10;
	ball.width = 20;
	ball.height = ball.width;
	ball.vy = 0;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	ball.move();
	//---------------------------------------------------
	
	//--------------Bounce towards the Right----------------------
if(ball.x > canvas.width - ball.width/2)
{
    ball.x = canvas.width - ball.width/2;
    ball.vx = -ball.vx;
}
//---------------------------------------------------

	//--------------Bounce towards the Left-----------------------
if(ball.x < 0 + ball.width/2)
{
    ball.x = 0 + ball.width/2;
    ball.vx = -ball.vx;
}
//---------------------------------------------------
//---------------Bounce towards the Top-----------------------
if(ball.y < 0 + ball.height/2)
{
    ball.y = 0 + ball.height/2;
    ball.vy = -ball.vy;
}
//---------------------------------------------------

//-------------Bounce towards the Bottom----------------------
if(ball.y > canvas.height - ball.height/2)
{
    ball.y = canvas.height - ball.height/2;
    ball.vy = -ball.vy;
}
//---------------------------------------------------

if(w){
	player.y += -5;
}
if(s){
	player.y += 5;
}
if(player.y < 0 + player.height/2){
	player.y = 0 + player.height/2
}
if(player.y > canvas.height - player.height/2){
	player.y = canvas.height - player.height/2
}
	
	player.drawRect();
	ball.drawCircle();
}
