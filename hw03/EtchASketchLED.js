//Joseph Militello
//9/7/16
//This is the second itteration of the EthASketch program. This one will involve buttons.

//Beagle Bone Stuff
//#!/usr/bin/env node
var b = require('bonescript');


//i2c stuff
//var time = 1000; 
var matrix = 0x70;
var port = '/dev/i2c-2'

var smile = [0x00, 0x3c, 0x00, 0x42, 0x28, 0x89, 0x04, 0x85, 
 0x04, 0x85, 0x28, 0x89,0x00, 0x42, 0x00, 0x3c];


//Assigning pin values
var up = 'P9_42';
var down = 'P9_41';
var left = 'P9_18';
var right = 'P9_17';
var clear = 'P9_21';

b.pinMode(up,b.INPUT, 7, 'pulldown');
b.pinMode(down, b.INPUT, 7, 'pulldown');
b.pinMode(left,b.INPUT,7,'pulldown');
b.pinMode(right,b.INPUT,7,'pulldown');
b.pinMode(clear,b.INPUT,7,'pulldown');


//i2c screen
b.i2cOpen(port, matrix);
b.i2cWriteByte(port, 0x21);
b.i2cWriteByte(port, 0x81);

b.i2cWriteBytes(port, 0x00, smile);

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



//Funciont Clear Map
function clearMap(){
	var xCount = 0;
	var yCount=0;
	for(xCount=0; xCount<width; xCount++){
		for(yCount=0;yCount<height; yCount++){
			spots[xCount][yCount]=" ";
		}
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
	var drawX=0;
	var drawY=0;
	var printStringLine= "";
	for(drawX=0; drawX<width;drawX++){
		printStringLine +="\t"+drawX;
	}
	console.log(printStringLine);

	var printString="";
	//Print out vertically
	for(drawY=0; drawY<height; drawY++){
		 printString=""+drawY;
		for(drawX=0; drawX<width; drawX++){
			printString+="\t"+spots[drawX][drawY];
		}
		//printString+="|";
		console.log(printString);
	}

	//console.log(printString);
}
