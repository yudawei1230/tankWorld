module.exports = function(width,height){
		var c=document.getElementById("body");
	c.height = height;
	c.width = width;
	var ctx=c.getContext("2d");
	var middleWidth = c.width/2
	var middleHeight = c.height/2
ctx.moveTo(0,0);
ctx.lineTo(middleWidth*2,0);
ctx.lineTo(middleWidth*2,middleHeight*2);
ctx.lineTo(0,middleHeight*2);
ctx.lineTo(0,0);
ctx.stroke();
	return c;
}