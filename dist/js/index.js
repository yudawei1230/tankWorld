/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(width,height,directive){
var c=document.getElementById("track_"+directive);
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var map = document.getElementById("map").getContext("2d");
var tank = __webpack_require__(4)
document.getElementById("map").width = window.innerWidth
document.getElementById("map").height = window.innerHeight
map.stroke();
map.drawImage(tank(),100,window.innerHeight-100)
map.drawImage(tank(),200,window.innerHeight-100)
map.drawImage(tank(),300,window.innerHeight-100)
map.drawImage(tank(),400,window.innerHeight-100)
map.drawImage(tank(),500,window.innerHeight-100)



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(width,height){
	var battery = __webpack_require__(1);
	var body = __webpack_require__(2);
	var track_left = __webpack_require__(0);
	var track_right = __webpack_require__(0);

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

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map