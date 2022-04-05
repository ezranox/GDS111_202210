//--------------Bounce towards the Right----------------------
if(player.x > canvas.width - player.width/2)
{
    player.x = canvas.width - player.width/2;
    player.vx = -player.vx;
}
//---------------------------------------------------

//--------------Bounce towards the Left-----------------------
if(player.x < 0 + player.width/2)
{
    player.x = 0 + player.width/2;
    player.vx = -player.vx;
}
//---------------------------------------------------

//---------------Bounce twards the Top-----------------------
if(player.y < 0 + player.height/2)
{
    player.y = 0 + player.height/2;
    player.vy = -player.vy;
}
//---------------------------------------------------

//-------------Bounce towards the Bottom----------------------
if(player.y > canvas.height - player.height/2)
{
    player.y = canvas.height - player.height/2;
    player.vy = -player.vy;
}
//---------------------------------------------------