/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:113, height:60, y:300}).makeSprite(buttonData);

//startButton.img.src="images/mrt.jpg"
startButton.width=200;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/startbg.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play('bg', 0 );
			sounds.bg.loop = true;
		}

		//Hover Effect Graffic
		startButton.changeState('hover')
		canvas.style.cursor ='pointer'
	}
	else
	{
		//Default Button Graphic
		startButton.changeState('idle')
		canvas.style.cursor='auto';
		//startButton.color = `red`
	}
	
	menuBackground.drawStaticImage();
	startButton.play().drawSprite();
	//startButton.play(function(){return})
}
	
	
