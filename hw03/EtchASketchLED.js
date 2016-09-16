//Joseph Militello
//9/15/16
//This is the second itteration of the EthASketch program. This one will involve buttons.

//Beagle Bone Stuff
//#!/usr/bin/env node
var b =require('bonescript');
console.log("Starting Program");

//i2c stuff
//var time = 1000; 
var i2c = require('i2c');
var matrix = 0x70;
var port = '/dev/i2c-2';
var LEDSize = 16;


var count = 0;
var screen = new Array(16);

var status = 0;


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

//Assign pins
var up = 'P9_14';
var down = 'P9_23';
var left = 'P9_24';
var right ='P9_26';
var clear = 'P9_27';

//Assign Pin values
b.pinMode(up, b.INPUT,7,'pulldown');
b.pinMode(down,b.INPUT,7,'pulldown');
b.pinMode(left,b.INPUT,7,'pulldown');
b.pinMode(right,b.INPUT,7,'pulldown');
b.pinMode(clear,b.INPUT,7,'pulldown');

//attachInterrups
b.attachInterrupt(up,true,b.FALLING, goUp);
b.attachInterrupt(down,true,b.FALLING, goDown);
b.attachInterrupt(left,true,b.FALLING, goLeft);
b.attachInterrupt(right,true,b.FALLING, goRight);
b.attachInterrupt(clear,true,b.FALLING, clearScreen);


status = 1;
doScreen();
console.log("Ready");


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
function clearScreen(){
	console.log("Clear");
	iScreen();
	addScreen();
}

function addScreen(){
	var holder = Math.pow(2,yCord);
	screen[2*xCord]=screen[2*xCord]-holder;
	screen[2*xCord+1]=holder+screen[2*xCord+1];
	doScreen();	
}

function checkValue(){
	if(xCord<0){
		xCord=0;
	}
	if(xCord>=width){
		xCord = width-1;
	}

	if(yCord<0){
		yCord=0;
	}
	if(yCord>=height){
		yCord=height-1;
	}
}


function goUp(){
	console.log("UP");
	if(status===0){
		return;
	}	
	yCord=yCord+1;
	checkValue();
	addScreen();
}

function goDown(){
	console.log("DOWN");
	if(status===0){
		return;
	}
	yCord=yCord-1;
	checkValue();
	addScreen();
}
function goLeft(){
	console.log("LEFT");
	if(status===0){
		return;
	}	
	xCord=xCord-1;
	checkValue();
	addScreen();
}
function goRight(){
	console.log("RIGHT");
	if(status===0){
		return;
	}
	xCord=xCord+1;
	checkValue();
	addScreen();
}

