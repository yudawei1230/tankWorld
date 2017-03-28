module.exports = function(width,height){
	var battery = require('./battery');
	var body = require('./body');
	var track_left = require('./track');
	var track_right = require('./track');

	var tank = document.getElementById("tank").getContext("2d");

	var middleWidth = 30;
	var middleHeight = 30;

	tank.stroke();

	tank.drawImage(
		battery( middleWidth - middleWidth / 4, middleHeight + middleHeight / 8),
		(middleWidth*2 - (middleWidth - middleWidth / 4)) / 2,
		0
	);

	tank.drawImage(
		body(middleWidth * 2 - middleWidth / 1.5, middleHeight),
		middleWidth / 3,
		middleHeight / 1.8
	);

	tank.drawImage(
		track_left(middleWidth / 4, middleHeight * 2 - middleHeight / 8, 'left'),
		middleWidth / 3 - (middleWidth /4),
		middleHeight / 16
	);

	tank.drawImage(
		track_right(middleWidth / 4, middleHeight * 2 - middleHeight / 8, 'right'),
		middleWidth / 3 + middleWidth * 2 - (middleWidth / 1.5),
		middleHeight / 16
	);
	return document.getElementById("tank");
}