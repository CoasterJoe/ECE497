//Joseph Militello
//9/15/16
//This is the second itteration of the EthASketch program. This one will involve buttons.

//Beagle Bone Stuff
//#!/usr/bin/env node
var b = require('bonescript');


//i2c stuff
//var time = 1000; 
var i2c = require('i2c');
var matrix = 0x70;
var port = '/dev/i2c-2';
var LEDSize = 16;

//var screen = [0x00,0xFF,0x00, 0xFF,0x00,0xFF, 0x00, 0xFF, 0x00, 0xFF, 0x00,0xFF, 0x00,0xFF, 0x00, 0xFF];
var count = 0;
var screen = new Array(16);



iScreen();


//i2c screen Inital Screen
var wire = new i2c(0x70,{
	device: '/dev/i2c-2'
});


wire.writeByte(0x21, function(err){
	wire.writeByte(0x81, function(err){
		wire.writeByte(0xe7, function(err){	
			setTimeout(doScreen, 0);
		});
	});
});


var width = 8;
var height = 8;

var xCord = 0;
var yCord = 0;
addScreen();

xCord = 0; 
yCord = 1;
addScreen();

xCord = 0;
yCord = 2;
addScreen();

xCord = 0;
yCord = 3;
addScreen();


function doScreen(){
//	console.log("Doing Screen");
	wire.writeBytes(0x00, screen, function(err){
	});
}
//Shows initial Screen
function iScreen(){
	for(count=0; count<16; count=count+2){
		screen[count]=0xFF;
		screen[count+1]=0x00;
	}
}

function addScreen(){
	var holder = Math.pow(2,yCord);
	screen[2*xCord]=screen[2*xCord]-holder;
	screen[2*xCord+1]=holder+screen[2*xCord+1];
	doScreen();	
}

