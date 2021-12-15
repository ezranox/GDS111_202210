var canvas = document.getElementById("canvas")

//define the draing context of the camvas element
var ctx = canvas.getContext("2d") //canvas var is the object!

//creat a new image to eventually add to the canvas this is instead of using <img> in html (doc)
var shapes = new Image()

//galaxy is now an image object and we can access any of the image attributes (properties) that we might need
shapes.src = "images/shapes.png" //we can access .src because galaxy is an image object!


//now, "write" the image to the canvas page! an event must occur for this to happen...
shapes.onload = function() {

    //recttangle

   ctx.fillStyle = "purple" 
    ctx.strokeStyle = "blue"        
    ctx.lineWidth = "5"

    ctx.fillRect(85, 300, 109, 105)
    ctx.strokeRect(85, 300, 109, 105)

    //Pentagon

    ctx.fillStyle = "#ff00ff"
    ctx.strokeStyle = "#00ffff"
    ctx.lineWidth = "5"


    ctx.beginPath()        //begin for new shape
    ctx.moveTo(556, 308)   //starting point of shape
    ctx.lineTo(666, 284)   //draws line to this next point
    ctx.lineTo(724, 380)   //draws line to this next point
    ctx.lineTo(650, 464)
    ctx.lineTo(548, 419)
    ctx.closePath()        //reunites previous end point (600, 140) with starting point
    ctx.fill()
    ctx.stroke()

    //circle

    ctx.fillStyle = "#ffff00"
    ctx.strokeStyle = "red"
    ctx.lineWidth = "5"

    ctx.beginPath()
    ctx.arc(386, 442, 70, 0, (2*Math.PI), false)
    ctx.closePath()
    ctx.fill()

    //Line

    ctx.fillStyle = "none" //the solid fill of the shape
    ctx.strokeStyle = "rgb(255, 0, 0)"      // the outline color
    ctx.lineWidth = "5" 


     //first need to move the "drawing cursor" to the 
     ctx.moveTo(86,683)    //start position
     //next, draw a line to the ending point (x, y)
     ctx.lineTo(277, 549) //end position
 
     //ctx.strokeStyle = "black"      //changing the strokeStyle and lineWidth before drawing will make sure it doesn't retain previous shapes info/styling ctx.lineWidth = "1" 
    // ctx.lineWidth = "1"
     ctx.stroke()         //draws the line!
    
 
 
     //star

     ctx.fillStyle = "ffff00" //the solid fill of the shape
    ctx.strokeStyle = "rgb(32, 32, 32)"      // the outline color
    ctx.lineWidth = "5"

    ctx.beginPath()        //begin for new shape
    ctx.moveTo(635, 496)   //starting point of shape
    ctx.lineTo(667, 554)   //draws line to this next point
    ctx.lineTo(733, 567)   //draws line to this next point
    ctx.lineTo(733, 567)
    ctx.lineTo(688, 615)
    ctx.lineTo(696, 681)
    ctx.lineTo(636, 654)
    ctx.lineTo(576, 681)
    ctx.lineTo(583, 615)
    ctx.lineTo(538, 567)
    ctx.lineTo(604, 554)
    ctx.lineTo(635, 496)
    ctx.closePath()        //reunites previous end point (600, 140) with starting point
    ctx.fill()
    ctx.stroke()

     

}