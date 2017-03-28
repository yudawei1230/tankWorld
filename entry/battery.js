module.exports = function(width,height){
	var c=document.getElementById("battery");
	c.height = height;
	c.width = width;
	var ctx=c.getContext("2d");
	var middleWidth = c.width/2
	var middleHeight = c.height/2
	ctx.moveTo(middleWidth-middleWidth/4,0);
	ctx.lineTo(middleWidth-middleWidth/4,middleHeight+middleHeight/4);
	ctx.lineTo(0,middleHeight*2);
	ctx.lineTo(middleWidth*2,middleHeight*2);
	ctx.lineTo(middleWidth+middleWidth/4,middleHeight+middleHeight/4);
	ctx.lineTo(middleWidth+middleWidth/4,0);
	ctx.lineTo(middleWidth-middleWidth/4,0);
	ctx.stroke();
	return c;
}