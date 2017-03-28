var map = document.getElementById("map").getContext("2d");
var tank = require('./tank')
document.getElementById("map").width = window.innerWidth
document.getElementById("map").height = window.innerHeight
map.stroke();
map.drawImage(tank(),100,window.innerHeight-100)
map.drawImage(tank(),200,window.innerHeight-100)
map.drawImage(tank(),300,window.innerHeight-100)
map.drawImage(tank(),400,window.innerHeight-100)
map.drawImage(tank(),500,window.innerHeight-100)

