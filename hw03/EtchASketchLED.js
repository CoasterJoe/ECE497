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
var screen = new Array(LEDSize);


var count = 0;

//Initialize Screen
for(count=0; counter<LEDSize/2; count=count+2){
	screen[count]=0;
	screen[count]=0xFF;
}



//Assigning pin values
var up = 'P9_27';
var down = 'P9_28';
var left = 'P9_29';
var right = 'P9_30';
var clear = 'P9_31';

b.pinMode(up,b.INPUT, 7, 'pulldown');
b.pinMode(down, b.INPUT, 7, 'pulldown');
b.pinMode(left,b.INPUT,7,'pulldown');
b.pinMode(right,b.INPUT,7,'pulldown');
b.pinMode(clear,b.INPUT,7,'pulldown');


//i2c screen Inital Screen
var wire = new i2c(0x70,{
	device: '/dev/i2c-2'
});
wire.writeByte(0x21, function(err){
	wire.writeByte(0x81, function(eff){
		setTimeout(doScreen, 0);
	});
});

//edit these variables for differnt size worlds

var width = 8;
var height = 8;


console.log('Etch-A-Sketch Program Running');

var status = 0;
if(width<=0||height<=0){
   console.log('Error, width and heigth must be greater than zero');
   return;
}

//Initial Starting Point

var xCord =width/2;
var yCord =height/2;


//create 2d array for spots

var spots = new Array(width);
var counter=0;
for(counter=0; counter<width; counter++){
	spots[counter]=new Array(height);
}

//initialize spots
var countX=0;
var countY=0;
for(coutX=0; countX<width; countX++){
	for(countY=0; countY<height; countY++){
		spots[countX][countY]=" ";
	}
}

//initilize interrups
b.attachInterrupt(up, true, b.FALLING, updateUp);
b.attachInterrupt(down, true,b.FALLING, updateDown);
b.attachInterrupt(left, true, b.FALLING, updateLeft);
b.attachInterrupt(right, true,b.FALLING, updateRight);
b.attachInterrupt(clear, true,b.FALLING, clearMap);

// draw map Initially first

status = 1;
clearMap();

function doScreen(){
	wire.writeBytes(0x00, screen, function(err){
	});
}


//Funciont Clear Map
function clearMap(){
	var xCount = 0;
	var yCount=0;
	for(xCount=0; xCount<width; xCount++){
		for(yCount=0;yCount<height; yCount++){
			spots[xCount][yCount]=" ";
		}
	}
	//Initialize Screen
	for(count=0; counter<LEDSize/2; count=count+2){
		screen[count]=0;
		screen[count]=0xFF;
	}
	drawMap();
}


//Functions for updating position
function updateUp(x){
	console.log('Up');
	yCord=yCord-1;
	if(yCord<0){
		yCord = 0;
	}
	drawMap();	
}
function updateDown(){
console.log('Down');
	yCord = yCord+1;
	if(yCord>=height){
		yCord = height-1;
	}
	drawMap();
}
function updateLeft(){
console.log('Left');
	xCord = xCord-1;
	if(xCord<0){
		xCord= 0;
	}
	drawMap();
}
function updateRight(){
console.log('Right');
	xCord =xCord+1;
	if(xCord>=width){
		xCord = width-1;
	}
	drawMap(); 
}

//draw map function
function drawMap(){
	if(status===0){
		return;
	}
	spots[xCord][yCord]="X";
	
	var countX = 0;
	var countY = 0;
	

	//Get data in correct form
	for(countX = 0; countX<width; countX++){
		for(countY=0; countY<height; countY++){
			if(spots[countX][countY]==="X"){
				screen[countX*2]=screen[countX*2]+2^countY;
			}
		}
		screen[countX*2+1]=0x00;	
	}


	wire.writeByte(0x21, function(err){
		wire.writeByte(0x81, function(eff){
			setTimeout(doScreen, 0);
		});
	});

	//console.log(printString);
}
