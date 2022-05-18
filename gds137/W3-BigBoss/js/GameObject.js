// JavaScript Document
function GameObject(x,y,w,h,color)
{
	
	//Default Values
	if(x == undefined)
		this.x = canvas.width/12;
	else 
		this.x = x;
	if(y == undefined)
		this.y = canvas.height/2;
	else 
		this.y = y;
	
	if(w == undefined)
		this.width = 50;
	else 
		this.width = w;
	if(h == undefined)
		this.height = 200;
	else 
		this.height = h;
	
		//player's color
	if(color == undefined)
		this.color = "#aa00ff";
	else 
		this.color = color;
	
	//player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	

	
	//This draws the player to the screen
	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
		
	}	
	
	this.drawCircle = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.beginPath();
			context.translate(this.x, this.y);
			context.arc(0, 0, this.width/2, 0, 360 *Math.PI/180, true);
			context.arc(0, 0, this.width/2, 0, 360 *Math.PI/180, true);
			context.closePath();
			context.fill();
		context.restore();
		
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
	
	this.left = function() 
	{
		return this.x - this.width/2;
	}
	this.right = function() 
	{
		return this.x + this.width/2;
	}
	
	this.top = function() 
	{
		return this.y - this.height/2;
	}
	this.bottom = function() 
	{
		return this.y + this.height/2;
	}
	
	this.hitTestObject = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.top() < obj.bottom() &&
		   this.bottom() > obj.top())
		{
			return true
		}
		return false;
	}

	//This draws the player to the screen
	this.draw = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			//context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
			context.beginPath();
			context.arc((-this.width/2), (-this.height/2), this.width/2, 0, 2 * Math.PI);
			context.closePath();
			context.fill()
		context.restore();
		
	}	

	this.changeColor = function()
	{
		var num;
		num = Math.floor(Math.random() * 11);
		switch(num){
			case 1: 
			this.color = "#ff0000";
			break;
			case 2: 
			this.color = "#00ff00";
			break;
			case 3: 
			this.color = "#0000ff";
			break;
			case 4: 
			this.color = "#ffff00";
			break;
			case 5: 
			this.color = "#ff00ff";
			break;
			case 6: 
			this.color = "#00ffff";
			break;
			case 7: 
			this.color = "#ff66ff";
			break;
			case 8: 
			this.color = "#000000";
			break;
			case 9: 
			this.color = "#ff6666";
			break;
			case 10: 
			this.color = "#6666ff";
			break; 
		}
	}
	
	this.changeSize = function()
	{
		this.height = Math.floor(Math.random() * 300) + 100;
	}

	this.score = function(p1Wins,p2Wins)
    {
        context.save();
        context.font = "20px Times black";
        context.fillText("Player 1: "+p1Wins+"  " +" Player 2: "+p2Wins, 417, 25);
        context.restore();
    }

	
}
